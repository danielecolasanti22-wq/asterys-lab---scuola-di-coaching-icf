// Integrazione WooCommerce (sito vecchio asteryslab.com/inner) — fonte di verità
// di prezzi/checkout. La vetrina rispecchia e ci linka. Vedi memoria "commerce-architecture".
//
// ID prodotti/variazioni letti via Store API pubblica (wc/store/v1/products) e verificati:
// `…/inner/checkout/?add-to-cart=<variationId>&quantity=1` mette in carrello la variazione giusta.
// NOTE:
//  - Oggi l'add-to-cart redirige al CARRELLO (impostazione Woo "redirect to cart"); per andare
//    dritti al checkout va disattivata quella opzione o aggiunto un redirect lato Woo.
//  - `coupon-code` viene applicato solo con snippet/plugin lato Woo (Early Bird via codice).
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
  city: 'Roma' | 'Milano';
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

/** Prodotto Woo per (corso, livello). Per ora solo APCM è mappato. */
export function getWooProduct(
  courseId: string | undefined,
  wooKey: string | undefined,
): WooProductMap | null {
  if (courseId === 'apcm' && wooKey && wooKey in APCM_WOO) {
    return APCM_WOO[wooKey as keyof typeof APCM_WOO];
  }
  return null;
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
    (e) => e.city.toLowerCase() === citySlug.toLowerCase() && e.startISO === startISO,
  );
  return ed?.variationId;
}
