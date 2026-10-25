#!/usr/bin/env node
/* Static-only regression of Discórdia dark finish; no network, builds or deploys. */
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const load=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
const pages=['index.html','apoie.html','privacidade.html'].map(load);
const css=load('dark-finish-2026.css');
const downloader=load('site.js');
const campaign=load('site-support.js');
const blocks=['.n26-panel-lilac','.n26-panel-cream','.n27-network','.n27-journey','.n27-support','.n27-faq','.n27-policy','.n27-support-detail','.n27-support-detail-card','.n27-faq-items details','.n27-download-card','.n27-goal','.n26-ribbon','.n26-float-chip'];
for(const page of pages){
 assert.ok(page.includes('dark-finish-2026.css?v=dark-final-20261025'),'Dark finish missing');
 assert.ok(page.lastIndexOf('dark-finish-2026.css')>page.lastIndexOf('unified-site-2026.css'),'Dark CSS must load last');
 assert.ok(page.includes('<meta name="theme-color" content="#100d2c">'),'Inconsistent theme');
}
for(const block of blocks)assert.ok(css.includes(block),'Uncovered light surface '+block);
assert.equal((css.match(/{/g)||[]).length,(css.match(/}/g)||[]).length,'CSS declaration braces');
assert.ok(css.includes('prefers-reduced-motion:reduce'));
assert.ok(!css.includes('@import')&&!css.includes('url('));
const ids=[...pages[0].matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicated home IDs');
for(const id of ['rc-installer','rc-portable','stable-installer','stable-portable','release-status','rc-version','stable-version','stable-card-label','stable-card-description','release-hint'])
 assert.ok(pages[0].includes('id="'+id+'"'),'Missing release UI ID: '+id);
assert.ok(downloader.includes("fetch('https://api.github.com/repos/magaskye/discordia/releases?per_page=30'"));
assert.ok(downloader.includes("a.name==='SHA256SUMS.txt'")&&downloader.includes("'latest.yml'"));
assert.ok(campaign.includes("const campaignUrl = '';"),'Unapproved payments must stay disabled');
assert.ok(pages[1].includes('data-campaign-button')&&pages[1].includes(' hidden>'),'Support button must start hidden');
console.log('SITE_DARK_FINISH_CHECKS_OK');
