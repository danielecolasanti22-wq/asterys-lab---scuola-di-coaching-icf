// Integrazione WooCommerce (sito vecchio asteryslab.com/inner) — fonte di verità
// di prezzi/checkout. La vetrina rispecchia e ci linka. Vedi memoria "commerce-architecture".
//
// ID prodotti/variazioni letti via Store API pubblica (wc/store/v1/products) e verificati:
// `…/inner/checkout/?add-to-cart=<variationId>&quantity=1` mette in carrello la variazione giusta.
// NOTE:
//  - Oggi l'add-to-cart redirige al CARRELLO (impostazione Woo "redirect to cart"); per andare
//    dritti al checkout va disattivata quella opzione o aggiunto un redirect lato Woo.
//  - Early Bird: nessun coupon: lo sconto è un "prezzo in offerta" programmato sulla variazione,
//    quindi il carrello lo applica da solo. La vetrina mostra solo un disclaimer (vedi APCM_EARLY_BIRD).
//  - Rate: gateway Sequra (fino a 24 mesi).

export const WOO = {
  base: 'https://asteryslab.com/inner',
  cart: 'https://asteryslab.com/inner/carrello/',
  checkout: 'https://asteryslab.com/inner/checkout/',
};

/** Costruisce il link "aggiungi variazione al carrello e vai al checkout". */
export function wooAddToCartUrl(
  variationId: number,
  opts: { quantity?: number; coupon?: string } = {},
): string {
  const params = new URLSearchParams({
    'add-to-cart': String(variationId),
    quantity: String(opts.quantity ?? 1),
  });
  if (opts.coupon) params.set('coupon-code', opts.coupon); // richiede snippet/plugin lato Woo
  return `${WOO.checkout}?${params.toString()}`;
}

export type WooEdition = {
  city?: 'Roma' | 'Milano'; // assente per opzioni senza città (es. ASTC 1° livello online, round EIW)
  label: string;
  startISO: string;
  variationId: number;
};
export type WooProductMap = { productId: number; sku: string; editions: WooEdition[] };

/** APCM: livello → prodotto Woo + variazioni per edizione (ID verificati via Store API). */
export const APCM_WOO: Record<'l1' | 'l2' | 'completo', WooProductMap> = {
  l1: {
    productId: 79769,
    sku: 'APCM1-1-1',
    editions: [
      { city: 'Roma', label: 'Ed.2 — 12 maggio 2026', startISO: '2026-05-12', variationId: 79851 },
      { city: 'Roma', label: 'Ed.3 — 27 ottobre 2026', startISO: '2026-10-27', variationId: 79852 },
      { city: 'Milano', label: 'Ed.2 — 12 maggio 2026', startISO: '2026-05-12', variationId: 79790 },
      { city: 'Milano', label: 'Ed.3 — 27 ottobre 2026', startISO: '2026-10-27', variationId: 79791 },
    ],
  },
  l2: {
    productId: 79792,
    sku: 'APCM2-1-1',
    editions: [
      { city: 'Milano', label: '21 aprile 2026', startISO: '2026-04-21', variationId: 79815 },
      { city: 'Roma', label: '17 settembre 2026', startISO: '2026-09-17', variationId: 79853 },
      { city: 'Roma', label: '10 marzo 2027', startISO: '2027-03-10', variationId: 79854 },
      { city: 'Milano', label: '10 marzo 2027', startISO: '2027-03-10', variationId: 79816 },
    ],
  },
  completo: {
    productId: 79817,
    sku: 'APCM2-3',
    editions: [
      { city: 'Roma', label: 'Ed.2 — 12 maggio 2026', startISO: '2026-05-12', variationId: 79856 },
      { city: 'Roma', label: 'Ed.3 — 27 ottobre 2026', startISO: '2026-10-27', variationId: 79857 },
      { city: 'Milano', label: 'Ed.2 — 12 maggio 2026', startISO: '2026-05-12', variationId: 79848 },
      { city: 'Milano', label: 'Ed.3 — 27 ottobre 2026', startISO: '2026-10-27', variationId: 79849 },
    ],
  },
};

/**
 * Altri corsi → prodotto Woo (ID verificati via Store API).
 * `single: true` = prodotto semplice → link diretto `?add-to-cart=<productId>`.
 * I variabili hanno bisogno della mappatura variazioni (come APCM) prima di collegarli.
 */
export const COURSE_WOO: Record<
  string,
  { productId: number; sku?: string; single?: boolean; draft?: boolean; note?: string }
> = {
  'voice-dialogue': { productId: 77327, sku: 'VDS-24-1', single: true },
  'coaching-circle': { productId: 56604, sku: 'CCircle-2', single: true, draft: true }, // in modifica → non collegare
  'continuous-learning': { productId: 55762, sku: 'CL', single: true },
  // Variabili — mappatura variazioni da rifinire:
  'systemic-team-coaching': {
    productId: 56029,
    sku: 'ASTC',
    note: 'matrice Ed.1°/Ed.2°(Rm/Mi)/Esame: 1°+2° Rm #79434 / Mi #79436, solo 1° #79433, solo 2° Rm #79379 / Mi #79381',
  },
  eiw: { productId: 55749, sku: 'EIW20', note: 'per Round: #79602 mag, #79603 set, #79604 nov 2026' },
  'public-speaking': { productId: 78354, draft: true, note: 'variabile; nessuna edizione attiva → non collegare' },
};

/** ID prodotto Woo per i corsi a prodotto SEMPLICE → link diretto `?add-to-cart=<id>`.
 *  Esclude i `draft` (in lavorazione) e i variabili (che usano la mappatura variazioni). */
export function getWooSimpleProductId(courseId: string | undefined): number | null {
  if (!courseId) return null;
  const c = COURSE_WOO[courseId];
  return c && c.single && !c.draft ? c.productId : null;
}

/**
 * ASTC (Team Coaching): prodotto variabile unico (56029) con attributi 1° ed. × 2° ed. × exam.
 * Qui mappo solo le variazioni "pulite" (senza exam) dell'edizione in corso (1° Ott 2026 / 2° Gen 2027):
 *  - completo (1°+2°): per città del 2° livello (Roma #79434 / Milano #79436)
 *  - l1 (solo 1°, online): #79433 (senza città)
 *  - l2 (solo 2°, in aula): Roma #79379 / Milano #79381
 * NB: exam e sconto quantità si gestiscono nel carrello (il link aggiunge la variazione base, qtà 1).
 */
export const ASTC_WOO: Record<'completo' | 'l1' | 'l2', WooProductMap> = {
  completo: {
    productId: 56029,
    sku: 'ASTC',
    editions: [
      { city: 'Roma', label: 'Ott 2026 – Feb 2027', startISO: '2026-10-01', variationId: 79434 },
      { city: 'Milano', label: 'Ott 2026 – Feb 2027', startISO: '2026-10-01', variationId: 79436 },
    ],
  },
  l1: {
    productId: 56029,
    sku: 'ASTC',
    editions: [{ label: 'Ottobre 2026 · online', startISO: '2026-10-01', variationId: 79433 }],
  },
  l2: {
    productId: 56029,
    sku: 'ASTC',
    editions: [
      { city: 'Roma', label: 'Gennaio 2027', startISO: '2027-01-01', variationId: 79379 },
      { city: 'Milano', label: 'Gennaio 2027', startISO: '2027-01-01', variationId: 79381 },
    ],
  },
};

/**
 * EIW (Emotional Intelligence Workout): prodotto variabile (55749) per Round, sconto quantità.
 * Tab unico; il menù sceglie il round. Date a livello di mese (da confermare il giorno esatto).
 */
export const EIW_WOO: Record<'round', WooProductMap> = {
  round: {
    productId: 55749,
    sku: 'EIW20',
    editions: [
      { label: 'Maggio–Giugno 2026', startISO: '2026-05-01', variationId: 79602 },
      { label: 'Settembre–Ottobre 2026', startISO: '2026-09-01', variationId: 79603 },
      { label: 'Novembre–Dicembre 2026', startISO: '2026-11-01', variationId: 79604 },
    ],
  },
};

export type WooEarlyBird = { discountLabel?: string; deadlineISO: string; deadlineLabel: string };

/**
 * Early Bird APCM per livello — modello "prezzo in offerta sulla variazione" (NON coupon):
 * ogni variazione (edizione) su Woo ha un prezzo scontato con data di fine programmata, quindi il
 * carrello applica lo sconto DA SOLO durante la finestra. Niente codice promozionale, niente snippet.
 *
 * Questi dati servono SOLO alla vetrina per mostrare il disclaimer "Early Bird già applicato" e la
 * scadenza corretta per livello. La fonte di verità di sconto e data resta su Woo (sulla variazione):
 * aggiorna QUI la data solo quando rinnovi la finestra EB di un'edizione, per tenerla allineata.
 *
 * - l1 + completo → 3ª ed. (partenza ottobre) — EB entro 27/08/2026
 * - l2            → ed. Roma (partenza settembre) — EB entro 17/07/2026
 */
export const APCM_EARLY_BIRD: Record<'l1' | 'l2' | 'completo', WooEarlyBird> = {
  // discountLabel = cifra risparmiata (10% del prezzo): L1 340 · L2 450 · Completo 690.
  l1: { discountLabel: '340€', deadlineISO: '2026-08-27T23:59:59+02:00', deadlineLabel: '27/08/2026' },
  completo: { discountLabel: '690€', deadlineISO: '2026-08-27T23:59:59+02:00', deadlineLabel: '27/08/2026' },
  l2: { discountLabel: '450€', deadlineISO: '2026-07-17T23:59:59+02:00', deadlineLabel: '17/07/2026' },
};

/**
 * Early Bird per corso. Chiave `courseId:wooKey` per il per-livello (es. APCM), oppure `courseId`
 * per il corso intero (prodotti senza livelli). null = nessun EB per quell'opzione.
 * NB: l'EB NON si applica a Continuous Learning, Coaching Circle ed EIW.
 */
const EARLY_BIRD: Record<string, WooEarlyBird> = {
  'apcm:l1': APCM_EARLY_BIRD.l1,
  'apcm:l2': APCM_EARLY_BIRD.l2,
  'apcm:completo': APCM_EARLY_BIRD.completo,
  // Voice Dialogue: prodotto semplice, EB a livello di corso (10% di 1.750 = 175€, fino al 31/10/2026).
  'voice-dialogue': { discountLabel: '175€', deadlineISO: '2026-10-31T23:59:59+01:00', deadlineLabel: '31/10/2026' },
  // ASTC: 6% (da footnote prezzi) → Completo 174 · 1° 72 · 2° 126. 1°/Completo 19/08; 2° 21/11/2026.
  'systemic-team-coaching:completo': { discountLabel: '174€', deadlineISO: '2026-08-19T23:59:59+02:00', deadlineLabel: '19/08/2026' },
  'systemic-team-coaching:l1': { discountLabel: '72€', deadlineISO: '2026-08-19T23:59:59+02:00', deadlineLabel: '19/08/2026' },
  'systemic-team-coaching:l2': { discountLabel: '126€', deadlineISO: '2026-11-21T23:59:59+01:00', deadlineLabel: '21/11/2026' },
};

export function getEarlyBird(
  courseId: string | undefined,
  wooKey: string | undefined,
): WooEarlyBird | null {
  if (!courseId) return null;
  if (wooKey && EARLY_BIRD[`${courseId}:${wooKey}`]) return EARLY_BIRD[`${courseId}:${wooKey}`];
  return EARLY_BIRD[courseId] ?? null;
}

/** Registro dei prodotti variabili mappati per corso → (wooKey → prodotto/variazioni). */
const WOO_PRODUCTS: Record<string, Record<string, WooProductMap>> = {
  apcm: APCM_WOO,
  'systemic-team-coaching': ASTC_WOO,
  eiw: EIW_WOO,
};

/** Prodotto Woo per (corso, wooKey). Solo i corsi a prodotto VARIABILE mappati qui. */
export function getWooProduct(
  courseId: string | undefined,
  wooKey: string | undefined,
): WooProductMap | null {
  if (!courseId || !wooKey) return null;
  const byKey = WOO_PRODUCTS[courseId];
  return byKey && wooKey in byKey ? byKey[wooKey] : null;
}

/** Edizioni future (data ≥ oggi) ordinate per data; se nessuna è futura, le restituisce tutte ordinate. */
export function upcomingEditions(editions: WooEdition[]): WooEdition[] {
  const today = new Date().toISOString().slice(0, 10);
  const sorted = [...editions].sort((a, b) => a.startISO.localeCompare(b.startISO));
  const future = sorted.filter((e) => e.startISO >= today);
  return future.length ? future : sorted;
}

const IT_MONTHS: Record<string, number> = {
  gennaio: 1, febbraio: 2, marzo: 3, aprile: 4, maggio: 5, giugno: 6,
  luglio: 7, agosto: 8, settembre: 9, ottobre: 10, novembre: 11, dicembre: 12,
};

/** Data italiana → ISO. Es. "12 maggio 2026" o "19, 20, 21 marzo 2026" → "2026-05-12" / "2026-03-19". */
export function parseItDateToISO(s: string): string | null {
  const m = s.toLowerCase().match(/(\d{1,2})(?:\s*,\s*\d{1,2})*\s+([a-zàèéìòù]+)\s+(\d{4})/);
  if (!m) return null;
  const mon = IT_MONTHS[m[2]];
  if (!mon) return null;
  return `${m[3]}-${String(mon).padStart(2, '0')}-${String(Number(m[1])).padStart(2, '0')}`;
}

/** Variazione della città (citySlug roma/milano) che inizia in quella data ISO; undefined se nessun match. */
export function findWooVariationByStart(
  product: WooProductMap,
  citySlug: string,
  startISO: string | null,
): number | undefined {
  if (!startISO) return undefined;
  const ed = product.editions.find(
    (e) => e.city?.toLowerCase() === citySlug.toLowerCase() && e.startISO === startISO,
  );
  return ed?.variationId;
}
