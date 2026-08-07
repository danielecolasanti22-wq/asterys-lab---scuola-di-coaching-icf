import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  HandCoins,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  FileText,
} from 'lucide-react';
import { submitToGravityForms, mapGfErrors } from '../utils/gravityForms';
import { GF_CREDITO, GF_ERR_CREDITO } from '../constants/gravityForms';

import { whatsappHref } from '../utils/whatsapp';
import Img from '../components/Img';
const HERO_GRADIENT =
  'bg-[linear-gradient(120deg,#00091c_0%,#001a45_16%,#143f7a_42%,#2c63a8_64%,#4a82cc_84%,#5d90d8_100%)]';

const heroBenefits = [
  'Entri nel Master anche se oggi non puoi pagarlo subito',
  'Paghi quando inizi a guadagnare, con un piano sul tuo reddito',
  'Se non raggiungi il reddito concordato, il residuo si azzera',
];

const comeFunziona = [
  {
    icon: HandCoins,
    title: 'Ricevi credito perché hai talento',
    desc: 'Accedi al Master in Coaching anche se oggi sei senza lavoro o con un reddito insufficiente: non è una carità, è una scommessa su di te. Se tu vinci, vinciamo insieme, in un patto di fiducia, empowerment e responsabilità.',
  },
  {
    icon: TrendingUp,
    title: 'Inizi a pagare quando inizi a guadagnare',
    desc: 'Versi un fee d’iscrizione iniziale (almeno il 10%) e poi una quota mensile sostenibile, concordata con Asterys Lab in base al reddito che raggiungi. Nessun interesse, nessun costo extra.',
  },
  {
    icon: ShieldCheck,
    title: 'Se non decolla, resti libero',
    desc: 'Se entro il periodo concordato non raggiungi un reddito o l’obiettivo professionale previsto, sei libero da ogni debito residuo. Il rischio non ricade su di te.',
  },
  {
    icon: HeartHandshake,
    title: 'Hai un alleato che ti fa da sponsor',
    desc: 'Ti accompagniamo con coaching individuale per definire e centrare un obiettivo professionale entro un anno dalla fine del Master.',
  },
];

const criteri = [
  'Laurea',
  'Età compresa tra i 30 e i 60 anni',
  'Disoccupato/a o con reddito insufficiente',
  'Motivazione e voglia di metterti in gioco',
];

const tuoImpegno = [
  'Seguire tutte le attività del Master con impegno e costanza',
  'Aprirti a nuovi punti di vista, usando i talenti che possiedi',
  'Versare un fee d’iscrizione iniziale e le quote mensili concordate',
  'Permetterci di raccontare, a titolo gratuito, la tua storia di successo',
];

export default function CreditoAiTalenti() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    employment: '',
    message: '',
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const prev = document.title;
    document.title = 'Credito ai talenti · Master in Coaching | Asterys Lab';
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
    if (!form.terms || !form.firstName || !form.lastName || !form.email || !form.phone) return;
    setError(null);
    setFieldErrors({});
    setSending(true);
    const result = await submitToGravityForms(GF_CREDITO.formId, {
      'input_1.3': form.firstName,
      'input_1.6': form.lastName,
      input_2: form.email,
      input_3: form.phone ? `+39 ${form.phone}` : '',
      input_4: form.education,
      input_5: GF_CREDITO.employmentToGf[form.employment] ?? form.employment,
      input_6: form.message,
      'input_7.1': form.terms ? '1' : '',
    });
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      return;
    }
    const fe = mapGfErrors(result.errors, GF_ERR_CREDITO);
    if (Object.keys(fe).length) setFieldErrors(fe);
    else setError(result.message || 'Qualcosa non ha funzionato. Controlla i campi e riprova.');
  };

  return (
    <div className="bg-white font-sans text-brand-navy antialiased">
      {/* HERO — stessa altezza delle pagine corso */}
      <section className="relative overflow-hidden bg-brand-hero">
        <div aria-hidden className={`pointer-events-none absolute inset-0 z-0 ${HERO_GRADIENT}`} />
        <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:block overflow-hidden">
          <Img
            src="/credito/hero.png"
            sizes="(max-width: 1024px) 0px, 100vw"
            alt=""
            className="hero-figure absolute bottom-0 right-0 w-[calc(100vw-135px)] max-w-[1480px] min-w-[1020px] object-contain object-bottom object-right-bottom"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 flex flex-col justify-center lg:min-h-[608px] py-12 lg:py-0">
          <Link
            to="/"
            className="flex w-fit items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Torna alla home
          </Link>
          <div className="inline-flex w-fit items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-5">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            Credito ai talenti
          </div>
          <h1 className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-display font-black leading-[0.95] tracking-tighter text-white max-w-[16ch] mb-5">
            Diventa coach ora, paghi quando guadagni
          </h1>
          <p className="text-sm sm:text-lg text-white/80 font-medium leading-relaxed max-w-[640px] mb-7">
            Hai <span className="text-white font-black">talento</span> ma sei senza lavoro o con un
            reddito insufficiente? Entri comunque nel <span className="text-white font-black">Master in Coaching</span>:
            inizi a pagare solo quando inizi a guadagnare.
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
              href="#candidati"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.18em] hover:bg-brand-blue-soft transition-colors active:scale-[0.98]"
            >
              Candidati ora <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* MODULO + REQUISITI — in cima, subito dopo la hero */}
      <section id="candidati" className="py-12 lg:py-16 bg-[#EEF4FC] scroll-mt-20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">Candidatura</p>
            <h2 className="text-2xl lg:text-[2rem] font-display font-black tracking-tight leading-tight mb-4">
              Mandaci la tua candidatura
            </h2>
            <p className="text-sm text-brand-navy/65 font-medium leading-relaxed mb-5">
              Se rientri nei criteri, ti aspetta un colloquio gratuito in cui definisci insieme a noi gli obiettivi del
              tuo percorso. Ti candidi per il <span className="font-black text-brand-navy">Master in Coaching
              Professionale</span>.
            </p>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-navy/45 mb-2">Requisiti</p>
            <ul className="space-y-2 mb-5">
              {criteri.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm font-medium text-brand-navy/80 leading-snug">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-accent" strokeWidth={2.25} />
                  {c}
                </li>
              ))}
            </ul>
            <div className="flex items-start gap-2 text-[13px] font-medium text-brand-navy/70 leading-snug">
              <FileText size={15} className="mt-0.5 text-brand-accent shrink-0" />
              Tieni pronto il <span className="font-black text-brand-navy">CV aggiornato</span>: te lo chiederemo dopo l&rsquo;invio.
            </div>
          </div>

          {/* Form compatto */}
          <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_30px_80px_-45px_rgba(29,59,185,0.35)] p-5 sm:p-7">
            {submitted ? (
              <div className="flex flex-col items-center text-center gap-2.5 py-8">
                <div className="w-12 h-12 rounded-full bg-[#E8F5EC] text-[#008060] flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-lg font-display font-black tracking-tight">Candidatura inviata!</h3>
                <p className="text-sm text-brand-navy/70 font-medium max-w-sm">
                  Grazie. Se rientri nei criteri, ti ricontattiamo per il colloquio gratuito e per il tuo CV.
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
                  <Field label="Titolo di studio" value={form.education} onChange={(v) => setForm({ ...form, education: v })} placeholder="Es. Laurea in…" />
                  <div>
                    <label className="block text-[11px] font-black text-brand-navy tracking-tight mb-1">Situazione</label>
                    <select
                      value={form.employment}
                      onChange={(e) => setForm({ ...form, employment: e.target.value })}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy focus:outline-none focus:border-brand-accent"
                    >
                      <option value="">Seleziona…</option>
                      <option value="disoccupato">Disoccupato/a</option>
                      <option value="reddito-insufficiente">Reddito insufficiente</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-black text-brand-navy tracking-tight mb-1">La tua storia (breve)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={2}
                    placeholder="I tuoi talenti e perché vuoi metterti in gioco…"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-accent resize-none"
                  />
                </div>
                <label className="flex items-center gap-2 text-xs text-brand-navy/70 font-medium">
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
                  {sending ? 'Invio in corso…' : 'Invia candidatura'}
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

      {/* COME FUNZIONA */}
      <section className="py-14 lg:py-20 bg-[#001D4B] text-white">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-sky mb-3">Come funziona</p>
          <h2 className="text-3xl lg:text-[2.5rem] font-display font-black tracking-tight leading-tight max-w-2xl mb-3">
            Un meccanismo di fiducia, non un prestito
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed max-w-2xl mb-10">
            Con &ldquo;Credito ai talenti&rdquo; entri nel Master in Coaching senza che il denaro ti fermi:
            un&rsquo;alternativa alla borsa di studio pensata per chi ha valore da esprimere.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {comeFunziona.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-6 flex gap-4">
                <span className="w-11 h-11 shrink-0 rounded-2xl bg-white/10 text-brand-sky flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-base font-display font-black tracking-tight leading-snug mb-1.5">{title}</h3>
                  <p className="text-[13px] text-white/60 font-medium leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERI + IMPEGNO */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">Selezione</p>
            <h2 className="text-3xl lg:text-[2.3rem] font-display font-black tracking-tight leading-tight mb-6 text-brand-navy">
              Come funziona l&rsquo;ammissione
            </h2>
            <p className="text-sm text-brand-navy/70 font-medium leading-relaxed mb-4">
              Le domande vengono valutate in graduatoria in base a competenze e potenziale, difficoltà economica e
              ordine di arrivo. La selezione è a insindacabile giudizio di Asterys Lab.
            </p>
            <p className="text-[13px] text-brand-navy/55 font-medium leading-relaxed">
              Se la tua richiesta rientra nei criteri, ti aspetta un colloquio individuale gratuito in cui definisci
              insieme a noi gli obiettivi del tuo percorso.
            </p>
          </div>
          <div className="rounded-2xl bg-[#F9FAFB] ring-1 ring-gray-100 p-7">
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">Il tuo impegno</p>
            <ul className="space-y-3">
              {tuoImpegno.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm font-medium text-brand-navy/80 leading-snug">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-accent" strokeWidth={2.25} />
                  {t}
                </li>
              ))}
            </ul>
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
