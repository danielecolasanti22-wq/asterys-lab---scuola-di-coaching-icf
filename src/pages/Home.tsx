import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappHref } from '../utils/whatsapp';
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
  BadgeCheck,
  Dumbbell,
  Radio,
  Wallet,
  Brain,
  Mic,
  Megaphone,
  AudioLines,
  RefreshCw,
  MessagesSquare
} from 'lucide-react';
import { coursesContent } from '../constants/coursesContent';
import Img, { imgAttrs } from '../components/Img';
import { CourseImage } from '../components/CourseImage';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Highlight } from '../components/Highlight';
import { autoHighlight } from '../utils/highlight';
import { HOME_FAQ as faqItems } from '../constants/homeFaq';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

/** Immagine "persone" dell'hero desktop.
 *  TEST candidati nuovi: aggiungi `?hero=42` … `?hero=49` (o `?hero=original`) all'URL della home.
 *  Senza parametro resta il default attuale. I file sono in public/home/candidates/. */
const HERO_PEOPLE_SRC = (() => {
  if (typeof window === 'undefined') return '/home/hero-people.png';
  const c = new URLSearchParams(window.location.search).get('hero');
  return c ? `/home/candidates/${c}.png` : '/home/hero-people.png';
})();

/* 1. HERO */
const Hero = () => (
  <section className="relative bg-brand-hero overflow-hidden pb-6 lg:pb-0">
    {/* Gradiente metallico sul fondo hero: spazzata diagonale dal blu scuro (alto-sx)
        all'acciaio più chiaro (basso-dx, dietro le persone). Bande nette = effetto
        metallico, non nuvoloso; il punto di massima luce resta sull'angolo, quindi
        non si vede un "faro" d'origine. */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,#00091c_0%,#001a45_16%,#143f7a_42%,#2c63a8_64%,#4a82cc_84%,#5d90d8_100%)]"
    />
    <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.08fr_0.92fr] gap-0 lg:gap-10 items-end min-h-0 lg:min-h-[500px]">
      {/* I due hero (mobile e desktop) si escludono a vicenda via CSS, ma restano entrambi nel
          DOM. Lasciandoli in caricamento differito il browser scarica solo quello che si vede
          davvero: prima li prendeva tutti e due, sprecando l'altro a ogni visita. */}
      <div className="relative lg:hidden -mx-4 sm:-mx-6">
        <Img
          src="/home/hero-mobile.jpg"
          alt="Community di coach Asterys Lab"
          sizes="100vw"
          className="w-full aspect-[16/10] object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
          <div className="inline-flex items-center gap-2 bg-[#CFE0F5] px-4 py-2 rounded-full text-[8px] font-black uppercase tracking-[0.1em] text-brand-navy whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
            Il partner per lo sviluppo delle tue risorse
          </div>
        </div>
      </div>

      <div className="pt-16 lg:pt-14 pb-0 lg:pb-10 relative z-10 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-t-[2.6rem] lg:rounded-none bg-brand-hero lg:bg-transparent -mt-8 lg:mt-0">
        <div className="hidden lg:inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-4 w-full sm:w-auto justify-center lg:justify-start">
          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
          Il partner per lo sviluppo delle tue risorse
        </div>
        <h1 className="text-[2.85rem] text-center lg:text-left sm:text-[3.7rem] lg:text-[4.35rem] font-display font-black leading-[0.94] tracking-tighter mb-4 lg:mb-5 text-white">
          Dai impulso alla tua{' '}
          <Highlight className="text-brand-sky">crescita personale</Highlight>
        </h1>
        <p className="text-[12px] text-center lg:text-left lg:text-base text-white/80 mb-5 lg:mb-6 max-w-[520px] leading-relaxed mx-auto lg:mx-0">
          Trasforma la tua passione per le persone in una nuova professione: impara a generare un cambiamento reale in chi hai di fronte e porta la tua carriera a un nuovo livello.
        </p>
        <div className="flex mb-8 lg:hidden justify-center sm:justify-start">
          <Link
            to="/corsi"
            className="inline-flex items-center justify-center bg-[#2A56A8] text-white rounded-full px-8 py-4 text-[11px] font-black uppercase tracking-[0.1em]"
          >
            SCOPRI I CORSI
          </Link>
        </div>
        <ul className="space-y-2 lg:space-y-2.5 mb-5 lg:mb-7 text-[12px] lg:text-[14px] font-medium text-white">
          {[
            'Le competenze per far crescere persone, team e organizzazioni',
            'Credenziali ICF riconosciute a livello internazionale',
            'La sicurezza e il supporto per arrivare pronto al tuo primo cliente'
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-brand-sky font-black mt-0.5">→</span>
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
              <Img
                key={src}
                src={src}
                sizes="36px"
                className="w-9 h-9 rounded-full border-2 border-brand-hero object-cover"
                alt="Alumni Asterys Lab"
              />
            ))}
          </div>
          <p className="text-[12px] text-white">
            <span className="font-black">+3.000 persone</span> già formate
          </p>
        </div>
      </div>

      <div className="relative self-end h-full items-end justify-center lg:justify-end hidden lg:flex">
        <div className="absolute right-[-33%] bottom-0 w-[calc(104vw-135px)] max-w-[1560px] min-w-[1080px] translate-x-[15px]">
          <Img
            src={HERO_PEOPLE_SRC}
            alt="Coach Asterys Lab"
            sizes="(max-width: 1024px) 0px, 104vw"
            className="hero-figure block w-full h-auto object-contain object-bottom lg:origin-bottom-right"
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
    label: 'Level 1',
    title: 'ICF Level 1 — Accredited Coaching Education',
    logo: 'brand/icf-level-1.png',
    desc: "L'accreditamento ICF di base per le scuole di coaching: attesta un programma con ore di formazione, pratica e mentor coaching, propedeutico alla credenziale ACC (Associate Certified Coach). Il primo passo per diventare coach professionista riconosciuto.",
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
    desc: "L'accreditamento ICF dedicato al team coaching: attesta programmi formativi che preparano coach a lavorare con team e organizzazioni secondo gli standard internazionali specifici per il coaching di squadra.",
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
    <section className="relative bg-[#EEF4FC] text-brand-navy">
      <div className="relative max-w-[var(--wrap-max)] mx-auto px-6 py-12 lg:py-14">
        {/* Arrows on the sides */}
        <button
          type="button"
          aria-label="Accreditamento precedente"
          onClick={() => go(-1)}
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-brand-navy/15 text-brand-navy/55 hover:text-brand-navy hover:border-brand-navy/40 hover:bg-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          aria-label="Accreditamento successivo"
          onClick={() => go(1)}
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-brand-navy/15 text-brand-navy/55 hover:text-brand-navy hover:border-brand-navy/40 hover:bg-white flex items-center justify-center transition-colors"
        >
          <ChevronRight size={16} />
        </button>

        <div className="grid lg:grid-cols-[200px_1fr] items-center gap-8 lg:gap-14 min-h-[400px] lg:min-h-[170px] px-9 sm:px-12">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start h-[130px] lg:h-[150px]">
            <AnimatePresence mode="wait">
              {/* Resta <motion.img> (dev'essere lui l'elemento animato), ma prende da
                  imgAttrs le stesse varianti di <Img>: i badge sono file da 1600px e qui
                  si vedono a 128, quindi senza srcSet il carosello scaricava mezzo mega
                  di PNG per mostrarli grandi come un'icona. */}
              <motion.img
                key={current.logo}
                {...imgAttrs(`${base}${current.logo}`, '128px')}
                src={`${base}${current.logo}`}
                alt={current.label}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className="h-24 sm:h-28 lg:h-32 w-auto object-contain"
              />
            </AnimatePresence>
          </div>

          {/* Descrizione */}
          <div className="text-center lg:text-left min-h-[230px] lg:min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-display font-black tracking-tight leading-tight mb-3">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-navy/70 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {items.map((it, i) => (
            <button
              key={it.label}
              type="button"
              aria-label={`Vai a ${it.label}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                active === i ? 'w-8 bg-[#2A56A8]' : 'w-2 bg-brand-navy/20 hover:bg-brand-navy/35'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* 3. SCEGLI IL PERCORSO */
const ScegliPercorso = () => {
  const features = [
    { icon: Handshake, title: 'Un coach al tuo fianco fino alla fine' },
    { icon: BriefcaseBusiness, title: 'Ti accompagniamo fino al primo cliente' },
    { icon: BadgeCheck, title: 'Credenziali ICF spendibili ovunque' }
  ];
  return (
    <section id="percorsi" className="py-14 lg:py-20 bg-white">
      <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className={`${tSection} mb-4`}>Scegli il percorso che ti porta dove vuoi arrivare</h2>
          <p className="text-brand-navy/70 text-base leading-relaxed">
            {autoHighlight(
              'Impari da zero tutto ciò che serve per diventare coach e portare la tua carriera a un nuovo livello. Percorsi 100% blended e in diretta, con lezioni online e in presenza a Milano e Roma.',
              new Set<string>(),
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-[900px] mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-row sm:flex-col items-center sm:text-center gap-3 p-4 rounded-2xl bg-[#EEF4FC] sm:bg-transparent"
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
  <section className="hidden lg:block bg-white pb-5">
    <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
      <Link to="/corsi/apcm" className="block group">
        <div className="grid sm:grid-cols-[1fr_1fr] gap-4 sm:gap-6 rounded-[1.5rem] sm:rounded-[2rem] bg-white p-3 sm:p-4 border border-gray-100 shadow-[0_18px_60px_-34px_rgba(0,21,51,0.22)] hover:shadow-[0_24px_72px_-30px_rgba(0,21,51,0.3)] transition-shadow">
          <div className="relative aspect-[5/4] sm:aspect-auto rounded-2xl overflow-hidden bg-gray-100 min-h-[260px]">
            <CourseImage
              src="/course-media/apcm/card.png"
              fallbackSrc="https://picsum.photos/seed/apcm-master/900/700"
              alt="Master Professione Coach"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-[#CFE0F5] text-brand-navy px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-[0.22em] shadow-sm">
              Master
            </span>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-5 justify-center">
            <h3 className="text-[1.65rem] lg:text-[2.25rem] font-display font-black text-brand-accent leading-[1.05] tracking-tight">
              Master in Coaching
            </h3>
            <div className="flex items-center gap-5 text-[11px] text-brand-accent font-bold uppercase tracking-[0.18em]">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> 6–12 mesi
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> In diretta
              </span>
            </div>
            <p className="text-sm lg:text-base text-brand-navy/75 leading-relaxed">
              Diventi coach da zero e arrivi pronto al primo cliente: supporto costante e una full-immersion nelle competenze di coaching accreditate ICF Level 1 & 2.
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
      id: 'apcm',
      title: 'Master in Coaching',
      duration: '6–12 mesi',
      label: 'Master',
      desc: 'Diventi coach da zero e arrivi pronto al primo cliente: supporto costante e una full-immersion nelle competenze accreditate ICF Level 1 & 2.',
      start: 'Più edizioni 2026',
      lastSeats: false,
      seed: 'apcm-master',
      image: 'card.png'
    },
    {
      id: 'systemic-team-coaching',
      title: 'Team Coaching Sistemico',
      duration: '60 ore · 54 CCE',
      label: 'Master',
      desc: "Impari a portare team e leader a risultati straordinari con il modello sistemico. Requisito per la credenziale ACTC.",
      start: '6 ottobre 2026',
      lastSeats: false,
      seed: 'stc',
      image: 'card.jpg'
    },
    {
      id: 'eiw',
      title: 'Intelligenza Emotiva',
      duration: '4 Workout live · 4 CCE',
      label: 'Corso Breve',
      desc: "Impari a riconoscere e usare le tue emozioni per relazioni più efficaci, con esperienze pratiche e coach dedicati.",
      start: 'Prossimo Round',
      lastSeats: true,
      seed: 'eiw'
    },
    {
      id: 'coaching-circle',
      title: 'Mentoring per il rinnovo delle credenziali',
      duration: '10 ore per il rinnovo · gruppo o individuale',
      label: 'Formazione avanzata',
      desc: 'Ottieni le 10 ore di mentor coaching che ti servono per rinnovare la credenziale ICF: Gruppo (7h) e/o Individuale (3h), con un Mentor Coach MCC.',
      start: 'Edizione di gruppo: 29 set e 10 dic 2026',
      lastSeats: false,
      seed: 'coaching-circle'
    },
    {
      id: 'voice-dialogue',
      title: 'Voice Dialogue Skills',
      duration: '3 giornate · In presenza',
      label: 'Formazione avanzata',
      desc: 'Integri il Voice Dialogue nella tua pratica e ampli ciò che riesci a far emergere nei clienti, con Laboratorio Virtuale online.',
      start: '17 novembre 2026',
      lastSeats: false,
      seed: 'voice-dialogue'
    },
    {
      id: 'marketing-per-coach',
      title: 'Personal Branding per Coach',
      duration: '5 incontri online · con Helga Ogliari',
      label: 'Formazione avanzata',
      desc: 'Costruisci un personal brand da coach riconoscibile e attira i clienti giusti: dal posizionamento allo storytelling all’acquisizione clienti.',
      start: 'Novembre 2026',
      lastSeats: false,
      seed: 'marketing-per-coach',
      image: 'card.png'
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      duration: '1 incontro online/mese',
      label: 'Corso Breve',
      desc: 'Tieni viva e aggiornata la tua pratica di coach, con incontri Zoom mensili interattivi (18:30–20:00), tutto l’anno tranne agosto.',
      start: 'Inizi quando vuoi',
      lastSeats: false,
      seed: 'continuous-learning',
      image: 'card.jpg'
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking Pro',
      duration: '3 giornate + 2 online',
      label: 'Corso Breve',
      desc: 'Diventi memorabile quando parli in pubblico: padroneggi voce, corpo ed emozioni in una full immersion pratica.',
      start: 'Da definire',
      lastSeats: false,
      seed: 'public-speaking',
      image: 'card.jpg'
    },
  ];
  return (
    <section className="bg-white pt-3 pb-16">
      <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-5">
          {masters.map((m) => (
            <Link
              key={m.id}
              to={`/corsi/${m.id}`}
              className={`group bg-white border border-gray-100 rounded-[1.4rem] sm:rounded-[2rem] p-3.5 sm:p-4 shadow-[0_12px_40px_-28px_rgba(0,21,51,0.2)] hover:shadow-[0_18px_55px_-28px_rgba(0,21,51,0.32)] transition-shadow flex flex-col ${
                m.id === 'apcm' ? 'lg:hidden' : ''
              }`}
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
                        <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#2A56A8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2A56A8] animate-pulse" />
                          Ultimi posti
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full bg-[#2A56A8] text-white px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] font-black gap-1.5 leading-none group-hover:brightness-110 transition-all">
                    Scopri <ArrowUpRight size={13} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Card Aziende — riempie la cella dispari su desktop (dove la card Master è nascosta).
              Sfondo: mesh sistemico (immagine) + punti-costellazione, con velatura navy per la leggibilità. */}
          <Link
            to="/aziende"
            className="group hidden lg:flex relative overflow-hidden rounded-[2rem] p-7 lg:p-8 text-white flex-col bg-[linear-gradient(155deg,#001a45_0%,#00285f_55%,#0b3b7a_100%)] shadow-[0_12px_40px_-28px_rgba(0,21,51,0.2)] hover:shadow-[0_18px_55px_-28px_rgba(0,21,51,0.5)] transition-shadow"
          >
            {/* Sfondo mesh (immagine) + velatura navy a sinistra per il testo */}
            <Img
              src="/aziende/4.png"
              alt=""
              aria-hidden
              sizes="(max-width: 1024px) 0px, 620px"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right opacity-80 group-hover:opacity-90 transition-opacity"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#001a45] via-[#001a45]/75 to-[#001a45]/10" />

            <div className="relative flex flex-col flex-1 justify-between gap-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-sky">
                  Per Aziende
                </span>
                <h3 className="mt-3 text-3xl lg:text-[2.4rem] font-display font-black text-white leading-[1.04] tracking-tight max-w-[92%]">
                  Porta i nostri percorsi in azienda
                </h3>
                <p className="mt-4 text-[15px] text-white/80 leading-relaxed">
                  Entriamo nella tua azienda e portiamo i percorsi giusti alle tue persone: dal business coaching alla leadership, dal team coaching alla facilitazione del cambiamento. Progettiamo ogni intervento su misura — obiettivi, competenze e cultura — per far crescere manager e team, con un impatto che si vede davvero sui risultati.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {['Performance', 'Comunicazione nel team', 'Leadership', 'Collaborazione', 'Gestione del cambiamento'].map((s) => (
                    <span key={s} className="rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-[11px] font-bold text-white/85">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="text-[11px] text-white/55 font-semibold max-w-[55%] leading-snug">
                    Programmi su misura per micro imprese e PMI
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] font-black leading-none group-hover:gap-3 transition-all shrink-0">
                    Scopri <ArrowUpRight size={14} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* 6. ADVISOR BAND */
const AdvisorBand = () => (
  <section className="py-12 lg:py-14 bg-brand-blue-soft">
    <div className="max-w-[var(--wrap-max)] mx-auto px-6 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
        <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-navy tracking-tight">
          Vuoi capire qual è il percorso giusto per te?
        </h2>
        <div className="flex -space-x-2">
          {[
            '/advisors/advisor-1.png',
            '/advisors/advisor-2.png',
            '/advisors/advisor-3.jpeg'
          ].map((src) => (
            <Img
              key={src}
              src={src}
              sizes="36px"
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
              alt="Advisor Asterys Lab"
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-brand-navy/75 mb-5">
        Un advisor ti aiuta a scegliere il percorso più adatto ai tuoi obiettivi e risponde a ogni tua domanda, con calma e senza impegno.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
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
      icon: Dumbbell,
      title: 'Arrivi pronto al primo cliente',
      desc: 'Eserciti le competenze su casi reali e situazioni concrete: quando finisci, sai già come muoverti con un cliente vero.'
    },
    {
      icon: Radio,
      title: 'Impari facendo, in una classe vera',
      desc: 'Niente corsi pre-registrati. Fai parte di una classe: interagisci con i docenti, chiedi feedback e metti in pratica subito.'
    },
    {
      icon: BadgeCheck,
      title: 'Impari da coach attivi sul campo',
      desc: 'I tuoi trainer sono Master Coach con credenziale ICF: porti a casa conoscenze pratiche e il loro modo reale di lavorare.'
    },
    {
      icon: GraduationCap,
      title: 'Porti a casa credenziali che valgono ovunque',
      desc: 'Formazione accreditata ICF Level 1 & 2: al termine hai le ore per le credenziali ACC e PCC, riconosciute a livello internazionale e spendibili ovunque tu voglia lavorare.'
    },
    {
      icon: Users,
      title: 'Non sei mai solo: prima, durante e dopo',
      desc: 'Un coach di riferimento ti accompagna dall’orientamento fino al post-diploma, ed entri negli Alumni Asterys Lab: 3.000+ colleghi per confronto, referral e nuove opportunità.'
    },
    {
      icon: Wallet,
      title: 'Investi con serenità, al tuo ritmo',
      desc: 'Scegli come sostenere il tuo percorso: rateizzazione fino a 24 mesi e piani pensati per farti crescere senza compromessi.'
    }
  ];
  const seen = new Set<string>();
  return (
    <section id="perche-noi" className="py-12 lg:py-20 bg-white">
      <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
        <h2 className={`${tSection} mb-8 lg:mb-12 max-w-2xl`}>Cosa ti porti a casa con i nostri percorsi</h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-12">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-brand-blue-soft flex items-center justify-center">
                <r.icon className="text-brand-accent" size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-black text-brand-navy mb-2">{r.title}</h3>
                <p className="text-sm text-brand-navy/70 leading-relaxed">{autoHighlight(r.desc, seen)}</p>
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
    <div className="max-w-[var(--wrap-max)] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-x-16 gap-y-2 text-center">
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
  const courseIcon: Record<string, typeof GraduationCap> = {
    apcm: GraduationCap,
    'systemic-team-coaching': Users,
    eiw: Brain,
    'coaching-circle': MessagesSquare,
    'public-speaking': Mic,
    'voice-dialogue': AudioLines,
    'marketing-per-coach': Megaphone,
    'continuous-learning': RefreshCw,
  };
  return (
    <section id="catalogo" className="py-14 lg:py-24 bg-white">
      <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <h2 className={`${tSection} mb-5`}>
            Cosa stai <br />
            aspettando?
          </h2>
          <p className="text-base text-brand-navy/70 leading-relaxed">Il tuo primo passo da coach parte da qui: scegli il percorso e comincia.</p>
        </div>
        <ul className="space-y-3">
          {ids.map((id) => {
            const c = coursesContent[id];
            const Icon = courseIcon[id] ?? Sparkles;
            return (
              <li key={id}>
                <Link
                  to={`/corsi/${id}`}
                  className="flex items-center justify-between gap-4 bg-[#EEF4FC] hover:bg-brand-blue-soft rounded-2xl pl-4 pr-5 py-3 transition-colors group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <Icon className="text-brand-accent" size={18} strokeWidth={2} />
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

/* CREDITO AI TALENTI — band compatta che rimanda alla landing dedicata */
const CreditoTalentiBand = () => (
  <section className="bg-white py-10 lg:py-14">
    <div className="max-w-[var(--wrap-max)] mx-auto px-4">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-[#001D4B] text-white p-7 sm:p-9 lg:p-11">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-accent/20 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <span className="w-12 h-12 shrink-0 rounded-2xl bg-white/10 text-brand-sky flex items-center justify-center ring-1 ring-white/15">
            <Handshake size={22} />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-sky mb-2">Credito ai talenti</p>
            <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight leading-tight mb-2">
              Hai talento ma non puoi investire ora?
            </h2>
            <p className="text-sm sm:text-base text-white/75 font-medium leading-relaxed max-w-2xl">
              Diamo credito a chi ha talento ma è senza lavoro o con reddito insufficiente: accedi ai nostri percorsi e
              inizi a pagare quando inizi a guadagnare. Se non decolla, azzeriamo il debito residuo.
            </p>
          </div>
          <Link
            to="/credito-ai-talenti"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-brand-navy px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.16em] hover:bg-brand-blue-soft transition-colors active:scale-[0.98]"
          >
            Scopri come funziona <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* FAQ — Domande frequenti (dati in ../constants/homeFaq, condivisi con il JSON-LD SEO in seo.ts) */
const Faq = () => (
  <section id="faq" className="py-14 lg:py-20 bg-[#EEF4FC]">
    <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className={`${tSection} mb-8 lg:mb-10 text-center`}>Domande frequenti</h2>
        <div className="space-y-3">
          {faqItems.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-white border border-brand-navy/10 px-5 py-4 open:shadow-[0_18px_55px_-30px_rgba(0,21,51,0.28)] transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <h3 className="text-base sm:text-lg font-black text-brand-navy leading-snug">
                  {f.q}
                </h3>
                <span className="shrink-0 w-8 h-8 rounded-full bg-brand-blue-soft text-brand-accent flex items-center justify-center transition-transform group-open:rotate-90">
                  <ChevronRight size={18} strokeWidth={2.5} className="rotate-90" />
                </span>
              </summary>
              <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed mt-3">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* 3 MONDI — router audience con gerarchia (scuola dominante) */
const TreMondi = () => (
  <section className="py-10 lg:py-14 bg-white">
    <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-[1.45fr_1fr] gap-4 lg:gap-5 items-stretch">
        {/* Scuola di Coaching — dominante */}
        <Link
          to="/corsi"
          className="group relative overflow-hidden rounded-[1.75rem] lg:rounded-[2rem] bg-brand-navy text-white p-7 lg:p-10 flex flex-col min-h-[300px] lg:min-h-[380px] shadow-[0_18px_55px_-30px_rgba(0,21,51,0.5)]"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-accent/25 blur-3xl" />
          <div className="relative flex flex-col flex-1">
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-brand-sky">
              <GraduationCap size={16} /> La nostra identità
            </span>
            <h3 className="mt-4 text-3xl lg:text-[2.6rem] font-display font-black leading-[1.04] tracking-tight">
              Scuola di Coaching
            </h3>
            <p className="mt-3 text-white/75 leading-relaxed max-w-[460px]">
              Diventa coach professionista riconosciuto ICF: percorsi accreditati Level 1 &amp; 2, intelligenza emotiva e approccio sistemico, con pratica guidata e una community di 3.000+ coach.
            </p>
            <div className="mt-auto pt-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-6 py-3 text-[11px] uppercase tracking-[0.16em] font-black group-hover:gap-3 transition-all">
                Scopri i percorsi <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </Link>

        {/* Colonna destra: 2 card secondarie */}
        <div className="grid grid-rows-2 gap-4 lg:gap-5">
          <Link
            to="/personal-coaching"
            className="group rounded-[1.75rem] bg-brand-blue-soft p-6 lg:p-7 flex flex-col justify-between hover:bg-[#dce8fb] transition-colors"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                <Sparkles size={14} /> Crescita personale
              </span>
              <h3 className="mt-2 text-xl lg:text-2xl font-display font-black text-brand-navy tracking-tight">Personal Coaching</h3>
              <p className="mt-1.5 text-sm text-brand-navy/65 leading-relaxed">Un coach al tuo fianco per obiettivi, scelte ed equilibrio. Di persona o online.</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-brand-navy group-hover:text-brand-accent transition-colors">
              Scopri <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </Link>
          <Link
            to="/aziende"
            className="group rounded-[1.75rem] bg-brand-blue-soft p-6 lg:p-7 flex flex-col justify-between hover:bg-[#dce8fb] transition-colors"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                <BriefcaseBusiness size={14} /> Formazione aziendale
              </span>
              <h3 className="mt-2 text-xl lg:text-2xl font-display font-black text-brand-navy tracking-tight">Per Aziende</h3>
              <p className="mt-1.5 text-sm text-brand-navy/65 leading-relaxed">Coaching, team coaching e sviluppo della leadership su misura per manager e team.</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-brand-navy group-hover:text-brand-accent transition-colors">
              Scopri <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TreMondi /> — sezione "3 mondi" parcheggiata: da rivedere posizione/design */}
      <ScegliPercorso />
      <MasterFeatured />
      <MasterGrid />
      <AdvisorBand />
      <TestimonialsSection />
      <Accreditamenti />
      <PercheNoi />
      <CreditoTalentiBand />
      <StatsBand />
      <Faq />
      <CorsiCta />
    </>
  );
}
