export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  img: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "come-diventare-coach-professionista-in-italia",
    "title": "Come diventare coach professionista in Italia: la guida completa",
    "excerpt": "Cosa serve davvero per diventare coach: formazione accreditata ICF, ore di pratica, mentor coaching e credenziale. Passi, tempi, costi e come scegliere la scuola.",
    "category": "Diventare coach",
    "date": "11 novembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "8 min",
    "img": "/blog/come-diventare-coach-professionista-in-italia.jpg",
    "content": [
      {
        "type": "p",
        "text": "Per diventare coach professionista in Italia servono tre cose: una formazione accreditata (idealmente ICF, lo standard internazionale di riferimento), un monte ore di pratica reale di coaching e una credenziale che certifichi le competenze. Non esiste un albo né un’abilitazione di Stato: la professione è regolata dalla Legge 4/2013 e a fare la differenza sono la qualità della formazione e le credenziali riconosciute. In questa guida vediamo, passo per passo, come arrivarci."
      },
      {
        "type": "h2",
        "text": "Cosa fa (e cosa non fa) un coach"
      },
      {
        "type": "p",
        "text": "Il coach accompagna una persona o un team a generare consapevolezza, definire obiettivi e individuare azioni concrete, senza sostituirsi a loro e senza dare consigli da esperto. Si distingue da consulenza, formazione, mentoring e psicoterapia: il coaching lavora sul presente e sul futuro, attraverso domande potenti, ascolto profondo e una relazione professionale basata su un codice etico. È una professione della relazione, non una semplice raccolta di tecniche."
      },
      {
        "type": "h2",
        "text": "Serve la laurea per diventare coach?"
      },
      {
        "type": "p",
        "text": "No, non è richiesta una laurea specifica. Possono diventare coach persone con percorsi molto diversi: chi arriva dall’università, ma anche chi lavora già in ambito HR, consulenza, management o nella relazione di aiuto e vuole integrare il coaching nella propria professione. Contano molto di più la maturità professionale, la motivazione e un percorso formativo serio e accreditato."
      },
      {
        "type": "h2",
        "text": "I passi per diventare coach professionista"
      },
      {
        "type": "list",
        "items": [
          "Scegli un percorso formativo accreditato ICF (Level 1 per la credenziale ACC, Level 1 & 2 per arrivare alla PCC).",
          "Studia il metodo: competenze chiave ICF, codice etico, ascolto, domande potenti, intelligenza emotiva.",
          "Fai pratica reale: accumula ore di coaching con clienti veri, documentandole con cura.",
          "Completa il mentor coaching: almeno 10 ore con un mentor coach accreditato, distribuite su più mesi.",
          "Sostieni l’assessment e l’esame ICF e richiedi la credenziale (ACC, poi PCC)."
        ]
      },
      {
        "type": "h2",
        "text": "Quanto dura e quanto costa"
      },
      {
        "type": "p",
        "text": "Un percorso completo per diventare coach accreditato richiede in genere dai 6 mesi a un paio d’anni, a seconda del livello (ACC o PCC) e del ritmo con cui accumuli le ore di pratica. I costi della formazione variano molto in base all’accreditamento e alla durata: orientativamente da poche migliaia di euro per un Level 1 fino a percorsi più strutturati di Level 1 & 2. È un investimento sulla professione: la differenza la fanno la qualità del metodo e del corpo docente."
      },
      {
        "type": "h2",
        "text": "Come scegliere la scuola di coaching"
      },
      {
        "type": "p",
        "text": "I criteri che contano davvero: l’accreditamento (ICF Level 1 o 2), il livello dei trainer (credenziali PCC e MCC), la quantità di pratica supervisionata, l’attenzione al codice etico e una community che resti accessibile anche dopo il corso. Diffida dei percorsi “lampo” senza pratica reale: il coaching si impara facendolo, con il feedback di un mentor."
      },
      {
        "type": "h2",
        "text": "Dove può lavorare un coach"
      },
      {
        "type": "p",
        "text": "Coach professionista indipendente, executive e business coach in azienda, team coach, coach a supporto di HR e manager, oppure professionista che integra il coaching nel proprio lavoro. Le nicchie più richieste in Italia sono business coaching (con le tariffe più alte), career, life e wellness coaching. Per chi vuole specializzarsi sui team esiste il percorso di team coaching sistemico."
      },
      {
        "type": "p",
        "text": "Diventare coach è un percorso di crescita, prima ancora che professionale. Se vuoi partire con basi solide e riconosciute, il punto di partenza è una scuola accreditata ICF: il Master in Coaching Professionale di Asterys Lab forma coach accreditati ICF (Level 1 & 2) a Milano, Roma e online."
      }
    ]
  },
  {
    "slug": "quanto-guadagna-e-quanto-costa-diventare-coach-in-italia",
    "title": "Quanto guadagna e quanto costa diventare coach in Italia",
    "excerpt": "Tariffe, redditi e costi reali della professione di coach in Italia: quanto si guadagna, quanto costa la formazione e quando conviene davvero.",
    "category": "Professione coaching",
    "date": "8 novembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "6 min",
    "img": "/blog/quanto-guadagna-e-quanto-costa-diventare-coach-in-italia.png",
    "content": [
      {
        "type": "p",
        "text": "Quanto guadagna un coach in Italia? Il reddito medio di un coach professionista si aggira intorno ai 30.000 euro l’anno, ma la forbice è ampia: chi ha più di cinque anni di esperienza e una solida reputazione può arrivare a tariffe di 150–200 euro l’ora. La verità da conoscere prima di partire è un’altra: solo una piccola parte dei coach vive esclusivamente di coaching, mentre la maggioranza lo integra con altre professioni (HR, consulenza, formazione, management)."
      },
      {
        "type": "h2",
        "text": "Quanto si guadagna davvero"
      },
      {
        "type": "p",
        "text": "Le tariffe dipendono da nicchia, esperienza e tipo di cliente. Il business e l’executive coaching, rivolti ad aziende e manager, hanno le tariffe più alte; life e career coaching, rivolti ai privati, partono in genere da cifre più contenute. Lavorare con le imprese — che oggi richiedono direttamente gran parte delle prestazioni di coaching — è la strada con il potenziale economico maggiore."
      },
      {
        "type": "h2",
        "text": "Quanto costa la formazione"
      },
      {
        "type": "p",
        "text": "Il costo di un percorso di coaching accreditato varia in base all’accreditamento (ICF Level 1 o 2) e alla durata: si va da percorsi base di alcune migliaia di euro fino a master più completi di Level 1 & 2. Spesso sono previste rateizzazioni e, in alcuni casi, condizioni Early Bird o borse di studio. Conviene valutare il costo in rapporto a ciò che include: ore di formazione, pratica supervisionata, mentor coaching e accompagnamento alla credenziale."
      },
      {
        "type": "h2",
        "text": "Conviene diventare coach?"
      },
      {
        "type": "p",
        "text": "Conviene se lo vedi come una professione da costruire nel tempo, non come un guadagno facile e immediato. Chi ottiene risultati combina tre elementi: una formazione seria e accreditata, una nicchia chiara (meglio se ad alto valore, come il business coaching) e un lavoro costante sul proprio posizionamento. Il mercato del coaching in Italia è in crescita e la domanda delle aziende aumenta: c’è spazio, ma per chi è preparato."
      },
      {
        "type": "p",
        "text": "Il modo migliore per rendere sostenibile l’investimento è scegliere un percorso che ti porti fino alla credenziale e ti dia pratica reale: il Master in Coaching Professionale di Asterys Lab è accreditato ICF (Level 1 & 2) e prepara alle credenziali ACC e PCC, con rateizzazione fino a 24 mesi."
      }
    ]
  },
  {
    "slug": "come-scegliere-una-scuola-di-coaching-accreditata-icf",
    "title": "Come scegliere una scuola di coaching accreditata ICF",
    "excerpt": "Accreditamento, trainer, pratica supervisionata, metodo: i criteri concreti per scegliere una scuola di coaching seria ed evitare i percorsi “lampo”.",
    "category": "Diventare coach",
    "date": "4 novembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "7 min",
    "img": "/blog/come-scegliere-una-scuola-di-coaching-accreditata-icf.png",
    "content": [
      {
        "type": "p",
        "text": "Per scegliere una buona scuola di coaching conta soprattutto una cosa: l’accreditamento. In Italia la professione non ha un albo, quindi la qualità la garantiscono gli enti riconosciuti — in primis ICF (International Coaching Federation), lo standard internazionale. Una scuola accreditata ICF (Level 1 o Level 2) garantisce ore di formazione, pratica e mentor coaching verificate e un percorso che porta a credenziali spendibili in tutto il mondo. Oltre all’accreditamento, però, ci sono altri criteri da valutare."
      },
      {
        "type": "h2",
        "text": "Verifica l’accreditamento (Level 1 o Level 2)"
      },
      {
        "type": "p",
        "text": "Il Level 1 prepara alla prima credenziale (ACC), il Level 2 a quella professionale (PCC). Controlla che la scuola sia nell’elenco ufficiale delle scuole accreditate ICF: è il primo filtro di affidabilità. Diffida di chi promette di “diventare coach” senza un percorso accreditato e senza pratica reale."
      },
      {
        "type": "h2",
        "text": "Guarda il livello dei trainer"
      },
      {
        "type": "p",
        "text": "Chi insegna fa la differenza. Cerca trainer con credenziali alte (PCC e MCC) e anni di esperienza reale sul campo, non solo teorica. Un corpo docente con credenziali Master Certified Coach è un segnale forte di qualità del metodo."
      },
      {
        "type": "h2",
        "text": "Quanta pratica supervisionata offre"
      },
      {
        "type": "p",
        "text": "Il coaching si impara facendolo. Una scuola seria prevede molta pratica supervisionata, feedback puntuale e mentor coaching: sono le ore che ti formano davvero e che ti servono anche per la credenziale. Valuta quanta pratica è inclusa rispetto alle ore di sola teoria."
      },
      {
        "type": "h2",
        "text": "Metodo, etica e community"
      },
      {
        "type": "list",
        "items": [
          "Un metodo chiaro e riconoscibile, allineato alle competenze chiave e al codice etico ICF.",
          "Attenzione all’intelligenza emotiva e, se ti interessano i team, all’approccio sistemico.",
          "Una community di alumni e occasioni di confronto che restano accessibili anche dopo il corso.",
          "Trasparenza su programma, durata, costi e accompagnamento alla credenziale."
        ]
      },
      {
        "type": "h2",
        "text": "Online, in aula o ibrido?"
      },
      {
        "type": "p",
        "text": "Non esiste un formato “migliore” in assoluto: conta la qualità dell’interazione. I percorsi in diretta (in aula o in videoconferenza) con pratica guidata e feedback dei trainer offrono il miglior equilibrio tra flessibilità e profondità. Valuta anche la presenza di sedi (es. Milano e Roma) se preferisci momenti in presenza."
      },
      {
        "type": "p",
        "text": "Asterys Lab è una scuola di coaching accreditata ICF (Level 1 & 2): il Master in Coaching Professionale forma coach accreditati con metodo, intelligenza emotiva, approccio sistemico e pratica supervisionata, a Milano, Roma e online."
      }
    ]
  },
  {
    "slug": "rinnovo-credenziale-icf-cce-e-mentor-coaching",
    "title": "Rinnovo della credenziale ICF: come funziona (CCE e mentor coaching)",
    "excerpt": "Le credenziali ICF si rinnovano ogni 3 anni con 40 CCE. Cosa contano, quante ore di mentor coaching servono e come maturarle in gruppo o individuale.",
    "category": "Credenziali ICF",
    "date": "1 novembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "6 min",
    "img": "/blog/rinnovo-credenziale-icf-cce-e-mentor-coaching.png",
    "content": [
      {
        "type": "p",
        "text": "Le credenziali ICF (ACC, PCC, MCC) hanno validità triennale e si rinnovano accumulando 40 unità di formazione continua (CCE – Continuing Coach Education) ogni tre anni. Le CCE si dividono in due tipi: almeno 24 di “Core Competency” (sulle competenze chiave del coaching) e fino a 13 di “Resource Development”, più 3 ore obbligatorie di etica. Vediamo nel dettaglio cosa serve e dove rientra il mentor coaching."
      },
      {
        "type": "h2",
        "text": "Quante CCE servono e di che tipo"
      },
      {
        "type": "p",
        "text": "Il totale è 40 CCE ogni tre anni: 24 Core Competency, fino a 13 Resource Development e 3 di Ethics. Le maturi partecipando a corsi, workshop e attività formative qualificate. Tenere viva e aggiornata la propria pratica non è un adempimento burocratico: è ciò che mantiene alta la qualità del lavoro con i clienti."
      },
      {
        "type": "h2",
        "text": "Il ruolo del mentor coaching"
      },
      {
        "type": "p",
        "text": "Per chi ha la credenziale ACC il rinnovo richiede 10 ore di mentor coaching, di cui almeno 3 individuali; per PCC e MCC il mentor coaching non è obbligatorio al rinnovo, ma fino a 10 ore possono comunque contare come CCE Core Competency. In tutti i casi, il mentor coaching è un’occasione preziosa di crescita: ricevi feedback da un mentor accreditato sulla tua pratica reale."
      },
      {
        "type": "h2",
        "text": "Come maturare le ore: gruppo o individuale"
      },
      {
        "type": "p",
        "text": "Le ore di mentor coaching si possono fare in gruppo o individualmente. Il mentor coaching di gruppo è pratica supervisionata in piccoli gruppi, con feedback di un Mentor Coach; quello individuale è un percorso one-to-one. Spesso la soluzione più efficiente per arrivare alle 10 ore è combinarli: una parte in gruppo e una parte individuale."
      },
      {
        "type": "p",
        "text": "Se devi rinnovare la tua credenziale o maturare le ore di mentor coaching, Asterys Lab offre percorsi di mentoring di gruppo e individuale con un Mentor Coach MCC, pensati proprio per arrivare alle 10 ore richieste dal rinnovo ICF."
      }
    ]
  },
  {
    "slug": "credenziali-icf-cosa-sono-a-cosa-servono-e-come-ottenerle",
    "title": "Credenziali ICF: cosa sono, a cosa servono e come ottenerle",
    "excerpt": "Una guida alle credenziali della International Coaching Federation: cosa sono, i tre livelli ACC, PCC e MCC, i requisiti per ottenerle e come prepararsi al meglio.",
    "category": "Credenziali ICF",
    "date": "28 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/credenziali-icf-cosa-sono-a-cosa-servono-e-come-ottenerle.png",
    "content": [
      {
        "type": "p",
        "text": "Ottenere una credenziale ICF (International Coaching Federation) non è solo un titolo da aggiungere al curriculum: è un passo concreto per chi vuole esercitare la professione di coach con credibilità, competenza e un riconoscimento che vale in tutto il mondo."
      },
      {
        "type": "p",
        "text": "In questo articolo ti guidiamo attraverso tutto quello che devi sapere:"
      },
      {
        "type": "list",
        "items": [
          "Cosa sono le credenziali ICF",
          "Quali sono i livelli disponibili (ACC, PCC, MCC)",
          "Cosa serve per ottenerle",
          "Come prepararti al meglio",
          "In che modo Asterys Lab può accompagnarti in questo percorso"
        ]
      },
      {
        "type": "h2",
        "text": "Cosa sono le credenziali ICF?"
      },
      {
        "type": "p",
        "text": "Le credenziali ICF sono un riconoscimento ufficiale rilasciato dalla più importante associazione mondiale di coaching: l’International Coaching Federation."
      },
      {
        "type": "p",
        "text": "Rappresentano una garanzia di professionalità, basata su standard rigorosi di formazione, pratica e supervisione, riconosciuti a livello globale."
      },
      {
        "type": "p",
        "text": "Avere una credenziale significa essere identificato come coach professionista, sia in Italia che all’estero, e poter operare con una base solida di competenze verificate."
      },
      {
        "type": "h2",
        "text": "I tre livelli di credenziali ICF"
      },
      {
        "type": "p",
        "text": "ACC – Associate Certified Coach"
      },
      {
        "type": "p",
        "text": "È la prima credenziale ufficiale. Attesta che sei un coach competente, con una solida base di esperienza."
      },
      {
        "type": "p",
        "text": "Requisiti principali:"
      },
      {
        "type": "list",
        "items": [
          "60 ore di formazione (in un programma Level 1 o ACSTH)",
          "100 ore di coaching (di cui almeno 75 a pagamento)",
          "10 ore di mentor coaching",
          "Registrazione audio e trascrizione per l’assessment",
          "Superamento dell’esame ICF ACC exam"
        ]
      },
      {
        "type": "p",
        "text": "PCC – Professional Certified Coach"
      },
      {
        "type": "p",
        "text": "È il livello intermedio e la credenziale di riferimento per chi lavora stabilmente come coach. Dimostra una padronanza avanzata delle competenze ICF."
      },
      {
        "type": "p",
        "text": "Requisiti principali:"
      },
      {
        "type": "list",
        "items": [
          "125 ore di formazione (Level 2 o ACTP/ACSTH + Level 1)",
          "500 ore di coaching (di cui almeno 450 a pagamento)",
          "10 ore di mentor coaching (con un coach PCC o MCC)",
          "2 sessioni registrate da sottoporre a valutazione (più approfondita rispetto all’ACC)",
          "Superamento dell’esame ICF PCC exam"
        ]
      },
      {
        "type": "p",
        "text": "MCC – Master Certified Coach"
      },
      {
        "type": "p",
        "text": "È la credenziale più alta e prestigiosa. Rappresenta la maestria nel coaching ed è richiesta in contesti di executive e team coaching di alto livello."
      },
      {
        "type": "p",
        "text": "Requisiti principali:"
      },
      {
        "type": "list",
        "items": [
          "200 ore di formazione (livello avanzato)",
          "2.500 ore di coaching (con almeno 35 clienti diversi)",
          "10 ore di mentor coaching con un MCC",
          "2 sessioni audio e trascrizione da valutare",
          "Superamento dell’esame ICF MCC exam"
        ]
      },
      {
        "type": "h2",
        "text": "Quando richiederle?"
      },
      {
        "type": "p",
        "text": "Puoi richiedere la credenziale dopo aver completato il percorso di formazione e accumulato le ore di coaching necessarie."
      },
      {
        "type": "p",
        "text": "Molti coach iniziano con l’ACC per poi proseguire verso la PCC una volta maturata maggiore esperienza sul campo."
      },
      {
        "type": "h2",
        "text": "Come prepararti al meglio?"
      },
      {
        "type": "p",
        "text": "Ecco alcuni consigli pratici:"
      },
      {
        "type": "list",
        "items": [
          "Scegli un percorso formativo accreditato (Level 1 o Level 2)",
          "Documenta accuratamente le tue ore di coaching: usa fogli di calcolo o strumenti di tracciamento dedicati",
          "Registra sessioni reali: ti serviranno per l’assessment",
          "Trova un mentor coach accreditato (PCC o MCC) che ti segua per almeno 10 ore",
          "Preparati all’esame: è teorico, ma richiede una conoscenza approfondita delle competenze core, del codice etico e della definizione di coaching secondo ICF"
        ]
      },
      {
        "type": "h2",
        "text": "Alcuni dettagli importanti"
      },
      {
        "type": "list",
        "items": [
          "Il mentor coaching deve essere distribuito su almeno 3 mesi",
          "Le sessioni registrate devono rispettare il codice etico ICF (consenso informato, privacy, qualità audio adeguata)",
          "L’esame ICF ACC/PCC/MCC si svolge online, contiene domande a risposta multipla e dura circa 3 ore",
          "Le credenziali hanno validità triennale e possono essere rinnovate attraverso la formazione continua (CCE – Continuing Coach Education)"
        ]
      },
      {
        "type": "h2",
        "text": "In conclusione"
      },
      {
        "type": "p",
        "text": "Richiedere una credenziale ICF non è solo un adempimento burocratico. È un atto di responsabilità verso te stesso e verso chi sceglierà di affidarsi a te, ed è parte di un percorso professionale serio e riconoscibile."
      },
      {
        "type": "p",
        "text": "Se vuoi fare del coaching la tua professione in modo autentico e qualificato, le credenziali ICF sono il tuo prossimo passo naturale."
      }
    ]
  },
  {
    "slug": "serendipita-e-coaching-il-segreto-che-arriva-per-caso",
    "title": "Serendipità e Coaching – Il segreto che arriva per caso",
    "excerpt": "La serendipità non è semplice fortuna, ma l'incontro tra il caso e una mente preparata. Una riflessione su come questa capacità di vedere l'opportunità nell'imprevisto assomigli al coaching.",
    "category": "Coaching",
    "date": "25 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/serendipita-e-coaching-il-segreto-che-arriva-per-caso.jpg",
    "content": [
      {
        "type": "p",
        "text": "Sono diversi anni che seguo con grande interesse il Festival della Mente, che ogni anno porta a Sarzana voci nuove, idee sorprendenti e temi capaci di aprire nuove strade dentro di noi. Questo Festival è nato nel 2004 ed è diventato un appuntamento fisso, con tre giornate dedicate alla creatività, alla filosofia, alla scienza e alla cultura in generale. L’edizione del 2020 aveva come filo conduttore il “sogno”."
      },
      {
        "type": "p",
        "text": "Ricordo bene quel periodo perché avevo appena iniziato a lavorare seriamente come coach e qualunque cosa ascoltassi mi sembrava subito collegata al coaching. Forse capita anche a te, quando inizi un percorso nuovo e tutto sembra rimandare lì, come se il mondo intero avesse deciso di parlarti nella stessa lingua. Ero piena di entusiasmo, pronta a muovere i primi passi in una professione che mette al centro le persone, i loro desideri, i loro limiti e le possibilità di crescita."
      },
      {
        "type": "p",
        "text": "Quando ascoltai la lezione di Telmo Pievani sul segreto della serendipità, mi accorsi che non stava parlando solo di scienza o filosofia: in qualche modo, parlava anche a me e al mio nuovo lavoro. Pievani spiegò che la serendipità non è semplice fortuna. Non è inciampare per caso in un tesoro nascosto, ma piuttosto l’incontro tra il caso e una mente preparata. È come camminare sulla spiaggia dopo una mareggiata: la sabbia è piena di conchiglie, alghe e sassi, ma solo chi sa guardare con attenzione riconosce quella piccola pietra rara mimetizzata tra mille frammenti. La serendipità è questo: la capacità di vedere l’opportunità nell’imprevisto."
      },
      {
        "type": "p",
        "text": "Mi colpì molto, perché anche il coaching funziona così. Non offre risposte già pronte, ma crea spazi in cui le persone possono scoprire da sole nuove possibilità, magari partendo da un inciampo o da un momento difficile. Pievani parlava dell’importanza di non temere l’errore, di saper osservare le anomalie, perché proprio lì spesso nascono le scoperte. Quante volte ho incontrato clienti convinti che un fallimento li definisse per sempre, e invece proprio da lì, con pazienza e ascolto, sono riusciti a intravedere una nuova direzione."
      },
      {
        "type": "p",
        "text": "Un altro aspetto che mi colpì fu quando disse che la serendipità ama la lentezza. Non si lascia catturare da chi corre solo verso il risultato immediato, ma ha bisogno di spazio, di tempo, di dialogo. Anche nel coaching accade così: in quell’incontro sospeso, in un silenzio improvviso o in una parola inattesa, può emergere una rivelazione che nessuno dei due aveva previsto."
      },
      {
        "type": "p",
        "text": "Da allora ho capito che la serendipità non riguarda solo la scienza: riguarda la vita, le relazioni, i percorsi interiori. È un allenamento a guardare diversamente, a restare aperte al fatto che l’inaspettato possa diventare dono. La serendipità, un po’ come il coaching, non è mai un dono che arriva dall’esterno: è piuttosto un terreno fertile che si prepara con ascolto, attenzione e apertura. Le condizioni giuste permettono a ciascuno di riconoscere da sé la propria pietra nascosta. E se ci ho messo cinque anni a scrivere queste righe, forse è proprio perché quelle parole di Pievani sono rimaste a decantare dentro di me. Un po’ come certe bottiglie di vino che migliorano con il tempo, anche le intuizioni hanno bisogno di riposare, di sedimentare, per poi tornare a galla più limpide e luminose."
      },
      {
        "type": "p",
        "text": "Oggi, ogni volta che accompagno qualcuno nel suo cammino, mi ricordo che l’imprevisto può essere la porta più grande. E penso che, in fondo, il vero segreto della serendipità e del coaching, sia saperci sorprendere ancora."
      }
    ]
  },
  {
    "slug": "non-ce-punto-di-saturazione-nella-formazione",
    "title": "Non c’è punto di saturazione nella formazione",
    "excerpt": "Non esiste successo, professionale o personale, senza il desiderio di imparare e crescere. Una riflessione sul valore della formazione continua e della cultura dell'apprendimento.",
    "category": "Formazione continua",
    "date": "21 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "2 min",
    "img": "/blog/non-ce-punto-di-saturazione-nella-formazione.jpg",
    "content": [
      {
        "type": "p",
        "text": "Ho recentemente letto un articolo sul sito di IBM, nella sezione History, che ha ispirato il mio continuo desiderio di imparare cose nuove e che viene purtroppo, a volte, anzi, troppo spesso, frenato o frustrato dal poco tempo che ho a disposizione."
      },
      {
        "type": "p",
        "text": "In questo articolo si racconta che nel 1915, Thomas J. Watson Sr. tenne un discorso a 235 dipendenti della Computing-Tabulating-Recording Company. Con un pezzo di gesso e una lavagna, illustrò una delle sue teorie sull’istruzione. Una di quelle teorie che, sulla carta, tutti approvano e condividono pienamente, ma che poi, appunto, rimangono solo sulla carta."
      },
      {
        "type": "p",
        "text": "Tutti i dipendenti, egli disse, che fossero addetti alle vendite, all’assistenza o alla gestione, sono uguali. I titoli sono irrilevanti. Il successo in qualsiasi ruolo, e negli affari in generale, dipende dal desiderio di svilupparsi e di imparare."
      },
      {
        "type": "p",
        "text": "Ecco, ho pensato! Non c’è successo nel proprio lavoro, vita privata o professionale, senza il desiderio di imparare, di crescere e di uscire dal guscio protettivo della propria “ignoranza”, senza la volontà di mettersi in discussione e portare così valore nel proprio ambiente di lavoro, familiare e sociale.L’articolo prosegue dicendo che durante il suo lungo mandato alla guida dell’azienda che sarebbe diventata IBM, Watson promosse sempre di più l’importanza della formazione.Questa convinzione è la stessa con cui mi sono approcciata, tanti anni fa, al mondo della formazione per dedicarmi allo studio di come si apprende, per aiutare me stessa ma anche gli altri a crescere ed emanciparsi da schemi di comportamento dettati dalla “non conoscenza”."
      },
      {
        "type": "p",
        "text": "Watson la sfruttò per migliorare l’efficienza e l’impegno della sua forza lavoro ma soprattutto per espandere l’interesse e la consapevolezza culturale dei suoi dipendenti.Negli anni ho, di fatto, potuto osservare che nelle organizzazioni dove sia diffusa questa cultura e dove venga implementato un modello di formazione continua, il clima che si respira è sempre ispirazionale in un flusso di condivisione e arricchimento incessante."
      },
      {
        "type": "p",
        "text": "Non c’è, appunto, un punto di saturazione nell’apprendimento. Parole di Watson non mie."
      },
      {
        "type": "p",
        "text": "Watson si rese, dunque famoso per la sua tendenza a paragonare le riunioni alle aule scolastiche, tanto che, una volta, fu descritto come “non tanto un grande dirigente quanto un grande insegnante, un grande educatore”.Watson ha guidato una cultura in cui l’apprendimento non fosse solo sostenuto e incoraggiato, ma anche celebrato e considerato prioritario."
      },
      {
        "type": "p",
        "text": "Con questa stessa aspirazione, in Asterys Lab, continuiamo a formarci, a crescere e spinti dal desiderio di condivisione delle nostre nuove conoscenze e riflessioni pensiamo che anche altri possano beneficiare dei nostri sforzi, per questo abbiamo approntato programmi di apprendimento continuo fruibili facilmente da tutti coloro che abbiano voglia di crescere imparare, riflettere insieme ad altre persone ma non possono impegnarsi per troppo tempo e lunghi periodi tempo."
      }
    ]
  },
  {
    "slug": "il-potere-della-voce",
    "title": "Il potere della voce",
    "excerpt": "La voce è il nostro principale mezzo per esprimere le emozioni e influenza chi ci ascolta. Perché per un coach imparare a usarla con consapevolezza può fare la differenza.",
    "category": "Coaching",
    "date": "18 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/il-potere-della-voce.jpg",
    "content": [
      {
        "type": "p",
        "text": "Il mio percorso di coaching ha avuto origine dal mio lavoro precedente. Per molti anni ho insegnato canto, stabilendo con i miei allievi un rapporto profondo e duraturo. Ho seguito la loro crescita personale e li ho accompagnati nelle loro scelte artistiche. Poi, ho sentito l’istinto di fare di più o, comunque, di fare in modo diverso, così mi sono avvicinata al coaching. Durante il mio primo periodo di formazione, mentre ero a contatto con i miei colleghi durante le sessioni pratiche, ho immediatamente compreso il potere della nostra voce sul cliente. Mi accorgo di riuscire a percepire distintamente le reazioni dei clienti di fronte a tonalità vocali diverse."
      },
      {
        "type": "p",
        "text": "La voce è il nostro principale mezzo di espressione delle emozioni, un incantevole strumento dell’anima che danza tra i meandri del nostro cervello come una melodia senza fine. Ogni tono, ogni timbro, ogni intonazione è una nota nella partitura della nostra vita. Naturalmente, trasmettiamo emozioni e sfumature emotive attraverso variazioni nell’intonazione, nel timbro e nel ritmo."
      },
      {
        "type": "p",
        "text": "Un bambino si fa ascoltare con il suo grido alla vita prima ancora di toccare la mamma. Esprimiamo i nostri pensieri attraverso la voce fornendo, a chi ci ascolta, un’idea di noi spesso diversa dall’immagine che abbiamo di noi stessi. La voce veicola i nostri pensieri e le nostre parole, anche quelle che ripetiamo senza consapevolezza e le parole che ascoltiamo influenzano le nostre opinioni, decisioni e comportamenti, nonché la nostra autostima e la percezione di noi stessi. Questo può avere un impatto positivo o negativo a seconda del contesto e del tipo di influenza."
      },
      {
        "type": "p",
        "text": "Queste caratteristiche emotive della voce vengono elaborate in regioni del cervello associate alla percezione emotiva come l’amigdala e la corteccia prefrontale. Quando ascoltiamo una voce carica di emozione, queste regioni del cervello possono attivarsi per interpretare e rispondere alle sfumature emotive della comunicazione vocale. Ritengo che l’ascolto della voce di una persona familiare possa attivare anche le regioni del cervello associate alla memoria e al riconoscimento facciale, contribuendo a rafforzare il legame emotivo con quella persona."
      },
      {
        "type": "p",
        "text": "Penso che chiunque lavori con la voce come strumento principale debba, non solo considerare questi aspetti, ma anche sviluppare una maggiore consapevolezza sull’utilizzo della propria voce imparando a usarla in modo adeguato in ogni situazione. Usare la voce come strumento principale è una caratteristica fondamentale in diverse professioni. Nel nostro lavoro l’uso efficace della voce non è solo importante ma può essere cruciale perché un uso chiaro, ben modulato e appropriato della voce migliora notevolmente la capacità di trasmettere il messaggio desiderato al cliente. Una voce ben utilizzata ha il potere di catturare l’attenzione di chi ci ascolta e di creare un legame emotivo coinvolgente attraverso l’intonazione, il ritmo, il volume e altri elementi vocali."
      },
      {
        "type": "p",
        "text": "Fortunatamente, grazie alla mia formazione musicale, ho appreso presto l’importanza dell’uso corretto della voce. Per me è sempre stato un grande vantaggio, non solo nel campo della musica, ovviamente."
      },
      {
        "type": "p",
        "text": "Per un coach, che accompagna e stimola gli altri, la voce diventa uno strumento prezioso. Sviluppare competenze nel gestire la voce in modo efficace può fare la differenza tra un coaching buono e uno straordinario, contribuendo così a raggiungere risultati significativi."
      }
    ]
  },
  {
    "slug": "tenere-a-mente-il-corpo",
    "title": "Tenere a mente il corpo",
    "excerpt": "Mente e corpo sono due facce della stessa medaglia: le sensazioni fisiche precedono l'azione consapevole. Come l'ascolto del corpo e del respiro influenza le nostre scelte.",
    "category": "Neuroscienze",
    "date": "14 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "2 min",
    "img": "/blog/tenere-a-mente-il-corpo.jpg",
    "content": [
      {
        "type": "p",
        "text": "Ecco uno dei miei propositi per l’anno nuovo. E non parlo solo di diete ed esercizio fisico per smaltire i cenoni e pranzi delle feste ma dell’attenzione che tutti noi dovremmo porre nell’osservare e ascoltare noi stessi e i segnali che arrivano dal corpo. Mente e corpo sono due facce di una stessa medaglia, emozioni e pensieri forniscono le informazioni che ci servono per scegliere un comportamento adeguato ."
      },
      {
        "type": "p",
        "text": "Le neuroscienze ci insegnano che le sensazioni del corpo precedono l’azione consapevole, ovvero il corpo sa cose di cui la mente non si è ancora resa conto."
      },
      {
        "type": "p",
        "text": "Le ricerche in questo campo stanno portando a una vera e propria rivoluzione, che vede il cervello come protagonista dell’attività neuronale ma nello stesso tempo evidenzia il suo legame con altri organi, come l’intestino, che ormai si è meritato la qualifica di secondo cervello, il cuore e i polmoni. La postura e la respirazione possono influenzare le nostre scelte e concorrono alla formazione della nostra identità. Pratiche come la meditazione e altre discipline come Tai chi, Qi Gong, Pilates e Yoga, migliorano la qualità della vita, generando benefici cognitivi ed emozionali."
      },
      {
        "type": "p",
        "text": "Il respiro, quando è volontario e consapevole, guida la plasticità neuronale per scolpire e riorganizzare l’architettura cerebrale."
      },
      {
        "type": "p",
        "text": "Diversi i studi hanno dimostrato che le persone che hanno maggiore consapevolezza corporea prendono decisioni più azzeccate."
      },
      {
        "type": "p",
        "text": "Già grandi pensatori e medici si erano espressi in questa direzione, a partire da Galeno e dai fondatori della medicina araba, fino a Ippocrate e Aristotele, oggi le loro teorie sono supportate dal rigore scientifico della ricerca e delle nuove tecnologie che ci consentono di monitorare l’attività neuronale. I seguaci di Aristotele, detti peripatetici, dal nome greco che indica movimento, passeggiavano mentre ascoltavano le lezioni del maestro. “Da quando ho imparato a camminare , mi piace correre”diceva Nietsche, grande conoscitore della scuola peripatetica."
      },
      {
        "type": "p",
        "text": "In tempi più recenti invece ha governato la visione di Cartesio che vedeva nel cervello e nella razionalità l’unica forma di intelligenza, all’opposto della visione buddistica del cervello come “gabbia di scimmie” o di santa Teresa d’Avila che definìva la mente”la matta di casa”."
      },
      {
        "type": "p",
        "text": "La nostra fabbrica dei pensieri è una scatola di sorprese infinite” afferma Nazareth Castellanos, che racconta le sue ricerche nel suo affascinante libro Neuroscienza del Corpo. Con il rigore e la passione della studiosa e lo stile comunicativo della divulgatrice, l’autrice guida il lettore alla scoperta di una nuova consapevolezza di se stesso e del funzionamento del genere umano."
      },
      {
        "type": "p",
        "text": "Una lettura illuminante, perché in fondo, in questi tempi in cui rischiamo di essere sostituiti dalle macchine che noi stessi abbiamo creato, come diceva George Orwell già nel secolo scorso, “ quello che conta non è restare vivi, quanto restare umani."
      }
    ]
  },
  {
    "slug": "il-bello-delle-emozioni",
    "title": "Il bello delle emozioni",
    "excerpt": "Arte, bellezza ed emozioni nascono nel cervello e guidano il nostro apprendimento. Modellare consapevolmente la nostra mente è l'essenza dell'intelligenza emotiva.",
    "category": "Intelligenza emotiva",
    "date": "11 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/il-bello-delle-emozioni.jpg",
    "content": [
      {
        "type": "p",
        "text": "Tra le manifestazioni più elevate del cervello umano sicuramente è da considerare l’arte, capace di suscitare sensazioni ed emozioni. Le Neuroscienze ci insegnano che quando siamo in un museo o in una sala da concerto, è il cervello che costruisce ciò che vediamo e sentiamo, è la mente che attribuisce un significato ai segnali che riceve, per permetterci di trasformare le nuove esperienze in nuove conoscenze. Sappiamo anche che le emozioni sono dei segnali, che il nostro corpo ci manda proprio per metterci nelle condizioni di scegliere il comportamento più efficace e di prendere le decisioni più opportune. E non solo: le emozioni fanno si che l’apprendimento si consolidi e rimanga nella nostra memoria."
      },
      {
        "type": "p",
        "text": "Eppure, uscendo dal Mudec (Museo delle Culture di Milano), recentemente mi sono trovata a riflettere sulla sorpresa che mi ha colto di fronte ai quadri di Magritte e dei suoi contemporanei."
      },
      {
        "type": "p",
        "text": "Non me l’aspettavo proprio di emozionarmi nel riconoscere il meccanismo che viene descritto così bene nel libro Il telaio magico dal neurochirurgo Giulio Maira, quando spiega il rapporto intrigante tra bellezza, arte e cervello."
      },
      {
        "type": "p",
        "text": "I surrealisti come Magritte e Dali si riproponevano di creare una nuova realtà nel mondo devastato dalla prima guerra mondiale, la loro visone era radicata dell’onirico e nel meraviglioso, le loro idee si ritrovano in tutte le aree dell’espressione umana di quel tempo, dall’arte al cinema alla fotografia, allo spettacolo e al design. Non si trattava di un’estetica definita da regole precise, ma della capacità di rendere strano ciò che è familiare, che tuttora ci induce a guardare in un altro modo il mondo in cui viviamo."
      },
      {
        "type": "p",
        "text": "È provato che tutte le volte che vediamo qualcosa di bello o quando qualcosa ci rende felici si scatena la produzione di dopamina, un neuro-trasmettitore che oltre al piacere provoca il desiderio di ripetere quell’azione. Questo avviene grazie al lavoro combinato dell’amigdala, deputata all’elaborazione delle emozioni e dell’ippocampo, sede della memoria, coordinato dal direttore d’orchestra del nostro cervello, la corteccia pre-frontale, sede del pensiero razionale. L’arte e il bello sono elementi essenziali per la nostra evoluzione, tutto quello che facciamo, ogni nostra emozione, dipende da quello che siamo e quello che siamo lo costruiamo ogni giorno con l’apprendimento, ognuno in maniera diversa. La bellezza ha anche una sua valenza morale, c’è bellezza anche ogni volta che facciamo del bene al prossimo. La bellezza fa bene. Come dice il professor Maira, La natura ci ha offerto un meccanismo per personalizzare la nostra vita, dotandoci di un numero incredibile di cellule e neuro-trasmettitori, in modo ognuno di noi possa avere cervello agile e differenziato, caratterizzato dalle nostre scelte."
      },
      {
        "type": "p",
        "text": "Imparare a modellare il nostro cervello dal vivo, in maniera consapevole e con impegno, è l’essenza dell’intelligenza emotiva, non si tratta solo di “contenere” o di tenere a bada i segnali che potrebbero sfociare in un sequestro emotivo ma di sfruttare al massimo i meccanismi elettrochimici che guidano la nostra mente, capace di creare per noi una realtà straordinaria, ricca di bellezza, in cui arte e cultura hanno un ruolo fondamentale."
      }
    ]
  },
  {
    "slug": "ego-mon-amour",
    "title": "Ego mon amour",
    "excerpt": "L'ego è il sé che costruiamo, spesso rigido e difensivo. Lavorare sul nostro ego è fondamentale per evolvere, cambiare idea e tornare alla nostra vera natura.",
    "category": "Crescita personale",
    "date": "7 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "2 min",
    "img": "/blog/ego-mon-amour.jpg",
    "content": [
      {
        "type": "p",
        "text": "La pratica di mindfulness tra i tanti vantaggia che ha, ci mette in contatto con il nostro EGO. Quando durante la meditazione ci visualizziamo respirare, “usciamo fuori dal nostro corpo” per osservarci, cominciamo a prendere confidenza con il nostro ego e ad osservare quella parte di noi che spesso pensiamo essere l’unica che ci appartiene."
      },
      {
        "type": "p",
        "text": "L’ego è il sé che noi costruiamo, e spesso ha un’identità molto rigida, formata da un insieme di idee, di schemi mentali, di convinzioni che etichettiamo come la nostra personalità. Il nostro ego si difende e si prende il compito di difenderci facendoci credere che molto di ciò che ci circonda è una minaccia alla nostra identità. Per questo molto spesso rifiutiamo anche in maniera inconsapevole, qualsiasi cosa che è al di fuori dei nostri pensieri, dei nostri comportamenti, e delle nostre convinzioni. Basta osservare le persone discutere, soprattutto in questo momento in cui il dibattito è piuttosto acceso, le discussioni sembrano sempre basarsi sul concetto che parlando si possa cambiare l’opinione di chi ascolta. E in questo tipo di dibattiti abbiamo sempre la sensazione che a vincere sia la persona che meglio ha difeso i suoi “pregiudizi”."
      },
      {
        "type": "p",
        "text": "Il nostro ego difende quel pregiudizio perché quel pregiudizio è ciò che abbiamo legato alla nostra identità. Tutte le opinioni contrastanti accendono rabbia e dissapori perché in qui momenti il nostro ego si sente sfidato, sente che potrebbe perdere il controllo perché ha creato l’illusione che le nostre opinioni e le nostre convinzioni siano ciò che noi siamo e ci porta a dimenticare che mettere in discussione le nostre opinioni è ciò che ci consente di crescere."
      },
      {
        "type": "p",
        "text": "Lavorare sul nostro ego è fondamentale se vogliamo evolverci, se vogliamo tornare alla nostra vera natura e avere nuove opportunità di scegliere. Molto di ciò che il nostro ego ha imparato è stato scelto per noi, senza che noi ne fossimo consapevoli, eppure crediamo fermamente che quelle scelte ci rappresentino e ci dicano chi siamo."
      },
      {
        "type": "p",
        "text": "Noi siamo la consapevolezza, noi siamo l’attenzione, siamo noi stessi quando diventiamo capaci di vedere altre parti di noi, capacità unicamente umana. Siamo noi stessi quando possiamo scegliere i nostri pensieri, e non lasciare che i nostri pensieri scelgano chi siamo. Possiamo riflettere sulle nostre azioni, possiamo vedere con quale parte di noi ci siamo identificate eccessivamente fino a credere di possedere solo quell’ identità. Siamo noi stessi quando riusciamo ad ammorbidire il nostro ego, quando riusciamo a stabilire un dialogo costruttivo con il nostro vigile protettore, e dirgli che è arrivato il momento di toglierci il fiato sul collo perché siamo pronti a ricrederci, a cambiare idea, a permettere a nuove esperienze di entrare nella nostra consapevolezza, siamo pronte a scoprirci diversi, e soprattutto siamo pronti a fidarci di noi stessi e ad amarci al di sopra di ogni cosa."
      }
    ]
  },
  {
    "slug": "team-coaching-e-team-coaching-sistemico",
    "title": "Team Coaching e Team Coaching sistemico",
    "excerpt": "Team building, facilitazione, training e team coaching: attività diverse per lo sviluppo dei team. Perché l'approccio sistemico è il più potente per una vera trasformazione.",
    "category": "Team Coaching",
    "date": "4 ottobre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "6 min",
    "img": "/blog/team-coaching-e-team-coaching-sistemico.jpg",
    "content": [
      {
        "type": "p",
        "text": "Esistono molte tipologie di attività a supporto dello sviluppo dei team, tra queste le più ricorrenti sono: Team Building, Facilitazione di Team, Training di Team e Team Coaching. In generale, queste attività hanno obiettivi e modalità di esecuzione molto diverse:"
      },
      {
        "type": "h2",
        "text": "Team Building"
      },
      {
        "type": "p",
        "text": "Si tratta normalmente di esercizi, giochi o attività esperienziali che attraverso la sperimentazione, spesso in chiave metaforica, portano i team a lavorare su aspetti come la suddivisione dei ruoli e la collaborazione. È utile per approfondire gli aspetti di conoscenza reciproca, fiducia e spirito di squadra. Il potenziale limite di questa attività è che la trasposizione di quanto appreso in chiave metaforica al proprio ruolo e lavoro possa risultare non immediata e che la separazione tra l’esperienza di team building e la realtà lavorativa porti a perdere rapidamente gli apprendimenti e i benefici acquisiti durante l’attività di team building."
      },
      {
        "type": "p",
        "text": "Dal punto di vista sistemico: il funzionamento del team è strettamente legato alle persone che lo compongono, se cambia una persona o dopo un certo periodo di tempo si deve tornare a “costruire” il team."
      },
      {
        "type": "h2",
        "text": "La Facilitazione di Team"
      },
      {
        "type": "p",
        "text": "È un’attività di affiancamento al lavoro di Team, in cui un Facilitatore guida il team, attraverso un approccio e un processo strutturato, nel raggiungere un obiettivo prefissato. Il focus del facilitatore è quindi sul processo e i benefici sono prevalentemente espressi in termini di efficienza e/o apprendimento. Un potenziale limite di questa attività si evidenzia quando la facilitazione si dovesse svolgere solo su un livello transazionale (ovvero sul fare le cose in modo diverso), nel qual caso il team rischia di acquisire modalità di lavoro più efficaci senza tuttavia risolvere le vere cause che ne possono limitare il potenziale."
      },
      {
        "type": "p",
        "text": "Dal punto di vista sistemico: gli apprendimenti delle persone restano in buona parte legati alle persone. Se non tiene conto della dimensione sistemica la facilitazione si occupa di processi che il team definisce o utilizza senza la consapevolezza di quel livello."
      },
      {
        "type": "h2",
        "text": "Il Training di Team"
      },
      {
        "type": "p",
        "text": "Consiste nel trasferire modelli o strumenti al team con una modalità di formazione. L’obiettivo è quello di far sì che il team acquisisca nuovi modelli operativi o nuove competenze da applicare al proprio lavoro. Il focus del Trainer è quindi nel trasferimento di conoscenza e i principali benefici riguardano di conseguenza l’acquisizione di nuovo know-how. Il potenziale limite di questa attività è che i partecipanti al training, in quanto discenti, tendano a rimanere in un atteggiamento passivo e non sviluppino un nuovo approccio, ma acquisiscano solo nuove informazioni e/o competenze."
      },
      {
        "type": "p",
        "text": "Dal punto di vista sistemico: il training genera un modello di trasferimento da trainer a partecipanti che li pone nella prospettiva di aspettare che qualcuno faccia qualcosa per loro, inoltre è alta le probabilità che tutto il processo di apprendimento resti solo ad un livello cognitivo individuale."
      },
      {
        "type": "h2",
        "text": "Team Coaching"
      },
      {
        "type": "p",
        "text": "In generale, questa attività si riferisce ad una serie di interventi di affiancamento al team ed è volta a supportare il team a lavorare più efficacemente, acquisire consapevolezza delle proprie dinamiche e modalità di lavoro e sperimentare nuove modalità operative più funzionali al raggiungimento dei propri obiettivi. Il focus del Team Coach, pertanto è sui risultati del team e sul suo sviluppo."
      },
      {
        "type": "p",
        "text": "Per la International Coaching Federation il Team Coaching è:"
      },
      {
        "type": "p",
        "text": "Partnership in un processo co-creativo e riflessivo con un team e rispetto alle sue dinamiche e relazioni in un modo che ispiri i membri del team a massimizzare le proprie capacità e potenzialità al fine di raggiungere il loro scopo comune e gli obiettivi condivisi”."
      },
      {
        "type": "p",
        "text": "Sebbene in talune circostanze un team coach possa adottare degli approcci di facilitazione per poter agevolare il dialogo tra i membri di un team, è la stessa International Coaching Federation a suggerire, sulla base degli studi e delle ricerche che l’hanno portata ad identificare le competenze di team coaching, di evitare di creare sovrapposizione tra team coaching e altre discipline come ad esempio il training, in quanto questo potrebbe limitare il valore del team coaching stesso e la capacità del team coach di esercitare efficacemente il suo ruolo."
      },
      {
        "type": "p",
        "text": "Dal punto di vista sistemico: salve eccezioni, la cosa che può mancare nel caso del team coaching – e a tutte le tipologie di attività viste – è lo sviluppo del team dal punto di vista dell’auto-consapevolezza: di come funziona il team, di cosa fa funzionare cosa e del senso di scopo del team. In poche parole, della dimensione sistemica."
      },
      {
        "type": "p",
        "text": "Un’altra distinzione fondamentale è quella tra Team Coaching e Group Coaching, ovvero tra il coaching rivolto a team e quello rivolto a gruppi. Mentre nel primo caso ci riferiamo ad un insieme di persone che lavorano insieme allo scopo di raggiungere un obiettivo o un risultato di team (es. Team HR, Team di Vendita, Team di Progetto, ecc.) nel secondo caso ci riferiamo ad un insieme di persone che non lavorano abitualmente assieme su obiettivi comuni e che si riuniscono perché accomunate da un interesse condiviso (es. leadership, gestione del cambiamento, ecc.). Quindi, ogni componente del gruppo fa il suo percorso di coaching insieme agli altri, ma si riferisce sempre ai propri obiettivi personali."
      },
      {
        "type": "h2",
        "text": "Team Coaching Sistemico"
      },
      {
        "type": "p",
        "text": "Aver lavorato con numerose tipologie di team ci ha permesso di comprendere che la vera sfida di un programma di sviluppo è quella di accelerare la performance del team e al tempo stesso generare una vera trasformazione del suo modo di essere nella dimensione sistemica e non solo in quella umana."
      },
      {
        "type": "p",
        "text": "Da questo punto di vista siamo convinti che il team coaching sistemico sia l’approccio più potente, in quanto:"
      },
      {
        "type": "list",
        "items": [
          "È un’attività di affiancamento al team nei suoi momenti operativi, pertanto il team durante le sessioni di coaching lavora sui suoi temi operativi;",
          "Aiuta il team a elevare il proprio livello di consapevolezza delle dinamiche sistemiche di lavoro e collaborazione potenzialmente limitanti e a identificarne di nuove che possano essere più funzionali ed efficaci."
        ]
      },
      {
        "type": "p",
        "text": "A causa delle maggiori complessità che il team coach sistemico affronta rispetto al coaching individuale è fondamentale che chi si avvicina a questo approccio:"
      },
      {
        "type": "list",
        "items": [
          "sia già un coach con una formazione specifica consistente",
          "abbia sufficiente esperienza di coaching individuale",
          "abbia esperienza delle dinamiche di team, inclusa la conoscenza di cosa rende un team altamente efficace e la possibilità di esercitarsi nel team coaching."
        ]
      },
      {
        "type": "p",
        "text": "Potremmo dire che non c’è altro team coaching se non sistemico, ma in realtà molti coach lavorano ottenendo anche dei buoni risultati senza avere idea degli aspetti sistemici sottesi. Quindi, il team coaching non sistemico esiste, anzi, in questo momento la maggior parte dei team coach lavorano con il loro cliente (team) senza considerare l’aspetto sistemico."
      },
      {
        "type": "p",
        "text": "Da un punto di vista sistemico, un team: scambia informazioni con l’esterno e le elabora, i risultati del suo lavoro sono veicolati verso l’esterno del team che riceve quanto di ritorno. Persone e mezzi del team possono cambiare, diminuire, aumentare di numero… ma il sistema tenderà a conservare la propria struttura e le proprie caratteristiche in una ricerca continua di omeostasi. Che i membri del team se ne rendano conto o meno, il sistema team si auto-regola e protegge la propria struttura intrinseca da eventuali perturbazioni nell’intento di servire il suo scopo. Qualsiasi intervento sul team che non consideri questa struttura intrinseca sarà temporaneo e, in qualche modo, rigettato dal sistema team intento a preservare se stesso."
      },
      {
        "type": "p",
        "text": "Appare chiaro quanto possa essere più efficace un team consapevole della propria dimensione sistemica: purpose (lo scopo), pattern (schemi ripetuti), feedback loop (cicli di retroazione)… in sostanza delle leggi che governano il funzionamento sistemico. Possiamo anche immaginare quanto un coach che lavori a livello sistemico possa essere utile al suo cliente nel conquistare questa consapevolezza e nel cambiare proprio quegli elementi sottostanti al rendimento dell’intero team."
      }
    ]
  },
  {
    "slug": "valori-e-comportamenti",
    "title": "Valori e comportamenti",
    "excerpt": "I valori sono la bussola che guida le nostre scelte e sono legati al nostro senso di sé. Perché le sessioni di coaching incentrate sui valori ci aiutano a conoscerci meglio.",
    "category": "Crescita personale",
    "date": "30 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/valori-e-comportamenti.jpg",
    "content": [
      {
        "type": "p",
        "text": "Nelle sessioni di coaching uno dei temi che viene fuori più spesso e guida molti dei nostri obiettivi è la conoscenza di noi stessi. Quando il coachee porta in sessione, ad esempio, i suoi problemi al lavoro, in fondo sta cercando di entrare in contatto con quella parte di sé che deve affrontare quella difficoltà, ed ha bisogno di conoscersi più a fondo per trovare le risorse che gli consentiranno di vivere quell’esperienza, secondo una diversa prospettiva. Il punto di partenza per cambiare in meglio la nostra vita, è conoscerci. Dobbiamo conoscere e capire chi siamo ed imparare ad accettare e a convivere con tutti le parti di noi stessi. Molto spesso diamo importanza solo alla nostra parte “buona”, socialmente accettabile, trascurando le cose di noi che non ci convincono, o quelle che non sempre rispettano i valori con i quali siamo stati educati. I valori sono la nostra bussola e ci guidano in tutto ciò che facciamo, danno alla nostra vita sia la direzione che il significato, ci portano a prendere decisioni e a scartarne delle altre. Per questo avere una comprensione chiara di quali sono i nostri valori è molto importante. Così come per un coach è importante comprendere che, quando l’obiettivo portato in sessione viene affrontato anche sotto l’aspetto valoriale, allora il coachee riesce a scoprire delle cose nuove, a diventare più consapevole sul fatto che i valori guidano le nostre scelte, molto spesso però usando il “pilota automatico”. Ecco perché le sessioni di coaching che affrontano il tema dei valori aiutano il coachee a conoscersi meglio. Possiamo avere molti valori e diversi in diverse aree della nostra vita, ad esempio come individui e membri di famiglie, gruppi e comunità. Questi valori possono anche sovrapporsi e possono cambiare nel tempo. Per mantenerli in primo piano, è importante affermarli e fermarci a riflettere su quali sono e su come influenzano le nostre scelte. Così come è importante capire che evolvendo i nostri valori potrebbero cambiare, ed ostinarsi a rimanere legati ad alcuni di questi, a volte, non ci permette di conoscerci più a fondo e crescere. Questo perché i valori sono anche intimamente legati al nostro senso di sé e sono essenziali per il nostro equilibrio mentale. Creano sentimenti di felicità, soddisfazione e appagamento e ci aiutano a sviluppare modelli di comportamento. Inoltre, ci mettono in relazione con altre persone aiutandoci a sviluppare relazioni significative. Vivere in linea con i nostri valori ha un impatto diretto sulla percezione di noi stessi. Quando siamo in linea con i nostri valori, tendiamo a essere più felici, più fiduciosi e più soddisfatti. Le ricerche dimostrano che il solo pensare ai nostri valori mantiene bassi i livelli di stress e ci aiuta a sentirci più soddisfatti. Esprimiamo i nostri valori attraverso alcuni specifici comportamenti e le emozioni che proviamo sono sentimenti anche essi legati a comportamenti specifici. Questo ci fa capire quanto valori ed emozioni siano legati, e quanto il giudizio che diamo alle nostre emozioni sia anch’esso legato ai nostri valori. Sintonizzarci consapevolmente con le nostre emozioni e pensare ai momenti in cui abbiamo fatto qualcosa che ha onorato i nostri valori, ci ha donato serenità, come aiutare qualcuno senza aspettarci nulla in cambio, o i momenti in cui abbiamo permesso a qualcuno di oltrepassare uno dei nostri limiti personali e di conseguenza ci siamo sentiti a disagio, può essere uno stimolo che ci invita a riflettere sui nostri valori, a sentirceli sulla pelle. C’è molto potere in una sessione di coaching incentrata sui valori. C’è molto potere nel riconoscere che il nostro comportamento è una scelta."
      }
    ]
  },
  {
    "slug": "il-modello-della-realta",
    "title": "Il modello della realtà",
    "excerpt": "Come coach il nostro primo compito è aiutare il cliente a riconoscere il “pensiero rigido” e a rendere flessibile il proprio modello di realtà. Una riflessione sulla competenza ICF “Genera Consapevolezza”.",
    "category": "Coaching",
    "date": "27 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "2 min",
    "img": "/blog/il-modello-della-realta.jpeg",
    "content": [
      {
        "type": "p",
        "text": "Capiamo molto di noi stessi quando mettiamo a fuoco il nostro “modello di realtà” che è il nostro credo sul mondo che riteniamo essere vero. È costruito intorno a certi presupposti e spesso non ci permette di crescere, o diversamente ci dà un’enorme possibilità di crescita."
      },
      {
        "type": "p",
        "text": "Come coach penso che la nostra prima missione sia quella di aiutare il coachee ad avere una visione chiara su ciò che definisce realtà. Molto spesso la realtà del coachee è fatta di rigide convinzioni e richieste sulla vita che, spesso, formano un pensiero dogmatico che non solo può aumentare ansie, stress, conflitti e risentimento, ma aumenta anche le difficoltà dal riprendersi da situazioni ed eventi stressanti."
      },
      {
        "type": "p",
        "text": "Attraverso il coaching, il cliente deve vedere che le sue convinzioni possono diventare “flessibili” e di conseguenza sviluppare la consapevolezza che molte cose nella vita sono fuori dal nostro controllo e sono caratterizzate dalla non colpevolizzazione, dalla tolleranza al disagio e dall’accettazione incondizionata. Quante volte sentiamo dai nostri clienti frasi come “Per me non riuscirci sarebbe un fallimento” “Se le cose vanno così allora io non ce la faccio”."
      },
      {
        "type": "p",
        "text": "Il coaching deve portare il cliente a diventare meno rigido nelle sue credenze sulla vita, a pensare che le scelte che si compiono non sono per sempre, a sostituire le richieste con preferenze flessibili che determinano aspettative più realistiche per sé stessi e per gli altri, a pensare non a ciò che dovrebbe accadere ma a ciò che preferisce accadesse. Quando alla fine di una sessione la riformulazione diventa “Vorrei riuscirci, ma se così non fosse posso tollerare il fallimento”, ciò significa che il cliente ha compreso che il modello di realtà può e deve essere flessibile."
      },
      {
        "type": "p",
        "text": "Per chi non ha ancora affrontato l’esame per l’ottenimento della credenziale ICF, questo potrebbe essere un punto su cui riflettere, perché è ciò che la competenza 7 del codice ICF recita: “Genera Consapevolezza”, ed è ciò che, nella mia esperienza, determina una buona sessione d’esame: far sì che il coachee si sposti dal punto di partenza e riesca a riformulare in maniera più flessibile. Il nostro compito è aiutare il cliente a riconoscere il “pensiero rigido” e a sostituirlo."
      },
      {
        "type": "p",
        "text": "Ovviamente nella pratica non sempre avviene nell’immediato. Noi come coach dobbiamo alimentare la fiducia nel coachee e nel nostro lavoro di coach, ricordando, per primi a noi stessi, che una volta gettato il seme, bisogna avere la capacità di aspettare il raccolto, proprio perché dobbiamo essere noi i primi ad avere un modello di realtà flessibile."
      }
    ]
  },
  {
    "slug": "dal-sogno-al-progetto-essere-il-motore-del-proprio-cambiamento",
    "title": "Dal sogno al progetto – I passi per il cambiamento",
    "excerpt": "Un esercizio di visualizzazione per trasformare i sogni in progetti: dai cassetti in cui i sogni invecchiano ai cappelli del pensiero, fino alle scarpe che rappresentano i passi da compiere.",
    "category": "Crescita personale",
    "date": "23 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "2 min",
    "img": "/blog/dal-sogno-al-progetto-essere-il-motore-del-proprio-cambiamento.jpg",
    "content": [
      {
        "type": "p",
        "text": "Come coach e facilitatori lavoriamo sul cambiamento, sul supporto alla trasformazione. Per fare questo la visualizzazione può risultare utile. Propongo un gioco, un piccolo esercizio di fantasia suggerito da Consuelo Casula nel suo libro “I porcospini di Schopenhauer”."
      },
      {
        "type": "p",
        "text": "È un gioco di fantasia ma molto concreto nei risultati. Puoi sperimentarlo tu o anche proporlo a un cliente. L’obiettivo è quello di aiutare a trasformare i sogni in progetti ma, ancora prima, di sviluppare consapevolezza di quanti sogni, piccoli o grandi, stanno invecchiando in cassetti che, per varie ragioni, non si vogliono aprire, oppure, di cui ci si dimentica."
      },
      {
        "type": "p",
        "text": "Pronti? Via!"
      },
      {
        "type": "p",
        "text": "Immagina di trovarti in una stanza con tanti cassetti, ognuno dei quali contiene un sogno. Ci sono cassetti piccoli che contengono piccoli sogni, cassetti grandi che contengono grandi sogni. Disegnali, prima, su un foglio di carta bianco e, poi, immagina di aprire ogni cassetto per scoprire i sogni che sono rimasti da tanto tempo chiusi lì dentro e valuta quelli che vale la pena trasformare in un progetto."
      },
      {
        "type": "p",
        "text": "In questa stanza si trovano anche sette saggi, ognuno con un cappello diverso in testa, e ogni cappello guida un processo di pensiero particolare. Il saggio col cappello bianco invita a esaminare i fatti e a raccogliere dati oggettivi, quello con cappello rosso a lasciarsi guidare dalle emozioni. Il saggio con il cappello nero mette in evidenza gli ostacoli, gli impedimenti, le difficoltà, quello col cappello giallo infonde ottimismo, speranza e pensieri positivi. Il saggio col cappello verde stimola un pensiero creativo, innovativo, quello col cappello blu fa guardare le cose dall’alto per vedere solo l’essenziale e lasciare sullo sfondo ciò che è irrilevante."
      },
      {
        "type": "p",
        "text": "Infine c’è un saggio con un cappello con i colori dell’arcobaleno per indicare il tipo di cappello da privilegiare, il pensiero da far intervenire a seconda del processo che si sta analizzando."
      },
      {
        "type": "p",
        "text": "Quando hai finito con questa fase immagina di entrare in un’altra stanza con tante scarpe diverse, scarpe che indicano quali passi intraprendere per tradurre il progetto in passi. Ci sono scarpe formali da indossare quando è bene attenersi alle procedure, seguire una routine consolidata e quindi rassicurante. Ci sono stivali di gomma, da vigile del fuoco, per i passi in situazioni di emergenza. Pantofole comode che evocano il comfort e scarpe da contadino da indossare per ricordarsi che è bene tenere i piedi per terra e affidarsi allo spirito pratico e alla semplicità. Ci sono anche scarpe eleganti che mettono in evidenza l’aspetto formale dell’autorità e scarpe da ballo per festeggiare il raggiungimento del successo."
      },
      {
        "type": "p",
        "text": "Infine, sebbene ognuno disponga di tante scarpe utili a proteggere i piedi, è opportuno anche ricordarsi di andare a piedi nudi non solo per sentire il terreno sotto i piedi ma anche per lasciare la propria impronta."
      }
    ]
  },
  {
    "slug": "non-aprite-quella-porta",
    "title": "(Non) aprite quella porta",
    "excerpt": "Dietro la porta chiusa che tutti custodiamo dentro di noi si nasconde spesso un dolore. Una riflessione su come attraversare quel vuoto ci renda più autentici e in connessione con gli altri.",
    "category": "Crescita personale",
    "date": "20 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "2 min",
    "img": "/blog/non-aprite-quella-porta.jpg",
    "content": [
      {
        "type": "p",
        "text": "Alzi la mano chi non ha un tesoro nascosto che custodisce ben bene. Un luogo dentro di sé che non si vuole frequentare, dove non si vuole andare a vedere."
      },
      {
        "type": "p",
        "text": "Quel luogo giù giù in cantina che io visualizzo dietro ad una porticina chiusa da una grande catena tenuta da più di un lucchetto. È un luogo buio, umido, dove non è piacevole andare. Che c’è di così prezioso dietro quella porta che custodiamo con grande cura?"
      },
      {
        "type": "p",
        "text": "Generalmente c’è un dolore, un dolore che non abbiamo saputo gestire, probabilmente perché troppo piccoli o privi degli strumenti necessari. Un dolore che ci ha fatto stare male, di un male più grande di noi. Nel corso della vita stiamo ben attenti a non avvicinarci nemmeno per sbaglio a quello stanzino e chiunque possa suscitare in noi l’emozione che ci siamo preoccupati di tenere ben bene sotto chiave deve confrontarsi molto spesso con la nostra rabbia. Rabbia che si può manifestare con aggressività, silenzi, frustrazione…"
      },
      {
        "type": "p",
        "text": "Se vogliamo recuperare quella parte di noi tenuta sotto chiave è proprio da questa rabbia che è necessario partire. Proviamo a smettere di difenderci, di ostinarci a volere qualcosa a tutti i costi che non arriva e non arriverà mai. Eh sì, anche una cieca ostinazione a volte è un modo per non guardare dentro a quello stanzino buio… Pensiamoci, anzi ascoltiamoci, in silenzio."
      },
      {
        "type": "p",
        "text": "Come mi sentirei se smettessi di difendermi? Se smettessi di continuare a volere quello che non riesco a raggiungere?"
      },
      {
        "type": "p",
        "text": "Con buona probabilità la risposta sarà un sonoro e angosciante “Non lo so!” che ci apre le porte a un vuoto che non sappiamo guardare. Eppure… eppure è proprio in quel vuoto che troviamo la risposta."
      },
      {
        "type": "p",
        "text": "Stare in quella dimensione significa aprire quello stanzino e lasciare che quello che c’è dentro ci pervada e finisca col riempire proprio quel vuoto. Lasciamoci andare a quel nulla e ad un certo punto ci accorgeremo che quello che tanto temevamo, ora siamo in grado di gestirlo, di sostenerlo, e smette di farci tanta paura."
      },
      {
        "type": "p",
        "text": "Non sentire più quella sensazione di vuoto dentro di noi ci rende più sicuri perché, lo vediamo solo ora, è proprio quello che ci faceva tanta paura. Aprire quella porta significa avvicinarsi ad un senso di pienezza di sé che, ben lontano dall’essere un ego strabordante, è invece qualcosa che ci fa sentire autentici, empatici e in connessione con gli altri."
      },
      {
        "type": "p",
        "text": "Attenzione, non tutte le porte vanno aperte, ma qualcuna ci chiama, ci attrae, si fa sentire. Questo è il segnale che è arrivato il momento: siamo pronti! E allora tuffiamoci con fiducia nel vuoto davanti a noi e attendiamo, in silenzio, senza aspettative. Semplicemente stiamo e scopriremo che quel vuoto ci sostiene e che tanto vuoto non è più."
      }
    ]
  },
  {
    "slug": "mindset-acceleranti-e-mindset-limitanti",
    "title": "Mindset acceleranti e mindset limitanti",
    "excerpt": "Mentalità statica o di crescita: secondo Carol Dweck ciò che pensiamo di noi determina i nostri successi. Come il lavoro del coach può aiutare a trasformare un mindset limitante in uno accelerante.",
    "category": "Crescita personale",
    "date": "16 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/mindset-acceleranti-e-mindset-limitanti.jpg",
    "content": [
      {
        "type": "p",
        "text": "I processi cognitivi che attiviamo in risposta ad un determinato compito vengono definiti Mindset."
      },
      {
        "type": "p",
        "text": "Ciò che pensiamo di noi gioca un ruolo fondamentale nel determinare cosa vogliamo e se riusciamo a raggiungerlo, di conseguenza ha un forte impatto sulla realizzazione dei nostri successi e dei nostri fallimenti. La nostra mentalità è un insieme di presupposti, metodi e nozioni derivanti dalla nostra visione del mondo e dalla nostra filosofia di vita. Di conseguenza modella il modo in cui diamo un senso al mondo e a noi stessi, influenza il modo in cui ci sentiamo e ci comportiamo in qualsiasi situazione. Nonostante il nostro cervello sia capace di ricevere miliardi di stimoli, ha una capacità limitata di assorbire e trattare le informazioni, quindi forma un mindset che ci aiuta a filtrare ciò che si assorbe e come lo si interpreta."
      },
      {
        "type": "p",
        "text": "Secondo la psicologa ricercatrice Carol Dweck, autrice del libro “Mindset. How we can learn to fulfill our potential”, ci sono due mentalità di base: una definita statica (fix) e una di crescita (growth). Generalmente le persone con una mentalità fissa credono che le loro abilità siano tratti fissi e quindi non possano essere cambiati. Inoltre sono spesso convinte che il loro talento e la loro intelligenza da soli portino alla realizzazione dei loro obiettivi. Al contrario, le persone che posseggono un mindset definito di crescita credono che i loro talenti e le loro abilità possano essere sviluppati nel tempo attraverso lo sforzo e la tenacia. Si convincono che ogni cosa possa essere imparata e, anche se non raggiungono i livelli massimi di abilità, il processo di apprendimento è ciò che li soddisfa maggiormente."
      },
      {
        "type": "p",
        "text": "Il nostro mindset si crea nella prima infanzia e i motivi principali che ci portano ad abbracciarne uno piuttosto che l’altro derivano da quanto l’ambiente in cui cresciamo ci educhi all’attribuzione di significati, o alla semplice osservazione meravigliosa degli eventi. Il termine meravigliosa intende con quanto entusiasmo ci vengono presentati quegli eventi."
      },
      {
        "type": "p",
        "text": "Gli esperimenti della Dweck hanno evidenziato che i bambini si comportano in modo molto diverso a seconda del tipo di feedback che ricevono. Quando ai loro talenti viene attribuito il significato di “intelligenza”, in quei bambini è molto facile che si instauri un mindset fisso perché il messaggio che ricevono è che una certa abilità o la si possiede oppure no. La meraviglia nell’osservare i talenti dei bambini, l’enfasi sullo sforzo che fanno per portare a termine i propri compiti, senza definizione alcuna, li educa invece alla consapevolezza che le strategie da loro usate possano essere decise, perseguite e migliorate nel tempo. In pratica ciò che determina una fondamentale differenza è lodare gli sforzi invece che i risultati. Solo concentrandoci sul processo piuttosto che sul risultato gli adulti possono aiutare i bambini a capire che i loro sforzi, il duro lavoro e la dedizione possono portare a cambiamenti, apprendimento e crescita sia ora che in futuro."
      },
      {
        "type": "p",
        "text": "Un mindset statico tende, invece, a generare pigrizia, paura e orgoglio e spesso porta alla tendenza di evitare le sfide, che sono viste come ciò che potrebbe svelare il proprio senso di inadeguatezza. Al contrario, avere una mentalità di crescita nutre la fame di apprendimento e il desiderio di lavorare sodo per scoprire cose nuove, così come il coraggio di osare e di affrontare nuove situazioni. Gli errori vengono vissuti come naturale processo per imparare ciò che prima si ignorava, le critiche diventano consigli preziosi e il successo degli altri un esempio da cui trarre ispirazione."
      },
      {
        "type": "p",
        "text": "Nessuno si caratterizza in modo esclusivo per il fatto di avere un mindset o l’altro: a seconda di dove ci si trova, in una linea immaginaria avente come antipodi i due mindset, ci si ritrova in una mentalità dominante."
      },
      {
        "type": "p",
        "text": "La Dweck, inoltre, asserisce che i mindset non sono stabili e cambiano nel tempo come risultato di nuove osservazioni ed esperienze, ed è in questi casi che il lavoro del coach svolge un ruolo fondamentale, proprio perché atto a mettere in discussione le convinzioni e i paradigmi con i quali cresciamo. Al fine di trasformare un mindset statico, il lavoro di un coach deve necessariamente espandersi alla persona del coachee e non limitarsi all’obiettivo che porta in sessione; deve, cioè, generare consapevolezza affinché il coachee possa osservare autonomamente che sta cercando di perseguire il suo obiettivo con un mindset limitante. La più grande soddisfazione per un coach deve essere promuovere l’autonomia del coachee."
      }
    ]
  },
  {
    "slug": "euristiche-e-bias-cognitivi",
    "title": "Euristiche e bias cognitivi",
    "excerpt": "Le euristiche sono scorciatoie mentali che il cervello usa per risparmiare energia; i bias sono euristiche inappropriate. Perché riconoscerli è fondamentale nella pratica del coaching.",
    "category": "Psicologia",
    "date": "13 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "6 min",
    "img": "/blog/euristiche-e-bias-cognitivi.jpg",
    "content": [
      {
        "type": "p",
        "text": "Quanto sono rilevanti nella pratica di Coaching?"
      },
      {
        "type": "p",
        "text": "Le euristiche sono dei procedimenti mentali basati sulle intuizioni, piuttosto sbrigative, che ci consentono di farci un’idea generale su un argomento senza dover sforzarci troppo a livello cognitivo. Servono in sostanza a far risparmiare energia al cervello, il quale, insieme a fegato e milza, è l’organo che ne consuma di più. L’attività dei neuroni infatti è molto dispendiosa, inoltre se il cervello non riceve la giusta quantità di energia anche solo per brevi periodi, è facilmente esposto a danni. Quindi le euristiche sono scorciatoie mentali, strategie veloci e frequentemente utilizzate dal cervello, che nella maggioranza dei casi ci proteggono. I Bias cognitivi sono in sostanza delle euristiche inappropriate, perché di fatto sono pregiudizi basati su dati non reali, che assimiliamo a priori, senza empirismo."
      },
      {
        "type": "p",
        "text": "Quando si deve prendere una decisione importante, quando si sceglie quale intuizione seguire o si aiuta il cliente a identificare e pianificare un obiettivo, è bene saper prendere le distanze dai nostri Bias: ecco perché, a parer mio, è necessario che un coach sia consapevole del ruolo che giocano sul nostro lavoro."
      },
      {
        "type": "p",
        "text": "Ovviamente solo riconoscendoli possiamo cercare di evitarli, e successivamente auspicare di sviluppare la consapevolezza nei nostri clienti, su quanto e in che modo possono impattare sul racconto della loro realtà. Quindi le prime domande che un coach dovrebbe porsi sono: “Come faccio a non saltare a conclusioni affrettate? Come divento consapevole se sto usando dei Bias cognitivi in sessione? Come posso condividere con il cliente questa mia consapevolezza senza compromettere la nostra relazione di parità?”"
      },
      {
        "type": "p",
        "text": "Il primo passo verso la consapevolezza è senz’altro l’accettazione. Non siamo semplicemente pigri, ma necessariamente orientati al risparmio energetico, perché il nostro corpo a fine giornata deve portare a casa tutti i risultati di cui ha bisogno per sopravvivere e quindi consumare la giusta energia per ogni singolo organo. Quindi, accettando il fatto che il cervello per default ci porta ad usare scorciatoie, non le percepiremo solo come limiti ma come veri e propri modi di funzionare."
      },
      {
        "type": "p",
        "text": "Abbiamo tutti il nostro modo di crearci degli stereotipi, ottimo esempio di Bias cognitivi, che dipendono dalla cultura in cui siamo educati. I nostri stereotipi organizzano quegli schemi che ci consentono di comprendere ciò che ci circonda perché il nostro sistema cognitivo non è in grado di farlo rapidamente. È come se i Bias fossero degli algoritmi sui quali organizziamo le nostre mappe mentali."
      },
      {
        "type": "p",
        "text": "Ecco perché è estremamente utile per un coach sapere come funzionano. Riconoscerli tutti è quasi impossibile. Gli psicologi che si occupano di studiarli ne hanno individuati centinaia, uno degli ultimi il Bias dell’Ikea, che si verifica quando ci affezioniamo ad un oggetto solo perché lo abbiamo assemblato con le nostre mani. Avere in sostanza il controllo di un intero progetto la cui realizzazione passa attraverso il nostro lavoro."
      },
      {
        "type": "p",
        "text": "I Bias cognitivi sono stati organizzati in cinque macrocategorie: Bias di decisione, Bias della memoria, Bias individuali o di gruppo, Bias di giudizio, Bias della motivazione e del desiderio. È possibile, inoltre, raggrupparli utilizzando un’altra strategia, quella cioè di individuare le cause che fanno scattare gli errori cognitivi, basate sulla necessità di agire in fretta, di dover scegliere, sulla mancanza di informazioni necessarie o sull’abbondanza di dati e informazioni."
      },
      {
        "type": "p",
        "text": "Ma quali sono i casi in cui più frequentemente utilizziamo queste scorciatoie e quelli ai quali un coach deve porre particolare attenzione?"
      },
      {
        "type": "p",
        "text": "I Bias di conferma sono quelli ai quali un coach deve essere particolarmente attento, in quanto possono essere causa di errori di valutazione perché favoriscono un atteggiamento, tipico della natura umana, in cui si cerca di confermare un’ipotesi invece di prenderne in considerazione altre. In sostanza interpretiamo e ricordiamo le informazioni in modo da confermare e sostenere le proprie convinzioni. Le persone mostrano questo Bias quando selezionano le informazioni che supportano i loro punti di vista, ignorando quelle contrarie. Questi Bias sono difficilmente eliminabili, ma un coach ha il compito di imparare a riconoscerli e a gestirli, sviluppando un pensiero critico delle sue convinzioni, soprattutto durante la sessione. I Bias di conferma sono tipici della gestione dei rapporti familiari, dove molte discussioni nascono quando ci ostiniamo a voler essere coerenti con le posizioni prese in precedenza, magari legate al ruolo che ricopriamo in famiglia, che ci porta a confermare a tutti i costi le nostre opinioni, senza mai voler metterci in discussione."
      },
      {
        "type": "p",
        "text": "Il secondo gruppo di Bias è quello per il quale tendiamo a scartare le specificità per formare generalizzazioni, e ci troviamo nella posizione di farlo soprattutto quando c’è abbondanza di informazioni e possibilità di scelta. Quando ci troviamo in condizioni di dover scegliere e ci troviamo di fronte ad un numero alto di possibilità, finiamo quasi sempre per orientarci verso ciò che già conosciamo, vale a dire alle informazioni a cui accediamo in maniera più semplice. Quando un coach generalizza i comportamenti di un cliente, non gli regala la possibilità di vedere che le sue specificità lo rendono unico e di conseguenza non lo aiuterà nel processo di identificazione del sé scollato dalla percezione degli altri."
      },
      {
        "type": "p",
        "text": "Quante decisioni il nostro cervello reputa “difficili da prendere” ogni volta che c’è un eccesso di informazioni, e che impatto avranno sul futuro quelle scelte? Non sarebbe meglio, in quei casi, rallentare volutamente i processi decisionali?"
      },
      {
        "type": "p",
        "text": "Pensiamo inoltre a decisioni aziendali prese solo sulla base delle informazioni più facili da elaborare perché più accessibili al nostro database di conoscenze: in questo caso estremamente limitanti, perché non aprono alla possibilità di sperimentare nuove soluzioni che potrebbero far crescere l’azienda."
      },
      {
        "type": "p",
        "text": "I Bias cognitivi che si basano sulla memoria sono un’altra categoria sulla quale un coach dovrebbe portare consapevolezza. Per prima cosa dobbiamo tenere a mente che tendiamo a sopravvalutare la nostra memoria che, a differenza di quanto crediamo, non è così precisa, in quanto tende a modificare i nostri ricordi per confermare ciò di cui siamo convinti o ciò che ci piace credere. Come ogni essere umano crediamo a ciò in cui vogliamo credere e ce la raccontiamo come ci pare fino a falsare la realtà dei fatti accaduti pur di confermare le nostre certezze. Inoltre abbiamo la tendenza a memorizzare qualcosa nel suo quadro generale e non i dettagli che la compongono. Quindi questi Bias sono una forma di errata attribuzione in cui un ricordo viene scambiato per immaginazione, perché non c’è un’esperienza soggettiva del fatto che sia un ricordo. Secondo questo principio una persona può ricordare in modo errato un pensiero, un’idea, ma credendola comunque la fonte originale del ricordo. Inoltre sono bias che ci rendono piuttosto suggestionabili, vale a dire più inclini ad accettare e agire in base ai suggerimenti degli altri e distorcere i ricordi, perché quando ci è stato detto insistentemente qualcosa su un evento passato, il nostro ricordo dell’evento si conforma al messaggio che abbiamo ascoltato ripetutamente."
      },
      {
        "type": "p",
        "text": "Abbiamo la disponibilità di consultare online moltissimi studi riguardo i Bias cognitivi: ovviamente non ci è richiesto di conoscerli tutti, ma essere consapevoli dei più importanti ci rende sicuramente dei coach migliori, imparando a riconoscerli, accettarli e andare avanti per la nostra strada."
      }
    ]
  },
  {
    "slug": "tutto-cio-che-ci-irrita-negli-altri-puo-portarci-a-capire-noi-stessi",
    "title": "“Tutto ciò che ci irrita negli altri, può portarci a capire noi stessi”",
    "excerpt": "Quando un cliente ci irrita profondamente, spesso è un campanello d’allarme che parla di noi. Proiezioni, giudizio e self kindness: cosa i comportamenti che non sopportiamo negli altri rivelano di noi stessi.",
    "category": "Psicologia",
    "date": "9 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/tutto-cio-che-ci-irrita-negli-altri-puo-portarci-a-capire-noi-stessi.jpg",
    "content": [
      {
        "type": "p",
        "text": "Come coach a volte abbiamo clienti che ci servono su un piatto d’argento dei comportamenti che noi troviamo difficili da digerire. Io ne ho fatto personale esperienza quando mi sono trovata di fronte un cliente che mi irritava anche solo sentendo il suo tono di voce. Dopo le prime due sessioni ho mollato e, accompagnata da un senso di frustrazione profonda, con grande fatica, devo ammetterlo, ho cominciato a farmi delle domande. Per prima cosa mi sono chiesta: qual è il bisogno insoddisfatto che c’è dietro quel comportamento? Cosa fa risuonare in me quel bisogno? Cosa mi sta dicendo? È anche un mio bisogno che mi sto negando? Queste domande mi hanno aiutato a capire molto sul perché gli atteggiamenti del mio coachee mi infastidivano. Confrontandomi con le colleghe e i colleghi della Live Class, è emerso che lasciavano comunque parte della responsabilità all’altro: ne prendo atto, ma in quel momento, se non fossi passata per quelle domande, che hanno facilitato la comprensione di alcuni aspetti di me stessa che non volevo affrontare, non ce l’avrei fatta. Solo così ho potuto richiamare dopo qualche tempo il cliente e fissare una nuova sessione."
      },
      {
        "type": "p",
        "text": "Ho, inoltre, compreso che ogni volta che le mie reazioni emotive sono così forti da portarmi a dire “quella persona proprio non la sopporto!” dovrebbe essere un campanello d’allarme che mi avvisa che mi sto nascondendo qualcosa e mi sto proteggendo da qualcosa. In psicologia vengono chiamate “proiezioni” e sono definite dei meccanismi di difesa che ci consentono di eliminare dalla nostra parte conscia le cose che reputiamo inaccettabili. Se il meccanismo è di difesa, da cosa dovremmo proteggerci? Le proiezioni ci consentono di trasferire sugli altri le parti di cui non siamo consapevoli e quindi, nel momento in cui arriva il nostro giudizio lapidario su chi abbiamo davanti, di fatto stiamo giudicando noi stessi. Quindi ci stiamo proteggendo anche da quel famoso giudice interiore che avevamo incontrato in un’altra delle Live Class. E dalla nostra ombra, dalla nostra parte più nascosta, che il solo pensare di poterla giudicare fa venire i brividi."
      },
      {
        "type": "p",
        "text": "Accoglienza e non giudizio: le parole ricorrenti nel nostro incontro online, e tante sono state le riflessioni sulle responsabilità che in particolare noi coach abbiamo, nel diventare consapevoli di quando stiamo giudicando qualcuno e qualcosa. Impossibile non giudicare: siamo umani e la nostra mente lo fa in automatico, perché ha bisogno di dare spiegazioni, attribuire significati, di catalogare tutto ciò che non conosce o che potrebbe percepire come una minaccia. Possibile invece mettere da parte quel giudizio, e più facile da fare se ci ricordiamo di quel campanello d’allarme e del nostro essere coach anche nella vita e non solo in sessione."
      },
      {
        "type": "p",
        "text": "Ovviamente ci sono anche dei casi in cui le persone che ci irritano posseggono le caratteristiche che noi gli stiamo appioppando e non c’entrino solo le nostre proiezioni: quindi dovrebbe essere il grado di irritazione e di ostilità a fornirci quell’elemento introspettivo. Quel comportamento lo viviamo come una minaccia a dei valori nei quali crediamo fermamente e che sentiamo di dover difendere con tutte le nostre forze."
      },
      {
        "type": "p",
        "text": "Dal confronto è emersa un’altra chiave di lettura interessante, che è quella di imparare ad essere più accoglienti con noi stessi quando notiamo cose dell’altro che ci infastidiscono. Come a dire “se lui lo fa ed io riesco a perdonarglielo, forse dovrei anche perdonarlo a me stessa ed abbracciare quella parte di me che non sempre mi piace”. Vero, ma questo significa che siamo già consapevoli che quella parte di noi esiste e siamo consapevoli anche che spesso tendiamo a rinnegarla."
      },
      {
        "type": "p",
        "text": "Self Kindness è stata un’altra frase chiave della Live Class, anche perché essere gentili e accoglienti con noi stessi ci insegna ad amare, e a diventare persone capaci di dare il giusto valore alla cosa più preziosa che abbiamo: le relazioni con gli altri."
      },
      {
        "type": "quote",
        "text": "Ciò che respingo lo accolgo in me pur senza accorgermene. Ciò che accetto finisce nella parte della mia anima a me nota; ciò che rifiuto va nella parte della mia anima che non conosco. (C. G. Jung)"
      }
    ]
  },
  {
    "slug": "meditazione-e-coaching",
    "title": "Come Meditazione e Mindfulness aiutano nel coaching",
    "excerpt": "Concedersi dieci minuti di meditazione prima di ogni sessione per centrarsi ed entrare nel flow. Perché la pratica della presenza e del non giudizio allena le abilità fondamentali di ogni coach.",
    "category": "Mindfulness",
    "date": "6 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "5 min",
    "img": "/blog/meditazione-e-coaching.jpg",
    "content": [
      {
        "type": "p",
        "text": "Prima di ogni sessione ho preso l’abitudine di concedermi almeno dieci minuti per darmi la possibilità di prepararmi psicologicamente al lavoro che andrò a fare. Mi era stato suggerito dai miei trainer sin dall’inizio del percorso da coach, e più vado avanti e più mi rendo conto di quanto sia stato prezioso quel suggerimento."
      },
      {
        "type": "p",
        "text": "Avevo creato il mio “mantra” personale, basato su 5 punti che ritenevo, e tutt’ora ritengo, fondamentali, da ricordarmi prima di iniziare la pratica."
      },
      {
        "type": "list",
        "items": [
          "Lascia che il coachee arrivi dove può",
          "Ascolta per accogliere",
          "Rendi concrete sia le paure che le esaltazioni",
          "Cambia la prospettiva",
          "Riempiti d’amore verso te stessa e verso il coachee"
        ]
      },
      {
        "type": "p",
        "text": "Uso il termine mantra anche se ciò che ho scritto non è una formula sacra indirizzata ad un deva, a una preghiera o ad un canto sacro, ma perché indirizzato ad una pratica meditativa per entrare nella sessione."
      },
      {
        "type": "p",
        "text": "Ripeterlo era il mio modo di centrarmi, di entrare nel flow, di sentirmi presente a me stessa e al coachee, senza sforzo alcuno. Questi 5 punti erano quelli che mi ero scritta, sottolineandoli, durante le diverse fasi del corso; non che fossero i soli punti fondamentali, ma sicuramente erano quelli che sentivo, in quel momento, di dover tenere a mente. Mi sedevo in un posto tranquillo, portavo semplicemente l’attenzione sul mio respiro, e quando sentivo che seguiva un ritmo regolare, cominciavo a ripeterli mentalmente in ordine sparso."
      },
      {
        "type": "p",
        "text": "Questo mi ha aiutato moltissimo nelle sessioni, fino a convincermi che sia necessario per un coach seguire una propria disciplina di preparazione. Per me la meditazione era la più familiare e quindi non è stato difficile cominciare ad usarla. Oggi, oltre a praticare per almeno 30 minuti al giorno, prima di ogni sessione mi concedo 10 minuti in cui mi fermo, ascolto il mio respiro e mi ripeto le cose che penso siano fondamentali per entrare in sessione."
      },
      {
        "type": "p",
        "text": "Mi rendo conto che quando si parla di meditazione o di mindfulness ci sia ancora qualche falso mito, anche se negli ultimi anni l’argomento è diventato molto popolare fino ad arrivare sulle riviste da parrucchiere, proprio perché praticata da personaggi famosi che la rendono un trend. Ad oggi si trovano ricerche scientifiche che ne dimostrano la validità, ci sono un’infinità di applicazioni per praticarla, in alcuni paesi è stata introdotta nelle scuole, e negli stessi paesi sempre di più le grandi aziende assumono esperti di mindfulness, e in psicoterapia è uno dei rimedi più usati per curare ansia e depressione."
      },
      {
        "type": "p",
        "text": "Se cerchiamo la parola mindfulness troviamo circa duecento milioni di risultati; una delle definizioni recita: “uno stato mentale che si ottiene focalizzando l’attenzione sul momento presente, riconoscendo e accettando le proprie emozioni, i propri pensieri e le proprie sensazioni fisiche”."
      },
      {
        "type": "p",
        "text": "Dal mio punto di vista praticarla aiuta a sviluppare tutte le skills che un coach dovrebbe avere, prima fra tutte la presenza. Sì, anche perché la capacità dell’essere presenti è la meta-abilità che ci consente di essere capaci a rimanere nello stato di flow."
      },
      {
        "type": "p",
        "text": "Meditare significa imparare a stare con ciò che accade nel momento presente, in modo non giudicante e completamente accettante, e questo è uno dei primi apprendimenti per un coach. Sottolineo la parola imparare, ed è per questo che serve una pratica, perché non è così scontato essere capaci di stare nel momento presente, senza giudizio. È una pratica che insegna a “stare con” e non a cercare di capire, insegna a non avere aspettative su noi stessi, sugli altri e tanto meno sulla pratica. Non esiste un giorno in cui hai praticato bene o male: lo hai semplicemente fatto, e questo è il punto fondamentale. Altra grande analogia con il lavoro del coach, il cui compito è quello di stare con senza cercare di capire, e lasciare andare le aspettative sulla propria performance e su cosa è pronto a scoprire il cliente. Del resto la pratica di meditazione serve proprio a renderci consapevoli di ciò che c’è e di ciò che ci aspettiamo dovrebbe esserci, e questa differenza è fondamentale perché la nostra mente si illude spesso di trovare altre cose."
      },
      {
        "type": "p",
        "text": "Praticare significa semplicemente aumentare la consapevolezza ed accorgersi di quando la nostra mente comincia a vagare nel passato o nel futuro, o ad inseguire scenari e supposizioni che ci allontanano dal momento presente. È del tutto normale, perché la nostra mente si comporta come una scimmietta impazzita che salta da una dimensione all’altra, quindi non possiamo aspettarci che la si svuoti dai pensieri. La pratica serve ad aumentare la consapevolezza, ci fa accorgere di “esserci persi” e in quel momento, quando ce ne rendiamo conto, dobbiamo semplicemente tornare, senza giudicarci, al momento presente in maniera volontaria. Così facendo alleniamo la nostra capacità di rimanere nel flow, senza giudizio e senza aspettative."
      },
      {
        "type": "p",
        "text": "Imparare a non giudicarci è il primo passo per imparare a non giudicare gli altri, altra caratteristica fondamentale che un coach deve avere. Intendiamoci, è normale che la nostra mente esprima un giudizio, ma essere consapevoli che quello è solo un giudizio e non necessariamente la realtà delle cose, e metterlo da parte, fa una differenza enorme per un coach."
      },
      {
        "type": "p",
        "text": "La pratica ci insegna ad accettare, a dire di sì alla vita, a lasciare andare, ad essere grati, ad essere gentili con noi stessi e con gli altri, ad essere accoglienti e pazienti; ci insegna a riconoscere noi stessi attraverso l’azione dell’essere e non del fare. Caratteristiche fondamentali per un coach."
      },
      {
        "type": "p",
        "text": "Non ci insegna ad essere felici e sereni, anzi a volte, quando si pratica in momenti particolari della vita, amplifica i nostri disagi, eppure ci insegna a stare in quei disagi, ascoltare le emozioni, a viverle e ad accoglierle, qualunque esse siano."
      },
      {
        "type": "p",
        "text": "L’abilità di essere presenti è la prima abilità richiesta ad un coach, così come quella dell’ascolto profondo, del non giudizio, e quella di essere capaci di stare con le emozioni. Bisogna allenare il nostro stato di presenza se desideriamo migliorare la nostra capacità di entrare nel flow."
      }
    ]
  },
  {
    "slug": "alla-ricerca-della-felicita",
    "title": "Alla ricerca della felicità",
    "excerpt": "Cosa succede quando un coachee porta in sessione un obiettivo come “essere felice”? Una riflessione sulla misurabilità della felicità e su come, spesso, lo siamo già più di quanto pensiamo.",
    "category": "Crescita personale",
    "date": "2 settembre 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/alla-ricerca-della-felicita.png",
    "content": [
      {
        "type": "p",
        "text": "Quando ho deciso di intraprendere il percorso per diventare coach, e nello specifico durante la fase iniziale (Skills), mi è venuto spontaneo chiedermi davanti a quale obiettivo di sessione mi sarei potuta sentire spiazzata. In aula, dopo la primissima esperienza di coaching practice, venni assalita da un sussulto emotivo quando mi chiesi “…cosa succederebbe se qualcuno portasse come obiettivo la felicità, il voler essere felice?”. Stavo appena capendo l’importanza della misurabilità dell’obiettivo e tutto ciò che ne sussegue, e quell’ipotetica richiesta mi era sembrata semplicemente irraggiungibile. Qualche settimana fa è successo che, a metà del suo percorso, un coachee con il quale sto lavorando portasse esattamente quell’obiettivo: essere felice. È stata la sessione nella quale ho sperimentato, più che in ogni altra occasione fino ad ora, quanto coach e coachee imparino insieme, quanto essere in partnership apra una serie di infinite possibilità di reciproco apprendimento e quanto tenere la mente aperta e non sentirsi in una posizione di vantaggio possa aumentare la possibilità per entrambi di inner work."
      },
      {
        "type": "p",
        "text": "Dopo essermi sincerata che il lavoro che saremmo andati a fare insieme fosse misurabile, in partnership con il coachee abbiamo stabilito che tirare giù una lista di alcuni degli indicatori di felicità sarebbe stato il primo passo da compiere. Non prima di aver verificato quanto il coachee (ed io) fossimo già felici. Nell’affannosa ricerca della felicità una delle cose che ci sfugge è che lo siamo già, molto di più di quello che pensiamo. Il solo avere la felicità come obiettivo ci garantisce che i nostri bisogni primari siano soddisfatti, e se consideriamo che abitiamo in un mondo in cui il 46% delle persone vive con meno di 6 euro al giorno, mi sembra doveroso fermarsi a pensare quanto siamo già felici o comunque quanto sia incredibilmente maggiore per noi la possibilità di esserlo."
      },
      {
        "type": "p",
        "text": "Dalla sessione ho imparato che la lista stilata dal coachee è estremamente legata con l’essere umani. Per essere felici non serve possedere, essere ricchi, apparire, tutte cose che potrebbero avvantaggiarci la possibilità di godere dello stato di felicità, si intende, ma ciò che garantisce la felicità è il compimento di quelle skills che appartengono al nostro essere umani. Quando si è in grado di navigare le emozioni, si alza il livello di percezione della nostra felicità; quando stiamo facendo qualcosa che mentalmente ci tiene nello stato di flow (qui ed ora) raggiungiamo picchi di felicità inaspettati. La nostra capacità di relazionarci con gli altri, di maturare partecipazione ed empatia verso gli altri, ci regala un senso di felicità che ogni volta ci sorprende, e ci conferma che è vero, noi umani non siamo isole, abbiamo bisogno dei rapporti per sentirci vivi anche se a volte ci creano difficoltà. Vivere in un corpo sano e ambire a mantenerlo tale ci rende felici, e coltivare la nostra spiritualità, la capacità di percepirsi parte di questo meraviglioso universo, è qualcosa che può farci toccare con mano la felicità."
      },
      {
        "type": "p",
        "text": "Sono uscita da quella sessione con una consapevolezza maggiore, non solo su quanto emerso dalla stessa, ma su come faccia la differenza il rapporto di partnership alla base del coaching, e di quanto sia importante per evidenziare la diversità tra il coaching e le altre discipline che lavorano sulla persona. Motivata a fare ricerche su come si misuri la felicità, se i progressi degli studi neurologici abbiano già stabilito quali siano gli indicatori ufficiali di felicità, ho scoperto che là fuori c’è un mondo!"
      }
    ]
  },
  {
    "slug": "musica-e-cambiamento",
    "title": "Come la musica racconta il cambiamento",
    "excerpt": "Il cambiamento come una forza di gravità che ci attrae inevitabilmente. Una riflessione, da coach e da musicista, su come la vera trasformazione non venga dall’esterno ma da dentro di noi.",
    "category": "Crescita personale",
    "date": "30 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/musica-e-cambiamento.png",
    "content": [
      {
        "type": "p",
        "text": "Un argomento piuttosto trattato nei testi musicali è quello del cambiamento, a noi coach tanto caro. La trasformazione passa attraverso la consapevolezza del cambiamento e quindi mi incuriosiva, da coach e da musicista, vedere come nelle canzoni questo argomento veniva trattato."
      },
      {
        "type": "p",
        "text": "Ma cosa significa cambiare? La prima riflessione che ho fatto è stata quella di pensare al cambiamento come alla forza di gravità, dalla quale siamo tutti inevitabilmente attratti. Basti pensare a come ci si sente quando vorremmo che qualcosa cambiasse nella nostra vita, all’energia che mettiamo nelle cose affinché questo avvenga, perché ci sentiamo attratti da quella forza, ma anche quando non vogliamo che quel cambiamento avvenga, a come quell’energia ci destabilizza, perché combattere contro la forza di gravità è praticamente impossibile."
      },
      {
        "type": "p",
        "text": "Nella mia esperienza, in gran parte dei casi, quando un coachee inizia il suo percorso vede il cambiamento come qualcosa di esterno, qualcosa che avviene solo se le condizioni esterne lo permettono. Un po’ come spostarsi da una parte all’altra, solo se ci sono dei mezzi che lo consentano. Oppure percepisce il cambiamento come nella famosissima frase del Gattopardo “Se vogliamo che tutto rimanga com’è, bisogna che tutto cambi”, e quindi muoversi per cambiare le condizioni esterne per far sì che nulla dentro di sé cambi."
      },
      {
        "type": "p",
        "text": "Durante il corso di formazione che ho frequentato con Asterys Lab c’è stato un momento preciso in cui sono riuscita a visualizzare il cambiamento, ed è stato l’attimo in cui cambiare non ha più significato spostarsi da uno stato all’altro, ma svilupparsi, estendersi, crescere in modo tale che si includessero tutte le tappe che da una parte portano verso l’altra. E questo è avvenuto quando sono diventata consapevole che potevo finalmente pensare i miei pensieri, e liberarmi dall’essere pensata dagli stessi. Entrare in profondo contatto con il mio mondo interiore ha fatto sì che le condizioni esterne, che prima sembravano di primaria importanza, diventassero solo una cornice e non il quadro della mia vita. Entrare in profondo contatto con la mia essenza, passaggio a parer mio inevitabile per diventare coach e al quale il corso di formazione ti guida, ha fatto sì che finalmente mettessi i miei pensieri al servizio della mia vita."
      },
      {
        "type": "p",
        "text": "Da quel momento è iniziato un percorso di Meditazione e di Mindfulness che mi ha reso consapevole della padronanza che ognuno di noi ha sulla propria mente, al contrario di quanto si pensi, e cioè che sia la mente ad avere il controllo su di noi. La meditazione e il mio percorso da coach stanno accompagnando il mio cambiamento, la mia trasformazione. Se la forza di gravità del cambiamento mi creava una lotta interiore, ora mi mostra anche l’intesa, la pace, l’armonia. E lascia esclusivamente a me la responsabilità e la possibilità di cambiare: nulla viene più dall’esterno, la scelta è esclusivamente la mia, in piena consapevolezza. Tutto parte da me, tutto parte dall’interno, e poter osservare i propri pensieri e scegliere quali sono funzionali al mio sviluppo, alla mia crescita, come persona e come coach, è stata una grande liberazione. È stato questo il vero cambiamento per me, la mia trasformazione."
      },
      {
        "type": "p",
        "text": "Esplorando il tema nei brani musicali si scopre che molti testi mostrano come l’essere umano molto spesso si aspetti che i cambiamenti avvengano all’esterno, mentre altre canzoni fotografano anche un cambiamento di prospettiva, un cambiamento che deve necessariamente venire da dentro. È solo entrando in profondo contatto con il nostro cuore, quando siamo in grado di ascoltare solamente i suoi battiti, in quel preciso istante, in quel “qui e ora”, che saremo finalmente pronti per la trasformazione."
      }
    ]
  },
  {
    "slug": "rischi-e-vantaggi-dellesposizione-mediatica",
    "title": "Rischi e vantaggi dell’esposizione mediatica",
    "excerpt": "L’invito a un format televisivo diventa lo spunto per riflettere sul rapporto tra notorietà e professione. Quando la visibilità è un acceleratore di carriera e quando invece rischia di diventare un freno.",
    "category": "Professione coach",
    "date": "26 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/rischi-e-vantaggi-dellesposizione-mediatica.png",
    "content": [
      {
        "type": "p",
        "text": "Qualche anno fa la casa di produzione di un noto format televisivo mi contattò: avevano visto il mio profilo pubblicato sul web e mi chiesero di recarmi nei loro uffici per un colloquio. Conoscevo quella trasmissione: in ogni episodio un adolescente e la sua famiglia ricevevano il supporto di un coach per risolvere i loro temi e problemi. Il mio primo pensiero fu che poteva essere una buona occasione per ottenere notorietà, infatti partecipare a un programma del genere, per quanto su un canale “minore” e in seconda serata, significa essere visti da milioni di persone… il mio secondo pensiero invece fu una domanda: “porta valore alla mia carriera partecipare a una trasmissione che è dedicata a un pubblico di famiglie e ragazzi?”."
      },
      {
        "type": "p",
        "text": "Già allora lavoravo prevalentemente come Executive Coach: i miei clienti, top manager e aziende, come avrebbero visto la mia presenza in quella trasmissione? Sarei diventato popolare tra le mamme in cerca di aiuto per i figli? Avrei perso quel posizionamento Corporate che tanto mi stava dando soddisfazione? Oppure manager e responsabili delle risorse umane, pur vedendomi in quella veste, mi avrebbero considerato con maggiore attenzione per chiamarmi a lavorare nelle loro aziende?"
      },
      {
        "type": "p",
        "text": "Con questa domanda mi confrontai nei tre giorni che mancavano al colloquio, senza però trovare una risposta. In compenso aumentarono i dubbi e individuai alcune condizioni da porre ai produttori del format. Giunto negli studi fui quasi sorpreso di trovarmi davanti a una telecamera e a un vero e proprio provino televisivo: avevo pensato ai vari aspetti, ma non a questo."
      },
      {
        "type": "p",
        "text": "Alla fine la scelta per me fu più semplice del previsto, infatti davanti alla telecamera esposi le mie domande e alcune condizioni che per me erano inderogabili, e loro mi chiarirono che le esigenze televisive richiedevano una disponibilità ad accettare compromessi significativi: il coach in sostanza diventava una specie di “motivatore” il cui operato, nella migliore delle ipotesi, si riduceva a una sintesi tra quello che fa un vero coach e le trovate spettacolari degli autori. Cogliere quell’opportunità avrebbe significato perderne molte altre più importanti."
      },
      {
        "type": "p",
        "text": "Uno degli elementi che viene usato per misurare il successo di un professionista è la notorietà e, per quanto non sia sempre vero, possiamo dire che essere noti offre più opportunità di essere visti e quindi di lavorare – purché questa notorietà sia positiva e collegata alle tue capacità di professionista."
      },
      {
        "type": "p",
        "text": "Per me, nel coaching, notorietà significa essere conosciuti nell’ambiente del coaching – colleghi e aziende con cui collaborare – e dai clienti per cui si desidera lavorare. Aumentare le opportunità di far conoscere il proprio operato e le proprie capacità è essenzialmente un acceleratore, ma quello che molti coach a inizio carriera non considerano, o preferiscono non considerare, è che l’auto-promozione, quando ancora non si è abbastanza capaci, amplifica anche la visibilità delle proprie incapacità, facendo diventare la notorietà un freno."
      },
      {
        "type": "p",
        "text": "Molti dei personaggi più noti nel campo dello sviluppo personale e delle psico-tecniche, secondo me, sono più che altro capaci uomini o donne di spettacolo, e questo è certamente un talento: saper coinvolgere in attività di sviluppo personale intere folle lo ritengo un valore. Credo però che l’accento debba essere posto sullo sviluppo personale dei partecipanti e non sulla rappresentazione egotistica del personaggio in questione."
      }
    ]
  },
  {
    "slug": "liberi-e-associati",
    "title": "Liberi e associati",
    "excerpt": "Un coach vive tra due spinte opposte: l'individuazione professionale e il bisogno di appartenenza. Una riflessione sul valore del confronto con i colleghi e dell'attività associativa.",
    "category": "Professione coach",
    "date": "23 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "8 min",
    "img": "/blog/liberi-e-associati.jpg",
    "content": [
      {
        "type": "h2",
        "text": "Dell’individuazione e della beatitudine"
      },
      {
        "type": "p",
        "text": "Rovistando tra alcune mie carte risalenti al secolo scorso -parlo degli anni ’90- ho trovato un articolo di giornale firmato dal filosofo Umberto Galimberti. Ritagliato con cura e messo da parte, è rimasto in un armadio per decenni ed eccolo che ora mi torna utile!"
      },
      {
        "type": "p",
        "text": "Galimberti, dopo aver citato “Diventa ciò che sei” di Nietzsche, proseguiva:"
      },
      {
        "type": "p",
        "text": "“È bene che i giovani sappiano che l’individuazione, propiziata dal distacco, è l’unico destino degno della nostra vita”."
      },
      {
        "type": "p",
        "text": "L’individuazione, che si riferisca al principium individuationis o meno, penso che nasca dalla consapevolezza di sé e dell’essere individuo, consapevole della propria separazione dal resto del mondo. Separazione che, come vedremo più avanti, è un bisogno, ma anche una paura per l’uomo. Non a caso, nello stesso articolo, Galimberti parla anche della “nostalgia della beatitudine” riferendosi al momento primo in cui eravamo ancora uniti al corpo di chi ci ha generati, che se la vediamo dal punto di vista metafisico è la ricerca di tornare a essere parte di un’identità più grande della nostra."
      },
      {
        "type": "h2",
        "text": "Coach solitari e associati"
      },
      {
        "type": "p",
        "text": "Prendendo spunto dal Galimberti mi piace immaginare che, mentre come essere umano sta affrontando questi aspetti dell’esistenza, un coach deve preoccuparsi anche della sua individuazione professionale, subendo contemporaneamente l’attrazione verso la “beatitudine associativa”, perché più diventa coach e più avverte il bisogno di far parte di un più ampio disegno professionale."
      },
      {
        "type": "p",
        "text": "Insomma, l’attività formativa e professionale del coach porta verso l’individuazione, l’attività associativa alla ricerca della dimensione transpersonale del coaching. Certo, in realtà molti coach nell’attività associativa cercano solo una propria convenienza, networking, visibilità, opportunità di business, ma qui preferisco puntare l’attenzione sulle motivazioni valoriali più alte dell’associazionismo."
      },
      {
        "type": "h2",
        "text": "Il coaching in solitaria"
      },
      {
        "type": "p",
        "text": "In principio, molti anni fa ormai, ero un “lone coach“, coach per scelta, solitario senza sapere di esserlo. Avevo i miei clienti e l’apprezzamento che mi offrivano generosamente al punto da inviarmi amici e conoscenti, ma nessuna occasione per confrontarmi con miei pari sulla qualità del mio lavoro. Tutto sommato ero soddisfatto di quello che facevo anche se il fee era un decimo del mio attuale. Alle spalle avevo un paio di corsi di PNL, un percorso di studi pertinente e mi facevo forte delle esperienze di sviluppo spirituale già avute. Qualche volta, mi veniva la curiosità di sapere se, e quanto, facessi bene il mio lavoro, ma all’epoca i coach erano così pochi in Italia e quei pochi… vatti a fidare! Chiaramente questi erano gli alibi e le mie paure dell’epoca."
      },
      {
        "type": "p",
        "text": "Dopo qualche anno di “coaching in solitaria”, per caso feci la scoperta che esisteva la Federazione Italiana Coach -quella che adesso si chiama ICF Italiae, dal mio punto di vista di allora, pensai che si trattasse del solito sistema adottato da qualche coach furbo per darsi importanza e credibilità, non mi interessava, anzi. Qualche anno dopo, grazie all’incontro con Giovanna D’Alessio, invece fui in grado di apprezzare il senso di quell’organizzazione, diventandone parte e poi coach accreditato e persino membro del consiglio direttivo."
      },
      {
        "type": "h2",
        "text": "Il vero valore dell’associazione"
      },
      {
        "type": "p",
        "text": "Oggi le associazioni in Italia si sono moltiplicate e ogni volta che ne vedo nascere una nuova mi chiedo: “Con tutte le associazioni esistenti che bisogno c’era di un’altra?” È una domanda a cui non ho ancora trovato risposta o forse la risposta ce l’ho ma non è politicamente corretta."
      },
      {
        "type": "p",
        "text": "Comunque so che per arrivare da un punto A a un punto B, esistono infinite traiettorie e non si può indovinare dove arriverai da dove sei ora. Forse, proprio grazie all’attività associativa, anche quando impropria o ridondante, si può arrivare ai migliori risultati."
      },
      {
        "type": "p",
        "text": "D’altra parte ho conosciuto tanti colleghi con un sincero desiderio di contribuire e rendersi utili, colleghi che riescono a unire magistralmente la ricerca di una soddisfazione personale con gli interessi di categoria, ma anche dell’evoluzione dell’essere umano – che ce n’è tanto bisogno!"
      },
      {
        "type": "p",
        "text": "Il più grande valore di far parte di un’associazione è avere colleghi con cui confrontarsi e sentirsi parte di un disegno più grande, fare ricerca, crescere insieme, supportandosi e stimolandosi a vicenda."
      },
      {
        "type": "p",
        "text": "Sono convinto che se vuoi crescere come persona, come professionista e se vuoi sviluppare il tuo business, essere un lupo solitario non paga."
      },
      {
        "type": "h2",
        "text": "Il condominio culturale"
      },
      {
        "type": "p",
        "text": "A volte puoi provare fastidio ad avere dei vicini di casa di cui non condividi lo stile o l’educazione, ma penso anche che insieme a quei vicini puoi costruire un futuro migliore, più bello e più utile per tutti. Ovviamente le differenze ci sono, ma diverso non significa per forza migliore o peggiore degli altri, preferisco piuttosto cercare le evidenze di quali sia il miglior metodo, la migliore tecnica o stile e poi trarne le conseguenze. Conseguenze che comunque difficilmente potranno essere definitive e universali visto che il coaching è agli albori, la psicologia non è ancora una scienza perfetta e il comportamento umano è ben lungi dall’essere predittibile."
      },
      {
        "type": "h2",
        "text": "I due bisogni opposti"
      },
      {
        "type": "p",
        "text": "A proposito di psicologia, due bisogni di base di noi esseri umani sono il bisogno di autonomia e indipendenza e, all’opposto, il bisogno di appartenenza e di essere amati. Possiamo rappresentarli come due piatti di una bilancia in un equilibrio altalenante."
      },
      {
        "type": "p",
        "text": "Se ci pensi, da bambino avevi bisogno di sentirti accudito, di sentirti parte della tua famiglia, ma poi volevi anche affermare la tua individualità e autonomia, esplorare nuovi spazi. Riesci a trovare un paio di evidenze di questi bisogni anche nella tua vita di oggi?"
      },
      {
        "type": "p",
        "text": "Tra questi due poli ci dibattiamo tutta la vita in un equilibrio instabile."
      },
      {
        "type": "p",
        "text": "Per una buona parte della mia adolescenza sono stato un lupo solitario, controcorrente e con un motto sempre presente: “se qualcuno l’ha già fatto posso anch’io, se non l’ha fatto mai nessuno posso essere il primo”. Questo principio è evidentemente basato sull’ottimismo che per me è stato funzionale ma, come potranno intuire i più attenti, si sviluppava anche in un mondo solitario e dicotomico, c’ero io e il mondo esterno, che non mi capiva o cercava di ostacolarmi. Persone di maggiore esperienza mi dicevano: “bisogna mangiare un po’ di tutto!” e io diventavo vegetariano… e trent’anni fa in Italia quando dicevi di essere vegetariano ti chiedevano che malattia avessi!. “Studia che ti servirà per trovare un lavoro!” e io mi inventavo un’azienda da una passione. Genitori, insegnanti, parenti e amici, in sostanza mi suggerivano di trovare il mio posto nel mondo, ma a me questo mondo sembrava troppo piccolo e puntavo gli occhi verso l’infinito."
      },
      {
        "type": "p",
        "text": "Probabilmente tutti gli adolescenti si sentono così, forse anche tu hai vissuto qualcosa di simile. Ma quanti hanno avuto consapevolezza, mezzi e determinazione, o l’opportunità per dare veramente vita a quelle potenti forme indefinite che si agitano nel fondo del cuore? Come si è poi sviluppato quel germoglio umano che eri nella tua prima giovinezza?"
      },
      {
        "type": "p",
        "text": "Ecco, penso che un po’ sia normale essere soli tutta la vita, in fondo abbiamo bisogno di essere soli, ma abbiamo anche bisogno di stare in compagnia, ci dibattiamo tra queste due polarità: “Lasciami in pace!” e “Ho bisogno di te!”, restare in lucido equilibrio può richiedere un certo sforzo, ma ne vale la pena, invece la cosa più disfunzionale è restare bloccati in una delle due posizioni. Tu dove sei?"
      },
      {
        "type": "h2",
        "text": "In difesa o aperti al mondo?"
      },
      {
        "type": "p",
        "text": "l nostro lavoro è generoso con noi coach, tempo fa mi è capitato i lavorare con il CEO di un’azienda molto importante. Persona giovane, brillante e di successo, ma con la possibilità, e la necessità, di essere dieci volte più capace ed efficace nelle relazioni interpersonali. I suoi obiettivi ci portarono ad affrontare proprio lo stesso tema che ho vissuto tanti anni fa io: lui e il mondo là fuori pronto a coglierlo in fallo. Cento persone presenti a un evento dove lui è l’ospite d’onore? Tutte pronte a scoprire quando e come farà un errore! Almeno così lui le immaginava e questo bloccava la sua capacità espressiva."
      },
      {
        "type": "p",
        "text": "Rivedere in lui il me stesso del passato è stata un’esperienza importante, mi ha fatto collegare alcuni puntini e vedere in modo ancora più netto il disegno che sto descrivendo. Ovviamente anche il mio cliente ha avuto la fortuna di incontrare un “se stesso” del futuro e ha potuto scoprire che oltre alla “configurazione difensiva” poteva utilizzare anche la “configurazione aperta”, dove accogli la possibilità che il mondo la fuori sia pronto ad apprezzare ogni tua parola guardando al meglio di te."
      },
      {
        "type": "p",
        "text": "Pensando ai colleghi, alle associazioni e alle varie iniziative in questo settore, mi piace avere una configurazione aperta rimanendo capace di assumere quella difensiva solo quando serve, non é detto che io riesca sempre a farlo, ma adesso so come voglio essere. E tu come sei? Come vuoi essere?"
      }
    ]
  },
  {
    "slug": "creativita-e-coaching",
    "title": "Creatività e Coaching",
    "excerpt": "Essere creativi significa vivere ogni esperienza consapevoli di poter scegliere come viverla. Come il coaching aiuta a passare da una dimensione reattiva a una creativa.",
    "category": "Metodo di coaching",
    "date": "19 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "11 min",
    "img": "/blog/creativita-e-coaching.jpg",
    "content": [
      {
        "type": "h2",
        "text": "Vivere ogni singola esperienza consapevoli di poter scegliere come viverla."
      },
      {
        "type": "p",
        "text": "In questa frase racchiudo l’essenza dell’essere creativi, se il suo significato ti sembra nebuloso potrebbe esserti utile leggere quanto segue, se invece hai perfettamente chiaro cosa significa leggendo potresti avere delle piacevoli conferme o utili sorprese."
      },
      {
        "type": "h2",
        "text": "L’idea di creatività"
      },
      {
        "type": "p",
        "text": "Ho imparato che la prima idea è sempre quella banale, la seconda quella normale, la terza va messa da parte, dopo di che siamo nel processo creativo, quello che ha dato alla luce opere famose o che fa nascere idee che cambiano il mondo. Idee come quelle che hanno generato il “telegrafo parlante” di Meucci, il primo volo dei fratelli Wright o, ancor prima, la nascita della psicologia scientifica ad opera di Wundt nel suo famoso laboratorio a Lipsia."
      },
      {
        "type": "p",
        "text": "Tuttavia non parlerò di questa creatività e di questi grandi uomini, credo che i cosiddetti creativi – gli inventori, gli artisti – non siano necessariamente degli esempi rappresentativi di successo. Infatti molto spesso il loro modo di essere creativi appartiene a una sfera compulsiva, legata alla soddisfazione di bisogni di cui sono semplicemente vittime."
      },
      {
        "type": "p",
        "text": "In che modo invece la creatività è portatrice di benessere e padronanza di se stessi? Nelle prossime pagine guarderemo proprio alla creatività da questo punto di vista, quello che impatta sulla maggior parte della vita delle persone, inclusi i creativi di professione."
      },
      {
        "type": "h2",
        "text": "Un altro tipo di creatività"
      },
      {
        "type": "p",
        "text": "Usciamo dall’idea della persona creativa come stereotipo di eccentrico, sregolato, ineffabile e straordinario personaggio e dirigiamoci invece verso l’idea che la creatività sia dote potenziale di ogni essere umano. Entriamo nel mondo psicologico delle persone comuni per conoscere il confine tra creatività e reattività."
      },
      {
        "type": "p",
        "text": "I bisogni primari dell’individuo sono riconducibili a pochi: quello di essere amati e quello di esprimere individualità; il bisogno di sicurezza e quello di varietà. Questi bisogni, portati nella dimensione psicologica umana, hanno un’influenza determinante, generano paure e ambizioni, attitudini e approcci alla vita che diventano distintivi della singola persona e di specifiche culture."
      },
      {
        "type": "p",
        "text": "Le persone normalmente agiscono perché stimolate e non determinano “in modo creativo” il loro comportamento, questo avviene anche a chi si ritiene capace di autodeterminazione e creatività, anzi, proprio alcune tra le persone “insospettabili” sono completamente rapite dalla loro ricerca di soddisfare il bisogno di essere amate-indipendenti-creative o al sicuro."
      },
      {
        "type": "p",
        "text": "Ognuno di noi, per soddisfare questi bisogni, sviluppa precocemente delle strategie di comportamento che spesso sono socialmente funzionali, si impara a essere ordinati, precisi, puntuali, oppure a lavorare sodo e a essere onesti, altruisti, persino creativi! Insomma una varietà di comportamenti politicamente corretti, ma mossi da un meccanismo reattivo, quindi non gestito. Stesso meccanismo che genera anche effetti opposti e socialmente meno apprezzati, infatti, comportamenti funzionali in un contesto o in una certa misura, diventano disfunzionali in un contesto diverso o in un’altra misura."
      },
      {
        "type": "h2",
        "text": "Esseri creativi o reattivi"
      },
      {
        "type": "p",
        "text": "Nel mondo reattivo non c’è scelta, le persone sono inconsapevoli dei meccanismi e delle spinte che le guidano o non riescono a cambiare anche se . Qualcuno ci stimola e noi rispondiamo, come animali, stimolo risposta, niente di più. Un animale percepisce pericolo, cibo, possibilità di riprodursi e reagisce secondo un programma istintivo. Qui non c’è spazio per le scelte, la parte più primitiva del nostro cervello continua a governare parte della nostra vita esattamente come faceva milioni di anni fa, questo è utile quando le situazioni lo richiedono, purtroppo accade anche in situazioni che non hanno veramente a che fare con i temi di sopravvivenza, ma che ci appaiono tali per il significato che gli attribuiamo."
      },
      {
        "type": "p",
        "text": "Siamo esseri creativi nella misura in cui facciamo delle scelte, altrimenti siamo parte di un programma in esecuzione, routine di codice informatico che si ripetono sempre uguali ogni volta che si preme un pulsante o si verifica una data condizione, routine che possono anche dare forma a incredibili creazioni, ma che non sono creative, almeno non nel senso che intendiamo qui."
      },
      {
        "type": "p",
        "text": "I “reattivi” vengono spinti dai loro bisogni e dal tentativo di rispondere agli stimoli circostanti mentre i “creativi” sono consapevoli di poter agire al di fuori dello schema stimolo/risposta, per esempio, non facendo qualcosa solo perché ci si aspetta che lo facciano, oppure offrendo cortesia a chi li offende, comprendendo che la minaccia percepita non è reale, che magari si tratta solo di un collega che cerca di fare bella figura e non di farci perdere il lavoro… queste persone non solo determinano consapevolmente le loro azioni, ma sono anche consapevoli di essere in grado di farlo."
      },
      {
        "type": "h2",
        "text": "Dalla parte del coachee"
      },
      {
        "type": "p",
        "text": "Il coaching – inteso secondo i canoni della International Coach Federation – con il suo approccio creativo rende disponibili per il cliente possibilità nuove e inusuali, pone le condizioni per cui un cliente possa accedere alla propria capacità creativa sentendosi capace e supportato nel farlo. Questo si deve in particolare a tre “ingredienti”: la partnership, l’empowerment e l’orientamento all’azione."
      },
      {
        "type": "p",
        "text": "Partnership: il coach è partner del suo cliente, si pone in una relazione paritaria che facilita confidenza e assenza di giudizio permettendo una delle condizioni essenziali perché la creatività si esprima: la libertà di sbagliare, la possibilità di fare o dire cose che potranno essere inutili o sbagliate, ma che verranno valorizzate in quanto utili al processo creativo."
      },
      {
        "type": "p",
        "text": "Normalmente questo è impraticabile, la cultura in cui viviamo vive l’errore come un disonore e nessuno vuole sbagliare o far sapere di averlo fatto. Per esempio, nelle aziende le persone per non sbagliare portano il livello di innovazione verso il basso, difficilmente tentano strade nuove. Questo diventa paradossale quando l’azienda chiede ai suoi impiegati innovazione, ma non cambia la politica di rewarding continuando a premiare chi fa la cosa giusta invece che chi tenta nuove strade. Il coaching scardina questi meccanismi e se il coach riesce veramente a generare partnership con il cliente gli offre un’opportunità creativa di valore inestimabile"
      },
      {
        "type": "p",
        "text": "Empowerment: con questa parola si intende quel particolare comportamento del coach che fa sentire il cliente autonomamente capace e responsabile dei risultati. Anche questa è un’opportunità che raramente incontriamo nella vita di tutti i giorni, persino le persone che ci vogliono più bene, con la loro premura e presenza, rischiano di non farci sentire capaci di fare da soli, non ci offrono la possibilità di scoprire quanto siamo capaci e “potenti” perché impegnate a facilitarci il cammino. Parlo tipicamente dei genitori, ma anche di partner, manager o colleghi. L’empowerment è un’altra di quelle parole tanto citate ma poco praticate. Il coach per generare empowerment deve veramente essere scollegato da modelli genitoriali o di guida. Deve essere capace di mettere da parte le sue personali necessità di sentirsi utile o apprezzato e lavorare perché il suo cliente diventi, giorno dopo giorno, più forte e consapevole di potercela fare anche quando il coach sarà solo un lontano ricordo. Questa possibilità è realizzabile nella misura in cui il coach abbia superato i suoi comportamenti reattivi e sia emerso dal groviglio di bisogni insoddisfatti e paure che rendono tanto forte l’ego quanto debole il coach."
      },
      {
        "type": "p",
        "text": "Orientamento ai risultati: le più belle intenzioni del mondo restano tali se non si trasformano in fatti, il coaching permette proprio questo passaggio che in altri contesti troppo spesso viene trascurato. Nel percorso di coaching e nella singola sessione, dopo aver facilitato una fase più creativa il coach supporta il cliente nella definizione di un piano d’azione che permetterà agli obiettivi di diventare realtà. Per sognare ad occhi aperti, tenere nel cassetto i progetti e lamentarsi della vita che non cambia non serve un coach, il cliente ha bisogno di essere stimolato e supportato nel perseguire i propri obiettivi in modo professionale. La maggior parte delle volte i clienti mi riferiscono che essere sostenuti nella creazione di un piano di azione permette loro di avanzare nella direzione desiderata più di ogni altro metodo o tecnica sperimentati prima."
      },
      {
        "type": "h2",
        "text": "Dalla parte del coach"
      },
      {
        "type": "p",
        "text": "A proposito di creatività, nel progettare percorsi di formazione per coach, una delle maggiori sfide che si affrontano è stimolare gli aspiranti coach – che spesso hanno un consolidato modo di essere – a passare dal mondo reattivo a quello creativo. Infatti a un coach viene richiesta creatività durante tutto lo svolgimento del suo lavoro, quindi non solo deve essere “creativo” e pronto a cogliere la profondità di quanto il suo cliente porta nella sessione, ma deve anche facilitare la creatività del proprio cliente supportandolo nello spostamento dal ruolo di vittima – delle circostanze, delle persone, del destino, ecc. – a quello di responsabile dei risultati, capace di cambiare comportamento-strategia-mezzi per ottenere risultati diversi."
      },
      {
        "type": "p",
        "text": "Uno dei momenti in cui potremmo fare i conti con la reattività del cliente è quando gli offriamo feedback. Possiamo infatti ricevere una risposta più o meno difensiva, volta a spiegare, giustificare, rendere accettabile il comportamento o il fatto rilevato. Per questo è importante acquisire delle competenze specifiche nel dare feedback e per questo i coach di maggior successo sanno dare feedback nel modo più appropriato… ma torniamo al cliente, lo abbiamo lasciato lì che si giustificava: “è successo perché io pensavo che… in realtà io sapevo che sarebbe andata in quel modo, ma volevo proprio vedere come avrebbe reagito… in fondo non mi interessava veramente quella promozione… no non sono stato io, è stata lei!”."
      },
      {
        "type": "p",
        "text": "Premesso che nella misura in cui un cliente cerca di giustificarsi non lo stiamo facendo sentire al sicuro, è utile chiedersi cosa fa reagire così il nostro cliente e, più in generale: perché le persone hanno bisogno di giustificarsi? Nota bene il significato di questa parola: giustificarsi, rendersi giusti, cercare di essere visti come giusti. Abbiamo parlato dei bisogni fondamentali e tra questi c’è il bisogno che i nostri simili ci apprezzino. Oltre a comprendere questo dobbiamo fare i conti con il nostro bisogno di essere apprezzati, ti è mai capitato di avere difficolta a dare un feedback che sapevi avrebbe creato una reazione difensiva? Quella difficoltà probabilmente ha una relazione con il tuo bisogno di restare in una relazione positiva con le persone, di non essere giudicato “cattivo”. Altro momento della verità in cui potresti accorgerti di essere in una dimensione reattiva è quando fai al tuo cliente una domanda o un’osservazione che ti viene rispedita indietro, vedo spesso gli aspiranti coach difendere quanto detto, offrire spiegazioni per far capire al coachee che in fondo la domanda o l’osservazione aveva senso. In casi come questi il movente è reattivo, dovremmo invece superare il bisogno di essere giusti e accettare di aver detto qualcosa non pertinente. Ma ce n’è anche per chi fa spesso sessioni più lunghe del previsto. Cosa dobbiamo dimostrare? Siamo sicuri che “di più” è meglio?"
      },
      {
        "type": "h2",
        "text": "Un dialogo reattivo"
      },
      {
        "type": "p",
        "text": "Mauro è in piedi, aspetta Paolo da mezz’ora e inizia a essere veramente impaziente. Il suo collega non è mai puntuale, ma questa volta sta tardando più del solito. Proprio mentre Mauro pensa di andarsene arriva il collega: “Paolo, sono qui ad aspettarti da mezz’ora! Possibile che tu non sia mai puntuale?”."
      },
      {
        "type": "p",
        "text": "Paolo, trafelato dice: “Oggi c’era un traffico bestiale. Mai visto così!”"
      },
      {
        "type": "p",
        "text": "Mauro non ci crede e immagina sia una delle tante scuse per cui Paolo è noto tra i colleghi: “Mi potevi almeno avvertire, sono stato qui ad aspettarti in piedi pensando che arrivassi da un momento all’altro!”. Mauro è abbastanza arrabbiato, Paolo replica offeso: “Potevi anche sederti mentre aspettavi!”."
      },
      {
        "type": "p",
        "text": "In genere queste discussioni sono sassi che diventano valanghe, meglio capire cosa c’è veramente sotto e cambiare approccio."
      },
      {
        "type": "p",
        "text": "Ormai è chiaro, dialoghi come questo appartengono al mondo reattivo, sarebbe tutto più semplice se Paolo, di fronte alla reazione di Mauro che non si sente rispettato, chiedesse semplicemente scusa comunicando al collega che ne comprende il punto di vista e l’emozione. Anche se esprimiamo una certa creatività nell’inventare scuse, questo comportamento è reattivo non creativo."
      },
      {
        "type": "h2",
        "text": "Cosa fare?"
      },
      {
        "type": "p",
        "text": "In che modo, come persone e come coach, possiamo passare da una dimensione reattiva a una creativa? Cioè, in che modo possiamo esprimere una libertà di scelta nelle nostre azioni? Come passare da reagire ad agire?"
      },
      {
        "type": "p",
        "text": "Questo è un processo che richiede la comprensione dei meccanismi e della posta in gioco, il desiderio e la scelta di cambiare e tanto, tanto lavoro, magari con un buon coach."
      },
      {
        "type": "p",
        "text": "Questo comprende l’essere consapevoli di quello che accade fuori e dentro di noi, riuscendo a far tesoro dei feedback che riceviamo, richiede impegno specifico e la disponibilità a farsi aiutare."
      },
      {
        "type": "p",
        "text": "Come coach dobbiamo considerare che essere creativi per noi è fondamentale perché fa la differenza tra la simulazione e la performance, tra una persona che si sforza di sembrare un coach e un coach che fa bene il suo lavoro."
      },
      {
        "type": "p",
        "text": "Rileggendo adesso la frase di apertura trovi qualche nuovo significato?"
      }
    ]
  },
  {
    "slug": "in-nome-del-coaching",
    "title": "In nome del Coaching…",
    "excerpt": "Con la parola \"coaching\" si indicano attività molto diverse tra loro. Una riflessione sul significato del termine e sull'utilità (e i limiti) di segmentarlo in mille definizioni.",
    "category": "Professione coach",
    "date": "16 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/in-nome-del-coaching.jpg",
    "content": [
      {
        "type": "p",
        "text": "Prima di parlare di come decliniamo la parola “coaching”, vorrei riconsiderare proprio quest’ultima. Usano il termine coaching, professionisti che operano molto diversamente tra loro, per qualità, tipo di attività, intenzione e risultati. Per esempio, si fanno chiamare coach molti consulenti, trainer, psicologi, ma anche personaggi meno professionali che manipolano, blandiscono, danno consigli discutibili o peggio, truffano i propri clienti."
      },
      {
        "type": "p",
        "text": "Ancora oggi scegliere il giusto coach non è facile e sarebbe impossibile se non esistessero il passaparola (sempre che arrivi da un esperto) e delle credenziali riconosciute da qualche associazione."
      },
      {
        "type": "p",
        "text": "Stesso problema lo affronta chi vuole fare un corso per diventare coach, il numero delle scuole cresce velocemente e aumenta anche la difficoltà di orientarsi. Maggiore è lo sviluppo della professione in termini di fatturato e maggiore l’ingresso sul mercato di operatori abituati a lavorare in modo massivo, con marketing molto efficace, ma senza know how specifico e deontologia."
      },
      {
        "type": "p",
        "text": "Se negli anni ’90 i pionieri del coaching avessero inventato un nome, invece di usarne uno che già esisteva, per esempio: “Briting”, oggi forse ne avremmo l’esclusiva. Che bello sarebbe! Nessuno penserebbe che alleniamo una squadra sportiva o ci confonderebbe, solo per fare un esempio, con personaggi pubblici discutibili e mentalisti vari."
      },
      {
        "type": "p",
        "text": "Ma, evidentemente, questo era il destino del coaching, questa indefinitezza ci costringe a essere “open source”, open-minded e senza un nome univoco dietro cui ripararci. Siamo spinti a costruire credibilità, affidabilità e a dialogare con tutti… che poi, a pensarci bene, è una ricchezza, va bene così."
      },
      {
        "type": "h2",
        "text": "Il mio coaching è differente"
      },
      {
        "type": "p",
        "text": "“Coaching is coaching”, per la prima volta sentii questa frase più di dieci anni fa, a un meeting internazionale di coach e mi torna in mente ogni volta che affronto questo argomento. Penso che continui ad essere una frase giusta, in sostanza si usano tanti nomi per chiamare la stessa cosa, ma è anche vero che le definizioni hanno sempre una loro utilità."
      },
      {
        "type": "p",
        "text": "Il coaching viene classificato secondo diversi criteri:"
      },
      {
        "type": "list",
        "items": [
          "tipologia di clienti o situazioni a cui è destinato – executive, personal, life, business, career, sport, group, team, organizational, ecc.;",
          "modello o approccio utilizzati nello svolgimento – situazionale, trasformazionale, ecc.;",
          "medium – telefonico, in presenza, in videconferenza;",
          "durata delle sessioni – instant, laser, slow, ecc.;"
        ]
      },
      {
        "type": "p",
        "text": "Oltre a questi criteri ce ne sono altri naturalmente, molti legati al singolo coach o alla coaching company che decidono di dare un nome originale al proprio operato e cercano distintività."
      },
      {
        "type": "p",
        "text": "Insomma, definire il coaching è utile, aiuta i clienti a distinguere a scegliere almeno la tipologia di coaching, anche se questo non è sufficiente a offrire garanzie sulla qualità."
      },
      {
        "type": "p",
        "text": "Ogni volta che diamo un nome specifico alle cose, queste acquistano un’identità più precisa, quindi, in teoria, potremmo accogliere favorevolmente ogni termine che rende specifico un particolare tipo di coaching, tuttavia questa rincorsa alla distinzione ha un prezzo."
      },
      {
        "type": "h2",
        "text": "Il prezzo della segmentazione"
      },
      {
        "type": "p",
        "text": "Come detto, l’identità del coaching è fragile, creare una frammentazione della sua identità davvero può aiutare il pubblico a riconoscerlo meglio?"
      },
      {
        "type": "p",
        "text": "Capita che mi si chiedano chiarimenti sui diversi corsi di coaching, se sia meglio un corso di Life o di Executive coaching… la mia risposta è sempre la stessa: il coaching non è un’attività e nemmeno una tecnica, il coaching è una professione, ma è soprattutto uno state of mind, una condizione interiore, che se l’apprendi puoi essere il coach di chiunque, in qualunque ruolo o contesto."
      },
      {
        "type": "p",
        "text": "La sostanza del coaching è riferita alle persone, siano esse manager di alto livello, imprenditori, politici, attori, cantanti, studenti, madri e padri di famiglia o single in cerca di compagnia. Quando ci troviamo di fronte a un cliente, stiamo interagendo come coach, con un altro essere umano."
      },
      {
        "type": "p",
        "text": "Un cliente potrebbe credersi un dio, perché ha tante persone che lo seguono o perché guadagna tanto, potrebbe credersi una nullità perché non lo segue nessuno e fa fatica a guadagnarsi il suo posto, ma il nostro lavoro è ricordargli il suo essere un umano, a prescindere da chi lo segue e da quanto guadagna."
      },
      {
        "type": "p",
        "text": "Il coach stimola il cliente a entrare nell’arena della verità umana e a guardarsi come non ha mai fatto, gli fa scoprire l’acqua calda che, però, cambia tutto."
      },
      {
        "type": "p",
        "text": "Quale che sia il nome che diamo al nostro coaching, assicuriamoci che significhi qualcosa di sensato e che non inganni nessuno."
      }
    ]
  },
  {
    "slug": "perche-il-coaching-e-efficace",
    "title": "Perché, il Coaching è efficace?",
    "excerpt": "Cosa rende davvero efficace il coaching? Dalla lista \"SACRA\" ai fattori come partnership ed effetto placebo, un viaggio tra prove scientifiche e dati di sessione.",
    "category": "Efficacia del coaching",
    "date": "12 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/perche-il-coaching-e-efficace.jpg",
    "content": [
      {
        "type": "p",
        "text": "Per parlare dell’efficacia del coaching, mi sono ispirato a un interessante articolo (1)) del collega Willem Jan Hofmans e ho definito la mia lista “SACRA”, con le dimensioni dell’efficacia del coaching:"
      },
      {
        "type": "list",
        "items": [
          "Soddisfazione – quanto il cliente e/o lo sponsor hanno gradito, si sono trovati a loro agio durante tutto il percorso;",
          "Apprendimento – quali modelli, teorie, approcci il cliente ha fatto propri alla fine del percorso;",
          "Comportamento – quanto cambiano effettivamente i comportamenti, ma anche il modo di pensare e la consapevolezza del cliente;",
          "Risultati – in che modo cambiano i risultati, di business, di performance, di vita in generale. Qui normalmente si misura il ROI;",
          "Attinenza – quanto è attinente agli obiettivi definiti per il percorso, quello che il cliente e lo sponsor raggiungono."
        ]
      },
      {
        "type": "p",
        "text": "Questa lista sembra proprio un bel punto di partenza, l’acronimo SACRA suona pure bene e certo si ricorda facilmente. Non ci resta che misurare in qualche modo le varie dimensioni… ma è proprio quel “in qualche modo” che fa penare gli studiosi di tutto il mondo, perché molte di queste dimensioni passano per la percezione delle parti coinvolte e non è per niente facile creare le condizioni per ridurre variabili e garantire una misurazione scientifica."
      },
      {
        "type": "h2",
        "text": "La virgola"
      },
      {
        "type": "p",
        "text": "Ti è mai capitato che qualcuno telefonasse proprio nel momento in cui lo stavi pensando, o ti hanno mai raccontato di aver vissuto questa esperienza attribuendole un particolare significato?"
      },
      {
        "type": "p",
        "text": "In casi come questo, ci si può convincere che esista un nesso causale tra pensiero e telefonata, ma se ci pensiamo bene, è anche facile trovare evidenze del contrario. Basta contare quante volte chiamano persone a cui non pensi, quante volte pensi a qualcuno senza ricevere la sua telefonata o quante volte pensi a qualcuno che ti chiama, senza che poi ci sia un particolare significato. Ma spesso, tendiamo a cercare solo conferme delle nostre convinzioni."
      },
      {
        "type": "p",
        "text": "Per questo nel titolo di questo articolo dopo il “Perché” c’è la virgola, per dire: “ma perché, è provata l’efficacia del coaching?”."
      },
      {
        "type": "p",
        "text": "Milioni di clienti soddisfatti, fatturato globale multimiliardario, ritorno sugli investimenti (ROI) indicato tra il 221%(2) e il 545%(3), sembrano confermare che il coaching funziona. Così come studi statistici dove il 92,2% dei clienti dichiara che ripeterebbe l’esperienza di coaching e l’82,7% si dichiara “molto soddisfatto” (4). Più difficile però è trovare degli esperimenti controllati che offrano dei dati qualitativi e quantitativi utili a definire l’efficacia del coaching in tutte le sue dimensioni."
      },
      {
        "type": "h2",
        "text": "La prova scientifica"
      },
      {
        "type": "p",
        "text": "In un precedente articolo accennavo a uno studio scientifico per cui più del 50% dell’efficacia della psicoterapia sarebbe dovuto alla somma di effetto placebo e alleanza terapeutica. Concludevo che questi due effetti, per logica, sono riscontrabili anche nel coaching, dove il corrispettivo di alleanza terapeutica può essere individuato nella Partnership."
      },
      {
        "type": "p",
        "text": "Studi come questo permettono di passare da un approccio ingenuo a uno scientifico, esplorano se effettivamente i risultati che il cliente ottiene siano dovuti al coaching o ad altro."
      },
      {
        "type": "p",
        "text": "Se più del 50% dell’efficacia del coaching è dovuta alla somma di Placebo e Partnership, dobbiamo affermare che il coaching non è specificamente efficace? Al contrario, diciamo che il coaching funziona anche soltanto grazie a questi due fattori. Esagerando un poco, dico spesso agli studenti in ansia da prestazione: “il coaching funziona nonostante il coach”."
      },
      {
        "type": "p",
        "text": "L’effetto placebo è anche una prova del potere della nostra mente. Richard Bandler, co-fondatore della Programmazione Neuro Linguistica, racconta di aver chiesto alla Food and Drug Administration (FDA) americana di autorizzare la vendita di pillole, dichiaratamente senza alcun principio attivo, perché provatamente efficaci a causa del loro effetto placebo. Come a dire che se il 40% dei soggetti cui lo somministri guarisce, quel placebo ha una performance paragonabile a parecchi farmaci autorizzati e regolarmente in vendita. Ovviamente l’FDA non accolse la sua richiesta."
      },
      {
        "type": "h2",
        "text": "I principali fattori di efficacia"
      },
      {
        "type": "p",
        "text": "Oltre alla mia lista SACRA, in questi anni ho implementato diversi strumenti per misurare e sviluppare l’efficacia del coaching, uno di questi è il “Report di Sessione”."
      },
      {
        "type": "p",
        "text": "Coach e cliente, dopo ogni sessione compilano un questionario, dove descrivono in modo strutturato, l’andamento del lavoro e i risultati raggiunti. Sperando sia utile, ne condivido volentieri alcuni dati."
      },
      {
        "type": "p",
        "text": "Prendendo come campione 400 report del 2017, tra le qualità riportate dai clienti come decisive per l’efficacia del coaching, troviamo (dalla più frequente): ascolto, relazione, apertura, domande, consapevolezza, restituzione, fiducia, obiettivo, condivisione, non giudizio e provocazione."
      },
      {
        "type": "p",
        "text": "Inoltre, in una scala da 1 a 5, dove il massimo è 5, l’11% dei clienti dichiara di aver percepito l’efficacia della sessione di coaching a livello 5, l’82% a livello 4 e l’8% a livello 3."
      },
      {
        "type": "p",
        "text": "Per concludere, penso che possiamo anche chiederci “Perché il coaching funziona?” senza virgola, ma serviranno ancora parecchi studi per dare a questa domanda una risposta esaustiva."
      }
    ]
  },
  {
    "slug": "coachable-o-uncoachable-questo-e-il-problema",
    "title": "Coachable o Uncoachable… Questo è il problema.",
    "excerpt": "Il coaching non è per tutti: ha senso solo con un cliente che desidera cambiare e si assume la responsabilità dei propri risultati. Come riconoscere chi è \"coachable\".",
    "category": "Metodo di coaching",
    "date": "9 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "5 min",
    "img": "/blog/coachable-o-uncoachable-questo-e-il-problema.jpg",
    "content": [
      {
        "type": "p",
        "text": "Che si parli di persone od organizzazioni, il coaching non è per tutti. Infatti il coaching per avere un senso deve riferirsi ad un cliente con due caratteristiche specifiche: il desiderio/bisogno di cambiamento e il senso di responsabilità, cioè l’ownership della condizione di partenza e dei risultati desiderati."
      },
      {
        "type": "h2",
        "text": "Il desiderio/bisogno di cambiamento del cliente"
      },
      {
        "type": "p",
        "text": "Alla base delle azioni delle persone c’è un motivo per cui vale la pena di muoversi. Al livello più semplice troviamo i bisogni fisiologici che “costringono” l’uomo in quanto essere vivente biologico a impegnarsi nel nutrirsi, riprodursi, insomma cercare il piacere ed evitare il dolore. In un mondo più complesso, come quello psicologico, l’essere umano è “costretto” a impegnarsi per soddisfare bisogni più raffinati quali quello di consapevolezza di sé, il bisogno di relazione con i suoi simili o quello di varietà e senso di crescita. Bisogni che paiono posti nell’essere umano per spingerlo ad agire, a non accontentarsi mai di quel che ha raggiunto, quasi fosse destinato a diventare sempre più grande e capace."
      },
      {
        "type": "p",
        "text": "D’altro canto, possiamo anche leggere questa situazione come il risultato, e non la causa, di come è l’essere umano. Infatti, approfittando del lavoro di Darwin e Lamarck, possiamo immaginare che tutti gli individui con caratteristiche diverse da queste non siano sopravvissuti alla selezione naturale e che queste caratteristiche si siano sviluppate con l’esperienza e trasmesse di generazione in generazione."
      },
      {
        "type": "p",
        "text": "Che sia la causa o l’effetto, oggi un individuo o un’organizzazione che non abbia un bisogno da soddisfare di sopravvivenza o di realizzazione resta fermo e rinuncia così a ogni possibilità di sviluppo. Senza l’energia che deriva da un desiderio o un bisogno, le persone esistono ma non sono vive. Per svolgersi in modo sensato, il coaching ha bisogno di un cliente vivo o che sia disponibile a ritrovare la sua energia vitale."
      },
      {
        "type": "h2",
        "text": "Senso di responsabilità, ownership del cliente"
      },
      {
        "type": "p",
        "text": "Ammesso che il cliente abbia dalla sua la spinta al cambiamento, deve essere anche disponibile a prendersi la responsabilità di come stanno le cose e di cambiarle. Per questo credo sia importante che il coach faccia confrontare il cliente con l’esplorazione del suo “Locus of control” (Julian B Rotter -1966), ovvero della sua percezione del controllo degli eventi e della sua vita, controllo che può essere interno o esterno. Se il cliente pensa che questo controllo dipenda da circostanze esterne alla sua volontà e capacità, sarà portato a credersi vittima degli eventi e incapace di cambiare le cose. Se invece crede che il controllo risieda in se stesso, avrà la percezione di essere in grado di fare la differenza e di avere la responsabilità dei suoi risultati. Sono i suoi comportamenti a determinare gli eventi o gli eventi accadono senza che lui abbia la possibilità di influenzarli? Gli obiettivi che il cliente porta, riguardano se stesso? Per esempio: “Voglio capire come posso fare per raggiungere questo obiettivo”. Oppure riguardano gli altri? Tipicamente: “Vorrei che il mio capo fosse diverso!”."
      },
      {
        "type": "p",
        "text": "Oltre al Locus of control, l’esplorazione del senso di responsabilità del cliente può includere anche un lavoro più ampio per cambiare l’approccio mentale che sottostà al raggiungimento di un determinato obiettivo. Infatti ci sono diversi fattori interni, valori e credenze del cliente, che possono essere acceleratori o freni del cambiamento."
      },
      {
        "type": "p",
        "text": "Nel modello di conversazione a Doppia Stella (G. D’Alessio – 2002), che uso come Executive Coach e insegno ai miei studenti, sono presenti due stelle dette: Situazionale e Valoriale. Su queste due stelle si sviluppano i rispettivi cicli di conversazione che interagiscono tra loro rendendo in modo molto efficace l’idea di questa realtà complessa, dove a fronte di obiettivi sulla performance (Stella Situazionale) si deve aiutare il cliente a esplorare e trasformare l’interpretazione del proprio sistema valoriale (Stella Valoriale). Inoltre, a supporto di quanto scritto fin qui, in questo modello è sempre previsto che il coach offra al cliente un momento per la verifica e rafforzamento del suo commitment. Nella maggioranza dei casi, in questa fase, si scopre che quello che sembrava scontato non lo è affatto, spesso emergono atteggiamenti del cliente di sfiducia nel proprio potere di realizzare quanto si è ripromesso di fare o si scopre che ha poca energia in quanto non sente veramente propri la responsabilità o il bisogno/desiderio di realizzare quel piano d’azione."
      },
      {
        "type": "p",
        "text": "Il coaching, dicevo in apertura, non è per tutti, questo perché alcune persone non sono “vive” e tra quelle vive alcune hanno un Locus of control esterno per cui non credono di avere la responsabilità dei loro problemi e non credono di avere il potere di cambiare le cose. Questo atteggiamento ha un impatto depotenziante nell’efficacia di persone, organizzazioni e persino di intere comunità."
      },
      {
        "type": "p",
        "text": "Il coaching non è per tutti, ma fortunatamente è per molti, per quelli che, avendo ancora desideri e bisogni da soddisfare, sono pronti a prendersi la responsabilità della loro esistenza, ovvero sono “coachable”, pronti insomma a scoprire che hanno il potere di cambiare le cose, iniziando ad ammettere che i risultati ottenuti fino a quel momento sono collegati con il loro modo di agire, con il loro modo di pensare e di essere."
      },
      {
        "type": "p",
        "text": "Durante la relazione con il cliente ci sono diversi segnali che aiutano il coach a capire se il cliente non è coachable:"
      },
      {
        "type": "list",
        "items": [
          "parla solo dei suoi successi;",
          "non riconosce le proprie responsabilità negli insuccessi;",
          "respinge eventuali feedback ricevuti su suoi comportamenti disfunzionali;",
          "punta l’attenzione sulle responsabilità degli altri;",
          "si descrive come una vittima degli eventi e/o di altre persone;",
          "tende ad arrivare in ritardo alle sessioni di coaching;",
          "non completa task e impegni che si era preso nelle sessioni precedenti;",
          "ha sempre qualcosa di più important e o urgente da fare che lavorare su se stesso;",
          "cerca di portare le conversazioni su temi e argomenti diversi da quelli definiti per il percorso di coaching."
        ]
      }
    ]
  },
  {
    "slug": "un-traguardo-per-pochi",
    "title": "Un traguardo per pochi",
    "excerpt": "Diventare coach è alla portata di tutti, ma al traguardo arriva solo chi si prepara e persevera. Le domande da porsi e i criteri per scegliere la formazione giusta.",
    "category": "Formazione coach",
    "date": "5 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "6 min",
    "img": "/blog/un-traguardo-per-pochi.jpg",
    "content": [
      {
        "type": "p",
        "text": "La strada per diventare coach professionista è percorribile da tutti, e il solo percorrerla ti cambia la vita, ti rende più consapevole ed efficace, ma al traguardo arrivano solo quelli che hanno saputo/ voluto ben prepararsi e perseverare nella pratica. Ecco come."
      },
      {
        "type": "h2",
        "text": "DIVENTARE UN COACH NATURALE"
      },
      {
        "type": "p",
        "text": "I funghi o i corbezzoli nascono in modo spontaneo, ma coach non si diventa spontaneamente: quando vedi un coach che agisce efficacemente, in modo naturale e spontaneo, stai vedendo il risultato di anni di applicazione e sviluppo personale. Ad esempio, nella danza classica, vedendo Roberto Bolle eseguire una serie di Tour en l’air si potrebbe pensare che sia una cosa naturale e semplice, ma Roberto Bolle e chiunque abbia mai provato a fare la stessa cosa (parlo per esperienza) sa quanto lavoro, fisico e mentale, sia necessario per arrivare a esprimere tanta “naturalezza”."
      },
      {
        "type": "p",
        "text": "Quindi un Coach oltre ad avere una certa predisposizione deve applicarsi e studiare per cambiare la propria “forma e sostanza”, deve imparare a pensare e persino ad essere in un modo diverso, fino a poter fare con naturalezza cose che per altri sono impossibili, per esempio: seguire un modello di conversazione e governarne il processo, ma allo stesso tempo essere “qui e ora” con il suo cliente; sospendere il proprio giudizio sui fatti e accompagnare il cliente in un mondo creativo dove ogni opzione è possibile; sfidare le convinzioni del cliente in modo diretto e franco eppure farlo sentire sostenuto e compreso… e molto altro."
      },
      {
        "type": "p",
        "text": "Ecco allora che si profila un percorso ideale, una scuola, degli insegnanti e un contesto dove sperimentarsi in modo sicuro, per il professionista e per i suoi clienti. Ma come orientarsi tra le tante possibilità?"
      },
      {
        "type": "p",
        "text": "Ogni scuola si presenta al meglio e cerca di attrarre nuovi allievi nei suoi corsi: per capire qual è quella più adatta a te è importante che tu faccia un’attenta analisi delle tue attitudini, dei tuoi obiettivi e dei percorsi formativi possibili."
      },
      {
        "type": "h2",
        "text": "LE DOMANDE PER TE:"
      },
      {
        "type": "h2",
        "text": "CI FAI O CI SEI?"
      },
      {
        "type": "list",
        "items": [
          "Qual è il principale obiettivo che voglio raggiungere?",
          "La mia disposizione a nuove prospettive professionali è reale?",
          "Qual è il mio budget per il training nei prossimi due anni?",
          "Quanto tempo posso investirci?",
          "Che tipo di corso preferisco? Residenziale, face to face, a distanza, e-learning o un mix delle diverse modalità?",
          "Condivido i valori che la scuola propone e rappresenta?",
          "Cosa mi attrae verso il Coaching come professione?",
          "Quali sono i talenti e le esperienze che ho da offrire come coach?",
          "Che coach voglio diventare? Cosa mi farà capire di essere un coach professionista?",
          "Cosa potrebbe ostacolarmi dal diventare un coach efficace?",
          "Cosa mi serve per diventare un coach efficace?",
          "Penso che dovremmo far sempre dialogare il desiderio di raggiungere una perfezione ideale e la necessità di essere giusti così come siamo, trovare insomma la giusta via di mezzo tra l’irraggiungibile e l’insufficiente, ma ci sono delle professioni in cui la “giusta via di mezzo” è comunque ardua da raggiungere. Nella professione del Coaching non basta “fare” il coach, tutti i coach veramente bravi “sono” profondamente e continuamente dei coach. Le tecniche e le competenze possono essere acquisite ma i propri comportamenti, i propri modelli mentali e certe qualità umane sono parte di un modo di essere e sono talenti sviluppati grazie a un processo di trasformazione volontaria e profonda."
        ]
      },
      {
        "type": "p",
        "text": "CI SONO VARI ELEMENTI CHE RENDONO “ECCELLENTE” UN COACH:"
      },
      {
        "type": "list",
        "items": [
          "ha un interesse genuino verso gli altri;",
          "sa ascoltare attivamente quanto detto o non detto;",
          "ricerca una visione sistemica;",
          "le sue osservazioni sono sempre costruttive;",
          "è capace di stimolare e generare cambiamenti;",
          "fa le domande utili per il cliente;",
          "considera i problemi in una prospettiva ampia e creativa;",
          "sa incoraggiare;",
          "non ha continuo bisogno di dimostrare che vale;",
          "considera la sua integrità essenziale;",
          "ha un ego poco ingombrante e lo sa gestire consapevolmente;",
          "agisce coerentemente con quanto dice;",
          "conosce i propri limiti e sa riconoscere se influenzano il proprio lavoro;",
          "ha un’intelligenza emotiva ben sviluppata;",
          "sa rimanere “al buio” quando serve e non ha bisogno di controllare ogni cosa."
        ]
      },
      {
        "type": "p",
        "text": "Queste caratteristiche non si possono simulare e, per quanto possa “entrare nel ruolo” durante la sessione di Coaching, non è pensabile che una persona ego riferita, con particolari problemi o bisogni relazionali possa trasformarsi in un coach solo perché entra in sessione… questa trasformazione è possibile, ma deve avvenire a livello personale e solo dopo sarà disponibile nella professione."
      },
      {
        "type": "p",
        "text": "Se ti sembra troppo difficile, non disperare: il percorso per diventare coach è anche una grande opportunità di sviluppo personale e comunque esistono coach di diverso livello e capacità. L’importante è iniziare e accumulare esperienza: facendo con onestà questa professione avrai l’opportunità di crescere e diventare il professionista che desideri e certamente una persona migliore."
      },
      {
        "type": "h2",
        "text": "MA QUALE FORMAZIONE?"
      },
      {
        "type": "p",
        "text": "Ognuno ha delle esigenze diverse e i percorsi formativi “giusti” potrebbero essere diversi in base ai diversi obiettivi o modi di essere. Però, come responsabile di una scuola che eroga un corso accreditato ACTP e membro di ICF da un decennio, non posso che consigliare di seguire un percorso accreditato dalla International Coach Federation, questa è la mia esperienza e quello che sinceramente credo."
      },
      {
        "type": "p",
        "text": "In ogni caso è importante che prima di scegliere tu verifichi alcuni aspetti:"
      },
      {
        "type": "p",
        "text": "Quello che viene promesso dalla scuola a voce viene anche scritto su un contratto? Prospettive professionali, formatori presenti, ore di formazione accreditate, clienti con cui iniziare l’attività, ecc."
      },
      {
        "type": "p",
        "text": "Che accreditamento offre la scuola? È un accreditamento riconosciuto nel mondo del Coaching nazionale o internazionale? C’è un ente esterno alla scuola che attesta il valore della formazione offerta o fa tutto da sola? Vengono date informazioni chiare ed esaustive sulle procedure di accreditamento? Come sono valutati gli studenti?"
      },
      {
        "type": "p",
        "text": "I formatori della scuola sono dei coach? In che modo sono dimostrate le loro competenze di Coaching? Che esperienza documentata hanno come coach professionisti? Curricula, referenze, certificati, ecc."
      },
      {
        "type": "p",
        "text": "Aderiscono a un codicede ontologico o di etica?"
      },
      {
        "type": "p",
        "text": "Da quanti anni la scuola opera? È possibile conoscere degli ex allievi? La scuola ha clienti nel mondo aziendale? Che reputazione ha su internet o presso ex allievi e competitor?"
      },
      {
        "type": "p",
        "text": "La tipologia di iscritti al corso è compatibile con te e le tue aspettative? Preferisci un clima da “amanti del punto croce” o da master professionale?"
      },
      {
        "type": "p",
        "text": "In che network professionale è inserita la scuola e i suoi formatori? Nazionale, internazionale? Qual è la quantità e qualità di relazioni e con con il mondo del Coaching professionale della faculty?"
      },
      {
        "type": "p",
        "text": "Che tipo di supporto è disponibile alla fine del corso? Tutoring per l’avviamento e l'accreditamento, tirocinio, altri corsi disponibili, Mentor Coaching, Supervisione, ecc."
      },
      {
        "type": "p",
        "text": "Quanto tempo alla settimana ti servirà per studiare e per le esercitazioni? Ore di aula, studio a casa ed esercitazioni."
      },
      {
        "type": "p",
        "text": "La professione del coach è gratificante e piena di soddisfazioni, soprattutto quando si è testimoni dei risultati che un cliente è in grado di ottenere grazie al Coaching."
      },
      {
        "type": "p",
        "text": "Non avere fretta, dedica il giusto tempo a esplorare i percorsi e gli approcci disponibili. Serviranno tempo ed energie per diventare un coach qualificato e accreditato, meglio partire con il piede giusto."
      }
    ]
  },
  {
    "slug": "grande-persona-grande-coach",
    "title": "Grande persona, grande Coach",
    "excerpt": "Non basta avere un figlio per diventare bravi genitori, né fare un corso per essere un buon coach. Perché la crescita personale è il cuore della professione.",
    "category": "Crescita personale",
    "date": "2 agosto 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/grande-persona-grande-coach.jpg",
    "content": [
      {
        "type": "p",
        "text": "Non basta avere un figlio per diventare dei bravi genitori. Sappiamo che c’è una predisposizione naturale all’apprendimento del ruolo genitoriale ma, se alcune cose sono istintive, altre si apprendono con lo studio e molte con l’esperienza."
      },
      {
        "type": "p",
        "text": "Questo accade anche nel coaching, dove per un tipo di competenze aiuta una certa predisposizione naturale, parliamo di empatia, curiosità o comunicazione diretta; altre competenze si apprendono studiando, come le tecniche e i modelli di conversazione o un set di domande predefinite; un terzo tipo di competenze include quelle che si possono acquisire solo attraverso l’esperienza sul campo, come la fiducia nel processo di coaching e nelle proprie intuizioni."
      },
      {
        "type": "p",
        "text": "Tra questi diversi tipi di competenze, quello più incerto è senza dubbio il primo, infatti non è garantito che l’aspirante coach riesca a far emergere queste competenze naturali dal suo strato di detriti culturali e traumi psicologici."
      },
      {
        "type": "p",
        "text": "Proviamo a vedere come si può riuscire in questa impresa."
      },
      {
        "type": "h2",
        "text": "Il male invisibile"
      },
      {
        "type": "p",
        "text": "La raccomandazione più importante che mi sento di dare a chi vuole veramente diventare coach è: “fatti curare”. Non sto scherzando! La cura è essenziale, soprattutto per chi voglia essere d’aiuto agli altri. Tutti abbiamo bisogno di guarire da infanzie abusate e dagli ambienti insani dove siamo vissuti. Non farti ingannare dalla parola “abuso”, potresti pensare a inconfessabili azioni commesse da loschi figuri, qui mi riferisco ad abusi meno visibili eppure rovinosi. Parlo di tutti i condizionamenti che genitori, zii, nonni, insegnanti instillano: la caramella, il gelato, il sorriso, l’elogio usati come ricompensa perché facessimo quel che era consono – e non parliamo delle punizioni. Abbiamo imparato a nascondere quel che sentiamo, pensiamo, desideriamo, a non fare domande, non sognare, non chiedere, non essere insistenti, non metterci in mostra, non dire, non rischiare, non sbagliare."
      },
      {
        "type": "p",
        "text": "Si tende a censurare quello che: infastidisce, è scomodo, mette in imbarazzo, sembra brutto, fa paura. Genitori e parenti con l’intenzione di educarci e mantenerci al sicuro cercano di controllarci e indirizzarci, riducendo e oltraggiando molti dei nostri talenti naturali, a volte i più preziosi."
      },
      {
        "type": "p",
        "text": "Sono di questo genere le cose da cui bisogna guarire sul cammino per arrivare a essere persone equilibrate, consapevoli, presenti."
      },
      {
        "type": "h2",
        "text": "La cura"
      },
      {
        "type": "p",
        "text": "In dieci anni di insegnamento ho potuto vedere quanto questo influisca sugli aspiranti coach. Molti dei partecipanti ai corsi tenuti nella mia scuola di coaching sono persone adulte, con un passato di successi in altre professioni. Sorprende vedere quanto spesso per loro può essere difficile porsi di fronte al cliente con genuina curiosità o chiedere con insistente specificità chiarimenti sull’obiettivo espresso. Anche accettare di entrare in una conversazione senza avere certezza di dove porterà è difficile per chi è abituato a prepararsi e ad avere sempre la risposta pronta. Perché queste difficoltà? “Non vorrei essere indiscreta”… “ma forse è una domanda troppo intima”… “Potrebbe percepirmi come troppo insistente!”… “Era sottinteso!”… “e se poi non so cosa dire?”. Siamo condizionati a essere discreti, ad avere paura del giudizio degli altri, a temere l’errore. Ma se il cliente cerca un coach è perché vuole essere aiutato e sfidato ad andare oltre i suoi orizzonti e cerca molto più di un educato interlocutore che lo accompagni docilmente sui soliti binari."
      },
      {
        "type": "p",
        "text": "Un coach deve entrare nel mondo del cliente senza paura, pronto ad accogliere l’imprevedibile."
      },
      {
        "type": "h2",
        "text": "Apri quella porta"
      },
      {
        "type": "p",
        "text": "Un coach chiede sempre il permesso prima di entrare e, insieme al suo cliente, apre ogni porta con fiducia e ottimismo. Un coach non teme quel che il cliente possa pensare di lui, ma si cura che il cliente possa scoprire nuove cose su se stesso."
      },
      {
        "type": "p",
        "text": "Se è vero che per iniziare a essere genitore devi almeno avere un figlio, per iniziare a essere un coach devi almeno aver fatto un corso di coaching, ma cosa fare oltre al corso? Prima di tutto apri la porta del tuo sviluppo personale, lavora con un buon coach o con uno psicoterapeuta, segui un percorso di sviluppo personale. Diversamente aggiungerai solo una tecnica in più al tuo bagaglio, ma continuerai a pensare come prima, a farti condizionare dai tuoi pregiudizi… sarà tempo perso. Per diventare coach devi crescere come persona e, dopo un certo punto di sviluppo, vedrai che esercitare questa professione ti restituirà al mondo migliore di prima."
      }
    ]
  },
  {
    "slug": "un-coach-di-successo",
    "title": "Un vero coach di successo…",
    "excerpt": "Attraverso la storia (di fantasia) di John Red, sedicente coach di successo, le sette \"regole\" con cui i falsi guru costruiscono la loro credibilità.",
    "category": "Professione coach",
    "date": "29 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/un-coach-di-successo.jpg",
    "content": [
      {
        "type": "p",
        "text": "Un bravo coach, normalmente, evita i luoghi comuni e stimola i propri clienti a ragionamenti che vadano oltre, ma a volte troviamo la parola coach accanto al nome di chi dei luoghi comuni si fa forte e li usa per i suoi scopi."
      },
      {
        "type": "p",
        "text": "Un esempio può essere John Red, sedicente coach e consulente che ho “conosciuto” attraverso la testimonianza di un mio cliente. Il personaggio esiste veramente, ma John Red è un nome di fantasia, ogni somiglianza a nomi reali è puramente casuale."
      },
      {
        "type": "p",
        "text": "Per quanto possa sembrare strano, John ha un discreto successo di pubblico e questo successo si fonda su basi che possono essere sintetizzate come segue."
      },
      {
        "type": "h2",
        "text": "Le 7 regole del successo di John Red"
      },
      {
        "type": "h2",
        "text": "1 – Esotico is better"
      },
      {
        "type": "p",
        "text": "Le persone tendono a porre attenzione a tutto quel che è esotico, proveniente da lontano. Questa attenzione diventa interesse e ammirazione se parliamo di un coach americano, o comunque proveniente da paesi sviluppati diversi dall’Italia. John si fa forte di essere straniero, racconta di esperienze importanti in paesi lontani."
      },
      {
        "type": "h2",
        "text": "2 – Chi ha successo vale"
      },
      {
        "type": "p",
        "text": "John racconta di essere stato coach di VIP di cui fa nomi e cognomi: politici, ricchi industriali, qualche star del cinema e dello sport. John sa guadagnarsi la fiducia delle persone che lo presentano ad altre persone raccontando le stesse storie di VIP e successo. Il successo di John si nutre delle storie che lui ha messo in circolazione e che sono riverberate dalla gente senza che nessuno controlli da dove arrivano."
      },
      {
        "type": "h2",
        "text": "3 – Se è riconoscibile è vero"
      },
      {
        "type": "p",
        "text": "John Red si presenta come una persona seria, veste con completi business classici ed eleganti, ha dei modi gentili, è sempre molto positivo e sicuro di se stesso. Ogni persona del suo pubblico si può riconoscere in quel che John dice: “Perché i giovani devono dare ascolto all’esperienza dei più anziani!” e il pubblico di attempati commercianti e imprenditori applaude. John arringa con una metafora: “C’è un momento per seminare e uno per raccogliere, ma bisogna anche curare la terra!” e ancora applausi."
      },
      {
        "type": "h2",
        "text": "4 – Dato che ha scritto dei libri, è importante"
      },
      {
        "type": "p",
        "text": "Quello che scrive John è uguale a quanto già scritto da migliaia di altri autori prima di lui, in alcuni casi letteralmente copiato… E allora i suoi libri sono pubblicati solo da case editrici compiacenti, a patto che lui stesso se ne compri diverse migliaia di copie. John fa proprie le parole di altri autori e usa la loro forza per i propri scopi."
      },
      {
        "type": "h2",
        "text": "5 – Se parla di scienza è scientifico"
      },
      {
        "type": "p",
        "text": "Si è parlato tanto di una recente scoperta scientifica? John la cita: “Le più recenti ricerche in neurobiologia ci aiutano a capire come siano i nostri neuroni specchio a renderci conformisti.” Poco importa se il linguaggio è impreciso e se non esiste collegamento dimostrato tra la scoperta e le conclusioni di John."
      },
      {
        "type": "h2",
        "text": "6 – Se è costoso vale"
      },
      {
        "type": "p",
        "text": "John Red costa molto, ma vale ogni Euro speso… almeno così si dice. Ma chi lo dice? A pensarci bene… John e i suoi collaboratori naturalmente! Infatti tutti i clienti portati come referenza sono irraggiungibili."
      },
      {
        "type": "h2",
        "text": "7 – È il migliore coach d’ Italia/del mondo"
      },
      {
        "type": "p",
        "text": "John, come altri diecimila, si autodefinisce il migliore coach del mondo. In un mondo intelligente questo basterebbe a distruggerne ogni residuo di credibilità, ma persone poco informate, giornalisti che non verificano quel che scrivono e la fragilità psicologica di molti, rendono credibile l’incredibile."
      },
      {
        "type": "h2",
        "text": "Cosa c’è dietro al gioco di John"
      },
      {
        "type": "p",
        "text": "Il mio cliente aveva ingaggiato John per essere aiutato nella gestione di alcune situazioni critiche con i dipendenti della sua azienda e purtroppo John si era rivelato un incompetente. Il suo intervento aveva creato seri problemi poi risolti a fatica con altri consulenti. Da notare che in questo caso il cliente può dirsi fortunato perché ha potuto accorgersi rapidamente dell’errore fatto."
      },
      {
        "type": "p",
        "text": "Mi sono anche preso del tempo per verificare, contattando alcune delle referenze vantate da John. Ovviamente non hanno idea di chi sia! Da notare che digitando il suo nome (quello vero) sul motore di ricerca di Google, otteniamo solo risultati in italiano, questo fa pensare che all’estero non lo conosca proprio nessuno."
      },
      {
        "type": "p",
        "text": "Un coach così è fortunatamente raro, la maggioranza dei coach sono professionisti genuinamente interessati a servire i propri clienti. Tuttavia, in modo e misura diversi i “John Red” in circolazione sono parecchi. Spero che questa storia sia utile: per i clienti nell’avere una maggiore capacità critica verso il coach-guru del momento e per i coach affinché evitino di cedere alla tentazione di cercare un facile successo a spese dei clienti meno esperti."
      }
    ]
  },
  {
    "slug": "pane-e-coaching",
    "title": "Pane e Coaching",
    "excerpt": "Un coach affamato porta con sé il conflitto d'interessi. Perché servire davvero il cliente richiede libertà dal bisogno di denaro, attenzione e riconoscimento.",
    "category": "Etica del coaching",
    "date": "26 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/pane-e-coaching.jpg",
    "content": [
      {
        "type": "p",
        "text": "Ogni coach che si rispetti sa quanto sia importante individuare un potenziale conflitto d’interessi nello svolgimento della propria professione e quando un coach soffre di questa fame il conflitto d’interessi è dietro l’angolo, mentre lavora con i suoi clienti e ancor più mentre li sta cercando."
      },
      {
        "type": "p",
        "text": "Qualche mese fa ho incontrato un amico, collega, ex allievo e attuale competitor. Sorridente, riferendosi a me e alla mia azienda, mi ha detto: “Vi comportate come se non vi importi di vendere… eppure vendete, ma è facile quando si ha una posizione come la vostra!”. Preso di sorpresa, credo di aver farfugliato qualche frase confusa, indeciso tra dire che non ritenevo fosse proprio così o che aveva ragione. Ripensandoci a freddo, effettivamente la posizione fa una certa differenza, ma credo sia vero anche il contrario: raggiungi una posizione di rilievo se adotti un approccio che mette in primo piano il cliente e non la vendita."
      },
      {
        "type": "p",
        "text": "C’è stato un tempo in cui mi sono guadagnato da vivere facendo il venditore e i primi tempi non sapevo come pagare l’affitto, ma ricordo di aver sempre agito verso i miei clienti come se la mia sussistenza non dipendesse da quanto avrei guadagnato con loro. I clienti percepivano che ero sinceramente interessato a loro, ai loro desideri e necessità e mi davano fiducia. Non ho idea se questa sia una regola universale, ma fino a oggi ha sempre funzionato, anche nel coaching."
      },
      {
        "type": "h2",
        "text": "Mors tua vita mea"
      },
      {
        "type": "p",
        "text": "Servire i miei interessi o quelli del cliente? Un coach dovrebbe sempre evitare di trovarsi in situazioni che lo pongano di fronte a questa domanda. In teoria siamo tutti d’accordo che si debbano servire gli interessi del cliente, qualcuno potrebbe affermare che si può servire entrambi gli interessi, ma un coach che si trovi in uno stato di necessità non può garantire sia i propri interessi che quelli del cliente."
      },
      {
        "type": "p",
        "text": "Questo non dipende da quanto siano solidi i principi morali, ma dal fatto che nessuno può dire di interpretare la realtà in modo oggettivo e tutti tendiamo inconsciamente a guardare i fatti da una prospettiva conveniente, che giustifichi le nostre azioni."
      },
      {
        "type": "p",
        "text": "Quando il cliente ti chiederà quante sessioni di coaching fare, risponderai senza pensare al valore economico di ogni singola sessione? Anche se due sessioni in più ti permetterebbero di pagare l’affitto? “In fondo, due sessioni in più non possono che fargli bene!”. Quando il cliente ti chiederà aiuto per una sua scelta difficile risponderai con un bel “consiglione”, invece di aiutarlo a trovare la sua risposta? Anche se hai un grande bisogno di dimostrare che vali? “In fondo è il cliente che me lo chiede!”."
      },
      {
        "type": "h2",
        "text": "Lupi in veste di agnelli"
      },
      {
        "type": "p",
        "text": "Ti è mai capitato di accorgerti che il tuo interlocutore ha delle intenzioni diverse da quelle che dichiara? A me capita spesso. Vedo persone affamate dichiarare di essere sazie, ma la fame si legge nei loro occhi come fossero lupi nella notte. Se fai attenzione puoi leggere un sottotitolo che svela la verità dell’interlocutore, le labbra dicono: “Il denaro non è importante!” e sotto leggi, “Penso al denaro ogni minuto”. Oppure: “Per me non ha importanza avere successo”, sottotitolo, “Ho un gran bisogno che qualcuno mi consideri!”. Bisogno di soldi, di attenzione, di amore, di potere e così via."
      },
      {
        "type": "h2",
        "text": "Bastan poche briciole"
      },
      {
        "type": "p",
        "text": "Per dirla tutta, essere milionari o persone di successo non ci garantisce di essere al di sopra di questa “fame”, perché come sappiamo è lo stato interiore che condiziona la percezione. Per vivere finalmente con una sensazione di abbondanza e serenità occorre un percorso di sviluppo personale importante che ti porti a sentire di avere/essere abbastanza."
      },
      {
        "type": "p",
        "text": "Un coach dovrebbe lavorare libero, non solo dal bisogno del denaro, ma anche da tutti i bisogni più condizionanti. Se il coach non ha questa libertà ne viene influenzato il suo modo di lavorare con ripercussioni sulla sua capacità di offrirsi a un prezzo adeguato o di comportarsi in modo professionale con clienti e colleghi. La fame porta un coach a preoccuparsi di più di se stesso che del cliente o comunque a “ingombrare” la relazione di coaching con i propri bisogni."
      },
      {
        "type": "p",
        "text": "Sia chiaro che non sto dicendo che è “peccato” promuoversi, fare pubblicità, proporsi ai clienti, cercare di crescere. Queste attività sono utili e importanti perché promuovono il coaching e il coach, ma assumono un valore negativo in base alla condizione interiore di chi le attua e la differenza si vede nei fatti."
      },
      {
        "type": "p",
        "text": "Che tu sia un coach professionale che fatica a guadagnare o un coach che guadagna con poca professionalità, chiediti quanto la tua fame economica o psicologica ti sta condizionando e poi lavora su te stesso per superarla. La tua professionalità migliorerà, aumenteranno le possibilità di successo e, cosa non da poco, sarai una persona soddisfatta, migliore. Buon lavoro!"
      }
    ]
  },
  {
    "slug": "errori-comuni-coaching",
    "title": "10 errori comuni del “NON Coach”",
    "excerpt": "La paura dell'errore è nemica del coaching. I dieci errori più comuni di chi crede di fare il coach ma finisce nel \"non coaching\".",
    "category": "Formazione coach",
    "date": "22 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/errori-comuni-coaching.jpg",
    "content": [
      {
        "type": "p",
        "text": "Talvolta un errore ti segna la vita, capita che nella memoria restino gli errori fatti, le scelte di cui ti penti e da cui non puoi più tornare indietro. Vero, ma il motivo per cui l’errore ci tormenta è che ne abbiamo una paura smisurata, paura che ci immobilizza e ci rende capaci di seguire solo sentieri battuti, paura che toglie spazio alle nostre più vere aspirazioni, desideri, speranze."
      },
      {
        "type": "p",
        "text": "A pensarci bene, il vero problema dell’errore è tutta l’energia necessaria a evitarlo. Scegliamo il vestito, il partner, il lavoro sperando di non sbagliare, dubbi, incertezze… e come coach, siamo forse esentati dal temere l’errore?"
      },
      {
        "type": "p",
        "text": "Beh, dovremmo. In teoria il coach non dovrebbe vivere con questo assillo, dovrebbe occuparsi solo di fare bene il suo lavoro, certo non focalizzarsi sull’errore."
      },
      {
        "type": "p",
        "text": "La paura dell’errore è nemica del Coaching, ti fa lavorare con poca creatività, ti rende un coach meschino, che cerca di portare a casa il Suo risultato invece di occuparsi del Cliente."
      },
      {
        "type": "p",
        "text": "Quindi un bravo coach non dovrebbe avere paura di sbagliare, ma che succede se un coach ha questapaura? Cosa succede se un coach è ancora un po’ confuso, se è uno che magari non lavora all’interno di un set definito di competenze, regole e procedure?"
      },
      {
        "type": "p",
        "text": "In casi come questi probabilmente il coach non è poi così Coach e deve stare molto attento perché:"
      },
      {
        "type": "list",
        "items": [
          "SE FA PIÙ CONSULENZA CHE COACHING, quando il cliente sbaglia, lui è responsabile;",
          "SE FA PIÙ IL TRAINER CHE IL COACH, limita il suo cliente a quel che gli insegna;",
          "SE FA PIÙ IL MOTIVATORE CHE IL COACH, porta le persone oltre i loro limiti, rischia di portarle troppo “oltre” e rischia morti e feriti, come è successo a James Arthur Ray nel 2009;",
          "SE FA PIÙ IL GURU CHE IL COACH, porta le persone dove crede giusto ma, per quanto bravo sia, chi lo segue perde ownership e autostima."
        ]
      },
      {
        "type": "p",
        "text": "IN EFFETTI, L’ERRORE PIÙ GRAVE CHE UN COACH PUÒ COMMETTERE È DI NON APPLICARE IL COACHING."
      },
      {
        "type": "p",
        "text": "A questo punto però sorge una domanda: come sai di essere un coach che applica il Coaching? Questa domanda è essenziale."
      },
      {
        "type": "p",
        "text": "Sai di essere nel pantano del “non Coaching”, quando ti accorgi di commettere certi errori."
      },
      {
        "type": "h2",
        "text": "I 10 errori comuni del “Non Coach”"
      },
      {
        "type": "p",
        "text": "1. PENSARE DI ESSERE UN TALENTO NATURALE che non ha bisogno di formazione specifica."
      },
      {
        "type": "p",
        "text": "2. VOLER DIVENTARE COACH SENZA PASSARE ATTRAVERSO PARECCHIE ORE DI COACHING in veste di cliente. Mi sono sentito dire: “Ma io voglio diventare un coach, non ho bisogno di lavorare con un coach!”. Come pretendi di essere un coach credibile se tu per primo non ritieni utile lavorare con un coach?"
      },
      {
        "type": "p",
        "text": "3. SCEGLIERE IL CORSO DI COACHING PIÙ ECONOMICO, più vicino a casa oppure uno qualunque, tanto sono tutti uguali. Ma non tutti i corsi vanno bene per tutti, come non c’è uno studente uguale all’altro. E chiediti anche come mai dei veri professionisti dovrebbero tenere corsi alla metà del prezzo di altri."
      },
      {
        "type": "p",
        "text": "4. CONVINCERSI CHE SERVONO TANTI ANNI prima di poter praticare come coach, ma se non pratichi non diventerai mai coach."
      },
      {
        "type": "p",
        "text": "5. PENSARE DI AVERE POCA ESPERIENZA per poter chiedere un fee, anche se minimo. Lavorare gratis priva il cliente di un vero rapporto professionale e rischia di ridurne il commitment."
      },
      {
        "type": "p",
        "text": "6. PENSARE DI POTER SALVARE IL CLIENTE o non rendersi conto che quel cliente ha bisogno di un altro tipo di aiuto. Salvare qualcuno ti fa sentire bene? È un tuo bisogno che depotenzia il cliente, cambia mestiere."
      },
      {
        "type": "p",
        "text": "7. ACCETTARE DAL CLIENTE QUALSIASI CONDIZIONE pur di essere il suo “coach”. Alcuni clienti chiedono che gli si diano soluzioni e non vogliono responsabilità, ma questo ci porta immediatamente nel NON COACHING."
      },
      {
        "type": "p",
        "text": "8. APPROFITTARE DELLA FIDUCIA DEL CLIENTE per vantaggio personale, economico o affettivo/egotico. Più il cliente ti si affida e più la tentazione può essere grande, soprattutto se sei una persona piccola."
      },
      {
        "type": "p",
        "text": "9. CONCENTRARSI TROPPO SULLA PROMOZIONE di se stessi, dimenticando che la cosa più importante è diventare bravi coach, il lavoro di un bravo coach si vende da solo."
      },
      {
        "type": "p",
        "text": "10. ISOLARSI, CREDERE DI ESSERE ABBASTANZA ESPERTI da non avere più bisogno di formazione. La forza più grande del Coaching è la pluralità. I coach sono tanti, si confrontano, imparano gli uni dagli altri, si organizzano e hanno valori comuni."
      }
    ]
  },
  {
    "slug": "coaching-what-else",
    "title": "Coaching, What Else?",
    "excerpt": "Executive, Business, Corporate, Life, Sport: una guida ai tanti nomi del coaching e a perché, alla fine, l'essenza resta una sola.",
    "category": "Professione coach",
    "date": "19 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/coaching-what-else.jpg",
    "content": [
      {
        "type": "p",
        "text": "Un coach professionista lavora con il cliente come persona, che sia una mamma a tempo pieno, il capo di una multinazionale con stipendio a sei zeri o una celebrità. Un coach fa quello che sa fare a prescindere dal contesto in cui si trova, naturalmente si preoccupa di usare un linguaggio e riferimenti culturali diversi in base a chi ha davanti, ma la sostanza del suo lavoro è la stessa."
      },
      {
        "type": "p",
        "text": "Quando ti siedi di fronte al tuo cliente quello che vorrà percepire è che conosci il mare in cui naviga, che sai cosa vuol dire essere al suo posto e questo è difficile che un corso possa insegnartelo se non ne hai esperienza."
      },
      {
        "type": "p",
        "text": "In realtà non serve aver condiviso le esperienze del cliente per essergli utile, ma nella maggior parte dei casi se il cliente non ti percepisce “conforme” a quel che si aspetta non ti permetterà neanche di iniziare. Se è un manager, la definizione “Executive Coach” vicino al tuo nome, e riconoscerti come tale, lo aiuta a sceglierti. Stessa cosa per altri casi e tipologie di Coaching."
      },
      {
        "type": "h2",
        "text": "Dare un nome alle cose aiuta"
      },
      {
        "type": "p",
        "text": "Dare un nome alle cose ci permette di farle esistere nella nostra vita e di condividerle efficacemente con gli altri. Presentandoci semplicemente come coach è facile essere confusi per mentalisti, “piennellisti”, pseudo psicologi, motivatori, allenatori sportivi o altro e questo non fa piacere se non è quel che intendevamo comunicare. Con tutto il rispetto per le categorie citate."
      },
      {
        "type": "p",
        "text": "Può essere utile allora aggiungere alla parola coach un termine che la qualifichi…"
      },
      {
        "type": "h2",
        "text": "Personal Coaching/Life Coaching"
      },
      {
        "type": "p",
        "text": "Consideriamo il Life Coaching attinente a questioni esistenziali e intime della persona e il Personal Coaching più alla sua efficacia prestazionale, ma sono termini intercambiabili, useremo il termine Personal considerando che includa anche Life."
      },
      {
        "type": "p",
        "text": "Il Personal Coach lavora con le persone, anche in gruppo, nelle aree della realizzazione e sviluppo personale, delle relazioni con gli altri, del life-planning, dell’indipendenza finanziaria ma anche su questioni relative al lavoro e alla carriera."
      },
      {
        "type": "h2",
        "text": "Business Coaching"
      },
      {
        "type": "p",
        "text": "Il termine descrive il coaching a imprenditori e PMI. Il Business Coach promuove lo sviluppo personale e professionale accompagnando l’imprenditore e l’azienda verso il raggiungimento di obiettivi eccellenti."
      },
      {
        "type": "h2",
        "text": "Corporate Coaching"
      },
      {
        "type": "p",
        "text": "Il Corporate Coach lavora con consigli di amministrazione e top manager per supportarli nel generare o sostenere cambiamenti strategici e organizzativi. Si tratta di facilitare creatività e vision, permettere di uscire da una dimensione autoreferenziale, generando maggiore consapevolezza dell’organizzazione e dei contesti in cui opera. Questo richiede al coach competenze di Systems Thinking e di Facilitazione."
      },
      {
        "type": "p",
        "text": "In una definizione di Pier Paolo Colasanti: Corporate Coach è un coach che aiuta le grandi organizzazioni a ritrovare, o scoprire, la loro anima, generando consapevolezza sistemica e allineamento valoriale tra tutte le persone che ne fanno parte. Questo sempre in favore dei risultati di business."
      },
      {
        "type": "h2",
        "text": "Executive Coaching"
      },
      {
        "type": "p",
        "text": "Può nascere da un progetto di Corporate Coaching o essere un semplice intervento a richiesta, riguarda le attività di Coaching verso il top management (amministratori delegati, direttori generali, direttori finanziari, ecc.) individualmente o in team."
      },
      {
        "type": "p",
        "text": "L’Executive Coach lavora su temi come la vision, la definizione degli obiettivi, la strategia, la performance, la leadership, la gestione del cambiamento, lo sviluppo personale e professionale."
      },
      {
        "type": "h2",
        "text": "Career Coaching"
      },
      {
        "type": "p",
        "text": "Offre supporto alle persone che si trovano in una fase di cambiamento lavorativo, spesso sono definiti in questo modo i coach impegnati in processi di outplacement e collocamento dei manager. Da notare che se non si è coach e ci si occupa di outplacement si fa consulenza e non Coaching."
      },
      {
        "type": "h2",
        "text": "Sport Coaching"
      },
      {
        "type": "p",
        "text": "Nello sport, soprattutto quello di squadra, esiste da sempre la figura dell’allenatore sportivo che è un esperto, spesso un ex campione della disciplina di cui si occupa e che, come un manager in azienda: gestisce, motiva, insegna e valuta. Per questa valenza gerarchica non può essere veramente il Coach (come qui lo intendiamo) dei suoi atleti."
      },
      {
        "type": "p",
        "text": "Invece un coach, non essendo gerarchicamente coinvolto, può accompagnare l’atleta nell’esplorazione del proprio mondo interiore, del suo stare nell’azione, il suo focus, le convinzioni ed emozioni che lo guidano. Il coach supporta i diversi membri di una squadra, incluso l’allenatore, a lavorare insieme con maggiore consapevolezza ed efficacia."
      },
      {
        "type": "h2",
        "text": "Mental Coach"
      },
      {
        "type": "p",
        "text": "È una definizione che si può identificare con un Coaching legato alla manipolazione mentale e che evoca un coach protagonista della relazione. Se vuoi rappresentarti come un coach che segue i principi della International Coach Federation, è da evitare."
      },
      {
        "type": "p",
        "text": "Ci sono anche: Wellness, Medical,Teen e tanti altri Coach, ma non sarebbe bastato lo spazio e credo che le parole stesse li definiscano."
      },
      {
        "type": "p",
        "text": "Concludendo, se è vero che moltiplicare i nomi serve a fare chiarezza e a essere precisi, quando ci riferiamo all’essenza delle cose è necessario semplificare, ogni parola in più ci allontana dall’essenza. Quindi ricordiamoci che il Coaching è Coaching, what else?"
      }
    ]
  },
  {
    "slug": "11-consigli-notorieta-coaching",
    "title": "11 consigli se sei in cerca di notorietà",
    "excerpt": "Undici spunti per chi vuole farsi conoscere come coach senza perdere di vista competenza, etica ed equilibrio personale.",
    "category": "Professione coach",
    "date": "15 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/11-consigli-notorieta-coaching.jpg",
    "content": [
      {
        "type": "p",
        "text": "Uno degli elementi che viene usato per misurare il successo di un professionista è la notorietà e, per quanto non sia sempre vero, possiamo dire che essere noti offre più opportunità di essere visti e quindi di lavorare, purché questa notorietà sia positiva e collegata alle tue capacità di professionista."
      },
      {
        "type": "p",
        "text": "Ecco 11 consigli in caso tu sia in cerca di notorietà:"
      },
      {
        "type": "p",
        "text": "1. Decidi con molta attenzione chi o cosa vuoi diventare, entro quanto tempo, quali valori vuoi rappresentare per il tuo pubblico, con che stile vuoi lasciare un segno, quanto quello che cerchi è vicino a quello che sei veramente, qual è la tua mission;"
      },
      {
        "type": "p",
        "text": "2. Definisci le milestones, i passaggi più importanti che segneranno il tuo cammino e cosa sei disposto a fare per arrivarci;"
      },
      {
        "type": "p",
        "text": "3. Diventa un vero coach esperto: competenze, preparazione teorica e pratica devono essere espressi ai massimi livelli, non basta qualche trucchetto per superare la prova del pubblico nel tempo;"
      },
      {
        "type": "p",
        "text": "4. Diventa bravo nel gestire il tuo tempo e nel disciplinare te stesso. Non ha senso avviarsi su questa strada se non si è capaci di grande autodisciplina;"
      },
      {
        "type": "p",
        "text": "5. Sviluppa le tue capacità relazionali: essere estroversi quando serve e un buon media training aiutano;"
      },
      {
        "type": "p",
        "text": "6. Agisci sempre in modo etico e coerente verso tutti, molto del lavoro che farai sarà il risultato del lavoro serio fatto qualche anno prima e del passaparola che ne è conseguito (clienti, colleghi, fornitori, giornalisti, chiunque);"
      },
      {
        "type": "p",
        "text": "7. Sii presente agli eventi importanti e cerca occasioni di visibilità come interviste su giornali, radio tv. Attenzione a farlo però in modo proporzionale alla tua capacità;"
      },
      {
        "type": "p",
        "text": "8. Impara a rinunciare alle occasioni di visibilità che, per quanto allettanti, sono ambigue, squalificanti o fuori target;"
      },
      {
        "type": "p",
        "text": "9. Scrivi. Ma se non sai scrivere o non hai niente da dire, meglio lasciar perdere, quelli che scrivono l’ennesimo libro fotocopia fanno poca strada o la fanno di qualità modesta;"
      },
      {
        "type": "p",
        "text": "10. La notorietà mette a dura prova il sistema psichico e valoriale di chiunque, lo sanno bene i ragazzi proiettati da un momento all’altro nello show biz dai reality show di ultima generazione. Prima di raggiungere la notorietà è importante aver sviluppato un livello di consapevolezza dei propri limiti e punti di forza, aver lavorato sulle proprie fragilità e sui propri comportamenti disfunzionali dovuti a queste, in poche parole, aver raggiunto un solido equilibrio personale;"
      },
      {
        "type": "p",
        "text": "11. La notorietà non è sinonimo di qualità, ma neanche del contrario."
      },
      {
        "type": "p",
        "text": "Il mondo offre opportunità per tutti, si può essere sconosciuti e guadagnare molto bene perché bravi e, se non si è veramente dei bravi coach, si finisce a fare solo spettacolo e anche lo spettacolo ha un senso, se ci sono gli spettatori…"
      },
      {
        "type": "p",
        "text": "Se a questo punto ancora desideri la notorietà allora buon lavoro. Ma la domanda più importante di tutte è: per quale motivo le persone dovrebbero apprezzare il professionista che sei e parlare bene di te?"
      }
    ]
  },
  {
    "slug": "domande-potenti-coaching",
    "title": "Powerful Questions - Le domande potenti",
    "excerpt": "Cosa rende davvero potente una domanda di coaching, e perché forse sarebbe più corretto parlare di risposte e dialoghi potenti.",
    "category": "Metodo",
    "date": "12 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/domande-potenti-coaching.jpg",
    "content": [
      {
        "type": "p",
        "text": "Prima di parlare delle domande potenti, ricordiamoci di come funzionano le domande di Coaching “normali”."
      },
      {
        "type": "p",
        "text": "Un coach lavora con i suoi clienti prevalentemente con il dialogo, questo dialogo è alimen- tato da domande che il coach pone per aiutare il cliente a raggiungere nuove consapevolezze su se stesso e sui suoi obiettivi. Queste domande dovrebbero essere brevi, aperte (devono permettere al cliente di rispondere articolando un discorso e non di rispondere Sì o No), ma soprattutto devono:"
      },
      {
        "type": "list",
        "items": [
          "Non contenere/sottintendere la risposta, ad esempio: “Non credi sarebbe meglio smettere di arrabbiarti per queste cose?”, questo può essere un ottimo consiglio da amico, ma non è una do- manda da coach.",
          "Non contenere il giudizio del coach, neanche a livello subliminale, ad esempio: “Hai un obiettivo da vincente oggi?” oppure, “Come mai hai deciso di agire in questo modo?”, facendo una lieve espressione di disapprovazione. Domande come queste creano un clima di giudizio e non libera espressione. Nel primo caso, che ci sia un obiettivo da vincente implica il rischio di esprimerne uno da perdente, nel secondo caso, anche una lieve espressione del viso o il tono della voce bastano per condizionare negativamente il cliente.",
          "Essere sinceramente dedicate alla scoperta. Facendo la domanda il coach non dovrebbe già conoscerne la risposta “giusta”, ma piuttosto essere molto curioso di scoprire quale risposta giusta il cliente troverà per se stesso. Alcuni usano le domande per portare il cliente dove loro sanno – credono di sapere – vi sia la soluzione migliore: questi coach non solo fanno male il loro mestiere (almeno secondo i criteri ICF), ma sono anche in una relazione non sincera con il loro cliente che viene guidato, a sua insaputa, verso una soluzione che non è la sua ma che gli si fa credere lo sia. Manipolazione inutile e un po’ vigliacca. Tanto vale dare un consiglio, almeno te ne prendi la responsabilità e lasci al cliente la possibilità di scegliere se seguirlo. Queste sono le caratteristiche essenziali che le normali domande di Coaching dovrebbero avere e, se una domanda rispetta tutti questi criteri, è già 100% efficace, ma cosa rende una domanda “potente”? Può un coach pensare: ”Ecco adesso gli faccio questa bella domanda potente”? Esiste un elenco di domande sicuramente potenti? Evidentemente no, perché questo implicherebbe la preveggenza della risposta del cliente."
        ]
      },
      {
        "type": "p",
        "text": "Si parla di domande potenti quando al cliente succede qualcosa che assomiglia a un’epifania, uno shift radicale, un cambiamento di prospettiva importante."
      },
      {
        "type": "p",
        "text": "Però quel che succede al cliente con quella domanda dipende dal cliente, da cosa riesce a farsene di quella domanda, quindi la stessa domanda può essere potente per un cliente e inutile per un altro."
      },
      {
        "type": "p",
        "text": "Per questo, invece che di domande potenti, si può parlare anche di “Risposte potenti” o di “Dialoghi potenti”: riporta la responsabilità sul cliente e descrive in modo più puntuale il fenomeno. Questa distinzione può sembrare una questione di puntiglio lessicale e vuole anche essere una provocazione generativa, ma probabilmente rende l’idea."
      },
      {
        "type": "p",
        "text": "Come fa un coach a capire che il suo cliente sta elaborando una risposta potente e quindi di essere nella cogenerazione di un dialogo potente? Quando una domanda permette un cambiamento come quelli descritti, quasi sempre il cliente deve elaborare la risposta partendo da zero, quindi non risponde subito, magari inizia dicendo: “Non lo so…” e, durante il tempo che serve per questa elaborazione, resta in silenzio, un silenzio che il coach, se ne è capace, deve rispettare e proteggere, lasciando il tempo e lo spazio affinché la potenza della risposta si possa manifestare in tutto il suo valore."
      }
    ]
  },
  {
    "slug": "coaching-alieno",
    "title": "Il Coaching è un alieno?",
    "excerpt": "Una riflessione sul coaching come cultura ancora estranea al quotidiano, fatta di ascolto, fiducia e presenza, e su chi sono davvero i coach.",
    "category": "Cultura del coaching",
    "date": "8 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/coaching-alieno.jpg",
    "content": [
      {
        "type": "p",
        "text": "Spesso le distanze più grandi non sono geografiche ma culturali, si può vivere sotto lo stesso tetto eppure essere tanto lontani da non riuscire a comunicare."
      },
      {
        "type": "p",
        "text": "Una di queste distanze “vertiginose”, anche dopo tanti anni, è proprio quella che si percepisce tra il coaching e la normalità quotidiana. Infatti, visto dal punto di vista delle persone “normali”, il coaching è praticamente sconosciuto, ma purtroppo questo può sembrare più comprensibile di quanto sia realmente."
      },
      {
        "type": "h2",
        "text": "L’alieno e la speranza di un’Italia migliore."
      },
      {
        "type": "p",
        "text": "Immagina un alieno venuto sulla Terra ma consembianze umane: le persone lo guardano distrattamente come fosse una faccia tra tante,normale declinazione di qualcosa già conosciuto, ne parlano pensando di sapere di cosa parlano, possono persino arrivare a dire di conoscerlo e praticarlo, senza sapere in realtà chi/cosa sia. E quando, per caso o per scelta, le persone si trovano a frequentare davvero questo alieno e lo conoscono meglio, si accorgono con un moto di panico che è altro da quel che credevano, talmente altro da confonderle e disorientarle, tutto deve essere rimesso in discussione, niente sarà più come prima."
      },
      {
        "type": "p",
        "text": "Questo alieno, il coaching, è fatto di ascolto e supporto, partnership e rispetto della sensibilità dell’altro, mentre la “normalità” è discussione, prevaricazione, competizione. Il coaching è trasparenza, eticità, condivisione e la parola trasparenza non si riferisce sicuramente a lingerie, accordi sotto banco, intenzioni non dichiarate o al bisogno di apparire. Allo stare con l’altro, si contrappone la necessità di performance, di dimostrare di valere. Invece della fiducia nelle proprie e altrui capacità è normale la paura e la sfiducia."
      },
      {
        "type": "p",
        "text": "Ammettiamolo, il coaching è una specie di corpo estraneo, è talmente agli antipodi della nostra cultura da richiedere che con ogni cliente si “stipuli” un vero e proprio contratto per definire con chiarezza quello che il coaching è e quello che non è, come funziona, cosa ci si può aspettare e cosa no. In un percorso di coaching non c’è niente che possa essere dato per scontato, perché il coaching si basa su fondamenta culturali non condivise dalla maggior parte delle persone. In particolare in Italia e in alcune zone del pianeta culturalmente arretrate, il coaching è solo una speranza, un timido tentativo aspirazionale di definire il prossimo gradino evolutivo, il passaggio dalla cultura della paura e del sospetto a quella della fiducia in se stessi, negli altri e nel futuro."
      },
      {
        "type": "p",
        "text": "E se il coaching è appena una speranza, i coach, per quanto imperfetti possano essere, sono quelli che, parafrasando una celebre frase di Einstein: “Rendono possibile l’impossibile perché ne ignorano, per principio l’impossibilità”."
      },
      {
        "type": "h2",
        "text": "Ma chi sono i coach?"
      },
      {
        "type": "p",
        "text": "I coach si potrebbero descrivere in base a: quello che sembrano; quello che sono e a quello che rendono possibile. Il primo punto, l’apparenza del coach, fa ovviamente la sua differenza e molti coach si adoperano per apparire in modo funzionale alle loro intenzioni, ma per quanto sia importante nel contesto delle relazioni umane, probabilmente è l’aspetto meno utile a capire i coach e il coaching. Più interessante quello che i coach “sono”, o per meglio dire: quel che si riesce a conoscere di ciò che i coach sono. Ma quello che più conta, è conoscere i coach attraverso quello che rendono possibile. Per comprendere meglio i coach e il coaching proviamo a guardarli da vari punti di vista. Per la migliore comprensione di una realtà si deve prendere un punto di vista “altro”, quindi l’osservatore deve essere diverso dall’oggetto osservato. Insomma, noi coach dobbiamo guardarci da fuori. Per guardarsi da fuori c’è bisogno di uno specchio; per guardarsi da fuori serve la distanza nel tempo o nello spazio; per guardarsi da fuori serve la presenza, quella cosa che ti permette di essere qui, ora, consapevole."
      },
      {
        "type": "h2",
        "text": "Lo specchio"
      },
      {
        "type": "p",
        "text": "L’immagine che le persone, come uno specchio deformante, ci mostrano del coach, lo rappresenta come: allenatore, maestro, ipnotizzatore, motivatore, millantatore, quasi-psicologo, salvatore, gran figo da imitare, professionista pagato troppo, indefinibile outsider, inutile figura… Ma le persone vedono del coaching solo la sua espressione singolare attraverso ogni coach che incontrano. Il modo migliore per descrivere un coach credo sia quello che ogni cliente si porta via dall’esperienza di coaching e un modo per misurare l’efficacia del coaching sono i suoi effetti sul cliente, misurati nel tempo."
      }
    ]
  },
  {
    "slug": "trovare-clienti-come-coach",
    "title": "5 consigli per trovare clienti come Coach",
    "excerpt": "Cinque idee concrete per costruire la propria professione di coach e trovare clienti, tra qualità, passaparola e promozione.",
    "category": "Professione coach",
    "date": "5 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/trovare-clienti-come-coach.jpg",
    "content": [
      {
        "type": "p",
        "text": "Sei già un coach o stai pensando di diventarlo? Vuoi trovare il tuo spazio, una professione più autonoma, che ti rimetta in contatto con uno scopo vero, importante? Vuoi costruire il tuo futuro professionale in modo consapevole e vuoi anche guadagnare, magari come quel coach di cui hai letto o che hai visto sul palco a quell’evento… beh sì, anche tu vorresti avere un po’ di seguito."
      },
      {
        "type": "p",
        "text": "Suona la sveglia e ti devi confrontare con la necessità di dare un senso ai biglietti da visita con la scritta Coach sotto al tuo nome, quelli chiusi nel cassetto. Insomma devi cercare i tuoi clienti, dopo aver investito in corsi di formazione, networking in vari eventi… Ma come fare?"
      },
      {
        "type": "p",
        "text": "Ecco alcune idee che spero possano essere utili:"
      },
      {
        "type": "p",
        "text": "1. Il Coaching deve essere di livello adeguato, devono esserci dei meccanismi attendibili di misurazione dei risultati e della qualità, oltre che della soddisfazione del cliente. Questo vale anche per un singolo life coach che lavori part time. Senza questa premessa, quel che segue non ha senso. 2. Un cliente soddisfatto è la migliore promozione. La domanda più importante da fare a un tuo cliente è se consiglierebbe ad altri i tuoi servizi. Marketing e vendite costano, se un cliente ti porta altri clienti ti sta creando un ulteriore ritorno su quell’investimento. 3. Se vuoi espandere la tua presenza devi investire in promozione, che siano pochi spiccioli su advertising on line o la partecipazione ad eventi, ci si deve mostrare nei posti giusti al momento giusto. 4. Quando hai davanti un potenziale cliente, non ti limitare a illustrargli il tuo “prodotto”, ma chiedigli di iniziare, aiutalo a decidere di partire con un percorso di Coaching che potrebbe cambiargli la vita. Non devi aggredire il tuo interlocutore con penna e contratto in mano, ma nemmeno pensare che ti pregherà di iniziare un percorso di Coaching solo perché ne avete parlato. 5. Come coach hai una finestra di pochi anni per affermarti, passato l’anno che serve per la forma- zione, poi servono un paio di anni per diventare coach professionisti. Se entro tre, quattro anni dall’ini- zio non hai almeno un migliaio di ore di Coaching erogato a pagamento, il tuo Coaching si inaridisce, la tua fiamma si spegne e ti trovi a fare altro. Non hai un tempo infinito, per questo è importante fare la cosa giusta al momento giusto. Ora."
      }
    ]
  },
  {
    "slug": "il-grande-omuncolo",
    "title": "Il grande omuncolo",
    "excerpt": "Il valore di un professionista si misura nel suo essere umano: una riflessione su cosa distingue i veri coach dai \"Dr. Me\".",
    "category": "Crescita personale",
    "date": "1 luglio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "2 min",
    "img": "/blog/il-grande-omuncolo.jpg",
    "content": [
      {
        "type": "p",
        "text": "“Coach si diventa, prima di tutto, dentro di sé, si tratta di uno status interiore che si ripercuote poi in ogni atteggiamento della persona. Questa rubrica è dedicata allo sviluppo della persona e del coach e a chiunque sia interessato a percorsi filosofici e pratici per essere di supporto agli altri.”"
      },
      {
        "type": "p",
        "text": "Il tuo valore lo dimostri nel tuo “essere umano”, al di là di ruoli e maschere che non potranno mai nascondere chi sei veramente. I grandi leader o influencer della storia sono grandi uomini e grandi donne con buone doti di comunicazione. Ma molti oggi credono che basti comunicare, trovare la formula magica di vendita per avere successo. Come difendersi dalla fuffa 4.0? In realtà, in queste prime righe, già si rivela il segreto dei “grandi” e il modo per riconoscerli, ma anche per riconoscere i mediocri e i poveri di spirito che si atteggiano a grandi."
      },
      {
        "type": "p",
        "text": "Questo vale per tutti i professionisti, la statura del loro essere umani condiziona inesorabilmente la loro grandezza professionale, ma questo è ancor più vero quando si parla di persone che dovrebbero aiutare altre persone a diventare “grandi”, come nel caso dei Coach o dei Formatori."
      },
      {
        "type": "h2",
        "text": "Ti presento il “Dr. Me”"
      },
      {
        "type": "p",
        "text": "Per comodità possiamo parlare di due mondi distinti. Quello dei “Professionisti” e quello dei “Dr. Me”. Qui approfondiremo il mondo dei dr. Me, dato che dei Professionisti ne parliamo sempre."
      },
      {
        "type": "p",
        "text": "Le promesse che normalmente i Coach Professionisti fanno ai loro clienti sono: maggiore chiarezza di idee e intenti, motivazione per l’azione, realizzazione dei loro obiettivi/talenti. Il tutto attraverso un metodo efficace per progettare, agire, verificare risultati, correggere, ritentare, realizzare…"
      }
    ]
  },
  {
    "slug": "dire-coach",
    "title": "Si fa presto a dire coach!",
    "excerpt": "Un modello per profilare i coach, il \"Conch\", che li colloca su due assi, quello del denaro e quello dei valori, delineando quattro profili tipici. Uno strumento di riflessione per capire chi sei come coach e dove vorresti andare.",
    "category": "Professione coach",
    "date": "28 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "6 min",
    "img": "/blog/dire-coach.jpg",
    "content": [
      {
        "type": "p",
        "text": "Colgo lo smarrimento sul viso del mio interlocutore, osservo l'accentuarsi delle sottili rughe che corrono orizzontali sulla sua fronte e le palpebre contrarsi riducendo gli occhi a due fessure. In fondo la sua era solo una domanda di routine, ma da circa quindici anni, quando mi chiedono cosa faccio nella vita, rispondo che sono un coach. Giustamente il malcapitato di turno cerca di capire meglio, di classificarmi nel suo \"archivio\", di collocarmi nella sua mappa del mondo. Potrei indovinare il pensiero dietro a quell'espressione tipica: \"Coach… in che senso?\". Si fa presto a dire coach!"
      },
      {
        "type": "p",
        "text": "Penso che cercare di profilare i coach, equivale alla ricerca di superare quello smarrimento, un tentativo di mettere ordine e trovare collocazione alla figura del coach, ci ripenso ed è una ricerca che mi sembra abbia senso e allora vale lo sforzo di avventurarsi nell'esplorazione dei possibili profili tipici del coach. Iniziamo."
      },
      {
        "type": "p",
        "text": "Prima di tutto voglio chiarire che parlando di \"coach\" intendo persone che hanno fatto almeno un corso di coaching e che si presentano come coach professionisti. Ho scelto di dividere i coach in due macro-gruppi: quelli che non hanno un reddito significativo da coaching e quelli che invece esercitano questa professione traendone un reddito significativo. Una seconda divisione riguarda il modo in cui i coach intendono e vivono il coaching. Ci sono quelli che fanno i coach e quelli che sono coach. Già, perché \"fare il coach\" è un'attività riferita a obiettivi e competenze di coaching, mentre \"essere coach\" è una missione, un modo di essere che contempla una dimensione valoriale personale molto forte."
      },
      {
        "type": "h2",
        "text": "Il modello \"Conch\""
      },
      {
        "type": "p",
        "text": "Definiti questi quattro cluster, si delinea un modello che li vede distribuiti su due assi incrociati, perpendicolari tra loro: quello orizzontale rappresenta l'asse del denaro e quello verticale l'asse che chiameremo dei valori. In questo modo si crea una coppia di poli opposti su ogni asse."
      },
      {
        "type": "p",
        "text": "Questo è il mio modo per profilare i coach, il mio modello della Condizione del Coach che ho chiamato \"Conch\", prendendo le prime tre lettere della parola \"condizione\" e le ultime due della parola coach."
      },
      {
        "type": "p",
        "text": "Questo modello si riferisce alla condizione del coach in termini pratici e in termini psicologici, definisce dei profili non gerarchici e senza alcuna valutazione di merito. Per un coach posizionarsi in un punto dello schema, più o meno vicino a uno dei profili di riferimento, può servire a comprendere meglio dove si vede in quel momento della sua vita e, eventualmente, ad attivare strategie per spostarsi dove desidera."
      },
      {
        "type": "h2",
        "text": "Come funziona il Conch"
      },
      {
        "type": "p",
        "text": "Più un coach è collocato a destra sull'asse orizzontale (Denaro) maggiori sono i proventi che gli derivano dal coaching, viceversa se si sposta verso l'estrema sinistra dell'asse, il reddito derivante dalle attività di coaching sarà minimo (potrebbe avere un altro lavoro ovviamente). Sull'asse verticale (Valori) invece abbiamo che se un coach si trova verso la parte alta sentirà maggiormente il coaching come una \"missione di vita\" e sarà più orientato verso valori olistici. Scendendo in basso sull'asse, al contrario, avremo a che fare con un coach di \"mestiere\" con prevalenza di valori più pratici e operativi."
      },
      {
        "type": "h2",
        "text": "I 4 profili del coach"
      },
      {
        "type": "p",
        "text": "In ogni quadrante emergono i quattro profili di riferimento:"
      },
      {
        "type": "h2",
        "text": "1 - Coach Minimalista"
      },
      {
        "type": "p",
        "text": "Questo profilo descrive chi raramente esercita il coaching in modo professionale. Ha competenze di coaching che applica, nelle sue varie attività, soprattutto a livello situazionale, ma le sue fonti di reddito sono altre. Ha probabilmente avuto dei momenti di grande entusiasmo per questa professione, ma poi il suo vero lavoro e i suoi doveri quotidiani l'hanno riassorbito. Se non si trova in questo quadrante per scelta, la difficoltà di trovare clienti e di gestirsi come professionista, nel tempo l'hanno portato a praticare poco e a perdere efficacia."
      },
      {
        "type": "h2",
        "text": "2 - Coach Concreto"
      },
      {
        "type": "p",
        "text": "È competente, sa promuovere e gestire la sua attività. Ama il suo lavoro, anche se gli richiede molta energia. Non è a suo agio con obiettivi di livello trasformazionale, invece lavora bene con clienti che hanno obiettivi situazionali, su attività e progetti definiti. La componente economica del suo lavoro è uno dei driver principali. Potrebbe avere difficoltà a collaborare con i suoi colleghi più \"spirituali\". Il suo work-life balance spesso è sbilanciato per il troppo lavoro."
      },
      {
        "type": "h2",
        "text": "3 - Coach Essenziale"
      },
      {
        "type": "p",
        "text": "Questo profilo descrive un coach che non si guadagna da vivere con il coaching, ma incarna i valori del coaching e li porta in tutto quel che fa. Capita spesso che si ponga in ascolto facendo domande utili all'interlocutore e che le persone gli riferiscano che le fa sentire al sicuro, libere di parlare sinceramente. Se stare in questo quadrante non è una scelta, a questo coach succede spesso di non sentirsi realizzato in quello che fa, perché in fondo avrebbe voluto proprio fare il coach di professione. Qualche volta potrebbe mancare di senso pratico e potrebbe avere difficoltà a farsi valere in quello che fa."
      },
      {
        "type": "h2",
        "text": "4 - Coach Virtuoso"
      },
      {
        "type": "p",
        "text": "Come nel caso del profilo 3, questo è un coach \"naturale\", il che non vuol dire che non abbia dovuto sudare per arrivare ad esserlo, ma adesso, nella vita di tutti i giorni e con i suoi numerosi clienti, essere un coach gli riesce naturale e lo rende efficace senza sforzo. Ha anche senso pratico e capacità di promuovere se stesso. Potrebbe non essere molto efficace con clienti impegnati su obiettivi operativi e circoscritti, preferisce senza dubbio lavorare su temi trasformazionali. Potrebbe avere un work-life balance non ottimale."
      },
      {
        "type": "h2",
        "text": "Scopri che tipo di coach sei"
      },
      {
        "type": "p",
        "text": "Prova a collocarti in uno dei quadranti. Scegli un punto sull'asse del Denaro. Ti collochi più verso il + o verso il -? Poi scegli un punto sull'asse dei Valori. Sei più verso l'Essere o verso il Fare? Adesso partendo da ogni punto disegna due rette perpendicolari che si incontreranno in uno dei quattro quadranti dello schema. Il loro punto d'incontro sarà la tua collocazione sulla mappa. Nella misura in cui sarai vicino agli estremi ovviamente il tuo sarà un profilo maggiormente vicino a uno dei 4 di riferimento, altrimenti potrebbe essere un mix di più profili. Cerca di essere sincero con te stesso: qual è il tuo profilo? Vorresti che fosse diverso? Cosa stai facendo perché questo accada? Quanto ti senti realizzato? Quanto stai onorando il tuo potenziale di coach? Buon lavoro."
      },
      {
        "type": "p",
        "text": "Come tutti i tentativi di classificazione della realtà anche questo modello è inevitabilmente imperfetto, mi auguro che possa comunque servire ad attivare riflessioni e istanze costruttive, ringrazio fin da ora per feedback e suggerimenti."
      }
    ]
  },
  {
    "slug": "coach-creativo",
    "title": "Coach creativo o reattivo?",
    "excerpt": "Come passare, da persone e da coach, da una dimensione reattiva a una creativa. Partnership, empowerment e orientamento ai risultati sono gli ingredienti che liberano la capacità creativa del cliente.",
    "category": "Coaching",
    "date": "24 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "7 min",
    "img": "/blog/coach-creativo.jpg",
    "content": [
      {
        "type": "p",
        "text": "In che modo, come persone e come coach, possiamo passare da una dimensione reattiva a una creativa? Il coaching – inteso secondo i canoni della International Coach Federation – con il suo approccio creativo rende disponibili per il cliente possibilità nuove e inusuali, pone le condizioni per cui un cliente possa accedere alla propria capacità creativa sentendosi capace e supportato nel farlo. Questo si deve in particolare a tre “ingredienti”: la partnership, l’empowerment e l’orientamento all’azione"
      },
      {
        "type": "h2",
        "text": "Come accedere alla capacità creativa?"
      },
      {
        "type": "p",
        "text": "Partnership: il coach è partner del suo cliente, si pone in una relazione paritaria che facilita confidenza e assenza di giudizio permettendo una delle condizioni essenziali perché la creatività si esprima: la libertà di sbagliare, la possibilità di fare o dire cose che potranno essere inutili o sbagliate, ma che verranno valorizzate in quanto utili al processo creativo. Normalmente questo è impraticabile, la cultura in cui viviamo vive l’errore come un disonore e nessuno vuole sbagliare o far sapere di averlo fatto. Per esempio, nelle aziende le persone per non sbagliare portano il livello di innovazione verso il basso, difficilmente tentano strade nuove. Questo diventa paradossale quando l’azienda chiede ai suoi impiegati innovazione, ma non cambia la politica di rewarding continuando a premiare chi fa la cosa giusta invece che chi tenta nuove strade.Il coaching scardina questi meccanismi e se il coach riesce veramente a generare partnership con il cliente gli offre un’opportunità creativa di valore inestimabile"
      },
      {
        "type": "p",
        "text": "Empowerment: con questa parola si intende quel particolare comportamento del coach che fa sentire il cliente autonomamente capace e responsabile dei risultati. Anche questa è un’opportunità che raramente incontriamo nella vita di tutti i giorni, persino le persone che ci vogliono più bene, con la loro premura e presenza, rischiano di non farci sentire capaci di fare da soli, non ci offrono la possibilità di scoprire quanto siamo capaci e “potenti” perché impegnate a facilitarci il cammino. Parlo tipicamente dei genitori, ma anche di partner, manager o colleghi. L’empowerment è un’altra di quelle parole tanto citate ma poco praticate. Il coach per generare empowerment deve veramente essere scollegato da modelli genitoriali o di guida. Deve essere capace di mettere da parte le sue personali necessità di sentirsi utile o apprezzato e lavorare perché il suo cliente diventi, giorno dopo giorno, più forte e consapevole di potercela fare anche quando il coach sarà solo un lontano ricordo. Questa possibilità è realizzabile nella misura in cui il coach abbia superato i suoi comportamenti reattivi e sia emerso dal groviglio di bisogni insoddisfatti e paure che rendono tanto forte l’ego quanto debole il coach."
      },
      {
        "type": "p",
        "text": "Orientamento ai risultati: le più belle intenzioni del mondo restano tali se non si trasformano in fatti, il coaching permette proprio questo passaggio che in altri contesti troppo spesso viene trascurato. Nel percorso di coaching e nella singola sessione, dopo aver facilitato una fase più creativa il coach supporta il cliente nella definizione di un piano d’azione che permetterà agli obiettivi di diventare realtà. Per sognare ad occhi aperti, tenere nel cassetto i progetti e lamentarsi della vita che non cambia non serve un coach, il cliente ha bisogno di essere stimolato e supportato nel perseguire i propri obiettivi in modo professionale. La maggior parte delle volte i clienti mi riferiscono che essere sostenuti nella creazione di un piano di azione permette loro di avanzare nella direzione desiderata più di ogni altro metodo o tecnica sperimentati prima."
      },
      {
        "type": "h2",
        "text": "Coaching e creatività – Dalla parte del coach"
      },
      {
        "type": "p",
        "text": "A proposito di coaching e creatività, nel progettare percorsi di formazione per coach, una delle maggiori sfide che si affrontano è stimolare gli aspiranti coach – che spesso hanno un consolidato modo di essere – a passare dal mondo reattivo a quello creativo. Infatti è necessario un coach creativo durante tutto lo svolgimento del lavoro, quindi un coach non solo deve essere un “coach creativo” e pronto a cogliere la profondità di quanto il suo cliente porta nella sessione, ma deve anche facilitare la creatività del proprio cliente supportandolo nello spostamento dal ruolo di vittima – delle circostanze, delle persone, del destino, ecc. – a quello di responsabile dei risultati, capace di cambiare comportamento-strategia-mezzi per ottenere risultati diversi. Uno dei momenti in cui potremmo fare i conti con la reattività del cliente è quando gli offriamo feedback. Possiamo infatti ricevere una risposta più o meno difensiva, volta a spiegare, giustificare, rendere accettabile il comportamento o il fatto rilevato. Per questo è importante acquisire delle competenze specifiche nel dare feedback e per questo i coach di maggior successo sanno dare feedback nel modo più appropriato… ma torniamo al cliente, lo abbiamo lasciato lì che si giustificava: “è successo perché io pensavo che… in realtà io sapevo che sarebbe andata in quel modo, ma volevo proprio vedere come avrebbe reagito… in fondo non mi interessava veramente quella promozione… no non sono stato io, è stata lei!”. Premesso che nella misura in cui un cliente cerca di giustificarsi non lo stiamo facendo sentire al sicuro, è utile chiedersi cosa fa reagire così il nostro cliente e, più in generale: perché le persone hanno bisogno di giustificarsi? Nota bene il significato di questa parola: giustificarsi, rendersi giusti, cercare di essere visti come giusti. Abbiamo parlato dei bisogni fondamentali e tra questi c’è il bisogno che i nostri simili ci apprezzino. Oltre a comprendere questo dobbiamo fare i conti con il nostro bisogno di essere apprezzati, ti è mai capitato di avere difficoltà a dare un feedback che sapevi avrebbe creato una reazione difensiva? Quella difficoltà probabilmente ha una relazione con il tuo bisogno di restare in una relazione positiva con le persone, di non essere giudicato “cattivo”. Altro momento della verità in cui potresti accorgerti di essere in una dimensione reattiva è quando fai al tuo cliente una domanda o un’osservazione che ti viene rispedita indietro, vedo spesso gli aspiranti coach difendere quanto detto, offrire spiegazioni per far capire al coachee che in fondo la domanda o l’osservazione aveva senso. In casi come questi il movente è reattivo, dovremmo invece superare il bisogno di essere giusti e accettare di aver detto qualcosa di non pertinente. Ma ce n’è anche per chi fa spesso sessioni più lunghe del previsto. Cosa dobbiamo dimostrare? Siamo sicuri che “di più” è meglio?"
      },
      {
        "type": "h2",
        "text": "Un dialogo reattivo"
      },
      {
        "type": "p",
        "text": "Mauro è in piedi, aspetta Paolo da mezz’ora e inizia a essere veramente impaziente. Il suo collega non è mai puntuale, ma questa volta sta tardando più del solito. Proprio mentre Mauro pensa di andarsene arriva il collega: “Paolo, sono qui ad aspettarti da mezz’ora! Possibile che tu non sia mai puntuale?”. Paolo, trafelato dice: “Oggi c’era un traffico bestiale. Mai visto così!” Mauro non ci crede e immagina sia una delle tante scuse per cui Paolo è noto tra i colleghi: “Mi potevi almeno avvertire, sono stato qui ad aspettarti in piedi pensando che arrivassi da un momento all’altro!”. Mauro è abbastanza arrabbiato, Paolo replica offeso: “Potevi anche sederti mentre aspettavi!”. In genere queste discussioni sono sassi che diventano valanghe, meglio capire cosa c’è veramente sotto e cambiare approccio. Ormai è chiaro, dialoghi come questo appartengono al mondo reattivo, sarebbe tutto più semplice se Paolo, di fronte alla reazione di Mauro che non si sente rispettato, chiedesse semplicemente scusa comunicando al collega che ne comprende il punto di vista e l’emozione. Anche se esprimiamo una certa creatività nell’inventare scuse, questo comportamento è reattivo non creativo. Cosa fare? In che modo, come persone e come coach, possiamo passare da una dimensione reattiva a una creativa? Cioè, in che modo possiamo esprimere una libertà di scelta nelle nostre azioni? Come passare da reagire ad agire? Questo è un processo che richiede la comprensione dei meccanismi e della posta in gioco, il desiderio e la scelta di cambiare e tanto, tanto lavoro, magari con un buon coach. Questo comprende l’essere consapevoli di quello che accade fuori e dentro di noi, riuscendo a far tesoro dei feedback che riceviamo, richiede impegno specifico e la disponibilità a farsi aiutare. Come coach dobbiamo considerare che essere creativi per noi è fondamentale perché fa la differenza tra la simulazione e la performance, tra una persona che si sforza di sembrare un coach e un coach che fa bene il suo lavoro."
      }
    ]
  },
  {
    "slug": "coaching-e-creativita",
    "title": "Coaching e creatività",
    "excerpt": "La creatività non è una dote per pochi eccentrici, ma un potenziale di ogni persona. Il confine tra creatività e reattività e come il coaching aiuta a scegliere consapevolmente come vivere ogni esperienza.",
    "category": "Coaching",
    "date": "21 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "5 min",
    "img": "/blog/coaching-e-creativita.jpg",
    "content": [
      {
        "type": "p",
        "text": "Coaching e creatività: in che modo la creatività è portatrice di benessere e padronanza di se stessi e come si sviluppa il processo creativo all’interno della relazione fra coach e coachee? “Vivere ogni singola esperienza consapevoli di poter scegliere come viverla“: In questa frase racchiudo l’essenza dell’essere creativi e anche del perché per me coaching e creatività vivono insieme. Il significato di questa frase a qualcuno potrebbe sembrare nebuloso, ad altri più chiaro. In ogni caso, proseguendo nella lettura potreste avere delle piacevoli conferme e delle utili sorprese."
      },
      {
        "type": "h2",
        "text": "L’idea di creatività"
      },
      {
        "type": "p",
        "text": "Ho imparato che la prima idea è sempre quella banale, la seconda quella normale, la terza va messa da parte, dopo di che siamo nel processo creativo, quello che ha dato alla luce opere famose o che fa nascere idee che cambiano il mondo. Idee come quelle che hanno generato il “telegrafo parlante” di Meucci, il primo volo dei fratelli Wright o, ancor prima, la nascita della psicologia scientifica ad opera di Wundt nel suo famoso laboratorio a Lipsia. Tuttavia non parlerò di questa creatività e di questi grandi uomini, credo che i cosiddetti creativi – gli inventori, gli artisti – non siano necessariamente degli esempi rappresentativi di successo. Infatti molto spesso il loro modo di essere creativi appartiene a una sfera compulsiva, legata alla soddisfazione di bisogni di cui sono semplicemente vittime. Nelle prossime pagine guarderemo invece alla creatività come portatrice di benessere e padronanza di se stessi, quella che impatta sulla maggior parte della vita delle persone, inclusi i creativi di professione."
      },
      {
        "type": "h2",
        "text": "Coaching e creatività: quale confine tra creatività e reattività?"
      },
      {
        "type": "p",
        "text": "Usciamo dall’idea della persona creativa come stereotipo di eccentrico, sregolato, ineffabile e straordinario personaggio e dirigiamoci invece verso l’idea che la creatività sia dote potenziale di ogni essere umano. Entriamo nel mondo psicologico delle persone comuni per conoscere il confine tra creatività e reattività. I bisogni primari dell’individuo sono riconducibili a pochi: quello di essere amati e quello di esprimere individualità; il bisogno di sicurezza e quello di varietà. Questi bisogni, portati nella dimensione psicologica umana, hanno un’influenza determinante, generano paure e ambizioni, attitudini e approcci alla vita che diventano distintivi della singola persona e di specifiche culture. Le persone normalmente agiscono perché stimolate e non determinano “in modo creativo” il loro comportamento, questo avviene anche a chi si ritiene capace di autodeterminazione e creatività, anzi, proprio alcune tra le persone “insospettabili” sono completamente rapite dalla loro ricerca di soddisfare il bisogno di essere amate-indipendenti-creative o al sicuro. Ognuno di noi, per soddisfare questi bisogni, sviluppa precocemente delle strategie di comportamento che spesso sono socialmente funzionali, si impara a essere ordinati, precisi, puntuali, oppure a lavorare sodo e a essere onesti, altruisti, persino creativi! Insomma una varietà di comportamenti politicamente corretti, ma mossi da un meccanismo reattivo, quindi non gestito. Stesso meccanismo che genera anche effetti opposti e socialmente meno apprezzati, infatti, comportamenti funzionali in un contesto o in una certa misura, diventano disfunzionali in un contesto diverso o in un’altra misura"
      },
      {
        "type": "h2",
        "text": "Esseri creativi o reattivi"
      },
      {
        "type": "p",
        "text": "Nel mondo reattivo non c’è scelta, le persone sono inconsapevoli dei meccanismi e delle spinte che le guidano o non riescono a cambiare anche se vorrebbero. Qualcuno ci stimola e noi rispondiamo, come animali, stimolo risposta, niente di più. Un animale percepisce pericolo, cibo, possibilità di riprodursi e reagisce secondo un programma istintivo. Qui non c’è spazio per le scelte, la parte più primitiva del nostro cervello continua a governare parte della nostra vita esattamente come faceva milioni di anni fa, questo è utile quando le situazioni lo richiedono, purtroppo accade anche in situazioni che non hanno veramente a che fare con i temi di sopravvivenza, ma che appaiono tali al nostro cervello rettiliano per il significato che gli attribuiamo. Siamo esseri creativi nella misura in cui facciamo delle scelte, altrimenti siamo parte di un programma in esecuzione, routine di codice informatico che si ripetono sempre uguali ogni volta che si preme un pulsante o si verifica una data condizione, routine che possono anche dare forma a incredibili creazioni, ma che non sono creative, almeno non nel senso che intendiamo qui."
      },
      {
        "type": "p",
        "text": "I “reattivi” vengono spinti dai loro bisogni e dal tentativo di rispondere agli stimoli circostanti mentre i “creativi” sono consapevoli di poter agire al di fuori dello schema stimolo/risposta, per esempio, non facendo qualcosa solo perché ci si aspetta che lo facciano, oppure offrendo cortesia a chi li offende, comprendendo che la minaccia percepita non è reale, che magari si tratta solo di un collega che cerca di fare bella figura e non di farci perdere il lavoro… queste persone non solo determinano consapevolmente le loro azioni, ma sono anche consapevoli di essere in grado di farlo"
      }
    ]
  },
  {
    "slug": "perche-diventare-coach-3",
    "title": "Perché diventare coach",
    "excerpt": "Una riflessione personale sulla scelta di diventare coach: quando il lavoro unisce sviluppo personale ed esperienza di business, impegno e fatica diventano leggeri.",
    "category": "Professione coach",
    "date": "17 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/perche-diventare-coach-3.jpg",
    "content": [
      {
        "type": "p",
        "text": "Provenendo da varie altre carriere professionali, molti anni fa ho scelto questa strada perché metteva insieme il mio percorso di sviluppo personale e spirituale con le mie esperienze di business e azienda. Ricordo come, leggendo il libro di John Whitmore provai una crescente eccitazione ed entusiasmo, ogni pagina valorizzava il mio modo di essere e le mie esperienze tanto diverse tra loro. Potevo finalmente occuparmi di temi che sentivo centrali vedendomi riconosciuta una dignità professionale e la possibilità di avere un adeguato riscontro economico, tutto questo facendo quello che più mi dava energia. A proposito di energia, nella versione italiana di “The Apprentice” -che mi è capitato di vedere per pura curiosità professionale- Flavio Briatore dice: “Sul lavoro non ci si diverte. Per me il lavoro è una cosa molto seria: se ti stai divertendo, probabilmente non stai lavorando bene.”"
      },
      {
        "type": "p",
        "text": "È una frase che potrebbe sembrare banale e passare inosservata, ma pur rispettando il pensiero di Briatore e/o degli autori della trasmissione, credo che questa frase provenga da un modo di pensare vecchio, legato a circuiti mentali e atteggiamenti sociali “deviati” dalla convinzione che il piacere sia un peccato a prescindere o che solo soffrendo si possano avere dei risultati. D’accordo, il lavoro richiede impegno e fatica, ma se ami quel che fai, impegno e fatica diventano leggeri e puoi persino scoprirti a sorridere con te stesso mentre lavori."
      },
      {
        "type": "h2",
        "text": "Sperimentare il coaching"
      },
      {
        "type": "p",
        "text": "Se svolgendo un lavoro ti dimentichi del tempo che passa, se una volta iniziato non vorresti più smettere, quando ciò che stai facendo ti piace e senti che ti fa bene, allora quello è il tuo lavoro, ammesso che trovi qualcuno disposto a pagarti per farlo… Ecco, credo che abbia senso diventare coach solo se ti senti nutrito e provi piacere nel farlo. Come fai a sapere se ti sentirai nutrito e proverai piacere a essere un coach? Puoi iniziare con lo sperimentare come funziona il coaching, cosa fa un coach (questo puoi scoprirlo diventando tu stesso cliente di un coach) e poi immaginare come ti sentiresti al suo posto e se questo “assaggio” si rivela invitante allora avrai il “problema” di dover scegliere una scuola dove formarti e iniziare prima possibile a misurarti con il tuo essere coach sul campo. Ma questa è un’altra storia e ne parleremo prossimamente."
      }
    ]
  },
  {
    "slug": "pensiero-sistemico-coaching",
    "title": "Pensiero sistemico e coaching",
    "excerpt": "Anche il bene comune sottostà alle leggi sistemiche. Perché coinvolgere tutte le parti e lasciare la responsabilità delle soluzioni ai clienti rende gli obiettivi più duraturi e sostenibili.",
    "category": "Coaching",
    "date": "14 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/pensiero-sistemico-coaching.jpg",
    "content": [
      {
        "type": "h2",
        "text": "Pensiero sistemico, soluzioni e consapevolezza"
      },
      {
        "type": "p",
        "text": "Anche il bene comune sottostà alle leggi sistemiche, come per esempio quelle visibili in natura. I vari elementi del sistema si adattano o vengono eliminati affinché il sistema continui ad esistere e questo è semplicemente quello che è, senza aggettivi; se il bene comune viene perseguito da un ingegnere con la passione per il risparmio del tempo, ma senza nessuna consapevolezza del fattore umano e/o di altri fattori sistemici, a dispetto delle buone intenzioni, potremmo andare verso il male comune, quanto meno verso l’insoddisfazione comune e questo –attenzione- dato che un sistema tende sempre a cercare l’equilibrio, potrebbe significare meno clienti per la compagnia aerea, il conseguente licenziamento dell’ingegnere e un ritorno ai vecchi sistemi… invece, un bravo consulente farebbe un questionario per i passeggeri e parecchie domande ai lavoratori implicati nel processo d’imbarco, ai responsabili della compagnia, a chiunque fosse coinvolto e poi proporrebbe una soluzione, ma se anche il nostro consulente fosse molto bravo, proporrebbe comunque una soluzione sua, che potrebbe generare un fenomeno chiamato: “resistenza al cambiamento”, che però chiamerei: “resistenza al cambiamento imposto e noncurante del fattore umano”."
      },
      {
        "type": "h2",
        "text": "Pensiero sistemico: cosa potrebbe fare di meglio un coach?"
      },
      {
        "type": "p",
        "text": "Coinvolgere tutte le parti per facilitare la definizione e condivisione degli obiettivi, in modo che, quando definita una soluzione, tutte le persone coinvolte possano percepirla come volta al bene comune. Un coach lascerebbe la responsabilità delle soluzioni ai clienti i quali saprebbero trovare le migliori per loro, in quel momento e avrebbero la percezione di possedere gli strumenti per trovare nuove soluzioni al sopraggiungere di mutate condizioni o volontà."
      },
      {
        "type": "p",
        "text": "In conclusione Il bene comune non è definibile in termini assoluti, ma il coaching, aiutando le persone a scoprire se stesse e ad aumentare la loro consapevolezza personale, è il metodo che più di altri le supporta nel definire quali azioni mettere in atto per il raggiungimento di obiettivi che coinvolgano il “bene comune”, aiutandole a prevederne le conseguenze nel tempo e nel sistema in cui si inseriscono. Nel caso il lavoro del coach sia richiesto da un cliente che non ha nessun interesse per il bene comune è importante che comunque il coach lo supporti nell’esplorare le conseguenze del raggiungimento del suo obiettivo, perché più un obiettivo sarà accolto o sostenuto dal sistema in cui si dovrà realizzare e maggiori sono le possibilità di successo e soddisfazione del cliente. Più il raggiungimento dell’obiettivo sarà utile al funzionamento del sistema e più sarà percepito come tale (bene comune) più sarà facile, probabile e duraturo il successo dell’iniziativa."
      },
      {
        "type": "p",
        "text": "Insomma, cercare il bene comune è un vantaggio per tutti e non è dato sapere quale sia realmente il bene comune, ma ne possiamo avere una percezione che talvolta è… comune, il massimo bene comune possibile."
      }
    ]
  },
  {
    "slug": "coaching-bene-comune",
    "title": "Coaching e bene comune",
    "excerpt": "Il coaching aiuta le persone a conoscere se stesse e ad agire in modo consapevole. Attraverso l'esempio dell'imbarco dei passeggeri, come il fattore umano cambia la percezione del bene comune.",
    "category": "Coaching",
    "date": "10 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/coaching-bene-comune.jpg",
    "content": [
      {
        "type": "p",
        "text": "Il coaching permette ai clienti di fare chiarezza su quel che desiderano e sul perché lo desiderano, inoltre li aiuta a definire in modo chiaro i loro obiettivi per poi realizzarli, ma il coaching permette ai clienti anche di accorgersi lungo il percorso di aver cambiato orientamento e obiettivi o di trovare parti di se stessi che ignoravano… possiamo dire che il coaching, nella sua massima espressione, aiuta le persone a conoscere se stesse e ad aumentare la loro consapevolezza personale. Il vantaggio che dovrebbe, più di ogni altro, rappresentare il plus di lavorare con un coach, secondo me si chiama: azione consapevole. Sotto il dominio della consapevolezza entra anche la già citata capacità di giudicare le conseguenze nel tempo di un’azione o di una variazione di stato in un sistema complesso, capacità che gioca un ruolo fondamentale nel definire il bene comune e se la portiamo in una dimensione predittiva diventa: la capacità di prevedere se una nostra azione finirà per incidere positivamente o negativamente sul bene comune"
      },
      {
        "type": "h2",
        "text": "Il coaching, il bene comune e l’imbarco dei passeggeri"
      },
      {
        "type": "p",
        "text": "Pochi giorni fa leggevo tra le notizie della rivista “Internazionale” un articolo sulle procedure d’imbarco negli aeroporti. Sembra che un ingegnere, aspettando in aeroporto, si sia dilettato nel fare dei calcoli sui tempi e le procedure d’imbarco, secondo questi calcoli richiederebbe molto meno tempo imbarcare le persone secondo una sequenza precisa che preveda prima l’imbarco dei passeggeri al finestrino di un lato dell’aereo poi quelli dell’altro lato e così via, seguendo criteri di efficienza e rapidità dei movimenti negli stretti spazi dell’aeromobile. Nell’articolo si faceva notare che questo sistema farebbe risparmiare molto tempo a tutti. Trovandomi spesso a viaggiare in aereo, mi sono fermato a riflettere sulle conseguenze di un simile cambiamento e dal punto di vista del bene comune dei passeggeri mi è sembrata una buona cosa, ma subito mi sono reso conto che, lo studioso e il giornalista, non avevano considerato il fattore umano, infatti le persone hanno anche bisogni e preferenze psicologiche e da questo punto di vista per i passeggeri non ha senso vedere imbarcare prima il proprio compagno di viaggio perché ha il posto al finestrino e attendere in sala d’attesa invece che entrare insieme, magari perdere un po’ di tempo per aggiustarsi, ma tutti insieme."
      },
      {
        "type": "p",
        "text": "Questa sola obiezione al metodo dell’ingegnere ci basta per comprendere come, per esempio, prendendo in considerazione solo il fattore tempo e non quello umano, il bene comune possa apparire tanto diversamente. Forse è per questo che in politica, nel tentativo di trovare un sistema di governo per il bene comune, si è approdati alla democrazia, un sistema che cerca di coinvolgere il maggior numero dei cittadini nelle decisioni, ma che pure nella sua applicazione ha dimostrato di essere perfettibile"
      }
    ]
  },
  {
    "slug": "perche-diventare-coach-2",
    "title": "Perché diventare coach",
    "excerpt": "Chi sceglie di diventare coach e perché. Un ritratto dei professionisti che, dopo altre carriere, decidono di dedicarsi allo sviluppo delle persone spinti da valori e senso di significato.",
    "category": "Professione coach",
    "date": "7 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/perche-diventare-coach-2.jpg",
    "content": [
      {
        "type": "p",
        "text": "Perché diventare coach? Probabilmente questa domanda potrebbe declinarsi con le diverse professioni di aiuto e supporto alle persone: perché diventare psicologo, counsellor, medico, bagnino, postino… è solo questione di come intendiamo queste professioni. Parlando di coaching, conosco personalmente qualche centinaio di coach di nazionalità e culture diverse, tutti con una storia in comune: la maggior parte di loro a causa di un evento esterno che li ha fatti confrontare con una crisi o per impulso interiore, dopo anni spesi a costruirsi una carriera hanno scelto di diventare coach, dei liberi professionisti dedicati alla realizzazione delle persone. Penso di poter dire che la professione del coach, in qualsiasi ambito venga praticata, nella maggior parte dei casi viene scelta da chi, dopo aver praticato “altro”, decide che è arrivato il momento di impegnarsi in una professione più in linea con i propri valori e le proprie inclinazioni. D’altronde, da qualche anno ho anche evidenza di giovani laureati che tentano questa strada, immagino mossi da ideali alti e con l’intenzione di riuscire a trovare un’occupazione di nicchia. Penso che i giovani possano essere i migliori coach per i loro coetanei, ma servirà ancora del tempo prima che possano veramente vivere di coaching e servirà molto talento e resilienza."
      },
      {
        "type": "h2",
        "text": "Coach: artefici del cambiamento"
      },
      {
        "type": "p",
        "text": "Tutti i colleghi affermati che conosco sono over 40 con un’esperienza, personale e professionale, significativa alle spalle. Il coaching è una professione che attrae persone con una particolare sensibilità, spinte da sistemi valoriali definiti. Generalmente i coach sono persone che amano migliorare le cose, sentirsi artefici di un cambiamento positivo, sono in cerca di un’attività fatta di relazioni non superficiali, volte allo sviluppo, il benessere e la realizzazione delle persone. Ogni volta che ho partecipato a una riunione o conferenza di coach, da Roma o Milano, a Parigi, Ginevra, Madrid, Los Angeles, Orlando o Fort Worth, ho sempre visto una partecipazione autentica. Che si trattasse di professionisti di lunga esperienza o “matricole” ho trovato persone con un forte senso di collaborazione, persone pronte a offrire il proprio contributo per migliorare il mondo, iniziando dal facilitare i propri clienti nella realizzazione di loro stessi. Il senso di significato, unito al pragmatismo del coaching, è il vero motore di questa professione. Certo, ci sono anche coach meno idealisti e che, dando sfoggio di se rischiano di sembrare più impegnati nella soddisfazione dei loro bisogni psicologici che dello sviluppo dei clienti, ma chi può giudicare? Personalmente ammetto di trovarmi a mio agio con i colleghi che a me sembrano abbastanza consapevoli si se stessi e genuinamente al servizio degli altri e per fortuna sono la gran parte. D’altronde, quella del coach, se non hai un autentico interesse per le persone è una professione pesante. Immagina come ci si potrebbe sentire passando le ore ad ascoltare le chiacchiere di qualcuno di cui non ti interessa altro che il pagamento… immagino che potrebbe essere insopportabile. Se non si amano le persone, se non si ha genuina curiosità per gli altri, meglio non scegliere il coaching come professione."
      }
    ]
  },
  {
    "slug": "massimo-bene-comune-2",
    "title": "Il massimo bene comune",
    "excerpt": "Cos'è davvero il bene comune? Una riflessione che attraversa storia, principio del Tao ed equilibrio dei sistemi per esplorare un concetto tanto ineffabile quanto necessario.",
    "category": "Riflessioni",
    "date": "3 giugno 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "6 min",
    "img": "/blog/massimo-bene-comune-2.jpg",
    "content": [
      {
        "type": "p",
        "text": "C’è un senso spirituale di comunione nelle azioni di singole persone che lavorano le une per il bene delle altre… “Lavoriamo per il bene comune!” frasi come questa riescono a farci sentire migliori. Ma cos’è il bene? Come faccio a sapere qual è il bene comune se è persino difficile sapere quale sia il bene di una singola persona? Perché ci sono persone che si preoccupano solo di se stesse e altre che non possono fare a meno di fare qualcosa per gli altri?"
      },
      {
        "type": "p",
        "text": "Per tentare di rispondere a queste domande devo partire da lontano e tornare indietro al tempo in cui pensavo che il mondo si dividesse in buoni e cattivi, ero un bambino e mi sembrava naturale dividere il mondo in modo simmetrico, il buono e il cattivo, il brutto e il bello, il debole e il forte. Questo modo di vedere è rassicurante, puoi riconoscere e separare nettamente quello che è giusto e quello che è sbagliato, ti permette di pensare che ci sia la possibilità di combattere il male e che questo male sia fuori da te.Purtroppo la vita per noi esseri umani non è così semplice, quello che sembra bene da un punto di vista non lo è da un altro e molto spesso i cattivi non sono così cattivi e i buoni spesso si rivelano meno buoni di quanto si pensa, come nel caso della storia dei nativi americani."
      },
      {
        "type": "h2",
        "text": "Di Toro seduto e John Wayne"
      },
      {
        "type": "p",
        "text": "La popolazione dei nativi americani viveva organizzata in tribù sparse su un vasto, ricco e incontaminato territorio, fino a quando arrivarono i coloni europei a cercare fortuna. A seguito del conflitto che ne conseguì, per tanti anni i nativi americani sono stati descritti come spietati selvaggi, sempre in agguato per assaltare le carovane dei poveri coloni indifesi. Descritti come primitivi senza valori e cultura, i nativi americani furono considerati una fastidiosa presenza fino a quando non vennero ridotti a poche centinaia e rinchiusi in riserve, dove ancora oggi vivono, anche se con la libertà di uscirne. Immagino che anche John Wayne, interpretando uno dei suoi tanti film western, fosse consapevole che in realtà i “poveri” coloni erano degli invasori dediti a scacciare con ogni mezzo i legittimi proprietari di quelle terre, eppure per tanti anni, milioni di persone hanno creduto all’idea dei nativi cattivi e dei coloni buoni. Oggi possiamo dire che è stato un genocidio a cui gli americani moderni non potranno mai porre veramente rimedio, ma guardandola da un altro punto di vista, senza quel cambiamento oggi non avremmo una civiltà come quella degli Stati Uniti d’America che, per quanto discutibile, ha contribuito al bene comune in modo significativo, per esempio impedendo l’espansione del nazismo di Hitler nella seconda guerra mondiale. Questo per noi italiani di oggi significa non parlare tedesco, d’altronde, si potrebbe obiettare che se parlassimo tedesco forse oggi non avremmo un tasso di disoccupazione così alto e vivremmo in un paese meno corrotto e indebitato… potremmo continuare con le molte congetture sulle conseguenze delle azioni nella storia, ma questo è solo un esempio per dire quanto sia difficile giudicare le conseguenze nel tempo di un’azione o di una variazione di stato in un sistema complesso."
      },
      {
        "type": "h2",
        "text": "L’ineffabile bene comune"
      },
      {
        "type": "p",
        "text": "A questo punto il termine bene comune mi appare ineffabile o quasi un ossimoro, un termine che contiene in se stesso il suo opposto e, nonostante questo, continuo a credere che esista un modo per riconoscere e perseguire il bene comune. Nel coaching questo tema si pone spesso e noi coach di professione ci appassioniamo parlando di valori e lavoriamo -quantomeno molti di noi lo fanno- per avere un impatto positivo nel mondo. Personalmente mi emoziono molto nel vedere l’impatto che poche ore di coaching hanno sulla vita dei miei clienti, delle persone loro vicine e talvolta, a cascata, di migliaia di dipendenti. Tutto questo deve avere un significato riconoscibile, non relativistico! Sono combattuto, mi sembra chiaro che non esista modo -se non quello religioso e dogmatico- di definire il bene e pure mi sembra chiaro che quel bene esiste e voglio sentirmi tra quelli che lavorano per esso. Queste parole mi riportano a molti anni fa, quando, con un senso di bruciore interno, realizzai in un istante di essere io stesso portatore di quel male che tanto disprezzavo fuori di me, per fortuna dopo il fuoco arrivò il conforto della comprensione e iniziai a vedere il bene e il male come due facce della stessa moneta, per questo inseparabili, se non distruggendo la moneta e con essa il suo valore. Anni prima avevo studiato il Taoismo e il suo famoso simbolo sapevo che rappresenta proprio questo concetto, ma non avevo mai pensato ad applicarlo su me stesso. Tanto impegno e fatica nel sentirmi un rappresentante del bene da non poter immaginare di avere anche il male dentro di me … eppure ora mi sembra ovvio: il negativo e il positivo, l’energia che crea e quella che distrugge, la vita e la morte, non potrebbero esistere se non insieme."
      },
      {
        "type": "h2",
        "text": "Il principio del Tao e le zebre"
      },
      {
        "type": "p",
        "text": "Applicando il principio del Tao al bene comune, possiamo dire che non esiste bene comune senza male comune, non si può produrre l’uno senza generare l’altro. Mi rendo conto che non si tratta di un concetto proprio intuitivo, ma proviamo a esplorarlo. Guardiamo al mondo animale, un branco di zebre: vivono insieme nella savana africana, alcuni cuccioli al seguito delle madri, i maschi che avanzano lentamente sulle loro zampe robuste, ed ecco che arriva il leone… il branco scappa, il leone lo insegue, una zebra più lenta resta indietro e il leone l’artiglia mettendola a terra, il resto del branco si allontana di qualche decina di metri e il leone sbrana la zebra. Se osserviamo tutto questo con un occhio sistemico, vediamo semplicemente il -sistema savana- che si mantiene in equilibrio grazie al contributo, forse inconsapevole, di tutti gli animali. Nel mondo degli uomini il principio è lo stesso, ma noi siamo complessi, pensiamo, ci affezioniamo alla nostra vita e alle persone, siamo più o meno consapevoli del nesso causa effetto delle nostre azioni e diventa tutto più difficile da comprendere e giudicare."
      }
    ]
  },
  {
    "slug": "leadership-personale-il-potere-di-cambiare",
    "title": "Leadership personale: il potere di cambiare",
    "excerpt": "Conoscere e saper trasformare se stessi è la base per sviluppare una potente leadership personale ed esprimere al meglio il proprio potenziale. Ma perché cambiare è così difficile?",
    "category": "Leadership personale",
    "date": "31 maggio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "3 min",
    "img": "/blog/leadership-personale-il-potere-di-cambiare.jpg",
    "content": [
      {
        "type": "p",
        "text": "Conoscere e saper trasformare te stesso può consentirti di sviluppare una potente leadership personale, di esprimere al meglio il tuo potenziale e avvicinarti alla nuova vita che intendi creare."
      },
      {
        "type": "p",
        "text": "Quante volte ti sei accorto che un tuo comportamento ti causa dei problemi sul lavoro ma inevitabilmente ricadi nello stesso errore? O che ci sono delle situazioni in cui le tue reazioni mettono a repentaglio relazioni a cui tieni? O ancora che senti un profondo bisogno di cambiare delle cose nella tua vita ma non ci riesci? Cambiare non è facile."
      },
      {
        "type": "p",
        "text": "Il modo in cui agiamo ha delle radici profonde e spesso ignoriamo i meccanismi che ne sono alla base. Tante scoperte scientifiche, dalle neuroscienze alla meccanica quantistica, dalla biologia alla psicologia, oggi sembrano convergere e confermare ciò che le filosofie orientali insegnano da millenni, offrendoci nuove chiavi di lettura sulla natura dell'uomo e sul suo funzionamento."
      },
      {
        "type": "p",
        "text": "La pratica regolare della meditazione e della mindfulness aumenta l'abilità di rilasciare lo stress e di essere in azione riflessiva, una competenza che, come afferma il professore di Harvard Ronald Heifetz, distingue i leader eccezionali da quelli mediocri. La mindfulness, ovvero l'idea di coltivare uno stato di consapevolezza nel momento presente, permette la libertà di essere chiunque abbiamo deciso di essere, nonostante le continue richieste e difficoltà della vita."
      }
    ]
  },
  {
    "slug": "supervision-icf-e-coaching",
    "title": "Supervision ICF e Coaching",
    "excerpt": "Che cos'è la Supervisione nel coaching, in che modo si distingue dal Mentor Coaching e quale valore offre al coach professionista, ai suoi clienti e all'integrità della professione.",
    "category": "Coaching professionale",
    "date": "27 maggio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/supervision-icf-e-coaching.png",
    "content": [
      {
        "type": "p",
        "text": "ICF (International Coach Federation) ha definito la Supervisione in questi termini:"
      },
      {
        "type": "quote",
        "text": "L'interazione che si crea quando un coach porta periodicamente le proprie esperienze lavorative da un Coach Supervisore impegnandosi in un dialogo riflessivo e in un apprendimento collaborativo per ottenere sviluppo e benefici per il coach e per i suoi clienti."
      },
      {
        "type": "p",
        "text": "La pratica della Supervisione si sta diffondendo nel Coaching come in molte altre professioni. A tutto vantaggio del coach, dei suoi clienti e dell'integrità della professione."
      },
      {
        "type": "h2",
        "text": "Supervision ICF e Coaching: quali obiettivi raggiungere?"
      },
      {
        "type": "p",
        "text": "Abbiamo più volte parlato del valore che ha, per un coach professionista, essere costantemente impegnato nel proprio percorso di sviluppo personale e professionale. Utilizzare al meglio le proprie risorse, riflettere sulla propria pratica, ricevere feedback sul proprio lavoro, esplorare le aree personali che hanno un effetto nella professione, confrontarsi sui propri confini e sulle questioni etiche. Sono tanti gli obiettivi su cui un coach può lavorare attraverso la Supervisione."
      },
      {
        "type": "h2",
        "text": "Mentor Coaching vs. Supervisione (Coaching Supervision)"
      },
      {
        "type": "p",
        "text": "Attualmente ICF definisce il Mentor Coaching come \"coaching sullo sviluppo del coaching\", piuttosto che pratica riflessiva, coaching per lo sviluppo personale o del proprio business, anche se questi aspetti possono emergere nel corso del Mentor Coaching."
      },
      {
        "type": "p",
        "text": "Il Mentor Coaching si focalizza soprattutto sullo sviluppo delle competenze di coaching, in particolar modo nel contesto dello sviluppo iniziale."
      },
      {
        "type": "p",
        "text": "La Supervisione offre al coach opportunità più ampie e ricche di supporto e sviluppo. Nella Supervisione, il coach è invitato a focalizzarsi soprattutto su che cosa sta accadendo nel suo processo e in che misura i temi personali possono avere un effetto nella propria professione."
      },
      {
        "type": "p",
        "text": "Molti aspetti del Mentor Coaching possono essere inclusi nella Supervisione, che però può e deve includere molti più aspetti che un esperto Supervisore è capace di riconoscere e affrontare."
      },
      {
        "type": "h2",
        "text": "Il valore della Supervisione per il Coach"
      },
      {
        "type": "list",
        "items": [
          "Contesto personalizzato di crescita personale e professionale",
          "Contesto in cui portare questioni etiche",
          "Contesto in cui portare incertezze e vulnerabilità personali",
          "Contesto in cui portare temi legati ai confini personali",
          "Ridurre il rischio di questioni etiche riduce il rischio per il coach e per i suoi clienti",
          "Opportunità di cogliere la meta-visione e la visione più ampia dei propri clienti, competenze e pratica"
        ]
      }
    ]
  },
  {
    "slug": "coaching-e-consapevolezza",
    "title": "Coaching e consapevolezza",
    "excerpt": "In che modo coaching e consapevolezza sono legati? Attraverso la metafora dell'iceberg, un'esplorazione di come mindset e paure guidano i comportamenti individuali e organizzativi, e di come l'autoconsapevolezza libera il potenziale.",
    "category": "Coaching e leadership",
    "date": "24 maggio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "5 min",
    "img": "/blog/coaching-e-consapevolezza.png",
    "content": [
      {
        "type": "p",
        "text": "Coaching e consapevolezza: in che modo sono legati fra loro? Il coaching permette alle persone e alle organizzazioni di \"liberare il potenziale e sviluppare leadership consapevole attraverso auto consapevolezza e responsabilità personale\"."
      },
      {
        "type": "p",
        "text": "Ci sono tre sfide cruciali che ogni organizzazione in questi ultimi anni sta affrontando e non sempre si ha la consapevolezza che ognuna di queste sfide richiede una mentalità o delle qualità che sono scarsamente presenti nel mondo corporate oggi:"
      },
      {
        "type": "list",
        "items": [
          "Innovare, rimanere \"ahead of the game\": dare a se stessi e agli altri il permesso di fare errori e di apprendere da essi, rendere le persone empowered.",
          "Anticipare, governare il cambiamento: saper reinventare continuamente la propria organizzazione e il proprio business senza aspettare che circostanze esterne impongano il cambiamento.",
          "Resilienza o velocità nel rispondere all'inaspettato: calibrare il proprio sistema di navigazione interiore e ritrovare il proprio centro anche in situazioni ambigue, di crisi, di incertezza."
        ]
      },
      {
        "type": "p",
        "text": "Spesso le aziende (e i loro consulenti) creano delle iniziative per preparare le proprie organizzazioni ad affrontare queste sfide, a volte con grosso dispendio di mezzi, magari invitando speaker famosi ad ispirare le persone oppure facendo fare loro esperienze di giochi, costruzioni, metafore. L'intervento, però, è soltanto di facciata, cioè coinvolge le persone a livello cognitivo, emozionale e – forse – a livello comportamentale."
      },
      {
        "type": "p",
        "text": "Un vero cambiamento profondo nel modo in cui le persone e i leader vedono se stessi e rispondono ad eventi e circostanze non avviene e, finito l'entusiasmo per l'evento, tutto torna come prima. I comportamenti organizzativi sono guidati da driver non sempre visibili e se si opera solo sulla parte visibile, come normalmente accade nella maggior parte degli interventi di cambiamento, l'effetto sarà minimo e il cambiamento solo temporaneo."
      },
      {
        "type": "p",
        "text": "Utilizzo spesso la metafora dell'iceberg per descrivere la parte visibile e non visibile di una organizzazione. Al di sopra della linea dell'acqua troviamo a livello individuale i comportamenti delle singole persone, a livello organizzativo i sistemi e i rituali collettivi. Sotto la linea dell'acqua, invece, a livello individuale i mindset, che sono i driver dei comportamenti umani (emozioni, pensieri, valori, bisogni soddisfatti o meno e paure) e a livello organizzativo gli elementi della cultura. I mindset individuali delle persone in posizione di autorità e in particolare la legacy degli ex leader, crea valori e comportamenti che si riflettono nella cultura e nei comportamenti organizzativi."
      },
      {
        "type": "p",
        "text": "Normalmente i mindset sono generati dai nostri bisogni, siano stati soddisfatti o meno nella nostra infanzia."
      },
      {
        "type": "p",
        "text": "Per fare un esempio, il bisogno di espressione autonoma che ogni bambino ha quando viene al mondo, assieme ai bisogni di amore, sicurezza e varietà, nella mia esperienza personale non è stato soddisfatto appieno."
      },
      {
        "type": "p",
        "text": "La mia famiglia controllava ogni cosa facessi e raramente potevo sperimentare, se non nei confini che mia madre tratteggiava con precisione. Ciò a cui ho iniziato a dare valore, appena ho potuto permettermelo, è stata l'indipendenza, ed un mindset che ho sviluppato è \"Voglio sempre sentirmi libera di decidere\"."
      },
      {
        "type": "p",
        "text": "Questo mindset ha informato, anche inconsapevolmente, moltissime decisioni che ho preso nella vita e i miei comportamenti. Ancora oggi influisce sul modo in cui gestisco la mia società."
      },
      {
        "type": "p",
        "text": "Quando facciamo dei diagnostici culturali, i valori e comportamenti limitanti che appaiono più spesso sono: micro management, silos, burocrazia, controllo, mancanza di accountability, scaricabarile, sfiducia, individualismo, manipolazione, conformità, compiacenza."
      },
      {
        "type": "p",
        "text": "Dietro ad ognuno di questi valori e comportamenti si nascondono paure – conscie o inconscie – di non vedere i propri bisogni soddisfatti. Possiamo anche creare un parallelo tra i comportamenti limitanti, le paure e i primi tre livelli dei bisogni umani sottesi utilizzando il classico modello di Maslow."
      },
      {
        "type": "p",
        "text": "In periodi di estrema incertezza e confusione, come gli anni che stiamo vivendo, le paure di non vedere i propri bisogni soddisfatti prendono il sopravvento come driver dei comportamenti e delle decisioni che prendiamo, ed influenzano quindi anche il risultato in termini di comportamenti collettivi e cultura organizzativa. Queste paure, se non affrontate a livello profondo da ogni leader o manager, se non trasformate attraverso un processo di auto consapevolezza e responsabilità personale, sono le vere barriere al successo organizzativo."
      },
      {
        "type": "p",
        "text": "Per disinnescare il potere di influenza disfunzionale delle paure sui comportamenti di leader e manager e per permettere loro di espandere la propria coscienza e le proprie competenze, è necessario invitarli ad affrontare un viaggio di autoconsapevolezza, alla scoperta dei propri meccanismi e dell'origine delle proprie ideologie e mindset, per poi assumere piena responsabilità della realtà che ognuno di loro crea per se stesso – filtrata dalle proprie esperienze passate – per poi trasformarla. Affrontare le paure dei primi tre livelli dei bisogni umani permette un accesso alla autorealizzazione che porta con sé creatività, vitalità, autenticità, senso di significato."
      },
      {
        "type": "p",
        "text": "Questo è il viaggio che il coaching permette di fare alle persone e alle organizzazioni: liberare il potenziale e sviluppare leadership consapevole attraverso auto consapevolezza e responsabilità personale."
      }
    ]
  },
  {
    "slug": "presence-leadership",
    "title": "Il potere della Presenza nella leadership",
    "excerpt": "Cosa distingue i grandi leader? Una qualità che possiamo chiamare Presenza: l'essere pienamente qui e ora, e come coltivarla con intenzione e consapevolezza.",
    "category": "Leadership",
    "date": "20 maggio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "4 min",
    "img": "/blog/presence-leadership.png",
    "content": [
      {
        "type": "p",
        "text": "I grandi leader nascono o si possono formare? Cosa li distingue dagli altri? Nella mia esperienza è una qualità che chiamo Presenza. E credo che, con intenzione e attenzione, la Presenza possa essere sviluppata da chiunque lo desideri."
      },
      {
        "type": "h2",
        "text": "Cos'è la Presenza?"
      },
      {
        "type": "p",
        "text": "Per me la presenza è la qualità dell'essere totalmente qui, ora, nel momento, in connessione con le persone con cui stai parlando o lavorando; creare e insieme invitare gli altri in uno spazio di apertura, di non giudizio, di possibilità, di creazione, di apprendimento, di «non sapere», pronti a vedere ciò che vuole emergere — consapevoli che, quando crei questo spazio, il tutto è molto più della somma delle parti e si possono immaginare forme nuove."
      },
      {
        "type": "p",
        "text": "Queste nuove forme possono essere prodotti o servizi, sistemi o soluzioni, ma anche nuove convinzioni e modi di pensare o di comportarsi, o nuovi modi di relazionarsi e di fare impresa."
      },
      {
        "type": "p",
        "text": "Essendo presenti in questo modo, la propria «presenza» viene percepita come potente, magnetica, autentica, straordinaria e allo stesso tempo molto umana, affidabile e accessibile; senti la libertà di esprimerti pienamente e di essere al tempo stesso saldamente radicato e in contatto con qualcosa di «più alto» — e naturalmente questo ispira lo stesso negli altri."
      },
      {
        "type": "h2",
        "text": "Come coltivare la Presenza?"
      },
      {
        "type": "p",
        "text": "Credo che la vera presenza richieda l'accettazione di sé, con tutti i propri limiti: la scelta di lasciar andare vecchi ruoli e maschere ed essere pronti a mostrarsi pienamente, integrati e autentici, e insieme aperti e «vuoti», pronti a crearsi nel momento a partire da tutto ciò che si è, sapendo che è sufficiente. Scegliere di credere che, con il «non sapere» e aprendosi in questo modo, sia possibile molto più che avendo già tutte le risposte e riciclando vecchi schemi e vecchie conoscenze (l'esperienza e la saggezza sono importanti, ma di solito non sono lo strumento più potente per creare nuove possibilità)."
      },
      {
        "type": "p",
        "text": "La Presenza richiede la disponibilità a correre il rischio di apparire diversi, per coinvolgere il cuore delle persone oltre alla loro mente e liberare il pieno potenziale, tuo e loro. All'inizio sembra richiedere un salto di fiducia: quello di avere già tutto ciò che serve per rischiare di lasciar andare. Quando mi apro a questo, sento che qualcosa di più grande passa attraverso di me. «Salta e la rete apparirà»: può sentirsi davvero così, in fondo molto sicuro — ma bisogna provarci per scoprirlo."
      },
      {
        "type": "p",
        "text": "Le pratiche di meditazione accelerano molto il passaggio verso il vivere la Presenza come stato abituale; anche il lavoro sul corpo (yoga, t'ai chi, aikido) la sostiene. È irrealistico aspettarsi di essere presenti il 100% del tempo; eppure possiamo tutti accorgerci, di tanto in tanto, di non essere presenti — e in quel momento lo siamo di nuovo."
      },
      {
        "type": "h2",
        "text": "Cosa ostacola la Presenza?"
      },
      {
        "type": "p",
        "text": "Ostacoliamo la nostra vera presenza quando ci concentriamo su ciò che gli altri potrebbero pensare di noi, chiedendoci «Come sto andando?» proprio mentre agiamo. Qualsiasi forma di auto-centratura, la paura di cosa potrebbe accadere se…, le distrazioni, la mancanza di consapevolezza: tutto ci allontana da ciò che è, nel momento, e quindi dalla Presenza."
      },
      {
        "type": "p",
        "text": "Il mio lavoro come coach mi porta a credere che il desiderio comune di una vita migliore — che ci spinge a voler avere più successo, essere leader migliori, trovare un lavoro migliore, guadagnare di più — non possa mai essere pienamente appagato solo soddisfacendo quei desideri. Riflette un bisogno più profondo di qualcosa di più significativo. Vivere con Presenza ci porta un passo in questa direzione, ed è una forza potente per tirare fuori il meglio da noi stessi e dagli altri."
      },
      {
        "type": "p",
        "text": "Per chiudere, due inviti potenti alla Presenza nello sviluppo degli altri:"
      },
      {
        "type": "quote",
        "text": "«La presenza incondizionata è la forza trasformativa più potente.» — John Welwood"
      },
      {
        "type": "quote",
        "text": "«Il successo di ogni intervento dipende interamente dalla condizione interiore di chi interviene.» — Joseph Jaworski"
      }
    ]
  },
  {
    "slug": "sfide-adattive-cambiamento",
    "title": "Sfide adattive: pronti al cambiamento?",
    "excerpt": "Perché le organizzazioni falliscono quando affrontano con soluzioni tecniche sfide che sono in realtà adattive, e come i leader possono attraversare la trasformazione personale e collettiva necessaria.",
    "category": "Leadership",
    "date": "17 maggio 2025",
    "author": "Redazione Asterys Lab",
    "readTime": "5 min",
    "img": "/blog/sfide-adattive-cambiamento.jpg",
    "content": [
      {
        "type": "h2",
        "text": "I limiti dell'apprendimento del leader: affrontare le sfide adattive"
      },
      {
        "type": "p",
        "text": "Viene spesso richiesto il nostro supporto per il design di programmi di sviluppo di competenze o di high-performing team a seguito di indagini sulla soddisfazione dei dipendenti o altri tipi di diagnostici organizzativi. Quando l'azienda non è soddisfatta dei risultati e vuole impegnarsi a migliorare la sua performance, una delle soluzioni più comunemente adottate è il “fare di più”: offrire più training e programmi di formazione o creare più sistemi e processi."
      },
      {
        "type": "p",
        "text": "Quello che le organizzazioni spesso non riescono a discernere è la differenza tra le sfide “tecniche” e le sfide “adattive”. Come descrive il Professor Ronald Heifezt, della Harvard University, le sfide tecniche sono quelle il cui insieme di competenze e abilità necessarie per avere successo sono già esistenti, anche se non ancora note, e giacciono nello stesso paradigma e nella stessa mentalità presenti nel momento attuale. Le sfide adattive richiedono che le persone sviluppino tutta una nuova serie di mindset, nuovi valori e modi di fare business. Le sfide adattive hanno a che vedere con la trasformazione personale e collettiva, con la messa in discussione delle supposizioni che sottendono la cultura esistente e con la loro ricontestualizzazione. Il problema è che le aziende cercano soluzioni tecniche per affrontare sfide adattive, e questo non funziona mai."
      },
      {
        "type": "p",
        "text": "La pressione adattiva in biologia accade quando la risposta all'ambiente che ha esito positivo viene dal di fuori delle possibilità e delle capacità attuali dell'organismo. Questo significa che l'organismo deve osservare i suoi processi e discernere ciò che è ancora funzionante, ciò che deve essere abbandonato e cosa deve essere trasformato per avere successo in un ambiente che cambia. Questo è ciò che una organizzazione deve fare quando le condizioni ambientali cambiano o quando le strategie già testate non funzionano più."
      },
      {
        "type": "p",
        "text": "Le sfide adattive non possono essere affrontate con un approccio “more of the same” (più formazione, più sistemi, più riunioni, più pressione, ecc.). Ciò che serve ai leader per raggiungere il successo è intraprendere un percorso di auto-scoperta e di sviluppo che permetta loro di subire una trasformazione personale e collettiva e di essere a proprio agio con l'incertezza di esplorare nuovi territori."
      },
      {
        "type": "p",
        "text": "Nei nostri programmi di trasformazione supportiamo i manager a diventare leader pronti all'adattamento. Questo viaggio include tre passaggi:"
      },
      {
        "type": "list",
        "items": [
          "Osservazione: i leader devono guardare ciò che sta realmente accadendo nell'ambiente e tra i dipendenti, ciò che sta realmente accadendo nel sistema, quale cultura organizzativa si è sviluppata, il loro ruolo in questa cultura. Il Prof. Heifetz parla di “salire sul balcone” di una situazione e osservare da quel punto di vista superiore.",
          "Consapevolezza: i leader devono prendere coscienza di e familiarizzare con i processi personali e collettivi di costruzione del significato alla base dei risultati indesiderati, e con il modo in cui questi processi basati sulla paura e il bisogno di sopravvivenza di ogni essere umano tendono a reiterare vecchi schemi radicati e a sabotare il cambiamento desiderato.",
          "Mettere in discussione i propri mindset: i leader devono sviluppare la capacità di trasformare ciò che è soggetto ad essi (le loro emozioni, modelli basati sulla paura, l'ideologia, le strategie) in oggetto al fine di mettere in discussione il modo in cui formano il significato e l'interpretazione di ciò che succede dentro e fuori di essi. In altre parole, come il professore di Harvard e mio collega, Robert Kegan puntualizza, qualcosa di cui non siamo consapevoli oggi (perché immerso nel e identificato con il nostro mondo soggettivo) diventa successivamente a noi consapevole oggettivamente. E quando qualcosa è oggetto rispetto a noi possiamo osservarlo, considerarlo esterno alla nostra esperienza, assumerci la responsabilità per esso, e quindi trasformarlo, perché non siamo suoi prigionieri."
        ]
      },
      {
        "type": "h2",
        "text": "Generare nuove mentalità e comportamenti"
      },
      {
        "type": "p",
        "text": "Padroneggiare il processo appena descritto consente ai leader di liberarsi dai vecchi schemi mentali e dai modelli di percezione limitanti e creare lo spazio per un nuovo repertorio di comportamenti e competenze più evoluti ed efficaci per affrontare le sfide adattive."
      },
      {
        "type": "p",
        "text": "Oggi viviamo in un mondo caratterizzato da rapidi mutamenti, processi accelerati di scoperte scientifiche e tecnologiche e da un livello senza precedenti di competitività. Queste sono tutte sfide adattive e richiedono una maggiore capacità di innovazione, autogestione, responsabilità personale e auto-direzione."
      }
    ]
  }
];

export const blogPostsBySlug: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
);
