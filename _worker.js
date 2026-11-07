/**
 * GitHub Pages PREVIEW branch only; main never has this file.
 * Gate all static Web assets with a server-side secret in Cloudflare Pages
 * preview environment variables. Browser JS never receives the access code.
 */
const same=(left,right)=>{
  const a=String(left||''),b=String(right||'');
  if(!a||a.length!==b.length)return false;
  let diff=0;
  for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^b.charCodeAt(i);
  return diff===0;
};
const lockPage=(bad=false)=>{
  const html='<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width,initial-scale=1">'+
    '<meta name="robots" content="noindex,nofollow">'+
    '<title>Discórdia Web · Testers</title><style>'+
    ':root{color-scheme:dark}body{margin:0;min-height:100dvh;display:grid;place-items:center;background:#10111f;color:#eff0ff;font-family:system-ui,sans-serif;padding:20px}'+
    'main{max-width:400px;width:100%;border:1px solid #4c476d;border-radius:20px;padding:30px;background:#1a1b2e}h1{font-size:25px;margin:0 0 10px}p{font-size:13px;color:#aeb4ca;line-height:1.65}'+
    'label{display:block;margin:19px 0 8px;font-size:13px}input{box-sizing:border-box;width:100%;padding:14px;background:#111327;border:1px solid #575078;color:white;border-radius:10px}button{margin-top:14px;padding:13px;background:#8bbfff;border:0;border-radius:10px;font-weight:700;width:100%}'+
    '</style></head><body><main><h1>◉ Discórdia Web</h1>'+
    '<p>Prévia de testes para amigos convidados. Digite o código de acesso compartilhado pela equipe.</p>'+
    (bad?'<p role="alert">Código incorreto. Confira e tente novamente.</p>':'')+
    '<form method="post" action="/__preview_unlock" autocomplete="off">'+
    '<label for="code">Código dos testers</label><input id="code" type="password" name="code" required maxlength="90" autocomplete="off">'+
    '<button type="submit">Entrar na prévia</button></form>'+
    '<p>Esta prévia é separada do site oficial. Recursos em desenvolvimento.</p></main></body></html>';
  return new Response(html,{
    status:bad?401:200,
    headers:{
      'Content-Type':'text/html; charset=utf-8',
      'Cache-Control':'no-store',
      'X-Robots-Tag':'noindex,nofollow',
      'Referrer-Policy':'no-referrer',
      'Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'"
    }
  });
};
export default {
  async fetch(request,env){
    // Fail CLOSED if the secrets are absent in this preview deployment.
    if(!env.WEB_PREVIEW_ACCESS_CODE||!env.WEB_PREVIEW_SESSION_SECRET)
      return new Response('Ambiente de teste indisponível',{status:503,
        headers:{'Cache-Control':'no-store','X-Robots-Tag':'noindex,nofollow'}});
    const u=new URL(request.url);
    if(u.pathname==='/__preview_unlock'){
      if(request.method!=='POST')return lockPage();
      if(request.headers.get('Origin')!==u.origin)return lockPage(true);
      let data;
      try{data=await request.formData();}catch{return lockPage(true);}
      if(!same(data.get('code'),env.WEB_PREVIEW_ACCESS_CODE))return lockPage(true);
      return new Response(null,{
        status:303,
        headers:{
          'Location':'/',
          'Set-Cookie':'__discordia_preview='+env.WEB_PREVIEW_SESSION_SECRET+
            '; Path=/; Max-Age=604800; HttpOnly; Secure; SameSite=Lax',
          'Cache-Control':'no-store',
          'X-Robots-Tag':'noindex,nofollow'
        }
      });
    }
    const cookie=request.headers.get('Cookie')||'';
    const token=cookie.split(';').map(c=>c.trim()).find(c=>c.startsWith('__discordia_preview='))
      ?.slice('__discordia_preview='.length)||'';
    if(!same(token,env.WEB_PREVIEW_SESSION_SECRET))return lockPage();
    if(request.method!=='GET'&&request.method!=='HEAD')
      return new Response('Método não permitido',{status:405});
    const response=await env.ASSETS.fetch(request);
    const headers=new Headers(response.headers);
    headers.set('X-Robots-Tag','noindex,nofollow');
    headers.set('Referrer-Policy','no-referrer');
    // All assets remain private to the tester preview; do not use shared caches.
    headers.set('Cache-Control','private,no-store');
    return new Response(response.body,{status:response.status,statusText:response.statusText,headers});
  }
};
