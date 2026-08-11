#!/usr/bin/env node
/**
 * Genera il contenuto del campo "Additional nginx directives" di Plesk.
 *
 *     npm run nginx
 *
 * ⛔ IL CAMPO IN PLESK NON È VUOTO. Contiene già le regole che fanno funzionare il
 * WordPress multisito — /inner (login, Lab, ordini), /forms, /office, /2025. Il campo è
 * uno solo: incollarci dentro qualcosa senza rimettere quelle regole le cancella, e quei
 * siti smettono di rispondere all'istante.
 *
 * Per questo il file prodotto le include già, verbatim, in fondo (la copia di
 * riferimento sta in deploy/nginx-esistenti-multisite.conf). Si incolla il file intero
 * e tutto torna al suo posto: prima i rimandi dal vecchio sito, poi le regole del
 * multisito invariate.
 *
 * PERCHÉ IL SITO NUOVO CI CONVIVE BENE. La parte finale delle regole esistenti dice
 * "se il file richiesto non esiste sul disco, passa a WordPress". Quindi, caricati i
 * file statici, un indirizzo che corrisponde a un file viene servito come file, e tutto
 * il resto continua ad andare a WordPress — senza dover elencare i sottositi da nessuna
 * parte, e senza toccare la logica esistente.
 *
 * Rimane da aggiungere solo una cosa: i rimandi dai vecchi indirizzi, che vanno PRIMA
 * (un `rewrite ... permanent` risponde e chiude, quindi deve poter intervenire prima che
 * la richiesta finisca a WordPress).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const config = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf8'));

/** Le regole del multisito già presenti su Plesk, da conservare tali e quali. */
const ESISTENTI = readFileSync(join(ROOT, 'deploy/nginx-esistenti-multisite.conf'), 'utf8')
  .split('\n')
  .filter((r) => !r.startsWith('#'))
  .join('\n')
  .trim();

/** Escape dei caratteri che in una regexp nginx avrebbero un altro significato. */
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const righe = [];
righe.push('# ============================================================================');
righe.push('# asteryslab.com — campo "Additional nginx directives"');
righe.push('# GENERATO DA scripts/nginx-plesk.mjs — rigenera con: npm run nginx');
righe.push('#');
righe.push('# Incollare TUTTO questo blocco, sostituendo il contenuto attuale del campo.');
righe.push('# Le regole del multisito che c\'erano prima sono qui in fondo, invariate:');
righe.push('# non vanno rimosse o /inner, /forms, /office e /2025 smettono di rispondere.');
righe.push('#');
righe.push('# Plesk > Domini > asteryslab.com > Hosting & DNS > Apache & nginx');
righe.push('# ============================================================================');
righe.push('');
righe.push('# --- PARTE 1 di 3: DUE PROTEZIONI -------------------------------------------');
righe.push('');
righe.push('# a) La home deve essere quella del sito nuovo.');
righe.push('# Nella cartella convivono index.html (sito nuovo) e index.php (WordPress), e a');
righe.push('# decidere chi vince sarebbe l\'ordine con cui Apache cerca i file indice. Invece');
righe.push('# di dipendere da quell\'ordine, qui lo diciamo esplicitamente.');
righe.push('rewrite ^/$ /index.html break;');
righe.push('');
righe.push('# b) I file nascosti non devono essere scaricabili.');
righe.push('# La pubblicazione automatica lascia nella cartella del sito i propri file di');
righe.push('# servizio (.deploy-risorse.json, .deploy-pagine.json), che elencano tutti i file');
righe.push('# caricati. Questa regola li chiude, e con loro qualunque altro file nascosto che');
righe.push('# dovesse finire li\' per sbaglio (.env, .git, backup di configurazioni).');
righe.push('# Eccezione obbligatoria: .well-known, che serve al rinnovo del certificato HTTPS.');
righe.push('location ~ /\\.(?!well-known) {');
righe.push('    deny all;');
righe.push('    return 404;');
righe.push('}');
righe.push('');
righe.push('# --- PARTE 2 di 3: RIMANDI DAL VECCHIO SITO ---------------------------------');
righe.push(`# ${config.redirects.length} indirizzi del vecchio sito, gia' indicizzati su Google. Il 301 dice ai`);
righe.push('# motori che la pagina si e\' spostata in via definitiva, cosi\' il posizionamento');
righe.push('# accumulato passa all\'indirizzo nuovo invece di andare perso.');
righe.push('#');
righe.push('# Stanno PRIMA delle regole del multisito di proposito: un rimando risponde e');
righe.push('# chiude, quindi deve poter intervenire prima che la richiesta finisca a WordPress.');
righe.push('');

for (const r of config.redirects) {
  if (r.famiglia) {
    // Archivi per tag, categoria e simili: una regola per l'intero gruppo, così vale
    // anche per gli indirizzi che non compaiono nella mappa del sito.
    righe.push(`rewrite ^/${r.famiglia}(/.*)?$ ${r.destination} permanent;`);
    continue;
  }
  // Vale sia con sia senza la barra finale: WordPress la usava, i link esterni possono
  // avere l'una o l'altra forma.
  righe.push(`rewrite ^${esc(r.source)}/?$ ${r.destination} permanent;`);
}

righe.push('');
righe.push('# --- PARTE 3 di 3: REGOLE DEL MULTISITO (gia\' presenti, NON TOCCARE) ---------');
righe.push('# Sono quelle che tengono in piedi /inner, /forms, /office e /2025.');
righe.push('# L\'ultima parte ("se il file non esiste, passa a WordPress") e\' anche cio\' che');
righe.push('# permette al sito nuovo di convivere: i suoi file vengono serviti come file,');
righe.push('# tutto il resto continua ad andare a WordPress come oggi.');
righe.push('');
righe.push(ESISTENTI);
righe.push('');

mkdirSync(join(ROOT, 'deploy'), { recursive: true });
writeFileSync(join(ROOT, 'deploy/nginx-asteryslab.conf'), righe.join('\n'), 'utf8');

console.log('Scritto deploy/nginx-asteryslab.conf');
console.log(`  rimandi aggiunti:        ${config.redirects.length}`);
console.log(`  regole multisito:        conservate (${ESISTENTI.split('\n').length} righe)`);
console.log(`  righe totali da incollare: ${righe.length}`);
