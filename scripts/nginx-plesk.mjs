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
righe.push('# --- 1. IL PRINCIPIO ---------------------------------------------------------');
righe.push('# asteryslab.com e\' un WordPress MULTISITO: la vetrina e\' solo uno dei siti, e');
righe.push('# accanto vivono /inner (area riservata, login e Lab) e altri sottositi, tutti');
righe.push('# serviti dallo stesso WordPress installato nella cartella principale.');
righe.push('#');
righe.push('# Per questo la vetrina non va sostituita cancellando nulla: i file del sito');
righe.push('# nuovo si affiancano a WordPress, e nginx decide caso per caso chi risponde.');
righe.push('#');
righe.push('# La regola in fondo (punto 4) e\' scritta per essere PRUDENTE: serve un file del');
righe.push('# sito nuovo solo se quel file esiste davvero, altrimenti passa la richiesta a');
righe.push('# WordPress. Cosi\' /inner, la bacheca, gli altri sottositi e qualunque indirizzo');
righe.push('# che non abbiamo previsto continuano a funzionare da soli, senza doverli');
righe.push('# elencare qui uno per uno.');
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
righe.push('# Solo i file del sito nuovo: hanno l\'impronta nel nome e non cambiano mai.');
righe.push('# Le immagini di WordPress (/wp-content/uploads) restano fuori di proposito,');
righe.push('# perche\' li\' i file vengono sostituiti mantenendo lo stesso nome.');
righe.push('location ^~ /assets/ {');
righe.push('    expires 1y;');
righe.push('    add_header Cache-Control "public, immutable";');
righe.push('}');
righe.push('');
righe.push('# --- 4. CHI RISPONDE ---------------------------------------------------------');
righe.push('# L\'ordine e\' quello che rende l\'operazione reversibile e a prova di svista:');
righe.push('#   1. c\'e\' un file con questo nome fra quelli del sito nuovo?  -> lo servo');
righe.push('#   2. c\'e\' una cartella con dentro index.html?                 -> la servo');
righe.push('#   3. in tutti gli altri casi                                  -> WordPress');
righe.push('#');
righe.push('# Il terzo punto e\' la rete di sicurezza: /inner, /wp-admin, gli altri sottositi');
righe.push('# e ogni indirizzo non previsto finiscono a WordPress come oggi. Se domani');
righe.push('# aggiungi un sottosito, funziona senza toccare nulla di tutto questo.');
righe.push('location / {');
righe.push('    try_files $uri $uri/index.html @wordpress;');
righe.push('}');
righe.push('');
righe.push('location @wordpress {');
righe.push('    try_files $uri $uri/ /index.php?$args;');
righe.push('}');
righe.push('');
righe.push('# --- SE PLESK RIFIUTA IL BLOCCO QUI SOPRA -----------------------------------');
righe.push('# Plesk genera gia\' una sua "location /". Se al momento di applicare compare un');
righe.push('# errore tipo "duplicate location", vuol dire che le due si pestano i piedi:');
righe.push('# cancella le ultime due sezioni e usa queste al loro posto. Fanno la stessa');
righe.push('# cosa, ma elencando le sezioni del sito nuovo invece di ridefinire la radice.');
righe.push('# (In questo caso la home va gestita a parte, con "location = /".)');
righe.push('#');
righe.push('# location = / {');
righe.push('#     try_files /index.html =404;');
righe.push('# }');
righe.push('# location ~ ^/(corsi|blog|eventi|aziende|about|iscriviti|personal-coaching|scuola-di-coaching-|privacy|cookie|termini|borsa-di-studio|credito-ai-talenti)(/|$) {');
righe.push('#     try_files $uri $uri/index.html /index.html;');
righe.push('# }');
righe.push('#');
righe.push('# NB: nessuna delle due varianti tocca /inner, /wp-admin o gli altri sottositi.');
righe.push('');

mkdirSync(join(ROOT, 'deploy'), { recursive: true });
writeFileSync(join(ROOT, 'deploy/nginx-asteryslab.conf'), righe.join('\n'), 'utf8');

console.log(`Regole nginx scritte in deploy/nginx-asteryslab.conf`);
console.log(`  rimandi: ${config.redirects.length}`);
console.log(`  righe totali: ${righe.length}`);
