#!/usr/bin/env node
/**
 * Generazione varianti immagine + manifest dimensioni.
 *
 * Da eseguire a mano dopo aver aggiunto o sostituito immagini in public/:
 *
 *     npm run images
 *
 * Non fa parte della build: i file generati vengono committati e Vercel li serve
 * come statici. Così la build resta veloce e senza dipendenze native.
 *
 * Per ogni jpg/png in public/ produce:
 *   - <nome>.<ext>.webp       variante moderna a piena risoluzione
 *   - <nome>.<ext>.400w.webp  } varianti ridotte, generate solo quando l'originale è
 *   - <nome>.<ext>.800w.webp  } più largo della variante stessa
 *
 * Le varianti ridotte contano quanto il formato: molti asset sono enormemente più grandi
 * di come vengono mostrati (i badge ICF sono 1600x1600 e si vedono a 48px), e lì il
 * risparmio sta nel non spedire pixel che nessuno vedrà.
 *
 * L'estensione originale resta nel nome della variante perché in public/ convivono file
 * con lo stesso nome ed estensioni diverse (aziende/4.jpg e aziende/4.png sono immagini
 * diverse, usate entrambe): senza di essa le due varianti si sovrascriverebbero.
 *
 * Una variante viene tenuta SOLO se è più leggera del file da cui deriva: su alcuni
 * JPEG già compressi e sui PNG a pochi colori il WebP è più pesante, e in quel caso
 * serviamo l'originale. Il manifest registra quali varianti esistono davvero, così il
 * componente Img non punta mai a un file assente.
 *
 * Richiede cwebp e ImageMagick:
 *     brew install webp imagemagick
 */
import { execFile } from 'node:child_process';
import { readdir, stat, unlink, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, extname, join, relative } from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const run = promisify(execFile);
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PUBLIC_DIR = join(ROOT, 'public');
const MANIFEST = join(ROOT, 'src/constants/imageManifest.ts');

const QUALITY = 82;
/**
 * Larghezze delle varianti ridotte, dalla più piccola. Ognuna occupa un bit nel manifest
 * (400w -> bit 2, 800w -> bit 3), quindi vanno aggiunte in coda, mai riordinate.
 */
const WIDTHS = [400, 800];
/** Quante conversioni in parallelo (cwebp è single-thread per immagine). */
const CONCURRENCY = 8;

const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png']);

/** Elenca ricorsivamente le immagini sorgente, saltando le varianti già generate. */
async function findImages(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await findImages(full)));
    } else if (SOURCE_EXT.has(extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

async function dimensions(file) {
  const { stdout } = await run('magick', ['identify', '-format', '%w %h', file]);
  const [w, h] = stdout.trim().split(/\s+/).map(Number);
  return { w, h };
}

async function sizeOf(file) {
  return (await stat(file)).size;
}

/**
 * Converte in WebP e tiene il risultato solo se conviene.
 * @returns true se la variante è stata scritta e mantenuta.
 */
async function toWebp(src, dest, { width } = {}) {
  const args = ['-q', String(QUALITY), '-quiet', '-metadata', 'none'];
  if (width) args.push('-resize', String(width), '0');
  args.push(src, '-o', dest);
  await run('cwebp', args);

  // Confronto col file che l'utente scaricherebbe altrimenti: per la variante a piena
  // risoluzione è l'originale; per quella mobile è comunque l'originale, dato che è la
  // sola alternativa servibile a quel breakpoint.
  const [origBytes, webpBytes] = await Promise.all([sizeOf(src), sizeOf(dest)]);
  if (webpBytes >= origBytes) {
    await unlink(dest);
    return false;
  }
  return true;
}

/** Esegue task con un pool a concorrenza fissa, preservando l'ordine dei risultati. */
async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        results[i] = await worker(items[i], i);
      }
    }),
  );
  return results;
}

const images = (await findImages(PUBLIC_DIR)).sort();
console.log(`Trovate ${images.length} immagini in public/\n`);

let savedBytes = 0;
let webpCount = 0;
let variantCount = 0;
let skipped = 0;

const entries = await pool(images, CONCURRENCY, async (src) => {
  const key = '/' + relative(PUBLIC_DIR, src);
  const { w, h } = await dimensions(src);
  const origBytes = await sizeOf(src);

  // Nome completo (con estensione) come base: vedi nota sulle collisioni in testa al file.
  const webpPath = `${src}.webp`;

  const hasWebp = await toWebp(src, webpPath);
  if (hasWebp) {
    webpCount++;
    savedBytes += origBytes - (await sizeOf(webpPath));
  } else {
    skipped++;
  }

  let flags = hasWebp ? 1 : 0;
  for (const [i, width] of WIDTHS.entries()) {
    const bit = 1 << (i + 1);
    const path = `${src}.${width}w.webp`;
    // Ridimensionare verso l'alto non ha senso: la variante servirebbe solo a pesare di più.
    if (w > width && (await toWebp(src, path, { width }))) {
      flags |= bit;
      variantCount++;
    } else if (existsSync(path)) {
      // Variante orfana da un giro precedente (immagine sostituita con una più piccola).
      await unlink(path);
    }
  }

  return [key, w, h, flags];
});

// Manifest compatto: [larghezza, altezza, flag]. Le dimensioni servono a riservare lo
// spazio in pagina (niente salti di layout), i flag a sapere quali varianti esistono.
const body = entries.map(([k, w, h, f]) => `  '${k}': [${w}, ${h}, ${f}],`).join('\n');
await writeFile(
  MANIFEST,
  `// GENERATO DA scripts/images.mjs — non modificare a mano.
// Rigenera con: npm run images
//
// Formato: percorso -> [larghezza, altezza, flag]
// flag: bit 0 = esiste <percorso>.webp
${WIDTHS.map((w, i) => `//       bit ${i + 1} = esiste <percorso>.${w}w.webp`).join('\n')}
// Una variante manca quando pesava più dell'originale, o quando l'originale era già più
// piccolo di quella larghezza: in entrambi i casi si serve il file originale.

export type ImageMeta = readonly [width: number, height: number, flags: number];

export const HAS_WEBP = 1;
/** Larghezze delle varianti ridotte, con il bit del manifest che ne segnala l'esistenza. */
export const VARIANTS: readonly { width: number; bit: number }[] = [
${WIDTHS.map((w, i) => `  { width: ${w}, bit: ${1 << (i + 1)} },`).join('\n')}
];

export const IMAGE_MANIFEST: Record<string, ImageMeta> = {
${body}
};
`,
  'utf8',
);

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(`WebP a piena risoluzione: ${webpCount}`);
console.log(`Varianti ridotte:         ${variantCount}`);
console.log(`Scartati (piu grandi):    ${skipped}  -> si serve l'originale`);
console.log(`Risparmio a parita di risoluzione: ${mb(savedBytes)} MB`);
console.log(`\nManifest scritto in ${relative(ROOT, MANIFEST)}`);
