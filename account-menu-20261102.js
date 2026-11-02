/* Discórdia: prévia do perfil público no cabeçalho do GitHub Pages.
 * Firebase Hosting autentica a conta; o GitHub Pages recebe SOMENTE dados
 * públicos de exibição pelo fragmento da volta na mesma aba. Estes dados
 * NUNCA autorizam acesso, representam uma sessão Firebase nem contêm tokens.
 * O fragmento é removido imediatamente da URL. O cache visual é apenas da aba.
 */
(()=>{
 'use strict';
 const PORTAL='https://discordia-contas-573e7.web.app/';
 const PREFIX='#discordia_profile=';
 const KEY='discordia:visual-profile:v1';
 const MAX_AGE=6*60*60*1000;
 const find=id=>document.getElementById(id);
 const entry=find('nav-account-entry');
 const profile=find('nav-auth-profile');
 const trigger=find('nav-auth-trigger'),menu=find('nav-auth-menu');
 const name=find('nav-auth-name'),avatar=find('nav-auth-avatar'),handle=find('nav-auth-handle');
 const account=find('nav-auth-go-account'),signout=find('nav-auth-signout');
 if(!entry||!profile||!trigger||!menu||!name||!avatar||!handle||!account||!signout)return;
 const validImage=v=>typeof v==='string'&&v.length<=2000&&/^https:\/\/[^\s]+$/i.test(v);
 const clip=(v,max)=>typeof v==='string'?v.slice(0,max).trim():'';
 const clamp=(v,min,max,defaultValue)=>{
  const n=Number(v);
  return v!==undefined&&v!==null&&Number.isFinite(n)?Math.min(max,Math.max(min,Math.round(n))):defaultValue;
 };
 const close=()=>{menu.hidden=true;trigger.setAttribute('aria-expanded','false')};
 function normalize(input){
  if(!input||typeof input!=='object'||Array.isArray(input)||input.version!==1)return null;
  if(!Number.isFinite(input.issuedAt)||input.issuedAt>Date.now()+60000||Date.now()-input.issuedAt>MAX_AGE)return null;
  const displayName=clip(input.displayName,50);
  const handle=clip(input.handle,16);
  if(!displayName&&!handle)return null;
  return {version:1,issuedAt:input.issuedAt,displayName,handle,
   avatar:validImage(input.avatar)?input.avatar:'',
   avatarCrop:{zoom:clamp(input.avatarCrop?.zoom,70,250,100),
    x:clamp(input.avatarCrop?.x,-70,70,0),y:clamp(input.avatarCrop?.y,-70,70,0)}};
 }
 function store(value){
  try{
   if(value)sessionStorage.setItem(KEY,JSON.stringify(value));
   else sessionStorage.removeItem(KEY);
  }catch{/* Aba com armazenamento bloqueado: exibir apenas durante esta navegação. */}
 }
 function read(){
  try{return normalize(JSON.parse(sessionStorage.getItem(KEY)||'null'))}
  catch{return null}
 }
 function show(p){
  entry.hidden=!!p;
  profile.hidden=!p;
  if(!p){close();return;}
  const display=p.displayName||p.handle;
  name.textContent=display;
  handle.textContent=p.handle?'@'+p.handle:'Perfil Discórdia';
  avatar.replaceChildren();
  if(p.avatar){
   const img=document.createElement('img');
   img.alt='';img.src=p.avatar;img.referrerPolicy='no-referrer';
   img.style.transform='translate('+p.avatarCrop.x+'%, '+p.avatarCrop.y+'%) scale('+(p.avatarCrop.zoom/100)+')';
   img.style.transformOrigin='center center';
   img.onerror=()=>{if(img.isConnected)avatar.textContent=(display||'D').charAt(0).toUpperCase()};
   avatar.append(img);
  }else avatar.textContent=(display||'D').charAt(0).toUpperCase();
 }
 function hydrate(){
  let p=null;
  if(location.hash.startsWith(PREFIX)){
   const raw=location.hash.slice(PREFIX.length);
   if(raw==='out'){store(null);}
   else{
    try{p=normalize(JSON.parse(decodeURIComponent(raw)))}
    catch{p=null}
    store(p);
   }
   // Não deixar nome ou URL de avatar no histórico/endereço exibido.
   history.replaceState(history.state,'',location.pathname+location.search);
  }
  show(p||read());
 }
 function goPortal(logout){
  close();
  if(logout){store(null);show(null);}
  window.location.assign(logout?PORTAL+'?site_logout=1':PORTAL);
 }
 trigger.addEventListener('click',()=>{
  const opening=menu.hidden;menu.hidden=!opening;
  trigger.setAttribute('aria-expanded',String(opening));
 });
 account.addEventListener('click',()=>goPortal(false));
 signout.addEventListener('click',()=>goPortal(true));
 document.addEventListener('pointerdown',e=>{if(!profile.contains(e.target))close()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 function mountPortalProbe(){
  // Opcional: alguns navegadores isolam o armazenamento do Firebase em iframes.
  // Quando isso ocorrer, manter o retorno explícito do portal como alternativa.
  const origin=new URL(PORTAL).origin;
  const frame=document.createElement('iframe');
  frame.src=PORTAL+'?site_bridge=frame';
  frame.title='Verificação privada da sessão Discórdia';
  frame.tabIndex=-1;
  frame.setAttribute('aria-hidden','true');
  frame.setAttribute('referrerpolicy','no-referrer');
  frame.className='account-session-bridge-frame';
  const accept=event=>{
   if(event.origin!==origin||event.source!==frame.contentWindow)return;
   const payload=event.data;
   if(payload?.type!=='discordia:account-frame-state:v1')return;
   if(payload.authenticated!==true)return; // Terceiros podem isolar a sessão; não sobrescrever dados já confirmados na aba.
   const profile=normalize(payload);
   if(!profile)return;
   store(profile);
   show(profile);
  };
  window.addEventListener('message',accept);
  const ping=()=>frame.contentWindow?.postMessage({type:'discordia:account-frame-ping:v1'},origin);
  frame.addEventListener('load',ping);
  window.addEventListener('pageshow',ping);
  document.body.appendChild(frame);
 }
 window.addEventListener('pageshow',hydrate);
 hydrate();
 mountPortalProbe();
})();
