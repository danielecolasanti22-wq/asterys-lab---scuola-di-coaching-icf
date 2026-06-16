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
  /** Etichetta breve per i tab della sezione prezzi (se assente usa title). */
  tabLabel?: string;
  benefit: string;
  heading: string;
  desc: string;
  price: string;
  priceLabel: string;
  footnote?: string;
  ctaLabel?: string;
  financing?: {
    label: string;
    amount: string;
    note: string;
  };
  type: 'installment' | 'lump' | 'after' | 'zero-rate';
  /** Chiave livello per il deep-link al checkout Woo (es. 'l1' | 'l2' | 'completo'). Vedi src/constants/woo.ts */
  wooKey?: string;
  /** Quantità da aggiungere al carrello per questa opzione (corsi con sconto quantità, es. Continuous). Default 1. */
  wooQuantity?: number;
  /** Mostra un selettore di quantità libero (sconto volume): la quantità scelta finisce nel link al checkout. */
  wooQuantitySelector?: boolean;
  /** Etichetta del selettore quantità (default "Quante Live Class"). */
  wooQuantityLabel?: string;
  /** Testo esplicativo sotto il selettore quantità. */
  wooQuantityHint?: string;
  /** Opzioni del menu a tendina quantità (se wooQuantitySelector). */
  wooQuantityOptions?: { value: number; label: string }[];
}

/** Fascia oraria / riga “calendar + clock” (layout Boolean) */
export interface CourseScheduleBand {
  title: string;
  body: string;
  dayLines: string[];
  timeLines: string[];
}

export interface CourseScheduleColumn {
  icon: 'monitor' | 'users' | 'calendar';
  title: string;
  body?: string;
  lines?: string[];
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
    /** Codice sconto mostrato nel banner; si applica da solo al checkout via `couponUrl`. */
    code?: string;
    /** URL checkout Woo che applica il coupon in automatico (es. ...?coupon-code=EARLYBIRD). */
    couponUrl?: string;
    /** Scadenza ISO: passata la data, codice/EB spariscono dal banner in automatico. */
    deadlineISO?: string;
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
  pegasusProgram?: {
    eyebrow?: string;
    title: string;
    intro: string;
    logo: string;
    note?: string;
    points: { title: string; desc: string; meta?: string }[];
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
  /** Variante a colonne descrittive per sezioni senza orari fissi */
  scheduleColumns?: CourseScheduleColumn[];
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
      /** Titolo della fee/tab nella sezione prezzi da attivare al click su "Iscriviti". */
      feeTab?: string;
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
    vimeoEmbedUrl?: string;
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
    role: "HR · Master in Coaching",
    cohort: "Video testimonianza",
    quote:
      "Video testimonianza in arrivo: qui comparirà il contributo di Marco Guadagnuolo appena caricato.",
    video: {
      poster: "/testimonials/posters/marco-guadagnuolo-placeholder.svg",
      vimeoEmbedUrl: "https://player.vimeo.com/video/359988626?badge=0&autopause=0&player_id=0&app_id=58479"
    }
  },
  {
    name: "Damiano Zanotti",
    role: "COO · Master in Coaching",
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

const apcmFaqs = [
  {
    q: "Serve la laurea per diventare coach?",
    a: "No, non serve una laurea specifica. Al Master in Coaching Professionale può iscriversi chi arriva dall'università e si avvicina per la prima volta al coaching, così come chi già lavora (in HR, consulenza, management o psicologia) e vuole integrare il coaching nella propria professione. Contano motivazione, maturità professionale e voglia di mettersi in gioco."
  },
  {
    q: "Quanto dura il Master in Coaching Professionale?",
    a: "Il Master si sviluppa nell'arco di alcuni mesi, in base al livello scelto (Livello 1, Livello 2 o Percorso Completo) e al calendario dell'edizione. Le lezioni si tengono in genere una volta a settimana; le sessioni online sono dalle 18:30 alle 20:00, con studio, esercitazioni e report tra una lezione e l'altra."
  },
  {
    q: "Quanto costa il Master in Coaching Professionale?",
    a: "Il Livello 1 parte da 3.400€ + IVA, il Livello 2 da 4.500€ + IVA e il Percorso Completo (Livello 1 + 2, il più scelto) è 6.900€ + IVA. È prevista la rateizzazione fino a 24 mesi senza interessi. Prezzi aggiornati ed eventuali condizioni Early Bird sono nella sezione Prezzi."
  },
  {
    q: "Si può pagare a rate il Master in Coaching Professionale?",
    a: "Sì. Puoi pagare in un'unica soluzione oppure rateizzare fino a 24 mesi senza interessi, per distribuire l'investimento nel tempo. Le modalità di pagamento e le eventuali condizioni Early Bird sono indicate nella sezione Prezzi."
  },
  {
    q: "Quale credenziale ICF si ottiene con il Master?",
    a: "Il Master è accreditato ICF Level 1 & 2. Il Livello 1 abilita alla credenziale ACC (Associate Certified Coach); il Percorso Completo (Livello 1 + 2) prepara alla PCC (Professional Certified Coach), le credenziali internazionali di riferimento per esercitare come coach professionista."
  },
  {
    q: "Le lezioni sono online o in presenza, a Milano e Roma?",
    a: "Entrambe le modalità, a seconda dell'edizione: il Master si svolge in aula a Milano e a Roma e online in videoconferenza. Le sessioni live, con pratica guidata e feedback dei trainer, sono il cuore del percorso."
  },
  {
    q: "Si può fare il Master mentre si lavora?",
    a: "Sì. Il percorso è pensato per professionisti in attività: lezioni circa una volta a settimana e sessioni online in orario serale (18:30–20:00). Gestisci con flessibilità studio, preparazione, esercitazioni e report tra una lezione e l'altra."
  },
  {
    q: "Come funziona l'ammissione al Master?",
    a: "Non è richiesta una formazione pregressa nel coaching. Il processo prevede la compilazione del form online e un confronto con un Advisor Asterys per chiarire obiettivi, aspettative e coerenza del percorso. È gratuito e senza impegno fino alla firma del contratto di iscrizione."
  },
  {
    q: "Posso accedere alle registrazioni se mi perdo una lezione?",
    a: "Le lezioni sono pensate per la partecipazione in diretta: le registrazioni non sono disponibili per gli studenti (se alcune sessioni vengono registrate, è solo per uso interno). Per questo è importante organizzarsi per seguire le lezioni live."
  }
];

export const coursesContent: Record<string, CourseData> = {
  'apcm': {
    title: "Master in Coaching Professionale",
    subtitle: "Professione Coach",
    tagline: "Diventare coach cambia la prospettiva su se stessi e sul mondo: il Master in Coaching Professionale è il percorso d'eccellenza per trasformare la tua esperienza in una nuova carriera riconosciuta ICF, con intelligenza emotiva misurabile e approccio sistemico.",
    type: "ICF LEVEL 1 & 2",
    heroKicker: "Diventa coach",
    media: {
      hero: "/course-media/apcm/hero-apcm.png",
      overview: "/course-media/apcm/overview-master.jpg",
      brochureDecor: "/course-media/apcm/brochure.webp",
      advisor: "/course-media/apcm/advisor.webp",
      completePractical: "/course-media/apcm/supervision-mentor.png",
      completePlatform: "/course-media/apcm/platform-ui.png",
      howItWorks: "/course-media/apcm/how-master.jpg",
    },
    howItWorks: {
      title: "Come funziona il Master",
      intro:
        "Un percorso strutturato che alterna **lezioni live**, pratica supervisionata, studio individuale e report. Le lezioni sono circa una volta a settimana, secondo il calendario dell'edizione, e ti guidano passo passo fino alle competenze ICF e alla **certificazione**.",
      formazioneTitle: "Formazione",
      formazioneBadge: "Ibrido · 150 ore",
      formazioneIntro:
        "La prima parte del Master è dedicata alle **lezioni in diretta** (in aula o in videoconferenza), con esercitazioni guidate e feedback dai trainer. Le lezioni online si svolgono dalle 18:30 alle 20:00.",
    },
    scheduleBands: [
      {
        title: "Lezioni in diretta",
        body: "Segui le lezioni live in aula virtuale o in presenza, interagendo con i trainer e i compagni di corso. Le registrazioni non sono accessibili agli studenti.",
        dayLines: ["CALENDARIO DELL'EDIZIONE"],
        timeLines: [],
      },
    ],
    scheduleColumns: [
      {
        icon: "monitor",
        title: "Lezioni online in diretta",
        body: "Partecipa alle sessioni live in videoconferenza, con trainer e compagni di corso. Le registrazioni non sono accessibili agli studenti.",
      },
      {
        icon: "users",
        title: "Lezioni in presenza",
        body: "Vivi i laboratori in aula con esercitazioni, pratica guidata, confronto di gruppo e feedback diretto dai trainer.",
      },
      {
        icon: "calendar",
        title: "Calendario dell'edizione",
        lines: ["Date e orari definiti", "in base all'edizione scelta"],
      },
    ],
    studyModeBox: {
      title: "Modalità di studio",
      highlight: "",
      body: "Il ritmo prevede lezioni circa una volta a settimana, in base al calendario dell'edizione. Tra una sessione e l'altra lo studente lavora su preparazione, studio individuale, esercitazioni e report, con il supporto del team Asterys.",
      linkText: "Scopri il calendario completo",
      linkHref: "#programma",
    },
    orientationBanner: {
      title: "Fase di orientamento",
      body: "Prima del via, chiarisci obiettivi, aspettative e piano di studio insieme al team Asterys. A ogni studente viene assegnato un coach di riferimento che lo segue prima, durante e dopo il percorso.",
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
      dates: "Ottobre 2026 – Marzo 2027",
      format: "Ibrido (Presenza + Live Online)",
      duration: "150 ore accademiche",
      price: "A partire da 3.400€ + IVA",
      installments: "Rateizzabile fino a 24 mesi senza interessi"
    },
    badges: ["ICF Level 1 & 2", "20+ anni esperienza", "Community Alumni"],
    overview: {
      title: "Perché questo Master in Coaching Professionale",
      content: [
        "Il Master in Coaching Professionale è il percorso di Asterys Lab per diventare **coach professionista** con **credenziali ICF** riconosciute nel mondo. Non solo tecnica: un viaggio di trasformazione che integra metodo, **intelligenza emotiva** e **approccio sistemico**.",
        "Impari a condurre sessioni con rigore etico e a costruire un business sostenibile, accanto a **trainer MCC & PCC** con 20+ anni di esperienza e 3.000+ alumni. Che tu venga da HR, consulenza, management o psicologia, ti porta da professionista curioso a **coach pronto per il mercato**."
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
      body: "Non servono requisiti rigidi o una formazione precedente nel coaching. Il Master è adatto sia a chi arriva dall'università e si avvicina per la prima volta a questa disciplina, sia a chi lavora e vuole integrare il coaching nella propria professione.",
    },
    earlyBirdPromo: {
      ribbon: "SCONTO EARLY BIRD",
      line: "Early Bird: fino a 690€ di sconto sul Master in Coaching Professionale, già applicato al checkout | Iscriviti entro il 27/08/2026",
      deadline: "27/08/2026",
      ctaHref: "#prezzo",
      pillDeadlineLabel: "10% EARLY BIRD",
      discountAmount: "10%",
      // I codici reali sono per livello in woo.ts → APCM_EARLY_BIRD (L1/Completo: EBAPCM10, L2: EBAPCM10L2).
      // Si applicano da soli al checkout via snippet Woo, quindi il banner non mostra un codice unico.
      deadlineISO: "2026-08-27T23:59:59+02:00", // banner attivo fino alla EB più lunga (L1/Completo, 3ª ed.)
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
          title: "Marketing per Coach",
          desc: "Con Helga Ogliari (Personal Branding & Storytelling Designer): 6 incontri da 1,5h per costruire posizionamento, personal branding, storytelling e acquisizione clienti. Incluso nel 2° livello, a metà prezzo con il 1°.",
          tags: ["Personal branding", "Storytelling", "Acquisizione clienti", "6 incontri · 1,5h"],
        },
      ],
    },
    teachers: [
      {
        name: "Pier Paolo Colasanti",
        creds: "PCC",
        role: "CEO Asterys Lab, Executive e Team Coach ICF & Facilitator",
        bio: "Executive e Team Coach, facilitator e guida dei percorsi Asterys Lab per lo sviluppo di persone, team e organizzazioni.",
        img: "/course-media/apcm/trainer-pier-paolo-colasanti.jpg"
      },
      {
        name: "Alessandra Bitelli",
        creds: "MCC",
        role: "Trainer & Executive Coach",
        bio: "Trainer ed Executive Coach MCC, specializzata nell'accompagnare professionisti e leader in percorsi di crescita e trasformazione.",
        img: "/course-media/apcm/trainer-alessandra-bitelli.jpeg"
      },
      {
        name: "Nicoletta Stellino",
        creds: "PCC",
        role: "EQ Facilitator, Executive & Leadership Coaching, Career Coaching, Mentor Coach",
        bio: "Coach PCC, EQ Facilitator e Mentor Coach, con focus su leadership, carriera e sviluppo dell'intelligenza emotiva.",
        img: "/course-media/apcm/trainer-nicoletta-stellino.jpg"
      },
      {
        name: "Paola Rulfi",
        creds: "MCC",
        role: "Business and Executive Coach, Mentor Coach, Supervisor",
        bio: "Business ed Executive Coach MCC, Mentor Coach e Supervisor per coach e professionisti in sviluppo.",
        img: "/course-media/apcm/trainer-paola-rulfi.png"
      },
      {
        name: "Renata Cargnelutti Beltrami",
        creds: "PCC",
        role: "Executive Coach & Trainer",
        bio: "Executive Coach e Trainer PCC, accompagna leader e professionisti in percorsi di consapevolezza e cambiamento.",
        img: "/course-media/apcm/trainer-renata-cargnelutti-beltrami.png"
      }
    ],
    career: {
      title: "Career Support Asterys",
      content: "Il Career Center di Asterys Lab ti supporta nel costruire e far crescere la tua carriera come coach professionista: dall'avvio della pratica alla crescita continua come esperto riconosciuto a livello internazionale. Durante tutto il percorso hai anche un coach di riferimento dedicato.",
      points: [
        { title: "Marketing per Coach", desc: "6 incontri da 1,5h con Helga Ogliari (Personal Branding & Storytelling Designer): personal branding, storytelling e acquisizione clienti per far decollare la tua attività." },
        { title: "Alumni Community", desc: "Accedi alla rete di 3.000+ professionisti certificati ICF per collaborazioni, referral e opportunità di crescita condivise." },
        { title: "Formazione Continua", desc: "Masterclass, webinar e workshop esclusivi per approfondire le competenze e restare aggiornato sulle evoluzioni del coaching." },
        { title: "Supporto Carriera", desc: "Sessioni individuali e accompagnamento del coach assegnato per valorizzare il tuo profilo e orientarti nelle scelte professionali post-certificazione." }
      ]
    },
    pegasusProgram: {
      eyebrow: "Ecosistema Asterys",
      title: "Pegasus Coaching Program",
      intro:
        "Pegasus collega studenti e diplomati del Master in Coaching Professionale: chi frequenta il Master può ricevere coaching individuale, mentre i migliori graduati possono essere selezionati per fare pratica professionale supervisionata con gli studenti delle edizioni successive.",
      logo: "/brand/pegasus.png",
      note: "Il programma è attivo sulle edizioni e sui percorsi in cui è previsto da Asterys Lab.",
      points: [
        {
          title: "Coaching incluso per gli studenti",
          desc: "Gli studenti del Master in Coaching Professionale possono ricevere da 3 a 15 ore di coaching individuale, erogato da coach formati nelle edizioni precedenti del Master.",
          meta: "Da 3 a 15 ore"
        },
        {
          title: "Pratica reale per i diplomati",
          desc: "I graduati selezionati possono lavorare come coach Pegasus, fare pratica supervisionata e accumulare ore utili per la crescita professionale e il percorso ICF.",
          meta: "Coach selezionati"
        },
        {
          title: "Tutor e supervisione Asterys",
          desc: "Il programma prevede abbinamento coach/coachee, monitoraggio del percorso e momenti di supervisione con figure esperte della Faculty Asterys Lab.",
          meta: "Supervisione"
        }
      ]
    },
    classDates: [
      { date: "27 ottobre 2026", badge: "MILANO · ISCRIZIONI APERTE", note: "Termine candidature: 13 ottobre 2026" },
      { date: "3 novembre 2026", badge: "ROMA", note: "Termine candidature: 20 ottobre 2026" }
    ],
    sessionSchedule: [
      { days: "Calendario definito in base all'edizione scelta", time: "" }
    ],
    // Sezione pagamento sul modello sistemico: una scheda per livello, ognuna con
    // prezzo intero + simulazione rate 24 mesi. La scelta intero/rate avviene
    // al checkout; qui è solo simulazione. (Early Bird: gestito a parte.)
    fees: [
      {
        title: "Percorso Completo",
        type: "lump",
        wooKey: "completo",
        benefit: "Risparmi 1.000€",
        heading: "Percorso Completo · L1 + L2",
        desc: "Livello 1 e Livello 2 in un unico percorso: metodo ICF integrale, coach di riferimento e il miglior risparmio. Abilita alla credenziale ICF PCC.",
        price: "6.900€",
        priceLabel: "+ IVA",
        financing: {
          label: "Rateizzazione fino a 24 mesi senza interessi",
          amount: "288€/mese",
          note: "Simulazione su 24 mesi sul prezzo intero, IVA esclusa."
        },
        footnote: "Prezzo pieno 7.900€ — con il Percorso Completo risparmi 1.000€"
      },
      {
        title: "Solo Livello 1",
        type: "lump",
        wooKey: "l1",
        benefit: "Fondamenti coaching",
        heading: "Livello 1 · ICF Level 1 Ready",
        desc: "Parti dal 1° livello (60 ore accademiche): fondamenti del coaching ICF, abilita alla credenziale ACC. Potrai completare il 2° livello in una successiva edizione.",
        price: "3.400€",
        priceLabel: "+ IVA",
        financing: {
          label: "Rateizzazione fino a 24 mesi senza interessi",
          amount: "142€/mese",
          note: "Simulazione su 24 mesi sul prezzo intero, IVA esclusa."
        }
      },
      {
        title: "Solo Livello 2",
        type: "lump",
        wooKey: "l2",
        benefit: "Prerequisito: Livello 1",
        heading: "Livello 2 · ICF Level 2 Advanced",
        desc: "Il 2° livello (90 ore accademiche) per chi ha già completato il Livello 1: intelligenza emotiva avanzata, sistemi complessi, mentor coaching e supervisione. Abilita alla credenziale PCC.",
        price: "4.500€",
        priceLabel: "+ IVA",
        financing: {
          label: "Rateizzazione fino a 24 mesi senza interessi",
          amount: "188€/mese",
          note: "Simulazione su 24 mesi sul prezzo intero, IVA esclusa."
        }
      }
    ],
    faqs: apcmFaqs,
    placementStats: { rate: "98%", partners: "150+", opportunities: "500+" },
    testimonials: commonTestimonials,
    competenciesAndCareers: {
      eyebrow: "Competenze & Professione",
      title: "Cosa impari a fare e come puoi usarlo nel lavoro",
      intro:
        "Il Master ti dà metodo, pratica supervisionata e strumenti concreti per iniziare a lavorare nel coaching o integrare un approccio coaching nella tua professione. Le competenze che alleni sono spendibili con persone, team e organizzazioni, con standard ICF e attenzione alla pratica reale.",
      stats: [
        { value: "150 ore", label: "Tra lezioni, pratica e studio" },
        { value: "3.000+", label: "Alumni Asterys nel mondo" },
        { value: "ICF", label: "Standard e competenze internazionali" }
      ],
      competencies: [
        {
          title: "Condurre conversazioni di coaching strutturate",
          desc: "Impari a costruire accordo, obiettivi e direzione della sessione, mantenendo una relazione professionale e rispettando le competenze e il codice etico ICF."
        },
        {
          title: "Ascoltare in profondità e fare domande efficaci",
          desc: "Alleni presenza, ascolto attivo, domande potenti e feedback per aiutare la persona a generare consapevolezza, leggere alternative e scegliere azioni concrete."
        },
        {
          title: "Accompagnare obiettivi, scelte e cambiamenti",
          desc: "Impari a sostenere clienti in passaggi professionali, decisioni, sviluppo personale, cambi ruolo e piani d'azione, senza sostituirti alla persona."
        },
        {
          title: "Usare intelligenza emotiva e lettura sistemica",
          desc: "Integra strumenti di intelligenza emotiva e approccio sistemico per comprendere relazioni, contesti, stakeholder e dinamiche che influenzano la persona o il team."
        },
        {
          title: "Gestire pratica, feedback e report",
          desc: "Sviluppi abitudine alla pratica supervisionata, alla riflessione sul metodo, alla preparazione tra una lezione e l'altra e alla produzione di report professionali."
        },
        {
          title: "Costruire identità e posizionamento da coach",
          desc: "Lavori su confini professionali, stile personale, proposta di valore e primi passi per presentarti in modo credibile a clienti, aziende o contesti HR."
        }
      ],
      careerPaths: [
        {
          title: "Coach professionista indipendente",
          desc: "Puoi costruire una tua attività lavorando con clienti individuali su obiettivi personali, professionali, transizioni, scelte e sviluppo.",
          contexts: ["Clienti privati", "Percorsi individuali", "Online e presenza"]
        },
        {
          title: "Coach in percorsi aziendali",
          desc: "Puoi collaborare con aziende, academy, HR o società di consulenza in percorsi di sviluppo per manager, talenti e persone in cambiamento.",
          contexts: ["Aziende", "Academy", "Società di consulenza"]
        },
        {
          title: "Career coach e orientamento professionale",
          desc: "Puoi accompagnare persone in scelte di carriera, ingresso nel lavoro, riposizionamento, cambi ruolo o passaggi tra università e professione.",
          contexts: ["Giovani professionisti", "Career transition", "Orientamento"]
        },
        {
          title: "HR, People e Learning Development",
          desc: "Puoi usare le competenze di coaching in selezione, talent development, formazione, colloqui di sviluppo, engagement e crescita delle persone.",
          contexts: ["HR", "People management", "Learning & development"]
        },
        {
          title: "Formatore con approccio coaching",
          desc: "Puoi progettare workshop e percorsi esperienziali usando ascolto, domande, feedback, esercitazioni e facilitazione dell'apprendimento.",
          contexts: ["Workshop", "Formazione aziendale", "Percorsi educativi"]
        },
        {
          title: "Consulente o facilitatore per persone e team",
          desc: "Puoi integrare coaching, intelligenza emotiva e lettura sistemica in progetti con gruppi, team, organizzazioni o contesti educativi.",
          contexts: ["Team", "Organizzazioni", "Progetti di sviluppo"]
        }
      ]
    },
    editionsSection: {
      eyebrow: "Calendario edizioni",
      title: "Scegli sede, livello ed edizione",
      intro:
        "Seleziona la **città**, il **livello** e l'**edizione**: vedrai il calendario completo con tutti gli Incontri Online, i Live Lab, i Corsi intensivi e le scadenze di iscrizione. Il **Percorso Completo** racchiude 1° e 2° livello; per accedere al **2° livello** è necessario aver completato prima il **1° livello**."
    },
    whyChoose: {
      eyebrow: "Perché scegliere il Master in Coaching Professionale",
      title: "Un Master che unisce rigore, umanità e mercato",
      intro:
        "Il Master in Coaching Professionale è pensato per chi vuole diventare coach davvero: **metodo accreditato ICF**, **coach di riferimento dedicato**, **trainer con credenziali MCC & PCC**, **pratica supervisionata**, strumenti di mercato e una **community professionale** che resta accessibile anche dopo il Master.",
      bullets: [
        {
          title: "Accreditamento ICF Level 1 & 2",
          desc: "Programma riconosciuto ICF: al termine hai tutte le ore formative necessarie per le credenziali ACC e PCC, spendibili a livello internazionale."
        },
        {
          title: "Coach dedicato end-to-end",
          desc: "A ogni studente viene assegnato un coach di riferimento che lo accompagna prima dell'avvio, durante il Master e nella fase successiva al percorso."
        },
        {
          title: "Intelligenza Emotiva misurabile",
          desc: "Integri il modello KCG / Six Seconds e impari ad allenare l'IE con strumenti di assessment certificati, dati leggibili e pratiche applicabili in sessione."
        },
        {
          title: "Approccio sistemico",
          desc: "Alleni uno sguardo sulle relazioni, sui gruppi e sui contesti: una competenza chiave per lavorare con persone, team e organizzazioni complesse."
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
          title: "Marketing per Coach incluso",
          desc: "6 incontri con Helga Ogliari (Personal Branding & Storytelling Designer) su personal branding, storytelling e acquisizione clienti. Incluso nel 2° livello, a metà prezzo con il 1°."
        },
        {
          title: "Career Center e community",
          desc: "Accedi a supporto carriera, formazione continua e a una rete di 3.000+ alumni con cui confrontarti, collaborare e crescere nel tempo."
        }
      ]
    },
    levelsComparison: {
      eyebrow: "Struttura del percorso",
      title: "Scegli come affrontare il Master",
      intro:
        "Il Master in Coaching Professionale è organizzato su **due livelli** che puoi frequentare insieme (Percorso Completo) o separatamente. Il Percorso Completo è il più scelto: metodo ICF integrale e il miglior risparmio. Il **2° livello** è accessibile dopo aver completato il **1° livello**.",
      levels: [
        {
          label: "Livello 1",
          name: "ICF Level 1",
          price: "3.400€",
          priceLabel: "+ IVA",
          benefit: "Fondamenti del coaching",
          features: [
            "Richiesto CV",
            "Sedi: Roma e Milano",
            "Live Lab: 1",
            "Laboratorio Full Immersion: 1",
            "Live Class: 6",
            "Personal Coaching: 5 ore",
            "Mentor Coaching",
            "Esame Pratico con la scuola",
            "Ore di formazione: 63",
            "Abilita alla credenziale ICF ACC"
          ],
          feeTab: "Solo Livello 1"
        },
        {
          label: "Percorso Completo",
          name: "ICF Level 1 + Level 2",
          price: "6.900€",
          priceLabel: "+ IVA · invece di 7.900€",
          benefit: "Risparmi 1.000€",
          highlight: true,
          features: [
            "Richiesto CV",
            "Sedi: Roma e Milano",
            "Live Lab: 1",
            "Laboratori Full Immersion: 3",
            "Live Class: 11",
            "Personal Coaching: 14 ore",
            "Corso di Intelligenza Emotiva: 6 ore",
            "Corso Marketing per Coach incluso",
            "Mentor Coaching",
            "Esame Pratico con la scuola",
            "Ore di formazione: 133,5",
            "Abilita alle credenziali ICF ACC e PCC"
          ],
          feeTab: "Percorso Completo"
        },
        {
          label: "Livello 2",
          name: "ICF Level 2",
          price: "4.500€",
          priceLabel: "+ IVA",
          benefit: "Prerequisito: Livello 1",
          features: [
            "Accesso riservato a chi ha completato il Livello 1",
            "Richiesto CV",
            "Sedi: Roma e Milano",
            "Laboratori Full Immersion: 2",
            "Live Class: 5",
            "Personal Coaching: 9 ore",
            "Corso di Intelligenza Emotiva: 6 ore",
            "Corso Marketing per Coach incluso",
            "Mentor Coaching",
            "Esame Pratico con la scuola",
            "Ore di formazione: 70,5",
            "Abilita alla credenziale ICF PCC"
          ],
          feeTab: "Solo Livello 2"
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
      title: "Borsa di studio per te!",
      amount: "Fino a 1.500€",
      body: "Per supportare l'accesso al Master ai professionisti del Centro e Sud Italia, riserviamo una borsa di studio sulle prime iscrizioni delle edizioni di Roma. Un investimento concreto per espandere il valore del coaching.",
      eligibility: [
        "Residenti in una regione del Centro o Sud Italia",
        "Iscrizione a un'edizione del Master in Coaching a Roma",
        "Colloquio di ammissione positivo con un nostro Advisor"
      ],
      availability: "Solo 2 borse di studio rimaste",
      ctaLabel: "Richiedi la borsa di studio",
      ctaHref: "/borsa-di-studio"
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
        badge: "In corso",
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
        badge: "In corso",
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
    title: "Master in Team Coaching Sistemico",
    subtitle: "Team Coaching",
    tagline: "Il Master di Asterys Lab accreditato ICF per apprendere l'esclusivo modello di Team Coaching Sistemico dedicato a team e organizzazioni, e prepararti alla credenziale ICF di team coaching (ACTC).",
    type: "AVANZATO",
    media: {
      hero: "/course-media/systemic-team-coaching/hero-astc.png",
      overview: "/course-media/systemic-team-coaching/astc-modello-pitto.png",
      brochureDecor: "/course-media/systemic-team-coaching/asterys-systemic-team-coaching-lab.png",
      completePractical: "/course-media/apcm/supervision-mentor.png",
      completePlatform: "/course-media/apcm/platform-ui.png",
      howItWorks: "/course-media/apcm/how-master.jpg",
    },
    howItWorks: {
      title: "Come si struttura il percorso",
      intro:
        "Il Master si articola in **due livelli**: un primo livello in videoconferenza con Live Class e homework su progetti reali, e un secondo livello in aula di tre giornate con e-learning specifico, ToolBox e pratica applicata.",
      formazioneTitle: "Struttura e trainer",
      formazioneBadge: "54 ore live · 60 CCE ICF",
      formazioneIntro:
        "Team Coaching Sistemico 1° livello prevede due giornate in videoconferenza e Live Class da due ore. Team Coaching Sistemico 2° livello prevede tre giorni in aula, modulo e-learning specifico e ToolBox. L'Esame Expert è opzionale e consente di ottenere il diploma AATC ICF.",
    },
    scheduleColumns: [
      {
        icon: "monitor",
        title: "Team Coaching Sistemico 1° livello",
        body: "Corso di due giornate in videoconferenza, Live Class da due ore e homework su progetti di team coaching supportati dalla piattaforma Inner.",
      },
      {
        icon: "users",
        title: "Team Coaching Sistemico 2° livello",
        body: "Tre giorni in aula a Milano o Roma, con modulo e-learning specifico e ToolBox per lavorare sui team in modo sistemico.",
      },
      {
        icon: "calendar",
        title: "Esame Expert",
        lines: ["Opzionale e a pagamento", "Valutazione lavori + verifica scritta", "Incontro individuale di chiusura"],
      },
    ],
    studyModeBox: {
      title: "Piattaforma Inner e",
      highlight: "ToolBox",
      body: "Tra una sessione e l'altra lavori su progetti reali di team coaching, con homework e materiali dedicati. Il percorso integra social learning, e-learning specifico e strumenti operativi per accompagnare team e organizzazioni.",
      linkText: "Vedi il calendario dell'edizione",
      linkHref: "#calendario-edizioni",
    },
    orientationBanner: {
      title: "Prerequisito per la credenziale ICF ACTC",
      body: "Dopo aver superato l'esame ottieni il diploma AATC ICF, utile come prerequisito per accedere alla credenziale Advanced Certification in Team Coaching (ACTC).",
    },
    programIntro:
      "Il percorso di Team Coaching Sistemico unisce modello sistemico, pratica sui pattern di team e strumenti operativi. Si lavora con Live Class, giornate intensive, homework su progetti reali, piattaforma Inner, e-learning e ToolBox.",
    admissionBox: {
      title: "Requisiti per partecipare",
      body: "Per l'accesso al corso è richiesto l'invio del CV. Il workshop non tratta i fondamentali di management, coaching o facilitazione: è quindi importante avere una conoscenza di base di queste discipline.",
    },
    earlyBirdPromo: {
      ribbon: "EARLY BIRD",
      line: "Early Bird 2026/27: fino a 174€ di sconto già applicato al checkout · 1° livello entro il 19/08/2026, 2° livello entro il 21/11/2026.",
      deadline: "21/11/2026",
      ctaHref: "#prezzo",
      pillDeadlineLabel: "EARLY BIRD −6%",
      discountAmount: "6%",
      // Sconto programmato sui prodotti Woo (no coupon). Disclaimer per livello in woo.ts → EARLY_BIRD.
      deadlineISO: "2026-11-21T23:59:59+01:00", // banner attivo fino alla EB più lunga (2° livello)
    },
    heroBenefits: [
      "Apprendi l'esclusivo modello sistemico di coaching per i team",
      "Prerequisito per la credenziale ICF ACTC (Advanced Certification in Team Coaching)",
      "54 ore di formazione live · attestato AATC equivalente a 60 CCE ICF",
      "Edizioni in videoconferenza e in aula a Milano e Roma"
    ],
    summaryBox: {
      nextEdition: "Videoconferenza + Milano / Roma",
      dates: "Ottobre 2026 – Febbraio 2027",
      format: "Ibrido (Live Online + In aula)",
      duration: "54 ore sincrone · 60 CCE",
      price: "Da 1.200€ + IVA",
      installments: "Rateizzazione disponibile"
    },
    badges: ["ICF Accreditato", "Diploma AATC", "Verso ACTC"],
    overview: {
      title: "Dal singolo al sistema: il modello sistemico",
      content: [
        "Pier Paolo Colasanti e Stefano Petti hanno lavorato come **team coach** e consulenti nelle realtà organizzative più complesse, collaborando con eccellenze internazionali nel campo del Team Coaching.",
        "Grazie allo studio dei più importanti modelli organizzativi e di team coaching a livello internazionale, e alla loro esperienza con tanti clienti e nelle situazioni più sfidanti, hanno sviluppato il modello innovativo di **Team Coaching Sistemico**.",
        "Il modello si occupa delle persone che compongono il team, ma soprattutto dei **pattern** e delle **interazioni** tra di loro: cambiando il sistema, migliorano le dinamiche e **cambiano i risultati**."
      ]
    },
    target: [
      { title: "Coach e facilitatori", desc: "Professionisti con competenze di coaching e/o facilitazione che vogliono migliorare la propria capacità di lavorare a livello sistemico e con i team.", icon: <TrendingUp /> },
      { title: "Manager & Consulenti", desc: "Persone che supportano team e organizzazioni e desiderano liberarne il pieno potenziale con un approccio sistemico al lavoro di gruppo.", icon: <Users /> },
      { title: "Coach esperti verso ACTC", desc: "Coach che vogliono ottenere il diploma AATC per poi impegnarsi nell'ottenimento della credenziale ICF ACTC.", icon: <Award /> }
    ],
    learning: {
      cols: [
        { title: "Modello sistemico", items: ["Coaching sistemico dei team", "Pattern e dinamiche di gruppo", "Il team come organismo vivente", "Paradigma del team di successo"] },
        { title: "Metodo & Strumenti", items: ["ToolBox", "Piattaforma Inner di social learning", "Homework su progetti reali", "Percorso immersivo e team-centrico"] },
        { title: "Alta performance", items: ["Ri-pensare le high performing team", "Sostituire convinzioni limitanti", "Facilitare il cambiamento sistemico", "Soddisfazione e risultati straordinari"] }
      ],
      softSkills: ["Visione d'insieme", "Neutralità sistemica", "Presenza nei team", "Gestione della complessità"]
    },
    structure: {
      modules: [
        {
          title: "Team Coaching Sistemico 1° livello",
          desc: "Corso di due giornate in videoconferenza più alcune Live Class da due ore in videoconferenza. Homework su progetti di team coaching supportati dalla nostra piattaforma di social learning Inner.",
          tags: ["Live Online", "Live Class 2h", "Piattaforma Inner", "Homework"]
        },
        {
          title: "Team Coaching Sistemico 2° livello",
          desc: "Corso della durata di 3 giorni in aula (Milano o Roma), modulo di e-learning specifico e ToolBox per applicare il modello nei contesti reali.",
          tags: ["In aula · Milano/Roma", "E-learning", "ToolBox"]
        },
        {
          title: "Esame Expert",
          desc: "Opzionale e a pagamento, per chi vuole certificarsi come Expert: valutazione di quanto prodotto nei tre giorni del 2° livello, verifica scritta e incontro individuale di chiusura.",
          tags: ["Opzionale", "Certificazione Expert", "Colloquio finale"]
        }
      ]
    },
    teachers: [
      {
        name: "Pier Paolo Colasanti",
        creds: "PCC",
        role: "CEO Asterys Lab, Executive e Team Coach ICF & Facilitator",
        bio: "Executive e Team Coach, facilitator e guida dei percorsi Asterys Lab per lo sviluppo di persone, team e organizzazioni.",
        img: "/course-media/apcm/trainer-pier-paolo-colasanti.jpg"
      }
    ],
    career: {
      title: "Dopo il Master in Team Coaching Sistemico",
      content: "Al termine del percorso potrai operare come team coach sistemico e, superando l'esame Expert, accedere al diploma AATC — prerequisito ICF per ottenere la credenziale Advanced Certification in Team Coaching (ACTC).",
      points: [
        { title: "Diploma AATC ICF", desc: "Rilasciato dopo il superamento dell'esame Expert. Utile come prerequisito per la credenziale ICF ACTC." },
        { title: "Attestato di partecipazione", desc: "Per chi non sostiene o non supera l'esame: 54 ore di formazione sincrona certificate." },
        { title: "60 CCE ICF", desc: "L'attestato AATC equivale a 60 CCE, utili per il rinnovo della tua credenziale di Coach ICF." },
        { title: "Metodologia sistemica", desc: "Imparerai a condurre percorsi di team coaching immersivi e team-centrici grazie alle procedure e alla metodologia sistemica." }
      ]
    },
    classDates: [
      { date: "6 ottobre 2026", badge: "TEAM COACHING SISTEMICO 1° LIVELLO · Live Online" },
      { date: "20 gennaio 2027", badge: "TEAM COACHING SISTEMICO 2° LIVELLO · 1a Live Class" }
    ],
    sessionSchedule: [
      { days: "Team Coaching Sistemico 1° livello · Live Class", time: "6 ottobre, 29 ottobre e 10 novembre 2026" },
      { days: "Team Coaching Sistemico 1° livello · Corso a distanza", time: "16, 17 ottobre 2026" },
      { days: "Team Coaching Sistemico 2° livello · Live Class", time: "20 gennaio e 15 febbraio 2027" },
      { days: "Team Coaching Sistemico 2° livello · Corso in aula", time: "Milano 4, 5, 6 febbraio · Roma 25, 26, 27 febbraio 2027" }
    ],
    editionsSection: {
      eyebrow: "Calendario edizioni",
      title: "Scegli città, livello ed edizione",
      intro:
        "Seleziona la **città** per il 2° livello, il **livello di Team Coaching Sistemico** e l'**edizione** per vedere scadenze, formato e date principali del percorso.",
    },
    editions: [
      {
        city: "Milano",
        citySlug: "milano",
        level: "Team Coaching Sistemico 1°+2° livello",
        levelSlug: "l1-l2",
        editionLabel: "2026/27 · Milano",
        editionSlug: "astc-completo-milano-2026-27",
        subtitle: "Ottobre 2026 – Febbraio 2027",
        badge: "Early Bird attivo",
        earlyBird: { label: "Early Bird 1° livello", date: "19 agosto 2026" },
        enrollmentEnd: { label: "Fine iscrizioni 1° livello", date: "19 settembre 2026" },
        ctaLabel: "Iscriviti al percorso completo",
        events: [
          { label: "Early Bird 1° livello", date: "19 agosto 2026", type: "deadline-early" },
          { label: "Fine iscrizioni 1° livello", date: "19 settembre 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "6 ottobre 2026", type: "live-class", note: "Team Coaching Sistemico 1° livello · Online" },
          { label: "Corso a distanza", date: "16, 17 ottobre 2026", type: "corso", note: "Team Coaching Sistemico 1° livello" },
          { label: "Live Class 2", date: "29 ottobre 2026", type: "live-class", note: "Team Coaching Sistemico 1° livello · Online" },
          { label: "Live Class 3", date: "10 novembre 2026", type: "live-class", note: "Team Coaching Sistemico 1° livello · Online" },
          { label: "Early Bird 2° livello", date: "21 novembre 2026", type: "deadline-early" },
          { label: "Fine iscrizioni 2° livello", date: "20 dicembre 2026", type: "deadline-final" },
          { label: "1a Live Class", date: "20 gennaio 2027", type: "live-class", note: "Team Coaching Sistemico 2° livello · Online" },
          { label: "Corso in aula Milano", date: "4, 5, 6 febbraio 2027", type: "corso", note: "Team Coaching Sistemico 2° livello" },
          { label: "2a Live Class", date: "15 febbraio 2027", type: "live-class", note: "Team Coaching Sistemico 2° livello · Online" },
          { label: "Esame Expert", date: "Opzionale", type: "milestone" },
        ],
      },
      {
        city: "Milano",
        citySlug: "milano",
        level: "Team Coaching Sistemico 1° livello",
        levelSlug: "l1",
        editionLabel: "Team Coaching Sistemico 1° livello 261",
        editionSlug: "astc-l1-261-2026",
        subtitle: "Ottobre – Novembre 2026",
        badge: "Live Online",
        earlyBird: { label: "Early Bird", date: "19 agosto 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "19 settembre 2026" },
        ctaLabel: "Iscriviti al 1° livello",
        events: [
          { label: "Early Bird", date: "19 agosto 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "19 settembre 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "6 ottobre 2026", type: "live-class", note: "Online" },
          { label: "Corso a distanza", date: "16, 17 ottobre 2026", type: "corso", note: "Videoconferenza" },
          { label: "Live Class 2", date: "29 ottobre 2026", type: "live-class", note: "Online" },
          { label: "Live Class 3", date: "10 novembre 2026", type: "live-class", note: "Online" },
        ],
      },
      {
        city: "Milano",
        citySlug: "milano",
        level: "Team Coaching Sistemico 2° livello",
        levelSlug: "l2",
        editionLabel: "Team Coaching Sistemico 2° livello · Milano",
        editionSlug: "astc-l2-milano-2027",
        subtitle: "Gennaio – Febbraio 2027",
        badge: "In aula",
        earlyBird: { label: "Early Bird", date: "21 novembre 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "20 dicembre 2026" },
        ctaLabel: "Iscriviti al 2° livello",
        events: [
          { label: "Early Bird", date: "21 novembre 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "20 dicembre 2026", type: "deadline-final" },
          { label: "1a Live Class", date: "20 gennaio 2027", type: "live-class", note: "Online" },
          { label: "Corso in aula Milano", date: "4, 5, 6 febbraio 2027", type: "corso", note: "Milano" },
          { label: "2a Live Class", date: "15 febbraio 2027", type: "live-class", note: "Online" },
          { label: "Esame Expert", date: "Opzionale", type: "milestone" },
        ],
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "Team Coaching Sistemico 1°+2° livello",
        levelSlug: "l1-l2",
        editionLabel: "2026/27 · Roma",
        editionSlug: "astc-completo-roma-2026-27",
        subtitle: "Ottobre 2026 – Febbraio 2027",
        badge: "Early Bird attivo",
        earlyBird: { label: "Early Bird 1° livello", date: "19 agosto 2026" },
        enrollmentEnd: { label: "Fine iscrizioni 1° livello", date: "19 settembre 2026" },
        ctaLabel: "Iscriviti al percorso completo",
        events: [
          { label: "Early Bird 1° livello", date: "19 agosto 2026", type: "deadline-early" },
          { label: "Fine iscrizioni 1° livello", date: "19 settembre 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "6 ottobre 2026", type: "live-class", note: "Team Coaching Sistemico 1° livello · Online" },
          { label: "Corso a distanza", date: "16, 17 ottobre 2026", type: "corso", note: "Team Coaching Sistemico 1° livello" },
          { label: "Live Class 2", date: "29 ottobre 2026", type: "live-class", note: "Team Coaching Sistemico 1° livello · Online" },
          { label: "Live Class 3", date: "10 novembre 2026", type: "live-class", note: "Team Coaching Sistemico 1° livello · Online" },
          { label: "Early Bird 2° livello", date: "21 novembre 2026", type: "deadline-early" },
          { label: "Fine iscrizioni 2° livello", date: "20 dicembre 2026", type: "deadline-final" },
          { label: "1a Live Class", date: "20 gennaio 2027", type: "live-class", note: "Team Coaching Sistemico 2° livello · Online" },
          { label: "2a Live Class", date: "15 febbraio 2027", type: "live-class", note: "Team Coaching Sistemico 2° livello · Online" },
          { label: "Corso in aula Roma", date: "25, 26, 27 febbraio 2027", type: "corso", note: "Team Coaching Sistemico 2° livello" },
          { label: "Esame Expert", date: "Opzionale", type: "milestone" },
        ],
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "Team Coaching Sistemico 1° livello",
        levelSlug: "l1",
        editionLabel: "Team Coaching Sistemico 1° livello 261",
        editionSlug: "astc-l1-261-2026-roma",
        subtitle: "Ottobre – Novembre 2026",
        badge: "Live Online",
        earlyBird: { label: "Early Bird", date: "19 agosto 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "19 settembre 2026" },
        ctaLabel: "Iscriviti al 1° livello",
        events: [
          { label: "Early Bird", date: "19 agosto 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "19 settembre 2026", type: "deadline-final" },
          { label: "Live Class 1", date: "6 ottobre 2026", type: "live-class", note: "Online" },
          { label: "Corso a distanza", date: "16, 17 ottobre 2026", type: "corso", note: "Videoconferenza" },
          { label: "Live Class 2", date: "29 ottobre 2026", type: "live-class", note: "Online" },
          { label: "Live Class 3", date: "10 novembre 2026", type: "live-class", note: "Online" },
        ],
      },
      {
        city: "Roma",
        citySlug: "roma",
        level: "Team Coaching Sistemico 2° livello",
        levelSlug: "l2",
        editionLabel: "Team Coaching Sistemico 2° livello · Roma",
        editionSlug: "astc-l2-roma-2027",
        subtitle: "Gennaio – Febbraio 2027",
        badge: "In aula",
        earlyBird: { label: "Early Bird", date: "21 novembre 2026" },
        enrollmentEnd: { label: "Fine iscrizioni", date: "20 dicembre 2026" },
        ctaLabel: "Iscriviti al 2° livello",
        events: [
          { label: "Early Bird", date: "21 novembre 2026", type: "deadline-early" },
          { label: "Fine iscrizioni", date: "20 dicembre 2026", type: "deadline-final" },
          { label: "1a Live Class", date: "20 gennaio 2027", type: "live-class", note: "Online" },
          { label: "2a Live Class", date: "15 febbraio 2027", type: "live-class", note: "Online" },
          { label: "Corso in aula Roma", date: "25, 26, 27 febbraio 2027", type: "corso", note: "Roma" },
          { label: "Esame Expert", date: "Opzionale", type: "milestone" },
        ],
      },
    ],
    fees: [
      {
        title: "Team Coaching Sistemico 1° livello",
        tabLabel: "Livello 1",
        type: "lump",
        wooKey: "l1",
        benefit: "Live online",
        heading: "Team Coaching Sistemico 1° livello",
        desc: "Primo livello di Team Coaching Sistemico in videoconferenza, con Live Class e corso a distanza.",
        price: "1.200€",
        priceLabel: "+ IVA",
        financing: {
          label: "Rateizzazione fino a 24 mesi senza interessi",
          amount: "50€/mese",
          note: "Simulazione su 24 mesi sul prezzo intero, IVA esclusa."
        }
      },
      {
        title: "Team Coaching Sistemico 1°+2° livello",
        tabLabel: "Percorso completo",
        type: "lump",
        wooKey: "completo",
        benefit: "Percorso completo",
        heading: "Team Coaching Sistemico 1°+2° livello",
        desc: "Percorso completo con Team Coaching Sistemico 1° livello a distanza e Team Coaching Sistemico 2° livello in aula a Milano o Roma.",
        price: "2.900€",
        priceLabel: "+ IVA",
        financing: {
          label: "Rateizzazione fino a 24 mesi senza interessi",
          amount: "121€/mese",
          note: "Simulazione su 24 mesi sul prezzo intero, IVA esclusa."
        }
      },
      {
        title: "Team Coaching Sistemico 2° livello",
        tabLabel: "Livello 2",
        type: "lump",
        wooKey: "l2",
        benefit: "In aula",
        heading: "Team Coaching Sistemico 2° livello",
        desc: "Secondo livello di Team Coaching Sistemico con Live Class online e corso in aula a Milano o Roma.",
        price: "2.100€",
        priceLabel: "+ IVA",
        financing: {
          label: "Rateizzazione fino a 24 mesi senza interessi",
          amount: "88€/mese",
          note: "Simulazione su 24 mesi sul prezzo intero, IVA esclusa."
        }
      }
    ],
    faqs: [
      {
        q: "Cos'è il team coaching sistemico?",
        a: "Il team coaching sistemico è un percorso di coaching rivolto ai team: non lavora solo sulle singole persone, ma sui pattern, le relazioni e le dinamiche dell'intero sistema-team. Aiuta il gruppo a prendere consapevolezza dei propri schemi e ad adottare modalità di collaborazione più efficaci, migliorando performance e risultati."
      },
      {
        q: "A chi serve il Master in Team Coaching Sistemico?",
        a: "A coach, manager, HR e consulenti che vogliono lavorare con team e organizzazioni con un metodo strutturato e accreditato. È pensato sia per chi fa già coaching individuale e vuole estenderlo ai gruppi, sia per chi guida o accompagna team in azienda."
      },
      {
        q: "Cosa serve per la credenziale ICF di team coaching (ACTC)?",
        a: "Il percorso è accreditato ICF ed è prerequisito per la credenziale ACTC (Advanced Certification in Team Coaching). Completando il 1° e il 2° livello — e, in opzione, l'esame finale di certificazione — maturi i requisiti formativi per accedere all'ACTC."
      },
      {
        q: "Quanto costa il Master in Team Coaching Sistemico?",
        a: "Il Livello 1 parte da 1.200€ + IVA, il Livello 2 da 2.100€ + IVA e il percorso completo (1° + 2° livello) è 2.900€ + IVA. L'esame di certificazione è un'opzione aggiuntiva. Sono previste condizioni Early Bird per chi si iscrive in anticipo."
      },
      {
        q: "Le lezioni sono online o in presenza?",
        a: "Il 1° livello si svolge a distanza, in videoconferenza con Live Class; il 2° livello è in aula a Milano o a Roma. Unisci così la flessibilità dell'online alla profondità della pratica in presenza."
      },
      {
        q: "Si può pagare a rate?",
        a: "Sì. È prevista la rateizzazione fino a 24 mesi senza interessi, per distribuire l'investimento nel tempo. Trovi i dettagli nella sezione Prezzi."
      }
    ]
  },
  'eiw': {
    title: "Intelligenza Emotiva",
    subtitle: "Intelligenza Emotiva",
    tagline: "Il corso di intelligenza emotiva di Asterys Lab: non serve più dire che è importante, ormai si sa che è sviluppabile. Qui la alleni con esperienze pratiche — si fa, non si ascolta soltanto — maturando crediti CCE ICF.",
    type: "WORKOUT EQ",
    media: {
      hero: "/course-media/eiw/hero.png",
      overview: "/course-media/eiw/plutchik.png",
      howItWorks: "/course-media/apcm/how-master.jpg"
    },
    heroBenefits: [
      "L'IE si sviluppa facendo esperienze consapevoli e mirate, non studiando concetti",
      "Round di 4 Workout da 60 min live · 4 emozioni dal fiore di Plutchik",
      "Modello CSI Asterys: Consapevolezza · Strategia · Interazione",
      "4 CCE ICF per ogni Round · posti limitati"
    ],
    summaryBox: {
      nextEdition: "Da settembre 2026",
      dates: "5–6 Round all'anno",
      format: "Live Online · video conferenza",
      duration: "4 Workout da 60 min per Round",
      price: "100€ + IVA per Round",
      installments: "4 CCE ICF per Round"
    },
    badges: ["Modello CSI Asterys", "Fiore di Plutchik", "4 CCE ICF per Round"],
    overview: {
      title: "L'IE si sviluppa facendo, non solo sapendo",
      content: [
        "Che l'**intelligenza emotiva** sia importante ormai lo sanno tutti. La vera domanda è un'altra: come si sviluppa davvero? Qui le risposte si fanno vaghe, e spesso poco praticabili.",
        "Dopo anni sul campo e collaborazioni internazionali, Asterys Lab ha costruito un percorso che non spiega soltanto l'intelligenza emotiva: te la fa **allenare**. Negli altri corsi se ne parla come di una materia da \"sapere\"; qui si \"diventa\", con **esperienze pratiche** progettate apposta. C'è da mettersi in gioco.",
        "Se vuoi spostarti sul serio da dove sei oggi, questo è il percorso giusto: spazio, strumenti e coach che ti accompagnano sulla competenza che, più di ogni altra, **fa la differenza**."
      ]
    },
    target: [
      { title: "Manager & Leader", desc: "Per una leadership più lucida, empatica ed efficace nei momenti che contano.", icon: <Users /> },
      { title: "Coach, counsellor, psicologi", desc: "E chiunque per professione abbia nella relazione lo strumento principale di lavoro.", icon: <Brain /> },
      { title: "Chi vuole crescere", desc: "Ogni persona che vuole sviluppare davvero la propria intelligenza emotiva.", icon: <MessageCircle /> }
    ],
    learning: {
      cols: [
        { title: "Consapevolezza", items: ["Riconosco e distinguo le emozioni", "So dare loro un nome", "Ne riconosco l'intensità"] },
        { title: "Strategia", items: ["Prevedo l'evento che attiva l'emozione", "Conosco trigger e percorsi interiori", "Agisco in modo strategico"] },
        { title: "Interazione", items: ["Le emozioni nel mondo e nelle relazioni", "Scelte, obiettivi e relazioni", "Percepisco cosa provano gli altri"] }
      ],
      softSkills: ["Autoconsapevolezza", "Empatia", "Regolazione emotiva", "Presenza relazionale"]
    },
    programIntro: "Sviluppa i tuoi \"muscoli\" emozionali. Ogni singola attività del percorso è studiata per offrirti l'opportunità di sviluppare la tua intelligenza emotiva: un percorso di sperimentazione e allenamento, costruito sul modello CSI di Asterys Lab che guida le attività e aiuta a porci le domande giuste su ogni emozione.",
    structure: {
      modules: [
        {
          title: "Round di Workout",
          desc: "Ogni Round tratta 4 dei petali del fiore di Plutchik e le 4 rispettive emozioni. Non c'è una sequenza obbligata: puoi iniziare dal primo Round disponibile oppure scegliere quello con il set di emozioni più interessante per te. A distanza di tempo puoi anche ripetere un Round sullo stesso set di emozioni: è un'esperienza sempre nuova e stimolante.",
          tags: ["4 petali per Round", "Nessuna sequenza obbligata", "Round ripetibile"]
        },
        {
          title: "Struttura del Round",
          desc: "Ogni Round è composto da 4 Workout (sessioni di allenamento) da 60 minuti, in video conferenza. Con più di 6 partecipanti il tempo di ogni Workout può aumentare fino a 90 minuti. Nell'arco di un anno solare sono programmati 5 o 6 Round, ciascuno su un set di 4 emozioni diverse, pubblicati con largo anticipo per poterli prenotare e mettere in agenda.",
          tags: ["4 Workout da 60 min", "Fino a 90 min oltre i 6 partecipanti", "5–6 Round all'anno"]
        },
        {
          title: "Modello CSI Asterys",
          desc: "Tutto il percorso è costruito sul modello di sviluppo dell'IE \"CSI\" di Asterys Lab. Consapevolezza: riconosco e distinguo le mie emozioni, so dargli un nome e riconoscerne l'intensità. Strategia: prevedo quale evento mi farà provare un'emozione invece di un'altra, conosco i miei trigger e percorsi interiori, agisco in modo strategico considerando le mie emozioni e quelle degli altri. Interazione: cosa faccio nel mondo con le mie emozioni e quelle degli altri, che ruolo hanno nelle mie scelte, obiettivi e relazioni; nelle relazioni riesco a percepire cosa provano gli altri? Mi interessa?",
          tags: ["Consapevolezza", "Strategia", "Interazione"]
        },
        {
          title: "Coach al tuo fianco",
          desc: "Alla conduzione di ogni Round si alternano i nostri coach più esperti di intelligenza emotiva — Renata Cargnelutti Beltrami, Nicoletta Stellino e Pier Paolo Colasanti — nella facilitazione dei diversi momenti dell'intero percorso. Saranno la tua fonte di ispirazione e sviluppo e ti accompagneranno anche nei momenti più difficili. I posti sono limitati.",
          tags: ["Coach esperti EQ", "Facilitazione a rotazione", "Posti limitati"]
        }
      ]
    },
    howItWorks: {
      title: "Come funziona ogni Round",
      intro: "Ogni Round è composto da **4 Workout** (sessioni di allenamento) da 60 minuti, in video conferenza. Con più di 6 partecipanti ogni Workout può arrivare fino a **90 minuti**. Nell'arco di un anno solare sono programmati **5 o 6 Round**, ciascuno su un set di 4 emozioni diverse.",
      formazioneTitle: "Calendario",
      formazioneIntro: "I Round sono programmati con largo anticipo, così puoi prenotarli e metterli in agenda. Alla conduzione si alternano i coach più esperti di intelligenza emotiva. Ecco i prossimi Round in calendario."
    },
    scheduleBands: [
      {
        title: "Round · Settembre–Ottobre 2026",
        body: "Emozioni di questo Round: Interesse (Arancio), Distrazione (Azzurro), Serenità (Giallo), Pensierosità (Blu). 4 Workout live in video conferenza.",
        dayLines: ["Mer 9 set – Interesse", "Mar 22 set – Distrazione", "Mer 7 ott – Serenità", "Gio 22 ott – Pensierosità"],
        timeLines: ["18:30 - 19:30"]
      },
      {
        title: "Round · Novembre–Dicembre 2026",
        body: "Emozioni di questo Round: Estasi (Giallo), Angoscia (Blu), Vigilanza (Arancio), Stupore (Azzurro). 4 Workout live in video conferenza.",
        dayLines: ["Mer 11 nov – Estasi", "Lun 23 nov – Angoscia", "Gio 3 dic – Vigilanza", "Gio 17 dic – Stupore"],
        timeLines: ["18:30 - 19:30"]
      }
    ],
    studyModeBox: {
      title: "Lavoro vero, ",
      highlight: "non teoria",
      body: "Ci sarà da sudare: non basta pensare, ragionare o imparare concetti. L'intelligenza emotiva si sviluppa facendo esperienze in modo consapevole e mirato — con lo spazio, gli strumenti e i coach che ti accompagnano senza farti perdere nei meandri delle tue distrazioni.",
      linkText: "Vai al programma",
      linkHref: "#programma"
    },
    admissionBox: {
      title: "Per chi è il percorso di Intelligenza Emotiva",
      body: "Adatto a chiunque voglia sviluppare davvero la propria intelligenza emotiva. Particolarmente utile per manager e leader e per coach, counsellor, psicologi e chi nella relazione ha lo strumento principale di lavoro. Nessun processo di ammissione: scegli un Round e iscriviti, i posti sono limitati."
    },
    teachers: [
      {
        name: "Renata Cargnelutti Beltrami",
        creds: "Coach EQ",
        role: "Trainer",
        bio: "Coach e facilitatrice specializzata nel campo dell'Intelligenza Emotiva. Si alterna nella facilitazione dei diversi momenti dell'intero percorso.",
        img: "/course-media/apcm/trainer-renata-cargnelutti-beltrami.png"
      },
      {
        name: "Nicoletta Stellino",
        creds: "Coach EQ",
        role: "Trainer",
        bio: "Coach e facilitatrice specializzata nel campo dell'Intelligenza Emotiva. Si alterna nella facilitazione dei diversi momenti dell'intero percorso.",
        img: "/course-media/apcm/trainer-nicoletta-stellino.jpg"
      },
      {
        name: "Pier Paolo Colasanti",
        creds: "Coach EQ",
        role: "Trainer",
        bio: "Coach e facilitatore specializzato nel campo dell'Intelligenza Emotiva. Si alterna nella facilitazione dei diversi momenti dell'intero percorso.",
        img: "/course-media/apcm/trainer-pier-paolo-colasanti.jpg"
      }
    ],
    career: {
      title: "Cosa ti porti a casa da ogni Round",
      content: "Un allenamento concreto della tua intelligenza emotiva, 4 CCE ICF riconosciute e strumenti da applicare subito nelle relazioni di ogni giorno.",
      points: [
        { title: "4 CCE ICF per Round", desc: "Ogni Round vale 4 CCE ICF, utili per il rinnovo della tua credenziale ICF di coach." },
        { title: "Esperienza, non concetti", desc: "Attività progettate per sviluppare coscienza emotiva attraverso la pratica consapevole." },
        { title: "Modello CSI", desc: "Consapevolezza, Strategia, Interazione: le domande giuste su ogni emozione." },
        { title: "Coach al tuo fianco", desc: "I coach più esperti di IE ti guidano anche nei momenti più difficili, senza farti perdere per strada." }
      ]
    },
    competenciesAndCareers: {
      eyebrow: "Competenze",
      title: "Le competenze che alleni",
      intro: "Ogni Round allena competenze emotive concrete, secondo il modello **CSI** di Asterys Lab: Consapevolezza, Strategia, Interazione.",
      competencies: [
        { title: "Riconoscere e nominare le emozioni", desc: "Distingui le tue emozioni, dai loro un nome e ne riconosci l'intensità." },
        { title: "Anticipare trigger e percorsi interiori", desc: "Prevedi quale evento ti farà provare un'emozione e conosci i tuoi percorsi interiori." },
        { title: "Agire in modo strategico", desc: "Consideri le tue emozioni, quelle degli altri e il loro sviluppo nel tempo." },
        { title: "Empatia e percezione dell'altro", desc: "Nelle relazioni percepisci cosa provano gli altri e te ne prendi cura." },
        { title: "Regolazione emotiva", desc: "Stai con le emozioni in modo intelligente, anche nei momenti più difficili." },
        { title: "Presenza relazionale", desc: "Porti consapevolezza emotiva nelle scelte, negli obiettivi e nelle relazioni." }
      ],
      careerPaths: []
    },
    classDates: [
      { date: "Settembre 2026", badge: "ISCRIZIONI APERTE", note: "Interesse · Distrazione · Serenità · Pensierosità" },
      { date: "Novembre 2026", badge: "PROSSIMO ROUND", note: "Estasi · Angoscia · Vigilanza · Stupore" }
    ],
    sessionSchedule: [
      { days: "4 Workout da 60 min · Live Online", time: "Calendario per Round" }
    ],
    fees: [
      {
        title: "Round di Intelligenza Emotiva",
        type: "lump" as const,
        wooKey: "round",
        benefit: "4 CCE ICF",
        heading: "Quota per Round",
        desc: "Iscrizione a un Round di Workout: 4 emozioni lavorate in 4 Workout da 60 min guidati dai coach e 4 CCE ICF riconosciute. Su richiesta è previsto il frazionamento in più rate.",
        price: "100€",
        priceLabel: "+ IVA per Round",
        footnote: "Posti limitati · Rateizzazione disponibile su richiesta"
      }
    ],
    faqs: [
      {
        q: "Cos'è l'intelligenza emotiva nel coaching?",
        a: "L'intelligenza emotiva è la capacità di riconoscere, comprendere e gestire le proprie emozioni e quelle degli altri. Nel coaching è una competenza centrale: allena presenza, ascolto e consapevolezza e migliora la qualità della relazione con chi accompagni."
      },
      {
        q: "Come funziona un Round di Intelligenza Emotiva?",
        a: "Un Round è composto da 4 Workout da 60 minuti in diretta online, ciascuno dedicato a un'emozione del fiore di Plutchik, con il modello CSI di Asterys. Si lavora in modo esperienziale e pratico, non solo teorico."
      },
      {
        q: "Quanti CCE ICF si ottengono?",
        a: "Ogni Round vale 4 CCE ICF (Continuing Coach Education), utili per il rinnovo della credenziale ICF: un modo concreto per maturare crediti formativi allenando una competenza chiave del coaching."
      },
      {
        q: "Quanto costa e come si paga?",
        a: "Il costo è di 100€ + IVA per Round, con sconto quantità per chi acquista più Round. Su richiesta è possibile il frazionamento in più rate. I Workout si tengono online su Zoom."
      },
      {
        q: "A chi è rivolto?",
        a: "A coach, professionisti della relazione di aiuto, HR e manager che vogliono allenare l'intelligenza emotiva e, se accreditati ICF, maturare CCE per il rinnovo. Non servono prerequisiti particolari."
      }
    ]
  },
  'coaching-circle': {
    title: "Mentoring per il rinnovo delle credenziali",
    subtitle: "Mentoring di gruppo ed individuale",
    tagline: "Per rinnovare la credenziale ICF servono 10 ore di mentor coaching: le maturi con il mentoring di gruppo o individuale, accompagnato da un Mentor Coach MCC.",
    type: "MENTORING ICF",
    heroKicker: "PER RINNOVARE LA TUA CREDENZIALE ICF",
    media: {
      hero: "/course-media/coaching-circle/hero-coaching-circle.png",
      overview: "/course-media/coaching-circle/how-coaching-circle.png",
      howItWorks: "/course-media/apcm/how-master.jpg",
    },
    heroBenefits: [
      "Per il rinnovo della credenziale ICF servono 10 ore di mentor coaching",
      "Mentor coaching di gruppo: pratica supervisionata in piccoli gruppi",
      "Mentor coaching individuale: percorso one-to-one a costo orario",
      "Gruppo e individuale ti portano alle 10 ore, con un Mentor Coach MCC"
    ],
    summaryBox: {
      nextEdition: "Online · Zoom",
      dates: "Gruppo: 2 date a edizione · Individuale: on-demand",
      format: "Mentor coaching di gruppo o individuale",
      duration: "10 ore per il rinnovo (gruppo 7h + individuale 3h)",
      price: "Gruppo 180€ · Individuale 300€/h · Entrambi 480€",
      installments: "Sconto Alumni applicato in cassa"
    },
    earlyBirdPromo: {
      ribbon: "MENTORING ICF",
      line: "Rinnovo credenziale ICF: matura le 10 ore di mentor coaching · in gruppo (7h), individuale (3h) o entrambi (10h)",
      deadline: "",
      ctaHref: "#prezzo",
    },
    badges: ["10 ore per il rinnovo", "Gruppo o individuale", "Mentor Coach MCC"],
    overview: {
      title: "Mentoring per rinnovare la tua credenziale ICF",
      content: [
        "Per **rinnovare la credenziale ICF** servono **10 ore di mentor coaching**. Asterys Lab te le fa maturare con un **Mentor Coach MCC**, in due modalità anche combinabili: **Mentoring di Gruppo** e **Mentoring Individuale**.",
        "Il **Mentoring di Gruppo** (già *Coaching Circle*) è un'edizione di 2 incontri da 3,5h in gruppi da 4 (**7 ore**). Il **Mentoring Individuale** sono **3 ore** one-to-one. **Insieme arrivi alle 10 ore** richieste per il rinnovo."
      ]
    },
    target: [
      { title: "Coach con percorso base completato", desc: "Ha già effettuato un percorso base per diventare coach e vuole fare pratica di coaching attraverso il feedback diretto di un professionista del settore.", icon: <Target /> },
      { title: "Coach credenzialati", desc: "Vuole allenare la pratica rimanendo aderente alle linee guida e al codice etico ICF, evitando derive da altre discipline.", icon: <Award /> },
      { title: "Coach in cerca di feedback", desc: "Desidera confrontarsi con un mentor-coach MCC e con altri coach in un contesto strutturato di pratica supervisionata.", icon: <Users /> },
    ],
    learning: {
      cols: [
        {
          title: "Pratica nel ruolo di coach",
          items: [
            "Sessione di 20' con un coachee reale",
            "30' di feedback dedicato dal mentor MCC",
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
            "Confronto tra i diversi punti di vista"
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
          title: "Mentor coaching di gruppo (7 ore)",
          desc: "Un'edizione = 2 incontri da 3,5h (17:00–20:30) in gruppi da 4: pratichi a rotazione nei ruoli di coach, cliente e osservatore, con feedback del Mentor Coach MCC. Le date di gruppo sono fisse (le trovi qui sotto)."
        },
        {
          title: "Mentor coaching individuale (a costo orario)",
          desc: "Percorso one-to-one con il Mentor Coach MCC: scegli quante ore ti servono (con sconto quantità) e prenoti le date direttamente con lui/lei, in base alle tue esigenze e al livello di credenziale."
        },
        {
          title: "Entrambi (10 ore complete)",
          desc: "Gruppo (7h) + individuale (3h) = le 10 ore di mentor coaching richieste per il rinnovo della credenziale ICF, nel modo più completo."
        }
      ]
    },
    programIntro:
      "Per le 10 ore di mentor coaching del rinnovo ICF scegli mentor coaching di gruppo, individuale o entrambi: il gruppo ha date fisse, l'individuale lo concordi con il Mentor Coach in base alle ore che ti servono.",
    admissionBox: {
      title: "Requisiti per partecipare",
      body: "Aver completato un percorso base per diventare coach. Il Mentoring di Gruppo è uno spazio di pratica supervisionata, non un corso introduttivo.",
    },
    howItWorks: {
      title: "Come funziona il mentor coaching",
      intro:
        "Il **mentor coaching di gruppo** è pratica supervisionata in **gruppi da 4** che si alternano nei ruoli di coach, cliente e osservatore, con un **Mentor Coach MCC**. Il **mentor coaching individuale** è one-to-one, a costo orario, con date concordate direttamente con il mentor.",
      formazioneTitle: "Pratica supervisionata · date di gruppo",
      formazioneBadge: "17:00–20:30 · Zoom",
      formazioneIntro:
        "Edizione di gruppo in corso (Set–Dic 2026): **29 settembre 2026** e **10 dicembre 2026**, ore **17:00–20:30**, online su Zoom. In ogni incontro pratichi come coach su un caso reale e ricevi feedback dedicato dal Mentor Coach MCC. Per il mentor coaching individuale concordi le date direttamente con il mentor.",
    },
    scheduleColumns: [
      { icon: 'monitor', title: 'Modalità', body: 'Videochiamata su Zoom — link inviato prima dell\'incontro. Orario 17:00–20:30.' },
      { icon: 'users', title: 'Gruppo', body: 'Gruppi da 4 partecipanti, con supervisione di Paola Rulfi, Mentor Coach MCC.' },
      { icon: 'calendar', title: 'Quando', body: '3 edizioni l\'anno (Gen–Mar, Apr–Giu, Set–Dic). Ogni edizione ha 2 date, acquistabili insieme; vengono comunicate di volta in volta.' },
    ],
    studyModeBox: {
      title: "Come si acquista",
      highlight: "1 edizione = 2 incontri (7h) · +3h individuale = 10h",
      body: "Acquisti un'edizione: 2 sessioni insieme, non separate. Le 2 date vengono comunicate di volta in volta. Se annulli una sessione, la perdi. Se l'edizione non parte (sotto il numero minimo di partecipanti) ti proponiamo l'edizione successiva; se non ti va, ti rimborsiamo. [Regole d'acquisto in via di conferma]",
    },
    teachers: [
      {
        name: "Paola Rulfi",
        creds: "MCC",
        role: "Business and Executive Coach, Mentor Coach, Supervisor",
        bio: "Business ed Executive Coach MCC, Mentor Coach e Supervisor per coach e professionisti in sviluppo.",
        img: "/course-media/apcm/trainer-paola-rulfi.png"
      }
    ],
    career: {
      title: "Perché inserirlo nella tua pratica",
      content: "Il Mentoring di Gruppo mantiene alta la qualità della tua pratica e ti fa maturare le ore di mentoring utili per la credenziale ICF: feedback da un Mentor Coach MCC, confronto tra pari e aderenza alle linee guida.",
      points: [
        { title: "Ore per la credenziale", desc: "7 ore con l'edizione di gruppo; con +3h di mentoring individuale arrivi alle 10 ore utili al rinnovo." },
        { title: "Feedback di un Mentor MCC", desc: "Paola Rulfi osserva la tua pratica e restituisce un feedback dedicato sul caso reale." },
        { title: "Le tre posizioni", desc: "Coach, cliente e osservatore: ogni ruolo amplia la consapevolezza e affina lo sguardo professionale." },
        { title: "Allineamento ICF", desc: "Tieni la pratica dentro le linee guida e il codice etico ICF, evitando derive da altre discipline." }
      ]
    },
    fees: [
      {
        title: "Entrambi",
        type: "lump",
        wooKey: "completo",
        benefit: "10 ore · rinnovo completo",
        heading: "Gruppo + Individuale (10 ore)",
        desc: "Le 7 ore di mentor coaching di gruppo + 3 ore individuali: 10 ore totali, l'intero monte ore richiesto per il rinnovo della credenziale ICF.",
        price: "499€",
        priceLabel: "+ IVA",
        ctaLabel: "Prenota il tuo posto sullo store",
        footnote: "179€ gruppo (7h) + 319€ individuale (3h). Date di gruppo: 29 set e 10 dic 2026, 17:00–20:30. Sconto Alumni applicato in cassa."
      },
      {
        title: "Di gruppo",
        type: "lump",
        wooKey: "gruppo",
        benefit: "7 ore (2 incontri)",
        heading: "Mentor coaching di gruppo",
        desc: "Un'edizione = 2 incontri da 3,5h (7 ore) in gruppi da 4, con un Mentor Coach MCC. Orario 17:00–20:30.",
        price: "179€",
        priceLabel: "+ IVA",
        ctaLabel: "Prenota il tuo posto sullo store",
        footnote: "Edizione in corso: 29 set e 10 dic 2026, 17:00–20:30. Sconto Alumni applicato in cassa."
      },
      {
        title: "Individuale",
        type: "lump",
        wooKey: "individuale",
        benefit: "3 ore · one-to-one",
        heading: "Mentor coaching individuale",
        desc: "3 ore di mentor coaching one-to-one con un Mentor Coach MCC, da affiancare alle 7 ore di gruppo per completare il monte ore del rinnovo. Date concordate direttamente con il mentor.",
        price: "319€",
        priceLabel: "+ IVA",
        ctaLabel: "Prenota il tuo posto sullo store",
        footnote: "3 ore individuali con Mentor Coach MCC. Sconto Alumni applicato in cassa."
      }
    ],
    faqs: [
      {
        q: "Cos'è il Mentoring di Gruppo?",
        a: "È la nuova formula del Coaching Circle: pratica supervisionata di coaching in gruppi da 4, con feedback immediato di un Mentor Coach MCC. Un'edizione è composta da 2 incontri da 3,5h, per un totale di 7 ore."
      },
      {
        q: "Come arrivo alle 10 ore per il rinnovo della credenziale?",
        a: "Aggiungendo 3 ore di mentoring individuale alle 7 ore di gruppo: 7 + 3 = 10 ore. L'opzione 'Gruppo + Individuale' è pensata proprio per chi deve maturare le ore di mentoring per la credenziale ICF."
      },
      {
        q: "Quante edizioni di gruppo ci sono e quando?",
        a: "3 edizioni l'anno: Gen–Mar, Apr–Giu, Set–Dic. Ogni edizione ha 2 date (orario 17:00–20:30), acquistabili insieme. L'edizione in corso (Set–Dic 2026) si tiene il 29 settembre e il 10 dicembre 2026."
      },
      {
        q: "Come funziona l'acquisto?",
        a: "Acquisti un'edizione, cioè le 2 sessioni insieme (non separatamente). Se annulli una sessione, la perdi. Se l'edizione non parte per numero insufficiente di partecipanti, ti proponiamo l'edizione successiva; se non ti va, ti rimborsiamo. [Regole in via di conferma]"
      },
      {
        q: "Quanto costa e come si paga?",
        a: "Il Mentoring di Gruppo (7 ore) è 179€; il Mentoring Individuale (3 ore one-to-one) è 319€; la formula 'Gruppo + Individuale' (10 ore, l'intero monte ore per il rinnovo della credenziale) è 499€. Tutti i prezzi sono + IVA. Il pagamento avviene online sullo store; lo sconto Alumni viene applicato in cassa."
      },
      {
        q: "Chi è il Mentor Coach?",
        a: "Paola Rulfi, Mentor Coach MCC di Asterys Lab: Business ed Executive Coach, Mentor Coach e Supervisor. Offre feedback immediato e discute con i partecipanti scelte e strategie sui casi reali."
      },
      {
        q: "Dove si svolge?",
        a: "Online, in videochiamata su Zoom. Il link viene inviato prima di ogni incontro."
      }
    ]
  },
  'public-speaking': {
    title: "Public Speaking Pro",
    subtitle: "Parla con Presenza",
    tagline: "Rendi memorabile la tua presenza in pubblico: 3 giornate di full immersion in presenza più follow up online per padroneggiare l'arte del parlare in pubblico, con corpo, voce ed emozioni.",
    type: "COMUNICAZIONE",
    media: {
      hero: "/course-media/public-speaking/hero-public-speaking.png",
      overview: "/course-media/public-speaking/overview-psp.jpg",
      howItWorks: "/course-media/apcm/how-master.jpg",
      completePractical: "/course-media/apcm/supervision-mentor.png",
      completePlatform: "/course-media/apcm/platform-ui.png",
    },
    heroBenefits: ["Pianifica uno speech memorabile", "Comunica con il corpo", "Usa la voce come tua alleata", "Accogli le emozioni con presenza"],
    summaryBox: { nextEdition: "Da definire", dates: "Da definire", format: "Aula + Online", duration: "3 giornate + 2 follow up", price: "--", installments: "" },
    badges: ["Pratico", "Feedback Immediato"],
    overview: {
      title: "Comunicare è servire",
      content: [
        "Se desideri padroneggiare l'arte del **parlare in pubblico** e rendere i tuoi interventi memorabili, questo è il corso per te. Public Speaking PRO non è solo formazione: è una vera **esperienza di trasformazione** che ti dà le competenze per eccellere in tutte le situazioni **one to many**.",
        "Immagina di interagire con il pubblico con maestria e disinvoltura, veicolando i tuoi messaggi e **catturando l'attenzione della platea**. Immagina di avere tutti gli strumenti per **superare la paura di parlare in pubblico** e agire con piena consapevolezza, trasmettendo competenza e professionalità.",
        "Non si tratta solo di parlare in pubblico, ma di **essere serenamente chi sei mentre lo fai**."
      ]
    },
    target: [
      { title: "Professionisti one-to-many", desc: "Chi interagisce spesso con il pubblico ed è un riferimento per i propri interlocutori.", icon: <Users /> },
      { title: "Chi punta all'eccellenza", desc: "Professionisti per cui, dalla capacità di presentare, dipende il destino di un progetto.", icon: <Target /> },
      { title: "Trainer e formatori", desc: "Chi vuole rendere più efficaci i propri interventi e liberare tutto il potenziale di formatore.", icon: <MessageCircle /> },
      { title: "Manager", desc: "Chi vuole migliorare l'esposizione nei consigli di amministrazione e nelle riunioni.", icon: <TrendingUp /> }
    ],
    learning: {
      cols: [
        { title: "Struttura", items: ["Pianificare e organizzare uno speech memorabile"] },
        { title: "Corpo", items: ["Trasmettere chi sei e il tuo messaggio con l'uso consapevole del corpo"] },
        { title: "Voce", items: ["Usare la voce come tua potente alleata"] },
        { title: "Emozioni", items: ["Accogliere le emozioni per una presenza professionale ed efficace"] }
      ],
      softSkills: ["Presenza scenica", "Carisma", "Gestione dell'ansia", "Storytelling"]
    },
    structure: {
      modules: [
        { title: "Public Speaking PRO", desc: "Il cuore del percorso: 3 giornate di full immersion in presenza, più 2 follow up online da 1,5h.", tags: ["3 giornate in aula", "2 follow up online"] },
        { title: "Opzione Élite", desc: "Un'estensione su misura: 3 sessioni one-to-one personalizzate con il trainer.", tags: ["One-to-one", "Personalizzato"] },
        { title: "Diploma", desc: "Al termine ricevi un diploma che attesta la partecipazione e le ore di formazione svolte.", tags: ["Attestato ore"] }
      ]
    },
    teachers: [
      { name: "Alessandra Bitelli", creds: "Executive Coach", role: "Trainer", bio: "Executive coach, formatrice e facilitatrice, specializzata in comunicazione efficace, crescita professionale e dinamiche relazionali, con esperienza internazionale. Laureata in Pedagogia.", img: "/course-media/apcm/trainer-alessandra-bitelli.jpeg" },
      { name: "Renata Beltrami", creds: "Coach PCC", role: "Trainer", bio: "Coach PCC, trainer e facilitatrice certificata di Intelligenza Emotiva. Dopo quasi 20 anni all'estero, aiuta le persone a sviluppare consapevolezza di sé, obiettivi ed emozioni.", img: "/course-media/apcm/trainer-renata-cargnelutti-beltrami.png" },
      { name: "Laura Jacobbi", creds: "Actor Coach", role: "Presenza scenica", bio: "Regista, attrice e actor coach, formata all'Accademia d'Arte Drammatica «Silvio D'Amico». Dal 1993 insegna recitazione e dizione ed è coach di molti attori professionisti.", img: "/course-media/public-speaking/laura-jacobbi.png" },
      { name: "Nuna Shoesmith", creds: "Coach ACC ICF", role: "Vocal Coach", bio: "Diplomata al Conservatorio, vocal coach con esperienza decennale: aiuta a trovare la propria voce autentica con un approccio olistico al benessere vocale.", img: "/course-media/public-speaking/nuna-shoesmith.png" }
    ],
    career: { title: "Datti Voce", content: "Migliora la tua visibilità interna ed esterna.", points: [] },
    fees: [{ title: "Unica", type: "lump" as const, benefit: "Tutto incluso", heading: "Quota iscrizione", desc: "Include accesso alle sessioni live, dispense, video registrazioni e certificato di partecipazione.", price: "--", priceLabel: "prezzo in definizione" }],
    faqs: [
      {
        q: "A chi serve un corso di public speaking?",
        a: "A chiunque debba parlare in pubblico con efficacia: professionisti, manager, coach, formatori, imprenditori. Aiuta a gestire l'ansia, strutturare un discorso e comunicare con presenza e impatto davanti a un pubblico."
      },
      {
        q: "Quanto dura il corso di public speaking?",
        a: "Public Speaking PRO è una full immersion di 3 giornate in presenza, più 2 follow up online da 1,5 ore. È un percorso intensivo e pratico, fatto di esercitazioni e feedback."
      },
      {
        q: "È online o in presenza?",
        a: "Le 3 giornate principali si svolgono in presenza; a seguire ci sono 2 follow up online da 1,5 ore. È disponibile anche un'opzione Élite con 3 sessioni individuali personalizzate."
      },
      {
        q: "Cosa si impara?",
        a: "A preparare e strutturare un intervento, gestire voce, corpo ed emozioni, catturare l'attenzione e comunicare il messaggio con chiarezza e sicurezza, anche in situazioni di stress."
      },
      {
        q: "Quanto costa e quando parte la prossima edizione?",
        a: "Data e prezzo della prossima edizione sono in via di definizione. Lascia i tuoi contatti e ti avvisiamo appena aprono le iscrizioni, con tutte le condizioni aggiornate."
      }
    ]
  },
  'voice-dialogue': {
    title: "Voice Dialogue Skills",
    subtitle: "Voice Dialogue per professionisti",
    tagline: "Un laboratorio in presenza per integrare il Voice Dialogue nella tua pratica di coaching e di supporto alla persona.",
    type: "FORMAZIONE AVANZATA",
    heroKicker: "PER COACH E PROFESSIONISTI DELLO SVILUPPO",
    media: {
      hero: "/course-media/voice-dialogue/hero-voice-dialogue.png",
      overview: "/course-media/voice-dialogue/overview-voice-dialogue.png",
      howItWorks: "/course-media/apcm/how-master.jpg",
      completePractical: "/course-media/apcm/supervision-mentor.png",
      completePlatform: "/course-media/apcm/platform-ui.png",
    },
    heroBenefits: [
      "3 giornate full immersion in aula a Milano",
      "Sperimenti in prima persona le tecniche base del Voice Dialogue",
      "Riconosci e gestisci voci interne, Critico, Giudizio Negativo e campo energetico",
      "Colleghi il metodo alle competenze ICF"
    ],
    summaryBox: {
      nextEdition: "Milano",
      dates: "17–18 novembre + 1 dicembre 2026",
      format: "In presenza",
      duration: "3 giornate full immersion",
      price: "Da 1.575€ + IVA",
      installments: "Pagamento rateizzato disponibile"
    },
    badges: ["3 giornate in aula", "Lab su piattaforma Inner", "Pagamento a rate"],
    overview: {
      title: "Voice Dialogue per professionisti",
      content: [
        "Il **Voice Dialogue** è tra le metodologie che possono fornire un prezioso supporto nel rapporto di coaching e in altre professioni dedicate allo sviluppo della persona. Basato sulla **Psicologia dei Sé** elaborata negli Stati Uniti da **Hal e Sidra Stone**, permette al cliente di raggiungere profondi livelli di consapevolezza delle proprie risorse e dei propri comportamenti limitanti.",
        "**Asterys Lab introduce il Voice Dialogue nel mondo del coaching italiano nel 2013**, portando da Londra **John Kent** e organizzando alcune edizioni memorabili del corso Voice Dialogue Facilitator. Da allora ha certificato molti dei facilitatori oggi attivi nel contesto del coaching ICF."
      ]
    },
    target: [
      { title: "Coach professionisti", desc: "Aggiungono una metodologia di riconosciuta efficacia alla pratica quotidiana di coaching.", icon: <Target /> },
      { title: "Professionisti dello sviluppo personale", desc: "Integrano il Voice Dialogue nel lavoro con clienti e gruppi per ampliare consapevolezza ed efficacia.", icon: <Users /> },
      { title: "Professionisti del supporto alla persona", desc: "Aprono nuove possibilità nell'ascolto e nell'accompagnamento con tecniche esperienziali.", icon: <MessageCircle /> },
    ],
    learning: {
      cols: [
        {
          title: "Cosa imparerai",
          items: [
            "Principi della Dinamica dei Sé",
            "Sé primari e Sé rinnegati: origine e funzione",
            "Mappa dei sé e schemi energetici corporei",
            "Tecniche base per sessioni di coaching",
            "Uso creativo del Giudizio Negativo",
            "Riconoscere e gestire il Critico interiore",
            "Gestione del campo energetico in stress e conflitto"
          ]
        },
        {
          title: "Tecniche che sperimenterai",
          items: [
            "Il Pentalogo: le 5 domande fatali",
            "La margherita dei sé",
            "Il Core Quadrant",
            "L'Ara",
            "La triangolazione",
            "Energetics e radicamento"
          ]
        },
        {
          title: "Cosa porti a casa",
          items: [
            "Buona conoscenza delle tecniche di Voice Dialogue",
            "Esperienza diretta della potenza del metodo",
            "Criteri per riconoscere quando il VD è più utile",
            "Una nuova prospettiva sul consueto"
          ]
        }
      ],
      softSkills: ["Presenza", "Ascolto profondo", "Consapevolezza energetica", "Flessibilità"]
    },
    structure: {
      modules: [
        {
          title: "Giornata 1 · Fondamenti e Dinamica dei Sé",
          desc: "Introduzione al Voice Dialogue, Sé primari e Sé rinnegati, mappa dei sé ed esercizi base per entrare nel dialogo con le voci interiori."
        },
        {
          title: "Giornata 2 · Tecniche e sperimentazione",
          desc: "Pentalogo, margherita dei sé, Core Quadrant, Ara, triangolazione: laboratorio intensivo con pratica diretta e feedback dei trainer."
        },
        {
          title: "Giornata 3 · Critico, Giudizio e applicazione nel coaching",
          desc: "Riconoscere il Critico interiore, uso creativo del Giudizio Negativo, gestione del campo energetico e integrazione del metodo nei percorsi di coaching."
        }
      ]
    },
    programIntro:
      "Un percorso esperienziale di 3 giornate in cui sperimenti in prima persona le tecniche di base del Voice Dialogue, fino ad acquisire la padronanza per applicarle nei percorsi di coaching.",
    howItWorks: {
      title: "Struttura del percorso",
      intro:
        "Il corso si sviluppa in **3 giorni di full immersion in aula, in presenza a Milano**. Durante il laboratorio sperimenti in prima persona le tecniche di base del Voice Dialogue e acquisisci la padronanza per applicarle in un percorso di coaching.",
      formazioneTitle: "Lab su piattaforma Inner",
      formazioneIntro:
        "Hai accesso al **Lab sulla piattaforma Inner**, uno spazio digitale dedicato dove trovi materiali, dispense e strumenti di supporto al percorso e ti confronti con colleghi e trainer durante tutto il corso.",
    },
    scheduleBands: [
      {
        title: "In presenza a Milano",
        body: "3 giornate full immersion in aula con i trainer e i compagni di corso. Tutte le sessioni si svolgono dalle 09:00 alle 18:00.",
        dayLines: ["17–18 novembre 2026", "1 dicembre 2026"],
        timeLines: ["09:00 – 18:00"],
      },
    ],
    classDates: [
      { date: "17 NOV 2026", badge: "PROSSIMA EDIZIONE", note: "Termine iscrizioni: 31 ott 2026" },
    ],
    competenciesAndCareers: {
      eyebrow: "Competenze",
      title: "Cosa porterai nella tua pratica",
      intro:
        "Il Voice Dialogue è un **arricchimento professionale**: non un percorso che ti fa lavorare di per sé, ma una metodologia che potenzia la tua cassetta degli attrezzi e amplia la qualità della Presenza nel coaching e nelle professioni di supporto alla persona.",
      competencies: [
        { title: "Dinamica dei Sé e mappa dei sé", desc: "Riconosci Sé primari e Sé rinnegati, origine e funzione di ciascuno, e usi la mappa come strumento di lettura nelle sessioni." },
        { title: "Tecniche base del Voice Dialogue", desc: "Pentalogo, Margherita dei sé, Core Quadrant, Ara, Triangolazione: hai un set di strumenti operativi pronti per la pratica." },
        { title: "Lavoro con il Critico interiore", desc: "Sai riconoscere il Critico e iniziare a gestirlo, in te stesso e nei clienti, usando in modo creativo il Giudizio Negativo." },
        { title: "Consapevolezza energetica e corporea", desc: "Leggi i sé come schemi energetici e gestisci il tuo campo energetico nei contesti di stress o conflitto." },
        { title: "Presenza ampliata", desc: "Aumenti la qualità della Presenza attivando sensibilità corporea ed energetica, asset chiave nelle professioni di sviluppo." },
        { title: "Integrazione con le competenze ICF", desc: "Sai come il Voice Dialogue dialoga con le competenze chiave del coaching ICF e quando il metodo è più utile nelle sessioni." },
      ],
      careerPaths: [],
    },
    studyModeBox: {
      title: "Modalità di svolgimento",
      highlight: "In aula a Milano + Lab Inner",
      body: "3 giorni di full immersion in aula, in presenza. Durante il laboratorio sperimenti in prima persona le tecniche di base del Voice Dialogue per acquisire la padronanza necessaria ad applicarle in un percorso di coaching. In parallelo hai accesso al Lab sulla piattaforma Inner per confrontarti con colleghi e trainer durante tutto il periodo del corso.",
    },
    admissionBox: {
      title: "Ammissione",
      body: "Per partecipare è richiesto l'invio del CV. Il pagamento può essere effettuato anche a rate.",
    },
    teachers: [
      {
        name: "Pier Paolo Colasanti",
        creds: "PCC",
        role: "CEO Asterys Lab, Executive e Team Coach ICF & Facilitator",
        bio: "Executive e Team Coach, facilitator e guida dei percorsi Asterys Lab per lo sviluppo di persone, team e organizzazioni.",
        img: "/course-media/apcm/trainer-pier-paolo-colasanti.jpg"
      },
      {
        name: "Alessandra Bitelli",
        creds: "MCC",
        role: "Trainer & Executive Coach",
        bio: "Trainer ed Executive Coach MCC, specializzata nell'accompagnare professionisti e leader in percorsi di crescita e trasformazione.",
        img: "/course-media/apcm/trainer-alessandra-bitelli.jpeg"
      }
    ],
    career: {
      title: "Perché scegliere il Voice Dialogue",
      content: "Voice Dialogue Skills arricchisce la cassetta degli attrezzi del professionista, potenzia l'efficacia della pratica e amplia la qualità della Presenza attivando la sensibilità corporea ed energetica.",
      points: [
        { title: "Applicazione nella pratica", desc: "Userai tecniche e principi del Voice Dialogue direttamente nelle sessioni di coaching e nei colloqui professionali." },
        { title: "Consapevolezza delle voci", desc: "Aumenti la consapevolezza delle tue voci interne e di quelle dei tuoi interlocutori." },
        { title: "Supporto al coach", desc: "Il Voice Dialogue rafforza le tue competenze di coach o di professionista dello sviluppo personale." },
        { title: "Relazione con le competenze ICF", desc: "Scopri come il Voice Dialogue dialoga con le competenze chiave del coaching ICF." }
      ]
    },
    sessionSchedule: [
      { days: "17 novembre 2026", time: "09:00 - 18:00" },
      { days: "18 novembre 2026", time: "09:00 - 18:00" },
      { days: "1 dicembre 2026", time: "09:00 - 18:00" }
    ],
    earlyBirdPromo: {
      ribbon: "EARLY BIRD",
      line: "Early Bird: 175€ di sconto su Voice Dialogue, già applicato al checkout | Iscriviti entro il 31/10/2026",
      deadline: "31/10/2026",
      ctaHref: "#prezzo",
      // Sconto programmato sul prodotto Woo (no coupon). Disclaimer per corso in woo.ts → EARLY_BIRD.
      deadlineISO: "2026-10-31T23:59:59+01:00",
    },
    fees: [
      {
        title: "Prezzo pieno",
        type: "lump",
        benefit: "Quota standard",
        heading: "Quota iscrizione",
        desc: "Include **3 giornate full immersion in aula a Milano**, materiali didattici e accesso al **Lab su piattaforma Inner**.",
        price: "1.750€",
        priceLabel: "+ IVA",
        financing: {
          label: "Oppure in rate",
          amount: "72,92€ / mese",
          note: "Fino a 24 mesi senza interessi (1.750€ ÷ 24). Richiesto invio del CV.",
        },
        footnote: "Pagamento in un'unica soluzione o rateizzato fino a 24 mesi senza interessi.",
      },
    ],
    faqs: [
      {
        q: "A chi è rivolto il corso Voice Dialogue?",
        a: "A coach professionisti e professionisti dello sviluppo personale che desiderano potenziare la propria pratica aggiungendo una metodologia di riconosciuta efficacia. Il corso è aperto anche a chi vuole utilizzare le tecniche di base del Voice Dialogue per aumentare il proprio livello di consapevolezza e di efficacia."
      },
      {
        q: "Come è strutturato il percorso?",
        a: "3 giorni di full immersion in aula, in presenza a Milano. Durante il laboratorio sperimenti in prima persona le tecniche di base del Voice Dialogue e acquisisci la padronanza per applicarle in un percorso di coaching. In parallelo è allestito un Lab sulla piattaforma Inner per confrontarsi con colleghi e trainer durante tutto il corso."
      },
      {
        q: "Che cos'è la piattaforma Inner?",
        a: "Inner è il Lab digitale del corso: uno spazio web dedicato dove ti confronti con colleghi e trainer per tutto il periodo di svolgimento."
      },
      {
        q: "È richiesto un CV per iscriversi?",
        a: "Sì, per partecipare è richiesto l'invio del proprio CV insieme all'iscrizione."
      },
      {
        q: "Posso pagare a rate?",
        a: "Sì, il pagamento può essere effettuato anche a rate. Contattaci per definire il piano più adatto."
      },
      {
        q: "Cosa avrò alla fine del corso?",
        a: "Una buona conoscenza delle tecniche di Voice Dialogue, l'esperienza diretta della loro potenza ed efficacia, criteri chiari per riconoscere quando il metodo è più utile e una nuova prospettiva sul consueto, con maggiore consapevolezza."
      }
    ]
  },
  'continuous-learning': {
    title: "Continuous Learning (CL)",
    subtitle: "Continuous Learning",
    tagline: "Sviluppo continuo per la tua crescita come coach: un appuntamento mensile su Zoom, tutto l'anno tranne agosto. Senza inizio né fine, entri quando vuoi.",
    type: "CONTINUOUS LEARNING",
    media: {
      hero: "/course-media/continuous-learning/hero-continuous-learning.png",
      overview: "/course-media/continuous-learning/card.jpg",
      howItWorks: "/course-media/apcm/how-master.jpg"
    },
    heroKicker: "FORMAZIONE CONTINUA PER COACH",
    heroBenefits: [
      "Struttura circolare: nessun inizio né fine, entri quando vuoi",
      "Live Class mensili in Zoom (18:30–20:00), tutto l'anno tranne agosto",
      "Approccio di facilitazione: incontri interattivi, non lezioni frontali",
      "Permette di ottenere CCE ICF · ottima occasione di networking"
    ],
    summaryBox: {
      nextEdition: "Online · Zoom",
      dates: "Tutto l'anno · pausa ad agosto",
      format: "Live Class mensili",
      duration: "1 incontro/mese · 18:30–20:00",
      price: "Da 9€ + IVA a Live Class",
      installments: "Pacchetti: più ne acquisti, più risparmi"
    },
    badges: ["Struttura circolare", "CCE ICF", "Network coaching"],
    overview: {
      title: "Sviluppo senza fine",
      content: [
        "Il Continuous Learning è **formazione continua** per coach: una struttura circolare, senza inizio né fine, con un appuntamento mensile tutto l'anno tranne agosto. Entri quando vuoi.",
        "È pensato per studenti e alumni di Asterys Lab — chi inizia, chi è tra un livello e l'altro, chi vuole restare aggiornato — ma è aperto a **chiunque faccia coaching**, di qualsiasi livello e scuola. Ogni Live Class, dallo sviluppo personale agli approfondimenti sulla pratica, è un'occasione di crescita.",
        "Le sessioni sono condotte da **Alessandra Bitelli, PCC**, executive coach della Faculty di Asterys Lab, con ospiti che portano stimoli sempre nuovi. Una volta al mese, su Zoom, dalle 18:30 alle 20:00."
      ]
    },
    target: [
      { title: "Alumni e studenti Asterys", desc: "Chi inizia, chi è in pausa tra un livello e l'altro, chi ha concluso e vuole restare stimolato.", icon: <Users /> },
      { title: "Coach con credenziale", desc: "Per nutrire la pratica con nuovi punti di vista e ottenere CCE ICF.", icon: <Award /> },
      { title: "Coach in formazione", desc: "Per integrare il percorso con stimoli continui e networking.", icon: <Target /> },
      { title: "Chiunque faccia coaching", desc: "A qualsiasi livello e di qualsiasi scuola: il programma è aperto a tutti.", icon: <MessageCircle /> },
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
          desc: "Il programma è attivo tutto l'anno (escluso agosto) con ingresso continuo: non c'è un punto d'inizio obbligato, entri quando vuoi. Puoi acquistare una singola Live Class o un pacchetto di incontri.",
          tags: ["Nessun inizio obbligato", "Tutto l'anno tranne agosto", "Singola o pacchetto"]
        },
        {
          title: "Come funziona ogni Live Class",
          desc: "Ogni incontro tratta un tema, spesso mutuato da altre discipline (storia, business, filosofia, psicologia) e riletto con la prospettiva del coaching. Modalità di facilitazione, non formazione frontale: ogni partecipante può integrare e portare le proprie riflessioni.",
          tags: ["Tema interdisciplinare", "Prospettiva coaching", "Altamente interattivo"]
        },
        {
          title: "Iscrizione e partecipazione",
          desc: "Al momento dell'iscrizione ricevi il calendario con tutte le date successive. Circa 3-4 giorni prima di ogni incontro ricevi il link Zoom e il titolo della sessione: scegli liberamente se partecipare a quella o alla successiva. Attenzione: le Live Class a cui non partecipi non sono recuperabili.",
          tags: ["Calendario all'iscrizione", "Link 3-4 giorni prima", "Non recuperabili"]
        },
        {
          title: "CCE ICF e network",
          desc: "Il programma permette di ottenere CCE ICF ed è un'ottima occasione di networking: la platea è ricca e multi-livello, con coach formati e in formazione provenienti da percorsi diversi.",
          tags: ["CCE ICF", "Network coaching", "Platea multi-livello"]
        }
      ]
    },
    programIntro:
      "Continuous Learning è uno spazio continuo di crescita professionale e personale: incontri brevi, mensili e ad alto valore riflessivo, sempre con la prospettiva del coaching.",
    howItWorks: {
      title: "Come funziona e a chi è dedicato",
      intro: "Ogni incontro tratta un tema, spesso proveniente da altre discipline (storia, business, filosofia, psicologia), con una **prospettiva di coaching**. L'approccio è interattivo: i partecipanti condividono riflessioni e sviluppano competenze per supportare i clienti in situazioni diverse.",
      formazioneTitle: "Iscrizione e calendario",
      formazioneIntro: "Il programma permette di ottenere **CCE ICF** ed è pensato per coach formati o in formazione, con un'ottima occasione di **networking**. Puoi acquistare singole Live Class o pacchetti, con prezzi ridotti in base al numero di incontri. Dopo l'iscrizione ricevi il calendario e, prima di ogni evento, il link Zoom e il tema della sessione."
    },
    studyModeBox: {
      title: "Tutto su Zoom, ",
      highlight: "una volta al mese",
      body: "Tutte le Live Class si svolgono in videoconferenza Zoom dalle 18:30 alle 20:00. Dopo l'iscrizione ricevi il calendario; 3-4 giorni prima di ogni incontro ricevi link Zoom e titolo della sessione e scegli liberamente se partecipare. **Attenzione: le Live Class a cui non partecipi non sono recuperabili.**",
    },
    admissionBox: {
      title: "A chi è dedicato",
      body: "Rivolto particolarmente a studenti e alumni Asterys Lab (chi inizia, chi è in pausa, chi ha concluso), ma aperto a chiunque si occupi di coaching, a qualsiasi livello e di qualsiasi scuola. Nessun processo di ammissione: scegli le Live Class e iscriviti."
    },
    teachers: [
      { name: "Alessandra Bitelli", creds: "PCC", role: "Titolare del corso", bio: "PCC, formata come coach in Asterys Lab. Executive coach e parte della Faculty di Asterys Lab, con cui collabora allo sviluppo dei programmi di formazione.", img: "/course-media/apcm/trainer-alessandra-bitelli.jpeg" },
      { name: "Graziano Nicoli", creds: "ICF PCC", role: "Titolare del corso", bio: "Executive Coach ICF PCC, Trainer, Facilitator e Assessor. Executive coach con focus su change management, gestione dell'incertezza e transizioni di carriera.", img: "/course-media/continuous-learning/trainer-graziano-nicoli.jpeg" }
    ],
    career: {
      title: "Perché inserirlo nella tua pratica",
      content: "Il programma mantiene attive nel tempo riflessione, confronto e aggiornamento, con un network ricco di coach in fasi diverse e la possibilità di ottenere CCE ICF.",
      points: [
        { title: "Allenamento costante", desc: "Una Live Class al mese per non interrompere il ritmo di crescita." },
        { title: "Approccio interdisciplinare", desc: "Temi da storia, business, filosofia e psicologia, riletti in chiave coaching." },
        { title: "Facilitazione interattiva", desc: "Ogni partecipante può portare riflessioni e casi: nessuna lezione frontale." },
        { title: "CCE ICF e network", desc: "Ottieni CCE ICF e resti connesso a una community ricca di coach." }
      ]
    },
    competenciesAndCareers: {
      eyebrow: "Competenze",
      title: "Cosa impari",
      intro: "Ogni Live Class alimenta competenze concrete per il tuo lavoro di coach, tra sviluppo personale e prospettiva di coaching.",
      competencies: [
        { title: "Riflessione guidata su casi reali", desc: "Analizzi situazioni e casi rileggendoli con la prospettiva del coaching." },
        { title: "Approccio interdisciplinare", desc: "Colleghi spunti da storia, business, filosofia e psicologia al lavoro di coach." },
        { title: "Lettura di contesti complessi", desc: "Sviluppi consapevolezza per orientarti con clienti e situazioni diverse." },
        { title: "Postura di facilitazione", desc: "Alleni una modalità interattiva e non frontale, fatta di domande e ascolto." },
        { title: "Aggiornamento continuo", desc: "Mantieni viva la pratica con stimoli mensili e la possibilità di CCE ICF." },
        { title: "Network professionale", desc: "Resti connesso a una community ricca e multi-livello di coach." }
      ],
      careerPaths: []
    },
    sessionSchedule: [
      { days: "Una volta al mese (gennaio–luglio, settembre–dicembre)", time: "18:30 - 20:00" },
      { days: "Pausa estiva", time: "Agosto" }
    ],
    classDates: [
      { date: "8 luglio 2026", badge: "7a Live Class", note: "Il declino dei valori: impatto su appartenenza, motivazione e successo di gruppi e organizzazioni" },
      { date: "15 settembre 2026", badge: "8a Live Class", note: "Essere Coach… con stile" },
      { date: "20 ottobre 2026", badge: "9a Live Class", note: "Il coraggio di rompere gli schemi: il valore del pensiero non convenzionale" },
      { date: "17 novembre 2026", badge: "10a Live Class", note: "Il rispetto dei tempi. Il compromesso dell'orologio" },
      { date: "15 dicembre 2026", badge: "11a Live Class", note: "Il bisogno di esistere: riconoscimento, coaching e strategie di affermazione" }
    ],
    fees: [
      {
        title: "Live Class",
        type: "lump",
        wooQuantitySelector: true,
        benefit: "Sconto sul volume",
        heading: "Scegli quante Live Class",
        desc: "Acquisti singole Live Class o un pacchetto: **più ne prendi, meno costa ognuna**. 16€ (1–2) · 12€ (3–7) · 9€ (da 8), + IVA a Live Class. La fascia giusta si applica da sola nel carrello in base alla quantità.",
        price: "da 9€",
        priceLabel: "+ IVA / Live Class"
      }
    ],
    faqs: [
      {
        q: "Devo iniziare da una data specifica?",
        a: "No. Il Continuous Learning è circolare: non c'è un punto d'inizio obbligato, entri quando vuoi. Si svolge tutto l'anno tranne agosto."
      },
      {
        q: "Quando si svolgono le Live Class?",
        a: "In videoconferenza Zoom, una volta al mese, dalle 18:30 alle 20:00, tutto l'anno tranne agosto."
      },
      {
        q: "Posso acquistare una sola Live Class?",
        a: "Sì. Puoi acquistare un singolo incontro o un pacchetto: più Live Class acquisti, più il prezzo unitario diminuisce."
      },
      {
        q: "Chi può partecipare?",
        a: "Il programma è rivolto particolarmente a studenti e alumni di Asterys Lab, ma è aperto a chiunque si occupi di coaching, a qualsiasi livello e di qualsiasi scuola."
      },
      {
        q: "Quanto costa e come si paga?",
        a: "Il prezzo è per Live Class, con sconto sulla quantità: più incontri acquisti, più il costo unitario diminuisce. Il pagamento avviene online al momento dell'acquisto; trovi i prezzi aggiornati nella sezione Prezzi."
      },
      {
        q: "Le Live Class si possono recuperare?",
        a: "No: le Live Class a cui non partecipi non sono recuperabili. Prima di ogni incontro ricevi link Zoom e tema, così scegli liberamente se partecipare."
      },
      {
        q: "Il programma dà crediti ICF?",
        a: "Sì, il programma permette di ottenere CCE ICF."
      }
    ]
  }
};
