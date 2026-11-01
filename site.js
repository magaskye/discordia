/* Discórdia Desktop RC15 — navegação e animação progressiva no layout original.
   Sem bibliotecas externas. Downloads limitados à RC15, respeita movimento reduzido. */
(function () {
  'use strict';
  const navButton=document.getElementById('nav-toggle');
  const nav=document.getElementById('nav-main');
  const header=document.querySelector('.header');
  const toTop=document.getElementById('site-back-top');
  const progressBar=document.getElementById('site-scroll-progress-bar');
  const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const navLinks=nav?Array.from(nav.querySelectorAll('a[href^="#"]')).filter(link=>{
    const id=link.getAttribute('href')?.slice(1);
    return !!id&&!!document.getElementById(id);
  }):[];
  if(navButton&&nav){
    const close=()=>{
      navButton.setAttribute('aria-expanded','false');
      navButton.setAttribute('aria-label','Abrir menu');
      nav.classList.remove('open');
    };
    navButton.addEventListener('click',()=>{
      const open=navButton.getAttribute('aria-expanded')!=='true';
      navButton.setAttribute('aria-expanded',String(open));
      navButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
      nav.classList.toggle('open',open);
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    document.addEventListener('click',e=>{
      if(nav.classList.contains('open')&&!nav.contains(e.target)&&!navButton.contains(e.target))close();
    });
  }

  // Scroll work is scheduled once per frame and the scroll listener is passive.
  let pendingFrame=false;
  function updateScrollUI(){
    pendingFrame=false;
    const scrollMax=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
    const current=Math.max(0,window.scrollY||window.pageYOffset||0);
    const fraction=scrollMax>0?Math.min(1,current/scrollMax):0;
    if(progressBar)progressBar.style.transform='scaleX('+fraction.toFixed(4)+')';
    if(header)header.classList.toggle('is-scrolled',current>22);
    if(toTop)toTop.hidden=current<440;
    let active=null;
    for(const link of navLinks){
      const target=document.getElementById(link.getAttribute('href').slice(1));
      if(target&&target.getBoundingClientRect().top<=Math.max(112,header?.offsetHeight||82)+48){
        active=link;
      }
    }
    for(const link of navLinks){
      const selected=link===active;
      link.classList.toggle('is-active',selected);
      if(selected)link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    }
  }
  function scheduleScrollUI(){
    if(!pendingFrame){
      pendingFrame=true;
      window.requestAnimationFrame(updateScrollUI);
    }
  }
  window.addEventListener('scroll',scheduleScrollUI,{passive:true});
  window.addEventListener('resize',scheduleScrollUI,{passive:true});
  updateScrollUI();

  // Visible content stays visible if JS or IntersectionObserver is unavailable.
  if(!reduceMotion&&'IntersectionObserver' in window){
    const selectors=[
      '.n26-hero-copy','.n26-hero-scene',
      '.n26-panel-copy','.n26-panel-art',
      '.n27-network .container','.n27-velosinc .container',
      '.n27-journey-inner','.n27-support-copy','.n27-support-art',
      '.n27-downloads-head','.n27-download-card',
      '.n27-faq-intro','.n27-faq-items','.n26-final-content'
    ];
    const targets=Array.from(new Set(selectors.flatMap(selector=>Array.from(document.querySelectorAll(selector)))));
    const io=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(!entry.isIntersecting)continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },{threshold:0.06,rootMargin:'0px 0px -5% 0px'});
    for(const element of targets){
      element.classList.add('site-reveal');
      if(element.getBoundingClientRect().top<window.innerHeight*0.92){
        element.classList.add('is-visible');
      }else{
        io.observe(element);
      }
    }
    document.documentElement.classList.add('site-motion-ready');
  }

  // Lock public download verification to the published RC15 prerelease.
  const tag='v1.0.3-rc.15';
  const base='https://github.com/magaskye/discordia/releases/download/'+tag+'/';
  const required=[
    'Discordia-1.0.3-rc.15-Instalador-x64.exe',
    'Discordia-1.0.3-rc.15-Portatil-x64.exe',
    'rc.yml','SHA256SUMS.txt'
  ];
  const text=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value;};
  function isVerified(release){
    if(!release||release.tag_name!==tag||release.draft||!release.prerelease)return false;
    const assets=Array.isArray(release.assets)?release.assets:[];
    return required.every((name,i)=>{
      const item=assets.find(a=>a.name===name&&a.state==='uploaded');
      const min=i<2?50000000:i===2?100:50;
      return !!item&&item.size>=min&&item.browser_download_url===base+name;
    });
  }
  fetch('https://api.github.com/repos/magaskye/discordia/releases/tags/'+tag,
    {headers:{Accept:'application/vnd.github+json'},cache:'no-store'})
    .then(res=>{if(!res.ok)throw new Error('github_api_unavailable');return res.json();})
    .then(release=>{
      if(!isVerified(release))throw new Error('release_not_verified');
      text('release-status','RC15 · download oficial confirmado');
      text('release-hint','Apenas a RC15 está disponível no site. Instalador, portátil, rc.yml e SHA-256 verificados no GitHub.');
    })
    .catch(()=>{
      // Quando a API estiver indisponível, mantenha os links, mas oriente a conferência da release.
      text('release-status','RC15 · verificar release oficial');
      text('release-hint','Antes de instalar, confira os executáveis, o manifesto e o SHA-256 na release oficial.');
    });
})();
