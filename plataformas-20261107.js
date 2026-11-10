'use strict';
/* Seletor de plataforma do site público. Windows/Android/Web continuam acessíveis
 * em #plataformas. Nenhuma instalação automática e nenhum redirecionamento.
 */
(function () {
  const byId=id=>document.getElementById(id);
  const primary=byId('device-primary-cta');
  const secondary=byId('device-secondary-cta');
  const nav=byId('device-nav-cta');
  const prompt=byId('device-prompt');
  const promptTitle=byId('device-prompt-title');
  const promptDescription=byId('device-prompt-description');
  const promptCTA=byId('device-prompt-cta');
  const promptAlternative=byId('device-prompt-alternative');
  const heroDescription=byId('release-hero-description');
  const heroBadge=byId('release-hero-badge');
  const heroDetails=byId('device-platform-detail');
  const androidBadge=byId('dp-android-status');
  const promptIcon=byId('device-prompt-icon');
  const promptImage=byId('device-prompt-icon-image');
  const platformIcons={
    windows:'./platform-icons/windows.svg',
    android:'./platform-icons/android.svg',
    ios:'./platform-icons/apple.svg',
    other:'./platform-icons/web.svg'
  };
  function updatePromptIcon(which){
    const key=Object.prototype.hasOwnProperty.call(platformIcons,which)?which:'other';
    if(!promptIcon||!promptImage)return;
    promptImage.src=platformIcons[key];
    promptIcon.className='dp-device-prompt-icon dp-brand-icon dp-brand-icon--'+(key==='ios'?'apple':key);
  }

  if(!primary||!secondary||!nav||!prompt||!promptTitle||!promptDescription||
     !promptCTA||!promptAlternative||!heroDescription||!heroBadge||!heroDetails)return;

  const ua=String(navigator.userAgent||'');
  const platform=String(navigator.userAgentData?.platform||navigator.platform||'');
  const ios=/iPhone|iPad|iPod/i.test(ua)||
    (/Macintosh/i.test(ua)&&Number(navigator.maxTouchPoints)>1);
  const android=/Android/i.test(ua+' '+platform);
  const win=/Win32|Win64|Windows|WinCE/i.test(ua+' '+platform);
  const device=android?'android':ios?'ios':win?'windows':'other';
  document.documentElement.setAttribute('data-discordia-device',device);

  const setLink=(element,href,label)=>{
    element.setAttribute('href',href);
    element.textContent=label;
  };
  function setup(title,description,badge,detail,main,alt,mainHref,altHref){
    promptTitle.textContent=title;
    promptDescription.textContent=description;
    heroBadge.textContent=badge;
    heroDetails.textContent=detail;
    setLink(primary,mainHref,'↓ '+main);
    setLink(secondary,altHref,'◈ '+alt);
    setLink(promptCTA,mainHref,main);
    setLink(promptAlternative,altHref,alt);
    setLink(nav,mainHref,main+' ↗');
    prompt.hidden=false;
  }
  if(device==='android'){
    updatePromptIcon('android');
    setup('Você está no Android',
      'Instale o Discórdia Mobile e continue suas conversas no celular.',
      'DISCÓRDIA ANDROID · CANAL OFICIAL',
      'Android · instalação do APK somente após confirmar a versão oficial',
      'Ver download Android','Conhecer versão Web','./android/','./web/');
    heroDescription.textContent='Discórdia para Android: seus servidores, mensagens e amigos na mesma conta do Desktop. Confira o APK assinado e as instruções de instalação pelo canal oficial. As chamadas e transmissões no celular ainda estão em desenvolvimento.';
    const card=document.querySelector('.dp-android');
    if(card?.parentElement)card.parentElement.prepend(card);
  }else if(device==='windows'){
    updatePromptIcon('windows');
    setup('Você está no Windows',
      'Baixe a versão Desktop ou conheça o Discórdia Web.',
      'RC25.5 · VERSÃO CANDIDATA DISPONÍVEL',
      'Windows 10 e 11 · v1.0.3-rc.25.5 · Testers · instalador e portátil',
      'Baixar para Windows','Conhecer versão Web','#downloads','./web/');
  }else {
    updatePromptIcon(device);
    setup(device==='ios'?'Você está no iPhone ou iPad':'Acesso pelo navegador',
      device==='ios'?'O APK Android não funciona no iPhone. Conheça o projeto Web e veja outras plataformas.':
        'A versão Windows é para PCs compatíveis. A Web Beta pública já pode ser acessada pelo navegador.',
      'DISCÓRDIA WEB · BETA PÚBLICA',
      device==='ios'?'iPhone/iPad · Web Beta pelo navegador':
        'Navegador · beta pública disponível',
      'Abrir Web Beta','Detalhes da versão Web','https://discordia-web-beta.pages.dev/','./web/');
    heroDescription.textContent='A Discórdia Web Beta está aberta no navegador: entre com sua conta existente ou assista como convidado por link. Criação de salas exige e-mail verificado e recursos de mídia ainda têm limitações.';
    const card=document.querySelector(device==='ios'?'.dp-iphone':'.dp-web');
    if(card?.parentElement)card.parentElement.prepend(card);
  }

  const signer='fc5af7ccfd8f28acc8d3c79b1651cac67f7897386ff27768cfcb2bc3e4a23ac5';
  const validVersion=/^[0-9]+[.][0-9]+[.][0-9]+-rc[.][0-9]+(?:[.][0-9]+)?$/;
  function releaseFromManifest(data){
    const a=data?.android;
    if(!a||data?.schema!==1||data?.channel!=='rc'||a?.available!==true)return null;
    if(!validVersion.test(String(a.versionName||''))||
       data.train!=='rc'+a.versionName.split('-rc.')[1].split('.')[0]||
       a.applicationId!=='br.discordia.mobile'||a.signerSha256!==signer||
       !Number.isSafeInteger(a.versionCode)||a.versionCode<2||
       !Number.isSafeInteger(a.sizeBytes)||a.sizeBytes<100000||a.sizeBytes>100000000||
       typeof a.sha256!=='string'||!/^[a-f0-9]{64}$/.test(a.sha256))return null;
    try{
      const u=new URL(a.downloadUrl);
      const p=u.pathname.split('/').filter(Boolean);
      if(u.protocol!=='https:'||u.hostname!=='github.com'||u.username||u.password||
         u.search||u.hash||p.length!==6||
         p[0]!=='magaskye'||p[1]!=='discordia'||p[2]!=='releases'||
         p[3]!=='download'||p[4]!=='android-v'+a.versionName||
         p[5]!=='Discordia-Mobile-'+a.versionName+'.apk')return null;
    }catch{return null;}
    return a;
  }
  fetch('./android/updates/rc.json',{cache:'no-store',redirect:'error',credentials:'omit'})
    .then(response=>{if(!response.ok)throw Error('feed');return response.json();})
    .then(data=>{
      const release=releaseFromManifest(data);
      if(!release)return;
      if(androidBadge){
        androidBadge.textContent='APK '+release.versionName+' DISPONÍVEL';
        androidBadge.classList.remove('dp-status-pending');
        androidBadge.classList.add('dp-status-live');
      }
      if(device==='android'){
        const label='Baixar Android '+release.versionName;
        setLink(primary,release.downloadUrl,'↓ '+label);
        setLink(promptCTA,release.downloadUrl,label);
        setLink(nav,'./android/','Baixar Android ↗');
        heroBadge.textContent='ANDROID · '+release.versionName+' DISPONÍVEL';
        heroDetails.textContent='APK oficial assinado · Android '+release.versionName+' · instalação com confirmação';
        promptDescription.textContent='APK oficial disponível. Você pode baixar agora ou abrir a página Android para conferir o SHA-256.';
      }
    })
    .catch(()=>{
      // Falha na consulta: permanece o acesso seguro à página /android/.
    });
})();
