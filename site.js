/* Site em homologação do Firebase — bloqueio temporário da listagem de RC e estável. */
/* Mantido para que páginas antigas em cache não ativem downloads pelo GitHub Releases. */
(function(){
  'use strict';
  const aviso='Downloads temporariamente suspensos durante a homologação do banco de dados. Seus dados estão preservados.';
  const lock=(a)=>{
    if(!a)return;
    a.removeAttribute('href');
    a.setAttribute('aria-disabled','true');
    a.setAttribute('tabindex','-1');
    a.classList.add('is-disabled');
    a.removeAttribute('target');
    a.title=aviso;
  };
  document.querySelectorAll('a[href*="/magaskye/discordia/releases"], a[href="#downloads"]').forEach(lock);
  ['rc-installer','rc-portable','stable-installer','stable-portable'].forEach(id=>lock(document.getElementById(id)));
  const box=document.getElementById('downloads');
  if(box){
    box.replaceChildren();
    const message=document.createElement('div');
    message.style.cssText='max-width:650px;margin:60px auto;padding:30px;text-align:center;color:#eef2ff;background:#16203a;border:1px solid #548b99;border-radius:18px';
    const h=document.createElement('h2');h.textContent='Em homologação do banco de dados';
    const p=document.createElement('p');p.textContent='Versão estável e todas as RCs temporariamente indisponíveis. Seus dados estão preservados.';
    message.append(h,p);box.appendChild(message);
  }
  const badge=document.getElementById('release-hero-badge');
  if(badge)badge.textContent='HOMOLOGAÇÃO DO BANCO DE DADOS';
  const hint=document.getElementById('release-hint');
  if(hint)hint.textContent=aviso;
  const status=document.getElementById('release-status');
  if(status)status.textContent='Downloads suspensos';
  // Deliberadamente sem fetch, Release API, metadados de atualização ou links de instaladores.
})();
