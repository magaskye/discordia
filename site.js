/* Discórdia Desktop — catálogo público controlado: RC8 legada e Estável 1.0.3. */
(function () {
  'use strict';
  const OWNER='magaskye', REPO='discordia';
  const RELEASES='https://api.github.com/repos/'+OWNER+'/'+REPO+'/releases?per_page=60';
  const TAG_RC='v1.0.3-rc.8', TAG_STABLE='v1.0.3';
  const navButton=document.getElementById('nav-toggle');
  const nav=document.getElementById('nav-main');
  if(navButton&&nav){
    const close=()=>{navButton.setAttribute('aria-expanded','false');navButton.setAttribute('aria-label','Abrir menu');nav.classList.remove('open');};
    navButton.addEventListener('click',()=>{
      const open=navButton.getAttribute('aria-expanded')!=='true';
      navButton.setAttribute('aria-expanded',String(open));
      navButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
      nav.classList.toggle('open',open);
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  }
  const text=(id,value)=>{const e=document.getElementById(id);if(e)e.textContent=value;};
  const official=(url,tag)=>{
    try{
      const u=new URL(url);
      return u.protocol==='https:' && u.hostname==='github.com' &&
        u.pathname.startsWith('/'+OWNER+'/'+REPO+'/releases/download/'+tag+'/') ? u.href : null;
    }catch{return null;}
  };
  function verified(release,tag,channel){
    if(!release || release.draft || release.tag_name!==tag ||
       Boolean(release.prerelease)!==(channel==='rc'))return null;
    const a=Array.isArray(release.assets)?release.assets:[];
    const basename='Discordia-'+tag.slice(1)+'-';
    const required=[
      basename+'Instalador-x64.exe',
      basename+'Portatil-x64.exe',
      channel==='rc'?'rc.yml':'latest.yml',
      'SHA256SUMS-'+tag.slice(1)+'.txt'
    ];
    const found=required.map(name=>a.find(item=>item.name===name));
    if(found.some(x=>!x))return null;
    if(found[0].size<50000000 || found[1].size<50000000 ||
       found[2].size<100 || found[3].size<50)return null;
    if(!official(found[0].browser_download_url,tag) ||
       !official(found[1].browser_download_url,tag))return null;
    return {installer:found[0], portable:found[1], tag};
  }
  function activate(id,item,tag,label){
    const anchor=document.getElementById(id);
    const url=official(item.browser_download_url,tag);
    if(!anchor||!url)return;
    anchor.href=url;
    anchor.textContent=label;
    anchor.classList.remove('is-disabled');
    anchor.removeAttribute('aria-disabled');
    anchor.removeAttribute('tabindex');
    anchor.setAttribute('rel','noopener noreferrer');
  }
  function notes(channel,tag){
    const label=document.getElementById(channel+'-version');
    if(!label)return;
    const old=document.getElementById(channel+'-notes');
    if(old)old.remove();
    const a=document.createElement('a');
    a.id=channel+'-notes';
    a.href='https://github.com/'+OWNER+'/'+REPO+'/releases/tag/'+tag;
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.className='ui2-release-notes';
    a.textContent='Notas e arquivos oficiais ↗';
    label.insertAdjacentElement('afterend',a);
  }
  function enable(channel,pkg){
    activate(channel+'-installer',pkg.installer,pkg.tag,'Baixar instalador (.exe) ↗');
    activate(channel+'-portable',pkg.portable,pkg.tag,'Baixar versão portátil ↗');
    text(channel+'-version','Versão '+pkg.tag.slice(1)+' · Windows x64');
    notes(channel,pkg.tag);
  }
  fetch(RELEASES,{headers:{Accept:'application/vnd.github+json'},cache:'no-store'})
    .then(r=>{if(!r.ok)throw new Error('releases_unavailable');return r.json();})
    .then(releases=>{
      if(!Array.isArray(releases))throw new Error('invalid_releases');
      // Não oferecer automaticamente RC10 ou releases experimentais posteriores.
      const rc=verified(releases.find(x=>x.tag_name===TAG_RC),TAG_RC,'rc');
      // Releases em draft não aparecem na API pública e nunca habilitam download.
      const stable=verified(releases.find(x=>x.tag_name===TAG_STABLE),TAG_STABLE,'stable');
      if(rc)enable('rc',rc);
      if(stable){
        enable('stable',stable);
        text('stable-card-description','Discórdia 1.0.3 Estável para Windows x64, com atualização automática e opção de sair dos Testers. Confira as notas e o SHA-256 no lançamento oficial.');
      }
      text('release-hero-badge',stable?'DISCÓRDIA ESTÁVEL 1.0.3':rc?'DISCÓRDIA · RC8 ANTIGA':'DISCÓRDIA · DOWNLOADS EM VALIDAÇÃO');
      text('release-status',stable&&rc?'Estável 1.0.3 e RC8 disponíveis':stable?'Estável 1.0.3 disponível':rc?'RC8 disponível · Estável 1.0.3 em validação':'Downloads aguardando publicação');
      text('release-hint',stable?'Downloads da Estável 1.0.3 e RC8 conferidos no GitHub Releases.':'RC8 antiga confirmada. A Estável 1.0.3 aparecerá quando for publicada oficialmente.');
      // A RC é uma edição legada e pode não funcionar com regras Firebase atuais.
    })
    .catch(()=>{
      text('release-status','Não foi possível verificar as Releases');
      text('release-hint','Consulte o catálogo oficial no GitHub para verificar os arquivos. Nenhum instalador é ativado sem confirmação.');
    });
})();
