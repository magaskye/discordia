/**
 * GitHub Pages PREVIEW branch only; main never has this file.
 * Gate all static Web assets with a server-side secret in Cloudflare Pages
 * preview environment variables. Browser JS never receives the access code.
 */
const cleanCode=value=>String(value??'').trim().toUpperCase();
const same=(left,right)=>{
  const a=String(left||''),b=String(right||'');
  if(!a||a.length!==b.length)return false;
  let diff=0;
  for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^b.charCodeAt(i);
  return diff===0;
};
const expectedSession=async code=>{
  code=cleanCode(code);
  const bytes=await crypto.subtle.digest('SHA-256',
    new TextEncoder().encode('discordia-web-testers-cookie-v1:'+code));
  return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
};
const sha256Hex=async value=>{
  const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(value)));
  return Array.from(new Uint8Array(bytes),b=>b.toString(16).padStart(2,'0')).join('');
};
const safeReturnPath=value=>typeof value==='string'&&/^\/r\/[a-f0-9]{48}\/?$/.test(value)?value:'/';
const lockPage=(failure='',fromPath='/')=>{
  const safePath=safeReturnPath(fromPath);
  const alert=failure==='origin'
    ?'<p class="lock-alert" role="alert">O navegador bloqueou a validação por origem. Abra diretamente o link da prévia e tente novamente.</p>'
    :failure==='code'
    ?'<p class="lock-alert" role="alert">O código não corresponde ao segredo salvo na Cloudflare para Preview. Confira o código e tente novamente.</p>':'';
  const html=`<!doctype html><html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#0b0d1a"><meta name="robots" content="noindex,nofollow">
<title>Discórdia Web · Acesso para testers</title>
<style>
:root{color-scheme:dark;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}
*{box-sizing:border-box}
html,body{min-height:100%;margin:0}
body{min-height:100dvh;display:grid;place-items:center;overflow-x:hidden;color:#f4f6ff;
background:radial-gradient(ellipse 55% 55% at 20% 40%,#302557 0%,transparent 74%),
radial-gradient(ellipse 50% 45% at 90% 75%,#12374f66 0%,transparent 75%),#0b0d1a;
padding:24px;isolation:isolate}
body:before{content:"";position:fixed;inset:0;z-index:-2;background-image:linear-gradient(90deg,#aba1e20b 1px,transparent 1px),linear-gradient(#aba1e20b 1px,transparent 1px);background-size:62px 62px;pointer-events:none}
.glow{position:fixed;width:420px;height:420px;border:1px solid #8c7ce41e;border-radius:50%;pointer-events:none;z-index:-1;left:-160px;bottom:-160px;box-shadow:0 0 0 70px #8c7ce407,0 0 0 155px #8c7ce406}
.wrap{display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,420px);align-items:center;gap:clamp(35px,5vw,95px);width:min(1120px,100%)}
.hero{max-width:590px}
.brand{display:flex;align-items:center;gap:14px;margin-bottom:65px}
.brand-mark{width:57px;height:57px;border:2px solid #8a91d7;border-radius:20px;display:grid;place-items:center;transform:rotate(-14deg);background:linear-gradient(135deg,#393474,#1b4d6d);box-shadow:0 0 42px #6f71c84d}
.brand-mark:before{content:"";display:block;width:33px;height:33px;border:4px solid #c5e0ff;border-radius:50%;box-shadow:inset 0 0 0 5px #433b8f}
.brand-text strong{display:block;font-weight:900;letter-spacing:.08em;font-size:24px}
.brand-text small{display:block;margin-top:4px;color:#aeb8d8;font-size:10px;font-weight:700;letter-spacing:.2em}
.eyebrow{display:flex;align-items:center;gap:9px;color:#b7dfff;font-size:11px;font-weight:800;letter-spacing:.21em}
.dot{width:7px;height:7px;background:#6ee3ca;border-radius:50%;box-shadow:0 0 12px #6ee3ca}
h1{margin:20px 0;font-size:clamp(39px,4.8vw,67px);line-height:1.06;letter-spacing:-.06em;font-weight:950}
h1 em{font-style:normal;color:transparent;background:linear-gradient(100deg,#a9e9ff,#b7a2fc,#f4a6d3);-webkit-background-clip:text;background-clip:text}
.hero p{font-size:15px;line-height:1.8;color:#afb7d4;max-width:460px}
.benefits{display:flex;gap:12px;flex-wrap:wrap;margin-top:31px}
.benefits span{padding:10px 13px;border-radius:999px;border:1px solid #504b75;background:#26233f94;color:#cbd8ec;font-size:11px}
.card{padding:clamp(22px,3vw,36px);border:1px solid #535179;border-radius:26px;background:linear-gradient(145deg,#23213d,#15192b);box-shadow:0 25px 80px #0008,inset 0 1px #ffffff17}
.card-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:17px}
.card-top span{color:#9adff1;letter-spacing:.16em;font-weight:850;font-size:10px}
.card-lock{width:40px;height:40px;display:grid;place-items:center;border-radius:13px;background:#343558;color:#b9c7f0}
.card-lock svg{width:21px;height:21px}
.card h2{font-size:27px;line-height:1.2;letter-spacing:-.04em;margin:0 0 10px}
.card p{font-size:13px;color:#b2bad0;line-height:1.7;margin:0 0 14px}
.card .lock-alert{border:1px solid #c28b87;background:#50323888;color:#ffe1dc;padding:11px;border-radius:10px;font-size:12px}
label{display:block;margin:22px 0 10px;font-size:12px;color:#e1e7ff;font-weight:750}
input{display:block;width:100%;min-height:51px;padding:13px 15px;color:white;font-size:14px;background:#0c1328;border:1px solid #555477;border-radius:12px;outline:0}
input:focus{border-color:#8fdef5;box-shadow:0 0 0 3px #65a9cf23}
button{width:100%;min-height:49px;margin-top:17px;border:1px solid #a0e7fc;border-radius:12px;
background:linear-gradient(110deg,#86dff5,#9b8bee);font:850 14px system-ui,-apple-system,"Segoe UI",sans-serif;color:#10152c;cursor:pointer;transition:transform .15s,filter .15s}
button:hover{filter:brightness(1.07);transform:translateY(-1px)}
button:focus-visible,a:focus-visible{outline:3px solid #80d5ff;outline-offset:3px}
.privacy{display:flex;gap:9px;align-items:center;margin-top:21px;color:#99a9c8;font-size:11px;line-height:1.55}
.privacy svg{flex:none;color:#82dec8}
.footer{margin-top:26px;padding-top:19px;border-top:1px solid #454260;display:flex;justify-content:space-between;gap:15px;align-items:center}
.footer span{color:#929bb8;font-size:10px}
.footer a{color:#b0dff5;font-size:11px;font-weight:750;text-decoration:none}
.footer a:hover{text-decoration:underline}
@media(max-width:800px){body{padding:18px}.wrap{grid-template-columns:1fr;max-width:520px;gap:22px}.brand{margin-bottom:27px}.hero h1{font-size:clamp(35px,8.2vw,50px);margin:13px 0}.hero p{font-size:13px;line-height:1.65}.benefits{margin-top:15px}.card{padding:24px}}
@media(max-width:460px){.brand-mark{width:46px;height:46px;border-radius:15px}.brand-text strong{font-size:19px}.brand-text small{font-size:8px}.hero h1{font-size:35px}.benefits span{font-size:10px;padding:8px 10px}.card{padding:21px}.card h2{font-size:24px}}
@media(prefers-reduced-motion:reduce){button{transition:none}button:hover{transform:none}}
</style></head>
<body><div class="glow" aria-hidden="true"></div>
<div class="wrap">
 <section class="hero"><div class="brand"><div class="brand-mark" aria-hidden="true"></div>
  <div class="brand-text"><strong>DISCÓRDIA</strong><small>WEB · PRÉVIA PRIVADA</small></div></div>
  <span class="eyebrow"><i class="dot"></i> SUA GALERA, EM QUALQUER TELA</span>
  <h1>SUA GALERA.<br>SEU JOGO.<br><em>SEU LUGAR.</em></h1>
  <p>O Discórdia Web já tem salas por convite, chat e compartilhamento de tela em testes.
     Entre na prévia para conhecer a experiência.</p>
  <div class="benefits"><span>Salas por link</span><span>Contas existentes</span><span>Tela cheia</span></div>
 </section>
 <main class="card"><div class="card-top"><span>ACESSO PARA TESTERS</span>
  <div class="card-lock" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
   <rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3"/></svg></div></div>
  <h2>O universo é de vocês.</h2><p>Digite o código de acesso compartilhado
    pela equipe para abrir a versão privada.</p>
  ${alert}
  <form method="post" action="/__preview_unlock" autocomplete="off">
   <input type="hidden" name="returnPath" value="${safePath}">
   <label for="code">Código dos testers</label>
   <input id="code" type="password" name="code" required maxlength="90"
     autocomplete="off" placeholder="Seu código de acesso">
   <button type="submit">Entrar na prévia</button>
  </form>
  <div class="privacy"><svg width="17" height="17" viewBox="0 0 24 24"
   fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
   <path d="M12 22s9-4 9-11V5l-9-3-9 3v6c0 7 9 11 9 11Z"/>
   <path d="m9 12 2 2 4-4"/></svg>
   A prévia mantém salas separadas de servidores privados.</div>
  <div class="footer"><span>DISCÓRDIA WEB · BETA FECHADA</span>
    <a href="https://discordia-ari.pages.dev/" rel="noopener noreferrer">Site oficial ↗</a></div>
 </main>
</div></body></html>`;
  return new Response(html,{
    status:failure?401:200,
    headers:{
      'Content-Type':'text/html; charset=utf-8',
      'Cache-Control':'no-store',
      'X-Robots-Tag':'noindex,nofollow',
      'Referrer-Policy':'no-referrer',
      'Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'"
    }
  });
};
export default {
  async fetch(request,env){
    // Fail CLOSED if the secrets are absent in this preview deployment.
    if(!env.WEB_PREVIEW_ACCESS_CODE)
      return new Response('Ambiente de teste indisponível',{status:503,
        headers:{'Cache-Control':'no-store','X-Robots-Tag':'noindex,nofollow'}});
    const sessionValue=await expectedSession(env.WEB_PREVIEW_ACCESS_CODE);
    const u=new URL(request.url);
    if(u.pathname==='/__preview_unlock'){
      if(request.method!=='POST')return lockPage();
      const origin=request.headers.get('Origin');
      const fetchSite=request.headers.get('Sec-Fetch-Site');
      // Browser privacy settings can report Origin: null for same-origin
      // form navigation; Sec-Fetch-Site is browser-controlled and reliable.
      // Block cross-site browser posts; use strict Origin as fallback for
      // clients that do not send Fetch Metadata headers.
      if(fetchSite
        ? (fetchSite!=='same-origin' && fetchSite!=='none')
        : (origin!==u.origin))
        return lockPage('origin');
      let data;
      try{data=await request.formData();}catch{return lockPage('code');}
      if(!same(cleanCode(data.get('code')),cleanCode(env.WEB_PREVIEW_ACCESS_CODE)))return lockPage('code',data.get('returnPath'));
      return new Response(null,{
        status:303,
        headers:{
          'Location':safeReturnPath(data.get('returnPath')),
          'Set-Cookie':'__discordia_preview='+sessionValue+
            '; Path=/; Max-Age=604800; HttpOnly; Secure; SameSite=Lax',
          'Cache-Control':'no-store',
          'X-Robots-Tag':'noindex,nofollow'
        }
      });
    }
    const cookie=request.headers.get('Cookie')||'';
    const token=cookie.split(';').map(c=>c.trim()).find(c=>c.startsWith('__discordia_preview='))
      ?.slice('__discordia_preview='.length)||'';
    if(!same(token,sessionValue))return lockPage('',u.pathname);
    // The password-protected Pages preview is the only public ingress for
    // Quick Rooms. Durable Objects are bound in Pages Preview, never Production.
    const roomSocket=u.pathname.match(/^\/api\/rooms\/([a-f0-9]{48})\/connect$/);
    if(u.pathname==='/api/rooms' || u.pathname==='/api/rooms/health' || roomSocket){
      const ready=Boolean(env.QUICK_ROOMS&&env.QUICK_ROOM_ADMISSION);
      const respond=(data,status=200)=>new Response(JSON.stringify(data),{
        status,headers:{'Content-Type':'application/json; charset=utf-8',
          'Cache-Control':'no-store','X-Robots-Tag':'noindex,nofollow'}
      });
      if(!ready)return respond({error:'quick_rooms_unavailable'},503);
      if(u.pathname==='/api/rooms/health' && request.method==='GET')
        return respond({ok:true,staging:true,roomsEnabled:true});
      if(u.pathname==='/api/rooms'&&request.method==='POST'){
        const origin=request.headers.get('Origin');
        const site=request.headers.get('Sec-Fetch-Site');
        const trusted=site?(site==='same-origin'||site==='none'):(origin===u.origin);
        if(!trusted)return respond({error:'same_origin_required'},403);
        try{
          const ip=request.headers.get('CF-Connecting-IP')||'unknown';
          // The Durable Object receives a keyed hash, never the real IP.
          const clientHash=await expectedSession('client:'+ip+':'+env.WEB_PREVIEW_ACCESS_CODE);
          const allowed=await env.QUICK_ROOM_ADMISSION.getByName('preview-global').allow(clientHash);
          if(!allowed)return respond({error:'room_create_rate_limited'},429);
          const randomHex=n=>Array.from(crypto.getRandomValues(new Uint8Array(n)),
            b=>b.toString(16).padStart(2,'0')).join('');
          const roomId=randomHex(24),hostKey=randomHex(32);
          const hostHash=await sha256Hex(hostKey);
          const created=await env.QUICK_ROOMS.getByName(roomId).createRoom(hostHash);
          if(!created)return respond({error:'room_collision'},409);
          return respond({roomId,hostKey,expiresInSeconds:7200},201);
        }catch{return respond({error:'room_service_unavailable'},503);}
      }
      if(roomSocket&&request.method==='GET'&&
         request.headers.get('Upgrade')?.toLowerCase()==='websocket'){
        try{return await env.QUICK_ROOMS.getByName(roomSocket[1]).fetch(request);}
        catch{return respond({error:'room_service_unavailable'},503);}
      }
      return respond({error:'route_not_found'},404);
    }
    if(request.method!=='GET'&&request.method!=='HEAD')
      return new Response('Método não permitido',{status:405});
    const response=await env.ASSETS.fetch(request);
    const headers=new Headers(response.headers);
    headers.set('X-Robots-Tag','noindex,nofollow');
    headers.set('Referrer-Policy','no-referrer');
    // All assets remain private to the tester preview; do not use shared caches.
    headers.set('Cache-Control','private,no-store');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
};
