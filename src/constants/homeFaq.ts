// FAQ della Home — UNICA fonte di verità, condivisa tra:
//  - la sezione "Domande frequenti" visibile in src/pages/Home.tsx
//  - il blocco FAQPage JSON-LD in src/constants/seo.ts
// Il testo strutturato DEVE coincidere con quello a schermo (requisito rich result FAQ),
// quindi teniamo una sola lista qui e la importiamo in entrambi i punti.
export const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: 'Come si diventa coach professionista accreditato ICF?',
    a: 'Serve una formazione accreditata ICF e tanta pratica reale. Con il Master in Coaching di Asterys Lab, accreditato ICF Level 1 & 2, acquisisci metodo, ore di pratica guidata e mentoring per accreditarti come coach ACC o PCC, riconosciuto in Italia e nel mondo.',
  },
  {
    q: 'Quanto dura il percorso per diventare coach?',
    a: 'Il Master in Coaching dura dai 6 ai 12 mesi, in formato blended: lezioni live online e in presenza a Milano e Roma. Puoi anche iniziare con corsi brevi e formazione continua, e crescere passo dopo passo.',
  },
  {
    q: 'Il coaching è utile anche se non voglio fare il coach di professione?',
    a: 'Sì. I percorsi sviluppano ascolto, leadership e gestione delle relazioni: competenze che fanno la differenza per manager, HR, imprenditori e professionisti che vogliono far crescere persone e team.',
  },
  {
    q: 'Posso pagare a rate?',
    a: 'Sì: i percorsi principali sono rateizzabili fino a 24 mesi. Parla con un Advisor e trovate insieme la soluzione più sostenibile per te.',
  },
  {
    q: 'Dove si svolgono le lezioni?',
    a: 'Le lezioni sono in diretta online e in presenza nelle sedi di Milano e Roma. La maggior parte del percorso è fruibile ovunque tu sia.',
  },
  {
    q: 'Quali credenziali ICF posso ottenere?',
    a: 'In base al percorso: ACC e PCC per il coaching individuale, ACTC per il team coaching, oltre ai crediti CCE utili per il rinnovo delle credenziali.',
  },
];
