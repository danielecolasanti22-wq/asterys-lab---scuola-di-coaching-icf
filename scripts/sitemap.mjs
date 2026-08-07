#!/usr/bin/env node
/**
 * Genera i due file che tengono allineato il SEO al contenuto reale del sito:
 *
 *     npm run seo
 *
 *   - public/sitemap.xml           dalle rotte dell'app + articoli + eventi
 *   - src/constants/blogIndex.ts   titolo/descrizione/data di ogni articolo
 *
 * Da rieseguire quando si aggiungono pagine, articoli o eventi.
 *
 * Perché l'indice del blog è un file a parte invece di leggere direttamente blogPosts.ts:
 * quel file pesa 292 KB perché contiene il testo integrale dei 52 articoli, e a
 * src/constants/seo.ts servono solo titolo ed excerpt. Importarlo lì lo trascinerebbe
 * nel bundle iniziale di ogni visita, per usarne una minima parte.
 *
 * Restano fuori dalla sitemap:
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
  { test: (p) => p.startsWith('/scuola-di-coaching-'), priority: '0.8', changefreq: 'monthly' },
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

// --- Articoli del blog: indice leggero + voci di sitemap ------------------------------

const MESI = {
  gennaio: 1, febbraio: 2, marzo: 3, aprile: 4, maggio: 5, giugno: 6,
  luglio: 7, agosto: 8, settembre: 9, ottobre: 10, novembre: 11, dicembre: 12,
};

/** "11 novembre 2025" -> "2025-11-11" (le date degli articoli sono scritte in italiano). */
function dataToISO(s) {
  const m = String(s).toLowerCase().match(/(\d{1,2})\s+([a-zàèéìòù]+)\s+(\d{4})/);
  const mese = m && MESI[m[2]];
  if (!mese) return null;
  return `${m[3]}-${String(mese).padStart(2, '0')}-${String(+m[1]).padStart(2, '0')}`;
}

const sorgenteBlog = read('src/constants/blogPosts.ts');
// I post sono oggetti JSON dentro il file: si estraggono i campi che servono ai meta.
const articoli = [...sorgenteBlog.matchAll(
  /"slug":\s*"([^"]+)",\s*\n\s*"title":\s*"((?:[^"\\]|\\.)*)",\s*\n\s*"excerpt":\s*"((?:[^"\\]|\\.)*)",\s*\n\s*"category":\s*"((?:[^"\\]|\\.)*)",\s*\n\s*"date":\s*"([^"]+)"[\s\S]{0,200}?"img":\s*"([^"]+)"/g,
)].map((m) => ({
  slug: m[1],
  title: m[2],
  excerpt: m[3],
  category: m[4],
  date: m[5],
  img: m[6],
  iso: dataToISO(m[5]),
}));

const slugsTotali = [...sorgenteBlog.matchAll(/^\s+"slug":\s*"([^"]+)"/gm)].map((m) => m[1]);
if (articoli.length !== slugsTotali.length) {
  throw new Error(
    `Estratti ${articoli.length} articoli su ${slugsTotali.length}: il formato di blogPosts.ts non combacia con quello atteso.`,
  );
}

const esc = (s) => s.replace(/\\?'/g, "\\'");
writeFileSync(
  join(ROOT, 'src/constants/blogIndex.ts'),
  `// GENERATO DA scripts/sitemap.mjs — non modificare a mano.
// Rigenera con: npm run seo
//
// Solo i metadati dei post: titolo, descrizione e data servono a costruire i tag SEO e il
// JSON-LD di ogni articolo senza tirarsi dietro i 292 KB di testo di blogPosts.ts.

export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Data come mostrata in pagina, es. "11 novembre 2025". */
  date: string;
  /** Stessa data in formato ISO per i dati strutturati; null se non interpretabile. */
  iso: string | null;
  /** Immagine di copertina, per l'anteprima social e i dati strutturati. */
  img: string;
};

export const BLOG_INDEX: BlogMeta[] = [
${articoli
  .map(
    (a) =>
      `  { slug: '${esc(a.slug)}', title: '${esc(a.title)}', excerpt: '${esc(a.excerpt)}', category: '${esc(a.category)}', date: '${esc(a.date)}', iso: ${a.iso ? `'${a.iso}'` : 'null'}, img: '${esc(a.img)}' },`,
  )
  .join('\n')}
];

export const BLOG_BY_SLUG: Record<string, BlogMeta> = Object.fromEntries(
  BLOG_INDEX.map((p) => [p.slug, p]),
);
`,
  'utf8',
);

const slugs = articoli.map((a) => `/blog/${a.slug}`);

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
<!-- GENERATO DA scripts/sitemap.mjs — rigenera con: npm run seo -->
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
