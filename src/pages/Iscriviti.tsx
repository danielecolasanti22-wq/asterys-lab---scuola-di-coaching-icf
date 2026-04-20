import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Phone,
  Star,
  PlayCircle,
} from 'lucide-react';
import { coursesContent } from '../constants/coursesContent';

const steps = [
  { n: 1, title: 'Compila il form', desc: 'e raccontaci chi sei' },
  { n: 2, title: 'Troviamo il percorso', desc: 'più adatto a te' },
  { n: 3, title: 'Completa l\'iscrizione', desc: 'ed entra in classe' },
];

const upcomingClasses = [
  { course: 'Master APCM · Milano', date: '12 maggio 2026', note: 'ULTIMI POSTI DISPONIBILI', highlight: true },
  { course: 'Master APCM · Roma', date: '19 maggio 2026', note: 'Termine candidature: 5 maggio' },
  { course: 'Team Coaching Sistemico', date: '10 giugno 2026', note: 'PROSSIMA EDIZIONE', highlight: true },
  { course: 'Manager come Coach', date: 'Ottobre 2026', note: 'Convenzioni aziendali' },
  { course: 'Intelligenza Emotiva (EIW)', date: 'Settembre 2026', note: 'APERTE LE ISCRIZIONI', highlight: true },
];

const testimonials = [
  { name: 'Giulia', role: 'APCM · Ed. 2023', img: 'https://picsum.photos/seed/apcm-g/400/500' },
  { name: 'Marco', role: 'APCM · Ed. 2022', img: 'https://picsum.photos/seed/apcm-m/400/500' },
  { name: 'Laura', role: 'Team Coach · 2024', img: 'https://picsum.photos/seed/apcm-l/400/500' },
  { name: 'Andrea', role: 'Prosperous Coach', img: 'https://picsum.photos/seed/apcm-a/400/500' },
  { name: 'Silvia', role: 'APCM · Ed. 2024', img: 'https://picsum.photos/seed/apcm-s/400/500' },
];

const courseOptions = Object.entries(coursesContent).map(([id, c]) => ({
  id,
  label: c.subtitle ? `${c.subtitle} — ${c.title.split('(')[0].trim()}` : c.title,
}));

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.terms || !form.course || !form.firstName || !form.lastName || !form.phone || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-brand-navy">
      {/* FORM HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-soft/70 via-brand-blue-soft/60 to-[#1D3BB9]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-14 lg:py-20 relative">
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

          {/* segmented toggle */}
          <div className="max-w-[560px] mx-auto">
            <div className="bg-white rounded-full p-1 flex items-center shadow-sm">
              <button className="flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-brand-navy bg-brand-blue-soft">
                Master
              </button>
              <button className="flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-brand-navy/55">
                Corsi Skill
              </button>
            </div>
          </div>

          {/* card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="max-w-[560px] mx-auto mt-6 bg-white rounded-3xl shadow-[0_30px_80px_-30px_rgba(29,59,185,0.45)] p-7 sm:p-10"
          >
            <h1 className="text-center text-2xl sm:text-[1.75rem] font-display font-black tracking-tighter leading-[1.1]">
              Percorsi formativi completi e
              <br className="hidden sm:block" />
              {' '}professionalizzanti.
            </h1>
            <p className="text-center text-sm text-brand-navy/60 mt-3 font-medium">
              Inizia il processo di ammissione gratis e senza impegno.
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
                  Richiesta inviata con successo!
                </h2>
                <p className="text-sm text-brand-navy/70 font-medium max-w-sm">
                  Un advisor Asterys ti contatterà entro 24 ore lavorative per un colloquio
                  conoscitivo gratuito e senza impegno.
                </p>
                <Link
                  to="/corsi"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-accent"
                >
                  Esplora gli altri percorsi <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-xs font-black text-brand-navy tracking-tight mb-1.5">
                    Quale Master ti interessa? <span className="text-brand-accent">•</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={form.course}
                      onChange={(e) => setForm({ ...form, course: e.target.value })}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 pr-10 text-sm font-medium text-brand-navy focus:outline-none focus:border-brand-accent"
                    >
                      <option value="" disabled>
                        Scegli...
                      </option>
                      {courseOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy/50 pointer-events-none"
                    />
                  </div>
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-accent"
                    />
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
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 focus-within:border-brand-accent">
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
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-navy placeholder:text-brand-navy/40 focus:outline-none focus:border-brand-accent"
                    />
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
                  <a href="#" className="underline hover:text-brand-accent">
                    termini e condizioni
                  </a>
                </label>

                <button
                  type="submit"
                  className="mt-2 bg-brand-navy text-white py-4 rounded-full text-xs font-black uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors active:scale-[0.99]"
                >
                  Inizia ora
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* UPCOMING CLASSES */}
      <section className="bg-[#1D3BB9] text-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter">
            Puoi iniziare quando vuoi
          </h2>
          <p className="mt-4 text-base text-white/85 max-w-[640px] font-medium leading-relaxed">
            Ogni mese partono diverse classi dei nostri percorsi: scegli tu la data migliore per te.
            In pochi mesi daremo una svolta definitiva alla tua carriera. La tua classe ti sta aspettando!
          </p>
          <p className="mt-2 text-xs text-white/55 font-medium">
            Non trovi la data giusta per te? Portati avanti e inizia il processo di ammissione per le classi che partiranno in futuro.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {upcomingClasses.map((c) => (
              <div
                key={c.course + c.date}
                className="bg-white/5 hover:bg-white/10 transition-colors rounded-2xl border border-white/10 p-5"
              >
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/70">
                  {c.course}
                </p>
                <p className="mt-3 flex items-center gap-2 text-2xl font-display font-black tracking-tight">
                  <ArrowRight size={18} /> {c.date}
                </p>
                <p
                  className={`mt-1 text-[11px] font-black uppercase tracking-[0.18em] ${
                    c.highlight ? 'text-[#E2FF3B]' : 'text-white/55'
                  }`}
                >
                  {c.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT STORIES */}
      <section className="bg-brand-blue-soft/60">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter text-brand-navy">
            Un'esperienza che ti cambia la vita
          </h2>
          <p className="mt-4 text-base text-brand-navy/75 font-medium max-w-[640px] leading-relaxed">
            Oltre 3.000 coach ci hanno già scelto — nessuno meglio di loro può raccontarti perché
            Asterys è il percorso più sicuro se vuoi mettere le basi giuste per una carriera nel coaching.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/85 flex items-center justify-center text-brand-navy group-hover:bg-white transition-colors">
                    <PlayCircle size={26} />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-sm font-black tracking-tight">{t.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]">
              <img
                src="https://picsum.photos/seed/iscriviti-futuro/900/700"
                alt="Il tuo futuro ti sta aspettando"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]">
                Il tuo futuro ti sta aspettando
              </h2>
              <p className="mt-5 text-base text-brand-navy/75 font-medium leading-relaxed max-w-[480px]">
                Compila il form e inizia il processo di ammissione: costruiamo insieme la tua nuova
                carriera di coach, con metodo e con una community che non ti lascia solo.
              </p>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-7 inline-flex items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors active:scale-[0.98]"
              >
                Compila il form
                <ArrowRight size={14} />
              </a>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-brand-navy/60 font-bold">
                <div className="flex items-center gap-2">
                  <div className="flex text-brand-accent gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  Trustpilot 4.7 Eccellente
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={14} /> Scrivici su WhatsApp
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} /> +39 02 1234 5678
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
