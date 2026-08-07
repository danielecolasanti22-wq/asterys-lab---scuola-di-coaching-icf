import { Fragment, ReactNode } from 'react';
import { Link } from 'react-router-dom';

/** Classe di evidenziazione condivisa: gradiente blu vivo (vedi .text-hl in index.css). */
export const HL_CLASS = 'text-hl font-semibold';

/**
 * Termini che corrispondono a un percorso reale e possono diventare un link.
 * Solo concetti che sono davvero un corso: "credenziali ICF" o "ascolto attivo" restano
 * evidenziati e basta, perché non c'è una pagina che risponda a quella parola.
 */
const LINK_PER_TERMINE: Record<string, string> = {
  'master in coaching': '/corsi/apcm',
  'scuola di coaching': '/corsi/apcm',
  'formazione accreditata': '/corsi/apcm',
  'formazione in coaching': '/corsi/apcm',
  'percorso di coaching': '/corsi/apcm',
  'diventare coach': '/corsi/apcm',
  'coach professionista': '/corsi/apcm',
  'pratica supervisionata': '/corsi/apcm',
  'domande potenti': '/corsi/apcm',
  'team coaching sistemico': '/corsi/systemic-team-coaching',
  'team coaching': '/corsi/systemic-team-coaching',
  'pensiero sistemico': '/corsi/systemic-team-coaching',
  'approccio sistemico': '/corsi/systemic-team-coaching',
  'intelligenza emotiva': '/corsi/eiw',
  'mentor coaching': '/corsi/coaching-circle',
  'mentor coach': '/corsi/coaching-circle',
  'rinnovo della credenziale': '/corsi/coaching-circle',
  'credenziali icf': '/corsi/coaching-circle',
  'credenziale icf': '/corsi/coaching-circle',
  'personal branding': '/corsi/marketing-per-coach',
  'trovare clienti': '/corsi/marketing-per-coach',
  'coaching individuale': '/personal-coaching',
  'voice dialogue': '/corsi/voice-dialogue',
  'public speaking': '/corsi/public-speaking',
  'continuous learning': '/corsi/continuous-learning',
};

/**
 * Stato dei link di un singolo articolo. Va creato una volta per articolo e passato a
 * tutte le chiamate di autoHighlight: serve a non superare il tetto di link, a non
 * ripetere due volte lo stesso percorso e a garantire spazio a quello più pertinente.
 */
export type LinkBudget = { restanti: number; usati: Set<string>; principale?: string };

/**
 * Un articolo non deve sembrare un catalogo: pochi link, e solo dove cadono naturali.
 *
 * `principale` è il percorso più pertinente all'argomento dell'articolo (vedi
 * PERCORSO_PER_CATEGORIA). Gli si tiene da parte un posto, altrimenti in un pezzo su come
 * diventare coach il budget si esaurirebbe su termini citati di sfuggita e il Master —
 * cioè la risposta alla domanda dell'articolo — resterebbe fuori.
 */
export const createLinkBudget = (principale?: string, max = 3): LinkBudget => ({
  restanti: max,
  usati: new Set(),
  principale,
});

/** Percorso più pertinente per argomento, usato come link "principale" dell'articolo. */
export const PERCORSO_PER_CATEGORIA: Record<string, string> = {
  'Diventare coach': '/corsi/apcm',
  'Metodo e pratica': '/corsi/apcm',
  'Credenziali ICF': '/corsi/coaching-circle',
  'Professione coach': '/corsi/marketing-per-coach',
  'Intelligenza emotiva': '/corsi/eiw',
  'Crescita personale': '/personal-coaching',
  Leadership: '/corsi/systemic-team-coaching',
  'Team coaching': '/corsi/systemic-team-coaching',
};

/** Percorso da linkare per un termine, se disponibile e non già usato in questo articolo. */
function destinazione(termine: string, budget?: LinkBudget): string | null {
  if (!budget || budget.restanti <= 0) return null;
  const path = LINK_PER_TERMINE[termine];
  if (!path || budget.usati.has(path)) return null;

  // L'ultimo posto disponibile resta al percorso principale finché non è stato usato.
  const principaleInAttesa = budget.principale && !budget.usati.has(budget.principale);
  if (principaleInAttesa && path !== budget.principale && budget.restanti <= 1) return null;

  return path;
}

/**
 * Parser dei marcatori manuali `**parola**` → span evidenziato.
 * Usato dove l'autore sceglie a mano cosa evidenziare.
 */
export function richText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return (
        <strong key={i} className={HL_CLASS}>
          {m[1]}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

/**
 * Dizionario curato: SOLO concetti distintivi (locuzioni), non parole singole
 * ubique come "coach"/"coaching"/"ICF" — quelle si ripeterebbero ovunque.
 * Ordine: dai concetti più lunghi/specifici ai più corti, così l'alternanza
 * leftmost di JS cattura "team coaching sistemico" prima di "team coaching".
 */
const KEYWORDS = [
  'Master in Coaching',
  'team coaching sistemico',
  'formazione in coaching',
  'formazione accreditata',
  'percorso di coaching',
  'coaching individuale',
  'pensiero sistemico',
  'personal branding',
  'trovare clienti',
  'diventare coach',
  'coach professionista',
  'business coaching',
  'executive coaching',
  'coaching aziendale',
  'scuola di coaching',
  'intelligenza emotiva',
  'credenziali internazionali',
  'credenziali ICF',
  'credenziale ICF',
  'rinnovo della credenziale',
  'coaching professionale',
  'mentor coaching',
  'mentor coach',
  'pratica supervisionata',
  'approccio sistemico',
  'ascolto attivo',
  'domande potenti',
  'lezioni in diretta',
  'crescita professionale',
  'public speaking',
  'voice dialogue',
  'continuous learning',
  'team coaching',
];

const ESCAPED = KEYWORDS.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
// \b non funziona bene con accenti/apostrofi: uso confini "non-lettera" manuali.
const KEY_RE = new RegExp(`(^|[^\\p{L}])(${ESCAPED.join('|')})(?=$|[^\\p{L}])`, 'iu');

/**
 * Evidenziazione automatica curata: avvolge la PRIMA occorrenza di ogni parola
 * chiave non ancora vista (set `seen`, condiviso e mutato dal chiamante) in uno
 * span `text-hl`. Pensata per i testi lunghi (articoli del blog) dove marcare a
 * mano sarebbe ingestibile. Passa un nuovo `seen` per resettare (es. a ogni H2)
 * così l'evidenziazione si distribuisce per sezione senza diventare eccessiva.
 *
 * Passando un `budget` (vedi createLinkBudget) i termini che corrispondono a un corso
 * diventano anche link. Serve a dare una risposta a chi, leggendo "serve una formazione
 * accreditata", si sta chiedendo quale: il testo dell'articolo non cambia, cambia solo
 * che una parola già evidenziata diventa cliccabile. Il budget tiene il numero basso e
 * impedisce di linkare due volte lo stesso corso, così l'articolo resta un articolo.
 */
export function autoHighlight(
  text: string,
  seen: Set<string>,
  budget?: LinkBudget,
): ReactNode {
  const out: ReactNode[] = [];
  let rest = text;
  let key = 0;
  // Iterazione manuale: trovo il primo match "nuovo", evidenzio, continuo sul resto.
  // (max ~200 iterazioni per blocco, di fatto limitato dalle keyword del dizionario)
  for (let guard = 0; guard < 500; guard++) {
    const m = KEY_RE.exec(rest);
    if (!m) break;
    const lead = m[1];
    const word = m[2];
    const lower = word.toLowerCase();
    const start = m.index;
    const matchStart = start + lead.length;
    if (seen.has(lower)) {
      // già evidenziata: emetto fino a dopo la parola e proseguo
      out.push(<Fragment key={key++}>{rest.slice(0, matchStart + word.length)}</Fragment>);
      rest = rest.slice(matchStart + word.length);
      continue;
    }
    seen.add(lower);
    if (matchStart > 0) out.push(<Fragment key={key++}>{rest.slice(0, matchStart)}</Fragment>);

    const path = destinazione(lower, budget);
    if (path && budget) {
      budget.restanti--;
      budget.usati.add(path);
      out.push(
        <Link
          key={key++}
          to={path}
          className={`${HL_CLASS} underline decoration-brand-accent/40 underline-offset-4 hover:decoration-brand-accent`}
        >
          {word}
        </Link>,
      );
    } else {
      out.push(
        <strong key={key++} className={HL_CLASS}>
          {word}
        </strong>,
      );
    }
    rest = rest.slice(matchStart + word.length);
  }
  if (rest) out.push(<Fragment key={key++}>{rest}</Fragment>);
  return out;
}
