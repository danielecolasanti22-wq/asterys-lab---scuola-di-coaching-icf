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

  // FAQ del vecchio sito: erano pagine a sé, ognuna su una domanda. Vanno mandate dove
  // quella domanda trova risposta adesso, non genericamente ai corsi: chi cercava
  // "quanto guadagna un coach" deve ritrovarsi davanti quella risposta.
  'faq-items/quanto-guadagna-un-coach': '/blog/quanto-guadagna-e-quanto-costa-diventare-coach-in-italia',
  'faq-items/come-posso-fare-per-diventare-un-coach': '/blog/come-diventare-coach-professionista-in-italia',
  'faq-items/lavorare-come-coach': '/blog/perche-diventare-coach',
  'faq-items/come-posso-scegliere-un-coach': '/blog/come-scegliere-una-scuola-di-coaching-accreditata-icf',
  'faq-items/borse-di-studio': '/corsi/apcm',
  'faq-items/pagare-a-rate': '/corsi/apcm',
  'faq-items/sede-asterys-lab': '/about',
  'faq-items/come-posso-capire-se-il-coaching-fa-al-caso-mio': '/personal-coaching',
  'faq-items/cosa-posso-aspettarmi-da-un-coach': '/personal-coaching',
  'faq-items/cosa-succede-lavorando-con-un-coach': '/personal-coaching',
  'faq-items/quando-e-opportuno-lavorare-con-un-coach': '/personal-coaching',
  'faq-items/quanto-dura-un-percorso-di-coaching': '/personal-coaching',
  'faq-items/qual-e-il-focus-del-lavoro-con-un-coach': '/personal-coaching',
  'faq-items/posso-parlare-di-tutto-con-un-coach': '/personal-coaching',
  'faq-items/posso-sospendere-un-percorso-di-coaching': '/personal-coaching',
  'faq-items/ha-senso-lavorare-con-un-coach-su-obiettivi-minori': '/personal-coaching',
  'faq-items/il-coaching-crea-dipendenza': '/personal-coaching',
  'faq-items/problemi-sviluppo-personale': '/personal-coaching',
  'faq-items/azienda-si-puo-fare-coaching-chi-non-lo-desidera': '/aziende',

  // Carrello e account della VECCHIA vetrina. Erano pagine della vetrina, quindi vanno
  // rimandate come tutte le altre; restano dentro il sito nuovo e non puntano all'area
  // riservata, che ha i suoi indirizzi e non va toccata da qui.
  cassa: '/corsi',
  'cassa/confirmation': '/corsi',
  'cassa/order-history': '/corsi',
  'cassa/ricevuta': '/corsi',
  'cassa/transazione-fallita': '/corsi',
  login: '/',
  'gestione-account': '/',
  'manage-account': '/',
  'benvenuto-in-asteryslab': '/',
  'conferma-via-email': '/',

  // Pagine di ringraziamento dopo un modulo: il modulo ora è su /iscriviti.
  'grazie-per-averci-contattati': '/iscriviti',
  'grazie-per-la-richiesta-di-info-sul-pcm': '/corsi/apcm',
  'grazie-per-la-richiesta-di-iscrizione-al-pcm': '/corsi/apcm',
  'grazie-per-la-richiesta-di-info-sul-pfm': '/corsi',
  'grazie-per-la-richiesta-di-iscrizione-al-pfm': '/corsi',

  // Residui tecnici e pagine di prova: non hanno un corrispondente, vanno alla home.
  prova: '/',
  popup03: '/',
  'maintenance-mode': '/',
  'login-customizer': '/',
  'incentivo-rm': '/',
  'report-di-sessione-pcm': '/',
  'scuola-coaching-facilitazione/feedback-finale-apcm-2o-livello': '/corsi/apcm',
};

/**
 * Famiglie di indirizzi con un solo criterio: archivi per tag, categoria e simili.
 * Si trattano a gruppo invece che uno per uno — sono 240 e crescerebbero da soli — e
 * così si coprono anche quelli mai finiti nella mappa del sito.
 */
const FAMIGLIE = [
  { prefisso: 'tag', destinazione: '/blog' },
  { prefisso: 'category', destinazione: '/blog' },
  { prefisso: 'type', destinazione: '/blog' },
  { prefisso: 'author', destinazione: '/blog' },
  { prefisso: 'faq_category', destinazione: '/corsi' },
  { prefisso: 'avada_faq', destinazione: '/corsi' },
  { prefisso: 'faq-items', destinazione: '/corsi' },
];

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

/**
 * Indirizzi che appartengono ad ALTRI siti del multisito. Non vanno mai rimandati: sono
 * applicazioni a sé, con i loro contenuti e i loro utenti. Qui si rimanda soltanto ciò
 * che era la vecchia vetrina.
 */
const ALTRI_SITI = ['inner', 'forms', 'office', '2025'];
const appartieneAdAltroSito = (p) =>
  ALTRI_SITI.some((s) => p === s || p.startsWith(`${s}/`));

const redirects = [];
for (const [vecchio, nuovo] of Object.entries(PAGINE)) {
  if (appartieneAdAltroSito(vecchio)) continue;
  redirects.push({ source: `/${vecchio}`, destination: nuovo, permanent: true });
}
for (const slug of articoliWp) {
  if (appartieneAdAltroSito(slug)) continue;
  redirects.push({
    source: `/${slug}`,
    destination: slugAttuali.has(slug) ? `/blog/${slug}` : '/blog',
    permanent: true,
  });
}
// Le famiglie (archivi per tag, categoria…) restano a parte: diventano una regola sola
// per gruppo invece di centinaia di righe, e coprono anche gli indirizzi mai elencati.
for (const f of FAMIGLIE) {
  redirects.push({
    source: `/${f.prefisso}/:resto*`,
    destination: f.destinazione,
    permanent: true,
    famiglia: f.prefisso,
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
