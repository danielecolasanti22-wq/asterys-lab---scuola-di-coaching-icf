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
    img: '/testimonials/people/melania-puolo.jpg',
    quote:
      'Frequentare il Master con Asterys Lab è stata la decisione migliore. Ho apprezzato la qualità umana e professionale dei trainer, il rigore della formazione e le opportunità di mentoring e supervisione.',
    rating: 5,
    cohort: 'La decisione migliore',
  },
  {
    name: 'Tito Bertasi',
    role: 'Coach ACC ICF · Crédit Agricole',
    img: '/testimonials/people/tito-bertasi.jpg',
    quote:
      'Questo è stato l’anno della mia prima credenziale ICF (ACC). Devo molto ad Asterys Lab e al continuous learning: sono stato seguito e accompagnato in un percorso davvero trasformativo.',
    rating: 5,
    cohort: 'Fino alla prima credenziale ICF',
  },
  {
    name: 'Vincenzo Torcivia',
    role: 'Talent Management & Development',
    img: '/testimonials/people/vincenzo-torcivia.jpg',
    quote:
      'Asterys Lab mi ha accompagnato in un percorso di crescita che ha arricchito prima la persona e poi il professionista. A guidarlo è stata la passione: quella dei docenti e la mia, cresciuta nel tempo.',
    rating: 5,
    cohort: 'Prima la persona, poi il professionista',
  },
  {
    name: 'Federico Malagoli',
    role: 'Consulente · In-training Coach ICF',
    img: '/testimonials/people/federico-malagoli.jpg',
    quote:
      'Tutto è di livello eccellente. I trainer fanno la differenza mettendosi in gioco per primi e lasciando che l’apprendimento emerga dal percorso di ciascuno. Mi porto a casa una trasformazione che non finirà mai.',
    rating: 5,
    cohort: 'Una trasformazione che continua',
  },
  {
    name: 'Silvia Inzolia',
    role: 'Coach in formazione',
    img: '/testimonials/people/silvia-inzolia.jpg',
    quote:
      'Un’esperienza formativa di altissimo valore, che mi ha trasformata. Docenti seri, qualificati ICF e con esperienza. La consiglio a chi vuole intraprendere il mestiere di coach.',
    rating: 5,
    cohort: 'Trasformati nel coach che vuoi essere',
  },
  {
    name: 'Giulia Gargaglione',
    role: 'HR & Change Management · Coaching ICF',
    img: '/testimonials/people/giulia-gargaglione.jpg',
    quote:
      'Uno spazio sicuro in cui fermarmi, ascoltarmi e rimettere a fuoco tante cose di me e del mio lavoro. Porto con me più fiducia, più consapevolezza e il coraggio di scelte allineate a chi sono.',
    rating: 4,
    cohort: 'Più fiducia, più consapevolezza',
  },

  // --- TESTO con foto reale (consenso "foto caricata" — modulo Lascia il segno) ---
  {
    name: 'Grazia Maria Giordano',
    role: 'Business Designer',
    img: '/testimonials/people/grazia-maria-giordano.jpg',
    quote:
      'Non posso che consigliare questo percorso a chi vuole intraprendere una carriera nel coaching, o semplicemente usare le skills del coaching nel lavoro e nella vita: pratico e ricco di spunti.',
    rating: 5,
    cohort: 'Da consigliare senza riserve',
  },
  {
    name: 'Mirko Fabiani',
    role: 'Group HR Director',
    img: '/testimonials/people/mirko-fabiani.jpg',
    quote:
      'Tre giorni in un crescendo di emozioni intense. Mi porto via una certezza: la consapevolezza è il 90% del lavoro.',
    rating: 5,
    cohort: 'La consapevolezza prima di tutto',
  },
  {
    name: 'Francesca Affini',
    role: 'HR Manager',
    img: '/testimonials/people/francesca-affini.jpg',
    quote:
      'Fin dalla prima telefonata ho capito che questa esperienza mi avrebbe cambiato la vita. Un vero spostamento di prospettiva, utile nel lavoro e nella vita personale.',
    rating: 5,
    cohort: 'Un cambio di prospettiva',
  },
  {
    name: 'Alessia L.',
    role: 'Consulente Aziendale',
    img: '/testimonials/people/alessia-l.jpg',
    quote:
      'La visione olistica e la metodologia di Asterys Lab rendono unico questo percorso, con spunti preziosi per la vita personale e professionale.',
    rating: 5,
    cohort: 'Una visione olistica',
  },
  {
    name: 'Marianna Antenucci',
    role: 'HR · Formatrice',
    img: '/testimonials/people/marianna-antenucci.jpg',
    quote:
      'Un percorso coinvolgente sotto molti punti di vista, impegnativo ma potente, dove ho potuto mettermi davvero alla prova.',
    rating: 5,
    cohort: 'Impegnativo ma potente',
  },
  {
    name: 'Silvia Antonella Lapolla',
    role: 'Learning Manager',
    img: '/testimonials/people/silvia-antonella-lapolla.jpg',
    quote:
      'Tre giorni intensi, un forte arricchimento personale e professionale. Mi sono messa fortemente in gioco e ne ho ricavato preziosi insight.',
    rating: 5,
    cohort: 'Mettersi in gioco',
  },
  {
    name: 'Fabio Iannuccilli',
    role: 'Coach in formazione',
    img: '/testimonials/people/fabio-iannuccilli.jpg',
    quote:
      'Non solo nozioni per diventare coach, ma anche crescita personale, grazie alla competenza degli insegnanti e all’ambiente stimolante creato con gli altri partecipanti.',
    rating: 5,
    cohort: 'Competenze e crescita personale',
  },
  {
    name: 'Giulia Zenini',
    role: 'Coach in formazione',
    img: '/testimonials/people/giulia-zenini.jpg',
    quote:
      'Sono entrata con entusiasmo e tanta confusione. Ne esco con più consapevolezza, più forza e uno splendido gruppo al mio fianco.',
    rating: 5,
    cohort: 'Più consapevolezza e forza',
  },
  {
    name: 'Ginevra Arianna',
    role: 'Communication Manager',
    img: '/testimonials/people/ginevra-arianna.jpg',
    quote:
      'Ho trovato un vero “cura-fronto”: un sintonizzarsi sui bisogni e sugli obiettivi di noi studenti, con professionalità ed empatia.',
    rating: 5,
    cohort: 'Professionalità ed empatia',
  },
  {
    name: 'Alessandro Nicolosi',
    role: 'Medico',
    img: '/testimonials/people/alessandro-nicolosi.jpg',
    quote:
      'Cortesia e gentilezza sono state le compagne di viaggio più importanti, insieme alla preparazione e alla professionalità.',
    rating: 5,
    cohort: 'Preparazione e umanità',
  },

  // --- TESTO con foto reale (consenso "LinkedIn" — verificati via profilo/rete Asterys Lab) ---
  {
    name: 'Ilaria Cereda',
    role: 'Retail Director · Business Coach ICF',
    img: '/testimonials/people/ilaria-cereda.jpg',
    quote:
      'Difficile chiamarlo “corso”: è una parola troppo riduttiva per la ricchezza di contenuti, la profondità di cambiamento e l’ispirazione che ti porti a casa. In più, compagni legati da un respiro comune e insegnanti da prendere a esempio.',
    rating: 5,
    cohort: 'Difficile chiamarlo corso',
  },
  {
    name: 'Alessandra Sangiorgi',
    role: 'Coach PCC · Trainer',
    img: '/testimonials/people/alessandra-sangiorgi.jpg',
    quote:
      'Ho fatto diversi master nella mia vita e posso dire senza dubbio che questo è il migliore sul coaching e tra i più formativi, a livello personale e professionale. Organizzazione impeccabile, anche interamente online. Rifarei la stessa scelta.',
    rating: 5,
    cohort: 'Il migliore che abbia fatto',
  },
  {
    name: 'Paola Albanese',
    role: 'Executive Coach ICF · Founder ReYou Global',
    img: '/testimonials/people/paola-albanese.jpg',
    quote:
      'Un percorso che sta trasformando profondamente la mia visione, di me stessa e del mondo. Tre giorni che non sono stati solo formazione, ma un autentico punto di svolta per guardare tutto con occhi diversi.',
    rating: 5,
    cohort: 'Un punto di svolta',
  },
  {
    name: 'Marco Meschini',
    role: 'Psicoterapeuta · Trainer',
    img: '/testimonials/people/marco-meschini.jpg',
    quote:
      'Tra ascolto, accoglienza, incoraggiamento e feedback ho trovato il mio modo di essere coach. Docenti appassionati, generosi e competenti, e tanta bellezza nelle persone con cui ho condiviso il cammino.',
    rating: 5,
    cohort: 'Il mio modo di essere coach',
  },
  {
    name: 'Paola Beschi',
    role: 'Senior HRBP · Coach PCC ICF',
    img: '/testimonials/people/paola-beschi.jpg',
    quote:
      'Quello che si vive in queste giornate di ascolto e riflessione assomiglia a gustare per la prima volta un cibo e scoprire che ci piace. Momenti così sono rari: sono grata a me stessa per essermi iscritta.',
    rating: 5,
    cohort: 'Momenti rari',
  },
  {
    name: 'Chiara Orso Giacone',
    role: 'Packaging Manager · Coach',
    img: '/testimonials/people/chiara-orso-giacone.jpg',
    quote:
      'Ognuno dovrebbe conoscere il coaching e le sue potenzialità. Ho iniziato per lavorare su di me e ora aiuto gli altri a far emergere i loro talenti. Per me è una rivelazione, uno strumento di grande cambiamento.',
    rating: 5,
    cohort: 'Una rivelazione',
  },
  {
    name: 'Nicoletta Stellino',
    role: 'Coach PCC ICF',
    img: '/testimonials/people/nicoletta-stellino.jpg',
    quote:
      'Ero convinta di essere già efficace nel parlare in pubblico. Poi ho sfidato la mia certezza e mi sono messa in gioco: è stato come guardare un cielo stellato a occhio nudo e poi con un telescopio.',
    rating: 5,
    cohort: 'Guardare oltre le certezze',
  },
  {
    name: 'Elsa Karin Pieper',
    role: 'Systemic Team Coach PCC ICF',
    img: '/testimonials/people/elsa-karin-pieper.jpg',
    quote:
      'L’ASTC è stato un’esperienza arricchente e coinvolgente: ne esco con più consapevolezza e sicurezza nell’affrontare i pattern sistemici nei team e nelle organizzazioni. Un training al top, professionalmente e umanamente.',
    rating: 5,
    cohort: 'Un training al top',
  },
  {
    name: 'Stefano Sartor',
    role: 'Imprenditore & Coach',
    img: '/testimonials/people/stefano-sartor.jpg',
    quote:
      'Sono partito per migliorarmi come persona, aumentare la mia leadership imprenditoriale e diventare un coach di alto livello. La consapevolezza acquisita si è vista fuori dal percorso, a ogni step.',
    rating: 5,
    cohort: 'Leadership e consapevolezza',
  },
  {
    name: 'Federico Paparella',
    role: 'Division HR',
    img: '/testimonials/people/federico-paparella.jpg',
    quote:
      'Il modello è solido e ti dà una bussola che ti permette di mollare gli ormeggi senza paura di perderti. Un percorso estremamente soddisfacente, anche a livello personale.',
    rating: 5,
    cohort: 'Una bussola solida',
  },
  {
    name: 'Federica Ghignone',
    role: 'HR Business Partner · Ferrero',
    img: '/testimonials/people/federica-ghignone.jpg',
    quote:
      'Ho apprezzato moltissimo l’attenzione allo sviluppo data dagli insegnanti e il continuo sprone a far crescere il nostro potenziale. Un corso che ti fa crescere nella professione di coach e anche personalmente.',
    rating: 5,
    cohort: 'Cresci come coach e persona',
  },
  {
    name: 'Mariella Pugliesi',
    role: 'Coach ACC ICF · Trainer',
    img: '/testimonials/people/mariella-pugliesi.jpg',
    quote:
      'Il corso e l’esperienza tutta sono stati un viaggio trasformativo di grandissimo valore. Ogni esercizio, ogni condivisione ha portato ricchezza interiore e nuove consapevolezze.',
    rating: 5,
    cohort: 'Un viaggio trasformativo',
  },
  {
    name: 'Giuliano Tarditi',
    role: 'Business & Team Coach · Trainer',
    img: '/testimonials/people/giuliano-tarditi.jpg',
    quote:
      'I docenti sono stati bravissimi ad adeguare i feedback al livello di ciascun partecipante: utilissimi a tutti, dai meno esperti ai più esperti.',
    rating: 5,
    cohort: 'Feedback su misura',
  },
  {
    name: 'Andrea Andretta',
    role: 'Amministratore Delegato',
    img: '/testimonials/people/andrea-andretta.jpg',
    quote:
      'Ho iniziato per migliorare i rapporti con le persone e la mia leadership, come parte di un programma per il team della mia azienda. In soli tre giorni il corso ha profondamente aumentato la consapevolezza.',
    rating: 5,
    cohort: 'Leadership e clima aziendale',
  },
  {
    name: 'Nicolò Martinello',
    role: 'HR Consultant · Trainer & Facilitator ICF',
    img: '/testimonials/people/nicolo-martinello.jpg',
    quote:
      'La vera marcia in più del PFM sono le attività di trasformazione in aula, che portano alla scoperta di nuove consapevolezze legate alle intenzioni dei nostri comportamenti.',
    rating: 5,
    cohort: 'La marcia in più',
  },
  {
    name: 'Roberto Ferri',
    role: 'Chief Commercial Officer',
    img: '/testimonials/people/roberto-ferri.jpg',
    quote:
      'Gli argomenti trattati sono estremamente interessanti e stimolanti, i docenti bravissimi nel creare un ambiente di lavoro accogliente. Un’esperienza intellettuale e umana di grande spessore.',
    rating: 5,
    cohort: 'Intellettuale e umana',
  },
  {
    name: 'Cristina Scapparino',
    role: 'Coach PCC ICF · Consultant',
    img: '/testimonials/people/cristina-scapparino.jpg',
    quote:
      'Un percorso illuminante, più che una classica opportunità di apprendimento. Il coordinamento delle giornate e l’evoluzione del gruppo sono stati orchestrati sapientemente da Alessandra e Pierpaolo.',
    rating: 5,
    cohort: 'Un percorso illuminante',
  },
  {
    name: 'Federica Usberti',
    role: 'Business Unit Manager · Heineken',
    img: '/testimonials/people/federica-usberti.jpg',
    quote:
      'Molto soddisfatta della gestione e della flessibilità nel rimodulare il training. Il gruppo ridotto ha facilitato uno scambio di feedback costante e molto efficace.',
    rating: 5,
    cohort: 'Feedback costante',
  },
  {
    name: 'Gerald Wagner',
    role: 'Senior Consultant',
    img: '/testimonials/people/gerald-wagner.jpg',
    quote:
      'Mi è piaciuto molto per l’accoglienza e la disponibilità del personale e per il supporto immediato su qualsiasi tema. La struttura tra sessioni online, mentor coaching e peer coaching rende il corso molto personale.',
    rating: 5,
    cohort: 'Un corso molto personale',
  },
  {
    name: 'Fabio Bertoloni',
    role: 'National Retail Manager · Nespresso',
    img: '/testimonials/people/fabio-bertoloni.jpg',
    quote:
      'Un corso che ti fa apprendere le tecniche del coaching ed evolvere come persona: dimensione umana e tecnica in equilibrio, per una gentile evoluzione di tutto il sistema persona.',
    rating: 5,
    cohort: 'Persona e tecnica in equilibrio',
  },
  {
    name: 'Michele Stripoli',
    role: 'Customer Experience Manager · Coach PCC ICF',
    img: '/testimonials/people/michele-stripoli.jpg',
    quote:
      'Oltre le mie aspettative. Il livello di coesione tra i partecipanti, sulla base della condivisione autentica di ciò che siamo, non ha pari nei miei ricordi.',
    rating: 5,
    cohort: 'Oltre le aspettative',
  },
  {
    name: 'Fabio Pisi Vitagliano',
    role: 'Executive Coach',
    img: '/testimonials/people/fabio-pisi-vitagliano.jpg',
    quote:
      'Lo stato di presenza dei facilitatori e il clima creato hanno reso le giornate in aula piacevoli e proficue.',
    rating: 5,
    cohort: 'Presenza e clima',
  },
];
