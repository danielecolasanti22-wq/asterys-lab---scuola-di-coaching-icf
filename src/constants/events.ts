export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  /** Etichetta breve usata nelle card (es. "Online (Zoom)") */
  modality: string;
  /** Luogo esteso mostrato nella pagina di dettaglio */
  location: string;
  category: string;
  price: string;
  /** Descrizione breve per card e occhiello */
  desc: string;
  /** Paragrafi descrittivi per la pagina di dettaglio */
  long: string[];
  /** Punti salienti dell'incontro */
  highlights: string[];
  img: string;
};

export const eventsData: EventItem[] = [
  {
    id: 'open-day-master-apcm',
    title: 'Open Day Online: Master in Coaching',
    date: '24 Settembre 2026',
    time: '18:30 – 20:00',
    modality: 'Online (Zoom)',
    location: 'Online · Diretta Zoom',
    category: 'Orientamento',
    price: 'Gratuito',
    desc:
      'Incontra i docenti, scopri il metodo sistemico e ricevi tutte le informazioni sul Master per diventare coach professionista.',
    long: [
      'Un incontro online dedicato a chi vuole capire se la professione di coach fa per sé. Conosci i trainer, il metodo Asterys Lab e ricevi tutte le informazioni sul Master in Coaching, accreditato ICF Level 1 & 2.',
      'È l’occasione per fare domande dirette su programma, calendario, modalità di studio e sbocchi professionali, e per vedere il coaching all’opera con una dimostrazione pratica.',
    ],
    highlights: [
      'La struttura del Master in Coaching e i suoi riconoscimenti ICF',
      'Una dimostrazione live di coaching',
      'Il percorso dalla formazione alla professione',
      'Spazio per domande dirette con i trainer',
    ],
    img: 'https://picsum.photos/seed/event1/1000/750',
  },
  {
    id: 'webinar-cominciare-coaching',
    title: 'Webinar: Come diventare coach nel 2026',
    date: '8 Ottobre 2026',
    time: '14:00 – 15:30',
    modality: 'Webinar Gratuito',
    location: 'Online · Diretta Zoom',
    category: 'Webinar',
    price: 'Gratuito',
    desc:
      'Una panoramica sul mercato del coaching in Italia, le credenziali ICF e i primi passi per avviare la professione.',
    long: [
      'Un webinar pensato per chi si affaccia al mondo del coaching e vuole orientarsi con chiarezza: come funziona la professione oggi in Italia, cosa significano le credenziali ICF e quali sono i passi concreti per iniziare.',
      'Un trainer Asterys Lab condivide esperienza sul campo e risponde alle domande più frequenti di chi sta valutando questo percorso.',
    ],
    highlights: [
      'Lo stato del mercato del coaching in Italia',
      'Cosa sono e a cosa servono le credenziali ICF',
      'I primi passi per avviare la professione',
      'Errori comuni da evitare quando si parte',
    ],
    img: 'https://picsum.photos/seed/event2/1000/750',
  },
  {
    id: 'serata-orientamento-roma',
    title: 'Serata di Orientamento: Coaching & Leadership',
    date: '15 Ottobre 2026',
    time: '19:00 – 21:00',
    modality: 'Presenza (Roma)',
    location: 'Sede di Roma · via del Porto Fluviale 35',
    category: 'Orientamento',
    price: 'Gratuito',
    desc:
      'Un incontro esperienziale nella nostra sede di Roma dedicato a Manager e HR che vogliono scoprire il coaching.',
    long: [
      'Una serata esperienziale nella nostra sede di Roma, dedicata a manager, HR e professionisti che vogliono scoprire come il coaching trasforma il modo di guidare le persone.',
      'Tra pratica guidata e confronto con i trainer, vivrai in prima persona l’approccio Asterys Lab e potrai capire quale percorso è più adatto ai tuoi obiettivi.',
    ],
    highlights: [
      'Un’esperienza pratica di coaching e leadership',
      'Il legame tra intelligenza emotiva e guida dei team',
      'Confronto diretto con i trainer Asterys Lab',
      'Aperitivo di networking a fine serata',
    ],
    img: 'https://picsum.photos/seed/event3/1000/750',
  },
  {
    id: 'hr-summit-systemic',
    title: 'HR Executive Summit: Systemic Team Coaching',
    date: '22 Ottobre 2026',
    time: '09:30 – 13:00',
    modality: 'Presenza (Milano)',
    location: 'Sede di Milano · via Conservatorio 22',
    category: 'Per Aziende',
    price: 'Su invito',
    desc:
      'Evento esclusivo per decision maker: come il team coaching sistemico accelera i risultati aziendali.',
    long: [
      'Un summit riservato a decision maker e leader HR che vogliono capire come il team coaching sistemico accelera i risultati delle organizzazioni.',
      'Attraverso casi reali e il modello sistemico accreditato ICF, esploreremo come allineare i team, sciogliere le dinamiche bloccanti e tradurre la coesione in performance.',
    ],
    highlights: [
      'Il modello di team coaching sistemico',
      'Casi reali di trasformazione organizzativa',
      'Come misurare l’impatto del coaching sui team',
      'Tavola rotonda con HR director e coach senior',
    ],
    img: 'https://picsum.photos/seed/event4/1000/750',
  },
];

export const eventsBySlug: Record<string, EventItem> = Object.fromEntries(
  eventsData.map((e) => [e.id, e]),
);
