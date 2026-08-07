import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { submitToGravityForms, mapGfErrors } from '../utils/gravityForms';
import { GF_ISCRIVITI, GF_ERR_ISCRIVITI } from '../constants/gravityForms';

/** Contatto WhatsApp (numero in formato internazionale senza "+"). */
import { whatsappHref } from '../utils/whatsapp';
import Img from '../components/Img';

const steps = [
  { n: 1, title: 'Raccontaci chi sei', desc: 'e dove vuoi arrivare' },
  { n: 2, title: 'Trovi il percorso', desc: 'giusto per il tuo obiettivo' },
  { n: 3, title: 'Entri in classe', desc: 'e inizi a metterti in gioco' },
];

const upcomingClasses = [
  {
    course: 'Master in Coaching · Milano',
    date: '27 ottobre 2026',
    deadline: 'Iscrizioni aperte · termine candidature 13 ottobre 2026',
    earlyBird: 'Early Bird 10% entro il 27 agosto 2026',
    highlight: true,
  },
  {
    course: 'Team Coaching Sistemico',
    date: '6 ottobre 2026',
    deadline: '2° livello dal 20 gennaio 2027',
    earlyBird: 'Early Bird fino a −174€ entro il 19 agosto 2026',
    highlight: false,
  },
  {
    course: 'Intelligenza Emotiva',
    date: 'Settembre 2026',
    deadline: 'Iscrizioni aperte · posti limitati',
    earlyBird: null,
    highlight: true,
  },
  {
    course: 'Voice Dialogue · Milano',
    date: '17–18 nov + 1 dic 2026',
    deadline: 'Termine iscrizioni: 31 ottobre 2026',
    earlyBird: 'Early Bird 1.575€ + IVA entro il 31 ottobre 2026',
    highlight: false,
  },
];

const courseGroups = [
  {
    label: 'Master',
    options: [
      { id: 'apcm', label: 'Master in Coaching' },
      { id: 'systemic-team-coaching', label: 'Team Coaching Sistemico' },
    ],
  },
  {
    label: 'Formazione avanzata',
    options: [
      { id: 'coaching-circle', label: 'Mentoring per il rinnovo delle credenziali' },
      { id: 'voice-dialogue', label: 'Voice Dialogue Skills' },
    ],
  },
  {
    label: 'Corsi brevi',
    options: [
      { id: 'eiw', label: 'Intelligenza Emotiva' },
      { id: 'continuous-learning', label: 'Continuous Learning' },
      { id: 'public-speaking', label: 'Public Speaking Pro' },
    ],
  },
];

export default function Iscriviti() {
  const [form, setForm] = useState({
    course: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.terms || !form.course || !form.firstName || !form.lastName || !form.phone || !form.email) return;
    setError(null);
    setFieldErrors({});
    setSending(true);
    const result = await submitToGravityForms(GF_ISCRIVITI.formId, {
      input_1: GF_ISCRIVITI.courseToGf[form.course] ?? form.course,
      'input_3.3': form.firstName,
      'input_3.6': form.lastName,
      input_4: form.phone ? `+39 ${form.phone}` : '',
      input_5: form.email,
      'input_6.1': form.terms ? '1' : '',
    });
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      return;
    }
    const fe = mapGfErrors(result.errors, GF_ERR_ISCRIVITI);
    if (Object.keys(fe).length) setFieldErrors(fe);
    else setError(result.message || 'Qualcosa non ha funzionato. Controlla i campi e riprova.');
  };

  return (
    <div className="bg-white text-brand-navy">
      {/* FORM HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-soft/70 via-brand-blue-soft/60 to-[#2A56A8]">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-14 lg:py-20 relative">
          {/* left hand-drawn note */}
          <div className="hidden lg:flex absolute left-6 top-28 flex-col items-center text-brand-navy/70 text-[11px] font-black uppercase tracking-[0.18em] italic leading-tight">
            <span className="rotate-[-6deg]">Ti aspettiamo</span>
            <span className="rotate-[-6deg] mt-1">in classe</span>
            <svg width="60" height="60" viewBox="0 0 60 60" className="mt-2">
              <path
                d="M5 10 Q 25 30, 45 40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M45 40 L 38 36 M45 40 L 42 32"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="max-w-[560px] mx-auto bg-white rounded-3xl shadow-[0_30px_80px_-30px_rgba(29,59,185,0.45)] p-7 sm:p-10"
          >
            <h1 className="text-center text-2xl sm:text-[1.75rem] font-display font-black tracking-tighter leading-[1.1]">
              La tua carriera da coach
              <br className="hidden sm:block" />
              {' '}comincia da qui.
            </h1>
            <p className="text-center text-sm text-brand-navy/60 mt-3 font-medium">
              Parla con un Advisor senza impegno e scopri il percorso giusto per te: gratis, con risposte sincere.
            </p>

            {/* steps */}
            <div className="mt-8 grid grid-cols-3 gap-2 relative">
              <div className="absolute top-3 left-[16%] right-[16%] h-px bg-brand-navy/15" />
              {steps.map((s) => (
                <div key={s.n} className="flex flex-col items-center text-center gap-1 relative">
                  <div className="w-6 h-6 rounded-full bg-brand-accent text-white text-[11px] font-black flex items-center justify-center">
                    {s.n}
                  </div>
                  <p className="text-[11px] font-black text-brand-navy tracking-tight leading-tight mt-1">
                    {s.title}
                  </p>
                  <p className="text-[10px] text-brand-navy/55 font-bold leading-tight">{s.desc}</p>
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center text-center gap-3 py-6">
                <div className="w-14 h-14 rounded-full bg-[#E8F5EC] text-[#008060] flex items-center justify-center">
                  <CheckCircle2 size={28} />
                </div>
                <h2 className="text-xl font-display font-black tracking-tight">
                  Ci sei quasi.
                </h2>
                <p className="text-sm text-brand-navy/70 font-medium max-w-sm">
                  Un Advisor Asterys Lab ti richiama entro 24 ore lavorative per un colloquio
                  conoscitivo gratuito e senza impegno: capirai se il percorso fa davvero
                  al caso tuo, con risposte sincere.
                </p>
                <Link
                  to="/corsi"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-accent"
                >
                  Scopri gli altri percorsi <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                    Quale percorso ti interessa? <span className="text-brand-accent">•</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className={`w-full appearance-none bg-gray-50 border rounded-lg px-4 py-3 pr-10 text-sm font-medium text-brand-navy focus:outline-none ${fieldErrors.course ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                    >
                      <option value="" disabled>
                        Scegli il percorso…
                      </option>
                      {courseGroups.map((group) => (
                        <optgroup key={group.label} label={group.label}>
                          {group.options.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy/50 pointer-events-none"
                    />
                  </div>
                  {fieldErrors.course ? <p className="mt-1 text-[11px] font-bold text-red-600">{fieldErrors.course}</p> : null}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                      Nome <span className="text-brand-accent">•</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Mario"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none ${fieldErrors.firstName ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                    />
                    {fieldErrors.firstName ? <p className="mt-1 text-[11px] font-bold text-red-600">{fieldErrors.firstName}</p> : null}
                  </div>
                  <div>
                    <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                      Cognome <span className="text-brand-accent">•</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Rossi"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                      Telefono <span className="text-brand-accent">•</span>
                    </label>
                    <div className={`flex items-center bg-gray-50 border rounded-lg px-3 py-3 ${fieldErrors.phone ? 'border-red-500' : 'border-gray-200 focus-within:border-brand-accent'}`}>
                      <span className="text-sm mr-2">🇮🇹</span>
                      <span className="text-sm font-medium text-brand-navy/70 mr-2">+39</span>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="flex-1 bg-transparent text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none"
                      />
                    </div>
                    {fieldErrors.phone ? <p className="mt-1 text-[11px] font-bold text-red-600">{fieldErrors.phone}</p> : null}
                  </div>
                  <div>
                    <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                      Email <span className="text-brand-accent">•</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="mario.rossi@mail.it"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none ${fieldErrors.email ? 'border-red-500' : 'border-gray-200 focus:border-brand-accent'}`}
                    />
                    {fieldErrors.email ? <p className="mt-1 text-[11px] font-bold text-red-600">{fieldErrors.email}</p> : null}
                  </div>
                </div>

                <label className="flex items-center gap-2 mt-1 text-xs text-brand-navy/70 font-medium">
                  <input
                    required
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    className="accent-brand-accent"
                  />
                  Accetto{' '}
                  <a href="/termini" target="_blank" rel="noreferrer" className="underline hover:text-brand-accent">
                    termini e condizioni
                  </a>
                </label>
                {fieldErrors.terms ? <p className="text-[11px] font-bold text-red-600">{fieldErrors.terms}</p> : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-2 bg-brand-navy text-white py-4 rounded-full text-xs font-black uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? 'Invio in corso…' : 'Inizia ora'}
                </button>
                {error ? (
                  <p className="text-xs font-bold text-red-600 text-center">{error}</p>
                ) : null}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* UPCOMING CLASSES */}
      <section className="bg-[#2A56A8] text-white">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter">
            Inizi quando è il momento giusto per te
          </h2>
          <p className="mt-4 text-base text-white/85 max-w-[640px] font-medium leading-relaxed">
            Scegli la data che si incastra con la tua vita: ogni mese parte una nuova classe.
            In pochi mesi dai una svolta concreta alla tua carriera, con una classe che cresce insieme a te.
          </p>
          <p className="mt-2 text-xs text-white/55 font-medium">
            Nessuna data ti convince fino in fondo? Portati avanti ora: prenoti il tuo posto nelle classi che partiranno più avanti.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {upcomingClasses.map((c) => (
              <div
                key={c.course + c.date}
                className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/10 p-5 flex flex-col"
              >
                <p
                  className={`text-[11px] font-black uppercase tracking-[0.2em] ${
                    c.highlight ? 'text-[#CFE0F5]' : 'text-white/70'
                  }`}
                >
                  {c.course}
                </p>
                <p className="mt-3 flex items-center gap-2 text-2xl font-display font-black tracking-tight">
                  <ArrowRight size={18} className="shrink-0" /> {c.date}
                </p>
                <p className="mt-2 text-[12px] font-semibold text-white/70 leading-relaxed">
                  {c.deadline}
                </p>
                {c.earlyBird ? (
                  <span className="mt-3 self-start inline-flex items-center rounded-full bg-[#CFE0F5]/15 text-[#CFE0F5] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]">
                    {c.earlyBird}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT STORIES — sezione testimonianze condivisa */}
      <TestimonialsSection />

      {/* FINAL CTA BAND */}
      <section className="bg-white">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]">
              <Img
                src="/iscriviti/futuro.jpg"
                alt="Aula Asterys Lab durante una sessione di coaching"
                sizes="(max-width: 768px) 100vw, 520px"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]">
                Il tuo futuro ti sta aspettando
              </h2>
              <p className="mt-5 text-base text-brand-navy/75 font-medium leading-relaxed max-w-[480px]">
                Fai il primo passo oggi: costruisci la tua carriera di coach con un metodo che regge
                nella realtà e una community che non ti lascia mai da solo. Se hai dubbi, un Advisor
                ti risponde con sincerità, senza impegno.
              </p>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-7 inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors active:scale-[0.98]"
              >
                Fai il primo passo
                <ArrowRight size={14} />
              </a>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-brand-navy/60 font-bold">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-accent transition-colors"
                >
                  <MessageCircle size={14} /> Scrivici su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
