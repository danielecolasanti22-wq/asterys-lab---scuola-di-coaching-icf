// SEO/GEO — meta per pagina + dati strutturati JSON-LD.
// ⚠️ SITE_URL = dominio canonico della vetrina. DA CONFERMARE (www vs non-www, e che la vetrina
// stia su questo dominio). È l'unica costante da cambiare se il dominio è diverso.
import { coursesContent } from './coursesContent';
import { HOME_FAQ } from './homeFaq';

export const SITE_URL = 'https://asteryslab.com';
const DEFAULT_OG = '/course-media/apcm/hero-apcm.png';

export type PageSeo = { title: string; description: string; ogImage?: string; noindex?: boolean };

const DEFAULT_SEO: PageSeo = {
  title: 'Diventa Coach professionista accreditato ICF | Asterys Lab',
  description:
    'Diventa coach professionista con formazione accreditata ICF Level 1 & 2: metodo, pratica guidata e mentoring per accreditarti ACC o PCC. Milano, Roma e online. Parla con un Advisor.',
};

export const SEO_BY_PATH: Record<string, PageSeo> = {
  '/': DEFAULT_SEO,
  '/corsi': {
    title: 'Scegli il tuo percorso per diventare coach ICF | Asterys Lab',
    description:
      'Trasforma la tua esperienza in una professione riconosciuta ICF: Master in Coaching (Level 1 & 2), Team Coaching Sistemico, Intelligenza Emotiva, Voice Dialogue e Mentoring per il rinnovo delle credenziali.',
  },
  '/corsi/apcm': {
    title: 'Diventa Coach ICF con il Master in Coaching | Asterys Lab',
    description:
      'Arrivi pronto al primo cliente: diventa coach certificato ICF (ACC e PCC) con intelligenza emotiva e approccio sistemico. In aula a Milano e Roma e online. Parla con un Advisor.',
  },
  '/corsi/systemic-team-coaching': {
    title: 'Fai coaching ai team e certificati ICF (ACTC) | Asterys Lab',
    description:
      'Porta team e leader a risultati straordinari con il team coaching sistemico. Percorso accreditato ICF, prerequisito per la credenziale ACTC. Edizioni a Milano e Roma.',
  },
  '/corsi/eiw': {
    title: 'Allena l’intelligenza emotiva per coach (CCE ICF) | Asterys Lab',
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
      'Dai più profondità alle tue sessioni: integra il Voice Dialogue nella pratica di coaching con un laboratorio esperienziale. In presenza a Milano, con Lab online su piattaforma Inner.',
  },
  '/corsi/continuous-learning': {
    title: 'Cresci come coach ogni mese (CCE ICF) | Asterys Lab',
    description:
      'Resta al passo e accumula CCE ICF: Live Class mensili su Zoom, networking e crescita continua per coach. Scegli singole Live Class o pacchetti.',
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
      'Fai il tuo prossimo passo con articoli e guide su coaching, certificazione ICF, intelligenza emotiva e crescita professionale, dal team di Asterys Lab.',
  },
  '/iscriviti': {
    title: 'Inizia ora il tuo percorso di coaching | Asterys Lab',
    description:
      'Fai il primo passo verso la tua nuova professione: scegli il percorso, parla con un Advisor e iscriviti ai corsi di coaching accreditati ICF di Asterys Lab.',
  },
  '/personal-coaching': {
    title: 'Personal Coaching: un coach al tuo fianco | Asterys Lab',
    description:
      'Percorso di coaching individuale per realizzare il tuo pieno potenziale: più consapevolezza, obiettivi chiari, relazioni ed equilibrio. Sessioni di persona o online. Parla con un coach.',
  },
  '/nuova-pagina': { title: 'Asterys Lab', description: '', noindex: true },
  '/nuova-pagina-2': { title: 'Asterys Lab', description: '', noindex: true },
};

export function getSeoForPath(pathname: string): PageSeo {
  return SEO_BY_PATH[pathname] ?? DEFAULT_SEO;
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
      addressCountry: 'IT',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Via del Porto Fluviale 35',
      addressLocality: 'Roma',
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
      'Master per diventare coach professionista certificato ICF (ACC e PCC), con metodo, intelligenza emotiva e approccio sistemico.',
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
    name: 'Continuous Learning — Live Class per coach',
    description: 'Live Class mensili di formazione continua per coach, con CCE ICF.',
    courseMode: 'online',
  },
  '/corsi/public-speaking': {
    name: 'Public Speaking Pro',
    description: 'Corso per parlare in pubblico con efficacia e presenza.',
    courseMode: 'blended',
  },
};

/** HOME_FAQ è importato da ./homeFaq: unica fonte, identica alla FAQ visibile nella Home. */

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
  }

  return out;
}
