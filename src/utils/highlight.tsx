import { Fragment, ReactNode } from 'react';

/** Classe di evidenziazione condivisa: gradiente blu vivo (vedi .text-hl in index.css). */
export const HL_CLASS = 'text-hl font-semibold';

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
 * Dizionario curato di parole/locuzioni chiave del settore coaching.
 * Ordine: dalle locuzioni più lunghe/specifiche alle più corte, così la regex
 * (alternanza leftmost di JS) cattura "team coaching sistemico" prima di
 * "team coaching" prima di "coaching".
 */
const KEYWORDS = [
  'Master in Coaching Professionale',
  'coach professionista',
  'team coaching sistemico',
  'team coaching',
  'business coaching',
  'executive coaching',
  'coaching aziendale',
  'scuola di coaching',
  'intelligenza emotiva',
  'credenziali internazionali',
  'credenziali ICF',
  'credenziale ICF',
  'coaching professionale',
  'mentor coaching',
  'public speaking',
  'voice dialogue',
  'continuous learning',
  'pratica supervisionata',
  'approccio sistemico',
  'ascolto attivo',
  'domande potenti',
  'lezioni in diretta',
  'crescita professionale',
  'rinnovo della credenziale',
  'coaching',
  'coach',
  'mentoring',
  'leadership',
  'community',
  'feedback',
  'credenziale',
  'ICF',
  'ACC',
  'PCC',
  'MCC',
  'ACTC',
  'CCE',
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
 */
export function autoHighlight(text: string, seen: Set<string>): ReactNode {
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
    out.push(
      <strong key={key++} className={HL_CLASS}>
        {word}
      </strong>,
    );
    rest = rest.slice(matchStart + word.length);
  }
  if (rest) out.push(<Fragment key={key++}>{rest}</Fragment>);
  return out;
}
