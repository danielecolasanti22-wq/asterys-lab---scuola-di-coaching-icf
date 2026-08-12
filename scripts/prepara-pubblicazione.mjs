#!/usr/bin/env node
/**
 * Prepara il ramo "pubblicazione", quello che Plesk legge per aggiornare il sito.
 *
 *     npm run pubblica
 *
 * PERCHÉ SERVE UN RAMO A PARTE. Il ramo principale contiene il codice sorgente, che a un
 * server web non serve: le pagine vere nascono dalla compilazione, e `dist/` non è nel
 * repository. Plesk, tirando giù il ramo principale, si troverebbe file .tsx e nessuna
 * pagina.
 *
 * L'alternativa sarebbe far compilare al server a ogni aggiornamento, ma vorrebbe dire
 * installare le dipendenze su Plesk ogni volta: più lento e con più cose che possono
 * rompersi proprio mentre stai pubblicando. Qui la compilazione avviene sul computer di
 * chi lavora, e il server riceve solo file pronti.
 *
 * COSA FA. Compila, poi copia il risultato dentro il ramo `pubblicazione` usando una
 * cartella di lavoro separata (git worktree), così il ramo principale non viene mai
 * toccato: puoi avere modifiche in corso e questo script non le disturba.
 *
 * DOPO. Resta solo da fare push del ramo, e Plesk se lo prende.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, rmSync, mkdirSync, cpSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const RAMO = 'pubblicazione';
const LAVORO = join(ROOT, '.pubblicazione-tmp');

const git = (...args) =>
  execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();

// --- Controlli prima di toccare qualsiasi cosa ---------------------------------------

const dist = join(ROOT, 'dist');
if (!existsSync(dist)) {
  console.error('dist/ non esiste. Lancia prima:  npm run build');
  process.exit(1);
}
const pagine = readdirSync(dist).length;
if (!existsSync(join(dist, 'index.html')) || pagine < 10) {
  console.error('dist/ sembra incompleto. Rilancia:  npm run build');
  process.exit(1);
}

console.log('Preparo il ramo di pubblicazione…');

// --- Cartella di lavoro separata ------------------------------------------------------
// Un worktree è una seconda cartella collegata allo stesso repository: permette di
// lavorare su un altro ramo senza cambiare quello su cui stai scrivendo.

if (existsSync(LAVORO)) {
  try { git('worktree', 'remove', '--force', LAVORO); } catch {}
  rmSync(LAVORO, { recursive: true, force: true });
}

const ramoEsiste = (() => {
  try { git('rev-parse', '--verify', RAMO); return true; } catch { return false; }
})();

if (ramoEsiste) {
  git('worktree', 'add', LAVORO, RAMO);
} else {
  // Ramo "orfano": nasce senza storia alle spalle, perché qui contano solo i file del
  // sito, non come ci si è arrivati (quello lo racconta il ramo principale).
  git('worktree', 'add', '--detach', LAVORO);
  execFileSync('git', ['checkout', '--orphan', RAMO], { cwd: LAVORO, stdio: 'pipe' });
  execFileSync('git', ['rm', '-rf', '--cached', '.'], { cwd: LAVORO, stdio: 'pipe' });
}

// --- Sostituisce il contenuto con la compilazione appena fatta -------------------------

for (const voce of readdirSync(LAVORO)) {
  if (voce === '.git') continue;
  rmSync(join(LAVORO, voce), { recursive: true, force: true });
}
// I file di servizio di macOS non c'entrano niente con il sito e non vanno pubblicati.
cpSync(dist, LAVORO, {
  recursive: true,
  filter: (src) => !/\/(\.DS_Store|__MACOSX|Thumbs\.db)$/.test(src),
});

// Un promemoria per chi dovesse aprire questo ramo per sbaglio.
mkdirSync(LAVORO, { recursive: true });
const nota = `# Ramo di pubblicazione — NON modificare a mano

Contiene il sito già compilato, ed è il ramo che Plesk legge per aggiornare
asteryslab.com. Viene rigenerato da capo a ogni pubblicazione: qualunque modifica fatta
qui verrebbe persa al giro successivo.

Per cambiare il sito si lavora sul ramo principale e si lancia:

    npm run build && npm run pubblica

Generato il ${new Date().toISOString().slice(0, 10)}.
`;
execFileSync('bash', ['-c', `cat > ${JSON.stringify(join(LAVORO, 'LEGGIMI.md'))}`], {
  input: nota,
  stdio: ['pipe', 'pipe', 'pipe'],
});

// --- Registra ------------------------------------------------------------------------

execFileSync('git', ['add', '-A'], { cwd: LAVORO, stdio: 'pipe' });

const nulla = (() => {
  try {
    execFileSync('git', ['diff', '--cached', '--quiet'], { cwd: LAVORO, stdio: 'pipe' });
    return true;
  } catch { return false; }
})();

if (nulla) {
  console.log('Nessuna differenza rispetto all\'ultima pubblicazione: non c\'è niente da inviare.');
} else {
  const daDove = git('rev-parse', '--short', 'HEAD');
  execFileSync(
    'git',
    ['commit', '-m', `sito compilato da ${daDove}`, '--author=Asterys Lab <noreply@asteryslab.com>'],
    { cwd: LAVORO, stdio: 'pipe' },
  );
  const n = readdirSync(LAVORO).length;
  console.log(`Ramo "${RAMO}" aggiornato — ${n} voci, dal commit ${daDove}.`);
}

git('worktree', 'remove', '--force', LAVORO);

console.log('');
console.log('Ora resta solo da inviare il ramo:');
console.log(`    git push origin ${RAMO}`);
console.log('');
console.log('Poi Plesk lo tira giù e il sito è aggiornato.');
