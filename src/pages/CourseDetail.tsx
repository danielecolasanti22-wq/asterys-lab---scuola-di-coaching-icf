import { useState, useEffect, useRef, Fragment, type ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Star,
  Plus,
  Minus,
  Clock,
  Video,
  UserCheck,
  Briefcase,
  Play,
  TrendingUp,
  Calendar,
  Monitor,
  Sparkles,
  Quote,
  Compass,
  Target as TargetIcon,
  MapPin,
  GraduationCap,
  Flag,
  CalendarCheck,
  Hourglass,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  X,
  ShieldCheck,
  HeartHandshake,
  BarChart3,
  Network,
  BadgeCheck,
  Route,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  coursesContent,
  commonTestimonials,
  defaultCourseMedia,
  CourseData,
  CourseScheduleBand,
  CourseCompetency,
  CourseCareerPath,
  CourseEdition,
  CourseEditionEventType,
} from '../constants/coursesContent';
import { CourseImage } from '../components/CourseImage';

function richText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return (
        <strong key={i} className="font-bold text-brand-navy">
          {m[1]}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function scheduleBandsFromCourse(course: CourseData): CourseScheduleBand[] {
  if (course.scheduleBands?.length) return course.scheduleBands;
  const sched = course.sessionSchedule?.filter(Boolean) ?? [];
  if (sched.length === 0) {
    return [
      {
        title: 'Lezioni in diretta',
        body: 'Segui le sessioni live e interagisci con i trainer e i compagni di corso.',
        dayLines: [course.summaryBox.format],
        timeLines: [],
      },
    ];
  }
  return sched.map((s, idx) => ({
    title: idx === 0 ? 'Lezioni in diretta' : 'Sessioni complementari',
    body:
      idx === 0
        ? 'Segui le sessioni live e interagisci con i trainer e i compagni di corso.'
        : 'Slot aggiuntivi o laboratori: organizzati per integrare il calendario principale.',
    dayLines: [s.days],
    timeLines: s.time ? [s.time] : [],
  }));
}

const Accordion = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-gray-100 last:border-b-0">
    <button 
      onClick={onClick}
      className="w-full py-6 text-left flex items-center justify-between group gap-6"
    >
      <span className="text-[15px] sm:text-base font-black text-brand-navy group-hover:text-brand-accent transition-colors tracking-tight">
        {title}
      </span>
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy transition-colors ${
          isOpen ? 'bg-brand-navy text-white border-brand-navy' : ''
        }`}
      >
        {isOpen ? <Minus size={18} strokeWidth={2.25} /> : <Plus size={18} strokeWidth={2.25} />}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-6 text-brand-navy/60 leading-relaxed text-sm font-medium">
            {content}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const EDITION_EVENT_STYLES: Record<
  CourseEditionEventType,
  { dot: string; label: string; ring: string }
> = {
  'deadline-early': {
    dot: 'bg-[#008060]',
    label: 'text-[#008060]',
    ring: 'ring-[#008060]/25',
  },
  'deadline-final': {
    dot: 'bg-[#DC2626]',
    label: 'text-[#DC2626]',
    ring: 'ring-[#DC2626]/25',
  },
  'live-class': {
    dot: 'bg-brand-accent',
    label: 'text-brand-accent',
    ring: 'ring-brand-accent/20',
  },
  'live-lab': {
    dot: 'bg-[#1D3BB9]',
    label: 'text-[#1D3BB9]',
    ring: 'ring-[#1D3BB9]/25',
  },
  corso: {
    dot: 'bg-[#7C3AED]',
    label: 'text-[#7C3AED]',
    ring: 'ring-[#7C3AED]/25',
  },
  orientamento: {
    dot: 'bg-[#F59E0B]',
    label: 'text-[#F59E0B]',
    ring: 'ring-[#F59E0B]/25',
  },
  milestone: {
    dot: 'bg-brand-navy/40',
    label: 'text-brand-navy/45',
    ring: 'ring-brand-navy/15',
  },
  individual: {
    dot: 'bg-brand-navy',
    label: 'text-brand-navy',
    ring: 'ring-brand-navy/20',
  },
};

const APCM_COMPLETE_LEVEL_SLUG = 'complete';

function displayEditionEventLabel(label: string, courseId?: string): string {
  if (courseId !== 'apcm') return label;
  return label.replace(/Live Class/g, 'Incontro Online');
}

function completeLevelNote(note: string | undefined, level: string): string {
  return note ? `${note} · ${level}` : level;
}

function buildApcmCompleteEditions(editions: CourseEdition[], citySlug: string): CourseEdition[] {
  const l1Editions = editions.filter((e) => e.citySlug === citySlug && e.levelSlug === 'l1');
  const l2Editions = editions.filter((e) => e.citySlug === citySlug && e.levelSlug === 'l2');
  if (!l1Editions.length || !l2Editions.length) return [];

  return l1Editions.map((l1, index) => {
    const fallbackL2 = l2Editions[l2Editions.length - 1];
    const preferredYear = index === 0 ? '2026' : '2027';
    const l2 =
      l2Editions.find(
        (e) => e.editionSlug.includes(preferredYear) || e.editionLabel.includes(preferredYear),
      ) ??
      l2Editions[index] ??
      fallbackL2;

    const completeEdition: CourseEdition = {
      city: l1.city,
      citySlug: l1.citySlug,
      level: 'Percorso Completo',
      levelSlug: APCM_COMPLETE_LEVEL_SLUG,
      editionLabel: `${l1.editionLabel} · Percorso Completo`,
      editionSlug: `complete-${l1.editionSlug}-${l2.editionSlug}`,
      subtitle: `${l1.subtitle ?? '1° livello'} + ${l2.subtitle ?? '2° livello'}`,
      badge: l1.badge,
      earlyBird: l1.earlyBird,
      enrollmentEnd: l1.enrollmentEnd,
      ctaLabel: 'Iscriviti al Percorso Completo',
      events: [
        ...l1.events.map((ev) => ({
          ...ev,
          note: completeLevelNote(ev.note, '1° livello'),
        })),
        {
          label: 'Passaggio al 2° livello',
          date: l2.subtitle ?? l2.editionLabel,
          type: 'milestone' as const,
          note: 'Dopo il completamento del 1° livello',
        },
        ...l2.events
          .filter((ev) => ev.type !== 'deadline-early' && ev.type !== 'deadline-final')
          .map((ev) => ({
            ...ev,
            note: completeLevelNote(ev.note, '2° livello'),
          })),
      ],
    };
    return completeEdition;
  });
}

function levelSortWeight(slug: string): number {
  if (slug === 'l1') return 0;
  if (slug === 'l2') return 1;
  if (slug === APCM_COMPLETE_LEVEL_SLUG) return 2;
  return 3;
}

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState(0);
  const course: CourseData | undefined = id ? coursesContent[id] : undefined;
  const [paymentTab, setPaymentTab] = useState('');
  const [activeCitySlug, setActiveCitySlug] = useState<string>('');
  const [activeLevelSlug, setActiveLevelSlug] = useState<string>('');
  const [activeEditionSlug, setActiveEditionSlug] = useState<string>('');
  const [timelineOpenMobile, setTimelineOpenMobile] = useState(false);
  const [careerTab, setCareerTab] = useState<'competencies' | 'careers'>('careers');
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState<number | null>(null);
  const teachersScrollerRef = useRef<HTMLDivElement>(null);

  const scrollTeachers = (dir: 'left' | 'right') => {
    const el = teachersScrollerRef.current;
    if (!el) return;
    const amount = Math.max(280, el.clientWidth * 0.8);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (course) {
      setPaymentTab(course.fees[0]?.title.toLowerCase() || '');
      const first = course.editions?.[0];
      if (first) {
        setActiveCitySlug(first.citySlug);
        setActiveLevelSlug(first.levelSlug);
        setActiveEditionSlug(first.editionSlug);
      }
    }
  }, [id, course]);

  useEffect(() => {
    setTimelineOpenMobile(false);
  }, [activeCitySlug, activeLevelSlug, activeEditionSlug]);

  if (!course) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Corso non trovato</h1>
        <Link to="/corsi" className="text-brand-accent font-bold hover:underline">Torna alla lista corsi</Link>
      </div>
    );
  }

  const programIntro =
    course.programIntro ??
    'Imparerai un percorso strutturato e professionale: teoria, pratica supervisionata e strumenti concreti per portare valore alle persone e alle organizzazioni.';

  const admissionBox = course.admissionBox ?? {
    title: 'Requisiti di ammissione al Master',
    body: 'Questo Master richiede impegno e maturità professionale. Il livello è avanzato e il percorso è pensato per chi ha già esperienza nel mondo del lavoro e vuole applicare il metodo a contesti reali, non per chi parte senza una base professionale solida.',
  };

  const earlyPromo = course.earlyBirdPromo ?? {
    ribbon: 'PROMO',
    line: `Scopri condizioni dedicate al Master in ${course.subtitle} | Contattaci per i dettagli`,
    deadline: '',
    ctaHref: '#prezzo',
  };

  const activeModuleData = course.structure.modules[activeModule];
  const moduleTags =
    activeModuleData.tags ?? course.learning.softSkills.slice(0, 8);

  const media = { ...defaultCourseMedia(id ?? 'corso'), ...course.media };

  const isMasterLike =
    /master|level|icf/i.test(course.type) || course.title.toLowerCase().includes('master');

  const howDefaults = {
    title: isMasterLike ? 'Come funziona il Master' : 'Come funziona il corso',
    intro: `Il percorso è pensato per professionisti già impegnati: alterni **sessioni live**, pratica guidata e studio individuale. Ti consigliamo di partecipare in diretta, ma puoi sempre recuperare con le **registrazioni** in piattaforma.`,
    formazioneTitle: 'Formazione',
    formazioneIntro: `La formazione combina **lezioni in diretta**, esercitazioni e feedback: un metodo strutturato per trasformare le competenze in pratica professionale.`,
  };

  const howPartial = course.howItWorks;
  const how = {
    ...howDefaults,
    ...howPartial,
    intro: howPartial?.intro?.trim() ? howPartial.intro : howDefaults.intro,
    formazioneIntro: howPartial?.formazioneIntro?.trim()
      ? howPartial.formazioneIntro
      : howDefaults.formazioneIntro,
  };

  const scheduleBands = scheduleBandsFromCourse(course);

  const testimonials = course.testimonials?.length ? course.testimonials : commonTestimonials;

  const derivedCompetencies: CourseCompetency[] = course.learning.cols.flatMap((col) =>
    col.items.slice(0, 2).map((item) => ({
      title: item,
      desc: `Approfondisci ${item.toLowerCase()} all'interno del modulo "${col.title}", con pratica guidata e feedback dai trainer.`,
    })),
  );

  const derivedCareerPaths: CourseCareerPath[] = course.career.points.length
    ? course.career.points.map((p) => ({ title: p.title, desc: p.desc }))
    : [
        {
          title: 'Libera professione',
          desc: 'Applichi le competenze del percorso in contesti professionali autonomi e come consulente.',
        },
        {
          title: 'Ruoli aziendali',
          desc: 'Porti il metodo dentro organizzazioni che cercano competenze trasversali e people skill.',
        },
      ];

  const competenciesAndCareers = course.competenciesAndCareers ?? {
    eyebrow: 'Competenze & Professione',
    title: 'Cosa saprai fare e dove potrai lavorare',
    intro: `Un mix equilibrato di **competenze tecniche e trasversali**, pensato per renderti operativo in contesti professionali diversi fin da subito.`,
    competencies: derivedCompetencies,
    careerPaths: derivedCareerPaths,
  };

  const editions = course.editions ?? [];
  const editionCities = Array.from(
    new Map(editions.map((e) => [e.citySlug, { slug: e.citySlug, name: e.city }])).values(),
  );
  const effectiveCitySlug =
    editionCities.find((c) => c.slug === activeCitySlug)?.slug ?? editionCities[0]?.slug ?? '';
  const apcmCompleteEditionsForCity =
    id === 'apcm' ? buildApcmCompleteEditions(editions, effectiveCitySlug) : [];
  const baseEditionLevelsForCity = Array.from(
    new Map(
      editions
        .filter((e) => e.citySlug === effectiveCitySlug)
        .map((e) => [e.levelSlug, { slug: e.levelSlug, name: e.level }]),
    ).values(),
  );
  const editionLevelsForCity = [
    ...baseEditionLevelsForCity,
    ...(apcmCompleteEditionsForCity.length
      ? [{ slug: APCM_COMPLETE_LEVEL_SLUG, name: 'Percorso Completo' }]
      : []),
  ].sort((a, b) => levelSortWeight(a.slug) - levelSortWeight(b.slug));
  const effectiveLevelSlug =
    editionLevelsForCity.find((l) => l.slug === activeLevelSlug)?.slug ??
    editionLevelsForCity[0]?.slug ??
    '';
  const editionsForCityLevel =
    effectiveLevelSlug === APCM_COMPLETE_LEVEL_SLUG
      ? apcmCompleteEditionsForCity
      : editions.filter((e) => e.citySlug === effectiveCitySlug && e.levelSlug === effectiveLevelSlug);
  const activeEdition: CourseEdition | undefined =
    editionsForCityLevel.find((e) => e.editionSlug === activeEditionSlug) ??
    editionsForCityLevel[0];

  const editionStats = activeEdition
    ? activeEdition.events.reduce<Record<CourseEditionEventType, number>>(
        (acc, ev) => {
          const key = ev.type ?? 'live-class';
          acc[key] = (acc[key] ?? 0) + 1;
          return acc;
        },
        {
          'deadline-early': 0,
          'deadline-final': 0,
          'live-class': 0,
          'live-lab': 0,
          corso: 0,
          orientamento: 0,
          milestone: 0,
          individual: 0,
        },
      )
    : null;

  const editionStatBadges: { type: CourseEditionEventType; label: string }[] = [
    { type: 'live-class', label: id === 'apcm' ? 'Incontri Online' : 'Live Class' },
    { type: 'live-lab', label: 'Live Lab' },
    { type: 'corso', label: 'Corsi intensivi' },
    { type: 'orientamento', label: 'Orientamento' },
    { type: 'individual', label: 'Sessioni 1:1' },
  ];

  const editionsSection = course.editionsSection ?? {
    eyebrow: 'Calendario edizioni',
    title: 'Scegli sede, livello ed edizione',
    intro:
      'Seleziona la **città**, il **livello** e l\'**edizione** per vedere il calendario completo delle sessioni e le scadenze di iscrizione.',
  };

  const studyMode =
    course.studyModeBox ?? {
      title: 'Modalità di studio ',
      highlight: 'flessibile',
      body: `Un formato pensato per adattarsi ai tuoi ritmi: segui le sessioni live e integra con studio individuale, materiali e registrazioni quando ti è più comodo.`,
      linkText: 'Vai al programma',
      linkHref: '#programma',
    };

  const orientation =
    course.orientationBanner ??
    (isMasterLike
      ? {
          title: 'Fase di orientamento',
          body: 'Prima del via, allineiamo obiettivi, aspettative e piano di percorso con il team Asterys, così entri in classe con chiarezza.',
        }
      : null);

  const specDefaults = {
    eyebrow: 'Percorso',
    title: 'Cosa approfondirai',
    intro: `Un insieme equilibrato di moduli pratici per costruire competenze **concrete** e subito applicabili nel tuo contesto professionale.`,
  };

  const spec =
    course.specializationsSection ??
    (course.learning.cols.length
      ? {
          eyebrow: isMasterLike ? 'Specializzazioni' : 'Moduli',
          title: isMasterLike ? 'Le competenze che ti distinguono' : 'I pilastri del percorso',
          intro: specDefaults.intro,
        }
      : null);

  /** Tipografia compatta (reference: PDF Asterys) — migliora leggibilità sotto la piega */
  const tSection = 'text-3xl sm:text-4xl lg:text-[2.65rem] font-display font-black uppercase tracking-tighter text-brand-navy';
  const tLead = 'text-base sm:text-lg text-brand-navy/65 font-medium leading-relaxed max-w-2xl';
  const tModuleSide = 'text-[11px] sm:text-xs font-black uppercase tracking-tight';
  const tModuleTitle = 'text-xl sm:text-2xl lg:text-[1.75rem] font-display font-black uppercase tracking-tight text-brand-navy';
  const tBody = 'text-sm sm:text-base text-brand-navy/65 font-medium leading-relaxed';

  return (
    <div className="bg-white font-sans text-brand-navy antialiased overflow-x-hidden">
      
      {/* 0. ANNOUNCEMENT BAR */}
      <div className="fixed top-0 left-0 right-0 h-12 bg-[#001D4B] text-white flex items-center justify-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] z-[60] px-3 sm:px-4 overflow-x-auto">
        <span className="text-[#008060] shrink-0">{earlyPromo.ribbon}</span>
        <span className="text-white/90 font-semibold normal-case tracking-normal hidden min-[480px]:inline max-w-[52ch] truncate">
          {earlyPromo.line}
        </span>
        <span className="text-white/90 font-semibold normal-case tracking-normal min-[480px]:hidden">Dettagli e date sul Master</span>
        <a
          href={earlyPromo.ctaHref}
          className="ml-1 shrink-0 border-b border-white/80 text-white hover:text-[#E2FF3B] transition-colors whitespace-nowrap"
        >
          Blocca il tuo sconto →
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-[#F2F7FF] relative overflow-hidden flex flex-col">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#1D3BB9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#0047FF]/10 blur-3xl" />
        <div className="max-w-[941px] mx-auto px-4 w-full grid lg:grid-cols-2 lg:gap-16 items-center min-h-[500px] lg:min-h-[550px]">
          <div className="py-12 lg:py-16 relative z-10">
            <p className="text-[#1D3BB9] text-[11px] font-black uppercase tracking-[0.05em] mb-8 flex items-center gap-2 flex-wrap">
              <span className="bg-[#1D3BB9]/10 px-2 py-0.5 rounded text-[10px]">
                {(course.heroKicker ?? course.type).toUpperCase()}
              </span>
              <span className="text-gray-300">|</span>
              <span>{course.summaryBox.duration.toUpperCase()}</span>
              <span className="text-gray-300">|</span>
              <span>{course.summaryBox.format.toUpperCase()}</span>
            </p>
            
            <h1 className="text-5xl lg:text-[76px] font-display font-black leading-[1] tracking-tighter mb-8 text-[#1D3BB9]">
              {course.subtitle.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            
            <p className="text-lg text-brand-navy mb-10 max-w-sm leading-relaxed font-semibold opacity-90">
              {course.tagline}
            </p>
            
            <button className="bg-[#001D4B] text-white px-9 py-4 rounded-full font-display font-black text-[11px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#1D3BB9] transition-all active:scale-95 mb-10">
              INIZIA IL PROCESSO DI AMMISSIONE
            </button>
            
            <div className="flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} className="w-9 h-9 rounded-full border-2 border-[#F2F7FF] object-cover" alt="Student" />
                  ))}
               </div>
               <div className="flex flex-col">
                  <div className="flex text-[#008060] gap-0.5">
                     {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="currentColor" />)}
                  </div>
                  <p className="text-[12px] text-brand-navy">
                    <span className="font-black">4.7/5 Eccellente</span> · +8.000 studenti
                  </p>
               </div>
            </div>
          </div>
          
          <div className="relative self-end h-full flex items-end justify-center lg:justify-end">
             <div className={`w-full h-auto relative overflow-visible flex items-end ${id === 'apcm' ? 'lg:w-[220%] lg:-mr-[78%] lg:-ml-[42%]' : 'lg:w-[140%] lg:-mr-[20%] lg:-ml-[10%]'}`}>
                <CourseImage
                  src={media.hero}
                  fallbackSrc={defaultCourseMedia(id ?? 'corso').hero}
                  className="w-full h-auto object-contain lg:origin-bottom-right"
                  alt={course.title}
                />
             </div>
          </div>
        </div>
      </section>

      {/* 2. LA FIGURA CENTRALE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[941px] mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <h2 className={`${tSection} mb-8 leading-tight`}>
                {course.overview.title}
             </h2>
             <div className="space-y-6">
               {course.overview.content.map((p, i) => (
                 <p key={i} className={tBody}>
                    {p}
                 </p>
               ))}
             </div>
          </div>
          <div className="relative order-1 lg:order-2">
             <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <CourseImage
                  src={media.overview}
                  fallbackSrc={defaultCourseMedia(id ?? 'corso').overview}
                  className="w-full h-full object-cover aspect-video lg:aspect-square"
                  alt={course.overview.title}
                />
             </div>
          </div>
        </div>
      </section>

      {/* 2b. WHY CHOOSE */}
      {course.whyChoose ? (
        id === 'apcm' ? (
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-[1080px] mx-auto px-4">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-end mb-10 lg:mb-14">
                <div className="max-w-xl">
                  {course.whyChoose.eyebrow ? (
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-4">
                      {course.whyChoose.eyebrow}
                    </p>
                  ) : null}
                  <h2 className={`${tSection} mb-0 max-w-xl`}>
                    {course.whyChoose.title}
                  </h2>
                </div>
                {course.whyChoose.intro ? (
                  <p className={`${tBody} max-w-xl lg:pb-1`}>
                    {richText(course.whyChoose.intro)}
                  </p>
                ) : null}
              </div>

              {(() => {
                const includedCards = [
                  {
                    icon: CalendarCheck,
                    title: '6 o 9 incontri di Continuous Learning',
                    desc: "Dal momento dell'iscrizione fino a dopo la fine del Master: 6 incontri nel 1° livello, 9 nel Percorso Completo.",
                  },
                  {
                    icon: HeartHandshake,
                    title: 'Coach tutor assegnato',
                    desc: 'Un coach tutor di riferimento ti accompagna prima, durante e dopo il percorso.',
                  },
                  {
                    icon: Network,
                    title: 'Forum per classe e community',
                    desc: "Uno spazio dedicato per interagire con la classe dell'edizione scelta e con la community.",
                  },
                  {
                    icon: BarChart3,
                    title: "Corso sull'Intelligenza Emotiva",
                    desc: "4 lezioni dedicate a strumenti, linguaggio e pratiche dell'Intelligenza Emotiva nel coaching.",
                  },
                  {
                    icon: Monitor,
                    title: 'Accesso gratuito ai webinar Asterys',
                    desc: 'Partecipazione gratuita ai webinar Asterys per continuare ad approfondire temi e strumenti professionali.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Accreditamento ICF Level 1 o Level 2',
                    desc: 'Formazione accreditata ICF con ore formative utili per accedere alle credenziali ACC o PCC.',
                  },
                  {
                    icon: Monitor,
                    title: 'Piattaforma virtuale con risorse e link',
                    desc: 'Materiali, risorse operative e link alle lezioni raccolti in un ambiente online ordinato.',
                  },
                  {
                    icon: BadgeCheck,
                    title: 'Metodo e pratica supervisionata',
                    desc: 'Sessioni reali, feedback e supervisione per trasformare la formazione in competenza applicabile.',
                  },
                  {
                    icon: Users,
                    title: 'Community alumni e Career Center',
                    desc: 'Accesso a rete alumni, supporto carriera e occasioni di confronto anche dopo la fine del Master.',
                  },
                ];

                return (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {includedCards.map((card, index) => {
                      const Icon = card.icon;
                      return (
                        <article
                          key={card.title}
                          className="group relative min-h-[250px] rounded-[1.5rem] border border-brand-navy/10 bg-[#F6F8FC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/25 hover:bg-white hover:shadow-xl"
                        >
                          <div className="mb-7 flex items-start justify-between gap-4">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-accent ring-1 ring-brand-navy/10 transition-colors group-hover:bg-[#EAF0FF]">
                              <Icon size={22} strokeWidth={1.9} />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/28">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <h3 className="font-display text-xl sm:text-[22px] font-black tracking-tight leading-[1.05] text-brand-navy mb-3">
                            {card.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-brand-navy/64 font-medium">
                            {card.desc}
                          </p>
                        </article>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          </section>
        ) : (
          <section className="py-16 lg:py-24 bg-[#F6F8FC]">
            <div className="max-w-[941px] mx-auto px-4">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-16 items-end mb-12 lg:mb-16">
                <div className="max-w-xl">
                  {course.whyChoose.eyebrow ? (
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-4">
                      {course.whyChoose.eyebrow}
                    </p>
                  ) : null}
                  <h2 className={`${tSection} mb-5 max-w-xl`}>
                    {course.whyChoose.title}
                  </h2>
                </div>
                {course.whyChoose.intro ? (
                  <p className={`${tBody} max-w-xl lg:pb-2`}>
                    {richText(course.whyChoose.intro)}
                  </p>
                ) : null}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden border border-brand-navy/10 bg-brand-navy/10">
                {course.whyChoose.bullets.map((b, i) => {
                  const benefitIcons = [
                    ShieldCheck,
                    HeartHandshake,
                    BarChart3,
                    Network,
                    BadgeCheck,
                    Route,
                    TrendingUp,
                    Users,
                  ];
                  const Icon = benefitIcons[i % benefitIcons.length];
                  return (
                    <article
                      key={i}
                      className="group relative min-h-[270px] bg-white px-6 py-7 sm:px-7 sm:py-8 transition-colors hover:bg-[#FBFCFF]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-brand-accent/0 transition-colors group-hover:bg-brand-accent" />
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-navy/35">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="inline-flex h-11 w-11 items-center justify-center border border-brand-navy/10 bg-[#F6F8FC] text-brand-accent transition-colors group-hover:border-brand-accent/25 group-hover:bg-[#E6EFFF]">
                          <Icon size={20} strokeWidth={1.9} />
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-black text-brand-navy tracking-tight leading-[1.05] mb-4">
                        {b.title}
                      </h3>
                      <p className="text-sm text-brand-navy/68 leading-relaxed font-medium">
                        {b.desc}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )
      ) : null}

      {/* 3. PROGRAMMA DEL MASTER TABS */}
      <section id="programma" className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-4`}>Programma del Master</h2>
            <p className={`${tLead} mb-10 lg:mb-12`}>
              {programIntro}
            </p>
            
            <div className="bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 flex flex-col lg:flex-row shadow-[0_18px_50px_-38px_rgba(0,21,51,0.14)] min-h-0 lg:min-h-[440px]">
               {/* Left Sidebar Tabs */}
               <div className="lg:w-[38%] bg-[#F9FAFB] border-b lg:border-b-0 lg:border-r border-gray-100 p-4 sm:p-6 space-y-2">
                  {course.structure.modules.map((m, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveModule(i)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl ${tModuleSide} transition-all flex items-center justify-between gap-3 group ${activeModule === i ? 'bg-brand-navy text-white shadow-md' : 'text-brand-navy/45 hover:bg-white hover:text-brand-navy ring-1 ring-transparent hover:ring-black/5'}`}
                    >
                      <span className="leading-snug">{m.title}</span>
                      <ArrowRight size={16} className={`shrink-0 transition-transform ${activeModule === i ? 'translate-x-0.5 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
               </div>
               
               {/* Right Content */}
               <div className="lg:w-[62%] p-6 sm:p-8 lg:p-10 bg-white relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 h-full flex flex-col"
                    >
                       <h3 className={`${tModuleTitle} mb-4`}>
                          {course.structure.modules[activeModule].title}
                       </h3>
                       <p className={`${tBody} mb-8`}>
                          {course.structure.modules[activeModule].desc}
                       </p>
                       
                       <div className="mt-auto pt-8 border-t border-gray-100">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/35 mb-3">In sintesi</p>
                          <div className="flex flex-wrap gap-2">
                            {moduleTags.map((tag, i) => (
                              <span
                                key={`${activeModule}-${i}`}
                                className="inline-flex items-center rounded-md border border-brand-navy/10 bg-white px-2.5 py-1.5 text-[10px] sm:text-[11px] font-bold text-brand-navy/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                       </div>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* 4. SCEGLI TU QUANDO INIZIARE SECTION */}
      <section className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="bg-[#001D4B] rounded-[1.75rem] p-8 sm:p-10 lg:p-14 text-white text-center relative overflow-hidden">
               <h2 className={`${tSection} text-white mb-4`}>Scegli tu quando iniziare</h2>
               <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                 Inizia gratis e senza impegno il processo di ammissione e poi valuta insieme a un Advisor la data di partenza migliore per te.
               </p>
               
               <div className="bg-white/5 border border-white/10 rounded-[1.25rem] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto mb-8 text-left">
                  <div className="text-left w-full">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45 mb-5">Le classi di questo master partono di continuo: ecco le prossime</p>
                     <div className="flex flex-col md:flex-row md:items-center gap-12">
                        {(course.classDates || [{ date: course.summaryBox.dates, badge: "PROSSIMA EDIZIONE" }]).map((cd, i, arr) => (
                          <div key={i} className="contents">
                            {i > 0 && <div className="h-px w-full md:h-12 md:w-px bg-white/10 shrink-0"></div>}
                            <div className="flex-1">
                              <p className={`text-2xl sm:text-3xl font-black uppercase tracking-tighter ${i > 0 ? 'opacity-55' : ''}`}>{cd.date}</p>
                              {cd.badge && <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mt-2">{cd.badge}</p>}
                              {cd.note && <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 mt-2 italic">{cd.note}</p>}
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               
               <p className="text-xs sm:text-sm font-bold text-white/55">Vuoi parlare con noi? <a href="#" className="underline hover:text-white transition-colors">Scrivici</a></p>
            </div>
         </div>
      </section>

      {/* 4b. CALENDARIO EDIZIONI */}
      {editions.length > 0 && activeEdition ? (
        <section id="calendario-edizioni" className="py-16 lg:py-24 bg-[#F9FAFB]/70">
          <div className="max-w-[941px] mx-auto px-4">
            {editionsSection.eyebrow ? (
              <p className="text-lg font-display font-black text-brand-accent mb-3">
                {editionsSection.eyebrow}
              </p>
            ) : null}
            <h2 className={`${tSection} mb-4`}>
              {editionsSection.title ?? 'Scegli sede, livello ed edizione'}
            </h2>
            {editionsSection.intro ? (
              <p className={`${tLead} mb-10`}>{richText(editionsSection.intro)}</p>
            ) : null}

            {/* City tabs */}
            <div className="mb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/45 mb-3 flex items-center gap-2">
                <MapPin size={12} strokeWidth={2.5} /> Sede
              </p>
              <div className="flex flex-wrap gap-2">
                {editionCities.map((c) => {
                  const active = c.slug === effectiveCitySlug;
                  return (
                    <button
                      key={c.slug}
                      type="button"
                      onClick={() => {
                        setActiveCitySlug(c.slug);
                        const completeForCity =
                          id === 'apcm' ? buildApcmCompleteEditions(editions, c.slug) : [];
                        if (activeLevelSlug === APCM_COMPLETE_LEVEL_SLUG && completeForCity[0]) {
                          setActiveLevelSlug(APCM_COMPLETE_LEVEL_SLUG);
                          setActiveEditionSlug(completeForCity[0].editionSlug);
                          return;
                        }
                        const firstOfCity = editions.find((e) => e.citySlug === c.slug);
                        if (firstOfCity) {
                          setActiveLevelSlug(firstOfCity.levelSlug);
                          setActiveEditionSlug(firstOfCity.editionSlug);
                        }
                      }}
                      className={`rounded-full px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] transition-all ring-1 ${
                        active
                          ? 'bg-brand-navy text-white ring-brand-navy shadow-md'
                          : 'bg-white text-brand-navy/65 ring-brand-navy/10 hover:ring-brand-navy/25'
                      }`}
                    >
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Level tabs */}
            {editionLevelsForCity.length > 1 ? (
              <div className="mb-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/45 mb-3 flex items-center gap-2">
                  <GraduationCap size={12} strokeWidth={2.5} /> Livello
                </p>
                <div className="flex flex-wrap gap-2">
                  {editionLevelsForCity.map((l) => {
                    const active = l.slug === effectiveLevelSlug;
                    return (
                      <button
                        key={l.slug}
                        type="button"
                        onClick={() => {
                          setActiveLevelSlug(l.slug);
                          const firstOfLevel =
                            l.slug === APCM_COMPLETE_LEVEL_SLUG
                              ? apcmCompleteEditionsForCity[0]
                              : editions.find(
                                  (e) => e.citySlug === effectiveCitySlug && e.levelSlug === l.slug,
                                );
                          if (firstOfLevel) setActiveEditionSlug(firstOfLevel.editionSlug);
                        }}
                        className={`rounded-full px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] transition-all ring-1 ${
                          active
                            ? 'bg-brand-accent text-white ring-brand-accent shadow-md'
                            : 'bg-white text-brand-navy/65 ring-brand-navy/10 hover:ring-brand-navy/25'
                        }`}
                      >
                        {l.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {/* Edition pills */}
            {editionsForCityLevel.length > 1 ? (
              <div className="mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/45 mb-3 flex items-center gap-2">
                  <Flag size={12} strokeWidth={2.5} /> Edizione
                </p>
                <div className="flex flex-wrap gap-2">
                  {editionsForCityLevel.map((e) => {
                    const active = e.editionSlug === activeEdition.editionSlug;
                    return (
                      <button
                        key={e.editionSlug}
                        type="button"
                        onClick={() => setActiveEditionSlug(e.editionSlug)}
                        className={`text-left rounded-2xl px-4 py-3 transition-all ring-1 ${
                          active
                            ? 'bg-white ring-brand-accent shadow-[0_18px_40px_-28px_rgba(29,59,185,0.5)]'
                            : 'bg-white/60 ring-brand-navy/10 hover:bg-white hover:ring-brand-navy/25'
                        }`}
                      >
                        <p
                          className={`text-[11px] font-black uppercase tracking-[0.18em] ${
                            active ? 'text-brand-accent' : 'text-brand-navy/55'
                          }`}
                        >
                          {e.editionLabel}
                        </p>
                        {e.subtitle ? (
                          <p
                            className={`mt-1 text-[11px] font-semibold ${
                              active ? 'text-brand-navy' : 'text-brand-navy/45'
                            }`}
                          >
                            {e.subtitle}
                          </p>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="mb-4" />
            )}

            {/* Edition detail card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${effectiveCitySlug}-${effectiveLevelSlug}-${activeEdition.editionSlug}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-[1.75rem] bg-white border border-gray-100 shadow-[0_22px_60px_-38px_rgba(0,21,51,0.22)] overflow-hidden"
              >
                {/* Header */}
                <div className="p-5 sm:p-7 bg-[#001D4B] text-white relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-accent/25 blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.26em] text-white/55 mb-2 flex items-center gap-2">
                          <MapPin size={12} strokeWidth={2.5} />
                          {activeEdition.city} · {activeEdition.level}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight leading-tight">
                          {activeEdition.editionLabel}
                        </h3>
                        {activeEdition.subtitle ? (
                          <p className="mt-1 text-base sm:text-lg text-white/65 font-medium">
                            {activeEdition.subtitle}
                          </p>
                        ) : null}
                      </div>
                      {activeEdition.badge ? (
                        <span className="self-start sm:self-auto rounded-full bg-brand-accent/20 border border-brand-accent/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#E2FF3B]">
                          {activeEdition.badge}
                        </span>
                      ) : null}
                    </div>
                    {(activeEdition.earlyBird || activeEdition.enrollmentEnd) && (
                      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                        {activeEdition.earlyBird ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5">
                            <Hourglass size={12} strokeWidth={2.5} className="text-[#6EE7B7]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                              {activeEdition.earlyBird.label}
                            </span>
                            <span className="text-[11px] font-black text-white">
                              {activeEdition.earlyBird.date}
                            </span>
                          </span>
                        ) : null}
                        {activeEdition.enrollmentEnd ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5">
                            <CalendarCheck size={12} strokeWidth={2.5} className="text-[#FCA5A5]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                              {activeEdition.enrollmentEnd.label}
                            </span>
                            <span className="text-[11px] font-black text-white">
                              {activeEdition.enrollmentEnd.date}
                            </span>
                          </span>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary stats (mobile + desktop) */}
                {editionStats ? (
                  <div className="px-5 sm:px-9 pt-5 sm:pt-7">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/45 mb-3">
                      Cosa include il percorso
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {editionStatBadges
                        .filter(({ type }) => (editionStats[type] ?? 0) > 0)
                        .map(({ type, label }) => {
                          const style = EDITION_EVENT_STYLES[type];
                          return (
                            <span
                              key={type}
                              className="inline-flex items-center gap-1.5 rounded-full bg-[#F9FAFB] ring-1 ring-brand-navy/10 px-2.5 py-1 text-[11px] font-black text-brand-navy"
                            >
                              <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                              {editionStats[type]} {label}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                ) : null}

                {/* Timeline */}
                <div className="px-5 pt-5 pb-5 sm:px-9 sm:pt-7 sm:pb-9">
                  <button
                    type="button"
                    onClick={() => setTimelineOpenMobile((v) => !v)}
                    className="w-full flex items-center justify-between gap-3 rounded-2xl bg-[#F9FAFB] ring-1 ring-brand-navy/10 px-4 py-3 text-left hover:ring-brand-navy/25 transition-colors"
                    aria-expanded={timelineOpenMobile}
                    aria-controls="edition-timeline"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-navy">
                      {timelineOpenMobile ? 'Nascondi calendario' : 'Vedi calendario completo'}
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-navy/55">
                      {activeEdition.events.length} date {timelineOpenMobile ? '▲' : '▼'}
                    </span>
                  </button>
                  <div
                    id="edition-timeline"
                    className={`${timelineOpenMobile ? 'block mt-6' : 'hidden'}`}
                  >
                  <ol className="relative">
                    {activeEdition.events.map((ev, i) => {
                      const style =
                        EDITION_EVENT_STYLES[ev.type ?? 'live-class'] ??
                        EDITION_EVENT_STYLES['live-class'];
                      const isLast = i === activeEdition.events.length - 1;
                      return (
                        <li key={i} className="relative flex gap-3 sm:gap-4 pb-3.5 sm:pb-5 last:pb-0">
                          <div className="flex flex-col items-center shrink-0">
                            <span
                              className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full ring-[3px] sm:ring-4 ${style.dot} ${style.ring} mt-1.5`}
                            />
                            {!isLast ? (
                              <span className="mt-1 w-px flex-1 bg-gray-200" />
                            ) : null}
                          </div>
                          <div className="flex-1 pb-1 min-w-0">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                              <p
                                className={`text-sm sm:text-base font-black leading-snug ${
                                  ev.type === 'milestone'
                                    ? 'text-brand-navy/55'
                                    : 'text-brand-navy'
                                }`}
                              >
                                {displayEditionEventLabel(ev.label, id)}
                              </p>
                              <p className="text-[10px] sm:text-xs font-black uppercase tracking-wide text-brand-navy/55">
                                {ev.date}
                              </p>
                            </div>
                            {ev.note ? (
                              <p
                                className={`mt-0.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wide ${style.label}`}
                              >
                                {ev.note}
                              </p>
                            ) : null}
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5 sm:px-9 sm:pb-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-gray-100 pt-5 sm:pt-6">
                  <p className="text-xs sm:text-sm text-brand-navy/55 font-semibold">
                    Vuoi approfondire questa edizione? Prenota una call con un Advisor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#prezzo"
                      className="rounded-full bg-brand-navy px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.22em] text-white shadow-lg hover:bg-brand-accent transition-colors text-center"
                    >
                      {activeEdition.ctaLabel ?? 'Iscriviti a questa edizione'}
                    </a>
                    <a
                      href="#"
                      className="rounded-full border-2 border-brand-navy/20 px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.22em] text-brand-navy hover:bg-gray-50 transition-colors text-center"
                    >
                      Parla con un Advisor
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      ) : null}

      {/* 4c. SCHOLARSHIP */}
      {course.scholarship ? (
        <section className="py-14 lg:py-16 bg-white">
          <div className="max-w-[941px] mx-auto px-4">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-navy text-white px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_30px_80px_-40px_rgba(0,21,51,0.5)]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-accent/30 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                <div>
                  {course.scholarship.eyebrow ? (
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-4">
                      {course.scholarship.eyebrow}
                    </p>
                  ) : null}
                  <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-display font-black tracking-tight leading-[1.05] mb-5">
                    {course.scholarship.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 max-w-xl">
                    {richText(course.scholarship.body)}
                  </p>
                  {course.scholarship.availability ? (
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] mb-6">
                      <Sparkles size={14} strokeWidth={2.25} />
                      {course.scholarship.availability}
                    </p>
                  ) : null}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {course.scholarship.ctaHref ? (
                      <Link
                        to={course.scholarship.ctaHref}
                        className="inline-flex items-center justify-center rounded-full bg-white text-brand-navy px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.22em] shadow-lg hover:bg-brand-accent hover:text-white transition-colors"
                      >
                        {course.scholarship.ctaLabel ?? 'Richiedi la borsa di studio'}
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl bg-white/8 ring-1 ring-white/15 p-6 backdrop-blur-sm">
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-2">Importo borsa</p>
                    <p className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-none mb-4">
                      {course.scholarship.amount}
                    </p>
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/60 mb-3">Requisiti</p>
                    <ul className="space-y-2">
                      {course.scholarship.eligibility.map((e, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/85 leading-snug">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-accent" strokeWidth={2.25} />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. COME FUNZIONA (layout Boolean: intro 2 col + formazione + griglia 3 col + box + orientamento) */}
      <section id="metodo" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[941px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-14 lg:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy tracking-tight leading-[1.1] mb-6">
                {how.title}
              </h2>
              <p className={`${tBody} max-w-xl`}>{richText(how.intro)}</p>
            </div>
            <div className="w-full">
              <CourseImage
                src={media.howItWorks}
                fallbackSrc={defaultCourseMedia(id ?? 'corso').howItWorks}
                className="w-full rounded-2xl object-cover aspect-[4/3] shadow-[0_22px_60px_-38px_rgba(0,21,51,0.28)]"
                alt=""
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent tracking-tight">
              {how.formazioneTitle}
            </h3>
            {how.formazioneBadge ? (
              <span className="inline-flex items-center rounded-full bg-[#E6EFFF] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-brand-navy ring-1 ring-brand-accent/15">
                {how.formazioneBadge}
              </span>
            ) : null}
          </div>
          <p className={`${tBody} max-w-3xl mb-10`}>{richText(how.formazioneIntro)}</p>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {scheduleBands.map((band, rowIdx) => (
              <div
                key={rowIdx}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 py-10 first:pt-8"
              >
                <div className="flex gap-4">
                  <div className="mt-0.5 text-brand-navy">
                    {rowIdx === 0 ? <Monitor size={22} strokeWidth={1.75} /> : <Video size={22} strokeWidth={1.75} />}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-black text-brand-navy mb-2">{band.title}</p>
                    <p className={`${tBody}`}>{band.body}</p>
                  </div>
                </div>
                <div className="flex gap-4 md:justify-center">
                  <Calendar className="mt-0.5 shrink-0 text-brand-navy" size={22} strokeWidth={1.75} />
                  <div className="space-y-2">
                    {band.dayLines.map((line, i) => (
                      <p key={i} className="text-sm sm:text-base font-black text-brand-navy leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 md:justify-end">
                  <Clock className="mt-0.5 shrink-0 text-brand-navy" size={22} strokeWidth={1.75} />
                  <div className="space-y-2 text-left md:text-right">
                    {band.timeLines.length ? (
                      band.timeLines.map((line, i) => (
                        <p key={i} className="text-sm sm:text-base font-black text-brand-navy">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm font-bold text-brand-navy/35">—</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#EBF2FF] px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="text-lg sm:text-xl font-display font-black text-brand-navy mb-4 tracking-tight">
              {studyMode.title}
              {studyMode.highlight ? (
                <span className="text-brand-accent">
                  {/\s$/.test(studyMode.title) ? '' : ' '}
                  {studyMode.highlight}
                </span>
              ) : null}
            </h3>
            <p className={`${tBody} max-w-3xl`}>{richText(studyMode.body)}</p>
            {studyMode.linkText && studyMode.linkHref ? (
              <a
                href={studyMode.linkHref}
                className="mt-4 inline-block text-sm font-black text-brand-accent underline underline-offset-4 hover:text-brand-navy"
              >
                {studyMode.linkText}
              </a>
            ) : null}
          </div>

          {orientation ? (
            <div className="mt-10 rounded-2xl bg-[#F0FAF5] px-6 py-8 sm:px-10 sm:py-9 ring-1 ring-[#D1EBE7]">
              <h3 className="text-base sm:text-lg font-display font-black text-brand-navy mb-3 tracking-tight">
                {orientation.title}
              </h3>
              {orientation.body ? <p className={tBody}>{orientation.body}</p> : null}
            </div>
          ) : null}

          <div className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-10">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Flessibilità</h3>
              <p className={tBody}>
                Segui le sessioni live oppure recupera con le registrazioni: un ritmo pensato per chi ha già un lavoro o uno studio impegnativo.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                  <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Nessun obbligo di presenza assoluta
                </li>
                <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                  <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Esercitazioni e compiti guidati
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Impegno</h3>
              <p className={tBody}>
                Ti diamo strumenti e supporto, ma il risultato dipende dalla costanza: pratica settimanale, feedback e supervisione ti aiutano a
                consolidare il metodo.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Pratica supervisionata
                </li>
                <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Esame / assessment finale
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-[#E6F7F5] p-6 sm:p-8 space-y-4 flex flex-col h-full border border-[#D1EBE7]">
              <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-tight leading-snug">{admissionBox.title}</h3>
              <p className="text-[#0F766E] text-sm leading-relaxed font-semibold">{admissionBox.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5b. SPECIALIZZAZIONI + CTA programma (reference Boolean) */}
      {spec && course.learning.cols.length ? (
        <section className="pb-16 lg:pb-20 bg-white">
          <div className="max-w-[941px] mx-auto px-4">
            <p className="text-lg font-display font-black text-brand-accent mb-3">{spec.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy tracking-tight mb-6 max-w-2xl">
              {spec.title}
            </h2>
            <p className={`${tBody} max-w-3xl mb-12`}>{richText(spec.intro)}</p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {course.learning.cols.map((col, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6EFFF] text-brand-accent ring-1 ring-brand-accent/10">
                    <Sparkles size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-brand-navy mb-3">{col.title}</h3>
                    <p className={`${tBody}`}>
                      {col.items.slice(0, 4).join(' · ')}
                      {col.items.length > 4 ? '…' : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mt-14">
            <div className="flex flex-col gap-6 rounded-3xl bg-brand-accent px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-9">
              <div className="text-white">
                <p className="text-lg sm:text-xl font-display font-black">Leggi il programma completo</p>
                <p className="mt-2 text-sm text-white/85 font-medium">Scarica il dettaglio delle unità e degli obiettivi formativi.</p>
              </div>
              <a
                href="#programma"
                className="inline-flex items-center justify-center rounded-full bg-[#E2FF3B] px-8 py-3.5 text-center text-[11px] font-black uppercase tracking-[0.22em] text-brand-navy shadow-lg hover:brightness-95"
              >
                Scarica programma
              </a>
            </div>
          </div>
        </section>
      ) : null}

      {/* 5c. LEVELS COMPARISON */}
      {course.levelsComparison ? (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center mb-10 lg:mb-12">
              {course.levelsComparison.eyebrow ? (
                <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-4">
                  {course.levelsComparison.eyebrow}
                </p>
              ) : null}
              <h2 className={`${tSection} mb-4 max-w-3xl mx-auto`}>
                {course.levelsComparison.title}
              </h2>
              {course.levelsComparison.intro ? (
                <p className={`${tLead} max-w-2xl mx-auto`}>
                  {richText(course.levelsComparison.intro)}
                </p>
              ) : null}
            </div>

            <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {course.levelsComparison.levels.map((lvl, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col rounded-[1.5rem] p-6 lg:p-7 ring-1 ${
                    lvl.highlight
                      ? 'bg-brand-navy text-white ring-brand-navy shadow-[0_30px_80px_-40px_rgba(0,21,51,0.55)] lg:scale-[1.03]'
                      : 'bg-white text-brand-navy ring-black/8 shadow-[0_12px_40px_-28px_rgba(0,21,51,0.22)]'
                  }`}
                >
                  {lvl.highlight ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-brand-accent px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white shadow-lg">
                      Più scelto
                    </span>
                  ) : null}
                  <p className={`text-[11px] font-black uppercase tracking-[0.22em] mb-2 ${lvl.highlight ? 'text-brand-accent' : 'text-brand-accent'}`}>
                    {lvl.label}
                  </p>
                  <h3 className={`text-xl sm:text-2xl font-display font-black tracking-tight leading-tight mb-3 ${lvl.highlight ? 'text-white' : 'text-brand-navy'}`}>
                    {lvl.name}
                  </h3>
                  {lvl.hours ? (
                    <p className={`text-[11px] font-black uppercase tracking-[0.18em] mb-5 ${lvl.highlight ? 'text-white/60' : 'text-brand-navy/45'}`}>
                      {lvl.hours}
                    </p>
                  ) : null}
                  <div className="mb-5">
                    <p className={`text-3xl sm:text-4xl font-display font-black tracking-tight leading-none ${lvl.highlight ? 'text-white' : 'text-brand-navy'}`}>
                      {lvl.price}
                    </p>
                    {lvl.priceLabel ? (
                      <p className={`text-xs font-semibold mt-1 ${lvl.highlight ? 'text-white/70' : 'text-brand-navy/55'}`}>
                        {lvl.priceLabel}
                      </p>
                    ) : null}
                  </div>
                  {lvl.benefit ? (
                    <p className={`inline-flex self-start items-center rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] mb-5 ${
                      lvl.highlight ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-accent/10 text-brand-accent'
                    }`}>
                      {lvl.benefit}
                    </p>
                  ) : null}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {lvl.features.map((f, j) => (
                      <li key={j} className={`flex items-start gap-2 text-sm leading-snug ${lvl.highlight ? 'text-white/85' : 'text-brand-navy/75'}`}>
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 shrink-0 ${lvl.highlight ? 'text-brand-accent' : 'text-brand-accent'}`}
                          strokeWidth={2.25}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {lvl.ctaHref ? (
                    <Link
                      to={lvl.ctaHref}
                      className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] transition-colors ${
                        lvl.highlight
                          ? 'bg-white text-brand-navy hover:bg-brand-accent hover:text-white'
                          : 'bg-brand-navy text-white hover:bg-brand-accent'
                      }`}
                    >
                      {lvl.ctaLabel ?? 'Iscriviti ora'}
                    </Link>
                  ) : (
                    <a
                      href="#prezzo"
                      className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] transition-colors ${
                        lvl.highlight
                          ? 'bg-white text-brand-navy hover:bg-brand-accent hover:text-white'
                          : 'border-2 border-brand-navy/20 text-brand-navy hover:bg-gray-50'
                      }`}
                    >
                      Scopri i dettagli
                    </a>
                  )}
                </div>
              ))}
            </div>
            {course.levelsComparison.footnote ? (
              <p className="text-center text-xs text-brand-navy/55 font-medium mt-8 max-w-2xl mx-auto">
                {course.levelsComparison.footnote}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* 5b. DOCENTI DEL CORSO */}
      {course.teachers?.length ? (
        <section id="docenti" className="relative py-16 lg:py-24 bg-brand-navy overflow-hidden">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <div className="relative max-w-[941px] mx-auto px-4">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
              <div className="max-w-2xl">
                <p className="text-brand-accent text-[11px] font-display font-black uppercase tracking-[0.18em] mb-3">
                  Docenti del corso
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-display font-black text-white tracking-tight leading-[1.05]">
                  Impara dai migliori del settore!
                </h2>
              </div>
              {course.teachers.length > 3 ? (
                <div className="flex gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => scrollTeachers('left')}
                    aria-label="Scorri indietro"
                    className="h-12 w-12 rounded-full border border-white/30 text-white hover:bg-brand-accent hover:border-brand-accent transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft size={20} strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTeachers('right')}
                    aria-label="Scorri avanti"
                    className="h-12 w-12 rounded-full border border-white/30 text-white hover:bg-brand-accent hover:border-brand-accent transition-colors flex items-center justify-center"
                  >
                    <ChevronRightIcon size={20} strokeWidth={2} />
                  </button>
                </div>
              ) : null}
            </div>

            <div
              ref={teachersScrollerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scroll-smooth"
              style={{ scrollbarWidth: 'none' }}
            >
              {course.teachers.map((t, i) => (
                <article
                  key={`${t.name}-${i}`}
                  className="snap-start shrink-0 w-[260px] sm:w-[280px] rounded-[1.5rem] overflow-hidden relative aspect-[3/4] bg-brand-navy/80 group"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-accent/25 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white text-brand-navy text-[10px] font-display font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                    Faculty
                  </span>
                  <div className="absolute left-5 right-5 bottom-5 text-white">
                    <h3 className="font-display font-black text-2xl leading-[1.05] tracking-tight mb-2">
                      {t.name}
                    </h3>
                    <p className="text-[13px] font-medium text-white/85 leading-snug mb-4">
                      {t.role}
                      {t.creds ? <span className="text-white/60"> · {t.creds}</span> : null}
                    </p>
                    {t.bio ? (
                      <p className="text-[12px] text-white/70 leading-relaxed mb-4 line-clamp-3">
                        {t.bio}
                      </p>
                    ) : null}
                    <span className="inline-flex items-center gap-2 bg-white text-brand-navy text-[11px] font-display font-black uppercase tracking-[0.14em] px-4 py-2 rounded-full shadow-md">
                      Asterys Lab
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 6. PAGAMENTI (tab pill + card — reference Boolean) */}
      <section id="prezzo" className="relative py-16 lg:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#C6D3FF_0%,#B8C8FF_55%,#AEBEFF_100%)]" />
        <div className="relative max-w-[941px] mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black text-brand-navy tracking-tight leading-[1.08] mb-4 normal-case max-w-3xl mx-auto">
            La migliore formazione professionale, accessibile
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/80 font-medium mb-10 sm:mb-12">
            {isMasterLike
              ? `Scegli il metodo di pagamento per il tuo Master in ${course.subtitle}`
              : `Scegli il metodo di pagamento per ${course.title}`}
          </p>

          <div className="mx-auto max-w-[840px] rounded-full bg-white/25 p-1.5 ring-1 ring-white/40 backdrop-blur-[2px]">
            <div className="flex overflow-x-auto gap-1">
              {course.fees.map((fee, idx) => {
                const key = fee.title.toLowerCase();
                const active = paymentTab === key;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPaymentTab(key)}
                    className={`min-w-[140px] flex-1 whitespace-nowrap rounded-full px-4 py-3 sm:py-3.5 text-xs sm:text-sm font-display font-black uppercase tracking-wide transition-all ${
                      active
                        ? 'bg-white text-brand-navy shadow-[0_10px_24px_-14px_rgba(0,21,51,0.35)]'
                        : 'text-brand-navy/75 hover:text-brand-navy'
                    }`}
                  >
                    {fee.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 sm:mt-6 rounded-[1.5rem] sm:rounded-[1.75rem] bg-white px-5 py-10 sm:px-10 sm:py-14 shadow-[0_30px_80px_-40px_rgba(0,21,51,0.4)] ring-1 ring-black/5">
            {course.fees.map((fee, idx) => {
              if (paymentTab !== fee.title.toLowerCase()) return null;
              const isInstallmentLike = fee.type === 'installment' || fee.type === 'zero-rate' || fee.type === 'after';
              const priceLabel = isInstallmentLike ? 'a partire da' : 'Prezzo del corso';
              return (
                <div key={idx} className="mx-auto max-w-xl text-center">
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-navy mb-5 normal-case tracking-tight leading-tight">
                    {fee.heading}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-navy/80 font-medium leading-relaxed mb-10">
                    {richText(fee.desc)}
                  </p>

                  <p className="text-sm sm:text-base font-semibold text-brand-navy/75 mb-4 normal-case tracking-normal">
                    {priceLabel}
                  </p>

                  <div className="mx-auto mb-8 inline-block rounded-2xl bg-brand-accent px-8 py-4 sm:px-10 sm:py-5 shadow-[0_14px_40px_-16px_rgba(29,59,185,0.7)]">
                    <p className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
                      {fee.price}
                      {fee.priceLabel ? (
                        <span className="text-xl sm:text-2xl font-black">{fee.priceLabel}</span>
                      ) : null}
                    </p>
                  </div>

                  {fee.footnote ? (
                    <p className="text-brand-navy/55 text-xs sm:text-sm font-medium leading-relaxed mb-10">
                      {fee.footnote}
                    </p>
                  ) : (
                    <div className="mb-10" />
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <button
                      type="button"
                      className="rounded-full bg-[#001D4B] px-10 py-4 text-[11px] font-black uppercase tracking-[0.26em] text-white shadow-lg hover:bg-[#1D3BB9] active:scale-[0.98]"
                    >
                      Iscriviti ora
                    </button>
                    <button
                      type="button"
                      className="rounded-full border-2 border-brand-navy/25 bg-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.26em] text-brand-navy hover:bg-gray-50 active:scale-[0.98]"
                    >
                      Parla con noi
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6b. GUARANTEE 30 HOURS */}
      {course.guarantee30Hours ? (
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[941px] mx-auto px-4">
            <div className="rounded-[1.75rem] bg-[#F6F8FC] p-8 sm:p-10 lg:p-12 ring-1 ring-black/5">
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
                <div>
                  {course.guarantee30Hours.eyebrow ? (
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-4">
                      {course.guarantee30Hours.eyebrow}
                    </p>
                  ) : null}
                  <div className="inline-flex items-center gap-3 mb-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white">
                      <Hourglass size={20} strokeWidth={2.25} />
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy tracking-tight leading-[1.05] mb-5">
                    {course.guarantee30Hours.title}
                  </h2>
                  <p className="text-sm sm:text-base text-brand-navy/75 leading-relaxed mb-6">
                    {richText(course.guarantee30Hours.body)}
                  </p>
                  {course.guarantee30Hours.refunds?.length ? (
                    <div className="grid sm:grid-cols-2 gap-3">
                      {course.guarantee30Hours.refunds.map((r, i) => (
                        <div key={i} className="rounded-xl bg-white ring-1 ring-black/5 p-4">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/50 mb-1">
                            {r.label}
                          </p>
                          <p className="text-sm font-black text-brand-navy leading-tight">
                            {r.amount}
                          </p>
                          <p className="text-xs text-brand-navy/60 mt-1">
                            {r.withheld}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                {course.guarantee30Hours.steps?.length ? (
                  <div className="space-y-4">
                    {course.guarantee30Hours.steps.map((s, i) => (
                      <div key={i} className="rounded-2xl bg-white ring-1 ring-black/5 p-5 sm:p-6 shadow-[0_8px_30px_-22px_rgba(0,21,51,0.2)]">
                        <h3 className="text-sm sm:text-base font-display font-black text-brand-navy tracking-tight leading-tight mb-2">
                          {s.title}
                        </h3>
                        <p className="text-sm text-brand-navy/70 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 7. TROVIAMO INSIEME SECTION */}
      <section className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="bg-[#E6EFFF] rounded-[1.75rem] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-accent/5">
                <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                   <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-[6px] border-white shadow-lg">
                      <CourseImage
                        src={media.advisor}
                        fallbackSrc={defaultCourseMedia(id ?? 'corso').advisor}
                        className="w-full h-full object-cover"
                        alt="Advisor"
                      />
                   </div>
                   <div>
                      <h3 className="text-lg sm:text-xl font-display font-black text-brand-navy uppercase tracking-tight mb-2 leading-snug">Troviamo insieme la soluzione giusta per te</h3>
                      <p className={`${tBody} max-w-md`}>Scopri i dettagli del percorso e parla con un Advisor Asterys Lab.</p>
                   </div>
                </div>
                <button className="bg-brand-navy text-white px-8 py-4 rounded-md font-display font-black text-[11px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all shadow-lg active:scale-[0.98] shrink-0 w-full sm:w-auto">SCRIVICI SU WHATSAPP</button>
            </div>
         </div>
      </section>

      {/* 8. CAREER CENTER SECTION */}
      <section id="career" className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4 text-center">
            <div className="mb-14 lg:mb-16">
               <h2 className={`${tSection} mb-4`}>
                  Career Center Asterys:{' '}
                  <span className="bg-brand-accent text-white px-3 py-1.5 inline-block -rotate-1 text-[0.85em] sm:text-[0.9em]">
                    la tua carriera al centro
                  </span>
               </h2>
               <p className={`${tBody} max-w-2xl mx-auto text-center`}>
                  {course.career.content}
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
               {course.career.points.map((p, i) => (
                 <div key={i} className="flex flex-col items-start p-6 sm:p-7 bg-white rounded-[1.25rem] shadow-[0_16px_44px_-30px_rgba(0,21,51,0.2)] border border-gray-100 h-full group hover:shadow-[0_22px_55px_-32px_rgba(0,21,51,0.22)] transition-all text-left">
                    <div className="w-11 h-11 bg-[#F9FAFB] rounded-full flex items-center justify-center text-brand-accent mb-6 ring-1 ring-black/5 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                       {i === 0 ? <UserCheck size={22} strokeWidth={2} /> : i === 1 ? <Briefcase size={22} strokeWidth={2} /> : i === 2 ? <TrendingUp size={22} strokeWidth={2} /> : <Users size={22} strokeWidth={2} />}
                    </div>
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight mb-3 leading-snug">{p.title}</h3>
                    <p className="text-brand-navy/50 text-xs font-medium leading-relaxed">{p.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8b. COMPETENZE & SBOCCHI LAVORATIVI */}
      <section id="competenze-sbocchi" className="py-14 lg:py-20 bg-[#F9FAFB]/70">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-10">
              <div className="max-w-2xl">
                {competenciesAndCareers.eyebrow ? (
                  <p className="text-base font-display font-black text-brand-accent mb-2">
                    {competenciesAndCareers.eyebrow}
                  </p>
                ) : null}
                <h2 className={`${tSection} mb-3`}>
                  {competenciesAndCareers.title ?? 'Cosa saprai fare e dove potrai lavorare'}
                </h2>
                {competenciesAndCareers.intro ? (
                  <p className={`${tBody} max-w-xl`}>
                    {richText(competenciesAndCareers.intro)}
                  </p>
                ) : null}
              </div>
              {competenciesAndCareers.stats?.length ? (
                <div className="flex flex-wrap gap-2 lg:justify-end lg:flex-col lg:items-end lg:gap-1.5">
                  {competenciesAndCareers.stats.map((s, i) => (
                    <span
                      key={i}
                      className="inline-flex items-baseline gap-1.5 rounded-full bg-white ring-1 ring-brand-navy/10 px-3 py-1.5"
                    >
                      <span className="text-sm font-display font-black tracking-tight text-brand-navy">
                        {s.value}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-navy/55">
                        {s.label}
                      </span>
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_16px_44px_-30px_rgba(0,21,51,0.16)] overflow-hidden">
               {/* Tab switcher */}
               <div className="grid grid-cols-2 gap-2 p-2 bg-[#F4F6FB] border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setCareerTab('competencies')}
                    aria-pressed={careerTab === 'competencies'}
                    className={`flex items-center justify-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-display font-black uppercase tracking-tight transition-all ${
                      careerTab === 'competencies'
                        ? 'bg-white text-brand-navy shadow-[0_8px_24px_-12px_rgba(0,21,51,0.25)] ring-1 ring-brand-navy/5'
                        : 'text-brand-navy/55 hover:text-brand-navy'
                    }`}
                  >
                    <TargetIcon size={16} strokeWidth={2.25} className={careerTab === 'competencies' ? 'text-brand-accent' : ''} />
                    <span>Competenze</span>
                    <span className={`hidden sm:inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-black ${
                      careerTab === 'competencies' ? 'bg-[#E6EFFF] text-brand-accent' : 'bg-brand-navy/5 text-brand-navy/50'
                    }`}>
                      {competenciesAndCareers.competencies.length}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCareerTab('careers')}
                    aria-pressed={careerTab === 'careers'}
                    className={`flex items-center justify-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-display font-black uppercase tracking-tight transition-all ${
                      careerTab === 'careers'
                        ? 'bg-brand-navy text-white shadow-[0_8px_24px_-12px_rgba(0,21,51,0.45)]'
                        : 'text-brand-navy/55 hover:text-brand-navy'
                    }`}
                  >
                    <Compass size={16} strokeWidth={2.25} className={careerTab === 'careers' ? 'text-[#E2FF3B]' : ''} />
                    <span>Sbocchi professionali</span>
                    <span className={`hidden sm:inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-black ${
                      careerTab === 'careers' ? 'bg-[#E2FF3B] text-brand-navy' : 'bg-brand-navy/5 text-brand-navy/50'
                    }`}>
                      {competenciesAndCareers.careerPaths.length}
                    </span>
                  </button>
               </div>

               {/* List area */}
               <div className="relative">
                  <AnimatePresence mode="wait" initial={false}>
                    {careerTab === 'competencies' ? (
                      <motion.ul
                        key="competencies"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="divide-y divide-gray-100"
                      >
                        {competenciesAndCareers.competencies.map((c, i) => (
                          <li key={i} className="flex gap-3 px-5 py-4 sm:py-4.5">
                            <CheckCircle2 size={18} className="shrink-0 text-[#008060] mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-black text-brand-navy leading-snug mb-1">
                                {c.title}
                              </p>
                              <p className="text-xs sm:text-[13px] text-brand-navy/65 font-medium leading-relaxed">
                                {c.desc}
                              </p>
                            </div>
                          </li>
                        ))}
                      </motion.ul>
                    ) : (
                      <motion.ul
                        key="careers"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="divide-y divide-gray-100"
                      >
                        {competenciesAndCareers.careerPaths.map((p, i) => (
                          <li key={i} className="flex gap-3 px-5 py-4 sm:py-4.5">
                            <span className="h-2 w-2 rounded-full bg-brand-accent shrink-0 mt-2" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-black text-brand-navy leading-snug mb-1">
                                {p.title}
                              </p>
                              <p className="text-xs sm:text-[13px] text-brand-navy/65 font-medium leading-relaxed mb-2">
                                {p.desc}
                              </p>
                              {p.contexts?.length ? (
                                <div className="flex flex-wrap gap-1.5">
                                  {p.contexts.map((ctx, ci) => (
                                    <span
                                      key={ci}
                                      className="inline-flex items-center rounded-md bg-brand-navy/5 border border-brand-navy/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-navy/70"
                                    >
                                      {ctx}
                                    </span>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </section>

      {/* 8c. TESTIMONIANZE */}
      <section id="testimonianze" className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#F4F6FB] to-white">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="max-w-2xl mb-10 lg:mb-12">
              <p className="text-lg font-display font-black text-brand-accent mb-3">Testimonianze</p>
              <h2 className={`${tSection} mb-4`}>
                Storie di chi ha scelto <span className="text-brand-accent">Asterys Lab</span>
              </h2>
              <p className={tLead}>
                Professionisti che hanno trasformato la loro carriera con il nostro metodo. Video e racconti dalla nostra community.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 lg:auto-rows-[225px]">
              {testimonials.map((t, i) => {
                const isBig = i === 0;
                const layout = isBig
                  ? 'sm:col-span-2 sm:row-span-2 lg:col-span-1 lg:row-span-2'
                  : 'lg:col-span-2 lg:row-span-1';

                if (t.video) {
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveVideoTestimonial(i)}
                      className={`group relative overflow-hidden rounded-[1.5rem] lg:rounded-[1.75rem] text-left ring-1 ring-brand-navy/5 shadow-[0_24px_60px_-28px_rgba(0,21,51,0.45)] min-h-[340px] sm:min-h-[380px] lg:min-h-0 ${layout}`}
                    >
                      <img
                        src={t.video.poster}
                        alt={t.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                        <Video size={11} strokeWidth={2.75} />
                        Video
                      </div>
                      {t.video.duration ? (
                        <div className="absolute top-4 right-4 rounded-full bg-black/55 backdrop-blur px-2.5 py-1 text-[10px] font-black text-white tracking-wide">
                          {t.video.duration}
                        </div>
                      ) : null}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] ring-4 ring-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white">
                          <Play size={isBig ? 28 : 22} strokeWidth={2.5} className="ml-1" fill="currentColor" />
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
                        <p className={`font-display font-black leading-tight mb-0.5 ${isBig ? 'text-lg lg:text-xl' : 'text-sm lg:text-base'}`}>{t.name}</p>
                        <p className="text-[11px] lg:text-xs font-semibold text-white/75 leading-tight">{t.role}</p>
                        {t.cohort ? (
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent mt-2">
                            {t.cohort}
                          </p>
                        ) : null}
                      </div>
                    </button>
                  );
                }

                return (
                  <div
                    key={i}
                    className={`relative flex flex-col bg-white rounded-[1.5rem] lg:rounded-[1.75rem] p-5 lg:p-6 border border-gray-100 shadow-[0_22px_60px_-32px_rgba(0,21,51,0.22)] overflow-hidden ${layout}`}
                  >
                    <div className="flex items-center justify-between mb-2 shrink-0">
                      <Quote size={22} className="text-brand-accent/25" strokeWidth={2.25} />
                      {t.rating ? (
                        <div className="flex text-[#008060] gap-0.5">
                          {Array.from({ length: t.rating }).map((_, s) => (
                            <Star key={s} size={11} fill="currentColor" />
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <p className="text-[13px] lg:text-sm text-brand-navy/75 leading-relaxed font-medium flex-1 mb-3 line-clamp-4 min-h-0">
                      “{t.quote}”
                    </p>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100 shrink-0">
                      {t.img ? (
                        <img
                          src={t.img}
                          alt={t.name}
                          className="h-10 w-10 rounded-full object-cover border-2 border-white shadow shrink-0"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-[#E6EFFF] text-brand-accent flex items-center justify-center text-sm font-black shrink-0">
                          {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-black text-brand-navy leading-tight truncate">{t.name}</p>
                        <p className="text-[11px] font-semibold text-brand-navy/55 leading-tight mt-0.5 truncate">
                          {t.role}
                        </p>
                        {t.cohort ? (
                          <p className="text-[10px] font-black uppercase tracking-wider text-brand-accent mt-0.5 truncate">
                            {t.cohort}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
         </div>

         <AnimatePresence>
           {activeVideoTestimonial !== null && testimonials[activeVideoTestimonial]?.video ? (
             <motion.div
               key="video-modal"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
               onClick={() => setActiveVideoTestimonial(null)}
             >
               <motion.div
                 initial={{ opacity: 0, scale: 0.94, y: 16 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.94, y: 16 }}
                 transition={{ duration: 0.22 }}
                 className="relative w-full max-w-3xl"
                 onClick={(e) => e.stopPropagation()}
               >
                 <button
                   type="button"
                   aria-label="Chiudi video"
                   onClick={() => setActiveVideoTestimonial(null)}
                   className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 h-10 w-10 rounded-full bg-white text-brand-navy shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors z-10"
                 >
                   <X size={18} strokeWidth={2.5} />
                 </button>
                 <div className="bg-brand-navy rounded-[1.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
                   <div className="aspect-video bg-black">
                     {testimonials[activeVideoTestimonial].video?.src ? (
                       <video
                         src={testimonials[activeVideoTestimonial].video?.src}
                         poster={testimonials[activeVideoTestimonial].video?.poster}
                         controls
                         autoPlay
                         className="w-full h-full object-cover"
                       />
                     ) : (
                       <div className="w-full h-full flex items-center justify-center text-white/60 text-sm">
                         Video in arrivo
                       </div>
                     )}
                   </div>
                   <div className="p-5 sm:p-6 text-white">
                     <p className="text-base sm:text-lg font-display font-black leading-tight">
                       {testimonials[activeVideoTestimonial].name}
                     </p>
                     <p className="text-xs sm:text-sm font-semibold text-white/65 mt-1">
                       {testimonials[activeVideoTestimonial].role}
                     </p>
                     {testimonials[activeVideoTestimonial].cohort ? (
                       <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent mt-2">
                         {testimonials[activeVideoTestimonial].cohort}
                       </p>
                     ) : null}
                   </div>
                 </div>
               </motion.div>
             </motion.div>
           ) : null}
         </AnimatePresence>
      </section>

      {/* 9. UN PERCORSO FORMATIVO COMPLETO SECTION */}
      <section className="py-16 lg:py-24 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-4`}>
              Un percorso formativo{' '}
              <span className="relative inline-block">
                <span className="absolute inset-x-[-0.15em] bottom-[0.1em] h-[0.45em] bg-[#E2FF3B] -z-10 rounded-sm" aria-hidden="true" />
                <span className="relative">completo</span>
              </span>
            </h2>
            <p className={`${tLead} mb-12 lg:mb-14 max-w-2xl`}>
              Scegli la formazione di Asterys Lab: qualità ICF, metodo e un percorso davvero professionale. Affidati a <span className="text-brand-navy font-black">20+ anni di esperienza</span> e a un metodo collaudato, costruito per accompagnarti con serietà lungo tutto il percorso.
            </p>

            <div className="space-y-4 lg:space-y-6">
               {/* Card 1 — full width, periwinkle, icon + text */}
               <div className="bg-[#D5DCFB] rounded-[1.75rem] lg:rounded-[2rem] p-7 sm:p-9 lg:p-11 flex flex-col sm:flex-row items-start gap-5 sm:gap-7 lg:gap-10 border border-white/40">
                  <div className="shrink-0 h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-2xl bg-white/50 flex items-center justify-center ring-1 ring-white/60">
                     <Sparkles size={30} strokeWidth={2} className="text-brand-navy" />
                  </div>
                  <div className="flex-1 min-w-0">
                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-brand-navy leading-tight mb-3 tracking-tight">
                       Mindset ICF e presenza del coach
                     </h3>
                     <p className="text-sm sm:text-base text-brand-navy/70 font-medium leading-relaxed max-w-2xl">
                       Il coaching parte da chi sei. Alleni presenza, ascolto e capacità di generare consapevolezza prima degli strumenti — un metodo ICF integrato con intelligenza emotiva e approccio sistemico.
                     </p>
                  </div>
               </div>

               {/* Row 2 — two cards side by side */}
               <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">
                  {/* Card 2 — cyan/blue gradient, text top, image bottom */}
                  <div className="lg:col-span-3 bg-gradient-to-br from-[#DFF3FB] to-[#E8EEFF] rounded-[1.75rem] lg:rounded-[2rem] p-7 sm:p-9 lg:p-10 overflow-hidden border border-white/40 flex flex-col">
                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-brand-navy leading-tight mb-3 tracking-tight">
                       Piattaforma didattica con registrazioni
                     </h3>
                     <p className="text-sm sm:text-base text-brand-navy/70 font-medium leading-relaxed mb-6 max-w-md">
                       Registrazioni, materiali strutturati e percorsi di recupero: la piattaforma tiene il filo di ogni lezione. Hai perso una sessione? Riprendi il tuo ritmo senza stress.
                     </p>
                     <div className={id === 'apcm' ? 'mt-auto -mx-10 -mb-10 sm:-mx-12 lg:-mx-16 lg:-mb-14' : 'mt-auto -mb-2 -mr-2 lg:-mb-4 lg:-mr-4'}>
                       {id === 'apcm' ? (
                         <img
                           src={media.completePlatform}
                           className="w-[118%] max-w-none object-contain"
                           alt="Piattaforma didattica"
                         />
                       ) : (
                         <CourseImage
                           src={media.completePlatform}
                           fallbackSrc={defaultCourseMedia(id ?? 'corso').completePlatform}
                           className="w-full rounded-xl lg:rounded-2xl shadow-[0_24px_60px_-28px_rgba(0,21,51,0.3)] rotate-[-1deg]"
                           alt="Piattaforma didattica"
                         />
                       )}
                     </div>
                  </div>

                  {/* Card 3 — lime yellow, image top, text bottom */}
                  <div className="lg:col-span-2 bg-[#E2FF3B] rounded-[1.75rem] lg:rounded-[2rem] p-7 sm:p-9 lg:p-10 overflow-hidden flex flex-col border border-[#CBE430]/40">
                     <div className="mb-6">
                       <CourseImage
                         src={media.completePractical}
                         fallbackSrc={defaultCourseMedia(id ?? 'corso').completePractical}
                         className="w-full rounded-xl lg:rounded-2xl shadow-[0_20px_50px_-26px_rgba(0,21,51,0.4)]"
                         alt="Supervisione 1:1"
                       />
                     </div>
                     <h3 className="text-xl sm:text-2xl font-display font-black text-brand-navy leading-tight mb-3 tracking-tight">
                       Supervisione 1:1 con Mentor MCC
                     </h3>
                     <p className="text-sm text-brand-navy/75 font-medium leading-relaxed">
                       Mentor Coach MCC ti affiancano con sessioni individuali, feedback certificati ICF e check-point sul tuo stile — il salto di qualità verso la certificazione.
                     </p>
                  </div>
               </div>

               {/* Card 4 — full width, brand-accent blue, icon + text */}
               <div className="bg-brand-accent rounded-[1.75rem] lg:rounded-[2rem] p-7 sm:p-9 lg:p-11 flex flex-col sm:flex-row items-start gap-5 sm:gap-7 lg:gap-10 text-white relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                  <div className="relative shrink-0 h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-2xl bg-white/15 flex items-center justify-center ring-1 ring-white/25">
                     <Briefcase size={30} strokeWidth={2} />
                  </div>
                  <div className="relative flex-1 min-w-0">
                     <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black leading-tight mb-3 tracking-tight">
                       Community Alumni e opportunità continue
                     </h3>
                     <p className="text-sm sm:text-base text-white/80 font-medium leading-relaxed max-w-2xl">
                       Alla fine del percorso entri nel network degli alumni Asterys: eventi, supervisione continuativa, collaborazioni e opportunità di lavoro con <span className="text-white font-black">oltre 3.000 professionisti</span> in Italia e all'estero.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. ACCELERA LA TUA CARRIERA SECTION */}
      <section className="py-16 lg:py-20 bg-white">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
            <div className="bg-[#1D3BB9] rounded-[1.75rem] p-10 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-[0_26px_70px_-34px_rgba(0,21,51,0.35)] group">
               <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase mb-6 tracking-tight leading-[1.05]">
                    Accelera la tua carriera: <span className="text-[#E2FF3B]">parti da qui</span>
                  </h2>
                  <p className="text-sm sm:text-base text-white/55 mb-10 font-medium max-w-md mx-auto leading-relaxed">Inizia il tuo processo di ammissione gratis e senza impegno.</p>
                  <button className="bg-[#E2FF3B] text-brand-navy px-10 py-4 rounded-md font-display font-black text-[11px] uppercase tracking-[0.28em] shadow-lg hover:bg-white transition-all active:scale-[0.98]">
                     INIZIA ORA
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 11. FAQs SECTION */}
      <section className="py-16 lg:py-20 bg-[#F9FAFB]/80">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-10 lg:mb-12`}>FAQs</h2>
            <div className="space-y-4">
               {course.faqs.map((faq, i) => (
                 <div key={i} className="bg-white rounded-3xl px-6 sm:px-10 border border-gray-100 shadow-[0_18px_50px_-32px_rgba(0,21,51,0.14)]">
                    <Accordion 
                     title={faq.q}
                     content={faq.a}
                     isOpen={openFaq === i}
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    />
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
