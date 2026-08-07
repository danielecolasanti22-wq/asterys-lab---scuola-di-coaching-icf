#!/usr/bin/env node
/**
 * Genera le regole nginx da incollare in Plesk, equivalenti a quelle di vercel.json.
 *
 *     npm run nginx
 *
 * Le regole di vercel.json valgono solo su Vercel. Se il sito viene servito da Plesk —
 * che è il caso quando prende il posto della vetrina WordPress su asteryslab.com —
 * servono le stesse istruzioni scritte per nginx, altrimenti i rimandi non esistono e
 * ogni vecchio indirizzo indicizzato risponde "pagina non trovata".
 *
 * Il file prodotto (deploy/nginx-asteryslab.conf) va incollato in:
 *   Plesk → Domini → asteryslab.com → Apache & nginx Settings
 *          → "Additional nginx directives"
 *
 * Tre cose che le regole garantiscono, in quest'ordine:
 *  1. /inner resta a WordPress. È un'installazione separata, con il login e i Lab degli
 *     iscritti: non deve mai essere intercettata dal sito vetrina.
 *  2. I vecchi indirizzi rimandano ai nuovi con un 301 (rimando permanente), così
 *     l'autorità accumulata sui motori passa alla pagina nuova invece di andare persa.
 *  3. Tutto il resto viene servito dai file statici già pronti, con ripiego su index.html
 *     per gli indirizzi che non hanno un file (il sito è una single page application).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const config = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8'));

/** Escape dei caratteri che in una regexp nginx avrebbero un altro significato. */
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const righe = [];
righe.push('# ============================================================================');
righe.push('# Asterys Lab — vetrina statica + area riservata WordPress sullo stesso dominio');
righe.push('# GENERATO DA scripts/nginx-plesk.mjs — rigenera con: npm run nginx');
righe.push('#');
righe.push('# Da incollare in Plesk:');
righe.push('#   Domini > asteryslab.com > Apache & nginx Settings > Additional nginx directives');
righe.push('# ============================================================================');
righe.push('');
righe.push('# --- 1. AREA RISERVATA ------------------------------------------------------');
righe.push('# /inner e\' un WordPress separato (login, Lab, ordini). Va lasciato a PHP e mai');
righe.push('# toccato dalle regole della vetrina: senza questo blocco, il ripiego su');
righe.push('# index.html piu\' sotto se lo mangerebbe e gli iscritti non entrerebbero piu\'.');
righe.push('# Senza barra finale il blocco qui sotto non scatterebbe e si finirebbe sulla');
righe.push('# home della vetrina: chi digita asteryslab.com/inner deve entrare lo stesso.');
righe.push('location = /inner {');
righe.push('    return 301 /inner/;');
righe.push('}');
righe.push('location ^~ /inner/ {');
righe.push('    try_files $uri $uri/ /inner/index.php?$args;');
righe.push('}');
righe.push('');
righe.push('# --- 2. RIMANDI DAL VECCHIO SITO -------------------------------------------');
righe.push(`# ${config.redirects.length} indirizzi del sito WordPress precedente, gia\' indicizzati su Google.`);
righe.push('# Il 301 dice ai motori che la pagina si e\' spostata in via definitiva.');
righe.push('');

for (const r of config.redirects) {
  // Il rimando vale sia con sia senza la barra finale: WordPress la usava, i link
  // esterni possono avere l'una o l'altra forma.
  righe.push(`rewrite ^${esc(r.source)}/?$ ${r.destination} permanent;`);
}

righe.push('');
righe.push('# --- 3. CACHE DEGLI ASSET ---------------------------------------------------');
righe.push('# I file con l\'impronta nel nome (e le immagini) non cambiano mai: si possono');
righe.push('# tenere in cache a lungo, cosi\' chi torna sul sito non li riscarica.');
righe.push('location ~* ^/assets/ {');
righe.push('    expires 1y;');
righe.push('    add_header Cache-Control "public, immutable";');
righe.push('}');
righe.push('location ~* \\.(webp|png|jpe?g|svg|woff2|pdf)$ {');
righe.push('    expires 1y;');
righe.push('    add_header Cache-Control "public, immutable";');
righe.push('}');
righe.push('');
righe.push('# --- 4. LA VETRINA ----------------------------------------------------------');
righe.push('# Ogni pagina esiste gia\' come file HTML pronto (sono state generate al build),');
righe.push('# quindi si prova prima il file, poi la cartella con il suo index.html, e solo');
righe.push('# alla fine si ripiega sulla home lasciando che sia il browser a fare il resto.');
righe.push('location / {');
righe.push('    try_files $uri $uri/index.html $uri/ /index.html;');
righe.push('}');
righe.push('');

mkdirSync(join(ROOT, 'deploy'), { recursive: true });
writeFileSync(join(ROOT, 'deploy/nginx-asteryslab.conf'), righe.join('\n'), 'utf8');

console.log(`Regole nginx scritte in deploy/nginx-asteryslab.conf`);
console.log(`  rimandi: ${config.redirects.length}`);
console.log(`  righe totali: ${righe.length}`);
