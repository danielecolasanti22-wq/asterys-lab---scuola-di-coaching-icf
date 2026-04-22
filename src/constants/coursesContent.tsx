import { 
  Target, 
  Users, 
  Brain, 
  Zap, 
  TrendingUp, 
  MessageCircle, 
  Award 
} from 'lucide-react';
import { ReactNode } from 'react';

export interface CourseFee {
  title: string;
  benefit: string;
  heading: string;
  desc: string;
  price: string;
  priceLabel: string;
  footnote?: string;
  type: 'installment' | 'lump' | 'after' | 'zero-rate';
}

/** Fascia oraria / riga “calendar + clock” (layout Boolean) */
export interface CourseScheduleBand {
  title: string;
  body: string;
  dayLines: string[];
  timeLines: string[];
}

export interface CourseData {
  title: string;
  subtitle: string;
  tagline: string;
  type: string;
  /** Prima pill in hero (es. "PER PROFESSIONISTI") — reference Boolean */
  heroKicker?: string;
  /** Immagini: metti file in `public/` e punta a `/course-media/...` (vedi valori APCM) */
  media?: Partial<CourseMedia>;
  heroBenefits: string[];
  summaryBox: {
    nextEdition: string;
    dates: string;
    format: string;
    duration: string;
    price: string;
    installments: string;
  };
  badges: string[];
  overview: {
    title: string;
    content: string[];
  };
  target: {
    title: string;
    desc: string;
    icon: ReactNode;
  }[];
  learning: {
    cols: {
      title: string;
      items: string[];
    }[];
    softSkills: string[];
  };
  structure: {
    modules: { title: string; desc: string; tags?: string[] }[];
  };
  programIntro?: string;
  admissionBox?: { title: string; body: string };
  earlyBirdPromo?: {
    ribbon: string;
    line: string;
    deadline: string;
    ctaHref: string;
    /** Es. "30 APRILE" per la pill pricing (Boolean-style) */
    pillDeadlineLabel?: string;
    /** Es. "800€" — il layout aggiunge "di sconto" come nel reference Boolean */
    discountAmount?: string;
  };
  teachers: {
    name: string;
    creds: string;
    role: string;
    bio: string;
    img: string;
  }[];
  career: {
    title: string;
    content: string;
    points: { title: string; desc: string }[];
  };
  fees: CourseFee[];
  faqs: { q: string; a: string }[];
  placementStats?: {
    rate: string;
    partners: string;
    opportunities: string;
  };
  classDates?: { date: string; badge?: string; note?: string }[];
  sessionSchedule?: { days: string; time: string }[];
  /** Se assente, viene derivato da `sessionSchedule` in pagina */
  scheduleBands?: CourseScheduleBand[];
  /** Testi con **grassetto** inline */
  howItWorks?: {
    title?: string;
    intro?: string;
    formazioneTitle?: string;
    formazioneBadge?: string;
    formazioneIntro?: string;
  };
  studyModeBox?: {
    title: string;
    highlight: string;
    body: string;
    linkText?: string;
    linkHref?: string;
  };
  orientationBanner?: {
    title: string;
    body?: string;
  };
  specializationsSection?: {
    eyebrow?: string;
    title: string;
    intro: string;
  };
  testimonials?: CourseTestimonial[];
  competenciesAndCareers?: {
    eyebrow?: string;
    title?: string;
    intro?: string;
    competencies: CourseCompetency[];
    careerPaths: CourseCareerPath[];
    stats?: { value: string; label: string }[];
  };
  editions?: CourseEdition[];
  editionsSection?: {
    eyebrow?: string;
    title?: string;
    intro?: string;
  };
  whyChoose?: {
    eyebrow?: string;
    title: string;
    intro?: string;
    bullets: { title: string; desc: string }[];
  };
  levelsComparison?: {
    eyebrow?: string;
    title: string;
    intro?: string;
    levels: {
      label: string;
      name: string;
      price: string;
      priceLabel?: string;
      hours?: string;
      highlight?: boolean;
      benefit?: string;
      features: string[];
      ctaLabel?: string;
      ctaHref?: string;
    }[];
    footnote?: string;
  };
  guarantee30Hours?: {
    eyebrow?: string;
    title: string;
    body: string;
    refunds?: { label: string; amount: string; withheld: string }[];
    steps?: { title: string; desc: string }[];
  };
  scholarship?: {
    eyebrow?: string;
    title: string;
    amount: string;
    body: string;
    eligibility: string[];
    availability?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
}

export interface CourseTestimonial {
  name: string;
  role: string;
  img?: string;
  quote: string;
  rating?: number;
  cohort?: string;
  video?: {
    poster: string;
    src?: string;
    duration?: string;
  };
}

export interface CourseCompetency {
  title: string;
  desc: string;
}

export interface CourseCareerPath {
  title: string;
  desc: string;
  contexts?: string[];
}

export type CourseEditionEventType =
  | 'deadline-early'
  | 'deadline-final'
  | 'live-class'
  | 'live-lab'
  | 'corso'
  | 'orientamento'
  | 'milestone'
  | 'individual';

export interface CourseEditionEvent {
  label: string;
  date: string;
  type?: CourseEditionEventType;
  note?: string;
}

export interface CourseEdition {
  city: string;
  citySlug: string;
  level: string;
  levelSlug: string;
  editionLabel: string;
  editionSlug: string;
  subtitle?: string;
  badge?: string;
  earlyBird?: { label: string; date: string };
  enrollmentEnd?: { label: string; date: string };
  events: CourseEditionEvent[];
  ctaLabel?: string;
}

export interface CourseMedia {
  hero: string;
  overview: string;
  brochureDecor: string;
  advisor: string;
  completePractical: string;
  completePlatform: string;
  howItWorks: string;
}

export function defaultCourseMedia(slug: string): CourseMedia {
  return {
    hero: `https://picsum.photos/seed/${slug}-hero/1100/1200`,
    overview: `https://picsum.photos/seed/${slug}-overview/900/900`,
    brochureDecor: `https://picsum.photos/seed/${slug}-brochure/900/600`,
    advisor: `https://picsum.photos/seed/${slug}-advisor/400/400`,
    completePractical: `https://picsum.photos/seed/${slug}-practical/900/700`,
    completePlatform: `https://picsum.photos/seed/${slug}-platform/900/700`,
    howItWorks: `https://picsum.photos/seed/${slug}-how/900/700`,
  };
}

export const commonTestimonials: CourseTestimonial[] = [
  {
    name: "Marco Guadagnuolo",
    role: "HR · Master in Coaching APCM",
    cohort: "Video testimonianza",
    quote:
      "Video testimonianza in arrivo: qui comparirà il contributo di Marco Guadagnuolo appena caricato.",
    video: {
      poster: "/testimonials/posters/marco-guadagnuolo-placeholder.svg"
    }
  },
  {
    name: "Damiano Zanotti",
    role: "COO · APCM 1+2",
    quote:
      "Oltre ad aiutarmi a diventare coach, questo percorso mi sta aiutando a cambiare come persona: ad essere più sensibile, ad ascoltare di più. Mi sta aiutando sia nella vita lavorativa che personale. Il clima, sia con i formatori che con gli altri partecipanti, è stato di profonda condivisione. Mi sono sentito libero di esprimere i miei pensieri e le mie emozioni e di essere ascoltato.",
    rating: 5,
    cohort: "Consiglierebbe il corso: 5/5"
  },
  {
    name: "Camilla Pedrazzini",
    role: "Leader Organizzazione",
    quote:
      "Un percorso in primis su se stesso, un percorso sulla consapevolezza. Fare il coach è ben diverso da essere coach e in questo Asterys si impegna molto. La scuola offre metodi di lavoro e tecniche per poter accompagnare un cliente al suo obiettivo. Bisogna avere una totale fiducia nella scuola e nei mentor che ci sono.",
    rating: 4,
    cohort: "Consiglierebbe il corso: 4/5"
  },
  {
    name: "Alessandro Stocco",
    role: "Pensionato",
    cohort: "Consiglierebbe il corso: 5/5",
    quote:
      "Avevo aspettative limitate rispetto al corso, non tanto per il corso in sé quanto per il mio vero e concreto interesse. Ebbene non solo le mie aspettative sono state ampiamente superate, ma addirittura ho scoperto mano a mano di aver creato altre aspettative soddisfatte prima nello Skills e ora nel corso della scorsa settimana... e adesso vedremo.",
    rating: 5
  },
  {
    name: "Costanza Catapano",
    role: "Learning and Development Manager",
    quote:
      "Un viaggio alla scoperta di sé stessi e degli altri in compagnia di trainer esperte e competenti e di un gruppo entusiasta ed eterogeneo. Le giornate di formazione sono andate ben oltre le mie aspettative sia in termini di contenuti sia in termini di risultati. Sono grata a tutto il team Asterys per questo percorso di crescita e di trasformazione.",
    rating: 5,
    cohort: "Consiglierebbe il corso: 5/5"
  }
];

const commonFaqs = [
  {
    q: "Chi può frequentare il corso?",
    a: "Il corso è aperto a professionisti di qualsiasi settore con esperienza lavorativa consolidata. Non è richiesta una laurea specifica: valutiamo la motivazione, la maturità personale e l'esperienza professionale attraverso un colloquio di ammissione dedicato."
  },
  {
    q: "Che competenze devo avere per iniziare il corso?",
    a: "Non è richiesta alcuna formazione pregressa nel coaching. Sono richieste buone capacità comunicative, curiosità intellettuale e un'esperienza professionale di almeno 3 anni che ti permetta di portare casi reali durante il percorso."
  },
  {
    q: "In cosa consiste il processo di ammissione?",
    a: "Il processo si svolge in 3 fasi: compilazione del form online, colloquio motivazionale con un nostro Advisor e, se idonei, sottoscrizione del contratto di iscrizione. L'intero processo è gratuito e senza impegno fino alla firma."
  },
  {
    q: "Posso seguire il corso mentre lavoro o studio?",
    a: "Assolutamente sì. Il nostro percorso è progettato per professionisti in attività: le sessioni si svolgono in orari serali e nel weekend per compatibilità con gli impegni lavorativi. Potrai gestire il tuo carico con flessibilità."
  },
  {
    q: "Cosa succede se mi perdo una sessione?",
    a: "Nessun problema: tutte le sessioni sono registrate e disponibili in piattaforma entro 48 ore. Potrai recuperarle a tuo ritmo, con accesso ai materiali e alle dispense delle esercitazioni pratiche."
  }
];

export const coursesContent: Record<string, CourseData> = {
  'apcm': {
    title: "Accredited Professional Coaching Mastery (APCM)",
    subtitle: "Professione Coach",
    tagline: "Diventare coach cambia la prospettiva su se stessi e sul mondo: APCM è il Master d'eccellenza per trasformare la tua esperienza in una nuova carriera riconosciuta ICF, con intelligenza emotiva misurabile e approccio sistemico.",
    type: "ICF LEVEL 1 & 2",
    heroKicker: "PER PROFESSIONISTI",
    media: {
      hero: "/course-media/apcm/hero.png",
      overview: "/course-media/apcm/overview.webp",
      brochureDecor: "/course-media/apcm/brochure.webp",
      advisor: "/course-media/apcm/advisor.webp",
      completePractical: "/course-media/apcm/practical.webp",
      completePlatform: "/course-media/apcm/platform.webp",
      howItWorks: "/course-media/apcm/how-it-works.webp",
    },
    howItWorks: {
      title: "Come funziona il Master",
      intro:
        "Un percorso strutturato in **modalità part-time**, pensato per chi lavora: alterni **lezioni live**, pratica supervisionata e momenti di studio individuale. Ti guidiamo passo passo fino alle competenze ICF e alla **certificazione**, con un metodo collaudato da Asterys Lab.",
      formazioneTitle: "Formazione",
      formazioneBadge: "Ibrido · 150 ore",
      formazioneIntro:
        "La prima parte del Master è dedicata alle **lezioni in diretta** (in aula o in videoconferenza), con esercitazioni guidate e feedback dai trainer.",
    },
    scheduleBands: [
      {
        title: "Lezioni in diretta",
        body: "Segui le lezioni live in aula virtuale o in presenza, interagendo con i trainer e i compagni di corso.",
        dayLines: ["VENERDÌ SERA E SABATO", "SABATO MATTINA"],
        timeLines: ["18:30 - 21:30", "9:00 - 13:00"],
      },
    ],
    studyModeBox: {
      title: "Modalità di studio ",
      highlight: "part-time",
      body: "Un formato che cerca di adattarsi a chi, come te, ha impegni diurni: puoi seguire le sessioni live e integrare con studio individuale, materiali e registrazioni quando ti è più comodo.",
      linkText: "Scopri il calendario completo",
      linkHref: "#programma",
    },
    orientationBanner: {
      title: "Fase di orientamento",
      body: "Prima del via, chiarisci obiettivi, aspettative e piano di studio insieme al team Asterys: entri nel percorso con una roadmap chiara.",
    },
    specializationsSection: {
      eyebrow: "Specializzazioni",
      title: "Le competenze che ti distinguono",
      intro:
        "Costruisci un **mix equilibrato** tra metodo, relazione e visione d’insieme: ciò che serve per essere **competitivo** come coach professionista oggi.",
    },
    heroBenefits: [
      "Trasforma la tua esperienza professionale in una nuova carriera da coach",
      "Ottieni le ore formative necessarie per le credenziali ICF Level 1 e Level 2",
      "Allena intelligenza emotiva e competenze relazionali con strumenti misurabili",
      "Costruisci il tuo business di coaching con un percorso dedicato"
    ],
    summaryBox: {
      nextEdition: "Milano, Roma & Online",
      dates: "Maggio – Dicembre 2026",
      format: "Ibrido (Presenza + Live Online)",
      duration: "150 ore accademiche",
      price: "A partire da 3.400€ + IVA",
      installments: "Rateizzabile fino a 24 mesi senza interessi"
    },
    badges: ["ICF Level 1 & 2", "20+ anni esperienza", "Community Alumni"],
    overview: {
      title: "Perché questo Master in Coaching Professionale",
      content: [
        "L'APCM è il percorso di Asterys Lab per chi vuole diventare **coach professionista** e operare con credenziali ICF riconosciute in tutto il mondo. Non è solo formazione tecnica: è un viaggio di trasformazione che integra **metodo**, **intelligenza emotiva** e **approccio sistemico**.",
        "Impari a condurre sessioni di coaching con rigore etico, a leggere le dinamiche relazionali oltre il singolo individuo e a costruire un business sostenibile. Tutto questo accanto a **trainer MCC & PCC** con 20+ anni di esperienza e una community di 3.000+ alumni attivi.",
        "Che tu provenga dal mondo HR, dalla consulenza, dal management o dalla psicologia, APCM ti porta da professionista curioso a coach competente, riconosciuto e preparato a entrare sul mercato con metodo."
      ]
    },
    target: [
      { title: "Manager in transizione", desc: "Leader che vogliono reinventarsi come Executive Coach.", icon: <Target /> },
      { title: "HR & People Manager", desc: "Professionisti che vogliono portare cultura coaching in azienda.", icon: <Users /> },
      { title: "Psicologi & Counselor", desc: "Specialisti che intendono aggiungere strumenti orientati all'azione.", icon: <Brain /> },
      { title: "Coach emergente", desc: "Chi cerca un programma solido accreditato ICF.", icon: <Zap /> }
    ],
    learning: {
      cols: [
        { title: "Competenze Coaching", items: ["Ascolto profondo", "Domande potenti", "Etica ICF", "Accordo di coaching"] },
        { title: "IE & Sistemi", items: ["SEI Assessment", "Lavoro sul Sé", "Lettura sistemi complessi", "Neuroscienze"] },
        { title: "Business", items: ["Contrattazione", "Setting", "Posizionamento", "Acquisizione clienti"] }
      ],
      softSkills: ["Presenza", "Centratura", "Leadership relazionale", "Empatia"]
    },
    programIntro:
      "Imparerai a progettare e condurre percorsi di coaching professionale: dalle fondamenta alle competenze ICF, dall’intelligenza emotiva alla pratica supervisionata, fino al business del coaching e alla certificazione.",
    admissionBox: {
      title: "Requisiti di ammissione al Master",
      body: "Questo Master richiede maturità professionale e motivazione forte. Il livello è impegnativo e il percorso è pensato per chi ha già esperienza nel mondo del lavoro e vuole intraprendere una carriera da coach strutturata e riconosciuta, non per chi cerca un percorso superficiale o senza pratica.",
    },
    earlyBirdPromo: {
      ribbon: "SCONTO EARLY BIRD",
      line: "Ottieni 800€ di sconto sul Master APCM | Iscriviti entro il 30/04/2026",
      deadline: "30/04/2026",
      ctaHref: "#prezzo",
      pillDeadlineLabel: "30 APRILE",
      discountAmount: "800€",
    },
    structure: {
      modules: [
        {
          title: "Fondamenti",
          desc: "Partirai dalle basi del coaching professionale: accordo, presenza, ascolto e codice etico ICF. Imparerai a strutturare sessioni chiare, sicure e orientate al cliente.",
          tags: ["Core competence ICF", "Etica", "Alleanza", "Contratto & setting"],
        },
        {
          title: "Intelligenza Emotiva",
          desc: "Lavorerai su consapevolezza emotiva, regolazione e relazione, con strumenti misurabili e pratiche quotidiane applicabili subito in contesti professionali.",
          tags: ["SEI / KCG", "Autocoscienza", "Empatia", "Feedback & pratica"],
        },
        {
          title: "Approccio Sistemico",
          desc: "Imparerai a leggere le dinamiche complesse e a facilitare il cambiamento tenendo conto del contesto, delle relazioni e dei vincoli reali.",
          tags: ["Sistemi", "Domande sistemiche", "Contratti relazionali", "Visione d’insieme"],
        },
        {
          title: "Pratica Supervisionata",
          desc: "Metterai in pratica le competenze con sessioni reali, feedback da Mentor MCC e supervisione per accelerare la qualità del tuo coaching.",
          tags: ["Sessioni registrate", "Mentor MCC", "Supervisione", "Portfolio"],
        },
        {
          title: "Prosperous Coach",
          desc: "Costruirai il tuo percorso professionale: posizionamento, offerta, acquisizione clienti ed etica del business, con strumenti concreti per partire.",
          tags: ["Posizionamento", "Pricing", "Marketing etico", "Piano d’azione"],
        },
      ],
    },
    teachers: [
      { name: "Giovanna Giuffredi", creds: "MCC", role: "Fondatrice", bio: "25+ anni esperienza, già Presidente ICF Italia.", img: "https://picsum.photos/seed/giovanna/300/300" },
      { name: "Pietro Monti", creds: "PCC", role: "Senior Trainer", bio: "Esperto in Team Coaching per multinazionali.", img: "https://picsum.photos/seed/pietro/300/300" }
    ],
    career: {
      title: "Career Support Asterys",
      content: "Il Career Center di Asterys Lab ti supporta nel costruire e far crescere la tua carriera come coach professionista: dall'avvio della pratica alla crescita continua come esperto riconosciuto a livello internazionale.",
      points: [
        { title: "Prosperous Coach Lab", desc: "Modulo specifico per costruire il tuo business di coaching con posizionamento, pricing e acquisizione clienti." },
        { title: "Alumni Community", desc: "Accedi alla rete di 3.000+ professionisti certificati ICF per collaborazioni, referral e opportunità di crescita condivise." },
        { title: "Formazione Continua", desc: "Masterclass, webinar e workshop esclusivi per approfondire le competenze e restare aggiornato sulle evoluzioni del coaching." },
        { title: "Supporto Carriera", desc: "Sessioni individuali con il team Asterys per valorizzare il tuo profilo e orientarti nelle scelte professionali post-certificazione." }
      ]
    },
    classDates: [
      { date: "15 maggio", badge: "ULTIMI POSTI" },
      { date: "25 settembre", note: "Termine candidature: 01 settembre" }
    ],
    sessionSchedule: [
      { days: "Venerdì sera e Sabato", time: "18:30 - 21:30" },
      { days: "Sabato mattina", time: "9:00 - 13:00" }
    ],
    fees: [
      {
        title: "Rateizzazione 24 mesi",
        type: "installment",
        benefit: "0% interessi",
        heading: "Paga in rate mensili",
        desc: "Dilaziona l'intero importo del Master in rate mensili fino a 24 mesi, senza interessi e senza garanzie. Attivazione semplice e completamente online.",
        price: "288€",
        priceLabel: "/mese",
        footnote: "Simulazione su 24 mesi · Percorso Completo L1+L2: 6.900€ + IVA"
      },
      {
        title: "Pagamento Unico",
        type: "lump",
        benefit: "Risparmi 1.000€",
        heading: "Percorso Completo L1+L2",
        desc: "Con il Pagamento Unico ottieni il massimo risparmio sul Percorso Completo (Livello 1 + Livello 2). Ideale per chi preferisce saldare tutto subito.",
        price: "6.900€",
        priceLabel: "+ IVA una tantum",
        footnote: "Prezzo pieno: 7.900€ + IVA — con pagamento unico risparmi 1.000€"
      },
      {
        title: "Solo Livello 1",
        type: "after",
        benefit: "Fondamenti coaching",
        heading: "Parti dal 1° Livello",
        desc: "Frequenta solo il Livello 1 (ICF Level 1 ready) e decidi in seguito se proseguire con il 2° Livello. Potrai sempre completare il percorso con una successiva edizione.",
        price: "3.400€",
        priceLabel: "+ IVA una tantum",
        footnote: "Include 60 ore accademiche · Abilita il percorso verso la credenziale ICF ACC"
      }
    ],
    faqs: commonFaqs,
    placementStats: { rate: "98%", partners: "150+", opportunities: "500+" },
    testimonials: commonTestimonials,
    competenciesAndCareers: {
      eyebrow: "Competenze & Professione",
      title: "Cosa saprai fare e dove potrai lavorare",
      intro:
        "Al termine del Master padroneggi **competenze ICF certificabili**, strumenti di **intelligenza emotiva misurabile** e un **approccio sistemico**. Potrai operare come coach professionista in diversi contesti — libera professione, aziende, enti pubblici e terzo settore.",
      stats: [
        { value: "98%", label: "Tasso di certificazione ICF" },
        { value: "3.000+", label: "Alumni Asterys nel mondo" },
        { value: "20+ anni", label: "Di metodo e ricerca sul coaching" }
      ],
      competencies: [
        {
          title: "Condurre sessioni ICF Level 1 & 2",
          desc: "Progetti e guidi percorsi di coaching strutturati rispettando le 8 core competence ICF e il codice etico internazionale."
        },
        {
          title: "Leggere e allenare l'intelligenza emotiva",
          desc: "Utilizzi il modello KCG / Six Seconds per mappare, allenare e misurare competenze emotive nei clienti e nei team."
        },
        {
          title: "Facilitare sistemi complessi",
          desc: "Applichi un approccio sistemico alle dinamiche organizzative, leggendo relazioni, stakeholder e vincoli oltre il singolo individuo."
        },
        {
          title: "Costruire il tuo business di coaching",
          desc: "Definisci posizionamento, offerta e pricing. Acquisisci clienti in modo etico e costruisci un portfolio sostenibile nel tempo."
        },
        {
          title: "Supervisionare la tua pratica",
          desc: "Integri pratica supervisionata, feedback da Mentor MCC e auto-riflessione come parte del metodo professionale continuativo."
        },
        {
          title: "Operare in contesti internazionali",
          desc: "Padroneggi un linguaggio e uno standard riconosciuti a livello internazionale, con credenziali ICF spendibili ovunque."
        }
      ],
      careerPaths: [
        {
          title: "Coach Libero Professionista",
          desc: "Avvii la tua pratica 1-to-1 come Life, Career o Executive Coach, lavorando con clienti privati e manager.",
          contexts: ["Studio privato", "Percorsi individuali", "Online & in presenza"]
        },
        {
          title: "Executive & Leadership Coach",
          desc: "Affianchi manager e C-level in percorsi di sviluppo della leadership, transizioni di ruolo e gestione della complessità.",
          contexts: ["Aziende", "Scale-up", "Board & C-level"]
        },
        {
          title: "Team & Business Coach",
          desc: "Accompagni team e reparti ad alta performance, gestendo conflitti, allineamento e obiettivi in una logica sistemica.",
          contexts: ["Team aziendali", "Start-up", "Progetti trasformativi"]
        },
        {
          title: "HR & People Development",
          desc: "Porti cultura coaching dentro l'organizzazione come HR Business Partner, People Manager o responsabile L&D.",
          contexts: ["HR & L&D interni", "Talent development", "Change management"]
        },
        {
          title: "Trainer & Formatore",
          desc: "Progetti e conduci percorsi formativi d'aula, workshop e programmi di sviluppo competenze per aziende e scuole.",
          contexts: ["Aziende", "Scuole & università", "Corporate academy"]
        },
        {
          title: "Consulente di sviluppo organizzativo",
          desc: "Integri coaching, IE e approccio sistemico in interventi di OD, cultura aziendale e trasformazione delle persone.",
          contexts: ["Società di consulenza", "Studi professionali", "Progetti in autonomia"]
        }
      ]
    },
    editionsSection: {
      eyebrow: "Calendario edizioni",
      title: "Scegli sede, livello ed edizione",
      intro:
        "Seleziona la **città**, il **livello** e l'**edizione**: vedrai il calendario completo con tutte le Live Class, i Live Lab, i Corsi intensivi e le scadenze di iscrizione."
    },
    whyChoose: {
      eyebrow: "Perché scegliere APCM",
      title: "Un Master che unisce rigore, umanità e mercato",
      intro:
        "APCM è pensato per chi vuole diventare coach davvero: **metodo accreditato ICF**, **trainer con credenziali MCC & PCC**, **pratica supervisionata** e un **Career Center** che ti accompagna nell'avvio della professione.",
      bullets: [
        {
          title: "Accreditamento ICF Level 1 & 2",
          desc: "Programma riconosciuto ICF: al termine hai tutte le ore formative necessarie per le credenziali ACC e PCC, spendibili a livello internazionale."
        },
        {
          title: "Intelligenza Emotiva misurabile",
          desc: "Integriamo il modello KCG / Six Seconds: impari ad allenare l'IE con strumenti di assessment certificati, non solo con la teoria."
        },
        {
          title: "Approccio sistemico",
          desc: "Lavori non solo sull'individuo ma sulle relazioni, sui gruppi e sui contesti. È ciò che fa la differenza nelle organizzazioni complesse."
        },
        {
          title: "Trainer MCC e PCC",
          desc: "Apprendi da coach professionisti con 20+ anni di esperienza su board, team e percorsi individuali, in contesti italiani e internazionali."
        },
        {
          title: "Pratica supervisionata reale",
          desc: "Sessioni vere, feedback da Mentor MCC, supervisione continua: il Master ti fa iniziare a coachare dal primo mese, non a libro finito."
        },
        {
          title: "Prosperous Coach incluso",
          desc: "Posizionamento, pricing, acquisizione clienti ed etica del business: gli strumenti per costruire davvero la tua professione."
        }
      ]
    },
    levelsComparison: {
      eyebrow: "Struttura del percorso",
      title: "Scegli come affrontare il Master",
      intro:
        "APCM è organizzato su **due livelli** che puoi frequentare insieme (Percorso Completo) o separatamente. Il Percorso Completo è il più scelto: metodo ICF integrale e il miglior risparmio.",
      levels: [
        {
          label: "Livello 1",
          name: "ICF Level 1 Ready",
          price: "3.400€",
          priceLabel: "+ IVA",
          hours: "60 ore accademiche",
          benefit: "Fondamenti del coaching",
          features: [
            "8 core competence ICF · Livello 1",
            "Etica, alleanza e accordo di coaching",
            "Basi di Intelligenza Emotiva",
            "Sessioni pratiche con feedback",
            "Abilita alla credenziale ICF ACC",
            "Modulo Prosperous Coach incluso"
          ]
        },
        {
          label: "Percorso Completo",
          name: "ICF Level 1 + Level 2",
          price: "6.900€",
          priceLabel: "+ IVA · invece di 7.900€",
          hours: "150 ore accademiche",
          benefit: "Risparmi 1.000€",
          highlight: true,
          features: [
            "Tutto il Livello 1 + Livello 2 integrale",
            "Intelligenza Emotiva misurabile (KCG/SEI)",
            "Approccio sistemico avanzato",
            "Pratica supervisionata con Mentor MCC",
            "Abilita alla credenziale ICF PCC",
            "Accesso alla Community Alumni Asterys",
            "Percorso di Personal Coaching individuale"
          ],
          ctaLabel: "Iscriviti al Percorso Completo",
          ctaHref: "/iscriviti"
        },
        {
          label: "Livello 2",
          name: "ICF Level 2 Advanced",
          price: "4.500€",
          priceLabel: "+ IVA",
          hours: "90 ore accademiche",
          benefit: "Solo per chi ha già il L1",
          features: [
            "Intelligenza Emotiva avanzata",
            "Lavoro sui sistemi complessi",
            "Mentor coaching ICF (7+3 ore)",
            "Supervisione individuale",
            "Abilita alla credenziale ICF PCC",
            "Personal Coaching individuale"
          ]
        }
      ],
      footnote: "Tutti i livelli sono rateizzabili fino a 24 mesi senza interessi. Prezzi IVA esclusa."
    },
    guarantee30Hours: {
      eyebrow: "La nostra garanzia",
      title: "Hai 30 ore per ripensarci",
      body: "Vogliamo che tu entri nel Master con la certezza di aver fatto la scelta giusta. Per questo puoi frequentare le **prime 30 ore di formazione** e, se capisci che non fa per te, **recedere ottenendo il rimborso** della quota già versata, al netto di una piccola trattenuta a copertura dei costi.",
      refunds: [
        { label: "Pagamento Unico", amount: "Rimborso totale", withheld: "Trattenuta: 500€" },
        { label: "Rateizzazione", amount: "Rimborso totale", withheld: "Trattenuta: 650€" }
      ],
      steps: [
        { title: "1. Frequenti senza impegno", desc: "Partecipi alle prime 30 ore di Master come se fossi già iscritto definitivamente." },
        { title: "2. Valuti con calma", desc: "Vivi il metodo, i trainer, i compagni di percorso e capisci se è il percorso che fa per te." },
        { title: "3. Decidi liberamente", desc: "Se non ti convince, comunichi il recesso entro le 30 ore e rientra il rimborso come previsto." }
      ]
    },
    scholarship: {
      eyebrow: "Opportunità",
      title: "Borsa di studio fino a 1.500€",
      amount: "Fino a 1.500€",
      body: "Per supportare l'accesso al Master ai professionisti del **Centro e Sud Italia**, riserviamo una borsa di studio sulle **prime iscrizioni** delle edizioni di **Roma**. Un investimento concreto sulla comunità dei coach italiani.",
      eligibility: [
        "Residenti in una regione del Centro o Sud Italia",
        "Iscrizione a un'edizione del Master APCM a Roma",
        "Tra i primi 3 iscritti per edizione (ordine cronologico)",
        "Colloquio di ammissione positivo con un nostro Advisor"
      ],
      availability: "3 borse di studio disponibili per edizione Roma",
      ctaLabel: "Richiedi la borsa di studio",
      ctaHref: "/iscriviti"
    },
    editions: [
      {
        city: "Milano",
        citySlug: "milano",
        level: "1° Livello",
        levelSlug: "l1",
        editionLabel: "Edizione 1",
        editionSlug: "ed1-2026",
        subtitle: "Febbraio – Maggio 2026",
        badge: "Iscrizioni chiuse",
        earlyBird: { label: "Early Bird", date: "12 dicembre 2025" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "29 gennaio 2026" },
        events: [
          { label: "Early Bird", date: "12 dicembre 2025", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "29 gennaio 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "12 febbraio 2026", type: "live-class" },
          { label: "Live Lab", date: "19, 20, 21 febbraio 2026", type: "live-lab", note: "Videoconferenza" },
          { label: "Live Class 2", date: "25 febbraio 2026", type: "live-class" },
          { label: "Live Class 3", date: "3 marzo 2026", type: "live-class" },
          { label: "Live Class 4", date: "9 marzo 2026", type: "live-class" },
          { label: "Corso II", date: "19, 20, 21 marzo 2026", type: "corso", note: "Modulo intensivo" },
          { label: "Live Class 5", date: "25 marzo 2026", type: "live-class" },
          { label: "Live Class 6", date: "31 marzo 2026", type: "live-class" },
          { label: "Orientamento", date: "6 maggio 2026", type: "orientamento" },
          { label: "Fine Attività 1° livello", date: "Maggio 2026", type: "milestone" }
        ]
      },
      {
        city: "Milano",
        citySlug: "milano",
        level: "1° Livello",
        levelSlug: "l1",
        editionLabel: "Edizione 2",
        editionSlug: "ed2-2026",
        subtitle: "Maggio – Dicembre 2026",
        badge: "Iscrizioni aperte",
        earlyBird: { label: "Early Bird", date: "12 marzo 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "28 aprile 2026" },
        events: [
          { label: "Early Bird", date: "12 marzo 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "28 aprile 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "12 maggio 2026", type: "live-class" },
          { label: "Live Lab", date: "21, 22, 23 maggio 2026", type: "live-lab", note: "Videoconferenza" },
          { label: "Live Class 2", date: "28 maggio 2026", type: "live-class" },
          { label: "Live Class 3", date: "3 giugno 2026", type: "live-class" },
          { label: "Live Class 4", date: "23 settembre 2026", type: "live-class" },
          { label: "Corso II", date: "1, 2, 3 ottobre 2026", type: "corso", note: "Modulo intensivo" },
          { label: "Live Class 5", date: "13 ottobre 2026", type: "live-class" },
          { label: "Live Class 6", date: "21 ottobre 2026", type: "live-class" },
          { label: "Orientamento", date: "2 dicembre 2026", type: "orientamento" },
          { label: "Fine Attività 1° livello", date: "Dicembre 2026", type: "milestone" }
        ]
      },
      {
        city: "Milano",
        citySlug: "milano",
        level: "1° Livello",
        levelSlug: "l1",
        editionLabel: "Edizione 3",
        editionSlug: "ed3-2026",
        subtitle: "Ottobre 2026 – Marzo 2027",
        badge: "Early Bird attivo",
        earlyBird: { label: "Early Bird", date: "27 agosto 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "13 ottobre 2026" },
        events: [
          { label: "Early Bird", date: "27 agosto 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "13 ottobre 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "27 ottobre 2026", type: "live-class" },
          { label: "Live Lab", date: "5, 6, 7 novembre 2026", type: "live-lab", note: "Videoconferenza" },
          { label: "Live Class 2", date: "12 novembre 2026", type: "live-class" },
          { label: "Live Class 3", date: "18 novembre 2026", type: "live-class" },
          { label: "Live Class 4", date: "13 gennaio 2027", type: "live-class" },
          { label: "Corso II", date: "21, 22, 23 gennaio 2027", type: "corso", note: "Modulo intensivo" },
          { label: "Live Class 5", date: "4 febbraio 2027", type: "live-class" },
          { label: "Live Class 6", date: "10 febbraio 2027", type: "live-class" },
          { label: "Orientamento", date: "2 marzo 2027", type: "orientamento" },
          { label: "Fine Attività 1° livello", date: "Marzo 2027", type: "milestone" }
        ]
      },
      {
        city: "Milano",
        citySlug: "milano",
        level: "2° Livello",
        levelSlug: "l2",
        editionLabel: "Edizione 2026",
        editionSlug: "ed-2026",
        subtitle: "Aprile – Giugno 2026",
        badge: "In corso",
        earlyBird: { label: "Early Bird", date: "21 febbraio 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "7 aprile 2026" },
        events: [
          { label: "Early Bird", date: "21 febbraio 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "7 aprile 2026", type: "deadline-final" },
          { label: "Live Class 7 EI", date: "21 aprile 2026", type: "live-class" },
          { label: "Live Class 8", date: "29 aprile 2026", type: "live-class" },
          { label: "Live Class 9 EI", date: "6 maggio 2026", type: "live-class" },
          { label: "Corso III", date: "14, 15, 16 maggio 2026", type: "corso", note: "Modulo intensivo" },
          { label: "Live Class 10 EI", date: "19 maggio 2026", type: "live-class" },
          { label: "Live Class 11", date: "26 maggio 2026", type: "live-class" },
          { label: "Live Class 12", date: "4 giugno 2026", type: "live-class" },
          { label: "Live Class 13 EI", date: "10 giugno 2026", type: "live-class" },
          { label: "Corso IV", date: "18, 19, 20 giugno 2026", type: "corso", note: "Modulo intensivo" },
          { label: "Live Class 14", date: "24 giugno 2026", type: "live-class" },
          { label: "Live Class 15", date: "30 giugno 2026", type: "live-class" },
          { label: "Personal Coaching Individuale", date: "Date personalizzate", type: "individual" },
          { label: "Fine Attività 2° livello", date: "Giugno 2026", type: "milestone" }
        ]
      },
      {
        city: "Milano",
        citySlug: "milano",
        level: "2° Livello",
        levelSlug: "l2",
        editionLabel: "Edizione 2027",
        editionSlug: "ed-2027",
        subtitle: "Marzo – Giugno 2027",
        badge: "Iscrizioni aperte",
        earlyBird: { label: "Early Bird", date: "10 gennaio 2027" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "24 febbraio 2027" },
        events: [
          { label: "Early Bird", date: "10 gennaio 2027", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "24 febbraio 2027", type: "deadline-final" },
          { label: "Live Class 7 EI", date: "10 marzo 2027", type: "live-class" },
          { label: "Live Class 8", date: "17 marzo 2027", type: "live-class" },
          { label: "Live Class 9 EI", date: "24 marzo 2027", type: "live-class" },
          { label: "Corso III", date: "1, 2, 3 aprile 2027", type: "corso", note: "Modulo intensivo" },
          { label: "Live Class 10", date: "14 aprile 2027", type: "live-class" },
          { label: "Live Class 11 EI", date: "21 aprile 2027", type: "live-class" },
          { label: "Live Class 12", date: "28 aprile 2027", type: "live-class" },
          { label: "Live Class 13 EI", date: "5 maggio 2027", type: "live-class" },
          { label: "Corso IV", date: "13, 14, 15 maggio 2027", type: "corso", note: "Modulo intensivo" },
          { label: "Live Class 14", date: "26 maggio 2027", type: "live-class" },
          { label: "Live Class 15", date: "8 giugno 2027", type: "live-class" },
          { label: "Personal Coaching Individuale", date: "Date personalizzate", type: "individual" },
          { label: "Fine Attività 2° livello", date: "Giugno 2027", type: "milestone" }
        ]
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "1° Livello",
        levelSlug: "l1",
        editionLabel: "Edizione 1",
        editionSlug: "ed1-2026",
        subtitle: "Febbraio – Maggio 2026",
        badge: "Iscrizioni chiuse",
        earlyBird: { label: "Early Bird", date: "19 dicembre 2025" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "5 febbraio 2026" },
        events: [
          { label: "Early Bird", date: "19 dicembre 2025", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "5 febbraio 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "19 febbraio 2026", type: "live-class" },
          { label: "Live Lab", date: "26, 27, 28 febbraio 2026", type: "live-lab", note: "In presenza a Roma" },
          { label: "Live Class 2", date: "4 marzo 2026", type: "live-class" },
          { label: "Live Class 3", date: "10 marzo 2026", type: "live-class" },
          { label: "Live Class 4", date: "16 marzo 2026", type: "live-class" },
          { label: "Corso II", date: "26, 27, 28 marzo 2026", type: "corso", note: "Modulo intensivo in presenza" },
          { label: "Live Class 5", date: "1 aprile 2026", type: "live-class" },
          { label: "Live Class 6", date: "7 aprile 2026", type: "live-class" },
          { label: "Orientamento", date: "13 maggio 2026", type: "orientamento" },
          { label: "Fine Attività 1° livello", date: "Maggio 2026", type: "milestone" }
        ]
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "1° Livello",
        levelSlug: "l1",
        editionLabel: "Edizione 2",
        editionSlug: "ed2-2026",
        subtitle: "Maggio – Dicembre 2026",
        badge: "Iscrizioni aperte",
        earlyBird: { label: "Early Bird", date: "19 marzo 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "5 maggio 2026" },
        events: [
          { label: "Early Bird", date: "19 marzo 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "5 maggio 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "19 maggio 2026", type: "live-class" },
          { label: "Live Lab", date: "28, 29, 30 maggio 2026", type: "live-lab", note: "In presenza a Roma" },
          { label: "Live Class 2", date: "3 giugno 2026", type: "live-class" },
          { label: "Live Class 3", date: "10 giugno 2026", type: "live-class" },
          { label: "Live Class 4", date: "30 settembre 2026", type: "live-class" },
          { label: "Corso II", date: "8, 9, 10 ottobre 2026", type: "corso", note: "Modulo intensivo in presenza" },
          { label: "Live Class 5", date: "20 ottobre 2026", type: "live-class" },
          { label: "Live Class 6", date: "28 ottobre 2026", type: "live-class" },
          { label: "Orientamento", date: "9 dicembre 2026", type: "orientamento" },
          { label: "Fine Attività 1° livello", date: "Dicembre 2026", type: "milestone" }
        ]
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "1° Livello",
        levelSlug: "l1",
        editionLabel: "Edizione 3",
        editionSlug: "ed3-2026",
        subtitle: "Novembre 2026 – Marzo 2027",
        badge: "Early Bird attivo",
        earlyBird: { label: "Early Bird", date: "3 settembre 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "20 ottobre 2026" },
        events: [
          { label: "Early Bird", date: "3 settembre 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "20 ottobre 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "3 novembre 2026", type: "live-class" },
          { label: "Live Lab", date: "12, 13, 14 novembre 2026", type: "live-lab", note: "In presenza a Roma" },
          { label: "Live Class 2", date: "19 novembre 2026", type: "live-class" },
          { label: "Live Class 3", date: "25 novembre 2026", type: "live-class" },
          { label: "Live Class 4", date: "20 gennaio 2027", type: "live-class" },
          { label: "Corso II", date: "28, 29, 30 gennaio 2027", type: "corso", note: "Modulo intensivo in presenza" },
          { label: "Live Class 5", date: "11 febbraio 2027", type: "live-class" },
          { label: "Live Class 6", date: "17 febbraio 2027", type: "live-class" },
          { label: "Orientamento", date: "9 marzo 2027", type: "orientamento" },
          { label: "Fine Attività 1° livello", date: "Marzo 2027", type: "milestone" }
        ]
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "2° Livello",
        levelSlug: "l2",
        editionLabel: "Edizione 2026",
        editionSlug: "ed-2026",
        subtitle: "Aprile – Luglio 2026",
        badge: "In corso",
        earlyBird: { label: "Early Bird", date: "28 febbraio 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "14 aprile 2026" },
        events: [
          { label: "Early Bird", date: "28 febbraio 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "14 aprile 2026", type: "deadline-final" },
          { label: "Live Class 7 EI", date: "28 aprile 2026", type: "live-class" },
          { label: "Live Class 8", date: "6 maggio 2026", type: "live-class" },
          { label: "Live Class 9 EI", date: "13 maggio 2026", type: "live-class" },
          { label: "Corso III", date: "21, 22, 23 maggio 2026", type: "corso", note: "Modulo intensivo in presenza" },
          { label: "Live Class 10 EI", date: "26 maggio 2026", type: "live-class" },
          { label: "Live Class 11", date: "3 giugno 2026", type: "live-class" },
          { label: "Live Class 12", date: "11 giugno 2026", type: "live-class" },
          { label: "Live Class 13 EI", date: "17 giugno 2026", type: "live-class" },
          { label: "Corso IV", date: "25, 26, 27 giugno 2026", type: "corso", note: "Modulo intensivo in presenza" },
          { label: "Live Class 14", date: "1 luglio 2026", type: "live-class" },
          { label: "Live Class 15", date: "7 luglio 2026", type: "live-class" },
          { label: "Personal Coaching Individuale", date: "Date personalizzate", type: "individual" },
          { label: "Fine Attività 2° livello", date: "Luglio 2026", type: "milestone" }
        ]
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "2° Livello",
        levelSlug: "l2",
        editionLabel: "Edizione 2027",
        editionSlug: "ed-2027",
        subtitle: "Marzo – Giugno 2027",
        badge: "Iscrizioni aperte",
        earlyBird: { label: "Early Bird", date: "17 gennaio 2027" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "3 marzo 2027" },
        events: [
          { label: "Early Bird", date: "17 gennaio 2027", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "3 marzo 2027", type: "deadline-final" },
          { label: "Live Class 7 EI", date: "17 marzo 2027", type: "live-class" },
          { label: "Live Class 8", date: "24 marzo 2027", type: "live-class" },
          { label: "Live Class 9 EI", date: "31 marzo 2027", type: "live-class" },
          { label: "Corso III", date: "8, 9, 10 aprile 2027", type: "corso", note: "Modulo intensivo in presenza" },
          { label: "Live Class 10", date: "21 aprile 2027", type: "live-class" },
          { label: "Live Class 11 EI", date: "28 aprile 2027", type: "live-class" },
          { label: "Live Class 12", date: "5 maggio 2027", type: "live-class" },
          { label: "Live Class 13 EI", date: "12 maggio 2027", type: "live-class" },
          { label: "Corso IV", date: "20, 21, 22 maggio 2027", type: "corso", note: "Modulo intensivo in presenza" },
          { label: "Live Class 14", date: "2 giugno 2027", type: "live-class" },
          { label: "Live Class 15", date: "15 giugno 2027", type: "live-class" },
          { label: "Personal Coaching Individuale", date: "Date personalizzate", type: "individual" },
          { label: "Fine Attività 2° livello", date: "Giugno 2027", type: "milestone" }
        ]
      }
    ]
  },
  'systemic-team-coaching': {
    title: "Asterys Systemic Team Coaching (ASTC)",
    subtitle: "Team Coaching",
    tagline: "Il corso di Asterys Lab accreditato ICF per apprendere l'esclusivo modello di Coaching Sistemico dedicato a team e organizzazioni.",
    type: "AVANZATO",
    heroBenefits: [
      "Apprendi l'esclusivo modello ASTC di coaching sistemico per i team",
      "Prerequisito per la credenziale ICF ACTC (Advanced Certification in Team Coaching)",
      "54 ore di formazione sincrona · equivalenti a 60 CCE ICF",
      "Edizioni in videoconferenza e in aula a Milano e Roma"
    ],
    summaryBox: {
      nextEdition: "Videoconferenza + Milano / Roma",
      dates: "Ottobre 2026 – Febbraio 2027",
      format: "Ibrido (Live Online + In aula)",
      duration: "54 ore sincrone · 60 CCE",
      price: "Su richiesta",
      installments: "Rateizzazione disponibile"
    },
    badges: ["ICF Accreditato", "Diploma AATC", "Verso ACTC"],
    overview: {
      title: "Dal singolo al sistema: il modello ASTC",
      content: [
        "Pier Paolo Colasanti e Stefano Petti hanno sviluppato il modello **ASTC** unendo decenni di esperienza come team coach nelle realtà organizzative più complesse e lo studio dei principali modelli internazionali di team coaching.",
        "Il modello si occupa delle persone che compongono il team ma soprattutto dei **pattern** in cui sono coinvolte e delle **interazioni** tra di loro. Si passa da *\"i membri lavorano sulle proprie dinamiche\"* a *\"**tutto il team si focalizza sui pattern che condizionano la performance**: cambiando il sistema, cambiano i risultati\"*."
      ]
    },
    target: [
      { title: "Coach certificati", desc: "Professionisti che vogliono specializzarsi nel team coaching sistemico e puntare alla credenziale ACTC.", icon: <TrendingUp /> },
      { title: "Manager & Consulenti", desc: "Con una solida formazione di coaching, di supporto a team e organizzazioni per liberarne il massimo potenziale.", icon: <Users /> },
      { title: "Coach esperti verso ACTC", desc: "Che vogliono ottenere il diploma AATC per impegnarsi nell'ottenimento della credenziale ICF ACTC.", icon: <Award /> }
    ],
    learning: {
      cols: [
        { title: "Modello ASTC", items: ["Coaching sistemico dei team", "Pattern e dinamiche di gruppo", "Il team come organismo vivente"] },
        { title: "Metodo & Strumenti", items: ["ToolBox ASTC", "Piattaforma Inner di social learning", "Homework su progetti reali"] },
        { title: "Alta performance", items: ["Ri-pensare le high performing team", "Sostituire convinzioni limitanti", "Facilitare il cambiamento sistemico"] }
      ],
      softSkills: ["Visione d'insieme", "Neutralità sistemica", "Presenza nei team", "Gestione della complessità"]
    },
    structure: {
      modules: [
        {
          title: "ASTC 1° livello",
          desc: "Corso di due giornate in videoconferenza più alcune Live Class da due ore in videoconferenza. Homework su progetti di team coaching supportati dalla nostra piattaforma di social learning Inner.",
          tags: ["Live Online", "Live Class 2h", "Piattaforma Inner", "Homework"]
        },
        {
          title: "ASTC 2° livello",
          desc: "Corso della durata di 3 giorni in aula (Milano o Roma), modulo di e-learning specifico e ToolBox ASTC per applicare il modello nei contesti reali.",
          tags: ["In aula · Milano/Roma", "E-learning", "ToolBox ASTC"]
        },
        {
          title: "ASTC Expert Exam",
          desc: "Opzionale e a pagamento, per chi vuole certificarsi come ASTC Expert: valutazione di quanto prodotto nei tre giorni del 2° livello, verifica scritta e incontro individuale di chiusura.",
          tags: ["Opzionale", "Certificazione Expert", "Colloquio finale"]
        }
      ]
    },
    teachers: [
      { name: "Pier Paolo Colasanti", creds: "Team Coach & Consulente", role: "Co-autore del modello ASTC", bio: "Team coach e consulente nelle realtà organizzative più complesse, con esperienza internazionale.", img: "https://picsum.photos/seed/astc-colasanti/300/300" },
      { name: "Stefano Petti", creds: "Team Coach & Consulente", role: "Co-autore del modello ASTC", bio: "Team coach e consulente; decine di migliaia di ore di esperienza con clienti italiani e internazionali.", img: "https://picsum.photos/seed/astc-petti/300/300" }
    ],
    career: {
      title: "Dopo il Master ASTC",
      content: "Al termine del percorso potrai operare come team coach sistemico e, superando l'esame ASTC Expert, accedere al diploma AATC — prerequisito ICF per ottenere la credenziale Advanced Certification in Team Coaching (ACTC).",
      points: [
        { title: "Diploma AATC ICF", desc: "Rilasciato dopo il superamento dell'esame ASTC Expert. Utile come prerequisito per la credenziale ICF ACTC." },
        { title: "Attestato di partecipazione", desc: "Per chi non sostiene o non supera l'esame: 54 ore di formazione sincrona certificate." },
        { title: "60 CCE ICF", desc: "L'attestato AATC equivale a 60 CCE, utili per il rinnovo della tua credenziale di Coach ICF." },
        { title: "Metodologia ASTC", desc: "Imparerai a condurre percorsi di team coaching immersivi e team-centrici grazie alle procedure e alla metodologia ASTC." }
      ]
    },
    classDates: [
      { date: "6 ottobre 2026", badge: "ASTC 1° LIVELLO · Live Online" },
      { date: "20 gennaio 2027", note: "ASTC 2° livello · Milano / Roma" }
    ],
    sessionSchedule: [
      { days: "Corso 1° livello · Videoconferenza", time: "2 giornate intensive" },
      { days: "Live Class 1° livello · Online", time: "Sessioni da 2 ore" },
      { days: "Corso 2° livello · In aula", time: "3 giornate (Milano o Roma)" }
    ],
    fees: [
      {
        title: "ASTC 1° livello",
        type: "lump" as const,
        benefit: "Live Online",
        heading: "1° livello in videoconferenza",
        desc: "Corso di 2 giornate in videoconferenza + Live Class da 2 ore + homework su progetti di team coaching supportati dalla piattaforma Inner.",
        price: "Su richiesta",
        priceLabel: "una tantum"
      },
      {
        title: "ASTC 2° livello",
        type: "lump" as const,
        benefit: "In aula · Milano / Roma",
        heading: "2° livello in presenza",
        desc: "3 giorni di corso in aula (Milano o Roma), modulo e-learning dedicato e ToolBox ASTC per applicare il modello sul campo.",
        price: "Su richiesta",
        priceLabel: "una tantum"
      },
      {
        title: "ASTC Expert Exam",
        type: "after" as const,
        benefit: "Opzionale",
        heading: "Esame di certificazione",
        desc: "Valutazione del lavoro svolto nei 3 giorni del 2° livello, verifica scritta e incontro individuale di chiusura. Supera l'esame per ottenere il diploma AATC ICF.",
        price: "Su richiesta",
        priceLabel: "una tantum"
      }
    ],
    editionsSection: {
      eyebrow: "Calendario edizioni",
      title: "Edizione 2026/2027",
      intro: "Il percorso si articola in **due livelli + esame opzionale**. Il 1° livello è in **videoconferenza**, il 2° livello si svolge **in aula** a **Milano** o **Roma** a scelta."
    },
    editions: [
      {
        city: "Online",
        citySlug: "online",
        level: "1° Livello",
        levelSlug: "l1",
        editionLabel: "ASTC 1° livello 261",
        editionSlug: "astc-l1-261",
        subtitle: "Ottobre – Novembre 2026 · In videoconferenza",
        badge: "Early Bird attivo",
        earlyBird: { label: "Early Bird", date: "19 agosto 2026" },
        enrollmentEnd: { label: "Termine iscrizioni", date: "19 settembre 2026" },
        events: [
          { label: "Early Bird", date: "19 agosto 2026", type: "deadline-early" },
          { label: "Termine iscrizioni", date: "19 settembre 2026", type: "deadline-final" },
          { label: "1a Live Class", date: "6 ottobre 2026", type: "live-class" },
          { label: "Corso a distanza", date: "16, 17 ottobre 2026", type: "corso", note: "In videoconferenza" },
          { label: "2a Live Class", date: "29 ottobre 2026", type: "live-class" },
          { label: "3a Live Class", date: "10 novembre 2026", type: "live-class" }
        ]
      },
      {
        city: "Milano",
        citySlug: "milano",
        level: "2° Livello",
        levelSlug: "l2",
        editionLabel: "ASTC 2° livello · Milano",
        editionSlug: "astc-l2-milano",
        subtitle: "Gennaio – Febbraio 2027 · In aula a Milano",
        badge: "Iscrizioni aperte",
        earlyBird: { label: "Early Bird", date: "21 novembre 2026" },
        enrollmentEnd: { label: "Termine iscrizioni", date: "20 dicembre 2026" },
        events: [
          { label: "Early Bird", date: "21 novembre 2026", type: "deadline-early" },
          { label: "Termine iscrizioni", date: "20 dicembre 2026", type: "deadline-final" },
          { label: "1a Live Class", date: "20 gennaio 2027", type: "live-class" },
          { label: "Corso in aula Milano", date: "4, 5, 6 febbraio 2027", type: "corso", note: "In presenza a Milano" },
          { label: "2a Live Class", date: "15 febbraio 2027", type: "live-class" }
        ]
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "2° Livello",
        levelSlug: "l2",
        editionLabel: "ASTC 2° livello · Roma",
        editionSlug: "astc-l2-roma",
        subtitle: "Gennaio – Febbraio 2027 · In aula a Roma",
        badge: "Iscrizioni aperte",
        earlyBird: { label: "Early Bird", date: "21 novembre 2026" },
        enrollmentEnd: { label: "Termine iscrizioni", date: "20 dicembre 2026" },
        events: [
          { label: "Early Bird", date: "21 novembre 2026", type: "deadline-early" },
          { label: "Termine iscrizioni", date: "20 dicembre 2026", type: "deadline-final" },
          { label: "1a Live Class", date: "20 gennaio 2027", type: "live-class" },
          { label: "Corso in aula Roma", date: "25, 26, 27 febbraio 2027", type: "corso", note: "In presenza a Roma" },
          { label: "2a Live Class", date: "15 febbraio 2027", type: "live-class" }
        ]
      }
    ],
    faqs: commonFaqs
  },
  'eiw': {
    title: "Emotional Intelligence Workout (EIW)",
    subtitle: "Muscoli Emozionali",
    tagline: "Un allenamento concreto per sviluppare l'intelligenza emotiva attraverso l'esperienza: non solo teoria, ma pratica consapevole guidata dai coach EIW.",
    type: "WORKOUT EQ",
    heroBenefits: [
      "Sviluppa l'IE facendo esperienza, non ascoltando teoria",
      "4 emozioni per Round seguendo il fiore di Plutchik",
      "Modello CSI Asterys: Consapevolezza · Strategia · Interazione",
      "4 CCE ICF per ogni Round · posti limitati"
    ],
    summaryBox: {
      nextEdition: "Round aperto",
      dates: "Round in programma",
      format: "Live Online",
      duration: "4 CCE ICF per Round",
      price: "100€ + IVA",
      installments: "Rateizzazione su richiesta"
    },
    badges: ["Modello CSI Asterys", "Fiore di Plutchik", "4 CCE ICF per Round"],
    overview: {
      title: "L'IE si sviluppa facendo, non solo sapendo",
      content: [
        "Nella maggior parte dei corsi di intelligenza emotiva si parla, si studia, come fosse un'altra materia da \"sapere\". Ma oltre a questo si deve **\"essere\" diversi**, sviluppando un livello di coscienza specifico che passa per l'esperienza.",
        "Per questo, accumulati decenni di esperienza sul campo, Asterys Lab ha progettato EIW: **esperienze consapevoli e mirate**, non lezioni frontali. Ci sarà da sudare, ma lavorerai davvero sulla competenza che oggi più che mai fa la differenza.",
        "EIW offre lo spazio, gli strumenti e i coach che ti accompagneranno anche nei momenti difficili, rendendo l'esperienza **piacevole e appagante**."
      ]
    },
    target: [
      { title: "Manager & Leader", desc: "Per una leadership più lucida, empatica ed efficace nei momenti che contano.", icon: <Users /> },
      { title: "Coach & Counsellor", desc: "E chiunque per professione abbia nella relazione lo strumento principale di lavoro.", icon: <Brain /> },
      { title: "Chi vuole crescere", desc: "Ogni persona che vuole sviluppare davvero la propria intelligenza emotiva.", icon: <MessageCircle /> }
    ],
    learning: {
      cols: [
        { title: "Consapevolezza", items: ["Riconoscere le emozioni", "Dare loro un nome", "Percepirne l'intensità"] },
        { title: "Strategia", items: ["Anticipare i trigger", "Conoscere i percorsi interiori", "Agire in modo strategico"] },
        { title: "Interazione", items: ["Emozioni nelle relazioni", "Empatia e percezione", "Scelte & obiettivi"] }
      ],
      softSkills: ["Autoconsapevolezza", "Empatia", "Regolazione emotiva", "Presenza relazionale"]
    },
    structure: {
      modules: [
        {
          title: "Round di Workout",
          desc: "Ogni Round tratta 4 petali del fiore di Plutchik e le 4 rispettive emozioni. Nessuna sequenza obbligata: inizi dal primo Round disponibile o scegli quello con il set di emozioni più interessante per te.",
          tags: ["4 petali per Round", "Set dedicato", "Nessuna sequenza"]
        },
        {
          title: "Modello CSI Asterys",
          desc: "Tutto il percorso è costruito sul modello CSI di sviluppo dell'IE: Consapevolezza (riconosco le emozioni), Strategia (anticipo trigger e percorsi interiori), Interazione (le emozioni nelle relazioni e nelle scelte).",
          tags: ["Consapevolezza", "Strategia", "Interazione"]
        },
        {
          title: "Ripetere un Round",
          desc: "A distanza di tempo puoi rifare un Round sullo stesso set di emozioni: un'esperienza sempre nuova, utile per consolidare le consapevolezze acquisite.",
          tags: ["Ri-partecipare", "Consolidamento", "Nuove letture"]
        }
      ]
    },
    teachers: [
      {
        name: "Renata Cargnelutti Beltrami",
        creds: "Coach EQ",
        role: "Trainer EIW",
        bio: "Coach e facilitatrice specializzata nell'Intelligenza Emotiva.",
        img: "https://picsum.photos/seed/eiw-renata/600/800"
      },
      {
        name: "Nicoletta Stellino",
        creds: "Coach EQ",
        role: "Trainer EIW",
        bio: "Coach e facilitatrice specializzata nell'Intelligenza Emotiva.",
        img: "https://picsum.photos/seed/eiw-nicoletta/600/800"
      },
      {
        name: "Pier Paolo Colasanti",
        creds: "Coach EQ",
        role: "Trainer EIW",
        bio: "Coach e facilitatore specializzato nell'Intelligenza Emotiva.",
        img: "https://picsum.photos/seed/eiw-colasanti/600/800"
      }
    ],
    career: {
      title: "Cosa ti porti a casa da ogni Round",
      content: "Un allenamento concreto della tua intelligenza emotiva, crediti ICF riconosciuti e strumenti da applicare subito nelle relazioni di ogni giorno.",
      points: [
        { title: "4 CCE ICF per Round", desc: "Ogni Round vale 4 CCE ICF, utili per il rinnovo della tua credenziale di coach." },
        { title: "Modello CSI", desc: "Consapevolezza, Strategia, Interazione: un modello chiaro per porti le domande giuste su ogni emozione." },
        { title: "Esperienza, non concetti", desc: "Attività progettate per sviluppare coscienza emotiva attraverso la pratica consapevole." },
        { title: "Coach al tuo fianco", desc: "I trainer EIW ti guidano anche nei momenti più difficili, senza farti perdere per strada." }
      ]
    },
    classDates: [
      { date: "Prossimo Round", badge: "POSTI LIMITATI" }
    ],
    sessionSchedule: [
      { days: "Round di Workout · Live Online", time: "Calendario per Round" }
    ],
    fees: [
      {
        title: "Round EIW",
        type: "lump" as const,
        benefit: "4 CCE ICF",
        heading: "Quota per Round",
        desc: "Iscrizione a un Round di Workout: 4 emozioni lavorate, esperienze guidate dai coach e 4 CCE ICF riconosciute. Su richiesta è previsto il frazionamento in più rate.",
        price: "100€",
        priceLabel: "+ IVA per Round",
        footnote: "Posti limitati · Rateizzazione disponibile su richiesta"
      }
    ],
    faqs: commonFaqs
  },
  'coaching-circle': {
    title: "Coaching Circle",
    subtitle: "Pratica supervisionata di coaching",
    tagline: "Uno spazio per fare pratica di coaching in gruppi da 4, con feedback immediato di un mentor-coach PCC.",
    type: "PRATICA SUPERVISIONATA",
    heroKicker: "PER COACH CHE HANNO COMPLETATO UN PERCORSO BASE",
    heroBenefits: [
      "3,30h di pratica supervisionata in gruppi da 4 persone",
      "20' nel ruolo di coach + 30' di feedback dedicato per ciascun partecipante",
      "Mentor-coach con credenziale ICF almeno PCC formati in Asterys Lab",
      "Apprendimento dalle tre posizioni: coach, cliente, osservatore"
    ],
    summaryBox: {
      nextEdition: "Online · Zoom",
      dates: "Data condivisa nel gruppo all'iscrizione",
      format: "Videochiamata · Gruppi da 4",
      duration: "3,30 ore",
      price: "90€ + IVA 22%",
      installments: "Pagamento una tantum"
    },
    badges: ["Gruppi da 4", "Mentor PCC+", "Feedback immediato"],
    overview: {
      title: "Fai pratica di coaching",
      content: [
        "Dopo aver terminato un percorso di formazione di coaching, anche dopo aver preso la credenziale, è alto il rischio di **\"viziare\" la propria pratica** con modalità poco efficaci e che si scostino dal coaching secondo ICF, tralasciando le linee guida e il codice etico ma anche adottando modelli di conversazione non specifici del coaching e/o mutuati da altre discipline.",
        "Sebbene ci si aspetti, da ogni coach, che scopra e adotti un proprio stile — e noi, come scuola, incoraggiamo sempre i nostri studenti a trovare la propria forma di espressione — è importante che il coach faccia attenzione a non concedersi licenze che poco hanno a che fare con il coaching, rischiando di perdere di efficacia.",
        "Per questa ragione, Asterys Lab propone **uno spazio per fare pratica di coaching, in gruppi da quattro persone, supervisionata da un mentor-coach professionista PCC**. Il mentor coach offre feedback immediato e discute, con i partecipanti, anche le scelte e le possibili strategie nei casi affrontati di volta in volta."
      ]
    },
    target: [
      { title: "Coach con percorso base completato", desc: "Ha già effettuato un percorso base per diventare coach e vuole fare pratica attraverso feedback diretto.", icon: <Target /> },
      { title: "Coach credenzialati", desc: "Vuole allenare la pratica rimanendo aderente alle linee guida e al codice etico ICF.", icon: <Award /> },
      { title: "Coach in cerca di feedback", desc: "Desidera confrontarsi con un professionista del settore e con altri coach in un contesto strutturato.", icon: <Users /> },
    ],
    learning: {
      cols: [
        {
          title: "Pratica nel ruolo di coach",
          items: [
            "Sessione di 20' con un coachee reale",
            "30' di feedback dedicato dal mentor",
            "Riflessione guidata sulle scelte fatte",
            "Strategie alternative per i casi affrontati"
          ]
        },
        {
          title: "Apprendimento dalle tre posizioni",
          items: [
            "Ruolo di coach: sperimentazione diretta",
            "Ruolo di cliente: vivere il coaching dall'interno",
            "Ruolo di osservatore: affinare lo sguardo",
            "Confronto tra i punti di vista"
          ]
        },
        {
          title: "Aderenza al metodo ICF",
          items: [
            "Linee guida e codice etico ICF",
            "Modelli di conversazione specifici del coaching",
            "Riconoscimento di derive da altre discipline",
            "Sviluppo del proprio stile dentro la cornice ICF"
          ]
        }
      ],
      softSkills: ["Presenza", "Ascolto", "Autoconsapevolezza", "Ricezione del feedback"]
    },
    structure: {
      modules: [
        {
          title: "Apertura e setting",
          desc: "Il mentor coach imposta il lavoro del gruppo, chiarisce i ruoli e il contratto del circle."
        },
        {
          title: "Sessioni a rotazione",
          desc: "Ogni partecipante fa una sessione di 20' nel ruolo di coach; gli altri si alternano come cliente e osservatori."
        },
        {
          title: "Feedback e riflessione",
          desc: "Dopo ogni sessione, 30' di feedback dedicato dal mentor e confronto di gruppo su scelte, strategie e aderenza al metodo ICF."
        }
      ]
    },
    programIntro:
      "Il Coaching Circle è pensato per chi ha già completato un percorso base e vuole continuare a crescere attraverso una pratica supervisionata di qualità.",
    studyModeBox: {
      title: "Modalità di svolgimento",
      highlight: "Zoom · Gruppi da 4",
      body: "Dopo l'acquisto ricevi il link al calendario per scegliere la data disponibile più comoda. L'evento avrà luogo al raggiungimento del numero minimo di partecipanti; altrimenti vieni ricollocato nel circle successivo. Le iscrizioni vengono raccolte in ordine di arrivo e ti verrà proposta l'adesione a un gruppo WhatsApp con mentor e altri iscritti per definire la data utile per tutti.",
    },
    teachers: [
      {
        name: "Mentor Coach Asterys Lab",
        creds: "ICF PCC+",
        role: "Mentor del Coaching Circle",
        bio: "Tutti i mentor impegnati nel Coaching Circle sono Coach ICF con credenziale almeno PCC, formati nella scuola di coaching Asterys Lab.",
        img: "https://picsum.photos/seed/coaching-circle-mentor/300/300"
      }
    ],
    career: {
      title: "Perché inserirlo nella tua pratica",
      content: "Il Coaching Circle mantiene alta la qualità della tua pratica professionale: feedback immediato, confronto tra pari e aderenza alle linee guida ICF.",
      points: [
        { title: "Feedback immediato", desc: "Il mentor PCC+ osserva la tua sessione e restituisce un feedback dedicato di 30 minuti." },
        { title: "Allenamento costante", desc: "Uno spazio ricorrente per affinare la pratica tra un corso e l'altro o dopo la credenziale." },
        { title: "Apprendimento di gruppo", desc: "Osservare e ricevere coaching dai pari è parte essenziale della crescita professionale." },
        { title: "Aderenza al metodo ICF", desc: "Mantieni la tua pratica allineata alle linee guida e al codice etico ICF." }
      ]
    },
    fees: [
      {
        title: "Coaching Circle",
        type: "lump",
        benefit: "Pratica supervisionata",
        heading: "Quota di partecipazione",
        desc: "Include 3,30h di mentor coaching di gruppo in videocall con un mentor-coach PCC+.",
        price: "90€",
        priceLabel: "+ IVA 22%",
        footnote: "Dopo l'acquisto riceverai il link al calendario per scegliere la data più comoda tra quelle disponibili."
      }
    ],
    faqs: [
      {
        q: "A chi è rivolto il Coaching Circle?",
        a: "A chi ha già effettuato un percorso base per diventare coach e vuole fare pratica di coaching attraverso il feedback diretto di un professionista del settore."
      },
      {
        q: "Come si svolge l'incontro?",
        a: "3,30 ore di pratica supervisionata in gruppi da 4 persone, in videoconferenza Zoom. I partecipanti si alternano nei ruoli di coach, cliente e osservatore. Ogni partecipante fa una sessione di 20' nel ruolo di coach e riceve 30' di feedback dedicato dal mentor."
      },
      {
        q: "Come si definisce la data del Coaching Circle?",
        a: "Raccogliamo tutte le iscrizioni e componiamo i gruppi di lavoro in base all'ordine di arrivo. Riceverai una richiesta di adesione a un gruppo WhatsApp nel quale, insieme al mentor coach e agli altri iscritti, sarà definita la data utile per tutti."
      },
      {
        q: "Cosa succede se non si raggiunge il numero minimo?",
        a: "L'evento avrà luogo al raggiungimento del numero minimo di partecipanti per ogni incontro; altrimenti verrai ricollocato nel Coaching Circle successivo."
      },
      {
        q: "Chi sono i mentor del Coaching Circle?",
        a: "Tutti i mentor impegnati nel Coaching Circle sono Coach ICF con credenziale almeno PCC, formati nella scuola di coaching Asterys Lab."
      },
      {
        q: "Dove si svolge il Coaching Circle?",
        a: "In videoconferenza su Zoom. Dopo la definizione della data riceverai il link per partecipare."
      }
    ]
  },
  'public-speaking': {
    title: "Public Speaking Pro",
    subtitle: "Parla con Presenza",
    tagline: "Supera la paura e comunica il tuo valore con carisma, struttura e intelligenza emotiva.",
    type: "COMUNICAZIONE",
    heroBenefits: ["Gestisci l'ansia da palcoscenico", "Struttura messaggi memorabili", "Usa il corpo e la voce con intenzione", "Allenamento pratico con riprese video"],
    summaryBox: { nextEdition: "Online", dates: "Novembre 2026", format: "Live Online", duration: "16 ore", price: "450€", installments: "2 rate" },
    badges: ["Pratico", "Feedback Immediato"],
    overview: { title: "Comunicare è servire", content: ["Non si tratta di te, si tratta del tuo pubblico."] },
    target: [{ title: "Professionisti", desc: "Chi deve presentare idee o progetti.", icon: <Users /> }],
    learning: { cols: [{ title: "Content & Presence", items: ["Storytelling", "Voce", "Postura"] }], softSkills: ["Autostima", "Chiarezza"] },
    structure: { modules: [{ title: "Dalla Paura al Coraggio", desc: "Tecniche di centratura." }] },
    teachers: [{ name: "Esperti Lab", creds: "Pro Speakers", role: "Speakers", bio: "Comunicatori di professione.", img: "https://picsum.photos/seed/spk/300/300" }],
    career: { title: "Datti Voce", content: "Migliora la tua visibilità interna ed esterna.", points: [] },
    fees: [{ title: "Unica", type: "lump" as const, benefit: "Tutto incluso", heading: "Quota iscrizione", desc: "Include accesso alle sessioni live, dispense, video registrazioni e certificato di partecipazione.", price: "450€", priceLabel: "una tantum" }],
    faqs: commonFaqs
  },
  'voice-dialogue': {
    title: "Voice Dialogue Skills",
    subtitle: "Voice Dialogue",
    tagline: "Un laboratorio intensivo in presenza per integrare il Voice Dialogue nella tua pratica di coaching e sviluppo personale.",
    type: "SPECIALIZZAZIONE",
    heroKicker: "PER COACH E PROFESSIONISTI",
    heroBenefits: [
      "Sperimenti in prima persona le tecniche base del Voice Dialogue",
      "Acquisisci padronanza operativa da applicare nel coaching",
      "Alleni consapevolezza sulle tue voci interne e su quelle dei clienti",
      "Colleghi il metodo alle competenze ICF"
    ],
    summaryBox: {
      nextEdition: "Milano",
      dates: "17–19 novembre 2026",
      format: "In presenza",
      duration: "3 giornate full immersion",
      price: "Da 1.575€ + IVA",
      installments: "Pagamento rateizzato disponibile"
    },
    badges: ["3 giornate in aula", "Lab su piattaforma Inner", "Metodo esperienziale"],
    overview: {
      title: "Perché scegliere Voice Dialogue Skills",
      content: [
        "Il corso si sviluppa in **3 giorni di full immersion in aula**, in presenza. Durante il laboratorio sperimenti in prima persona le tecniche di base del Voice Dialogue, così da acquisire capacità e padronanza da trasferire nei percorsi di coaching.",
        "Anche per questo corso è allestito un **Lab online** sulla piattaforma **Inner**, uno spazio web dove confrontarti con colleghi e trainer durante tutto il periodo di svolgimento.",
        "Il percorso è pensato per coach professionisti, professionisti del supporto alla persona e per chi desidera aumentare il proprio livello di consapevolezza ed efficacia professionale attraverso il Voice Dialogue."
      ]
    },
    target: [
      { title: "Coach professionisti", desc: "Per integrare una metodologia riconosciuta nella pratica quotidiana.", icon: <Target /> },
      { title: "Professionisti dello sviluppo personale", desc: "Per potenziare il lavoro con clienti e gruppi.", icon: <Users /> },
      { title: "Professionisti del supporto alla persona", desc: "Per aggiungere strumenti pratici di ascolto e consapevolezza.", icon: <MessageCircle /> },
      { title: "Chi desidera maggiore efficacia", desc: "Per usare le tecniche base su di sé e nelle relazioni professionali.", icon: <TrendingUp /> },
    ],
    learning: {
      cols: [
        {
          title: "Tecniche di base",
          items: [
            "Applicare i principi del Voice Dialogue",
            "Riconoscere le principali voci interiori",
            "Conduzione di esercizi esperienziali",
            "Integrazione nella relazione di coaching"
          ]
        },
        {
          title: "Consapevolezza professionale",
          items: [
            "Osservare dinamiche interne nei colloqui",
            "Migliorare centratura e presenza",
            "Scegliere quando usare il metodo",
            "Ampliare la prospettiva sul consueto"
          ]
        },
        {
          title: "Metodo e competenze ICF",
          items: [
            "Relazione tra Voice Dialogue e competenze ICF",
            "Uso etico e contestuale delle tecniche",
            "Allenamento con feedback dei trainer",
            "Applicazione a casi reali"
          ]
        }
      ],
      softSkills: ["Presenza", "Ascolto profondo", "Consapevolezza", "Flessibilità"]
    },
    structure: {
      modules: [
        {
          title: "Giornata 1 · Fondamenti",
          desc: "Introduzione al Voice Dialogue, cornice metodologica ed esercizi base per entrare nel dialogo con le voci interiori."
        },
        {
          title: "Giornata 2 · Pratica guidata",
          desc: "Laboratorio intensivo in aula con sperimentazione diretta, osservazione e feedback su casi portati dai partecipanti."
        },
        {
          title: "Giornata 3 · Applicazione nel coaching",
          desc: "Integrazione pratica del metodo nei percorsi di coaching, con focus su contesti, utilità e limiti d'uso."
        }
      ]
    },
    programIntro:
      "Un percorso esperienziale, concreto e intensivo per integrare il Voice Dialogue nel tuo lavoro con persone e team.",
    studyModeBox: {
      title: "Modalità di studio",
      highlight: "in presenza + Lab Inner",
      body: "Le attività principali si svolgono in aula a Milano. In parallelo hai accesso al Lab sulla piattaforma Inner per confronto continuo con colleghi e trainer.",
    },
    teachers: [
      { name: "Giovanna Giuffredi", creds: "MCC", role: "Trainer", bio: "Coach senior e co-fondatrice Asterys Lab.", img: "https://picsum.photos/seed/voice-giovanna/300/300" },
      { name: "Team Voice Dialogue", creds: "PCC/MCC", role: "Facilitatori", bio: "Trainer specializzati nelle tecniche di Voice Dialogue.", img: "https://picsum.photos/seed/voice-team/300/300" }
    ],
    career: {
      title: "Come ti sarà utile nella professione",
      content: "Voice Dialogue Skills amplia la tua cassetta degli attrezzi professionale e rafforza la qualità del tuo intervento nel coaching e nello sviluppo personale.",
      points: [
        { title: "Applicazione immediata", desc: "Usi subito principi e tecniche nelle sessioni di coaching e nei colloqui professionali." },
        { title: "Maggiore consapevolezza", desc: "Riconosci meglio le dinamiche interne tue e dei tuoi interlocutori." },
        { title: "Metodo integrabile", desc: "Colleghi Voice Dialogue e competenze ICF in modo coerente e pratico." },
        { title: "Nuova prospettiva", desc: "Impari a leggere il consueto da un punto di vista più ampio e funzionale." }
      ]
    },
    sessionSchedule: [
      { days: "17 novembre 2026", time: "09:00 - 18:00" },
      { days: "18 novembre 2026", time: "09:00 - 18:00" },
      { days: "19 novembre 2026", time: "09:00 - 18:00" }
    ],
    fees: [
      {
        title: "Early Bird",
        type: "lump",
        benefit: "Prezzo speciale",
        heading: "Iscriviti prima e risparmia",
        desc: "Approfitta del prezzo scontato Early Bird per il corso in presenza a Milano.",
        price: "1.575€",
        priceLabel: "+ IVA"
      },
      {
        title: "Prezzo pieno",
        type: "lump",
        benefit: "Quota standard",
        heading: "Quota iscrizione",
        desc: "Include 3 giornate in aula, materiali didattici e accesso al Lab su piattaforma Inner.",
        price: "1.750€",
        priceLabel: "+ IVA"
      }
    ],
    faqs: [
      {
        q: "A chi è rivolto il corso Voice Dialogue?",
        a: "Il corso è rivolto a coach professionisti, professionisti dello sviluppo personale e del supporto alla persona. È aperto anche a chi desidera utilizzare le tecniche di base del Voice Dialogue per aumentare consapevolezza ed efficacia."
      },
      {
        q: "Com'è strutturato il percorso?",
        a: "Il percorso prevede 3 giornate full immersion in aula, in presenza a Milano, con attività laboratoriali ed esercitazioni pratiche guidate."
      },
      {
        q: "Che cos'è la piattaforma Inner?",
        a: "Inner è il Lab digitale del corso: uno spazio web dove confrontarti con colleghi e trainer durante tutto il periodo di svolgimento."
      },
      {
        q: "Cosa avrò alla fine del corso?",
        a: "Avrai una buona conoscenza delle tecniche di Voice Dialogue, una maggiore consapevolezza operativa e criteri chiari per capire quando il metodo è più utile nei percorsi di coaching."
      }
    ]
  },
  'continuous-learning': {
    title: "Continuous Learning (CL)",
    subtitle: "Continuous Learning",
    tagline: "Formazione continua per coach e alumni Asterys Lab: Live Class mensili interattive per tutto l'anno (escluso agosto).",
    type: "CONTINUOUS LEARNING",
    heroKicker: "PER ALUMNI E COACH IN FORMAZIONE",
    heroBenefits: [
      "Programma circolare: entri quando vuoi, senza punto di inizio obbligato",
      "Live Class serali mensili in Zoom (18:30–20:00), tutto l'anno tranne agosto",
      "Approccio di facilitazione: incontri interattivi, non frontali",
      "Sviluppo personale del coach + approfondimenti pratici di coaching"
    ],
    summaryBox: {
      nextEdition: "Online · Zoom",
      dates: "Gennaio – Dicembre 2026 (pausa ad agosto)",
      format: "Live Class mensili",
      duration: "1 incontro al mese · 18:30–20:00",
      price: "Da 9€ + IVA a Live Class",
      installments: "Pacchetti flessibili per numero di incontri"
    },
    badges: ["Community Alumni", "Live Class mensili", "Network coaching"],
    overview: {
      title: "Un percorso di apprendimento continuo",
      content: [
        "Il programma Continuous Learning ha uno svolgimento **circolare**: non esiste un punto di inizio obbligato e puoi entrare nel percorso durante tutto l'anno, escluso il mese di agosto.",
        "Nelle Live Class convivono partecipanti in fasi diverse: chi ha appena iniziato, chi è tra un corso e l'altro e chi ha già concluso il percorso ma desidera restare in contatto con stimoli orientati al coaching.",
        "Gli incontri alternano temi di sviluppo personale e approfondimenti sull'attività di coaching, con casi presi da business, storia, filosofia, psicologia e altre discipline, sempre riletti con la prospettiva del coach."
      ]
    },
    target: [
      { title: "Alumni Asterys Lab", desc: "Per restare aggiornati, connessi alla community e in allenamento continuo.", icon: <Users /> },
      { title: "Coach con credenziale", desc: "Per nutrire la pratica professionale con nuovi punti di vista.", icon: <Award /> },
      { title: "Coach in formazione", desc: "Per integrare il percorso formativo con stimoli continui e networking.", icon: <Target /> },
      { title: "Professionisti del supporto", desc: "Per ampliare il bagaglio culturale e riflessivo utile alla relazione di aiuto.", icon: <MessageCircle /> },
    ],
    learning: {
      cols: [
        {
          title: "Sviluppo del coach",
          items: [
            "Consapevolezza personale e professionale",
            "Riflessione guidata su casi reali",
            "Connessioni tra discipline diverse",
            "Capacità di lettura dei contesti complessi"
          ]
        },
        {
          title: "Pratica di coaching",
          items: [
            "Approfondimenti su temi coaching-centrici",
            "Applicazione a sessioni e percorsi reali",
            "Scambio interattivo tra pari",
            "Integrazione di prospettive business e human sciences"
          ]
        },
        {
          title: "Network & continuità",
          items: [
            "Community viva e multi-livello",
            "Apprendimento distribuito nel tempo",
            "Partecipazione libera alla singola sessione",
            "Collegamento stabile con la faculty Asterys"
          ]
        }
      ],
      softSkills: ["Consapevolezza", "Pensiero critico", "Ascolto", "Flessibilità cognitiva"]
    },
    structure: {
      modules: [
        {
          title: "Formato circolare",
          desc: "Il programma è attivo tutto l'anno (escluso agosto) e permette ingresso continuo: puoi partecipare a una singola Live Class o acquistare pacchetti di incontri."
        },
        {
          title: "Live Class mensili",
          desc: "Ogni incontro in Zoom (18:30–20:00) affronta un tema specifico e lo approfondisce con prospettiva coaching, in modalità facilitata e altamente interattiva."
        },
        {
          title: "Community e continuità",
          desc: "Tra una Live Class e l'altra mantieni il collegamento con la community alumni e con la faculty, alimentando apprendimento costante e network professionale."
        }
      ]
    },
    programIntro:
      "Continuous Learning è uno spazio continuo di crescita professionale e personale: incontri brevi, regolari e ad alto valore riflessivo.",
    studyModeBox: {
      title: "Modalità di fruizione",
      highlight: "Zoom · 1 volta al mese",
      body: "Tutte le Live Class si svolgono in videoconferenza Zoom dalle 18:30 alle 20:00. Dopo l'iscrizione ricevi il calendario e, 3-4 giorni prima dell'incontro, link Zoom e titolo della sessione.",
    },
    teachers: [
      { name: "Alessandra Bitelli", creds: "PCC", role: "Titolare del corso", bio: "Executive Coach, Faculty Asterys Lab, collabora allo sviluppo dei programmi formativi.", img: "https://picsum.photos/seed/cl-bitelli/300/300" },
      { name: "Graziano Nicoli", creds: "Executive Coach", role: "Titolare del corso", bio: "Trainer, Facilitator and Assessor con esperienza su percorsi di crescita professionale.", img: "https://picsum.photos/seed/cl-nicoli/300/300" }
    ],
    career: {
      title: "Perché inserirlo nella tua pratica",
      content: "Il programma mantiene attive nel tempo riflessione, confronto professionale e aggiornamento continuo, con un network ricco di coach in fasi diverse di sviluppo.",
      points: [
        { title: "Allenamento costante", desc: "Una Live Class al mese per non interrompere il ritmo di crescita professionale." },
        { title: "Approccio interdisciplinare", desc: "Temi da storia, business, filosofia e psicologia riletti in chiave coaching." },
        { title: "Facilitazione interattiva", desc: "Ogni partecipante può contribuire con riflessioni e casi, in un contesto non frontale." },
        { title: "Network alumni", desc: "Rimani connesso alla community Asterys Lab e ai professionisti del coaching." }
      ]
    },
    sessionSchedule: [
      { days: "Una volta al mese (gennaio–luglio, settembre–dicembre)", time: "18:30 - 20:00" },
      { days: "Pausa estiva", time: "Agosto" }
    ],
    classDates: [
      { date: "14 gennaio 2026", badge: "1a Live Class" },
      { date: "10 febbraio 2026", badge: "2a Live Class" },
      { date: "10 marzo 2026", badge: "3a Live Class" },
      { date: "16 aprile 2026", badge: "4a Live Class" },
      { date: "27 maggio 2026", badge: "5a Live Class" },
      { date: "16 giugno 2026", badge: "6a Live Class" },
      { date: "8 luglio 2026", badge: "7a Live Class" },
      { date: "15 settembre 2026", badge: "8a Live Class" },
      { date: "20 ottobre 2026", badge: "9a Live Class" },
      { date: "17 novembre 2026", badge: "10a Live Class" },
      { date: "15 dicembre 2026", badge: "11a Live Class" }
    ],
    fees: [
      {
        title: "1–2 Live Class",
        type: "lump",
        benefit: "Ingresso flessibile",
        heading: "Pacchetto base",
        desc: "Ideale per chi vuole iniziare o partecipare a pochi incontri.",
        price: "16€",
        priceLabel: "+ IVA / Live Class"
      },
      {
        title: "3–7 Live Class",
        type: "lump",
        benefit: "Prezzo ridotto",
        heading: "Pacchetto intermedio",
        desc: "Più incontri, maggiore continuità e costo unitario ridotto.",
        price: "12€",
        priceLabel: "+ IVA / Live Class"
      },
      {
        title: "Da 8 Live Class",
        type: "lump",
        benefit: "Miglior valore",
        heading: "Pacchetto continuo",
        desc: "Per chi vuole presidiare l'intero anno formativo con apprendimento costante.",
        price: "9€",
        priceLabel: "+ IVA / Live Class"
      }
    ],
    faqs: [
      {
        q: "Devo iniziare da una data specifica?",
        a: "No. Continuous Learning è un programma circolare: puoi entrare in qualsiasi momento dell'anno, escluso agosto."
      },
      {
        q: "Quando si svolgono le Live Class?",
        a: "Le Live Class sono in Zoom, una volta al mese, dalle 18:30 alle 20:00, tutto l'anno tranne agosto."
      },
      {
        q: "Posso acquistare una sola Live Class?",
        a: "Sì. Puoi acquistare anche un solo incontro oppure scegliere pacchetti multipli con prezzo unitario decrescente."
      },
      {
        q: "Chi paga il corso?",
        a: "L'accesso è riservato agli alumni della scuola: paga solo chi non è alumnus/alumna."
      }
    ]
  }
};
