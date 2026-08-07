import type { SedeInfo } from '../pages/SedePage';

/**
 * Le due sedi in aula. Alimentano le pagine /scuola-di-coaching-milano e
 * /scuola-di-coaching-roma, pensate per chi cerca un corso nella propria città.
 *
 * `cityMatch` deve corrispondere al campo `city` delle edizioni in coursesContent:
 * è ciò che permette alla pagina di elencare da sola i percorsi in aula lì.
 */
export const SEDI: Record<string, SedeInfo> = {
  milano: {
    citta: 'Milano',
    cityMatch: 'Milano',
    indirizzo: 'Via Conservatorio 22',
    cap: '20122',
    zona: 'Zona Duomo / San Babila — metro M1 San Babila, M4 Sforza-Policlinico',
    intro:
      'Il percorso per diventare coach professionista con accreditamento ICF, in aula nel centro di Milano: lezioni in diretta, pratica supervisionata con trainer MCC e PCC, e una community di oltre 3.000 alumni.',
    comeArrivare:
      'La sede è in via Conservatorio 22, a pochi minuti a piedi da San Babila e dal Duomo. È raggiungibile con la metro M1 (San Babila) e M4 (Sforza-Policlinico), oltre che con i tram e i bus della zona: comoda anche per chi arriva da fuori città con il treno, vista la vicinanza alle stazioni centrali.',
  },
  roma: {
    citta: 'Roma',
    cityMatch: 'Roma',
    indirizzo: 'Via del Porto Fluviale 35',
    cap: '00154',
    zona: 'Ostiense — metro B Piramide, stazione Roma Ostiense',
    intro:
      'Il percorso per diventare coach professionista con accreditamento ICF, in aula a Roma: lezioni in diretta, pratica supervisionata con trainer MCC e PCC, e una community di oltre 3.000 alumni.',
    comeArrivare:
      'La sede è in via del Porto Fluviale 35, nel quartiere Ostiense. È servita dalla metro B (fermata Piramide) e dalla stazione Roma Ostiense, quindi è comoda sia per chi si muove in città sia per chi arriva da fuori Roma in treno.',
  },
};
