#!/usr/bin/env node
// Read-only test of public website contract. No builds, downloads, publishing or network.
import {readFileSync} from 'node:fs';
import {strict as assert} from 'node:assert';
const read = path => readFileSync(new URL('../'+path,import.meta.url),'utf8');
const homepage=read('index.html');
const support=read('apoie.html');
const css=read('next-chapter-2026.css');
const campaign=read('site-support.js');
const actualScripts=read('site.js');
const one=(source,s)=>{assert.equal(source.split(s).length-1,1,'Missing or duplicate: '+s)};
for(const id of ['downloads','release-status','rc-download-card','stable-download-card','rc-installer','rc-portable','stable-installer','stable-portable','release-hint'])
  one(homepage,'id="'+id+'"');
one(homepage,'id="apoie"');
assert.ok(homepage.includes('href="./apoie.html"'));
assert.ok(homepage.includes('id="hero-title"'));
assert.ok(homepage.includes('./next-chapter-2026.css'));
assert.ok(homepage.includes('src="./site.js?'));
assert.ok(actualScripts.includes('release'), 'Original releases logic missing');
assert.ok(homepage.includes('aria-label="Barra decorativa, sem arrecadação calculada"'));
assert.ok(!homepage.includes('data-apoia-link'));
assert.ok(support.includes('data-campaign-button'));
assert.ok(support.includes('data-apoia-pending'));
assert.ok(support.includes('CAMPANHA EM PREPARAÇÃO'));
assert.ok(support.includes('não um custo atual comprovado'));
assert.ok(support.includes('R$ 200'));
assert.ok(support.includes('R$ 174'));
assert.ok(campaign.includes("const campaignUrl = '';"));
assert.ok(campaign.includes("['apoia.se', 'www.apoia.se']"));
assert.ok(css.includes('@media(prefers-reduced-motion:reduce)'));
assert.ok(css.includes('.support-layout'));
const ids=[...homepage.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(new Set(ids).size,ids.length,'Duplicate HTML id in home page');
console.log('SITE_NEXT_CHAPTER_STATIC_CHECKS_OK: downloads untouched by new support code; CTA disabled; transparency copy present');
