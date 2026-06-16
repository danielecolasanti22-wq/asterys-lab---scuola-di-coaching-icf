import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  GraduationCap,
  MapPin,
  Award,
  Users,
  Sparkles,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/393498864895';
const HERO_GRADIENT =
  'bg-[linear-gradient(120deg,#00091c_0%,#001a45_16%,#143f7a_42%,#2c63a8_64%,#4a82cc_84%,#5d90d8_100%)]';

const heroBenefits = [
  'Riservata alle prime iscrizioni delle edizioni di Roma del Master in Coaching Professionale',
  'Fino a 1.500€ di sconto sulla quota del Master, accreditato ICF Level 1 & 2',
  'Selezione tramite colloquio gratuito con un Advisor Asterys — nessun acquisto online',
];

const masterIncludes = [
  { icon: Award, title: 'Accreditamento ICF Level 1 & 2', desc: 'Tutte le ore formative per le credenziali ACC e PCC, spendibili a livello internazionale.' },
  { icon: Users, title: 'Trainer MCC & PCC', desc: 'Coach con 20+ anni di esperienza, pratica supervisionata reale e coach di riferimento dedicato.' },
  { icon: Sparkles, title: 'Intelligenza Emotiva & sistemi', desc: 'Metodo Asterys: IE misurabile (KCG/SEI) e approccio sistemico per lavorare con persone e team.' },
  { icon: GraduationCap, title: 'Community e Career', desc: 'Accesso alla rete di 3.000+ alumni, formazione continua e supporto carriera dopo il percorso.' },
];

const priceTiers = [
  {
    label: 'Livello 1',
    name: 'ICF Level 1',
    price: '3.400€',
    priceLabel: '+ IVA',
    note: 'Fondamenti del coaching, abilita alla credenziale ACC.',
    highlight: false,
  },
  {
    label: 'Percorso Completo',
    name: 'ICF Level 1 + Level 2',
    price: '6.900€',
    priceLabel: '+ IVA',
    note: 'Il percorso integrale, abilita alla credenziale PCC. Il più scelto.',
    highlight: true,
  },
];

const requisiti = [
  'Residenti in una regione del Centro o Sud Italia',
  'Iscrizione a un’edizione del Master in Coaching a Roma',
  'Colloquio di ammissione positivo con un nostro Advisor',
];

export default function BorsaDiStudio() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    region: '',
    level: '',
    message: '',
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
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-hero">
        <div aria-hidden className={`pointer-events-none absolute inset-0 z-0 ${HERO_GRADIENT}`} />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 pt-10 lg:pt-14 pb-12 lg:pb-16">
          <Link
            to="/corsi/apcm"
            className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Torna al Master
          </Link>
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-5">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            Borsa di studio · Sede di Roma
          </div>
          <h1 className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-display font-black leading-[0.95] tracking-tighter text-white max-w-[18ch] mb-5">
            Diventa coach con la Borsa di studio Asterys
          </h1>
          <p className="text-sm sm:text-lg text-white/80 font-medium leading-relaxed max-w-[640px] mb-7">
            Per supportare l&rsquo;accesso al Master in Coaching Professionale ai talenti del Centro e Sud Italia,
            riserviamo una borsa di studio <span className="text-white font-black">fino a 1.500€</span> sulle prime
            iscrizioni delle edizioni di Roma. Un investimento concreto per espandere il valore del coaching.
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
              href="#richiedi"
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

      {/* COSA INCLUDE IL MASTER */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">Cosa ottieni</p>
          <h2 className="text-3xl lg:text-[2.5rem] font-display font-black tracking-tight leading-tight max-w-2xl mb-3">
            La borsa apre le porte al Master completo
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/65 font-medium leading-relaxed max-w-2xl mb-10">
            La borsa di studio non riduce il valore del percorso: accedi allo stesso Master in Coaching Professionale,
            con metodo, pratica e credenziali ICF riconosciute nel mondo.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {masterIncludes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-6">
                <span className="w-11 h-11 rounded-2xl bg-[#EEF4FC] text-brand-accent flex items-center justify-center mb-4">
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-display font-black tracking-tight leading-snug mb-2">{title}</h3>
                <p className="text-[13px] text-brand-navy/60 font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREZZI CON LA BORSA */}
      <section className="py-14 lg:py-20 bg-[#EEF4FC]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">L&rsquo;investimento</p>
            <h2 className="text-3xl lg:text-[2.5rem] font-display font-black tracking-tight leading-tight mb-3">
              I prezzi del Master, con la borsa
            </h2>
            <p className="text-sm sm:text-base text-brand-navy/65 font-medium leading-relaxed max-w-2xl mx-auto">
              Con la borsa di studio risparmi <span className="font-black text-brand-navy">fino a 1.500€</span> sulla
              quota delle edizioni di Roma. Non si acquista online: ti accompagniamo noi, passo per passo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-[760px] mx-auto">
            {priceTiers.map((t) => (
              <div
                key={t.label}
                className={`relative flex flex-col rounded-[1.5rem] p-7 ring-1 ${
                  t.highlight ? 'bg-brand-navy text-white ring-brand-navy' : 'bg-white text-brand-navy ring-brand-blue-soft'
                }`}
              >
                {t.highlight ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-brand-accent px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">
                    Più scelto
                  </span>
                ) : null}
                <p className={`text-[11px] font-black uppercase tracking-[0.2em] mb-2 ${t.highlight ? 'text-brand-accent' : 'text-brand-accent'}`}>
                  {t.label}
                </p>
                <h3 className={`text-xl font-display font-black tracking-tight mb-4 ${t.highlight ? 'text-white' : 'text-brand-navy'}`}>
                  {t.name}
                </h3>
                <p className={`text-4xl font-display font-black tracking-tight leading-none ${t.highlight ? 'text-white' : 'text-brand-navy'}`}>
                  {t.price}
                </p>
                <p className={`text-xs font-semibold mt-1 ${t.highlight ? 'text-white/70' : 'text-brand-navy/55'}`}>{t.priceLabel}</p>
                <span
                  className={`mt-4 self-start inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${
                    t.highlight ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-accent/10 text-brand-accent'
                  }`}
                >
                  Fino a −1.500€ con la borsa
                </span>
                <p className={`text-[13px] font-medium leading-relaxed mt-4 mb-6 ${t.highlight ? 'text-white/80' : 'text-brand-navy/65'}`}>
                  {t.note}
                </p>
                <a
                  href="#richiedi"
                  className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em] transition-colors ${
                    t.highlight ? 'bg-white text-brand-navy hover:bg-brand-blue-soft' : 'bg-brand-navy text-white hover:bg-brand-accent'
                  }`}
                >
                  Richiedi la borsa
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-brand-navy/55 font-medium mt-6">
            Quota rateizzabile fino a 24 mesi senza interessi. Prezzi IVA esclusa.
          </p>
        </div>
      </section>

      {/* REQUISITI + FORM */}
      <section id="richiedi" className="py-14 lg:py-20 bg-white scroll-mt-24">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">Requisiti</p>
            <h2 className="text-3xl lg:text-[2.3rem] font-display font-black tracking-tight leading-tight mb-6">
              Chi può richiederla
            </h2>
            <ul className="space-y-3 mb-8">
              {requisiti.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm font-medium text-brand-navy/80 leading-snug">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-accent" strokeWidth={2.25} />
                  {r}
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-[#001D4B] text-white p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={15} className="text-brand-sky" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">Sede di Roma</span>
              </div>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                via del Porto Fluviale, 35 — 00154 Roma. La borsa è valida sulle edizioni romane del Master.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-black text-brand-sky hover:text-white transition-colors"
              >
                <MessageCircle size={16} /> Preferisci scriverci? WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 shadow-[0_30px_80px_-40px_rgba(29,59,185,0.35)] p-7 sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center text-center gap-3 py-10">
                <div className="w-14 h-14 rounded-full bg-[#E8F5EC] text-[#008060] flex items-center justify-center">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-display font-black tracking-tight">Richiesta inviata!</h3>
                <p className="text-sm text-brand-navy/70 font-medium max-w-sm">
                  Un Advisor Asterys ti contatterà entro 24 ore lavorative per il colloquio gratuito e per valutare
                  insieme la borsa di studio.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-black tracking-tight mb-1">Richiedi la borsa di studio</h3>
                <p className="text-sm text-brand-navy/60 font-medium mb-6">
                  Compila il modulo: nessun acquisto, ti ricontattiamo noi.
                </p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Nome" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} placeholder="Mario" required />
                    <Field label="Cognome" value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} placeholder="Rossi" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="mario.rossi@mail.it" required />
                    <Field label="Telefono" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+39 ..." required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Regione di residenza" value={form.region} onChange={(v) => setForm({ ...form, region: v })} placeholder="Es. Campania" required />
                    <div>
                      <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                        Percorso d&rsquo;interesse
                      </label>
                      <select
                        value={form.level}
                        onChange={(e) => setForm({ ...form, level: e.target.value })}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-navy focus:outline-none focus:border-brand-accent"
                      >
                        <option value="">Indifferente</option>
                        <option value="l1">Solo Livello 1</option>
                        <option value="completo">Percorso Completo</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                      Raccontaci la tua motivazione
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      placeholder="Perché vuoi diventare coach e perché ti serve la borsa di studio…"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-accent resize-none"
                    />
                  </div>
                  <label className="flex items-center gap-2 text-xs text-brand-navy/70 font-medium">
                    <input
                      type="checkbox"
                      checked={form.terms}
                      onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                      className="accent-brand-accent"
                    />
                    Accetto il trattamento dei dati secondo la privacy policy
                  </label>
                  <button
                    type="submit"
                    className="mt-1 bg-brand-navy text-white py-4 rounded-full text-xs font-black uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors active:scale-[0.99]"
                  >
                    Invia richiesta
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
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
      <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
        {label} {required ? <span className="text-brand-accent">•</span> : null}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-accent"
      />
    </div>
  );
}
