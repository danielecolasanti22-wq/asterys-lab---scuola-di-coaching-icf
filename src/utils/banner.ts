// Barra promo in cima al sito (Home + pagine corso). Sceglie DA SOLA il messaggio in base a
// date/edizioni REALI — nessun testo da aggiornare a mano: la fonte è woo.ts (deadlineISO delle
// offerte Early Bird + startISO delle edizioni). Cascata: Early Bird attivo → prossima edizione
// con iscrizioni aperte. Se un corso NON ha né EB né edizioni a calendario, la barra NON viene
// mostrata (niente messaggi generici inventati). Su pagina corso la cascata è ristretta a QUEL
// corso; sulla Home vale globalmente (promo più urgente in assoluto).
import { coursesContent } from '../constants/coursesContent';
import { EARLY_BIRD, WOO_PRODUCTS, parseItDateToISO, type WooEdition } from '../constants/woo';

/** Un pezzo del messaggio; `accent: true` = va evidenziato in blu chiaro (prezzo, data). */
export type BannerSegment = { t: string; accent?: boolean };

export type BannerContent = {
  kind: 'earlybird' | 'edition';
  eyebrow: string; // etichetta verde a sinistra (es. "Early Bird")
  segments: BannerSegment[]; // frase principale spezzata: le parti importanti hanno accent
  ctaLabel: string;
  href: string;
};

const IT_MONTHS = [
  'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
  'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',
];

function courseName(id: string): string {
  // Nome pulito per il banner: via l'eventuale sigla tra parentesi finale (es. "Continuous Learning (CL)").
  return (coursesContent[id]?.title ?? 'i nostri percorsi').replace(/\s*\([^)]*\)\s*$/, '');
}

/** "690€" → 690 (0 se assente/non numerico). */
function euro(label?: string): number {
  if (!label) return 0;
  return parseInt(label.replace(/[^\d]/g, ''), 10) || 0;
}

/** "2026-10-27" → "27 ottobre". */
function formatItDate(iso: string): string {
  const [, m, d] = iso.split('-').map(Number);
  return `${d} ${IT_MONTHS[(m ?? 1) - 1] ?? ''}`;
}

type EbAgg = { courseId: string; maxDiscount: number; deadlineISO: string; deadlineLabel: string };

/**
 * Early Bird ancora attivi (oggi ≤ scadenza), aggregati per corso: prendo il risparmio massimo tra
 * i livelli e la scadenza più vicina. Ordinati per scadenza crescente (il più urgente per primo).
 */
function activeEbByCourse(now: number): EbAgg[] {
  const byCourse: Record<string, EbAgg> = {};
  for (const [key, eb] of Object.entries(EARLY_BIRD)) {
    if (now > Date.parse(eb.deadlineISO)) continue; // scaduto → fuori dal banner in automatico
    const courseId = key.split(':')[0];
    const disc = euro(eb.discountLabel);
    const cur = byCourse[courseId];
    if (!cur) {
      byCourse[courseId] = { courseId, maxDiscount: disc, deadlineISO: eb.deadlineISO, deadlineLabel: eb.deadlineLabel };
    } else {
      if (disc > cur.maxDiscount) cur.maxDiscount = disc;
      if (Date.parse(eb.deadlineISO) < Date.parse(cur.deadlineISO)) {
        cur.deadlineISO = eb.deadlineISO;
        cur.deadlineLabel = eb.deadlineLabel;
      }
    }
  }
  return Object.values(byCourse).sort((a, b) => Date.parse(a.deadlineISO) - Date.parse(b.deadlineISO));
}

/** Prossima edizione futura di un corso (tra tutti i suoi livelli); null se non ha edizioni a calendario. */
function nextEditionForCourse(courseId: string, now: number): WooEdition | null {
  const byKey = WOO_PRODUCTS[courseId];
  if (!byKey) return null;
  const today = new Date(now).toISOString().slice(0, 10);
  let best: WooEdition | null = null;
  for (const prod of Object.values(byKey)) {
    for (const ed of prod.editions) {
      if (ed.startISO < today) continue;
      if (!best || ed.startISO < best.startISO) best = ed;
    }
  }
  return best;
}

function ebBanner(eb: EbAgg): BannerContent {
  return {
    kind: 'earlybird',
    eyebrow: 'Early Bird',
    segments: [
      { t: 'Risparmi ' },
      { t: `${eb.maxDiscount}€`, accent: true },
      { t: ` sul ${courseName(eb.courseId)} iscrivendoti entro il ` },
      { t: formatItDate(eb.deadlineISO.slice(0, 10)), accent: true },
    ],
    ctaLabel: 'Vedi i prezzi',
    href: `/corsi/${eb.courseId}#prezzo`,
  };
}

/** Corsi "a coorte" (una partenza, con termine iscrizioni). Gli altri con classDates = ingresso continuo. */
const COHORT_COURSES = new Set(['marketing-per-coach']);
/** Le iscrizioni chiudono ~2 settimane prima dell'inizio. */
const ENROLL_LEAD_DAYS = 14;

function minusDaysISO(iso: string, days: number): string {
  // Tutto in UTC per evitare slittamenti di un giorno dovuti al fuso (es. 26 ott → 25 ott).
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() - days);
  return d.toISOString().slice(0, 10);
}

/**
 * Barra ricavata dalle classDates, per i corsi senza edizioni Woo a calendario:
 * - corso a coorte (es. Personal Branding): "si parte il <inizio> — iscriviti entro il <inizio − 2 sett.>";
 *   niente barra una volta che la coorte è partita, e il termine iscrizioni sparisce se già passato.
 * - corso a ingresso continuo (es. Continuous Learning): "prossimo incontro il <prossima data>".
 * null se non ci sono date utili.
 */
function classDateBannerFor(courseId: string, now: number): BannerContent | null {
  const cds = coursesContent[courseId]?.classDates;
  if (!cds?.length) return null;
  const today = new Date(now).toISOString().slice(0, 10);
  const isos = cds
    .map((cd) => parseItDateToISO(cd.date))
    .filter((x): x is string => !!x)
    .sort();
  if (!isos.length) return null;

  const base = { kind: 'edition' as const, eyebrow: 'Iscrizioni aperte', ctaLabel: 'Vedi il calendario', href: `/corsi/${courseId}#prossime-date` };

  if (COHORT_COURSES.has(courseId)) {
    const start = isos[0];
    if (start < today) return null; // coorte già iniziata → nessuna barra
    const enroll = minusDaysISO(start, ENROLL_LEAD_DAYS);
    const segments: BannerSegment[] = [
      { t: `${courseName(courseId)}: si parte il ` },
      { t: formatItDate(start), accent: true },
    ];
    if (enroll >= today) {
      segments.push({ t: ' — iscriviti entro il ' }, { t: formatItDate(enroll), accent: true });
    }
    return { ...base, segments };
  }

  const next = isos.find((iso) => iso >= today);
  if (!next) return null;
  return {
    ...base,
    segments: [
      { t: `${courseName(courseId)}: prossimo incontro il ` },
      { t: formatItDate(next), accent: true },
    ],
  };
}

function editionBanner(courseId: string, ed: WooEdition): BannerContent {
  return {
    kind: 'edition',
    eyebrow: 'Iscrizioni aperte',
    segments: [
      { t: `${courseName(courseId)}: nuova edizione dal ` },
      { t: formatItDate(ed.startISO), accent: true },
      ...(ed.city ? [{ t: ` a ${ed.city}` }] : []),
    ],
    ctaLabel: 'Vedi le date',
    href: `/corsi/${courseId}#calendario-edizioni`,
  };
}

/**
 * Cascata su un singolo corso: EB del corso → prossima edizione del corso.
 * Nessun fallback generico: se il corso non ha EB né edizioni a calendario → null (niente barra).
 */
function bannerForCourse(courseId: string, now: number): BannerContent | null {
  const eb = activeEbByCourse(now).find((e) => e.courseId === courseId);
  if (eb) return ebBanner(eb);
  const ed = nextEditionForCourse(courseId, now);
  if (ed) return editionBanner(courseId, ed);
  return classDateBannerFor(courseId, now);
}

/**
 * Cascata globale: EB più urgente in assoluto → edizione più imminente in assoluto.
 * Se non c'è nessun EB attivo né edizione futura → null (niente barra).
 */
function globalBanner(now: number): BannerContent | null {
  const ebs = activeEbByCourse(now);
  if (ebs.length) return ebBanner(ebs[0]);
  let bestId: string | null = null;
  let bestEd: WooEdition | null = null;
  for (const cid of Object.keys(WOO_PRODUCTS)) {
    const ed = nextEditionForCourse(cid, now);
    if (ed && (!bestEd || ed.startISO < bestEd.startISO)) {
      bestEd = ed;
      bestId = cid;
    }
  }
  return bestId && bestEd ? editionBanner(bestId, bestEd) : null;
}

/**
 * Contenuto della barra per il pathname corrente, o null se non va mostrata.
 * - `/corsi/:id` → cascata contestuale su quel corso.
 * - `/` (Home) → cascata globale.
 * - qualsiasi altra pagina → null.
 */
export function getBanner(pathname: string, now: number = Date.now()): BannerContent | null {
  const m = pathname.match(/^\/corsi\/([^/]+)$/);
  if (m && coursesContent[m[1]]) return bannerForCourse(m[1], now);
  if (pathname === '/') return globalBanner(now);
  return null;
}

/** True se sulla pagina corrente la barra viene effettivamente mostrata (per allineare gli offset). */
export function hasBanner(pathname: string, now: number = Date.now()): boolean {
  return getBanner(pathname, now) !== null;
}
