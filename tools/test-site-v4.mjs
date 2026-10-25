#!/usr/bin/env node
// Discórdia Site V4: static regression only. No network, no builds, no publication.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=name=>readFileSync(new URL('../'+name,import.meta.url),'utf8');
const home=read('index.html');
const support=read('apoie.html');
const privacy=read('privacidade.html');
const unified=read('unified-site-2026.css');
const immersive=read('immersive-landing-2026.css');
const downloader=read('site.js');
const campaign=read('site-support.js');
const ids=[...home.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate home IDs');
for(const id of ['inicio','recursos','experiencia','personalizacao','tecnologia','velosinc','historico','apoie','downloads','perguntas','comunidade','release-hero-badge','release-hero-description','release-status','rc-download-card','rc-version','rc-installer','rc-portable','stable-download-card','stable-card-label','stable-card-description','stable-version','stable-installer','stable-portable','release-hint','nav-main','nav-toggle'])
 assert.ok(home.includes('id="'+id+'"'),'Missing dynamic id: '+id);
for(const id of ['principal','n27-support-heading'])assert.ok(support.includes('id="'+id+'"'));
assert.ok(support.includes('data-campaign-button')&&support.includes('data-apoia-pending'));
assert.ok(support.includes('hidden>Apoiar pelo APOIA.se'),'Payment CTA must start hidden');
assert.ok(campaign.includes("const campaignUrl = '';"),'No active donation campaign');
assert.ok(support.includes('CAMPANHA EM PREPARAÇÃO'));
assert.ok(home.includes('id="apoie"')&&home.includes('APOIO VOLUNTÁRIO · EM PREPARAÇÃO'));
assert.ok(home.includes('CENA ILUSTRATIVA')&&home.includes('PRÉVIA ILUSTRATIVA'));
assert.ok(home.includes('src="./discordia-orbit-app.png"'));
assert.ok(!home.includes('src="./logo.png"'));
for(const deleted of ['class="section technology tech-cinema"','class="section vs-section"','class="section release-history"','id="network-film"','class="section concept-rc"','class="section downloads"','class="section faq"','class="footer"','network-film.js','velosinc-preview.js','visual-v2-2026.css','showcase-2026.css'])
 assert.ok(!home.includes(deleted),'Legacy site fragment: '+deleted);
for(const cls of ['n27-network','n27-velosinc','n27-journey','n27-support','n27-downloads','n27-faq','n27-footer'])
 assert.ok(home.includes('class="'+cls)||home.includes('class="'+cls+' '),'Missing section '+cls);
for(const source of [home,support,privacy]){
 assert.ok(source.includes('unified-site-2026.css?v=20261025-v4'));
 assert.equal((source.match(/<div\b/g)||[]).length,(source.match(/<\/div>/g)||[]).length,'Unbalanced divs');
 assert.equal((source.match(/<section\b/g)||[]).length,(source.match(/<\/section>/g)||[]).length,'Unbalanced sections');
}
for(const [css,label] of [[unified,'unified'],[immersive,'immersive']]){
 assert.equal((css.match(/{/g)||[]).length,(css.match(/}/g)||[]).length,label+' CSS braces');
 assert.ok(css.includes('prefers-reduced-motion:reduce'),label+' reduced motion');
}
assert.ok(downloader.includes("fetch('https://api.github.com/repos/magaskye/discordia/releases?per_page=30'"));
assert.ok(downloader.includes("a.name==='SHA256SUMS.txt'")&&downloader.includes("'latest.yml'"));
assert.ok(unified.includes('[data-campaign-button]')===false || campaign.includes("const campaignUrl = '';"));
assert.ok(privacy.includes('discordia-orbit-app.png'));
assert.ok(!privacy.includes('#progresso'),'Dead old menu anchor');
console.log('SITE_V4_INTEGRATION_CHECKS_OK');
