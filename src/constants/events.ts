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

// Eventi di esempio (struttura di riferimento). NON pubblicati: al momento 0 eventi in programma.
export const SAMPLE_EVENTS: EventItem[] = [
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
      'In 90 minuti capisci se il coaching fa per te: vedi il metodo sistemico all’opera, conosci i trainer e porti a casa tutte le risposte sul Master per diventare coach professionista.',
    long: [
      'Esci da questo incontro con le idee chiare: capisci se la professione di coach è la tua strada, tocchi con mano il metodo Asterys Lab e conosci i trainer che ti accompagneranno. Ricevi ogni informazione sul Master in Coaching, accreditato ICF Level 1 & 2, senza alcun impegno.',
      'Poni le tue domande dirette su programma, calendario, modalità di studio e sbocchi professionali, e vedi il coaching all’opera con una dimostrazione live: così scegli in autonomia, con tutti gli elementi in mano.',
    ],
    highlights: [
      'Capisci come il Master ti porta dalla formazione al tuo primo cliente',
      'Vedi dal vivo cosa succede in una sessione di coaching',
      'Conosci i trainer ICF che ti seguiranno lungo il percorso',
      'Porti a casa tutte le risposte su tempi, riconoscimenti e sbocchi',
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
      'Ottieni una mappa chiara per iniziare: come funziona il mercato del coaching in Italia, cosa ti danno davvero le credenziali ICF e quali sono i tuoi primi passi concreti.',
    long: [
      'Se stai valutando la professione di coach, esci da questo webinar con una direzione precisa: capisci come funziona il mercato oggi in Italia, cosa significano concretamente le credenziali ICF e quali passi muovere per partire con basi solide.',
      'Un trainer Asterys Lab ti apre l’esperienza sul campo e risponde alle domande di chi, come te, sta decidendo se fare il salto: così eviti gli errori più comuni e parti già con un vantaggio.',
    ],
    highlights: [
      'Ti orienti nel mercato del coaching italiano e capisci dove c’è spazio per te',
      'Sai cosa ti dà una credenziale ICF e perché ti rende spendibile',
      'Ottieni i primi passi concreti per avviare la tua professione',
      'Riconosci in anticipo gli errori che rallentano chi parte',
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
      'Una serata esperienziale a Roma per manager e HR: provi il coaching in prima persona e scopri come cambia il tuo modo di guidare le persone.',
    long: [
      'Se guidi persone o team, questa serata a Roma ti fa vivere in prima persona come il coaching trasforma il tuo modo di essere leader. Un’esperienza pratica, non una presentazione: metti alla prova l’approccio Asterys Lab e ne senti subito l’effetto.',
      'Tra pratica guidata e confronto diretto con i trainer, capisci quale percorso è più adatto ai tuoi obiettivi e porti a casa strumenti che puoi usare già dal giorno dopo.',
    ],
    highlights: [
      'Sperimenti dal vivo cosa significa guidare con il coaching',
      'Scopri come usare le emozioni per far crescere i tuoi team',
      'Ti confronti di persona con i trainer Asterys Lab',
      'Allarghi la tua rete all’aperitivo di networking finale',
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
      'Un summit riservato ai decision maker per capire come usare il team coaching sistemico e accelerare i risultati della tua organizzazione.',
    long: [
      'Se guidi le persone di un’organizzazione, questo summit ti mostra come il team coaching sistemico accelera i risultati: uno spazio riservato a decision maker e leader HR per confrontarti al tuo livello.',
      'Con casi reali e il modello sistemico accreditato ICF, porti a casa un metodo per allineare i team, sciogliere le dinamiche bloccanti e trasformare la coesione in performance misurabile.',
    ],
    highlights: [
      'Ottieni un modello concreto di team coaching sistemico',
      'Vedi cosa cambia davvero attraverso casi reali di trasformazione',
      'Impari a misurare l’impatto del coaching sui tuoi team',
      'Ti confronti con HR director e coach senior alla tavola rotonda',
    ],
    img: 'https://picsum.photos/seed/event4/1000/750',
  },
];

// Lista LIVE usata dal sito. Vuota = nessun evento in programma (la pagina Eventi mostra lo stato vuoto).
// Per pubblicare eventi: copia qui gli oggetti (vedi SAMPLE_EVENTS sopra).
export const eventsData: EventItem[] = [];

export const eventsBySlug: Record<string, EventItem> = Object.fromEntries(
  eventsData.map((e) => [e.id, e]),
);
