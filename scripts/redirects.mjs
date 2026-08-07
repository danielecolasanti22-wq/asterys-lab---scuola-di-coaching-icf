#!/usr/bin/env node
/**
 * Genera la sezione "redirects" di vercel.json a partire dagli indirizzi del sito
 * WordPress che il nuovo sito va a sostituire.
 *
 *     npm run redirects
 *
 * PERCHÉ SERVE. Il sito attuale su asteryslab.com ha 110 articoli e 100 pagine già
 * indicizzati, con indirizzi di forma completamente diversa: gli articoli stanno su
 * /nome-articolo, il nuovo sito li mette su /blog/nome-articolo; le pagine corso stanno
 * sotto /scuola-coaching-facilitazione/... e ora sono sotto /corsi/... Senza questi
 * rimandi, il giorno in cui il nuovo sito sostituisce WordPress ognuno di quegli
 * indirizzi risponderebbe "pagina non trovata": si perderebbero in un colpo solo il
 * posizionamento accumulato in anni e chiunque arrivi da un link esterno o da un
 * risultato di ricerca già presente su Google.
 *
 * Un rimando permanente (301) dice ai motori che la pagina si è spostata: l'autorità
 * dell'indirizzo vecchio passa a quello nuovo invece di andare persa.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const read = (p) => readFileSync(join(ROOT, p), 'utf8');

/** Pagine del vecchio sito e loro corrispondente attuale. */
const PAGINE = {
  // Percorsi di formazione
  'master-in-coaching': '/corsi/apcm',
  'scuola-coaching-facilitazione/masterincoaching': '/corsi/apcm',
  'scuola-coaching-facilitazione/diventare-coach-professionista': '/corsi/apcm',
  'scuola-coaching-facilitazione/pratica-coaching': '/corsi/apcm',
  'scuola-coaching-facilitazione/pratica-di-coaching': '/corsi/apcm',
  'scuola-coaching-facilitazione/entry-point': '/corsi/apcm',
  'scuola-coaching-facilitazione/pegasus-coaching-program': '/corsi/apcm',
  'scuola-coaching-facilitazione/asterys-systemic-team-coaching': '/corsi/systemic-team-coaching',
  'scuola-coaching-facilitazione/team-and-organizational-systemic-coaching': '/corsi/systemic-team-coaching',
  'scuola-coaching-facilitazione/eiw-emotional-intelligence-workout': '/corsi/eiw',
  'scuola-coaching-facilitazione/continuous-learning': '/corsi/continuous-learning',
  'scuola-coaching-facilitazione/formazione-avanzata-coach/voice-dialogue-facilitator-training':
    '/corsi/voice-dialogue',
  'scuola-coaching-facilitazione/formazione-avanzata-coach/voice-dialogue-coaching':
    '/corsi/voice-dialogue',
  'scuola-coaching-facilitazione/formazione-avanzata-coach/voice-dialogue-skills':
    '/corsi/voice-dialogue',
  'scuola-coaching-facilitazione/voice-dialogue-essentials': '/corsi/voice-dialogue',
  'scuola-coaching-facilitazione/voice-dialogue-advanced': '/corsi/voice-dialogue',
  'scuola-coaching-facilitazione/formazione-avanzata-coach/supervisione-coaching':
    '/corsi/coaching-circle',
  'scuola-coaching-facilitazione/formazione-avanzata-coach/coaching-sistemico-costellazioni':
    '/corsi/systemic-team-coaching',
  'scuola-coaching-facilitazione/formazione-avanzata-coach': '/corsi',
  'scuola-coaching-facilitazione/mastery-on-stage': '/corsi/public-speaking',
  'scuola-coaching-facilitazione/master-avanzato-facilitazione': '/corsi',
  'scuola-coaching-facilitazione/coaching-smart': '/corsi',
  'scuola-coaching-facilitazione/coaching-smart-2': '/corsi',
  'scuola-coaching-facilitazione/coaching-smart-old': '/corsi',
  'scuola-coaching-facilitazione/coaching-bios': '/corsi',
  'scuola-coaching-facilitazione/lascia-il-segno': '/corsi',
  'scuola-coaching-facilitazione/alumni-coach': '/about',
  'scuola-coaching-facilitazione/alblue-reward': '/corsi',
  'scuola-coaching-facilitazione': '/corsi',
  'catalogo-corsi-al': '/corsi',
  'personal-branding-per-coach': '/corsi/marketing-per-coach',
  'personal-branding-per-coach-2': '/corsi/marketing-per-coach',

  // Persone e aziende
  'sviluppo-personale/personal-coaching': '/personal-coaching',
  'sviluppo-personale/personal-coaching/migliore-coach': '/personal-coaching',
  'sviluppo-personale/corsi-sviluppo-personale': '/personal-coaching',
  'sviluppo-personale/corsi-sviluppo-personale/al-timone-della-tua-vita': '/personal-coaching',
  'sviluppo-personale/corsi-sviluppo-personale/personal-growth': '/personal-coaching',
  'sviluppo-personale/corsi-sviluppo-personale/larte-della-leadership': '/personal-coaching',
  'sviluppo-personale/corsi-sviluppo-personale/il-potere-di-cambiare': '/personal-coaching',
  'sviluppo-personale/corsi-sviluppo-personale/volere-cambiare': '/personal-coaching',
  'sviluppo-personale': '/personal-coaching',
  'imprese-imprenditori/business-coaching': '/aziende',
  'imprese-imprenditori/consulenza-sviluppo': '/aziende',
  'imprese-imprenditori': '/aziende',
  clients: '/aziende',
  'clients-2': '/aziende',

  // Intelligenza emotiva
  'intelligenza-emotiva/intelligenza-emotiva-italia': '/corsi/eiw',
  'intelligenza-emotiva': '/corsi/eiw',
  'sviluppo-intelligenza-emotiva': '/corsi/eiw',

  // Chi siamo
  'chi-siamo/uffici-asterys-lab': '/about',
  'chi-siamo/storia-coaching-italia': '/about',
  'chi-siamo/team-asterys-lab': '/about',
  'chi-siamo/coaching-asterys-lab': '/about',
  'chi-siamo/i-nostri-valori': '/about',
  'chi-siamo/far-parte-del-team-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/pier-paolo-colasanti-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/giovanna-dalessio-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/stefano-petti-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/ana-belen-manzano-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/alessandra-bitelli-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/nicoletta-stellino-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/renata-beltrami-asterys-lab': '/about',
  'chi-siamo/team-asterys-lab/paola-rulfi-asterys-lab': '/about',
  'chi-siamo': '/about',
  press: '/about',
  testimonials: '/about',

  // Contatti e contenuti
  contatti: '/iscriviti',
  contact: '/iscriviti',
  'faq-coaching': '/corsi',
  'news-articoli': '/blog',
  'event-directory': '/eventi',
  'mappa-sito': '/',
  'newsletter-signup': '/blog',

  // Legali
  'disclaimer-privacy': '/privacy',
  informativa: '/privacy',
  'incarico-esterno-per-trattamento-dati': '/privacy',
  'elenco-contratti-quadro': '/termini',
};

const NUOVO = fileURLToPath(new URL('..', import.meta.url));

// Articoli: cambia solo il prefisso, da /nome a /blog/nome. Quelli che nel nuovo sito non
// esistono più (vecchie notizie di conferenze e apparizioni, non ripubblicate) vanno
// all'elenco del blog: meglio una pagina utile che un errore.
const slugAttuali = new Set(
  JSON.parse(
    read('src/constants/blogPosts.ts').match(
      /export const blogPosts: BlogPost\[\] = (\[[\s\S]*?\n\]);\n/,
    )[1],
  ).map((p) => p.slug),
);

const articoliWp = read('scripts/wp-articoli.txt')
  .trim()
  .split('\n')
  .map((s) => s.trim())
  .filter(Boolean);

const redirects = [];
for (const [vecchio, nuovo] of Object.entries(PAGINE)) {
  redirects.push({ source: `/${vecchio}`, destination: nuovo, permanent: true });
}
for (const slug of articoliWp) {
  redirects.push({
    source: `/${slug}`,
    destination: slugAttuali.has(slug) ? `/blog/${slug}` : '/blog',
    permanent: true,
  });
}

const vercelPath = join(ROOT, 'vercel.json');
const config = JSON.parse(readFileSync(vercelPath, 'utf8'));
config.redirects = redirects;
writeFileSync(vercelPath, JSON.stringify(config, null, 2) + '\n', 'utf8');

const conservati = articoliWp.filter((s) => slugAttuali.has(s)).length;
console.log(`Rimandi scritti in vercel.json: ${redirects.length}`);
console.log(`  pagine del vecchio sito: ${Object.keys(PAGINE).length}`);
console.log(`  articoli: ${articoliWp.length} (${conservati} verso l'articolo corrispondente, ${articoliWp.length - conservati} verso /blog)`);
