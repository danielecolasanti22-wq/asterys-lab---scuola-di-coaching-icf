import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, MessageCircle, MapPin } from 'lucide-react';
import CourseDetail from './CourseDetail';
import { coursesContent } from '../constants/coursesContent';
import { submitToGravityForms, mapGfErrors } from '../utils/gravityForms';
import { GF_BORSA, GF_ERR_BORSA } from '../constants/gravityForms';

/** Regioni ammesse alla borsa di studio (confermate 30 lug 2026). */
const BORSA_REGIONI = [
  'Lazio', 'Abruzzo', 'Campania', 'Basilicata', 'Molise', 'Puglia', 'Calabria', 'Sicilia', 'Sardegna',
];

import { whatsappHref } from '../utils/whatsapp';
const HERO_GRADIENT =
  'bg-[linear-gradient(120deg,#00091c_0%,#001a45_16%,#143f7a_42%,#2c63a8_64%,#4a82cc_84%,#5d90d8_100%)]';

const heroBenefits = [
  'Un posto tra le prime iscrizioni delle edizioni di Roma',
  'Fino a 1.500€ di sconto + credenziale ICF Level 1 & 2',
  'Accesso con un colloquio gratuito, senza acquisti online',
];

const requisiti = [
  'Residenti in una regione del Centro o Sud Italia',
  'Iscrizione a un’edizione del Master in Coaching a Roma',
  'Colloquio di ammissione positivo con un nostro Advisor',
];

// Prezzi con la borsa di studio (pieno barrato + reale + risparmio) per la sezione "Struttura del percorso".
const BORSA_PRICES: Record<string, { price: string; originalPrice: string; saving: string }> = {
  'Livello 1': { price: '2.700€', originalPrice: '3.400€', saving: 'Borsa di studio −700€' },
  'Percorso Completo': { price: '5.400€', originalPrice: '6.900€', saving: 'Borsa di studio −1.500€' },
  'Livello 2': { price: '3.700€', originalPrice: '4.500€', saving: 'Borsa di studio −800€' },
};

const apcmData = coursesContent['apcm'];
const borsaData = {
  ...apcmData,
  // La borsa di studio è riservata alle edizioni di Roma: mostra solo Roma nel calendario.
  editions: apcmData.editions?.filter((e) => e.citySlug === 'roma'),
  editionsSection: {
    eyebrow: 'Calendario edizioni',
    title: 'Scegli livello ed edizione',
    intro:
      "Seleziona il **livello** e l'**edizione** a Roma: vedrai il calendario completo con Incontri online, Moduli (online e in presenza) e le scadenze di iscrizione. Il **Percorso Completo** racchiude 1° e 2° livello; per il **2° livello** è necessario aver completato prima il **1° livello**.",
  },
  levelsComparison: apcmData.levelsComparison
    ? {
        ...apcmData.levelsComparison,
        levels: apcmData.levelsComparison.levels.map((lvl) => {
          const bp = BORSA_PRICES[lvl.label];
          return bp ? { ...lvl, ...bp, priceLabel: '+ IVA' } : lvl;
        }),
      }
    : apcmData.levelsComparison,
};

export default function BorsaDiStudio() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    region: '',
    level: '',
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const prev = document.title;
    document.title = 'Borsa di studio · Master in Coaching Roma | Asterys Lab';
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    return () => {
      document.title = prev;
      robots.remove();
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.terms || !form.firstName || !form.lastName || !form.email || !form.phone || !form.region) return;
    setError(null);
    setFieldErrors({});
    setSending(true);
    const result = await submitToGravityForms(GF_BORSA.formId, {
      'input_1.3': form.firstName,
      'input_1.6': form.lastName,
      input_2: form.email,
      input_3: form.phone ? `+39 ${form.phone}` : '',
      input_4: form.region,
      input_5: GF_BORSA.levelToGf[form.level] ?? form.level,
      'input_6.1': form.terms ? '1' : '',
    });
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      return;
    }
    const fe = mapGfErrors(result.errors, GF_ERR_BORSA);
    if (Object.keys(fe).length) setFieldErrors(fe);
    else setError(result.message || 'Qualcosa non ha funzionato. Controlla i campi e riprova.');
  };

  return (
    <div className="bg-white font-sans text-brand-navy antialiased">
      {/* HERO — stessa altezza delle pagine corso */}
      <section className="relative overflow-hidden bg-brand-hero">
        <div aria-hidden className={`pointer-events-none absolute inset-0 z-0 ${HERO_GRADIENT}`} />
        <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:block overflow-hidden">
          <img
            src="/borsa/hero.png"
            alt=""
            className="hero-figure absolute bottom-0 right-[-6%] w-[calc(100vw-135px)] max-w-[1480px] min-w-[1020px] object-contain object-bottom object-right-bottom"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 flex flex-col justify-center lg:min-h-[608px] py-12 lg:py-0">
          <Link
            to="/corsi/apcm"
            className="flex w-fit items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Torna al Master
          </Link>
          <div className="inline-flex w-fit items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-5">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            Borsa di studio · Sede di Roma
          </div>
          <h1 className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-display font-black leading-[0.95] tracking-tighter text-white max-w-[18ch] mb-5">
            Fino a 1.500€ in meno per diventare coach a Roma
          </h1>
          <p className="text-sm sm:text-lg text-white/80 font-medium leading-relaxed max-w-[640px] mb-7">
            Se vieni dal Centro o Sud Italia, entri nel Master in Coaching a Roma pagando
            <span className="text-white font-black"> fino a 1.500€ in meno</span>.
          </p>
          <ul className="space-y-2.5 mb-8 text-[13px] lg:text-[15px] font-medium text-white max-w-[640px]">
            {heroBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-sky" strokeWidth={2.25} />
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#richiedi-borsa"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.18em] hover:bg-brand-blue-soft transition-colors active:scale-[0.98]"
            >
              Richiedi la borsa di studio <ArrowRight size={15} />
            </a>
          </div>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-sky">
            Solo 2 borse di studio rimaste
          </p>
        </div>
      </section>

      {/* MODULO + REQUISITI — in cima, subito dopo la hero */}
      <section id="richiedi-borsa" className="py-12 lg:py-16 bg-[#EEF4FC] scroll-mt-20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* Requisiti + sede */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">Borsa di studio</p>
            <h2 className="text-2xl lg:text-[2rem] font-display font-black tracking-tight leading-tight mb-4">
              Assicurati il tuo posto in 1 minuto
            </h2>
            <p className="text-sm text-brand-navy/65 font-medium leading-relaxed mb-5">
              Non paghi nulla ora: compila il modulo e un Advisor ti richiama per il colloquio gratuito e per
              confermare quanto risparmi (fino a −1.500€ sulla quota del Master a Roma).
            </p>
            <ul className="space-y-2.5 mb-5">
              {requisiti.map((r) => (
                <li key={r} className="flex items-start gap-2.5 text-sm font-medium text-brand-navy/80 leading-snug">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-accent" strokeWidth={2.25} />
                  {r}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-[13px] font-bold text-brand-navy/70">
              <MapPin size={15} className="text-brand-accent" /> Sede di Roma · via del Porto Fluviale, 35
            </div>
          </div>

          {/* Form compatto */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_30px_80px_-45px_rgba(29,59,185,0.35)] p-5 sm:p-7">
            {submitted ? (
              <div className="flex flex-col items-center text-center gap-2.5 py-8">
                <div className="w-12 h-12 rounded-full bg-[#E8F5EC] text-[#008060] flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-display font-black tracking-tight">Richiesta inviata!</h3>
                <p className="text-sm text-brand-navy/70 font-medium max-w-sm">
                  Un Advisor ti richiama entro 24 ore lavorative: nel colloquio gratuito definite insieme il tuo
                  percorso e quanto risparmi con la borsa.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Nome" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} placeholder="Mario" required error={fieldErrors.firstName} />
                  <Field label="Cognome" value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} placeholder="Rossi" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="mario@mail.it" required error={fieldErrors.email} />
                  <div>
                    <label className="block text-[11px] font-black text-brand-navy tracking-tight mb-1">Telefono <span className="text-brand-accent">•</span></label>
                    <div className={`flex items-center gap-2 bg-gray-50 border rounded-lg px-3 py-2.5 ${fieldErrors.phone ? 'border-red-500' : 'border-gray-200 focus-within:border-brand-accent'}`}>
                      <span className="text-sm shrink-0">🇮🇹 +39</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="333 1234567"
                        className="w-full bg-transparent text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none"
                      />
                    </div>
                    {fieldErrors.phone ? <p className="mt-1 text-[11px] font-bold text-red-600">{fieldErrors.phone}</p> : null}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-black text-brand-navy tracking-tight mb-1">Regione <span className="text-brand-accent">•</span></label>
                    <select
                      value={form.region}
                      onChange={(e) => setForm({ ...form, region: e.target.value })}
                      className={`w-full appearance-none bg-gray-50 border rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy focus:outline-none ${fieldErrors.region ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                    >
                      <option value="">Seleziona la regione…</option>
                      {BORSA_REGIONI.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    {fieldErrors.region ? <p className="mt-1 text-[11px] font-bold text-red-600">{fieldErrors.region}</p> : null}
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-brand-navy tracking-tight mb-1">Percorso</label>
                    <select
                      value={form.level}
                      onChange={(e) => setForm({ ...form, level: e.target.value })}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy focus:outline-none focus:border-brand-accent"
                    >
                      <option value="">Indifferente</option>
                      <option value="l1">Solo Livello 1</option>
                      <option value="completo">Percorso Completo</option>
                    </select>
                  </div>
                </div>
                <label className="flex items-center gap-2 text-xs text-brand-navy/70 font-medium mt-0.5">
                  <input
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    className="accent-brand-accent"
                  />
                  Accetto il trattamento dei dati (privacy policy)
                </label>
                {fieldErrors.terms ? <p className="text-[11px] font-bold text-red-600">{fieldErrors.terms}</p> : null}
                <button
                  type="submit"
                  disabled={sending}
                  className="mt-1 bg-brand-navy text-white py-3.5 rounded-full text-xs font-black uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Invio in corso…' : 'Richiedi la borsa di studio'}
                </button>
                {error ? <p className="text-xs font-bold text-red-600 text-center">{error}</p> : null}
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs font-black text-brand-accent hover:text-brand-navy transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <MessageCircle size={14} /> Oppure scrivici su WhatsApp
                </a>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* PAGINA MASTER CLONATA (senza hero, senza checkout: CTA → modulo borsa) */}
      <CourseDetail
        courseId="apcm"
        courseData={borsaData}
        hideHero
        contactHref="#richiedi-borsa"
        contactLabel="Richiedi la borsa"
      />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] font-black text-brand-navy tracking-tight mb-1">
        {label} {required ? <span className="text-brand-accent">•</span> : null}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-gray-50 border rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none ${
          error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-brand-accent'
        }`}
      />
      {error ? <p className="mt-1 text-[11px] font-bold text-red-600">{error}</p> : null}
    </div>
  );
}
