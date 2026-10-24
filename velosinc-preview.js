/* VeloSinc: visualização educativa de decisões de ARQUITETURA, nunca diagnóstico real. */
(() => {
  'use strict';
  const demo = document.querySelector('[data-vs-demo]');
  if (!demo) return;
  const tabs = Array.from(demo.querySelectorAll('[data-vs-tab]'));
  const flow = demo.querySelector('[data-vs-flow]');
  const description = demo.querySelector('[data-vs-description]');
  const status = demo.querySelector('[data-vs-status]');
  const content = {
    envio: {
      message: 'No computador que transmite, o sistema proposto compara os quadros capturados com os efetivamente codificados e enviados. A configuração de 60 FPS não significa que 60 quadros saíram pela rede.',
      status: 'ORIGEM · QUADROS REAIS'
    },
    recepcao: {
      message: 'Quem assiste pode receber quadros e ainda assim não conseguir exibi-los. O VeloSinc foi planejado para distinguir perda de rede, lentidão na decodificação e lentidão de exibição no computador receptor.',
      status: 'DESTINO · QUADROS EXIBIDOS'
    },
    recuperacao: {
      message: 'Se um espectador estiver com dificuldade persistente, a proposta avalia outra rota só para ele. A nova transmissão só substitui a anterior depois de confirmar quadros exibidos; os demais participantes seguem como estavam.',
      status: 'FUTURO · TROCA CONFIRMADA'
    }
  };
  function select(key){
    const target = content[key] ? key : 'recepcao';
    tabs.forEach(tab=>tab.setAttribute('aria-pressed', String(tab.dataset.vsTab===target)));
    flow.dataset.step = target;
    description.textContent = content[target].message;
    status.textContent = content[target].status;
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>select(tab.dataset.vsTab));
    tab.addEventListener('keydown',(e)=>{
      if(e.key!=='ArrowLeft' && e.key!=='ArrowRight')return;
      e.preventDefault();
      const next=tabs[(index+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];
      next.focus();select(next.dataset.vsTab);
    });
  });
  select('recepcao');
})();
