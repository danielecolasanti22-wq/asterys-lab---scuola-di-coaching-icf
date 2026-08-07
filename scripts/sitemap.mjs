#!/usr/bin/env node
/**
 * Genera public/sitemap.xml dalle rotte reali dell'app.
 *
 *     npm run sitemap
 *
 * Da rieseguire quando si aggiungono pagine, articoli o eventi. Legge le rotte da
 * src/App.tsx e i contenuti dai constants, così la sitemap non può più restare indietro
 * rispetto al sito (prima era scritta a mano e ne dichiarava 14 su 25).
 *
 * Restano fuori:
 *  - le pagine private (borsa di studio, credito ai talenti), che non vanno indicizzate;
 *  - le rotte con parametro (/corsi/:id, /blog/:id), sostituite dagli URL reali;
 *  - la 404.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const read = (p) => readFileSync(join(ROOT, p), 'utf8');

const SITE_URL = read('src/constants/seo.ts').match(/SITE_URL\s*=\s*'([^']+)'/)?.[1];
if (!SITE_URL) throw new Error('SITE_URL non trovato in src/constants/seo.ts');

/** Pagine da non indicizzare: private o senza contenuto proprio. */
const ESCLUSE = new Set(['/borsa-di-studio', '/credito-ai-talenti', '*']);

/** Priorità e frequenza per prefisso, dalla più specifica alla più generica. */
const REGOLE = [
  { test: (p) => p === '/', priority: '1.0', changefreq: 'weekly' },
  { test: (p) => p === '/corsi', priority: '0.9', changefreq: 'weekly' },
  { test: (p) => p === '/corsi/apcm', priority: '0.9', changefreq: 'weekly' },
  { test: (p) => p.startsWith('/corsi/'), priority: '0.8', changefreq: 'weekly' },
  { test: (p) => p === '/aziende' || p === '/personal-coaching', priority: '0.8', changefreq: 'monthly' },
  { test: (p) => p === '/iscriviti', priority: '0.7', changefreq: 'monthly' },
  { test: (p) => p.startsWith('/blog/'), priority: '0.6', changefreq: 'monthly' },
  { test: (p) => p.startsWith('/eventi'), priority: '0.6', changefreq: 'weekly' },
  { test: (p) => p === '/blog', priority: '0.6', changefreq: 'weekly' },
  { test: (p) => p === '/about', priority: '0.6', changefreq: 'monthly' },
  { test: () => true, priority: '0.3', changefreq: 'yearly' },
];

// Rotte statiche dichiarate in App.tsx
const rotte = [...read('src/App.tsx').matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((p) => !p.includes(':') && !ESCLUSE.has(p));

// Articoli del blog
const slugs = [...read('src/constants/blogPosts.ts').matchAll(/^\s+"slug":\s*"([^"]+)"/gm)].map(
  (m) => `/blog/${m[1]}`,
);

// Eventi effettivamente pubblicati (eventsData è vuoto quando non ce ne sono)
const eventiBlocco = read('src/constants/events.ts').match(
  /export const eventsData[^=]*=\s*\[([\s\S]*?)\n\];/,
)?.[1] ?? '';
const eventi = [...eventiBlocco.matchAll(/id:\s*'([^']+)'/g)].map((m) => `/eventi/${m[1]}`);

const oggi = new Date().toISOString().slice(0, 10);
const tutte = [...new Set([...rotte, ...slugs, ...eventi])];

const urls = tutte
  .map((path) => {
    const regola = REGOLE.find((r) => r.test(path));
    const loc = SITE_URL + (path === '/' ? '/' : path);
    return `  <url><loc>${loc}</loc><lastmod>${oggi}</lastmod><changefreq>${regola.changefreq}</changefreq><priority>${regola.priority}</priority></url>`;
  })
  .join('\n');

writeFileSync(
  join(ROOT, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<!-- GENERATO DA scripts/sitemap.mjs — rigenera con: npm run sitemap -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  'utf8',
);

console.log(`Sitemap scritta: ${tutte.length} URL`);
console.log(`  pagine:   ${rotte.length}`);
console.log(`  articoli: ${slugs.length}`);
console.log(`  eventi:   ${eventi.length}`);
console.log(`  escluse:  ${[...ESCLUSE].filter((e) => e !== '*').join(', ')} (private, noindex)`);
