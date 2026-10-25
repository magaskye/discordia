#!/usr/bin/env node
// Site source-only regression checks; no builds/deploys/network or Electron installers.
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const read=file=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
const home=read('index.html');
const visual=read('immersive-landing-2026.css');
const js=read('site.js');
const campaign=read('site-support.js');
const asset=read('ui-discordia-v2-preview.svg');
const support=read('apoie.html');
const ids=[...home.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate DOM ids');
for(const id of ['inicio','recursos','experiencia','personalizacao','apoie','velosinc','tecnologia','historico','downloads','comunidade','release-hero-badge','release-hero-description','release-status','rc-download-card','stable-download-card','rc-installer','rc-portable','stable-installer','stable-portable','release-hint','nav-main','nav-toggle']){
  assert.ok(home.includes('id="'+id+'"'),'Missing '+id);
}
assert.equal((home.match(/<section\b/g)||[]).length,(home.match(/<\/section>/g)||[]).length,'Unbalanced sections');
assert.equal((home.match(/<div\b/g)||[]).length,(home.match(/<\/div>/g)||[]).length,'Unbalanced divs');
for(const cls of ['n26-hero','n26-hero-scene','n26-scene-window','n26-panel-lilac','n26-panel-indigo','n26-panel-cream','n26-final','n26-ribbon']){
 assert.ok(home.includes(cls) && visual.includes('.'+cls),'Missing illustration '+cls);
}
assert.ok(home.includes('ILUSTRATIVA')&&home.includes('ILUSTRATIVO'),'Concept imagery must be labelled');
assert.ok(home.includes('src="./ui-discordia-v2-preview.svg"')&&asset.includes('<svg'));
assert.ok(home.includes('src="./discordia-orbit-app.png"'),'Real icon must be used');
assert.ok(home.includes('immersive-landing-2026.css?v=full-redesign-20261025'),'Versioned stylesheet missing');
assert.ok(visual.includes('prefers-reduced-motion')&&visual.includes('max-width:430px'),'Responsive/motion controls missing');
assert.equal((visual.match(/{/g)||[]).length,(visual.match(/}/g)||[]).length,'Unbalanced CSS declarations');
assert.ok(js.includes("fetch('https://api.github.com/repos/magaskye/discordia/releases?per_page=30'"));
assert.ok(js.includes("a.name==='SHA256SUMS.txt'")&&js.includes("'latest.yml'"));
assert.ok(campaign.includes("const campaignUrl = '';"),'APOIA link must remain disabled');
assert.ok(support.includes('CAMPANHA EM PREPARAÇÃO'),'Support page must not imply active campaign');
console.log('IMMERSIVE_SITE_STATIC_CHECKS_OK');
