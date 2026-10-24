/* Discórdia Desktop — exibir downloads somente após verificar os arquivos da Release oficial. */
(function(){
  'use strict';
  const navButton=document.getElementById('nav-toggle'),nav=document.getElementById('nav-main');
  if(navButton&&nav){
    const close=()=>{navButton.setAttribute('aria-expanded','false');navButton.setAttribute('aria-label','Abrir menu');nav.classList.remove('open')};
    navButton.addEventListener('click',()=>{
      const open=navButton.getAttribute('aria-expanded')!=='true';
      navButton.setAttribute('aria-expanded',String(open));
      navButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
      nav.classList.toggle('open',open);
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  }
  const text=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value};
  const official=url=>{
    try{
      const u=new URL(url);
      return u.protocol==='https:'&&u.hostname==='github.com'&&
        u.pathname.startsWith('/magaskye/discordia/releases/download/')?u.href:null;
    }catch{return null}
  };
  const kind=(release,label)=>(release.assets||[]).find(asset=>{
    const name=String(asset.name||'').toLowerCase();
    return /^discordia-.*-x64\.exe$/.test(name)&&name.includes(label)&&
      Number(asset.size)>5000000&&official(asset.browser_download_url);
  });
  const activate=(id,asset,label)=>{
    if(!asset)return false;
    const el=document.getElementById(id),url=official(asset.browser_download_url);
    if(!el||!url)return false;
    el.href=url;el.textContent=label;el.rel='noopener noreferrer';
    el.classList.remove('is-disabled');el.removeAttribute('tabindex');el.removeAttribute('aria-disabled');
    return true;
  };
  const latest=(items,filter)=>items.filter(v=>!v.draft&&filter(v)).sort((a,b)=>
    (Date.parse(b.published_at||'')||0)-(Date.parse(a.published_at||'')||0))[0];
  const confirm=(release,channel)=>{
    if(!release)return false;
    const installer=kind(release,'instalador'),portable=kind(release,'portatil');
    if(!installer||!portable)return false;
    const manifest=(release.assets||[]).some(a=>a.name===(channel==='rc'?'rc.yml':'latest.yml'));
    const version=String(release.tag_name||'').replace(/^v/,'');
    const hash=(release.assets||[]).some(a=>
      a.name==='SHA256SUMS.txt'||a.name==='SHA256SUMS-'+version+'.txt');
    if(!manifest||!hash)return false;
    const okA=activate(channel+'-installer',installer,'Baixar instalador (.exe) ↗');
    const okB=activate(channel+'-portable',portable,'Baixar versão portátil ↗');
    if(!(okA&&okB))return false;
    const tag=String(release.tag_name||'');
    text(channel+'-version','Versão '+tag.replace(/^v/,'')+' · Windows x64');
    const node=document.getElementById(channel+'-version');
    if(node&&/^v?\d+\.\d+\.\d+(?:-rc\.\d+(?:\.\d+)?)?$/.test(tag)){
      const link=document.createElement('a');
      link.href='https://github.com/magaskye/discordia/releases/tag/'+encodeURIComponent(tag);
      link.textContent='Consultar notas da versão ↗';link.target='_blank';link.rel='noopener noreferrer';
      link.className='ui2-release-notes';
      node.insertAdjacentElement('afterend',link);
    }
    return true;
  };
  fetch('https://api.github.com/repos/magaskye/discordia/releases?per_page=30',{headers:{Accept:'application/vnd.github+json'},cache:'no-store'})
    .then(res=>{if(!res.ok)throw new Error('source_unavailable');return res.json()})
    .then(items=>{
      if(!Array.isArray(items))throw new Error('source_invalid');
      const rc=latest(items,r=>r.prerelease&&/^v?\d+\.\d+\.\d+-rc\.\d+(?:\.\d+)?$/.test(r.tag_name||''));
      const stable=latest(items,r=>!r.prerelease&&/^v?\d+\.\d+\.\d+$/.test(r.tag_name||''));
      const rcAvailable=confirm(rc,'rc'),stableAvailable=confirm(stable,'stable');
      if(rcAvailable && !stableAvailable){
        text('release-hero-badge','DISCÓRDIA RC DISPONÍVEL');
        text('release-hint','RC oficial disponível. Consulte as notas e as somas SHA-256 antes de instalar.');
      }
      // Só promover a estável quando a API oficial comprovar os dois EXEs,
      // latest.yml e o manifesto SHA256SUMS da versão. Até lá a RC permanece acessível.
      if(stableAvailable){
        const rcCard=document.getElementById('rc-download-card');
        if(rcCard)rcCard.hidden=true;
        text('stable-card-label','VERSÃO ESTÁVEL');
        text('stable-card-description','Versão 1.0.2 estável para Windows x64, com instalador, portátil e hashes SHA-256. Melhorias de KLIPY/GIFs, login Google Desktop e atualizador. Exclusão definitiva de servidores aguarda ativação do backend.');
        text('release-hero-badge','DISCÓRDIA ESTÁVEL DISPONÍVEL');
        text('release-hint','Versão estável validada pela listagem de arquivos do GitHub Releases; confira as somas SHA-256.');
        const oldRcNews=document.getElementById('rc-18-news');
        if(oldRcNews)oldRcNews.hidden=true;
      }
      // RC18 concept is announced only after both official Windows binaries,
      // the update manifest and SHA-256 file are validated on the release.
      if(rcAvailable && !stableAvailable){
        const match=String(rc?.tag_name||'').match(/^v?\d+\.\d+\.\d+-rc\.(\d+)(?:\.(\d+))?$/);
        const level=Number(match?.[1]||0);
        const sub=Number(match?.[2]||0);
        const rc18=level>=18;
        const section=document.getElementById('rc-18-news');
        if(section)section.hidden=!rc18;
      }
      text('release-status',stableAvailable?'Estável disponível':rcAvailable?'RC disponível':'Acompanhe os lançamentos');
    })
    .catch(()=>{
      text('release-status','Consulte as versões no GitHub');
      text('release-hint','A página oficial de Releases está disponível pelo link ao lado.');
    });
})();
