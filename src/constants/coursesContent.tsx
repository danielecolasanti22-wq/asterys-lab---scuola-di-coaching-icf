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
}

export interface CourseTestimonial {
  name: string;
  role: string;
  img?: string;
  quote: string;
  rating?: number;
  cohort?: string;
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
    name: "Laura Bianchi",
    role: "Executive Coach · ex HR Director",
    img: "https://picsum.photos/seed/testimonial-laura/400/400",
    quote:
      "Il percorso con Asterys Lab ha trasformato il mio modo di lavorare con le persone. Ho trovato metodo, comunità e una credibilità professionale che prima non avevo.",
    rating: 5,
    cohort: "Alumna APCM"
  },
  {
    name: "Marco Ferrari",
    role: "Team Coach & Consulente",
    img: "https://picsum.photos/seed/testimonial-marco/400/400",
    quote:
      "Qualità dei docenti, supervisione seria e una rete di alumni concreta. Ho iniziato a prendere i primi clienti durante il Master e oggi lavoro come coach full-time.",
    rating: 5,
    cohort: "Alumno APCM"
  },
  {
    name: "Silvia Rossi",
    role: "People Manager · Coach PCC",
    img: "https://picsum.photos/seed/testimonial-silvia/400/400",
    quote:
      "Non è solo una certificazione: è un percorso di crescita personale. L'intelligenza emotiva e l'approccio sistemico mi hanno cambiato anche nella vita quotidiana.",
    rating: 5,
    cohort: "Alumna APCM"
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
    tagline: "Il Master d'eccellenza per diventare un coach professionista accreditato ICF con intelligenza emotiva misurabile e approccio sistemico.",
    type: "ICF LEVEL 1 & 2",
    heroKicker: "PER PROFESSIONISTI",
    media: {
      hero: "/course-media/apcm/hero.webp",
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
      price: "A partire da 3.900€",
      installments: "Fino a 24 rate senza interessi"
    },
    badges: ["ICF Level 1 & 2", "20+ anni esperienza", "Community Alumni"],
    overview: {
      title: "Perché questo Master in Coaching Professionale",
      content: [
        "Il Master APCM di Asterys Lab non è solo un corso di formazione, è un viaggio di trasformazione profonda.",
        "Integriamo le più moderne scoperte delle neuroscienze con la pratica del coaching sistemico.",
        "Il nostro obiettivo è portarti da essere un professionista curioso a un coach competente, etico e riconosciuto a livello internazionale."
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
        title: "Rate Smart",
        type: "installment",
        benefit: "Fino a 24 mesi",
        heading: "Paga in rate mensili",
        desc: "Con Rate Smart puoi dilazionare l'intero importo in piccole rate mensili (fino a 24 mesi), senza garanzie e con attivazione completamente online.",
        price: "190€",
        priceLabel: "/mese",
        footnote: "Simulazione su 24 mesi, prezzo del Master: 4.200€ → 3.510€"
      },
      {
        title: "Pagamento Unico",
        type: "lump",
        benefit: "Sconto 10%",
        heading: "Risparmia con il pagamento unico",
        desc: "Con il Pagamento Unico ottieni il massimo risparmio sul percorso. Ideal per chi preferisce saldare tutto subito e non pensarci più.",
        price: "3.510€",
        priceLabel: "una tantum",
        footnote: "Prezzo pieno: 3.900€ — risparmi 390€ con il pagamento unico"
      },
      {
        title: "Tasso Zero",
        type: "zero-rate",
        benefit: "0% interessi",
        heading: "Finanziamento a tasso zero",
        desc: "Attiva il finanziamento a tasso zero e paga il percorso in comode rate mensili senza alcuna maggiorazione. Procedura semplice e completamente online.",
        price: "190€",
        priceLabel: "/mese",
        footnote: "Soggetto ad approvazione del finanziatore. Simulazione indicativa."
      }
    ],
    faqs: commonFaqs,
    placementStats: { rate: "98%", partners: "150+", opportunities: "500+" },
    testimonials: [
      {
        name: "Chiara De Luca",
        role: "Executive Coach · ex Senior HR Manager",
        img: "https://picsum.photos/seed/apcm-chiara/400/400",
        quote:
          "Sono entrata con 15 anni di HR alle spalle e sono uscita con un metodo chiaro, le credenziali ICF e una nuova professione. I feedback dei Mentor MCC sono stati il vero salto di qualità.",
        rating: 5,
        cohort: "APCM 2023 · Certificata PCC"
      },
      {
        name: "Andrea Moretti",
        role: "Team Coach & Facilitator",
        img: "https://picsum.photos/seed/apcm-andrea/400/400",
        quote:
          "Il modulo Prosperous Coach mi ha dato gli strumenti pratici per costruire la mia offerta. A sei mesi dalla fine del Master seguivo già i primi progetti corporate.",
        rating: 5,
        cohort: "APCM 2022 · Alumno"
      },
      {
        name: "Martina Colombo",
        role: "Leadership Coach · Psicologa del lavoro",
        img: "https://picsum.photos/seed/apcm-martina/400/400",
        quote:
          "L'approccio sistemico e l'intelligenza emotiva misurabile hanno portato la mia pratica a un altro livello. La community degli alumni è un supporto quotidiano.",
        rating: 5,
        cohort: "APCM 2024 · In certificazione ACC"
      }
    ],
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
    }
  },
  'systemic-team-coaching': {
    title: "Systemic Team Coaching Master",
    subtitle: "Coach di Squadra Eccellenti",
    tagline: "La frontiera del coaching aziendale per trasformare i gruppi in team ad alta performance.",
    type: "AVANZATO",
    heroBenefits: [
      "Specializzati nel guidare team aziendali complessi",
      "Applica il pensiero sistemico alle dinamiche di gruppo",
      "Ottieni strumenti diagnostici esclusivi per i team",
      "Accedi a casi studio reali di trasformazione corporate"
    ],
    summaryBox: {
      nextEdition: "Online Live",
      dates: "Giugno – Settembre 2026",
      format: "Live Online",
      duration: "60 ore accademiche",
      price: "A partire da 2.500€",
      installments: "Fino a 12 rate"
    },
    badges: ["Avanzato", "Sistemico Evolutivo", "Focus Corporate"],
    overview: {
      title: "Oltre l'individuo: il Team Coaching",
      content: [
        "In un'epoca di complessità, il successo non dipende dai singoli ma dalle interazioni tra loro.",
        "Questo Master ti insegna a leggere non solo le persone, ma lo spazio tra le persone.",
        "Imparerai a facilitare il cambiamento in board e team operativi."
      ]
    },
    target: [
      { title: "Coach PCC/ACC", desc: "Che vogliono scalare il business nel corporate.", icon: <TrendingUp /> },
      { title: "HR Business Partner", desc: "Per supportare la trasformazione dei leader.", icon: <Users /> }
    ],
    learning: {
      cols: [
        { title: "Dinamiche Sistemi", items: ["Leggi di Hellinger", "Oltre la psicologia", "Il team come organismo"] },
        { title: "Strumenti", items: ["Team Assessment", "Mappatura stakeholder", "Gestione conflitti"] }
      ],
      softSkills: ["Visione d'insieme", "Gestione del silenzio", "Neutralità"]
    },
    structure: {
      modules: [
        { title: "Introduzione", desc: "Il passaggio dal coaching individuale al team." },
        { title: "Metodologia", desc: "Protocolli di intervento sistemico." },
        { title: "Pratica Lab", desc: "Supervisione su casi aziendali reali." }
      ]
    },
    teachers: [
      { name: "Pietro Monti", creds: "PCC", role: "Specialista Sistemi", bio: "Anni di interventi su board internazionali.", img: "https://picsum.photos/seed/pietrstc/300/300" }
    ],
    career: {
      title: "Supporto Corporate",
      content: "Accesso a progetti di team coaching all'interno del network Asterys.",
      points: [
        { title: "Mentoring Avanzato", desc: "Supporto su progetti reali venduti alle aziende." }
      ]
    },
    classDates: [
      { date: "10 giugno", badge: "PROSSIMA EDIZIONE" },
      { date: "Settembre 2026", note: "Date da confermare" }
    ],
    sessionSchedule: [
      { days: "Sabato mattina", time: "9:00 - 13:00" },
      { days: "Domenica (modulo intensivo)", time: "9:00 - 17:00" }
    ],
    fees: [
      { title: "Quota Standard", type: "lump" as const, benefit: "Alumni Discount", heading: "Quota iscrizione", desc: "Per chi ha già frequentato l'APCM. Sconto riservato agli alumni Asterys Lab.", price: "2.500€", priceLabel: "una tantum" }
    ],
    faqs: commonFaqs
  },
  'eiw': {
    title: "Emotional Intelligence Workout (EIW)",
    subtitle: "Allenare il Cuore",
    tagline: "Sviluppa la competenza chiave per il futuro: l'Intelligenza Emotiva misurabile.",
    type: "CORTO",
    heroBenefits: [
      "Mappa il tuo profilo EQ con il test Six Seconds",
      "Migliora l'autoconsapevolezza e la gestione emotiva",
      "Ottieni strumenti pratici per la tua leadership",
      "Certificazione internazionale riconosciuta"
    ],
    summaryBox: {
      nextEdition: "Online Live",
      dates: "Settembre 2026",
      format: "Live Online",
      duration: "24 ore",
      price: "950€",
      installments: "Fino a 3 rate"
    },
    badges: ["Six Seconds Partner", "Evidence Based", "Skill Trasversale"],
    overview: {
      title: "Perché l'Intelligenza Emotiva?",
      content: ["Secondo il WEF è tra le 10 skill più richieste.", "Imparerai a navigare le emozioni invece di subirle."]
    },
    target: [
      { title: "Manager", desc: "Per una leadership più umana ed efficace.", icon: <Users /> },
      { title: "Tutti", desc: "Chiunque voglia migliorare le proprie relazioni.", icon: <MessageCircle /> }
    ],
    learning: {
      cols: [
        { title: "Self Science", items: ["Conoscersi", "Scegliersi", "Darsi"] }
      ],
      softSkills: ["Empatia", "Ottimismo", "Motivazione"]
    },
    structure: {
      modules: [
        { title: "EQ Foundations", desc: "Alla scoperta del modello KCG." }
      ]
    },
    teachers: [
      { name: "Giovanna Giuffredi", creds: "MCC / EQ Assessor", role: "EQ Expert", bio: "Certificata Six Seconds.", img: "https://picsum.photos/seed/giovannaei/300/300" }
    ],
    career: {
      title: "EQ per il tuo CV",
      content: "Una competenza differenziante in ogni processo di selezione.",
      points: [{ title: "Certificato EQ", desc: "Rilasciato da Asterys in partnership con Six Seconds." }]
    },
    classDates: [
      { date: "Settembre 2026", badge: "APERTE LE ISCRIZIONI" }
    ],
    sessionSchedule: [
      { days: "Sabato mattina", time: "9:00 - 13:00" }
    ],
    fees: [
      { title: "Early Bird", type: "lump" as const, benefit: "Prenota entro Luglio", heading: "Quota iscrizione", desc: "Prenota entro luglio e ottieni il 15% di sconto. Disponibilità limitata.", price: "800€", priceLabel: "una tantum" }
    ],
    faqs: commonFaqs
  },
  'prosperous-coach': {
    title: "Prosperous Coach Program",
    subtitle: "Il Business del Coaching",
    tagline: "Smetti di sperare nei clienti. Impara a costruire un business solido, etico e profittevole.",
    type: "BUSINESS",
    heroBenefits: [
      "Definisci il tuo posizionamento unico sul mercato",
      "Costruisci un funnel di acquisizione clienti etico",
      "Impara a vendere il valore del coaching, non le ore",
      "Mentoring individuale sul tuo business plan"
    ],
    summaryBox: {
      nextEdition: "Iscrizioni Aperte",
      dates: "Inizio personalizzato",
      format: "One-to-One e Masterclass",
      duration: "3 Mesi",
      price: "1.200€",
      installments: "3 rate"
    },
    badges: ["Pratico", "Risultato Garantito", "Mentoring"],
    overview: {
      title: "Perché un programma di business?",
      content: ["Essere un bravo coach non basta a pagare le bollette.", "Molti coach falliscono non per mancanza di cuore, ma di metodo commerciale."]
    },
    target: [
      { title: "Neo Coach", desc: "Che devono partire da zero.", icon: <Zap /> }
    ],
    learning: {
      cols: [
        { title: "Strategy", items: ["Nicchia", "Offerta irresistibile", "Copywriting"] }
      ],
      softSkills: ["Marketing Mentality", "Resilienza", "Focus"]
    },
    structure: {
      modules: [{ title: "Foundations", desc: "Chi sei e chi aiuti." }]
    },
    teachers: [
      { name: "Asterys Lab Team", creds: "Business Experts", role: "Mentors", bio: "Hanno costruito Asterys da zero.", img: "https://picsum.photos/seed/biz/300/300" }
    ],
    career: {
      title: "Libertà Finanziaria",
      content: "Vivi della tua passione con un metodo replicabile.",
      points: []
    },
    fees: [{ title: "Accesso Standard", type: "lump" as const, benefit: "One-timer", heading: "Quota iscrizione", desc: "Tutto incluso: accesso a tutti i moduli, materiali e mentoring individuale.", price: "1.200€", priceLabel: "una tantum" }],
    faqs: commonFaqs
  },
  'hr-manager-coaching': {
    title: "Coaching Skills for Leaders",
    subtitle: "Manager come Coach",
    tagline: "Porta lo strumento più potente di sviluppo delle persone nel tuo stile di gestione quotidiano.",
    type: "LEADERSHIP",
    heroBenefits: [
      "Passa dal comandare al facilitare",
      "Impara a dare feedback che generano azione",
      "Sblocca il potenziale dei tuoi collaboratori",
      "Migliora il clima e la produttività del team"
    ],
    summaryBox: {
      nextEdition: "In Aula a Milano / Online",
      dates: "Ottobre 2026",
      format: "Ibrido",
      duration: "32 ore",
      price: "1.500€",
      installments: "Convenzioni aziendali"
    },
    badges: ["Corporate Ready", "Metodi Pratici", "ICF CCE Ready"],
    overview: {
      title: "Il Manager Coach",
      content: ["Le persone non lasciano le aziende, lasciano i capi.", "Sviluppa le skill per essere il leader che avresti voluto avere."]
    },
    target: [
      { title: "Manager & HR", desc: "Chiunque gestisca persone.", icon: <Users /> }
    ],
    learning: {
      cols: [
        { title: "Leadership", items: ["Feedback", "Delega", "Empatia", "Focus risultati"] }
      ],
      softSkills: ["Ascolto", "Pazienza", "Chiarezza"]
    },
    structure: {
      modules: [{ title: "Modulo 1", desc: "La conversazione di sviluppo." }]
    },
    teachers: [
      { name: "Pietro Monti", creds: "PCC", role: "Trainer Corporate", bio: "Ex manager trasformato in coach.", img: "https://picsum.photos/seed/hrc/300/300" }
    ],
    career: {
      title: "Upgrade Professionale",
      content: "Diventa un leader moderno in grado di attrarre e trattenere talenti.",
      points: []
    },
    fees: [{ title: "Corporate", type: "lump" as const, benefit: "Prezzo Azienda", heading: "Quota aziendale", desc: "Fatturazione diretta all'azienda. Preventivi personalizzati per gruppi e formazione interna.", price: "Su richiesta", priceLabel: "" }],
    faqs: commonFaqs
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
  'mentor-coaching': {
    title: "Mentor Coaching ICF",
    subtitle: "Verso ACC e PCC",
    tagline: "Le ore di mentoring necessarie per le tue credenziali ICF con feedback dai migliori MCC.",
    type: "MENTORING",
    heroBenefits: ["10 ore di mentoring (7 di gruppo, 3 individuali)", "Feedback scritto su ogni sessione", "Revisione dei requisiti ICF", "Success rate elevatissimo"],
    summaryBox: { nextEdition: "Sempre Attivo", dates: "Date flessibili", format: "Online", duration: "10 ore", price: "850€", installments: "2 rate" },
    badges: ["Requisito ICF", "Gold Standard"],
    overview: { title: "Il Mentoring è Crescita", content: ["Affina le tue 8 core competence."] },
    target: [{ title: "Coach in formazione", desc: "Chi punta alle credenziali.", icon: <Award /> }],
    learning: { cols: [{ title: "Core Competence", items: ["Etica", "Alleanza", "Presenza", "Sviluppo consapevolezza"] }], softSkills: ["Ascolto", "Precisione"] },
    structure: { modules: [{ title: "Mentoring Gruppo", desc: "7 ore di confronto." }] },
    teachers: [{ name: "Giovanna Giuffredi", creds: "MCC", role: "Assessor", bio: "Assessor ICF qualificata.", img: "https://picsum.photos/seed/mnt/300/300" }],
    career: { title: "Credenziali ICF", content: "Il passaporto internazionale per la tua carriera.", points: [] },
    fees: [{ title: "Full Program", type: "lump" as const, benefit: "Gruppo + Individuale", heading: "Quota iscrizione", desc: "Include 7 ore di mentoring di gruppo e 3 ore individuali. Conforme ai requisiti ICF per le credenziali ACC e PCC.", price: "850€", priceLabel: "una tantum" }],
    faqs: commonFaqs
  }
};
