// SEO/GEO — meta per pagina + dati strutturati JSON-LD.
// SITE_URL = dominio canonico. CONFERMATO 31/07/2026: asteryslab.com senza www
// (il React sostituisce WordPress sullo stesso dominio). È l'unica costante da cambiare se il dominio cambia.
import { coursesContent } from './coursesContent';
import { HOME_FAQ } from './homeFaq';
import { BLOG_BY_SLUG } from './blogIndex';

export const SITE_URL = 'https://asteryslab.com';
const DEFAULT_OG = '/course-media/apcm/hero-apcm.png';

export type PageSeo = { title: string; description: string; ogImage?: string; noindex?: boolean };

const DEFAULT_SEO: PageSeo = {
  title: 'Diventa Coach professionista accreditato ICF | Asterys Lab',
  description:
    'Diventa coach professionista con formazione accreditata ICF Level 1 & 2: metodo, pratica guidata e mentoring per accreditarti ACC o PCC. Milano, Roma e online.',
};

export const SEO_BY_PATH: Record<string, PageSeo> = {
  '/': DEFAULT_SEO,
  '/corsi': {
    title: 'Scegli il tuo percorso per diventare coach ICF | Asterys Lab',
    description:
      'Master in Coaching ICF Level 1 & 2, Team Coaching Sistemico, Intelligenza Emotiva e Voice Dialogue: scegli il percorso per diventare coach o specializzarti.',
  },
  '/corsi/apcm': {
    title: 'Diventa Coach ICF con il Master in Coaching | Asterys Lab',
    description:
      'Diventa coach accreditato ICF (ACC e PCC) con intelligenza emotiva e approccio sistemico, e arriva pronto al primo cliente. Milano, Roma e online.',
  },
  '/corsi/systemic-team-coaching': {
    title: 'Fai coaching ai team e accreditati ICF (ACTC) | Asterys Lab',
    description:
      'Porta team e leader a risultati misurabili con il team coaching sistemico: percorso accreditato ICF, prerequisito per la credenziale ACTC. Milano e Roma.',
  },
  '/corsi/eiw': {
    title: 'Allena l’intelligenza emotiva come coach | Asterys Lab',
    description:
      'Impara a stare con le emozioni e usarle a tuo vantaggio: allena l’intelligenza emotiva con il modello CSI e il fiore di Plutchik. 4 CCE ICF per Round, online.',
  },
  '/corsi/coaching-circle': {
    title: 'Rinnova le credenziali ICF con il mentoring | Asterys Lab',
    description:
      'Matura le 10 ore di mentor coaching per rinnovare la tua credenziale ICF: mentor coaching di gruppo e individuale con un Mentor Coach MCC. Online.',
  },
  '/corsi/voice-dialogue': {
    title: 'Integra il Voice Dialogue nel tuo coaching | Asterys Lab',
    description:
      'Dai più profondità alle tue sessioni integrando il Voice Dialogue nella pratica di coaching. Laboratorio esperienziale a Milano, con Laboratorio Virtuale.',
  },
  '/corsi/continuous-learning': {
    title: 'Cresci come coach ogni mese (CCE ICF) | Asterys Lab',
    description:
      'Resta al passo e accumula CCE ICF: Incontri online mensili su Zoom, networking e crescita continua per coach. Scegli singoli incontri o pacchetti.',
  },
  '/corsi/public-speaking': {
    title: 'Parla in pubblico con presenza e impatto | Asterys Lab',
    description:
      'Comunica con efficacia e presenza davanti a qualsiasi pubblico: acquisisci metodo e pratica per gestire voce, corpo ed emozioni e presentarti con autorevolezza.',
  },
  '/aziende': {
    title: 'Fai crescere manager e team della tua impresa | Asterys Lab',
    description:
      'Sviluppa leadership e cultura della tua organizzazione con business ed executive coaching e team coaching sistemico su misura per imprese e imprenditori.',
  },
  '/about': {
    title: 'La tua scuola di coaching accreditata ICF | Asterys Lab',
    description:
      'Da oltre 25 anni formiamo coach con metodo ICF, intelligenza emotiva e approccio sistemico: oltre 3.000 alumni e trainer MCC e PCC al tuo fianco.',
  },
  '/eventi': {
    title: 'Scopri il coaching a un Open Day gratuito | Asterys Lab',
    description:
      'Vivi il metodo prima di iscriverti: Open Day, webinar ed eventi gratuiti per conoscere trainer e percorsi Asterys Lab e capire se il coaching fa per te.',
  },
  '/blog': {
    title: 'Guide e idee per crescere nel coaching ICF | Asterys Lab',
    description:
      'Fai il tuo prossimo passo con articoli e guide su coaching, credenziali ICF, intelligenza emotiva e crescita professionale, dal team di Asterys Lab.',
  },
  '/iscriviti': {
    title: 'Inizia ora il tuo percorso di coaching | Asterys Lab',
    description:
      'Fai il primo passo verso la tua nuova professione: scegli il percorso, parla con un Advisor e iscriviti ai corsi di coaching accreditati ICF di Asterys Lab.',
  },
  '/personal-coaching': {
    title: 'Personal Coaching: un coach al tuo fianco | Asterys Lab',
    description:
      'Percorso di coaching individuale per esprimere il tuo potenziale: più consapevolezza, obiettivi chiari ed equilibrio. Sessioni di persona o online.',
  },

  // Pagine sede: il titolo mette in chiaro citta' + accreditamento, che e' esattamente
  // cio' che cerca chi scrive "scuola di coaching Milano".
  '/scuola-di-coaching-milano': {
    title: 'Scuola di coaching a Milano accreditata ICF | Asterys Lab',
    description:
      'Diventa coach a Milano con un percorso accreditato ICF Level 1 e 2: lezioni in aula in centro, trainer MCC e PCC e pratica supervisionata. Parla con un Advisor.',
  },
  '/scuola-di-coaching-roma': {
    title: 'Scuola di coaching a Roma accreditata ICF | Asterys Lab',
    description:
      'Diventa coach a Roma con un percorso accreditato ICF Level 1 e 2: lezioni in aula a Ostiense, trainer MCC e PCC e pratica supervisionata. Parla con un Advisor.',
  },

  '/corsi/marketing-per-coach': {
    title: 'Fatti scegliere dai clienti giusti come coach | Asterys Lab',
    description:
      'Costruisci un posizionamento riconoscibile come coach: personal branding, presenza online e strumenti per attrarre i clienti giusti. Incontri online.',
  },

  // Pagine legali: hanno meta propri per non presentarsi ai motori come copie della home.
  '/privacy': {
    title: 'Privacy Policy | Asterys Lab',
    description:
      'Come Asterys Lab raccoglie, usa e protegge i dati personali di chi visita il sito e si iscrive ai percorsi di coaching, secondo il Regolamento UE 2016/679.',
  },
  '/cookie': {
    title: 'Cookie Policy | Asterys Lab',
    description:
      'Quali cookie usa il sito di Asterys Lab, a cosa servono e come gestirli o disattivarli dalle impostazioni del tuo browser.',
  },
  '/termini': {
    title: 'Termini e condizioni | Asterys Lab',
    description:
      'Termini e condizioni di utilizzo del sito Asterys Lab e di iscrizione ai percorsi di formazione in coaching accreditati ICF.',
  },

  // Landing private: si raggiungono solo col link diretto, non devono finire sui motori.
  // Senza una voce qui ereditavano titolo e descrizione della home, quindi erano
  // indicizzabili e per giunta come contenuto duplicato.
  // NB: i titoli combaciano con quelli che le due pagine impostano a runtime via
  // document.title — se si cambia uno, cambiare anche l'altro.
  '/borsa-di-studio': {
    title: 'Borsa di studio · Master in Coaching Roma | Asterys Lab',
    description: 'Pagina riservata ai candidati alla borsa di studio Asterys Lab.',
    noindex: true,
  },
  '/credito-ai-talenti': {
    title: 'Credito ai talenti · Master in Coaching | Asterys Lab',
    description: 'Pagina riservata ai candidati al programma Credito ai talenti di Asterys Lab.',
    noindex: true,
  },
};

/** Lunghezza oltre la quale Google taglia il titolo nei risultati. */
const MAX_TITLE = 62;
const SUFFISSO = ' | Asterys Lab';
/** Lunghezza utile di una description: oltre, Google taglia. */
const MAX_DESC = 158;

/**
 * Accorcia un testo all'ultima parola intera che ci sta, invece di lasciarlo tagliare a
 * metà parola nei risultati di ricerca. Se possibile chiude su una frase compiuta.
 */
function accorcia(testo: string, max = MAX_DESC): string {
  if (testo.length <= max) return testo;

  const taglio = testo.slice(0, max);
  // Meglio chiudere su un punto se ce n'è uno abbastanza avanti nel testo.
  const punto = Math.max(taglio.lastIndexOf('. '), taglio.lastIndexOf('? '), taglio.lastIndexOf('! '));
  if (punto > max * 0.6) return taglio.slice(0, punto + 1);

  const spazio = taglio.lastIndexOf(' ');
  return (spazio > 0 ? taglio.slice(0, spazio) : taglio).replace(/[,;:]$/, '') + '…';
}

/**
 * Meta di un articolo del blog, costruiti dal suo titolo e dal suo excerpt.
 *
 * Senza questo i 52 articoli ricadevano tutti su DEFAULT_SEO: stesso titolo e stessa
 * descrizione della home, quindi 52 pagine che agli occhi di Google si somigliavano
 * tutte e nessuna in grado di posizionarsi per la propria ricerca.
 */
function seoPerArticolo(slug: string): PageSeo | null {
  const post = BLOG_BY_SLUG[slug];
  if (!post) return null;
  return {
    // Il brand si aggiunge solo se ci sta: su un titolo già lungo verrebbe troncato
    // da Google, e il titolo dell'articolo è ciò che intercetta la ricerca.
    title:
      post.title.length + SUFFISSO.length <= MAX_TITLE ? post.title + SUFFISSO : post.title,
    // Gli excerpt nascono come sommario in pagina, quindi spesso superano lo spazio
    // disponibile nei risultati di ricerca: qui vengono chiusi su una frase intera.
    description: accorcia(post.excerpt),
    ogImage: post.img,
  };
}

export function getSeoForPath(pathname: string): PageSeo {
  const statica = SEO_BY_PATH[pathname];
  if (statica) return statica;

  if (pathname.startsWith('/blog/')) {
    const post = seoPerArticolo(pathname.slice('/blog/'.length));
    if (post) return post;
  }

  return DEFAULT_SEO;
}

export function ogImageFor(meta: PageSeo): string {
  return SITE_URL + (meta.ogImage ?? DEFAULT_OG);
}

/** EducationalOrganization — entità del sito (presente su tutte le pagine). */
const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Asterys Lab',
  alternateName: 'Asterys Lab — Scuola di Coaching ICF',
  url: SITE_URL,
  logo: SITE_URL + '/brand/asterys-lab-logo.png',
  description:
    'Scuola di coaching accreditata ICF (Level 1 & 2) specializzata in intelligenza emotiva e approccio sistemico. Formazione, mentoring e community per coach, HR e manager.',
  areaServed: 'IT',
  knowsLanguage: ['it'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Via Conservatorio 22',
      addressLocality: 'Milano',
      postalCode: '20122',
      addressCountry: 'IT',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Via del Porto Fluviale 35',
      addressLocality: 'Roma',
      postalCode: '00154',
      addressCountry: 'IT',
    },
  ],
  sameAs: ['https://www.coachingfederation.it/'],
};

/** Dati minimi per Course schema sulle pagine corso. */
const COURSE_JSONLD: Record<string, { name: string; description: string; courseMode: string }> = {
  '/corsi/apcm': {
    name: 'Master in Coaching Professionale (ICF Level 1 & 2)',
    description:
      'Master per diventare coach professionista accreditato ICF (ACC e PCC), con metodo, intelligenza emotiva e approccio sistemico.',
    courseMode: 'blended',
  },
  '/corsi/systemic-team-coaching': {
    name: 'Master in Team Coaching Sistemico',
    description: 'Percorso di team coaching sistemico, prerequisito per la credenziale ICF per il team coaching.',
    courseMode: 'blended',
  },
  '/corsi/eiw': {
    name: 'Intelligenza Emotiva per Coach',
    description: 'Percorso di allenamento dell’intelligenza emotiva per coach, con CCE ICF.',
    courseMode: 'online',
  },
  '/corsi/coaching-circle': {
    name: 'Mentoring per il rinnovo delle credenziali ICF',
    description:
      'Mentor coaching di gruppo e individuale per maturare le 10 ore richieste dal rinnovo della credenziale ICF.',
    courseMode: 'online',
  },
  '/corsi/voice-dialogue': {
    name: 'Voice Dialogue Skills',
    description: 'Laboratorio esperienziale per integrare il Voice Dialogue nella pratica di coaching.',
    courseMode: 'blended',
  },
  '/corsi/continuous-learning': {
    name: 'Continuous Learning — Incontri online per coach',
    description: 'Incontri online mensili di formazione continua per coach, con CCE ICF.',
    courseMode: 'online',
  },
  '/corsi/public-speaking': {
    name: 'Public Speaking Pro',
    description: 'Corso per parlare in pubblico con efficacia e presenza.',
    courseMode: 'blended',
  },
};

/** HOME_FAQ è importato da ./homeFaq: unica fonte, identica alla FAQ visibile nella Home. */

/**
 * Le due sedi come attivita' locali. `EducationalOrganization` descrive la scuola nel suo
 * insieme; queste descrivono i due luoghi dove si fa lezione, che e' l'informazione che
 * conta per chi cerca un corso nella propria citta'.
 */
const SEDE_JSONLD: Record<string, { '@context': string; '@type': string[]; name: string; [k: string]: unknown }> = {
  '/scuola-di-coaching-milano': {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: 'Asterys Lab · Milano',
    description:
      'Scuola di coaching accreditata ICF (Level 1 e 2) con sede in centro a Milano: percorsi per diventare coach professionista, team coaching sistemico e intelligenza emotiva.',
    url: SITE_URL + '/scuola-di-coaching-milano',
    parentOrganization: { '@type': 'EducationalOrganization', name: 'Asterys Lab', url: SITE_URL },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Conservatorio 22',
      addressLocality: 'Milano',
      addressRegion: 'MI',
      postalCode: '20122',
      addressCountry: 'IT',
    },
    areaServed: { '@type': 'City', name: 'Milano' },
    inLanguage: 'it',
  },
  '/scuola-di-coaching-roma': {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    name: 'Asterys Lab · Roma',
    description:
      'Scuola di coaching accreditata ICF (Level 1 e 2) con sede a Roma, quartiere Ostiense: percorsi per diventare coach professionista, team coaching sistemico e intelligenza emotiva.',
    url: SITE_URL + '/scuola-di-coaching-roma',
    parentOrganization: { '@type': 'EducationalOrganization', name: 'Asterys Lab', url: SITE_URL },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via del Porto Fluviale 35',
      addressLocality: 'Roma',
      addressRegion: 'RM',
      postalCode: '00154',
      addressCountry: 'IT',
    },
    areaServed: { '@type': 'City', name: 'Roma' },
    inLanguage: 'it',
  },
};

/** Costruisce un blocco FAQPage a partire da una lista di FAQ (q/a). */
function faqPageJsonLd(faqs: { q: string; a: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/**
 * Briciole di pane (Home > sezione > pagina) come dati strutturati.
 * Servono a spiegare ai motori come sono organizzate le pagine fra loro, e sono quelle
 * che Google mostra al posto dell'URL nudo sotto il titolo del risultato.
 */
function breadcrumbJsonLd(voci: [nome: string, path: string][]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'], ...voci].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: SITE_URL + (path === '/' ? '' : path),
    })),
  };
}

export function getJsonLdForPath(pathname: string): object[] {
  const out: object[] = [ORG_JSONLD];

  // Home: FAQPage canonico (stesse FAQ mostrate nella Home) per GEO.
  if (pathname === '/') {
    out.push(faqPageJsonLd(HOME_FAQ));
    return out;
  }

  const c = COURSE_JSONLD[pathname];
  if (c) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: c.name,
      description: c.description,
      url: SITE_URL + pathname,
      inLanguage: 'it',
      courseMode: c.courseMode,
      provider: { '@type': 'EducationalOrganization', name: 'Asterys Lab', url: SITE_URL },
    });
  }

  // FAQ per GEO sulle pagine corso: prese da coursesContent così restano allineate al contenuto.
  if (pathname.startsWith('/corsi/')) {
    const id = pathname.slice('/corsi/'.length);
    const course = coursesContent[id];
    if (course?.faqs?.length) {
      out.push(faqPageJsonLd(course.faqs));
    }
    out.push(breadcrumbJsonLd([['Corsi', '/corsi'], [c?.name ?? 'Corso', pathname]]));
  }

  // Sede: dichiararla come luogo fisico con indirizzo e coordinate e' cio' che permette
  // di comparire nelle ricerche locali e nelle mappe, non solo fra i risultati classici.
  const sede = SEDE_JSONLD[pathname];
  if (sede) {
    out.push(sede);
    out.push(breadcrumbJsonLd([[sede.name.replace('Asterys Lab · ', ''), pathname]]));
  }

  // Articoli: dichiararli come articoli veri (autore, data, argomento) è ciò che permette
  // ai motori e alle AI di attribuirli e citarli, invece di leggerli come pagine generiche.
  if (pathname.startsWith('/blog/')) {
    const post = BLOG_BY_SLUG[pathname.slice('/blog/'.length)];
    if (post) {
      out.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: SITE_URL + pathname,
        mainEntityOfPage: { '@type': 'WebPage', '@id': SITE_URL + pathname },
        image: SITE_URL + post.img,
        articleSection: post.category,
        inLanguage: 'it',
        ...(post.iso ? { datePublished: post.iso, dateModified: post.iso } : {}),
        author: { '@type': 'Organization', name: 'Asterys Lab', url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: 'Asterys Lab',
          logo: { '@type': 'ImageObject', url: SITE_URL + '/brand/asterys-lab-logo.png' },
        },
      });
      out.push(breadcrumbJsonLd([['Blog', '/blog'], [post.title, pathname]]));
    }
  }

  return out;
}
