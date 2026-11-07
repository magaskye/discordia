'use strict';
/* Somente atualiza o estado apresentado no cartão Android. O botão oficial fica em /android/. */
(function () {
  const badge=document.getElementById('dp-android-status');
  if(!badge)return;
  fetch('./android/updates/rc.json',{cache:'no-store',redirect:'error'})
    .then(response=>{if(!response.ok)throw new Error('feed');return response.json();})
    .then(data=>{
      const a=data?.android;
      if(data?.schema===1&&data?.channel==='rc'&&a?.available===true&&
         a?.applicationId==='br.discordia.mobile'&&Number.isSafeInteger(a?.versionCode)&&a.versionCode>0&&
         typeof a?.versionName==='string'&&/^1[.]0[.]3-rc[.][0-9]+(?:[.][0-9]+)?$/.test(a.versionName)&&
         typeof a?.downloadUrl==='string'&&a.downloadUrl.startsWith('https://github.com/magaskye/discordia/releases/download/android-v')){
         badge.textContent='APK PUBLICADO';
         badge.classList.remove('dp-status-pending');
         badge.classList.add('dp-status-live');
      }
    })
    .catch(()=>{});
})();
