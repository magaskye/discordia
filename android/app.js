'use strict';
(function(){
 const status=document.getElementById('status');
 const button=document.getElementById('download');
 const details=document.getElementById('details');
 const filename=/^Discordia-Mobile-\d+\.\d+\.\d+-rc\.\d+(?:\.\d+)?\.apk$/;
 function approvedUrl(value,versionName){
  try{
   const u=new URL(value);
   const p=u.pathname.split('/').filter(Boolean);
   return u.protocol==='https:'&&u.hostname==='github.com'&&
     !u.username&&!u.password&&!u.search&&!u.hash&&p.length===6&&
     p[0]==='magaskye'&&p[1]==='discordia'&&p[2]==='releases'&&
     p[3]==='download'&&p[4]===('android-v'+versionName)&&p[5]===('Discordia-Mobile-'+versionName+'.apk')&& /^android-v\d+\.\d+\.\d+-rc\.\d+(?:\.\d+)?$/.test(p[4])&&filename.test(p[5]);
  }catch{return false;}
 }
 fetch('./updates/rc.json',{cache:'no-store',redirect:'error'})
   .then(r=>{if(!r.ok)throw Error('feed');return r.json();})
   .then(data=>{
     const a=data?.android;
     if(data.schema!==1||data.channel!=='rc'||!a?.available){
       status.textContent='Android em preparação. O APK público ainda não foi liberado.';
       return;
     }
     if(a.applicationId!=='br.discordia.mobile'||
       !Number.isSafeInteger(a.versionCode)||a.versionCode<1||
       !approvedUrl(a.downloadUrl,a.versionName)||
       a.signerSha256!=='fc5af7ccfd8f28acc8d3c79b1651cac67f7897386ff27768cfcb2bc3e4a23ac5'||!/^[a-f0-9]{64}$/.test(a.sha256)||
       !Number.isSafeInteger(a.sizeBytes)||a.sizeBytes<100000){throw Error('validation');}
     status.textContent='Versão '+a.versionName+' disponível para Android.';
     details.textContent='SHA-256: '+a.sha256+' · '+Math.round(a.sizeBytes/1024/1024*10)/10+' MB';
     button.href=a.downloadUrl;
     button.hidden=false;
   }).catch(()=>{status.textContent='Não foi possível consultar as atualizações no momento.';});
})();
