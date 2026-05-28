import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  GraduationCap,
  Sparkles,
  MessageCircle,
  PlayCircle,
  Users,
  Target,
  Handshake,
  BriefcaseBusiness,
  BadgeCheck
} from 'lucide-react';
import { coursesContent } from '../constants/coursesContent';
import { CourseImage } from '../components/CourseImage';
import { TestimonialsSection } from '../components/TestimonialsSection';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

/* 1. HERO */
const Hero = () => (
  <section className="relative bg-[#F2F7FF] overflow-hidden pb-6 lg:pb-0">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.08fr_0.92fr] gap-0 lg:gap-10 items-end min-h-0 lg:min-h-[500px]">
      <div className="relative lg:hidden -mx-4 sm:-mx-6">
        <img
          src="/home/hero-people.png"
          alt="Coach Asterys"
          className="w-full h-auto object-contain aspect-[1512/608] object-bottom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
          <div className="inline-flex items-center gap-2 bg-[#BFD4FF] px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.12em] text-brand-navy whitespace-nowrap">
            <span className="w-2 h-2 bg-brand-accent rounded-full" />
            ICF Accreditato
          </div>
        </div>
      </div>

      <div className="pt-12 lg:pt-14 pb-0 lg:pb-10 relative z-10 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-t-[2.6rem] lg:rounded-none bg-[#F2F7FF] lg:bg-transparent -mt-8 lg:mt-0">
        <div className="hidden lg:inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-4 w-full sm:w-auto justify-center lg:justify-start">
          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
          Formazione professionale accreditata ICF
        </div>
        <h1 className="text-[2.85rem] text-center lg:text-left sm:text-[3.7rem] lg:text-[4.35rem] font-display font-black leading-[0.94] tracking-tighter mb-4 lg:mb-5 text-brand-navy">
          Dai forma alla tua{' '}
          <span className="relative inline-block">
            <span className="relative z-10">crescita professionale</span>
            <span className="absolute inset-x-[-0.06em] bottom-[0.07em] h-[0.26em] bg-[#BED5FF] -z-0 rounded-none" />
          </span>
        </h1>
        <p className="text-[12px] text-center lg:text-left lg:text-base text-brand-navy/80 mb-5 lg:mb-6 max-w-[520px] leading-relaxed mx-auto lg:mx-0">
          Percorsi in diretta per sviluppare competenze relazionali, leadership e metodo. Dalla formazione continua ai master accreditati, scegli il passo giusto per evolvere.
        </p>
        <div className="flex mb-8 lg:hidden justify-center sm:justify-start">
          <a
            href="#contatti"
            className="inline-flex items-center justify-center bg-[#0F2E9D] text-white rounded-full px-8 py-4 text-[11px] font-black uppercase tracking-[0.1em]"
          >
            SCOPRI I CORSI
          </a>
        </div>
        <ul className="space-y-2 lg:space-y-2.5 mb-5 lg:mb-7 text-[12px] lg:text-[14px] font-medium text-brand-navy">
          {[
            'Master, corsi brevi e formazione continua per professionisti',
            'Lezioni live, pratica guidata e confronto con trainer esperti',
            'Metodo Asterys Lab: concreto, sistemico e orientato alla crescita'
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-brand-accent font-black mt-0.5">→</span>
              {b}
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex -space-x-2">
            {[
              '/testimonials/people/alessandro-stocco.jpeg',
              '/testimonials/people/costanza-catapano.jpeg',
              '/testimonials/people/damiano-zanotti.jpeg',
              '/testimonials/people/camilla-pedrazzini.jpeg'
            ].map((src) => (
              <img
                key={src}
                src={src}
                className="w-9 h-9 rounded-full border-2 border-[#F2F7FF] object-cover"
                alt="Alumni Asterys Lab"
              />
            ))}
          </div>
          <p className="text-[12px] text-brand-navy">
            <span className="font-black">+3.000 persone</span> già formate
          </p>
        </div>
      </div>

      <div className="relative self-end h-full items-end justify-center lg:justify-end hidden lg:flex">
        <div className="absolute right-[-36%] bottom-0 w-[calc(113vw-135px)] max-w-[1690px] min-w-[1170px] translate-x-[15px]">
          <img
            src="/home/hero-people.png"
            alt="Coach Asterys"
            className="block w-full h-auto object-contain object-bottom lg:origin-bottom-right"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

/* 2. ACCREDITAMENTI ICF */
const accreditamentiItems = [
  {
    label: 'ICF',
    title: 'International Coaching Federation',
    logo: 'brand/icf.png',
    desc: "La più importante associazione mondiale del coaching: definisce competenze chiave, codice etico e standard professionali riconosciuti a livello globale. Essere accreditati ICF significa aderire a un metodo verificato e a una comunità internazionale di coach.",
  },
  {
    label: 'Level 1',
    title: 'ICF Level 1 — Accredited Coaching Education',
    logo: 'brand/icf-level-1.png',
    desc: "L'accreditamento ICF di base per le scuole di coaching: certifica un programma con ore di formazione, pratica e mentor coaching, propedeutico alla credenziale ACC (Associate Certified Coach). Il primo passo per diventare coach professionista riconosciuto.",
  },
  {
    label: 'Level 2',
    title: 'ICF Level 2 — Accredited Coaching Education',
    logo: 'brand/icf-level-2.png',
    desc: "L'accreditamento ICF avanzato: prepara alla credenziale PCC (Professional Certified Coach), con più ore di formazione, pratica supervisionata e mentor coaching. Il livello dedicato a chi vuole esercitare il coaching come professione stabile e qualificata.",
  },
  {
    label: 'CCE',
    title: 'Continuing Coach Education',
    logo: 'brand/icf-cce-new.png',
    desc: "I crediti di formazione continua ICF necessari per rinnovare le credenziali: ogni coach accreditato matura CCE partecipando a corsi e workshop qualificati. Sono lo strumento per tenere viva, aggiornata e in evoluzione la propria pratica.",
  },
  {
    label: 'AATC',
    title: 'Advanced Accreditation in Team Coaching',
    logo: 'brand/icf-aatc.png',
    desc: "L'accreditamento ICF dedicato al team coaching: certifica programmi formativi che preparano coach a lavorare con team e organizzazioni secondo gli standard internazionali specifici per il coaching di squadra.",
  },
];

const MobileQuickNav = () => (
  <div className="lg:hidden sticky top-14 z-30 bg-white/95 backdrop-blur border-y border-brand-navy/10">
    <div className="px-4 py-2.5 flex gap-2 overflow-x-auto no-scrollbar">
      {[
        { href: '#percorsi', label: 'Percorsi' },
        { href: '#testimonianze', label: 'Testimonianze' },
        { href: '#perche-noi', label: 'Perché noi' },
        { href: '#catalogo', label: 'Catalogo' }
      ].map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="shrink-0 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-brand-navy"
        >
          {item.label}
        </a>
      ))}
    </div>
  </div>
);

const Accreditamenti = () => {
  const items = accreditamentiItems;
  const [active, setActive] = useState(0);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    const t = window.setInterval(() => {
      setActive((a) => (a + 1) % items.length);
    }, 6500);
    return () => window.clearInterval(t);
  }, [items.length]);

  const current = items[active];
  const go = (d: number) =>
    setActive((a) => (a + d + items.length) % items.length);

  return (
    <section className="bg-[#001D4B] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-14 lg:py-16">
        <div className="grid lg:grid-cols-[240px_1fr] items-center gap-10 lg:gap-16 min-h-[280px] lg:min-h-[240px]">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start h-[160px] lg:h-[180px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.logo}
                src={`${base}${current.logo}`}
                alt={current.label}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className="h-28 sm:h-32 lg:h-40 w-auto object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Descrizione */}
          <div className="text-center lg:text-left min-h-[180px] lg:min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-display font-black tracking-tight leading-tight mb-4">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Accreditamento precedente"
            onClick={() => go(-1)}
            className="w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex items-center gap-2">
            {items.map((it, i) => (
              <button
                key={it.label}
                type="button"
                aria-label={`Vai a ${it.label}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  active === i ? 'w-8 bg-[#BFD4FF]' : 'w-2 bg-white/20 hover:bg-white/35'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Accreditamento successivo"
            onClick={() => go(1)}
            className="w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* 3. SCEGLI IL PERCORSO */
const ScegliPercorso = () => {
  const features = [
    { icon: Handshake, title: 'Tutoring costante e dedicato' },
    { icon: BriefcaseBusiness, title: 'Supporto alla carriera incluso' },
    { icon: BadgeCheck, title: 'Credenziali internazionali ICF' }
  ];
  return (
    <section id="percorsi" className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className={`${tSection} mb-4`}>Scegli il percorso giusto per te</h2>
          <p className="text-brand-navy/70 text-base leading-relaxed">
            Master professionalizzanti 100% blended, completi e in diretta per imparare da zero tutto ciò di cui hai bisogno per evolvere la tua carriera.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-[900px] mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-row sm:flex-col items-center sm:text-center gap-3 p-4 rounded-2xl bg-[#F5F8FF] sm:bg-transparent"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-soft flex items-center justify-center">
                <f.icon className="text-brand-accent" size={22} strokeWidth={2} />
              </div>
              <p className="text-sm font-black text-brand-navy tracking-tight leading-snug">
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 4. MASTER FEATURED (APCM) */
const MasterFeatured = () => (
  <section className="bg-white pb-5">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
      <Link to="/corsi/apcm" className="block group">
        <div className="grid sm:grid-cols-[1fr_1fr] gap-4 sm:gap-6 rounded-[1.5rem] sm:rounded-[2rem] bg-white p-3 sm:p-4 border border-gray-100 shadow-[0_18px_60px_-34px_rgba(0,21,51,0.22)] hover:shadow-[0_24px_72px_-30px_rgba(0,21,51,0.3)] transition-shadow">
          <div className="relative aspect-[5/4] sm:aspect-auto rounded-2xl overflow-hidden bg-gray-100 min-h-[260px]">
            <CourseImage
              src="/course-media/apcm/card.png"
              fallbackSrc="https://picsum.photos/seed/apcm-master/900/700"
              alt="Master Professione Coach"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-[#BFD4FF] text-brand-navy px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-[0.22em] shadow-sm">
              Master
            </span>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-5 justify-center">
            <h3 className="text-[1.65rem] lg:text-[2.25rem] font-display font-black text-brand-accent leading-[1.05] tracking-tight">
              Master in Coaching
            </h3>
            <div className="flex items-center gap-5 text-[11px] text-brand-accent font-bold uppercase tracking-[0.18em]">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> 3-8 mesi
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> In diretta
              </span>
            </div>
            <p className="text-sm lg:text-base text-brand-navy/75 leading-relaxed">
              Lancia una nuova carriera da zero con supporto costante e una full-immersion nelle competenze di coaching ICF Level 1 & 2.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#E8F5EC] text-brand-navy px-3.5 py-2 rounded-lg self-start">
              <CheckCircle2 size={16} className="text-[#008060]" />
              <span className="text-[13px] font-black tracking-tight">
                Garanzia di rimborso entro 30 ore
              </span>
            </div>
            <div className="flex items-center justify-end mt-2">
              <span className="text-brand-accent font-black text-[11px] uppercase tracking-[0.22em] flex items-center gap-1 group-hover:gap-2 transition-all">
                Scopri <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </section>
);

/* 5. MASTER GRID */
const MasterGrid = () => {
  const masters = [
    {
      id: 'systemic-team-coaching',
      title: 'Asterys Systemic Team Coaching',
      duration: '54 ore · 60 CCE',
      label: 'Master',
      desc: "Master ICF per apprendere il modello ASTC di coaching sistemico dei team. Prerequisito per la credenziale ACTC.",
      start: '6 ottobre 2026',
      lastSeats: false,
      seed: 'stc',
      image: 'card.jpg'
    },
    {
      id: 'eiw',
      title: 'Emotional Intelligence Workout',
      duration: 'Round · 4 CCE',
      label: 'Corso Breve',
      desc: "Allena l'IE con esperienze consapevoli: modello CSI, fiore di Plutchik, coach dedicati.",
      start: 'Prossimo Round',
      lastSeats: true,
      seed: 'eiw'
    },
    {
      id: 'coaching-circle',
      title: 'Coaching Circle',
      duration: '3,30 ore · Gruppi da 4',
      label: 'Specializzazione',
      desc: 'Pratica supervisionata di coaching con un mentor-coach professionista: feedback immediato e confronto tra pari.',
      start: 'Data condivisa nel gruppo',
      lastSeats: false,
      seed: 'coaching-circle'
    },
    {
      id: 'voice-dialogue',
      title: 'Voice Dialogue Skills',
      duration: '3 giornate · In aula',
      label: 'Specializzazione',
      desc: 'Laboratorio intensivo per integrare il Voice Dialogue nella pratica di coaching, con Lab online su piattaforma Inner.',
      start: '17 novembre 2026',
      lastSeats: false,
      seed: 'voice-dialogue'
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      duration: '1 live class/mese',
      label: 'Corso Breve',
      desc: 'Formazione continua per coach e alumni: incontri Zoom mensili interattivi (18:30–20:00), tutto l’anno tranne agosto.',
      start: '14 gennaio 2026',
      lastSeats: false,
      seed: 'continuous-learning',
      image: 'card.jpg'
    },
    
  ];
  return (
    <section className="bg-white pt-3 pb-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-5">
          {masters.map((m) => (
            <Link
              key={m.id}
              to={`/corsi/${m.id}`}
              className="group bg-white border border-gray-100 rounded-[1.4rem] sm:rounded-[2rem] p-3.5 sm:p-4 shadow-[0_12px_40px_-28px_rgba(0,21,51,0.2)] hover:shadow-[0_18px_55px_-28px_rgba(0,21,51,0.32)] transition-shadow flex flex-col"
            >
              <div className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-gray-100">
                <CourseImage
                  src={`/course-media/${m.id}/${m.image ?? 'card.png'}`}
                  fallbackSrc={`https://picsum.photos/seed/${m.seed}/700/400`}
                  alt={m.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-brand-accent text-white px-3 py-1.5 rounded-md text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">
                  {m.label}
                </span>
              </div>
              <div className="px-2 sm:px-3 pt-5 pb-3 flex flex-col gap-3 flex-1">
                <h3 className="text-lg lg:text-2xl font-display font-black text-brand-accent leading-tight">
                  {m.title}
                </h3>
                <div className="flex items-center gap-5 text-[11px] text-brand-accent font-bold uppercase tracking-[0.16em]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {m.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} /> In diretta
                  </span>
                </div>
                <p className="text-sm text-brand-navy/75 leading-relaxed">{m.desc}</p>
                <div className="flex items-end justify-between mt-auto pt-4 gap-3">
                  <div>
                    <p className="text-[11px] text-brand-navy/60 font-semibold mb-1">
                      Prossima classe in partenza
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-display font-black text-brand-navy">
                        {m.start}
                      </span>
                      {m.lastSeats && (
                        <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#1D62E8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1D62E8] animate-pulse" />
                          Ultimi posti
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full bg-[#142E9F] text-white px-4 py-2 text-[10px] uppercase tracking-[0.18em] font-black gap-1 group-hover:brightness-110 transition-all pb-0.5">
                    Scopri <ArrowUpRight size={13} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <Link
            to="/corsi"
            className="group rounded-[1.4rem] sm:rounded-[2rem] bg-[linear-gradient(135deg,#1D3BB9_0%,#0047FF_100%)] p-6 sm:p-8 flex flex-col justify-center text-white relative overflow-hidden"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#BFD4FF] mb-3">
              Nuove competenze in poche settimane
            </p>
            <h3 className="text-2xl lg:text-[1.75rem] font-display font-black leading-tight mb-3">
              Cerchi un corso breve?
            </h3>
            <p className="text-sm text-white/80 mb-5 leading-relaxed max-w-sm">
              Scopri i corsi brevi, pratici, in diretta con chi ti può guidare passo dopo passo.
            </p>
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#BFD4FF] group-hover:gap-3 transition-all">
              Scopri <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* 6. ADVISOR BAND */
const AdvisorBand = () => (
  <section className="py-12 lg:py-14 bg-[#D5DCFB]">
    <div className="max-w-[1200px] mx-auto px-6 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
        <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-navy tracking-tight">
          Vuoi parlare con noi?
        </h2>
        <div className="flex -space-x-2">
          {[
            '/advisors/advisor-1.png',
            '/advisors/advisor-2.png',
            '/advisors/advisor-3.jpeg'
          ].map((src) => (
            <img
              key={src}
              src={src}
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
              alt="Advisor Asterys Lab"
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-brand-navy/75 mb-5">
        I nostri advisor risponderanno a tutte le tue domande.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#contatti"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.22em] shadow-md hover:brightness-110 transition-all"
        >
          <MessageCircle size={16} /> Scrivici
        </a>
        <span className="text-xs text-brand-navy/70">
          Oppure chiamaci al{' '}
          <a href="tel:+393498864895" className="font-black text-brand-navy underline">
            +39 349 886 4895
          </a>
        </span>
      </div>
    </div>
  </section>
);

/* 8. PERCHÉ SCEGLIERE NOI */
const PercheNoi = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Metodo pratico e aggiornato',
      desc: 'Ogni percorso è costruito su casi reali: eserciti le competenze su situazioni concrete per arrivare preparato al primo cliente.'
    },
    {
      icon: PlayCircle,
      title: 'Lezioni in diretta e interattive',
      desc: 'Niente corsi pre-registrati. Fai parte di una classe: interagisci con i docenti, chiedi feedback, metti in pratica subito.'
    },
    {
      icon: Users,
      title: 'Docenti certificati ICF',
      desc: 'I tuoi trainer sono Master Coach attivi sul campo: condividono conoscenze pratiche e il loro modo di lavorare.'
    },
    {
      icon: GraduationCap,
      title: 'Alta formazione accessibile',
      desc: 'Scegli come investire: rateizzazione fino a 24 mesi e piani pensati per chi vuole crescere senza compromessi.'
    }
  ];
  return (
    <section id="perche-noi" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className={`${tSection} mb-12 max-w-2xl`}>Perché scegliere i nostri percorsi?</h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-brand-blue-soft flex items-center justify-center">
                <r.icon className="text-brand-accent" size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-black text-brand-navy mb-2">{r.title}</h3>
                <p className="text-sm text-brand-navy/70 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 9. STATS BAND MINT */
const StatsBand = () => (
  <section className="bg-[#C4F4DB]">
    <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-x-16 gap-y-2 text-center">
      <p className="text-sm lg:text-base font-display font-black text-brand-navy tracking-[0.08em] uppercase">
        Credenziali Internazionali ICF
      </p>
      <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-navy/30" />
      <p className="text-sm lg:text-base font-display font-black text-brand-navy tracking-[0.08em] uppercase">
        +3.000 persone hanno cambiato carriera
      </p>
    </div>
  </section>
);

/* 10. COSA STAI ASPETTANDO */
const CorsiCta = () => {
  const ids = Object.keys(coursesContent);
  return (
    <section id="catalogo" className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <h2 className={`${tSection} mb-5`}>
            Cosa stai <br />
            aspettando?
          </h2>
          <p className="text-base text-brand-navy/70 leading-relaxed">Scegli il tuo percorso.</p>
        </div>
        <ul className="space-y-3">
          {ids.map((id) => {
            const c = coursesContent[id];
            const isMaster = c.type.toLowerCase().includes('master') || c.type.toLowerCase().includes('level');
            return (
              <li key={id}>
                <Link
                  to={`/corsi/${id}`}
                  className="flex items-center justify-between gap-4 bg-[#F4F6FB] hover:bg-brand-blue-soft rounded-2xl pl-4 pr-5 py-3 transition-colors group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      {isMaster ? (
                        <GraduationCap className="text-brand-accent" size={18} strokeWidth={2} />
                      ) : (
                        <Sparkles className="text-brand-accent" size={18} strokeWidth={2} />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[15px] font-black text-brand-navy leading-tight truncate">
                        {c.title}
                      </p>
                      <p className="text-[11px] text-brand-navy/60 mt-0.5 uppercase tracking-wide font-bold">
                        {c.type}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="text-brand-navy/40 group-hover:text-brand-accent transition-colors shrink-0"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <MobileQuickNav />
      <Accreditamenti />
      <ScegliPercorso />
      <MasterFeatured />
      <MasterGrid />
      <AdvisorBand />
      <TestimonialsSection />
      <PercheNoi />
      <StatsBand />
      <CorsiCta />
    </>
  );
}
