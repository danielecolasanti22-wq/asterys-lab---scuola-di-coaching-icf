import type { CourseTestimonial } from './coursesContent';

// NB: tutte queste testimonianze sono pubblicate con consenso (confermato dalla scuola).
// `role` = ruolo/percorso: per le nuove persone è provvisorio (percorso/credenziale dichiarati
// dalla persona) in attesa dei ruoli reali + foto. `img` assente → avatar con iniziali.
export const homeTestimonials: CourseTestimonial[] = [
  // --- VIDEO (già esistenti) ---
  {
    name: 'Nicola Fratiglioni',
    role: 'Business Coach',
    cohort: 'Il coaching che ti fa crescere',
    quote: 'Un racconto diretto sul percorso di coaching e sull’impatto del metodo Asterys Lab nella crescita professionale.',
    video: {
      poster: 'https://vumbnail.com/359988626.jpg',
      vimeoEmbedUrl: 'https://player.vimeo.com/video/359988626?badge=0&autopause=0&player_id=0&app_id=58479',
    },
  },
  {
    name: 'Flora Pietropaolo',
    role: 'Recruiting Manager',
    cohort: 'Persone che crescono davvero',
    quote: 'Una testimonianza sul valore del coaching nelle relazioni professionali, nello sviluppo delle persone e nei contesti HR.',
    video: {
      poster: 'https://vumbnail.com/365158982.jpg',
      vimeoEmbedUrl: 'https://player.vimeo.com/video/365158982?badge=0&autopause=0&player_id=0&app_id=58479',
    },
  },

  // --- TESTO con foto (già pubblicati, frase aggiornata) ---
  {
    name: 'Alessandro Stocco',
    role: 'Coach',
    img: '/testimonials/people/alessandro-stocco.jpeg',
    quote:
      'Avevo aspettative limitate rispetto al corso. Non solo sono state ampiamente superate, ma ho scoperto passo dopo passo nuove possibilità e nuove consapevolezze.',
    rating: 5,
    cohort: 'Aspettative superate',
  },
  {
    name: 'Costanza Catapano',
    role: 'HR',
    img: '/testimonials/people/costanza-catapano.jpeg',
    quote:
      'Ho apprezzato la professionalità dei coach e il supporto costante durante tutto il percorso. Il clima e le relazioni nate nel gruppo vanno oltre il coaching: mi hanno fatto guardare alle relazioni con uno sguardo nuovo, più consapevole.',
    rating: 4,
    cohort: 'Uno sguardo nuovo sulle relazioni',
  },
  {
    name: 'Damiano Zanotti',
    role: 'COO presso Claypaky',
    img: '/testimonials/people/damiano-zanotti.jpeg',
    quote:
      'Un percorso intenso, che ti porta alla scoperta di te stesso e degli altri. I docenti sono competenti e unici nel modo di accompagnarti, e con gli altri partecipanti si crea un rapporto bellissimo.',
    rating: 5,
    cohort: 'Alla scoperta di te e degli altri',
  },
  {
    name: 'Camilla Pedrazzini',
    role: 'Product Manager HR',
    img: '/testimonials/people/camilla-pedrazzini.jpeg',
    quote:
      'Il metodo e la connessione che si crea nei gruppi sono stupendi: a ogni scambio arricchisci il tuo bagaglio. Docenti che ti mettono a tuo agio dal primo giorno e un coach senior che ti segue: un grandissimo plus.',
    rating: 5,
    cohort: 'Cresci a ogni scambio',
  },

  // --- TESTO nuovi (avatar a iniziali in attesa di foto) ---
  {
    name: 'Melania Puolo',
    role: 'Master di Coaching · Livello 2',
    img: '/testimonials/people/melania-puolo.png',
    quote:
      'Frequentare il Master con Asterys Lab è stata la decisione migliore. Ho apprezzato la qualità umana e professionale dei trainer, il rigore della formazione e le opportunità di mentoring e supervisione.',
    rating: 5,
    cohort: 'La decisione migliore',
  },
  {
    name: 'Tito Bertasi',
    role: 'Coach ACC ICF · Crédit Agricole',
    img: '/testimonials/people/tito-bertasi.png',
    quote:
      'Questo è stato l’anno della mia prima certificazione ICF (ACC). Devo molto ad Asterys e al continuous learning: sono stato seguito e accompagnato in un percorso davvero trasformativo.',
    rating: 5,
    cohort: 'Fino alla prima certificazione ICF',
  },
  {
    name: 'Vincenzo Torcivia',
    role: 'Coach in formazione',
    img: '/testimonials/people/vincenzo-torcivia.png',
    quote:
      'Asterys mi ha accompagnato in un percorso di crescita che ha arricchito prima la persona e poi il professionista. A guidarlo è stata la passione: quella dei docenti e la mia, cresciuta nel tempo.',
    rating: 5,
    cohort: 'Prima la persona, poi il professionista',
  },
  {
    name: 'Anna Tadini',
    role: 'Allieva corsi di coaching',
    img: '/testimonials/people/anna-tadini.png',
    quote:
      'I corsi di coaching di Asterys mi hanno aiutata ad aprire la mente. Docenti di grande valore, capaci di guidare con competenza e umanità. Il punto di forza sono i rapporti costruiti: profondi e autentici.',
    rating: 5,
    cohort: 'Apri la mente',
  },
  {
    name: 'Federico Malagoli',
    role: 'Allievo Master di Coaching',
    img: '/testimonials/people/federico-malagoli.png',
    quote:
      'Tutto è di livello eccellente. I trainer fanno la differenza mettendosi in gioco per primi e lasciando che l’apprendimento emerga dal percorso di ciascuno. Mi porto a casa una trasformazione che non finirà mai.',
    rating: 5,
    cohort: 'Una trasformazione che continua',
  },
  {
    name: 'Silvia Inzolia',
    role: 'Coach in formazione',
    img: '/testimonials/people/silvia-inzolia.png',
    quote:
      'Un’esperienza formativa di altissimo valore, che mi ha trasformata. Docenti seri, qualificati ICF e con esperienza. La consiglio a chi vuole intraprendere il mestiere di coach.',
    rating: 5,
    cohort: 'Trasformati nel coach che vuoi essere',
  },
  {
    name: 'Anita Giordano',
    role: 'Coach in formazione',
    img: '/testimonials/people/anita-giordano.png',
    quote:
      'Accoglienza, metodo, autenticità, professionalità, chiarezza. Sono molto arricchita da questo primo passo nell’essere coach, e ne sono grata.',
    rating: 5,
    cohort: 'Il tuo primo passo da coach',
  },
  {
    name: 'Giulia Gargaglione',
    role: 'Allieva Master di Coaching',
    img: '/testimonials/people/giulia-gargaglione.png',
    quote:
      'Uno spazio sicuro in cui fermarmi, ascoltarmi e rimettere a fuoco tante cose di me e del mio lavoro. Porto con me più fiducia, più consapevolezza e il coraggio di scelte allineate a chi sono.',
    rating: 4,
    cohort: 'Più fiducia, più consapevolezza',
  },
  {
    name: 'Chiara Turra',
    role: 'Allieva percorso di coaching',
    img: '/testimonials/people/chiara-turra.png',
    quote:
      'Approccio molto pratico ed efficace, trainer super qualificati e tante attività che stimolano nuove riflessioni. Consiglio vivamente un percorso con Asterys Lab.',
    rating: 5,
    cohort: 'Pratico, efficace, spendibile',
  },
];
