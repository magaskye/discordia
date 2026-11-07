'use strict';
(function(){
 const status=document.getElementById('status');
 const button=document.getElementById('download');
 const details=document.getElementById('details');
 const version=document.getElementById('version');
 const size=document.getElementById('size');
 const hash=document.getElementById('sha256');
 const releaseLink=document.getElementById('release-link');
 const copyButton=document.getElementById('copy-hash');
 const feedback=document.getElementById('hash-feedback');
 const cert='fc5af7ccfd8f28acc8d3c79b1651cac67f7897386ff27768cfcb2bc3e4a23ac5';
 const validVersion=/^\d+\.\d+\.\d+-rc\.\d+(?:\.\d+)?$/;
 function officialDownload(url,name){
  try{
   const u=new URL(url);
   const p=u.pathname.split('/').filter(Boolean);
   return u.protocol==='https:'&&u.hostname==='github.com'&&
    !u.username&&!u.password&&!u.search&&!u.hash&&p.length===6&&
    p[0]==='magaskye'&&p[1]==='discordia'&&p[2]==='releases'&&
    p[3]==='download'&&p[4]===('android-v'+name)&&
    p[5]===('Discordia-Mobile-'+name+'.apk');
  }catch{return false;}
 }
 function validatedRelease(m){
  const a=m?.android;
  if(m?.schema!==1||m?.channel!=='rc'||m?.train!=='rc'+String(a?.versionName||'').split('-rc.')[1]?.split('.')[0]||!a?.available)return null;
  if(a.applicationId!=='br.discordia.mobile'||!validVersion.test(a.versionName)||
      !Number.isSafeInteger(a.versionCode)||a.versionCode<2||
      !Number.isSafeInteger(a.sizeBytes)||a.sizeBytes<100000||a.sizeBytes>100000000||
      typeof a.sha256!=='string'||!/^[a-f0-9]{64}$/.test(a.sha256)||
      a.signerSha256!==cert||!officialDownload(a.downloadUrl,a.versionName))return null;
  return a;
 }
 fetch('./updates/rc.json',{cache:'no-store',redirect:'error',credentials:'omit'})
  .then(r=>{if(!r.ok)throw Error('Não foi possível ler o manifesto');return r.json();})
  .then(data=>{
   const a=validatedRelease(data);
   if(!a){
    status.textContent='Download temporariamente indisponível';
    version.textContent='Não disponível';
    return;
   }
   status.textContent='APK oficial disponível · assinatura verificada';
   version.textContent=a.versionName;
   size.textContent=(a.sizeBytes/1048576).toFixed(2).replace('.',',')+' MB';
   button.href=a.downloadUrl;button.hidden=false;
   releaseLink.href='https://github.com/magaskye/discordia/releases/tag/android-v'+a.versionName;
   releaseLink.hidden=false;
   hash.textContent=a.sha256;
   details.hidden=false;
   if(copyButton){
    copyButton.addEventListener('click',async()=>{
     try{
      if(!navigator.clipboard?.writeText)throw Error('Clipboard indisponível');
      await navigator.clipboard.writeText(a.sha256);
      feedback.textContent='Hash copiado';
     }catch{feedback.textContent='Selecione o hash acima para copiar';}
    });
   }
  })
  .catch(()=>{
   status.textContent='Não foi possível verificar a versão agora';
   version.textContent='Consulta indisponível';
  });
})();
