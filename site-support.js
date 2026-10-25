/*
 * Ligação opcional com a campanha APOIA.se.
 * NÃO adiciona pagamento, tokens ou métricas ao GitHub Pages.
 * Para publicar o CTA, preencher campaignUrl SOMENTE com o endereço oficial
 * fornecido pelo proprietário depois da campanha publicada.
 */
(() => {
  'use strict';
  const campaignUrl = ''; // https://apoia.se/SUA_CAMPANHA — configurar somente após validação
  let url;
  try {
    url = new URL(campaignUrl);
    if(url.protocol !== 'https:' || !['apoia.se', 'www.apoia.se'].includes(url.hostname)
      || !/^\/[A-Za-z0-9_-]+\/?$/.test(url.pathname) || url.username || url.password
      || url.search || url.hash) return;
  } catch { return; }
  for (const a of document.querySelectorAll('[data-campaign-button]')) {
    a.href = url.href;
    a.hidden = false;
  }
  for (const element of document.querySelectorAll('[data-apoia-pending]')) element.hidden = true;
})();
