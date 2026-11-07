/**
 * Discórdia Web — limited public beta gateway.
 * Public GET frontend and 48-hex room invites; Firebase verified members only
 * may CREATE a room. Guests can JOIN by possession of a room link, not access
 * the Firebase social database. No privileged Firebase or TURN credentials.
 */
export const BETA_ORIGIN='https://discordia-web-beta.pages.dev';
const ROOM=/^\/r\/([a-f0-9]{48})\/?$/;
const WS=/^\/api\/rooms\/([a-f0-9]{48})\/connect$/;
const randomHex=n=>Array.from(crypto.getRandomValues(new Uint8Array(n)),
  b=>b.toString(16).padStart(2,'0')).join('');
const sha256Hex=async value=>{
  const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(value)));
  return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
};
const json=(data,status=200)=>new Response(JSON.stringify(data),{
  status,headers:{'Content-Type':'application/json; charset=utf-8',
    'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}
});
const allowedPost=request=>{
  const url=new URL(request.url);
  const site=request.headers.get('Sec-Fetch-Site');
  const origin=request.headers.get('Origin');
  return url.origin===BETA_ORIGIN &&
    (site?site==='same-origin':origin===BETA_ORIGIN);
};
const allowedSocket=request=>{
  // WebSocket always carries a browser-generated Origin. Exact match required.
  return new URL(request.url).origin===BETA_ORIGIN&&
    request.headers.get('Origin')===BETA_ORIGIN;
};
const fingerprint=async(request,prefix)=>{
  // Cloudflare-controlled connecting IP is used only to make a nonreversible
  // rate-limit key. It is never returned to clients or stored as raw data.
  const ip=request.headers.get('CF-Connecting-IP')||'unknown';
  return sha256Hex(prefix+':'+ip);
};
export async function verifyFirebaseIdToken(token,apiKey,requester=fetch){
  if(typeof token!=='string'||token.length<32||token.length>6000||
     !/^[A-Za-z0-9_.-]+$/.test(token)||
     typeof apiKey!=='string'||!/^AIza[A-Za-z0-9_-]{25,70}$/.test(apiKey))
    return null;
  try{
    const response=await requester(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key='+encodeURIComponent(apiKey),
      {method:'POST',headers:{'Content-Type':'application/json'},
       body:JSON.stringify({idToken:token}),signal:AbortSignal.timeout(6500)});
    if(!response.ok)return null;
    const body=await response.json();
    const account=Array.isArray(body?.users)&&body.users.length===1?body.users[0]:null;
    if(!account||account.emailVerified!==true||account.disabled===true||
       typeof account.localId!=='string'||!account.localId||
       account.localId.length>128)return null;
    return {uid:account.localId};
  }catch{return null;}
}
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(url.origin!==BETA_ORIGIN)return json({error:'unrecognized_host'},421);
  const connected=Boolean(env.QUICK_ROOMS&&env.QUICK_ROOM_ADMISSION);
  if(url.pathname==='/api/rooms/health'&&request.method==='GET')
    return json({status:connected?'ready':'offline',mode:'limited-public-beta',
      guestMode:'invite',createMode:'verified-firebase-account'},connected?200:503);
  if(url.pathname==='/api/rooms'&&request.method==='POST'){
    if(!allowedPost(request))return json({error:'same_origin_required'},403);
    if(!connected)return json({error:'room_service_unavailable'},503);
    const bearer=request.headers.get('Authorization')||'';
    if(!/^Bearer [A-Za-z0-9_.-]{32,6000}$/.test(bearer))
      return json({error:'login_required'},401);
    // Firebase verifies the ID token on the server and checks emailVerified.
    const account=await verifyFirebaseIdToken(bearer.slice(7),env.FIREBASE_WEB_API_KEY);
    if(!account)return json({error:'verified_account_required'},403);
    try{
      const clientHash=await fingerprint(request,'public-ip');
      const userHash=await sha256Hex('public-uid:'+account.uid);
      const allowed=await env.QUICK_ROOM_ADMISSION.getByName('public-global').allow(clientHash,userHash);
      if(!allowed)return json({error:'room_creation_limited'},429);
      const roomId=randomHex(24),hostKey=randomHex(32);
      const hostHash=await sha256Hex(hostKey);
      const created=await env.QUICK_ROOMS.getByName(roomId).createRoom(hostHash);
      if(!created)return json({error:'room_collision'},409);
      return json({roomId,hostKey,expiresInSeconds:7200},201);
    }catch{return json({error:'room_service_unavailable'},503);}
  }
  const roomSocket=url.pathname.match(WS);
  if(roomSocket&&request.method==='GET'&&
    request.headers.get('Upgrade')?.toLowerCase()==='websocket'){
    if(!allowedSocket(request))return json({error:'same_origin_required'},403);
    if(!connected)return json({error:'room_service_unavailable'},503);
    try{
      const id=roomSocket[1],clientHash=await fingerprint(request,'public-join');
      const admitted=await env.QUICK_ROOM_ADMISSION.getByName('public-global').allowJoin(clientHash);
      if(!admitted)return json({error:'room_connection_limited'},429);
      return await env.QUICK_ROOMS.getByName(id).fetch(request);
    }catch{return json({error:'room_service_unavailable'},503);}
  }
  if(url.pathname.startsWith('/api/')||url.pathname.startsWith('/__preview_unlock'))
    return json({error:'not_found'},404);
  if(request.method!=='GET'&&request.method!=='HEAD')
    return new Response('method not allowed',{status:405,
      headers:{'Allow':'GET, HEAD','Cache-Control':'no-store'}});
  let response;
  if(ROOM.test(url.pathname)){
    const siteRoot=new URL('/',url);
    const indexReq=new Request(siteRoot,request);
    response=await env.ASSETS.fetch(indexReq);
  }else response=await env.ASSETS.fetch(request);
  const headers=new Headers(response.headers);
  headers.set('X-Content-Type-Options','nosniff');
  headers.set('Referrer-Policy','no-referrer');
  headers.set('X-Frame-Options','DENY');
  headers.set('Permissions-Policy','camera=(self), microphone=(self), display-capture=(self)');
  headers.set('Content-Security-Policy',[
    "default-src 'self'","script-src 'self'","style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:","font-src 'self' data:",
    "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://*.firebasedatabase.app wss://*.firebasedatabase.app",
    "frame-ancestors 'none'","object-src 'none'","base-uri 'self'","form-action 'self'"
  ].join('; '));
  if(ROOM.test(url.pathname)||url.pathname==='/'||url.pathname==='/index.html')
    headers.set('Cache-Control','no-store');
  return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
 }
};
