/* Discórdia Desktop — mesmo site e navegação originais; somente RC11 nos downloads.
 * A release foi conferida em GitHub antes da publicação desta página. A conferência
 * adicional pela API serve para indicar o estado, não depende de scripts externos.
 */
(function () {
  'use strict';
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
  const tag='v1.0.3-rc.11';
  const base='https://github.com/magaskye/discordia/releases/download/'+tag+'/';
  const required=[
    'Discordia-1.0.3-rc.11-Instalador-x64.exe',
    'Discordia-1.0.3-rc.11-Portatil-x64.exe',
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
      text('release-status','RC11 · download oficial confirmado');
      text('release-hint','Apenas a RC11 está disponível no site. Instalador, portátil, rc.yml e SHA-256 verificados no GitHub.');
    })
    .catch(()=>{
      // Os dois links estáticos já foram verificados pelo publicador, portanto
      // uma limitação temporária da API não deve impedir o download.
      text('release-status','RC11 publicada · Versão candidata');
      text('release-hint','Apenas RC11 oferecida aqui. Confira os arquivos e SHA-256 na release oficial do GitHub.');
    });
})();
