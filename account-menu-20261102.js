/* Conta Discórdia no site oficial.
 * Navegação na mesma aba: não cria popup nem compartilha tokens/credenciais.
 * O domínio do portal permanece responsável pela autenticação e saída.
 * O painel visual só mostra dados de uma sessão já confirmada; não inventa login.
 */
(()=>{
 'use strict';
 const ORIGIN='https://discordia-contas-573e7.web.app';
 const STATE='discordia:account-state:v1';
 const READY='discordia:account-ready:v1';
 const PING='discordia:account-ping:v1';
 const LOGOUT='discordia:account-logout:v1';
 const find=id=>document.getElementById(id);
 const entry=find('nav-account-entry');
 const profile=find('nav-auth-profile');
 const trigger=find('nav-auth-trigger');
 const menu=find('nav-auth-menu');
 const name=find('nav-auth-name'),avatar=find('nav-auth-avatar'),handle=find('nav-auth-handle');
 const account=find('nav-auth-go-account'),signout=find('nav-auth-signout');
 if(!entry||!profile||!trigger||!menu||!name||!avatar||!handle||!account||!signout)return;
 let windowPortal=null,pendingLogout=false,authenticated=false;
 const validImage=value=>typeof value==='string'&&value.length<=2000&&/^https:\/\/[^\s]+$/i.test(value);
 const closeMenu=()=>{menu.hidden=true;trigger.setAttribute('aria-expanded','false')};
 function displayUser(state){
  authenticated=state.authenticated===true;
  entry.hidden=authenticated;
  profile.hidden=!authenticated;
  if(!authenticated){closeMenu();return;}
  const display=typeof state.displayName==='string'?state.displayName.slice(0,50).trim():'';
  const id=typeof state.handle==='string'?state.handle.slice(0,16).trim():'';
  name.textContent=display||'Minha conta';
  handle.textContent=id?'@'+id:'Conta Discórdia';
  avatar.replaceChildren();
  if(validImage(state.avatar)){
   const img=document.createElement('img');
   img.src=state.avatar;img.alt='';img.referrerPolicy='no-referrer';
   img.onerror=()=>{if(img.isConnected)avatar.textContent=(display||'D').charAt(0).toUpperCase()};
   avatar.append(img);
  }else avatar.textContent=(display||'D').charAt(0).toUpperCase();
 }
 function openPortal(logout=false){
  // O portal é outro domínio. Navegar não copia nem simula a sessão.
  // A saída é executada no Firebase Hosting antes de retornar ao site.
  closeMenu();
  window.location.assign(logout?ORIGIN+'/?site_logout=1':ORIGIN+'/');
 }
 function onMessage(event){
  if(event.origin!==ORIGIN||event.source!==windowPortal)return;
  const data=event.data;
  if(!data||typeof data!=='object')return;
  if(data.type===READY){
   if(pendingLogout)windowPortal.postMessage({type:LOGOUT},ORIGIN);
   else windowPortal.postMessage({type:PING},ORIGIN);
  }
  if(data.type!==STATE||typeof data.authenticated!=='boolean')return;
  if(pendingLogout){
   if(data.authenticated)return;
   pendingLogout=false;
  }
  displayUser(data);
 }
 window.addEventListener('message',onMessage);
 entry.addEventListener('click',event=>{event.preventDefault();openPortal(false)});
 trigger.addEventListener('click',()=>{
  const opening=menu.hidden;menu.hidden=!opening;
  trigger.setAttribute('aria-expanded',String(opening));
 });
 account.addEventListener('click',()=>{closeMenu();openPortal(false)});
 signout.addEventListener('click',()=>{closeMenu();openPortal(true)});
 document.addEventListener('pointerdown',event=>{
  if(!profile.contains(event.target))closeMenu();
 });
 document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
})();
