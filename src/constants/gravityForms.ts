// Configurazione dei form Gravity Forms (Form ID + mappatura campi).
// I form GF fanno da motore; l'estetica resta quella React.

/** Form "Iscriviti" — GF form 184 su asteryslab.com/inner.
 *  Campi GF: 1 Percorso (select) · 3 Nome (First .3 / Last .6) · 4 Telefono · 5 Email · 6 Consenso (.1). */
export const GF_ISCRIVITI = {
  formId: 184,
  /** slug corso (value del <select> React) -> valore ESATTO dell'opzione nel form GF (campo 1).
   *  In GF i valori sono le etichette, non gli slug: la mappatura traduce. */
  courseToGf: {
    apcm: 'Master in Coaching',
    'systemic-team-coaching': 'Master in Team Coaching sistemico',
    eiw: 'Intelligenza Emotiva',
    'coaching-circle': 'Mentoring per rinnovo credenziali',
    'voice-dialogue': 'Voice Dialogue',
    'continuous-learning': 'Continuous Learning',
    'public-speaking': 'Public Speaking',
  } as Record<string, string>,
};

/** Borsa di Studio — GF form 185. Campi: 1 Nome(.3/.6) · 2 Email · 3 Telefono · 4 Regione · 5 Percorso · 6 Consenso(.1). */
export const GF_BORSA = {
  formId: 185,
  levelToGf: {
    '': 'Indifferente',
    l1: 'Solo Livello 1',
    completo: 'Percorso Completo',
  } as Record<string, string>,
};

/** Credito ai Talenti — GF form 186. Campi: 1 Nome(.3/.6) · 2 Email · 3 Telefono · 4 Titolo · 5 Situazione · 6 Storia · 7 Consenso(.1). */
export const GF_CREDITO = {
  formId: 186,
  employmentToGf: {
    '': '',
    disoccupato: 'Disoccupato/a',
    'reddito-insufficiente': 'Reddito insufficiente',
    altro: 'Altro',
  } as Record<string, string>,
};

/** Per Aziende — GF form 187. Campi: 1 Nome(.3/.6) · 2 Azienda · 3 Area · 4 Email · 5 Telefono · 6 Sfida · 7 Consenso(.1). */
export const GF_AZIENDE = { formId: 187 };

/** Iscrizione Evento — GF form 188. Campi: 2 Email · 3 Evento (hidden). (Nome reso opzionale in GF) */
export const GF_EVENTO = { formId: 188 };

const PHONE_FALLBACK = 'Inserisci un numero di telefono valido.';
const EMAIL_FALLBACK = 'Inserisci un indirizzo email valido.';
const NAME_FALLBACK = 'Controlla nome e cognome.';
const CONSENT_FALLBACK = 'Devi accettare per continuare.';

/** Mappe id-campo-GF → campo React, per mostrare l'errore sul campo giusto. */
export const GF_ERR_ISCRIVITI: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'course', fallback: 'Seleziona un percorso.' },
  '3': { key: 'firstName', fallback: NAME_FALLBACK },
  '4': { key: 'phone', fallback: PHONE_FALLBACK },
  '5': { key: 'email', fallback: EMAIL_FALLBACK },
  '6': { key: 'terms', fallback: CONSENT_FALLBACK },
};
export const GF_ERR_BORSA: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'firstName', fallback: NAME_FALLBACK },
  '2': { key: 'email', fallback: EMAIL_FALLBACK },
  '3': { key: 'phone', fallback: PHONE_FALLBACK },
  '4': { key: 'region', fallback: 'Seleziona la regione.' },
  '6': { key: 'terms', fallback: CONSENT_FALLBACK },
};
export const GF_ERR_CREDITO: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'firstName', fallback: NAME_FALLBACK },
  '2': { key: 'email', fallback: EMAIL_FALLBACK },
  '3': { key: 'phone', fallback: PHONE_FALLBACK },
  '7': { key: 'terms', fallback: CONSENT_FALLBACK },
};
export const GF_ERR_AZIENDE: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'firstName', fallback: NAME_FALLBACK },
  '2': { key: 'company', fallback: 'Inserisci il nome dell’azienda.' },
  '4': { key: 'email', fallback: EMAIL_FALLBACK },
  '5': { key: 'phone', fallback: PHONE_FALLBACK },
  '7': { key: 'terms', fallback: CONSENT_FALLBACK },
};
export const GF_ERR_EVENTO: Record<string, { key: string; fallback: string }> = {
  '2': { key: 'email', fallback: EMAIL_FALLBACK },
};

/** Lead magnet "Guida: Diventare Coach" — importa asterys-gf-guida.json in GF.
 *  Campi: 1 Email · 2 Risorsa (hidden). ⚠️ formId da impostare dopo l'import. */
export const GF_GUIDA = { formId: 190 };
export const GF_ERR_GUIDA: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'email', fallback: EMAIL_FALLBACK },
};

/** Newsletter "Le Note di AL" — importa asterys-gf-newsletter.json in GF.
 *  Campi: 1 Email · 2 Provenienza (hidden). ⚠️ formId da impostare dopo l'import.
 *  Consiglio: in GF collega il MailPoet add-on per iscrivere alla lista newsletter. */
export const GF_NEWSLETTER = { formId: 189 };
export const GF_ERR_NEWSLETTER: Record<string, { key: string; fallback: string }> = {
  '1': { key: 'email', fallback: EMAIL_FALLBACK },
};
