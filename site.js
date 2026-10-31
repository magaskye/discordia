/* Discórdia Desktop — catálogo público pausado (31/10/2026).
   Nenhuma RC antiga nem Estável deve ser habilitada automaticamente.
   Publicar uma nova versão exige autorização e atualização explícita da vitrine. */
(function () {
  'use strict';
  const navButton=document.getElementById('nav-toggle');
  const nav=document.getElementById('nav-main');
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
  }
})();
