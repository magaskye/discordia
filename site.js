/* Discórdia: botões são liberados APENAS com arquivos de Releases públicos. */
(function () {
  'use strict';
  var button = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav-main');
  if (button && nav) {
    button.addEventListener('click', function () {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      button.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
      nav.classList.toggle('open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Abrir menu');
        nav.classList.remove('open');
      });
    });
  }
  var status = document.getElementById('release-status');
  if (!status) return;

  function setText(id, value) {
    var element = document.getElementById(id);
    if (element) element.textContent = value;
  }
  function officialUrl(value) {
    try {
      var url = new URL(value);
      if (url.protocol !== 'https:' || url.hostname !== 'github.com') return null;
      if (!url.pathname.startsWith('/magaskye/discordia/releases/download/')) return null;
      return url.href;
    } catch (_) { return null; }
  }
  function findAsset(release, kind) {
    return (release.assets || []).find(function (file) {
      return file && typeof file.name === 'string' &&
        /^Discordia-.*-x64\.exe$/i.test(file.name) &&
        file.name.toLowerCase().includes(kind) &&
        officialUrl(file.browser_download_url);
    });
  }
  function enable(id, file, label) {
    if (!file) return false;
    var link = document.getElementById(id);
    var url = officialUrl(file.browser_download_url);
    if (!link || !url) return false;
    link.href = url;
    link.classList.remove('is-disabled');
    link.removeAttribute('aria-disabled');
    link.removeAttribute('tabindex');
    link.textContent = label;
    link.rel = 'noopener noreferrer';
    return true;
  }
  function chooseLatest(items, condition) {
    return items.filter(function (release) {
      return !release.draft && condition(release);
    }).sort(function (a, b) {
      var ta = Date.parse(a.published_at || a.created_at || '') || 0;
      var tb = Date.parse(b.published_at || b.created_at || '') || 0;
      return tb - ta;
    })[0] || null;
  }
  function attachReleaseNotes(release, channel) {
    var node = document.getElementById(channel + '-version');
    var tag = String(release.tag_name || '');
    if (!node || !/^v?\d+\.\d+\.\d+(?:-rc\.\d+(?:\.\d+)?)?$/.test(tag)) return;
    var href = 'https://github.com/magaskye/discordia/releases/tag/' + encodeURIComponent(tag);
    var existing = document.getElementById(channel + '-notes');
    if (existing) existing.remove();
    var link = document.createElement('a');
    link.id = channel + '-notes';
    link.href = href;
    link.textContent = 'Ver novidades e problemas conhecidos ↗';
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    link.style.display = 'block';
    link.style.marginTop = '0.5rem';
    node.insertAdjacentElement('afterend', link);
  }
  function display(release, channel) {
    if (!release) return false;
    var ver = String(release.tag_name || '').replace(/^v/i, '').slice(0, 40);
    var installer = findAsset(release, 'instalador');
    var portable = findAsset(release, 'portatil');
    var yesInstaller = enable(channel + '-installer', installer, 'Baixar instalador (.exe) ↗');
    var yesPortable = enable(channel + '-portable', portable, 'Baixar versão portátil ↗');
    if (yesInstaller || yesPortable) {
      setText(channel + '-version', 'Versão oficial publicada: ' + ver);
      attachReleaseNotes(release, channel);
      return true;
    }
    setText(channel + '-version', 'Release ' + ver + ' sem executável validado');
    return false;
  }
  fetch('https://api.github.com/repos/magaskye/discordia/releases?per_page=40', {
    headers: { Accept: 'application/vnd.github+json' },
    cache: 'no-store'
  }).then(function (response) {
    if (!response.ok) throw new Error('github_unavailable_' + response.status);
    return response.json();
  }).then(function (releases) {
    if (!Array.isArray(releases)) throw new Error('invalid_release_response');
    var stable = chooseLatest(releases, function (r) {
      return !r.prerelease && /^v?\d+\.\d+\.\d+$/.test(r.tag_name || '');
    });
    var rc = chooseLatest(releases, function (r) {
      return r.prerelease && /^v?\d+\.\d+\.\d+-rc\.\d+(?:\.\d+)?$/.test(r.tag_name || '');
    });
    var stableAvailable = display(stable, 'stable');
    var rcAvailable = display(rc, 'rc');
    if (stableAvailable || rcAvailable) {
      status.textContent = 'Releases oficiais disponíveis';
      setText('release-hint', 'Arquivos publicados pelo projeto. Confira as notas de cada versão antes de instalar.');
    } else if (stable || rc) {
      status.textContent = 'Releases sem instalador confirmado';
      setText('release-hint', 'Há registros de lançamento, mas nenhum executável corresponde ao padrão oficial.');
    } else {
      status.textContent = 'Pré-lançamento • sem download público';
      setText('release-hint', 'Ainda não existe nenhuma Release pública disponível para download.');
    }
  }).catch(function () {
    status.textContent = 'Verificação do GitHub indisponível';
    setText('release-hint', 'Não foi possível verificar as versões. Consulte a página oficial de Releases no GitHub.');
  });
})();
