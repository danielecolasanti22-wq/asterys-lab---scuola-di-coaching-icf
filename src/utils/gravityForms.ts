// Motore Gravity Forms dietro i form React (estetica React invariata).
// Usa l'endpoint pubblico /submissions: esegue validazione, notifiche, entry e
// add-on come l'invio dal front-end. NESSUNA chiave API nel client.
//
// Base URL: relativa a /inner/wp-json (WP installato sotto /inner/ su asteryslab.com).
// - In produzione la vetrina è su asteryslab.com → stesso dominio → nessun CORS.
// - In sviluppo (localhost) il path /inner/wp-json è inoltrato dal proxy Vite (vite.config.ts).
// Override opzionale con VITE_GF_BASE_URL.
const GF_BASE = import.meta.env.VITE_GF_BASE_URL ?? '/inner/wp-json/gf/v2';

export type GfResult = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

/** Invia i valori a un form Gravity Forms. `payload` usa le chiavi `input_{id}`
 *  (campi compositi: `input_{id}.{sub}`, es. Nome = input_3.3 / Cognome = input_3.6). */
export async function submitToGravityForms(
  formId: number,
  payload: Record<string, string>,
): Promise<GfResult> {
  try {
    const res = await fetch(`${GF_BASE}/forms/${formId}/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      is_valid?: boolean;
      confirmation_message?: string;
      validation_messages?: Record<string, string>;
      message?: string;
    };
    if (res.ok && data?.is_valid) {
      return { ok: true, message: data.confirmation_message };
    }
    return { ok: false, errors: data?.validation_messages, message: data?.message };
  } catch {
    return { ok: false, message: 'Errore di connessione. Riprova.' };
  }
}

/** Decodifica le entità HTML nei messaggi GF (es. L&#039;email...). */
function decodeEntities(s: string): string {
  return (s || '')
    .replace(/&#0?39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

/** Traduce i validation_messages di GF (chiave = id campo GF) in errori per-campo React.
 *  `map`: idCampoGF -> { key: nome campo React, fallback: messaggio se GF non ne dà uno }. */
export function mapGfErrors(
  messages: Record<string, string> | undefined,
  map: Record<string, { key: string; fallback: string }>,
): Record<string, string> {
  const out: Record<string, string> = {};
  if (!messages) return out;
  for (const id of Object.keys(messages)) {
    const m = map[id];
    if (m) out[m.key] = decodeEntities(messages[id]).trim() || m.fallback;
  }
  return out;
}
