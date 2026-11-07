/* Site canonico: Cloudflare Pages. Redireciona apenas paginas HTML legadas. */
(function () {
  'use strict';
  if (window.location.hostname !== 'magaskye.github.io') return;
  var prefix = '/discordia';
  var path = window.location.pathname;
  if (path !== prefix && path.indexOf(prefix + '/') !== 0) return;
  var suffix = path.slice(prefix.length) || '/';
  if (suffix === '/index.html') suffix = '/';
  if (suffix === '/android/index.html') suffix = '/android/';
  if (suffix === '/web/index.html') suffix = '/web/';
  window.location.replace('https://discordia-ari.pages.dev' + suffix + window.location.search + window.location.hash);
})();
