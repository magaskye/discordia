/* Apresentação didática visual dos transportes de mídia. Sem comunicação com backend. */
(() => {
  'use strict';
  const movie = document.getElementById('network-film');
  if (!movie) return;
  const control = document.getElementById('net-film-toggle');
  const fill = document.getElementById('net-film-fill');
  const clock = document.getElementById('net-film-clock');
  const heading = document.getElementById('net-film-title');
  const caption = document.getElementById('net-film-description');
  const chip = document.getElementById('net-film-chip');
  const chapters = Array.from(movie.querySelectorAll('[data-net-chapter]'));
  const scenes = [
    {
      mode: 'p2p',
      title: '01. O caminho mais direto',
      text: 'Quando a rede permite, duas pessoas trocam voz ou vídeo diretamente pela conexão P2P, sem um servidor retransmitindo a mídia.',
      chip: 'P2P · DIRETO'
    },
    {
      mode: 'turn',
      title: '02. Quando a rede precisa de ajuda',
      text: 'Se firewall ou roteador bloqueia a conexão direta, TURN pode atuar como retransmissor. A conversa continua por outro caminho, quando a rota está disponível.',
      chip: 'TURN · RETRANSMISSÃO'
    },
    {
      mode: 'sfu',
      title: '03. Uma transmissão, vários amigos',
      text: 'Para vídeo em sessões compatíveis, um participante envia ao SFU, que encaminha os fluxos aos espectadores autorizados. A voz segue em rota própria, P2P ou TURN.',
      chip: 'SFU · DISTRIBUIÇÃO DE VÍDEO'
    }
  ];
  const chapterTime = 12000;
  const fullTime = scenes.length * chapterTime;
  const format = (ms) => '0:' + String(Math.floor(ms / 1000)).padStart(2, '0');
  const reduceMotion = !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  let elapsed = 0;
  let playing = false;
  let manualPause = false;
  let inView = false;
  let frame = 0;
  let lastTime = 0;
  let displayedScene = -1;
  const show = (index) => {
    if (index === displayedScene) return;
    displayedScene = index;
    const scene = scenes[index];
    movie.dataset.mode = scene.mode;
    heading.textContent = scene.title;
    caption.textContent = scene.text;
    chip.textContent = scene.chip;
    chapters.forEach((button, position) => {
      button.setAttribute('aria-pressed', String(position === index));
    });
  };
  const paint = () => {
    elapsed = Math.min(fullTime, Math.max(0, elapsed));
    show(Math.min(scenes.length - 1, Math.floor(elapsed / chapterTime)));
    fill.style.width = ((elapsed / fullTime) * 100).toFixed(2) + '%';
    clock.textContent = format(elapsed) + ' / ' + format(fullTime);
    const track = document.getElementById('net-film-progress');
    if (track) track.setAttribute('aria-valuenow', String(Math.round((elapsed / fullTime) * 100)));
  };
  const setPlaying = (value) => {
    playing = !!value;
    movie.classList.toggle('is-paused', !playing);
    control.textContent = playing ? 'Ⅱ' : '▶';
    control.setAttribute('aria-label', playing ? 'Pausar a apresentação' : 'Reproduzir a apresentação');
    control.title = playing ? 'Pausar' : 'Reproduzir';
    cancelAnimationFrame(frame);
    lastTime = 0;
    if (playing) frame = requestAnimationFrame(tick);
  };
  function tick(now) {
    if (!playing) return;
    if (lastTime) elapsed += Math.min(120, now - lastTime);
    lastTime = now;
    if (elapsed >= fullTime) {
      elapsed = 0;
      paint();
      setPlaying(false);
      return;
    }
    paint();
    frame = requestAnimationFrame(tick);
  }
  control.addEventListener('click', () => {
    manualPause = playing;
    if (!playing && elapsed >= fullTime) elapsed = 0;
    setPlaying(!playing);
    paint();
  });
  chapters.forEach((button, index) => {
    button.addEventListener('click', () => {
      elapsed = index * chapterTime;
      manualPause = false;
      paint();
      setPlaying(!reduceMotion && inView);
    });
  });
  movie.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    if (!movie.contains(document.activeElement)) return;
    event.preventDefault();
    let index = Math.floor(elapsed / chapterTime) + (event.key === 'ArrowRight' ? 1 : -1);
    index = Math.min(scenes.length - 1, Math.max(0, index));
    elapsed = index * chapterTime;
    paint();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) setPlaying(false);
    else if (inView && !reduceMotion && !manualPause && elapsed < fullTime) setPlaying(true);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      inView = entries[0]?.isIntersecting ?? false;
      if (!inView) setPlaying(false);
      else if (!reduceMotion && !manualPause && !document.hidden && elapsed < fullTime) setPlaying(true);
    }, {threshold:0.18});
    observer.observe(movie);
  } else {
    inView = true;
  }
  paint();
  setPlaying(false);
})();