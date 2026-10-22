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
    const hash=(release.assets||[]).some(a=>a.name==='SHA256SUMS.txt');
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
  // Carrossel manual: navegação por controles, sem interromper leitor de tela.
  const slides=[...document.querySelectorAll('.ui2-real-slide')];
  const dots=[...document.querySelectorAll('.ui2-real-slide-dots button')];
  let slideIndex=0;
  const setSlide=index=>{
    if(slides.length!==3)return;
    slideIndex=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{
      slide.hidden=i!==slideIndex;
      slide.classList.toggle('is-current',i===slideIndex);
    });
    dots.forEach((dot,i)=>{
      dot.classList.toggle('is-current',i===slideIndex);
      if(i===slideIndex)dot.setAttribute('aria-current','true');
      else dot.removeAttribute('aria-current');
    });
  };
  document.getElementById('ui2-slide-prev')?.addEventListener('click',()=>setSlide(slideIndex-1));
  document.getElementById('ui2-slide-next')?.addEventListener('click',()=>setSlide(slideIndex+1));
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>setSlide(i)));

  fetch('https://api.github.com/repos/magaskye/discordia/releases?per_page=30',{headers:{Accept:'application/vnd.github+json'},cache:'no-store'})
    .then(res=>{if(!res.ok)throw new Error('source_unavailable');return res.json()})
    .then(items=>{
      if(!Array.isArray(items))throw new Error('source_invalid');
      const rc=latest(items,r=>r.prerelease&&/^v?\d+\.\d+\.\d+-rc\.\d+(?:\.\d+)?$/.test(r.tag_name||''));
      const stable=latest(items,r=>!r.prerelease&&/^v?\d+\.\d+\.\d+$/.test(r.tag_name||''));
      const rcAvailable=confirm(rc,'rc'),stableAvailable=confirm(stable,'stable');
      if(rcAvailable){
        text('release-hero-badge','DISCÓRDIA RC DISPONÍVEL');
        text('release-hint','Downloads oficiais verificados. Consulte as notas e a integridade SHA-256.');
      }
      // The SFU RC7.5 showcase appears only once official release assets
      // are verified; an unfinished Windows build never becomes an announcement.
      if(rcAvailable){
        const match=String(rc?.tag_name||'').match(/^v?\d+\.\d+\.\d+-rc\.(\d+)(?:\.(\d+))?$/);
        const rcLevel=Number(match?.[1]||0),rcPatch=Number(match?.[2]||0);
        if(rcLevel>7||(rcLevel===7&&rcPatch>=12)){
          const newest=document.getElementById('rc-7-12-news');
          if(newest)newest.hidden=false;
          for(const id of ['rc-7-10-news','rc-7-9-news','rc-7-8-news','rc-7-7-news','rc-7-6-news','rc-sfu-news']){
            const old=document.getElementById(id);if(old)old.hidden=true;
          }
        }else if(rcLevel===7&&rcPatch>=10){
          const newest=document.getElementById('rc-7-10-news');
          if(newest)newest.hidden=false;
          for(const id of ['rc-7-9-news','rc-7-8-news','rc-7-7-news','rc-7-6-news','rc-sfu-news']){
            const old=document.getElementById(id);if(old)old.hidden=true;
          }
        }else if(rcLevel===7&&rcPatch>=9){
          const newest=document.getElementById('rc-7-9-news');
          if(newest)newest.hidden=false;
          for(const id of ['rc-7-8-news','rc-7-7-news','rc-7-6-news','rc-sfu-news']){
            const old=document.getElementById(id);if(old)old.hidden=true;
          }
        }else if(rcLevel===7&&rcPatch>=8){
          const newest=document.getElementById('rc-7-8-news');
          if(newest)newest.hidden=false;
          for(const id of ['rc-7-7-news','rc-7-6-news','rc-sfu-news']){
            const old=document.getElementById(id);if(old)old.hidden=true;
          }
        }else if(rcLevel===7&&rcPatch>=7){
          const newest=document.getElementById('rc-7-7-news');
          if(newest)newest.hidden=false;
          const previous=document.getElementById('rc-7-6-news');
          if(previous)previous.hidden=true;
          const former=document.getElementById('rc-sfu-news');
          if(former)former.hidden=true;
        }else if(rcLevel===7&&rcPatch>=6){
          const latest=document.getElementById('rc-7-6-news');
          if(latest)latest.hidden=false;
          const former=document.getElementById('rc-sfu-news');
          if(former)former.hidden=true;
        }else if(rcLevel===7&&rcPatch>=5){
          const feature=document.getElementById('rc-sfu-news');
          if(feature)feature.hidden=false;
        }
      }
      if(stableAvailable)text('release-hero-badge','DISCÓRDIA PARA WINDOWS');
      text('release-status',rcAvailable||stableAvailable?'Downloads disponíveis':'Acompanhe os lançamentos');
    })
    .catch(()=>{
      text('release-status','Consulte as versões no GitHub');
      text('release-hint','A página oficial de Releases está disponível pelo link ao lado.');
    });
})();
