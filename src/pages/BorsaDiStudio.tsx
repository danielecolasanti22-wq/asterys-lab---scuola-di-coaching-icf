import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, MessageCircle, MapPin } from 'lucide-react';
import CourseDetail from './CourseDetail';
import { coursesContent } from '../constants/coursesContent';

const WHATSAPP_URL = 'https://wa.me/393498864895';
const HERO_GRADIENT =
  'bg-[linear-gradient(120deg,#00091c_0%,#001a45_16%,#143f7a_42%,#2c63a8_64%,#4a82cc_84%,#5d90d8_100%)]';

const heroBenefits = [
  'Riservata alle prime iscrizioni delle edizioni di Roma del Master in Coaching',
  'Fino a 1.500€ di sconto sulla quota del Master, accreditato ICF Level 1 & 2',
  'Selezione tramite colloquio gratuito con un Advisor — nessun acquisto online',
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.terms || !form.firstName || !form.lastName || !form.email || !form.phone || !form.region) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans text-brand-navy antialiased">
      {/* HERO — stessa altezza delle pagine corso */}
      <section className="relative overflow-hidden bg-brand-hero">
        <div aria-hidden className={`pointer-events-none absolute inset-0 z-0 ${HERO_GRADIENT}`} />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col justify-center lg:min-h-[608px] py-12 lg:py-0">
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
            Diventa coach con la Borsa di studio Asterys
          </h1>
          <p className="text-sm sm:text-lg text-white/80 font-medium leading-relaxed max-w-[640px] mb-7">
            Per supportare l&rsquo;accesso al Master in Coaching ai talenti del Centro e Sud Italia,
            riserviamo una borsa di studio <span className="text-white font-black">fino a 1.500€</span> sulle prime
            iscrizioni delle edizioni di Roma.
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.18em] hover:bg-[#1ebe57] transition-colors active:scale-[0.98]"
            >
              <MessageCircle size={16} /> Scrivici su WhatsApp
            </a>
          </div>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-sky">
            Solo 2 borse di studio rimaste
          </p>
        </div>
      </section>

      {/* MODULO + REQUISITI — in cima, subito dopo la hero */}
      <section id="richiedi-borsa" className="py-12 lg:py-16 bg-[#EEF4FC] scroll-mt-20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          {/* Requisiti + sede */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">Borsa di studio</p>
            <h2 className="text-2xl lg:text-[2rem] font-display font-black tracking-tight leading-tight mb-4">
              Richiedila in 1 minuto
            </h2>
            <p className="text-sm text-brand-navy/65 font-medium leading-relaxed mb-5">
              Nessun acquisto: compila il modulo e un Advisor ti ricontatta per il colloquio gratuito e per valutare la
              borsa (fino a −1.500€ sulla quota del Master a Roma).
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
                  Un Advisor ti contatterà entro 24 ore lavorative per il colloquio gratuito.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Nome" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} placeholder="Mario" required />
                  <Field label="Cognome" value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} placeholder="Rossi" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="mario@mail.it" required />
                  <Field label="Telefono" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+39 ..." required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Regione" value={form.region} onChange={(v) => setForm({ ...form, region: v })} placeholder="Es. Campania" required />
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
                <button
                  type="submit"
                  className="mt-1 bg-brand-navy text-white py-3.5 rounded-full text-xs font-black uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors active:scale-[0.99]"
                >
                  Invia richiesta
                </button>
                <a
                  href={WHATSAPP_URL}
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
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
        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-accent"
      />
    </div>
  );
}
