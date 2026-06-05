// SEO/GEO — meta per pagina + dati strutturati JSON-LD.
// ⚠️ SITE_URL = dominio canonico della vetrina. DA CONFERMARE (www vs non-www, e che la vetrina
// stia su questo dominio). È l'unica costante da cambiare se il dominio è diverso.
export const SITE_URL = 'https://www.asteryslab.com';
const DEFAULT_OG = '/course-media/apcm/hero-apcm.png';

export type PageSeo = { title: string; description: string; ogImage?: string; noindex?: boolean };

const DEFAULT_SEO: PageSeo = {
  title: 'Asterys Lab | Scuola di Coaching ICF a Milano, Roma e Online',
  description:
    'Diventa coach professionista con percorsi accreditati ICF Level 1 & 2. Formazione, mentoring e community per coach, HR e manager. A Milano, Roma e online.',
};

export const SEO_BY_PATH: Record<string, PageSeo> = {
  '/': DEFAULT_SEO,
  '/corsi': {
    title: 'Corsi e Percorsi di Coaching ICF | Asterys Lab',
    description:
      'Tutti i percorsi Asterys Lab: Master in Coaching Professionale (ICF Level 1 & 2), Master in Team Coaching Sistemico, Intelligenza Emotiva, Voice Dialogue e Mentoring per il rinnovo delle credenziali ICF.',
  },
  '/corsi/apcm': {
    title: 'Master in Coaching Professionale ICF (Level 1 & 2) | Asterys Lab',
    description:
      'Il Master in Coaching Professionale di Asterys Lab forma coach certificati ICF (ACC e PCC) con metodo, intelligenza emotiva e approccio sistemico. In aula a Milano e Roma e online.',
  },
  '/corsi/systemic-team-coaching': {
    title: 'Master in Team Coaching Sistemico accreditato ICF | Asterys Lab',
    description:
      'Master in Team Coaching Sistemico: fai coaching ai team con metodo sistemico. Prerequisito per la credenziale ICF per il team coaching. Edizioni a Milano e Roma.',
  },
  '/corsi/eiw': {
    title: 'Intelligenza Emotiva per Coach (CCE ICF) | Asterys Lab',
    description:
      'Workout di Intelligenza Emotiva: allena l’intelligenza emotiva con il modello CSI e il fiore di Plutchik. 4 CCE ICF per Round, online.',
  },
  '/corsi/coaching-circle': {
    title: 'Mentoring per il Rinnovo delle Credenziali ICF | Asterys Lab',
    description:
      'Matura le 10 ore di mentor coaching per il rinnovo della credenziale ICF: mentor coaching di gruppo e individuale con un Mentor Coach MCC. Online.',
  },
  '/corsi/voice-dialogue': {
    title: 'Voice Dialogue Skills per Coach | Asterys Lab',
    description:
      'Laboratorio esperienziale per integrare il Voice Dialogue nella pratica di coaching. In presenza a Milano, con Lab online su piattaforma Inner.',
  },
  '/corsi/continuous-learning': {
    title: 'Continuous Learning — Live Class per Coach (CCE ICF) | Asterys Lab',
    description:
      'Formazione continua per coach: Live Class mensili su Zoom, CCE ICF, networking e crescita. Acquisti singole Live Class o pacchetti.',
  },
  '/corsi/public-speaking': {
    title: 'Public Speaking Pro — Parlare in Pubblico | Asterys Lab',
    description:
      'Corso di public speaking per comunicare con efficacia e presenza davanti a un pubblico, con metodo e pratica.',
  },
  '/aziende': {
    title: 'Coaching Aziendale ed Executive per le Imprese | Asterys Lab',
    description:
      'Business ed executive coaching per imprese e imprenditori: sviluppo manageriale, team coaching sistemico e cultura organizzativa.',
  },
  '/about': {
    title: 'Chi è Asterys Lab — Scuola di Coaching ICF | Filosofia e team',
    description:
      'Da oltre 25 anni formiamo coach con metodo ICF, intelligenza emotiva e approccio sistemico. 3.000+ alumni, trainer MCC e PCC, accreditamento ICF.',
  },
  '/eventi': {
    title: 'Eventi & Open Day | Asterys Lab',
    description:
      'Open Day, webinar ed eventi gratuiti per scoprire il coaching e i percorsi Asterys Lab. Conosci trainer e metodo prima di iscriverti.',
  },
  '/blog': {
    title: 'Blog Asterys Lab | Coaching, ICF e Crescita Professionale',
    description:
      'Articoli e guide su coaching, certificazione ICF, intelligenza emotiva e crescita professionale, dal team di Asterys Lab.',
  },
  '/iscriviti': {
    title: 'Iscriviti ai percorsi di coaching | Asterys Lab',
    description:
      'Inizia il tuo percorso di coaching con Asterys Lab: scegli il corso, parla con un Advisor e iscriviti.',
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
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Milano', addressCountry: 'IT' },
    { '@type': 'PostalAddress', addressLocality: 'Roma', addressCountry: 'IT' },
  ],
  sameAs: ['https://www.coachingfederation.it/'],
};

/** Dati minimi per Course schema sulle pagine corso. */
const COURSE_JSONLD: Record<string, { name: string; description: string }> = {
  '/corsi/apcm': {
    name: 'Master in Coaching Professionale (ICF Level 1 & 2)',
    description:
      'Master per diventare coach professionista certificato ICF (ACC e PCC), con metodo, intelligenza emotiva e approccio sistemico.',
  },
  '/corsi/systemic-team-coaching': {
    name: 'Master in Team Coaching Sistemico',
    description: 'Percorso di team coaching sistemico, prerequisito per la credenziale ICF per il team coaching.',
  },
  '/corsi/eiw': {
    name: 'Intelligenza Emotiva per Coach',
    description: 'Percorso di allenamento dell’intelligenza emotiva per coach, con CCE ICF.',
  },
  '/corsi/coaching-circle': {
    name: 'Mentoring per il rinnovo delle credenziali ICF',
    description:
      'Mentor coaching di gruppo e individuale per maturare le 10 ore richieste dal rinnovo della credenziale ICF.',
  },
  '/corsi/voice-dialogue': {
    name: 'Voice Dialogue Skills',
    description: 'Laboratorio esperienziale per integrare il Voice Dialogue nella pratica di coaching.',
  },
  '/corsi/continuous-learning': {
    name: 'Continuous Learning — Live Class per coach',
    description: 'Live Class mensili di formazione continua per coach, con CCE ICF.',
  },
  '/corsi/public-speaking': {
    name: 'Public Speaking Pro',
    description: 'Corso per parlare in pubblico con efficacia e presenza.',
  },
};

export function getJsonLdForPath(pathname: string): object[] {
  const out: object[] = [ORG_JSONLD];
  const c = COURSE_JSONLD[pathname];
  if (c) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: c.name,
      description: c.description,
      url: SITE_URL + pathname,
      provider: { '@type': 'EducationalOrganization', name: 'Asterys Lab', url: SITE_URL },
    });
  }
  return out;
}
