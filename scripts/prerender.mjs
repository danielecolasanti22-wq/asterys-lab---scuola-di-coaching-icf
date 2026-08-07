#!/usr/bin/env node
/**
 * Genera l'HTML statico di ogni pagina del sito.
 *
 * Gira in automatico dopo `npm run build` (vedi package.json). Per ogni percorso scrive
 * dist/<percorso>/index.html con l'<head> completo e il contenuto già renderizzato, al
 * posto del solo <div id="root"></div> che riceveva prima chiunque non eseguisse JS.
 *
 * A cosa serve, concretamente:
 *  - Bing (e quindi ChatGPT) e i bot delle AI leggono l'HTML grezzo: prima trovavano una
 *    pagina vuota su tutti e 71 gli URL, con lo stesso titolo generico;
 *  - Google non deve più aspettare di eseguire il JavaScript per capire una pagina;
 *  - la pagina compare prima anche per le persone, perché il testo è già nell'HTML.
 *
 * L'<head> non viene preso dal markup di React ma costruito qui, dalle stesse funzioni
 * di src/constants/seo.ts che usa il sito a runtime: una sola fonte di verità, e i tag
 * finiscono davvero dentro <head> invece che in mezzo al body.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');

const { render, getSeoForPath, getJsonLdForPath, ogImageFor, SITE_URL } = await import(
  join(ROOT, 'dist-ssr/entry-server.js')
);

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

/** Le stesse rotte della sitemap: se una pagina merita di essere indicizzata, va prerenderizzata. */
const sitemap = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
const percorsi = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(SITE_URL, ''))
  .map((p) => (p === '' ? '/' : p));

// Le pagine escluse dalla sitemap (private, legali) vanno comunque prerenderizzate: non
// devono finire sui motori, ma chi ci arriva dal link diretto merita la pagina completa.
const extra = ['/borsa-di-studio', '/credito-ai-talenti', '/privacy', '/cookie', '/termini'];
const tutti = [...new Set([...percorsi, ...extra])];

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Ricostruisce l'head della pagina: gli stessi tag che Seo.tsx emette nel browser. */
function head(path) {
  const meta = getSeoForPath(path);
  const canonical = SITE_URL + (path === '/' ? '' : path);
  const og = ogImageFor(meta);
  const tag = [];

  tag.push(`<title>${escapeHtml(meta.title)}</title>`);
  if (meta.description) tag.push(`<meta name="description" content="${escapeHtml(meta.description)}">`);
  tag.push(`<link rel="canonical" href="${canonical}">`);
  if (meta.noindex) tag.push('<meta name="robots" content="noindex,follow">');

  tag.push('<meta property="og:type" content="website">');
  tag.push('<meta property="og:site_name" content="Asterys Lab">');
  tag.push('<meta property="og:locale" content="it_IT">');
  tag.push(`<meta property="og:title" content="${escapeHtml(meta.title)}">`);
  if (meta.description)
    tag.push(`<meta property="og:description" content="${escapeHtml(meta.description)}">`);
  tag.push(`<meta property="og:url" content="${canonical}">`);
  tag.push(`<meta property="og:image" content="${og}">`);

  tag.push('<meta name="twitter:card" content="summary_large_image">');
  tag.push(`<meta name="twitter:title" content="${escapeHtml(meta.title)}">`);
  if (meta.description)
    tag.push(`<meta name="twitter:description" content="${escapeHtml(meta.description)}">`);
  tag.push(`<meta name="twitter:image" content="${og}">`);

  for (const obj of getJsonLdForPath(path)) {
    // `<` va neutralizzato: dentro uno <script> una sequenza "</" chiuderebbe il tag.
    const json = JSON.stringify(obj).replace(/</g, '\\u003c');
    tag.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tag.join('\n    ');
}

let fatte = 0;
const falliti = [];

for (const path of tutti) {
  try {
    const app = await render(path);
    const html = template
      // Il template ha già un <title> segnaposto: va sostituito, non affiancato.
      .replace(/\s*<title>[\s\S]*?<\/title>/, '')
      .replace('</head>', `  ${head(path)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`);

    const dir = path === '/' ? DIST : join(DIST, path);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf8');
    fatte++;
  } catch (e) {
    falliti.push({ path, errore: e.message });
  }
}

console.log(`Prerender: ${fatte}/${tutti.length} pagine`);
if (falliti.length) {
  console.log('\nFALLITE:');
  for (const f of falliti) console.log(`  ${f.path} -> ${f.errore}`);
  process.exitCode = 1;
}
