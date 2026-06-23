import { useState, useEffect, useRef, Fragment, type ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Download,
  Users,
  Plus,
  Minus,
  Clock,
  Video,
  UserCheck,
  Briefcase,
  TrendingUp,
  Calendar,
  Monitor,
  Sparkles,
  Compass,
  Target as TargetIcon,
  MapPin,
  GraduationCap,
  Flag,
  CalendarCheck,
  Hourglass,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
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
  defaultCourseMedia,
  CourseData,
  CourseScheduleBand,
  CourseScheduleColumn,
  CourseCompetency,
  CourseCareerPath,
  CourseEdition,
  CourseEditionEventType,
} from '../constants/coursesContent';
import {
  getWooProduct,
  getWooSimpleProductId,
  getEarlyBird,
  wooAddToCartUrl,
  upcomingEditions,
  parseItDateToISO,
  findWooVariationByStart,
  ASTC_EXAM_PRICE_LABEL,
} from '../constants/woo';
import { CourseImage } from '../components/CourseImage';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Highlight } from '../components/Highlight';

/** Data d'inizio (ISO) di un'edizione vetrina: prima Live Class / Corso / Live Lab. */
function editionStartISO(ed: CourseEdition | undefined): string | null {
  if (!ed) return null;
  const starts = ed.events
    .filter((e) => e.type === 'live-class' || e.type === 'corso' || e.type === 'live-lab')
    .map((e) => parseItDateToISO(e.date))
    .filter((x): x is string => Boolean(x))
    .sort();
  return starts[0] ?? null;
}

function richText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return (
        <strong key={i} className="text-hl font-semibold">
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

function scheduleColumnIcon(icon: CourseScheduleColumn['icon']) {
  if (icon === 'users') return <Users size={22} strokeWidth={1.75} />;
  if (icon === 'calendar') return <Calendar size={22} strokeWidth={1.75} />;
  return <Monitor size={22} strokeWidth={1.75} />;
}

const Accordion = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-gray-100 last:border-b-0">
    <button 
      onClick={onClick}
      className="w-full py-3 sm:py-6 text-left flex items-center justify-between group gap-3 sm:gap-6"
    >
      <span className="text-sm sm:text-base font-black text-brand-navy group-hover:text-brand-accent transition-colors tracking-tight leading-snug">
        {title}
      </span>
      <span
        className={`inline-flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy transition-colors ${
          isOpen ? 'bg-brand-navy text-white border-brand-navy' : ''
        }`}
      >
        {isOpen ? <Minus size={16} strokeWidth={2.25} /> : <Plus size={16} strokeWidth={2.25} />}
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
          <div className="pb-3 sm:pb-6 text-brand-navy/60 leading-relaxed text-sm font-medium">
            {richText(content)}
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
    dot: 'bg-[#2A56A8]',
    label: 'text-[#2A56A8]',
    ring: 'ring-[#2A56A8]/25',
  },
  'live-class': {
    dot: 'bg-brand-accent',
    label: 'text-brand-accent',
    ring: 'ring-brand-accent/20',
  },
  'live-lab': {
    dot: 'bg-[#2A56A8]',
    label: 'text-[#2A56A8]',
    ring: 'ring-[#2A56A8]/25',
  },
  corso: {
    dot: 'bg-[#2A56A8]',
    label: 'text-[#2A56A8]',
    ring: 'ring-[#2A56A8]/25',
  },
  orientamento: {
    dot: 'bg-[#2A56A8]',
    label: 'text-[#2A56A8]',
    ring: 'ring-[#2A56A8]/25',
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
  if (slug === APCM_COMPLETE_LEVEL_SLUG || slug === 'l1-l2') return 2;
  return 3;
}

function shortLevelLabel(level: string, levelSlug?: string): string {
  if (levelSlug === 'l1') return 'Livello 1';
  if (levelSlug === 'l2') return 'Livello 2';
  if (levelSlug === APCM_COMPLETE_LEVEL_SLUG || levelSlug === 'l1-l2') return 'Percorso completo';
  const lower = level.toLowerCase();
  if (lower.includes('1°+2°') || lower.includes('percorso completo')) return 'Percorso completo';
  if (lower.includes('2° livello') || lower.includes('level 2') || lower === '2° livello') return 'Livello 2';
  if (lower.includes('1° livello') || lower.includes('level 1') || lower === '1° livello') return 'Livello 1';
  return level;
}

function isCompleteEdition(edition: CourseEdition): boolean {
  return edition.levelSlug === APCM_COMPLETE_LEVEL_SLUG || edition.levelSlug === 'l1-l2';
}

function editionDisplayName(edition: CourseEdition): string {
  const match = edition.editionLabel.match(/Edizione\s+\d+/i);
  if (match) return match[0].replace(/^edizione/i, 'Edizione');
  return 'Edizione 1';
}

function editionPeriod(edition: CourseEdition, allEditions: CourseEdition[]): string {
  if (!isCompleteEdition(edition)) return edition.subtitle ?? '';

  if (edition.subtitle?.includes(' + ')) return edition.subtitle;

  const levelOne = allEditions.find(
    (e) => e.citySlug === edition.citySlug && e.levelSlug === 'l1',
  );
  const levelTwo = allEditions.find(
    (e) => e.citySlug === edition.citySlug && e.levelSlug === 'l2',
  );

  if (levelOne?.subtitle && levelTwo?.subtitle) return `${levelOne.subtitle} + ${levelTwo.subtitle}`;
  return edition.subtitle ?? '';
}

function editionPillLabel(edition: CourseEdition, allEditions: CourseEdition[]): string {
  const name = editionDisplayName(edition);
  const period = editionPeriod(edition, allEditions);
  if (!period) return name;
  return isCompleteEdition(edition) ? `${name} · ${period}` : `${name} • ${period}`;
}

function shortModuleTitle(title: string): string {
  return shortLevelLabel(title);
}

const WHATSAPP_URL = 'https://wa.me/393498864895';

type CourseDetailProps = {
  courseId?: string;
  courseData?: CourseData;
  /** Landing borsa: nasconde hero+announcement e converte le CTA d'acquisto in "contatto". */
  hideHero?: boolean;
  contactHref?: string;
  contactLabel?: string;
};

export default function CourseDetail({ courseId, courseData, hideHero, contactHref, contactLabel }: CourseDetailProps = {}) {
  const { id: routeId } = useParams<{ id: string }>();
  const id = courseId ?? routeId;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState(0);
  const course: CourseData | undefined = courseData ?? (id ? coursesContent[id] : undefined);
  const [paymentTab, setPaymentTab] = useState('');
  // Edizione scelta per livello (wooKey → variationId) per il deep-link al checkout.
  const [editionByLevel, setEditionByLevel] = useState<Record<string, number>>({});
  // Quantità scelta per le opzioni con sconto-volume (es. Continuous Learning).
  const [qtyByFee, setQtyByFee] = useState<Record<string, number>>({});
  // Esame Expert aggiunto (per fee): switcha alla variazione "con esame".
  const [examByFee, setExamByFee] = useState<Record<string, boolean>>({});
  const [activeCitySlug, setActiveCitySlug] = useState<string>('');
  const [activeLevelSlug, setActiveLevelSlug] = useState<string>('');
  const [activeEditionSlug, setActiveEditionSlug] = useState<string>('');
  const [timelineOpenMobile, setTimelineOpenMobile] = useState(false);
  const [careerTab, setCareerTab] = useState<'competencies' | 'careers'>('careers');
  const teachersScrollerRef = useRef<HTMLDivElement>(null);
  const levelsScrollerRef = useRef<HTMLDivElement>(null);

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
      const first =
        course.editions?.find(
          (e) => e.badge === 'Early Bird attivo' || e.badge === 'Iscrizioni aperte',
        ) ?? course.editions?.[0];
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

  useEffect(() => {
    const el = levelsScrollerRef.current;
    if (!el || !window.matchMedia('(max-width: 767px)').matches) return;
    const highlighted = el.querySelector<HTMLElement>('[data-level-highlight="true"]');
    highlighted?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' });
  }, [id]);

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
    title: 'Requisiti di ammissione al corso',
    body: 'Questo corso richiede impegno e maturità professionale. Il livello è avanzato e il percorso è pensato per chi ha già esperienza nel mondo del lavoro e vuole applicare il metodo a contesti reali, non per chi parte senza una base professionale solida.',
  };

  const earlyPromo: NonNullable<CourseData['earlyBirdPromo']> = course.earlyBirdPromo ?? {
    ribbon: 'PROMO',
    line: `Scopri condizioni dedicate a ${course.title} | Contattaci per i dettagli`,
    deadline: '',
    ctaHref: '#prezzo',
  };
  // Early Bird attivo finché oggi ≤ deadline; passata la data, codice/EB spariscono dal banner.
  const promoActive = !earlyPromo.deadlineISO || Date.now() <= Date.parse(earlyPromo.deadlineISO);
  // Il CTA punta al checkout Woo che applica il coupon in automatico (se configurato), altrimenti al prezzo.
  const promoCtaHref = promoActive && earlyPromo.couponUrl ? earlyPromo.couponUrl : earlyPromo.ctaHref;

  const activeModuleData = course.structure.modules[activeModule];
  const moduleTags =
    activeModuleData.tags ?? course.learning.softSkills.slice(0, 8);

  const media = { ...defaultCourseMedia(id ?? 'corso'), ...course.media };
  const usesApcmCompleteSection = id === 'apcm' || id === 'systemic-team-coaching' || id === 'voice-dialogue' || id === 'public-speaking';
  const isCoachingCircle = id === 'coaching-circle';
  const isVoiceDialogue = id === 'voice-dialogue';
  const isWorkout = id === 'eiw';
  // Heroes using the new full-bleed 1512x608 cutout layout (people composed on the right).
  const fullBleedHero = ['apcm', 'systemic-team-coaching', 'coaching-circle', 'voice-dialogue', 'eiw', 'continuous-learning', 'public-speaking', 'marketing-per-coach'].includes(id ?? '');
  const isCL = id === 'continuous-learning';

  // "Master" deve comparire solo per APCM e ASTC (Team Coaching); per gli altri corsi si dice "corso".
  const isMasterLike = id === 'apcm' || id === 'systemic-team-coaching';

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
  const scheduleColumns = course.scheduleColumns ?? [];

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
    ...baseEditionLevelsForCity.map((l) => ({
      ...l,
      name: shortLevelLabel(l.name, l.slug),
    })),
    ...(apcmCompleteEditionsForCity.length
      ? [{ slug: APCM_COMPLETE_LEVEL_SLUG, name: 'Percorso completo' }]
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

  /** Tipografia compatta (reference: PDF Asterys) — migliora leggibilità sotto la piega */
  const tSection = 'text-3xl sm:text-4xl lg:text-[2.65rem] font-display font-black uppercase tracking-tighter text-brand-navy';
  const tLead = 'text-base sm:text-lg text-brand-navy/65 font-medium leading-relaxed max-w-2xl';
  const tModuleSide = 'text-[11px] sm:text-xs font-black uppercase tracking-tight';
  const tModuleTitle = 'text-xl sm:text-2xl lg:text-[1.75rem] font-display font-black uppercase tracking-tight text-brand-navy';
  const tBody = 'text-sm sm:text-base text-brand-navy/65 font-medium leading-relaxed';

  return (
    <div className="bg-white font-sans text-brand-navy antialiased overflow-x-hidden">
      {!hideHero && (<>
      {/* 0. ANNOUNCEMENT BAR */}
      <div className="fixed top-0 left-0 right-0 h-12 bg-[#001D4B] text-white flex items-center justify-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] z-[60] px-3 sm:px-4 overflow-x-auto">
        <span className="text-[#008060] shrink-0">{promoActive ? earlyPromo.ribbon : 'Iscrizioni aperte'}</span>
        <span className="text-white/90 font-semibold normal-case tracking-normal hidden min-[480px]:inline max-w-[52ch] truncate">
          {promoActive ? earlyPromo.line : 'Scopri date, edizioni e condizioni di iscrizione.'}
        </span>
        <span className="text-white/90 font-semibold normal-case tracking-normal min-[480px]:hidden">
          {isCoachingCircle ? 'Dettagli e date della pratica' : isMasterLike ? 'Dettagli e date sul Master' : 'Dettagli e date del corso'}
        </span>
        {promoActive && earlyPromo.code ? (
          <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-0.5 text-white ring-1 ring-white/25 whitespace-nowrap">
            Codice {earlyPromo.code}
          </span>
        ) : null}
        <a
          href={promoCtaHref}
          className="ml-1 shrink-0 border-b border-white/80 text-white hover:text-[#CFE0F5] transition-colors whitespace-nowrap"
        >
          {isCoachingCircle ? 'Prenota il tuo posto →' : promoActive ? 'Blocca il tuo sconto →' : 'Scopri di più →'}
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-hero overflow-hidden pb-0">
        {/* Gradiente metallico sul fondo hero (TUTTI i corsi, come Home): spazzata
            diagonale dal blu scuro (alto-sx) all'acciaio più chiaro (basso-dx).
            Bande nette = effetto metallico; massima luce sull'angolo (no "faro"). */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,#00091c_0%,#001a45_16%,#143f7a_42%,#2c63a8_64%,#4a82cc_84%,#5d90d8_100%)]"
        />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.08fr_0.92fr] gap-0 lg:gap-10 items-end min-h-0 lg:h-[608px]">
          <div className="relative hidden -mx-4 sm:-mx-6">
            <CourseImage
              src={media.hero}
              fallbackSrc={defaultCourseMedia(id ?? 'corso').hero}
              className={`w-full h-auto object-contain object-bottom ${fullBleedHero ? 'aspect-[1512/608]' : 'aspect-[16/10]'}`}
              alt={course.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
          </div>

          <div className="pt-10 lg:pt-14 pb-8 lg:pb-10 relative z-10 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-none lg:rounded-none bg-brand-hero lg:bg-transparent mt-0 lg:self-start">
            <div className="hidden lg:inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-4 w-full sm:w-auto justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              {(course.heroKicker ?? course.type).toUpperCase()}
            </div>

            <h1 className="text-[2.85rem] text-center lg:text-left sm:text-[3.7rem] lg:text-[4.35rem] font-display font-black leading-[0.94] tracking-tighter mb-4 lg:mb-5 text-white">
              {course.subtitle}
            </h1>

            <p className="text-[12px] text-center lg:text-left lg:text-base text-white/80 mb-5 lg:mb-6 max-w-[520px] leading-relaxed mx-auto lg:mx-0">
              {course.tagline}
            </p>

            <div className="flex mb-8 lg:hidden justify-center sm:justify-start">
              <a
                href="#prezzo"
                className="inline-flex items-center justify-center bg-[#2A56A8] text-white rounded-full px-8 py-4 text-[11px] font-black uppercase tracking-[0.1em]"
              >
                Iscriviti
              </a>
            </div>

            <ul className="space-y-2 lg:space-y-2.5 mb-5 lg:mb-7 text-[12px] lg:text-[14px] font-medium text-white">
              {course.heroBenefits.slice(0, 3).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="text-brand-sky font-black mt-0.5">→</span>
                  {benefit}
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
            <div
              className={`absolute bottom-0 ${
                fullBleedHero
                  ? 'right-[-36%] w-[calc(113vw-135px)] max-w-[1690px] min-w-[1170px] translate-x-[15px]'
                  : 'right-[-36%] w-[calc(78vw-80px)] max-w-[1180px] min-w-[820px] translate-x-[150px]'
              }`}
            >
              <CourseImage
                src={media.hero}
                fallbackSrc={defaultCourseMedia(id ?? 'corso').hero}
                className="hero-figure block w-full h-auto object-contain object-bottom lg:origin-bottom-right"
                alt={course.title}
              />
            </div>
          </div>
        </div>
      </section>
      </>)}

      {id === 'systemic-team-coaching' ? (
        <section className="bg-white pt-4 pb-2 lg:hidden">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <img
              src="/course-media/systemic-team-coaching/classe-below-hero.png"
              alt="Sessione di Team Coaching Sistemico in aula"
              className="w-full rounded-2xl lg:rounded-3xl object-cover aspect-[16/9] shadow-[0_24px_60px_-32px_rgba(0,21,51,0.28)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      ) : null}

      {/* 2. LA FIGURA CENTRALE SECTION */}
      <section className="py-8 lg:py-24 bg-white">
        <div className="max-w-[941px] mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
             <h2 className={`${tSection} mb-8 leading-tight`}>
                {course.overview.title}
             </h2>
             <div className="space-y-6">
               {course.overview.content.map((p, i) => (
                 <p key={i} className={tBody}>
                    {richText(p)}
                 </p>
               ))}
             </div>
          </div>
          <div className={`relative order-1 lg:order-2 ${id === 'systemic-team-coaching' ? 'hidden lg:block' : ''}`}>
             <div className="rounded-[1.75rem] lg:rounded-[3rem] overflow-hidden shadow-[0_22px_60px_-38px_rgba(0,21,51,0.35)] lg:shadow-2xl">
                <CourseImage
                  src={media.overview}
                  fallbackSrc={defaultCourseMedia(id ?? 'corso').overview}
                  className="w-full h-full object-cover aspect-[16/10] lg:aspect-square"
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
                  <div className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-16 border-t border-brand-navy/12">
                    {includedCards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <div
                          key={card.title}
                          className="flex items-start gap-4 py-6 border-b border-brand-navy/12"
                        >
                          <span className="shrink-0 mt-0.5 text-brand-accent">
                            <Icon size={24} strokeWidth={1.9} />
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-display text-base sm:text-lg font-black tracking-tight leading-snug text-brand-navy mb-1.5">
                              {card.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-brand-navy/65 font-medium">
                              {card.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          </section>
        ) : (
          <section className="py-16 lg:py-24 bg-[#EEF4FC]">
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

              <div className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-16 border-t border-brand-navy/12">
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
                    <div
                      key={i}
                      className="flex items-start gap-4 py-6 border-b border-brand-navy/12"
                    >
                      <span className="shrink-0 mt-0.5 text-brand-accent">
                        <Icon size={24} strokeWidth={1.9} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-display font-black text-brand-navy tracking-tight leading-snug mb-1.5">
                          {b.title}
                        </h3>
                        <p className="text-sm text-brand-navy/65 leading-relaxed font-medium">
                          {b.desc}
                        </p>
                      </div>
                    </div>
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
            <h2 className={`${tSection} mb-4`}>
              {isCoachingCircle
                ? 'Come funziona la pratica'
                : isCL
                ? 'Programma'
                : isMasterLike
                ? 'Programma del Master'
                : 'Programma del corso'}
            </h2>
            <p className={`${tLead} mb-10 lg:mb-12`}>
              {programIntro}
            </p>
            
            <div className="bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 shadow-[0_18px_50px_-38px_rgba(0,21,51,0.14)] flex flex-col">
               <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[300px]">
               {/* Left Sidebar Tabs */}
               <div className="lg:w-[38%] bg-[#F9FAFB] border-b lg:border-b-0 lg:border-r border-gray-100 p-3 sm:p-4 space-y-1.5">
                  {course.structure.modules.map((m, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveModule(i)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl ${tModuleSide} transition-all flex items-center justify-between gap-3 group ${activeModule === i ? 'bg-brand-navy text-white shadow-md' : 'text-brand-navy/45 hover:bg-white hover:text-brand-navy ring-1 ring-transparent hover:ring-black/5'}`}
                    >
                      <span className="leading-snug">{shortModuleTitle(m.title)}</span>
                      <ArrowRight size={16} className={`shrink-0 transition-transform ${activeModule === i ? 'translate-x-0.5 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
               </div>
               
               {/* Right Content */}
               <div className="lg:w-[62%] p-5 sm:p-6 lg:p-7 bg-white relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 h-full flex flex-col"
                    >
                       <h3 className={`${tModuleTitle} mb-2 sm:mb-3`}>
                          {course.structure.modules[activeModule].title}
                       </h3>
                       <p className={`${tBody} mb-4 sm:mb-5`}>
                          {course.structure.modules[activeModule].desc}
                       </p>
                       
                       <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {moduleTags.slice(0, 6).map((tag, i) => (
                            <span
                              key={`${activeModule}-${i}`}
                              className="inline-flex items-center rounded-md border border-brand-navy/10 bg-white px-2 py-1 sm:px-2.5 sm:py-1.5 text-[9px] sm:text-[11px] font-bold text-brand-navy/80"
                            >
                              {tag}
                            </span>
                          ))}
                       </div>
                    </motion.div>
                  </AnimatePresence>
               </div>
               </div>

               {/* Brochure: integrata in fondo alla card, a tutta larghezza */}
               <div className="bg-[#2A56A8] text-white flex flex-row items-center justify-between gap-4 sm:gap-6 px-5 py-4 sm:px-7 sm:py-5 border-t border-white/10">
                  <div className="flex-1 min-w-0">
                     <h3 className="text-sm sm:text-lg font-display font-black tracking-tight leading-snug mb-1">
                        Vuoi il programma completo, nel dettaglio?
                     </h3>
                     <p className="hidden sm:block text-[13px] text-white/70 font-medium leading-relaxed mb-3 max-w-md">
                        Scarica la brochure con tutti i moduli, le ore di formazione e il calendario.
                     </p>
                     <a
                        href={course.brochureUrl ?? contactHref ?? '/iscriviti'}
                        className="inline-flex items-center gap-2 bg-white text-brand-navy px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.16em] hover:bg-brand-blue-soft transition-colors active:scale-[0.98]"
                     >
                        Scarica la brochure <Download size={14} />
                     </a>
                  </div>
                  <div className="w-[40%] sm:w-[34%] lg:w-[30%] shrink-0">
                     <CourseImage
                        src={media.brochureDecor}
                        fallbackSrc={`https://picsum.photos/seed/${id ?? 'corso'}-brochure/640/420`}
                        className="w-full h-auto object-contain drop-shadow-[0_12px_26px_rgba(0,0,0,0.35)]"
                        alt={`Brochure ${course.title}`}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3b. UN PERCORSO CERTIFICATO (solo dove valorizzato, es. APCM) */}
      {course.certificate ? (
        <section className="py-8 lg:py-14 bg-white">
          <div className="max-w-[941px] mx-auto px-4">
            <div className="rounded-[1.75rem] bg-[#EEF4FC] p-5 sm:p-8 lg:p-10 grid sm:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-10 items-center">
              <div>
                <CourseImage
                  src={course.certificate.image ?? `https://picsum.photos/seed/${id ?? 'corso'}-cert/600/800`}
                  fallbackSrc={`https://picsum.photos/seed/${id ?? 'corso'}-cert/600/800`}
                  className="w-full max-w-[280px] mx-auto sm:mx-0 drop-shadow-[0_20px_40px_rgba(0,21,51,0.35)]"
                  alt="Certificato del percorso"
                />
              </div>
              <div>
                {course.certificate.eyebrow ? (
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3">
                    {course.certificate.eyebrow}
                  </p>
                ) : null}
                <h2 className={`${tSection} mb-3 lg:mb-4`}>{course.certificate.title}</h2>
                <p className={tBody}>{richText(course.certificate.body)}</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 4. SCEGLI TU QUANDO INIZIARE — solo Master in Coaching e Team Coaching */}
      {(id === 'apcm' || id === 'systemic-team-coaching') && (
      <section className="py-10 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="bg-[#001D4B] rounded-[1.5rem] lg:rounded-[1.75rem] p-5 sm:p-7 lg:p-10 text-white text-center relative overflow-hidden">
               <h2 className={`${tSection} text-white mb-3 lg:mb-4`}>
                 {isCoachingCircle
                   ? 'Scegli tu quando iniziare'
                   : isVoiceDialogue
                   ? 'Prossima edizione'
                   : 'Scegli tu quando iniziare'}
               </h2>
               <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto mb-5 lg:mb-10 font-medium leading-relaxed">
                 {isCoachingCircle
                   ? "Prenota il tuo posto: dopo l'acquisto riceverai il link al calendario per scegliere la data più comoda tra quelle disponibili."
                   : isVoiceDialogue
                   ? "Il corso è in edizione unica annuale: assicurati il posto prima del termine iscrizioni."
                   : isWorkout
                   ? "I Round sono pubblicati con largo anticipo: scegli quello con il set di emozioni che preferisci e mettilo in agenda. Nessuna sequenza obbligata, i posti sono limitati."
                   : isCL
                   ? "Il programma è circolare: non c'è un inizio obbligato, entri quando vuoi. Ecco le prossime Live Class — trovi il calendario completo poco più sotto."
                   : 'Inizia gratis e senza impegno il processo di ammissione e poi valuta insieme a un Advisor la data di partenza migliore per te.'}
               </p>

               <div className="bg-white/5 border border-white/10 rounded-[1.25rem] p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 max-w-3xl mx-auto mb-5 lg:mb-8 text-left">
                  <div className="text-left w-full">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45 mb-3 lg:mb-5">
                       {isCoachingCircle
                         ? 'I gruppi vengono composti in ordine di iscrizione'
                         : isVoiceDialogue
                         ? 'Edizione 2026 · in presenza a Milano'
                         : isWorkout
                         ? 'Prossimi Round in calendario'
                         : isCL
                         ? 'Prossime Live Class'
                         : 'Le classi di questo master partono di continuo: ecco le prossime'}
                     </p>
                     <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                        {(isCL ? (course.classDates ?? []).slice(0, 3) : (course.classDates || [{ date: course.summaryBox.dates, badge: "PROSSIMA EDIZIONE" }])).map((cd, i, arr) => (
                          <div key={i} className="contents">
                            {i > 0 && <div className="h-px w-full md:h-12 md:w-px bg-white/10 shrink-0"></div>}
                            <div className="flex-1">
                              <p className={`text-xl sm:text-3xl font-black uppercase tracking-tighter ${i > 0 ? 'opacity-55' : ''}`}>{cd.date}</p>
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
      )}

      {/* 4b. CALENDARIO EDIZIONI */}
      {editions.length > 0 && activeEdition ? (
        <section id="calendario-edizioni" className="py-10 lg:py-24 bg-[#F9FAFB]/70">
          <div className="max-w-[941px] mx-auto px-4">
            {editionsSection.eyebrow ? (
              <p className="text-sm lg:text-lg font-display font-black text-brand-accent mb-2 lg:mb-3">
                {editionsSection.eyebrow}
              </p>
            ) : null}
            <h2 className={`${tSection} mb-3 lg:mb-4`}>
              {editionsSection.title ?? 'Scegli sede, livello ed edizione'}
            </h2>
            {editionsSection.intro ? (
              <p className={`${tLead} mb-6 lg:mb-10`}>{richText(editionsSection.intro)}</p>
            ) : null}

            {/* City tabs */}
            <div className="mb-4 lg:mb-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/45 mb-2 lg:mb-3 flex items-center gap-2">
                <MapPin size={12} strokeWidth={2.5} /> Sede
              </p>
              <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
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
                      className={`shrink-0 rounded-full border px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] transition-all ${
                        active
                          ? 'border-brand-navy bg-brand-navy text-white shadow-md'
                          : 'border-brand-navy/10 bg-white text-brand-navy/65 hover:border-brand-navy/25'
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
              <div className="mb-4 lg:mb-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/45 mb-2 lg:mb-3 flex items-center gap-2">
                  <GraduationCap size={12} strokeWidth={2.5} /> Livello
                </p>
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
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
                        className={`shrink-0 rounded-full border px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] transition-all ${
                          active
                            ? 'border-brand-accent bg-brand-accent text-white shadow-md'
                            : 'border-brand-navy/10 bg-white text-brand-navy/65 hover:border-brand-navy/25'
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
            {editionsForCityLevel.length > 1 || id === 'systemic-team-coaching' ? (
              <div className="mb-5 lg:mb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/45 mb-2 lg:mb-3 flex items-center gap-2">
                  <Flag size={12} strokeWidth={2.5} /> Edizione
                </p>
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
                  {editionsForCityLevel.map((e) => {
                    const active = e.editionSlug === activeEdition.editionSlug;
                    return (
                      <button
                        key={e.editionSlug}
                        type="button"
                        onClick={() => setActiveEditionSlug(e.editionSlug)}
                        className={`shrink-0 max-w-[78vw] text-left rounded-2xl border px-4 py-2.5 sm:py-3 transition-all ${
                          active
                            ? 'border-brand-accent bg-white shadow-[0_18px_40px_-28px_rgba(29,59,185,0.5)]'
                            : 'border-brand-navy/10 bg-white/60 hover:bg-white hover:border-brand-navy/25'
                        }`}
                      >
                        <p
                          className={`text-[11px] font-black uppercase tracking-[0.18em] ${
                            active ? 'text-brand-accent' : 'text-brand-navy/55'
                          }`}
                        >
                          {editionPillLabel(e, editions)}
                        </p>
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
                className="rounded-[1.4rem] lg:rounded-[1.75rem] bg-white border border-gray-100 shadow-[0_22px_60px_-38px_rgba(0,21,51,0.22)] overflow-hidden"
              >
                {/* Header */}
                <div className="p-4 sm:p-7 bg-[#001D4B] text-white relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-accent/25 blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.26em] text-white/55 mb-2 flex items-center gap-2">
                          <MapPin size={12} strokeWidth={2.5} />
                          {activeEdition.city} · {shortLevelLabel(activeEdition.level, activeEdition.levelSlug)}
                        </p>
                        <h3 className="text-lg sm:text-2xl font-display font-black tracking-tight leading-tight">
                          {editionDisplayName(activeEdition)}
                        </h3>
                        {editionPeriod(activeEdition, editions) ? (
                          <p className="mt-1 text-base sm:text-lg text-white/65 font-medium">
                            {editionPeriod(activeEdition, editions)}
                          </p>
                        ) : null}
                      </div>
                      {activeEdition.badge ? (
                        <span className="self-start sm:self-auto rounded-full bg-brand-accent/20 border border-brand-accent/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#CFE0F5]">
                          {activeEdition.badge}
                        </span>
                      ) : null}
                    </div>
                    {(activeEdition.earlyBird || activeEdition.enrollmentEnd) && (
                      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                        {activeEdition.earlyBird ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5">
                            <Hourglass size={12} strokeWidth={2.5} className="text-[#5E8AD0]" />
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
                            <CalendarCheck size={12} strokeWidth={2.5} className="text-[#CFE0F5]" />
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
                  <div className="px-4 sm:px-9 pt-4 sm:pt-7">
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
                <div className="px-4 pt-4 pb-4 sm:px-9 sm:pt-7 sm:pb-9">
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
                    className={`${timelineOpenMobile ? 'block mt-4 sm:mt-6' : 'hidden'}`}
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
                  <div className="px-4 pb-4 sm:px-9 sm:pb-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-gray-100 pt-4 sm:pt-6">
                  <p className="text-xs sm:text-sm text-brand-navy/55 font-semibold">
                    Vuoi approfondire questa edizione? Prenota una call con un Advisor.
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-3">
                    <a
                      href={contactHref ?? '#prezzo'}
                      onClick={(e) => {
                        e.preventDefault();
                        if (contactHref) {
                          document.querySelector(contactHref)?.scrollIntoView({ behavior: 'smooth' });
                          return;
                        }
                        // Preseleziona livello (TAB) ed edizione (variazione) nella sezione prezzi, poi scrolla.
                        const wk =
                          effectiveLevelSlug === APCM_COMPLETE_LEVEL_SLUG ? 'completo' : effectiveLevelSlug;
                        const fee = course.fees.find((f) => f.wooKey === wk);
                        if (fee) setPaymentTab(fee.title.toLowerCase());
                        const prod = getWooProduct(id, wk);
                        const varId = prod
                          ? findWooVariationByStart(prod, effectiveCitySlug, editionStartISO(activeEdition))
                          : undefined;
                        if (varId && wk) setEditionByLevel((s) => ({ ...s, [wk]: varId }));
                        document.getElementById('prezzo')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="rounded-full bg-brand-navy px-3 py-3 text-[9px] sm:px-7 sm:py-3.5 sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.22em] text-white shadow-lg hover:bg-brand-accent transition-colors text-center"
                    >
                      {activeEdition.ctaLabel ?? 'Iscriviti a questa edizione'}
                    </a>
                    <a
                      href="#"
                      className="rounded-full border-2 border-brand-navy/20 px-3 py-3 text-[9px] sm:px-7 sm:py-3.5 sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.22em] text-brand-navy hover:bg-gray-50 transition-colors text-center"
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
      {course.scholarship && !contactHref ? (
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-[941px] mx-auto px-4">
            <div className="relative overflow-hidden rounded-[1.4rem] lg:rounded-[1.75rem] bg-brand-navy text-white px-5 py-6 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_30px_80px_-40px_rgba(0,21,51,0.5)]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-accent/30 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-5 lg:gap-10 items-center">
                <div>
                  {course.scholarship.eyebrow ? (
                    <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.26em] text-[#5E8AD0] mb-3 lg:mb-4">
                      {course.scholarship.eyebrow}
                    </p>
                  ) : null}
                  <h2 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-display font-black tracking-tight leading-[1.05] mb-3 lg:mb-5">
                    {course.scholarship.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#EEF4FC] leading-relaxed mb-4 lg:mb-6 max-w-xl">
                    {course.scholarship.body}
                  </p>
                  {course.scholarship.availability ? (
                    <p className="mx-auto lg:mx-0 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 ring-1 ring-[#5E8AD0]/30 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.18em] text-[#EEF4FC] mb-4 lg:mb-6">
                      Solo <span className="text-[#5E8AD0] text-sm">2</span> borse di studio rimaste
                    </p>
                  ) : null}
                  <div className="hidden lg:flex flex-col sm:flex-row gap-3">
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
                  <div className="rounded-2xl bg-white/8 ring-1 ring-white/15 p-4 sm:p-6 backdrop-blur-sm">
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#5E8AD0] mb-2">Importo borsa</p>
                    <p className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-none mb-3 sm:mb-4">
                      {course.scholarship.amount}
                    </p>
                    <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#CFE0F5] mb-3">Requisiti</p>
                    <ul className="grid gap-2 sm:block sm:space-y-2">
                      {course.scholarship.eligibility.map((e, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#EEF4FC] leading-snug">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#5E8AD0]" strokeWidth={2.25} />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {course.scholarship.ctaHref ? (
                <div className="relative mt-5 flex justify-center lg:hidden">
                  <Link
                    to={course.scholarship.ctaHref}
                    className="inline-flex items-center justify-center rounded-full bg-white text-brand-navy px-7 py-3 text-[10px] sm:px-8 sm:py-3.5 sm:text-[11px] font-black uppercase tracking-[0.22em] shadow-lg hover:bg-brand-accent hover:text-white transition-colors"
                  >
                    {course.scholarship.ctaLabel ?? 'Richiedi la borsa di studio'}
                  </Link>
                </div>
              ) : null}
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
              <span className="inline-flex items-center rounded-full bg-[#EEF4FC] px-3 py-1 text-[11px] font-black uppercase tracking-wide text-brand-navy ring-1 ring-brand-accent/15">
                {how.formazioneBadge}
              </span>
            ) : null}
          </div>
          <p className={`${tBody} max-w-3xl mb-10`}>{richText(how.formazioneIntro)}</p>

          {isCL ? (
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {(course.classDates ?? []).map((cd, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr] sm:grid-cols-[140px_1fr_auto] items-start gap-x-4 gap-y-1.5 sm:gap-6 py-5"
                >
                  <div className="flex flex-col">
                    {cd.badge ? (
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">
                        {cd.badge}
                      </span>
                    ) : null}
                    <span className="text-sm sm:text-base font-black text-brand-navy">{cd.date}</span>
                  </div>
                  <p className="col-span-2 sm:col-span-1 text-sm sm:text-base text-brand-navy/70 font-medium leading-snug">
                    {cd.note}
                  </p>
                  <div className="hidden sm:flex items-center gap-2 text-brand-navy shrink-0 md:justify-end">
                    <Clock size={16} strokeWidth={2} className="shrink-0" />
                    <span className="text-xs sm:text-sm font-black">18:30–20:00</span>
                  </div>
                </div>
              ))}
            </div>
          ) : scheduleColumns.length ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 border-t border-gray-200 py-10">
              {scheduleColumns.map((column, idx) => (
                <div key={idx} className={`flex gap-4 ${idx === 2 ? 'md:justify-end' : ''}`}>
                  <div className="mt-0.5 shrink-0 text-brand-navy">
                    {scheduleColumnIcon(column.icon)}
                  </div>
                  <div className={idx === 2 ? 'md:text-right' : ''}>
                    <p className="text-sm sm:text-base font-black text-brand-navy mb-2">{column.title}</p>
                    {column.body ? <p className={`${tBody}`}>{column.body}</p> : null}
                    {column.lines?.length ? (
                      <div className="space-y-2">
                        {column.lines.map((line, i) => (
                          <p key={i} className="text-sm sm:text-base font-black text-brand-navy leading-snug">
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
          )}

          <div className="mt-12 rounded-2xl bg-[#EEF4FC] px-6 py-8 sm:px-10 sm:py-10">
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
                href={editions.length > 0 ? '#calendario-edizioni' : studyMode.linkHref}
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
            {isCoachingCircle ? (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Sessione singola</h3>
                  <p className={tBody}>
                    Acquisti la singola sessione di pratica e prenoti la data dal calendario, senza impegni ricorrenti.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Acquisto una tantum
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Data scelta dal calendario
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Formato</h3>
                  <p className={tBody}>
                    3,30h in videochiamata, gruppi da 4: alterni i ruoli di coach, cliente e osservatore con supervisione del mentor MCC.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> 20' come coach + 30' di feedback
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Apprendimento dalle tre posizioni
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-[#E6F7F5] p-6 sm:p-8 space-y-4 flex flex-col h-full border border-[#D1EBE7]">
                  <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-tight leading-snug">{admissionBox.title}</h3>
                  <p className="text-[#0F766E] text-sm leading-relaxed font-semibold">{admissionBox.body}</p>
                </div>
              </>
            ) : isVoiceDialogue ? (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Full immersion in aula</h3>
                  <p className={tBody}>
                    3 giornate concentrate in presenza a Milano (09:00–18:00) per acquisire le tecniche di base e applicarle subito.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> 8 ore di laboratorio al giorno
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Lab Inner online in parallelo
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Allenamento esperienziale</h3>
                  <p className={tBody}>
                    Si impara facendo: sperimenti le tecniche in prima persona e ricevi feedback dai trainer su casi reali.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Pratica diretta con i trainer
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Confronto con colleghi su Inner
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-[#E6F7F5] p-6 sm:p-8 space-y-4 flex flex-col h-full border border-[#D1EBE7]">
                  <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-tight leading-snug">{admissionBox.title}</h3>
                  <p className="text-[#0F766E] text-sm leading-relaxed font-semibold">{admissionBox.body}</p>
                </div>
              </>
            ) : isCL ? (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Facilitazione, non lezioni frontali</h3>
                  <p className={tBody}>
                    Ogni incontro tratta un tema, spesso mutuato da altre discipline, riletto con la prospettiva del coaching. La modalità è interattiva: puoi integrare e portare le tue riflessioni su quanto viene esposto.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Temi da storia, business, filosofia, psicologia
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Partecipazione attiva di tutti
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Iscrizione e calendario</h3>
                  <p className={tBody}>
                    All'iscrizione ricevi il calendario completo. 3-4 giorni prima di ogni incontro ricevi link Zoom e titolo: scegli liberamente se partecipare a quella o alla successiva.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Zoom · 18:30–20:00, una volta al mese
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Live Class non recuperabili
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-[#E6F7F5] p-6 sm:p-8 space-y-4 flex flex-col h-full border border-[#D1EBE7]">
                  <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-tight leading-snug">{admissionBox.title}</h3>
                  <p className="text-[#0F766E] text-sm leading-relaxed font-semibold">{admissionBox.body}</p>
                </div>
              </>
            ) : isWorkout ? (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Allenamento, non teoria</h3>
                  <p className={tBody}>
                    Ogni Workout è un'esperienza guidata: si impara facendo, non ascoltando. Lo spazio, gli strumenti e i coach ti accompagnano anche nei momenti più difficili, senza farti perdere nelle distrazioni.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> 4 Workout da 60 min per Round
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Esperienze consapevoli e mirate
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Ritmo e impegno</h3>
                  <p className={tBody}>
                    I Round seguono il calendario e ogni Workout è live in video conferenza dalle 18:30 alle 19:30. Nessuna sequenza obbligata: scegli il set di emozioni e quando iniziare.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Live dalle 18:30 alle 19:30
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0" /> Round ripetibile sullo stesso set
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-[#E6F7F5] p-6 sm:p-8 space-y-4 flex flex-col h-full border border-[#D1EBE7]">
                  <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-tight leading-snug">{admissionBox.title}</h3>
                  <p className="text-[#0F766E] text-sm leading-relaxed font-semibold">{admissionBox.body}</p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Flessibilità</h3>
                  <p className={tBody}>
                    Le lezioni seguono le date del calendario e, quando sono online, si svolgono dalle 18:30 alle 20:00: un ritmo compatibile con studio o lavoro, con preparazione e report tra una sessione e l'altra.
                  </p>
                  <ul className="space-y-3 pt-2">
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Date definite dal calendario
                    </li>
                    <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                      <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Esercitazioni e report guidati
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
              </>
            )}
          </div>
        </div>
      </section>

      {/* 5c. LEVELS COMPARISON */}
      {course.levelsComparison ? (
        <section className="py-14 sm:py-16 lg:py-20 bg-white overflow-visible">
          <div className="max-w-[1100px] mx-auto px-4 overflow-visible">
            <div className="text-center mb-7 lg:mb-12">
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

            <div
              ref={levelsScrollerRef}
              className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-visible px-[13vw] pt-5 pb-2 scroll-smooth md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pt-6 md:pb-0 lg:gap-6 items-stretch"
              style={{ scrollbarWidth: 'none' }}
            >
              {course.levelsComparison.levels.map((lvl, i) => (
                <div
                  key={i}
                  data-level-highlight={lvl.highlight ? 'true' : undefined}
                  className={`relative flex min-h-[430px] w-[74vw] shrink-0 snap-center flex-col rounded-[1.35rem] sm:rounded-[1.5rem] p-4 md:min-h-0 md:w-auto md:shrink md:p-6 lg:p-7 ring-1 ${
                    lvl.highlight
                      ? 'bg-brand-navy text-white ring-brand-navy shadow-[0_30px_80px_-40px_rgba(0,21,51,0.55)] lg:scale-[1.03]'
                      : i === 0
                        ? 'bg-[#EEF4FC] text-brand-navy ring-brand-blue-soft shadow-[0_12px_40px_-28px_rgba(0,21,51,0.22)]'
                        : 'bg-[#5E8AD0] text-white ring-[#5E8AD0] shadow-[0_18px_50px_-28px_rgba(42,86,168,0.4)]'
                  }`}
                >
                  {lvl.highlight ? (
                    <span className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 inline-flex items-center rounded-full bg-brand-accent px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-white shadow-lg whitespace-nowrap">
                      Più scelto
                    </span>
                  ) : null}
                  <p className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] sm:tracking-[0.22em] mb-2 ${lvl.highlight || i === 0 ? 'text-brand-accent' : 'text-white/75'}`}>
                    {lvl.label}
                  </p>
                  <h3 className={`text-base sm:text-2xl font-display font-black tracking-tight leading-tight mb-2 sm:mb-3 ${lvl.highlight || i === 2 ? 'text-white' : 'text-brand-navy'}`}>
                    {lvl.name}
                  </h3>
                  {lvl.hours ? (
                    <p className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.16em] sm:tracking-[0.18em] mb-3 sm:mb-5 ${lvl.highlight || i === 2 ? 'text-white/60' : 'text-brand-navy/45'}`}>
                      {lvl.hours}
                    </p>
                  ) : null}
                  <div className="mb-3 sm:mb-5">
                    {lvl.originalPrice ? (
                      <p className={`text-base font-bold line-through leading-none mb-1 ${lvl.highlight || i === 2 ? 'text-white/55' : 'text-brand-navy/40'}`}>
                        {lvl.originalPrice}
                      </p>
                    ) : null}
                    <p className={`text-2xl sm:text-4xl font-display font-black tracking-tight leading-none ${lvl.highlight || i === 2 ? 'text-white' : 'text-brand-navy'}`}>
                      {lvl.price}
                    </p>
                    {lvl.priceLabel ? (
                      <p className={`text-xs font-semibold mt-1 ${lvl.highlight || i === 2 ? 'text-white/70' : 'text-brand-navy/55'}`}>
                        {lvl.priceLabel}
                      </p>
                    ) : null}
                    {lvl.saving ? (
                      <span className={`mt-2 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] ${lvl.highlight || i === 2 ? 'bg-white/15 text-white' : 'bg-[#E8F5EC] text-[#008060]'}`}>
                        {lvl.saving}
                      </span>
                    ) : null}
                  </div>
                  {lvl.benefit ? (
                    <p className={`inline-flex self-start items-center rounded-full px-3 py-1.5 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.16em] sm:tracking-[0.18em] mb-3 sm:mb-5 ${
                      lvl.highlight ? 'bg-brand-accent/20 text-brand-accent' : i === 0 ? 'bg-brand-accent/10 text-brand-accent' : 'bg-white/15 text-white'
                    }`}>
                      {lvl.benefit}
                    </p>
                  ) : null}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 flex-1">
                    {lvl.features.map((f, j) => (
                      <li key={j} className={`flex items-start gap-2 text-xs sm:text-sm leading-snug ${lvl.highlight || i === 2 ? 'text-white/85' : 'text-brand-navy/75'}`}>
                        <CheckCircle2
                          size={14}
                          className={`mt-0.5 shrink-0 ${lvl.highlight ? 'text-brand-accent' : 'text-brand-accent'}`}
                          strokeWidth={2.25}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => {
                      if (contactHref) {
                        document.querySelector(contactHref)?.scrollIntoView({ behavior: 'smooth' });
                        return;
                      }
                      if (lvl.feeTab) setPaymentTab(lvl.feeTab.toLowerCase());
                      document.getElementById('prezzo')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.18em] sm:tracking-[0.22em] transition-colors ${
                      lvl.highlight
                        ? 'bg-white text-brand-navy hover:bg-brand-accent hover:text-white'
                        : i === 0 ? 'bg-brand-navy text-white hover:bg-brand-accent' : 'bg-white text-brand-navy hover:bg-brand-navy hover:text-white'
                    }`}
                  >
                    {contactHref ? (contactLabel ?? 'Richiedi la borsa') : 'Iscriviti'}
                  </button>
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
        <section id="docenti" className="relative py-12 lg:py-24 bg-brand-navy overflow-hidden">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
          <div className="relative max-w-[941px] mx-auto px-4">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-7 lg:mb-10">
              <div className="max-w-2xl">
                <p className="text-brand-accent text-[11px] font-display font-black uppercase tracking-[0.18em] mb-3">
                  Docenti del corso
                </p>
                <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-display font-black text-white tracking-tight leading-[1.05]">
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
                  className="snap-start shrink-0 w-[220px] sm:w-[280px] rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden relative aspect-[3/4] bg-brand-navy/80 group"
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
                  <div className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5 text-white">
                    <h3 className="font-display font-black text-xl sm:text-2xl leading-[1.05] tracking-tight mb-2">
                      {t.name}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] font-medium text-white/85 leading-snug mb-3 sm:mb-4">
                      {t.role}
                      {t.creds ? <span className="text-white/60"> · {t.creds}</span> : null}
                    </p>
                    {t.bio ? (
                      <p className="text-[11px] sm:text-[12px] text-white/70 leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
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
      {!contactHref && (
      <section id="prezzo" className="relative py-10 lg:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#5E8AD0_0%,#5E8AD0_55%,#5E8AD0_100%)]" />
        <div className="relative max-w-[941px] mx-auto px-4 text-center">
          <h2 className="text-[1.6rem] sm:text-3xl lg:text-4xl font-display font-black text-brand-navy tracking-tight leading-[1.08] mb-2 lg:mb-3 normal-case max-w-3xl mx-auto">
            La migliore formazione professionale, accessibile
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/80 font-medium mb-4 sm:mb-7">
            {isMasterLike
              ? `Scegli il metodo di pagamento per il tuo Master in ${course.subtitle}`
              : `Scegli il metodo di pagamento per ${course.title}`}
          </p>

          <div className="mx-auto max-w-[840px] rounded-full bg-white/25 p-1.5 ring-1 ring-white/40 backdrop-blur-[2px]">
            <div className="flex gap-1 overflow-x-auto">
              {course.fees.map((fee, idx) => {
                const key = fee.title.toLowerCase();
                const active = paymentTab === key;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPaymentTab(key)}
                    className={`min-w-[104px] sm:min-w-[140px] flex-1 whitespace-nowrap rounded-full px-3 py-2.5 sm:px-4 sm:py-3.5 text-[10px] sm:text-sm font-display font-black uppercase tracking-wide leading-tight transition-all ${
                      active
                        ? 'bg-white text-brand-navy shadow-[0_10px_24px_-14px_rgba(0,21,51,0.35)]'
                        : 'text-brand-navy/75 hover:text-brand-navy'
                    }`}
                  >
                    {fee.tabLabel ?? fee.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 sm:mt-5 rounded-[1.35rem] sm:rounded-[1.75rem] bg-white px-4 py-5 sm:px-10 sm:py-10 shadow-[0_30px_80px_-40px_rgba(0,21,51,0.4)] ring-1 ring-black/5">
            {course.fees.map((fee, idx) => {
              if (paymentTab !== fee.title.toLowerCase()) return null;
              const isInstallmentLike = fee.type === 'installment' || fee.type === 'zero-rate' || fee.type === 'after';
              const priceLabel = isInstallmentLike ? 'a partire da' : 'Prezzo del corso';
              // Deep-link al checkout Woo: scelta edizione → variazione (+ codice EB se attivo).
              const wooProduct = getWooProduct(id, fee.wooKey);
              const upcomingWoo = wooProduct ? upcomingEditions(wooProduct.editions) : [];
              const selectedVariation = editionByLevel[fee.wooKey ?? ''] ?? upcomingWoo[0]?.variationId;
              // Mostra le edizioni in arrivo; se la preselezione (dalla sezione date) punta a
              // un'edizione passata, la includo comunque così il menu la mostra selezionata.
              const wooEditions =
                !wooProduct || upcomingWoo.some((e) => e.variationId === selectedVariation)
                  ? upcomingWoo
                  : [...wooProduct.editions.filter((e) => e.variationId === selectedVariation), ...upcomingWoo];
              // Early Bird: lo sconto è già nel prezzo della variazione (offerta programmata su Woo),
              // quindi il carrello lo applica da solo — niente coupon nel link. `eb` serve solo a
              // mostrare il disclaimer "già applicato" con la scadenza giusta per livello.
              const eb = getEarlyBird(id, fee.wooKey);
              const ebActive = !!eb && Date.now() <= Date.parse(eb.deadlineISO);
              // Variabile (APCM…): variazione scelta dal menu. Semplice (Voice Dialogue, Continuous):
              // ID prodotto diretto. Draft/non collegabili (Coaching Circle, Public Speaking): nessun link.
              const simpleProductId = wooProduct ? null : getWooSimpleProductId(id);
              // Corsi con sconto quantità (es. Continuous): selettore libero, oppure quantità fissa di fascia.
              const qty = fee.wooQuantitySelector
                ? Math.max(1, qtyByFee[fee.title] ?? 1)
                : fee.wooQuantity ?? 1;
              // Esame ASTC: se l'edizione scelta ha una variazione "con esame" e la checkbox è attiva,
              // il link punta a quella (stesso corso + esame, +450€).
              const selectedEd = wooEditions.find((e) => e.variationId === selectedVariation);
              const examAvailable = !!selectedEd?.examVariationId;
              const examOn = examAvailable && !!examByFee[fee.title];
              const cartVariation = examOn ? selectedEd!.examVariationId! : selectedVariation;
              const checkoutHref = cartVariation
                ? wooAddToCartUrl(cartVariation, { quantity: qty })
                : simpleProductId
                  ? wooAddToCartUrl(simpleProductId, { quantity: qty })
                  : undefined;
              return (
                <div key={idx} className="mx-auto max-w-xl text-center">
                  <h3 className="text-lg sm:text-2xl font-display font-black text-brand-navy mb-2 sm:mb-2.5 normal-case tracking-tight leading-tight">
                    {fee.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-navy/80 font-medium leading-relaxed mb-4 sm:mb-5 max-w-lg mx-auto">
                    {richText(fee.desc)}
                  </p>

                  <p className="text-xs sm:text-sm font-semibold text-brand-navy/70 mb-2 normal-case tracking-normal">
                    {priceLabel}
                  </p>

                  <div className="mx-auto mb-4 sm:mb-5 inline-block rounded-2xl bg-brand-accent px-6 py-2.5 sm:px-8 sm:py-3.5 shadow-[0_14px_40px_-16px_rgba(29,59,185,0.7)]">
                    <p className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight leading-none">
                      {fee.price}
                      {fee.priceLabel ? (
                        <span className="text-lg sm:text-xl font-black">{fee.priceLabel}</span>
                      ) : null}
                    </p>
                  </div>

                  {ebActive && eb ? (
                    <p className="text-brand-navy/55 text-[11px] sm:text-xs font-medium leading-relaxed mb-4">
                      <span className="font-bold text-[#008060]">Early Bird</span>
                      {eb.discountLabel ? ` −${eb.discountLabel}` : ''} valido fino al {eb.deadlineLabel} —
                      applicato al checkout
                    </p>
                  ) : null}

                  {fee.financing ? (
                    <div className="mx-auto mb-4 max-w-md rounded-2xl bg-[#EAF7F1] px-4 py-2.5 sm:px-5 sm:py-3 ring-1 ring-[#008060]/15">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#008060] mb-1">
                        {fee.financing.label}
                      </p>
                      <p className="text-lg sm:text-2xl font-display font-black tracking-tight text-brand-navy">
                        {fee.financing.amount}
                      </p>
                      <p className="mt-1 text-xs font-medium leading-relaxed text-brand-navy/60">
                        {fee.financing.note}
                      </p>
                    </div>
                  ) : null}

                  {fee.footnote ? (
                    <p className="text-brand-navy/55 text-[11px] sm:text-xs font-medium leading-relaxed mb-5">
                      {fee.footnote}
                    </p>
                  ) : (
                    <div className="mb-5" />
                  )}

                  {wooProduct && wooEditions.length > 1 ? (
                    <div className="mx-auto mb-4 sm:mb-6 max-w-xs text-left">
                      <label
                        htmlFor={`edition-${fee.wooKey}`}
                        className="block text-[11px] font-black uppercase tracking-[0.18em] text-brand-navy/60 mb-1.5"
                      >
                        Scegli l'edizione
                      </label>
                      <select
                        id={`edition-${fee.wooKey}`}
                        value={selectedVariation}
                        onChange={(e) =>
                          setEditionByLevel((s) => ({ ...s, [fee.wooKey ?? '']: Number(e.target.value) }))
                        }
                        className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-2.5 sm:py-3 text-sm font-semibold text-brand-navy focus:outline-none focus:border-brand-accent"
                      >
                        {wooEditions.map((ed) => (
                          <option key={ed.variationId} value={ed.variationId}>
                            {ed.city ? `${ed.city} · ${ed.label}` : ed.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}

                  {examAvailable ? (
                    <label className="mx-auto mb-4 sm:mb-6 flex max-w-xs cursor-pointer items-start gap-2.5 rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        checked={!!examByFee[fee.title]}
                        onChange={(e) => setExamByFee((s) => ({ ...s, [fee.title]: e.target.checked }))}
                        className="mt-0.5 h-4 w-4 accent-brand-accent"
                      />
                      <span className="text-xs font-semibold leading-snug text-brand-navy">
                        Aggiungi esame Expert{' '}
                        <span className="font-black text-[#008060]">+{ASTC_EXAM_PRICE_LABEL}</span>
                        <span className="mt-0.5 block text-[11px] font-medium text-brand-navy/55">
                          Certificazione finale · richiede il percorso 1° + 2° livello
                        </span>
                      </span>
                    </label>
                  ) : null}

                  {fee.wooQuantitySelector ? (
                    <div className="mx-auto mb-4 sm:mb-6 max-w-xs text-left">
                      <label
                        htmlFor={`qty-${idx}`}
                        className="block text-[11px] font-black uppercase tracking-[0.18em] text-brand-navy/60 mb-1.5"
                      >
                        {fee.wooQuantityLabel ?? 'Quante Live Class'}
                      </label>
                      <select
                        id={`qty-${idx}`}
                        value={qtyByFee[fee.title] ?? 1}
                        onChange={(e) =>
                          setQtyByFee((s) => ({ ...s, [fee.title]: Number(e.target.value) }))
                        }
                        className="w-full rounded-xl border border-brand-navy/15 bg-white px-4 py-3 text-sm font-semibold text-brand-navy focus:outline-none focus:border-brand-accent"
                      >
                        {(fee.wooQuantityOptions ?? [
                          { value: 1, label: '1 Live Class — 16€ + IVA' },
                          { value: 2, label: '2 Live Class — 16€ + IVA cad.' },
                          { value: 3, label: '3 Live Class — 12€ + IVA cad.' },
                          { value: 4, label: '4 Live Class — 12€ + IVA cad.' },
                          { value: 5, label: '5 Live Class — 12€ + IVA cad.' },
                          { value: 6, label: '6 Live Class — 12€ + IVA cad.' },
                          { value: 7, label: '7 Live Class — 12€ + IVA cad.' },
                          { value: 8, label: '8 Live Class — 9€ + IVA cad.' },
                          { value: 9, label: '9 Live Class — 9€ + IVA cad.' },
                          { value: 10, label: '10 Live Class — 9€ + IVA cad.' },
                          { value: 12, label: '12 Live Class — 9€ + IVA cad.' },
                        ]).map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-brand-navy/55">
                        {fee.wooQuantityHint ?? 'Il prezzo per Live Class cala con la quantità (16€ · 12€ · 9€): la fascia giusta si applica da sola nel carrello.'}
                      </p>
                    </div>
                  ) : null}

                  <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-4 sm:flex-row sm:justify-center">
                    {checkoutHref ? (
                      <a
                        href={checkoutHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-[#001D4B] px-3 py-3.5 sm:px-10 sm:py-4 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.26em] text-white shadow-lg hover:bg-[#2A56A8] active:scale-[0.98]"
                      >
                        {fee.ctaLabel ?? 'Iscriviti ora'}
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="rounded-full bg-[#001D4B] px-3 py-3.5 sm:px-10 sm:py-4 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.26em] text-white shadow-lg hover:bg-[#2A56A8] active:scale-[0.98]"
                      >
                        {fee.ctaLabel ?? 'Iscriviti ora'}
                      </button>
                    )}
                    <button
                      type="button"
                      className="rounded-full border-2 border-brand-navy/25 bg-white px-3 py-3.5 sm:px-10 sm:py-4 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.12em] sm:tracking-[0.26em] text-brand-navy hover:bg-gray-50 active:scale-[0.98]"
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
      )}

      {/* 6b. GUARANTEE 30 HOURS */}
      {course.guarantee30Hours ? (
        <section className="py-10 lg:py-20 bg-white">
          <div className="max-w-[941px] mx-auto px-4">
            <div className="rounded-[1.35rem] lg:rounded-[1.75rem] bg-[#EEF4FC] p-5 sm:p-7 lg:p-9 ring-1 ring-black/5">
              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-5 lg:gap-10 items-start">
                <div>
                  {course.guarantee30Hours.eyebrow ? (
                    <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.26em] text-brand-accent mb-3 lg:mb-4">
                      {course.guarantee30Hours.eyebrow}
                    </p>
                  ) : null}
                  <div className="inline-flex items-center gap-3 mb-3 lg:mb-5">
                    <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand-navy text-white">
                      <Hourglass size={18} strokeWidth={2.25} />
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-navy tracking-tight leading-[1.05] mb-3 lg:mb-5">
                    {course.guarantee30Hours.title}
                  </h2>
                  <p className="text-sm sm:text-base text-brand-navy/75 leading-relaxed mb-4 lg:mb-6">
                    {richText(course.guarantee30Hours.body)}
                  </p>
                  {course.guarantee30Hours.refunds?.length ? (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {course.guarantee30Hours.refunds.map((r, i) => (
                        <div key={i} className="rounded-xl bg-white ring-1 ring-black/5 p-3 sm:p-4">
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
                  <div className="grid gap-3 sm:space-y-4 sm:block">
                    {course.guarantee30Hours.steps.map((s, i) => (
                      <div key={i} className="rounded-2xl bg-white ring-1 ring-black/5 p-4 sm:p-6 shadow-[0_8px_30px_-22px_rgba(0,21,51,0.2)]">
                        <h3 className="text-sm sm:text-base font-display font-black text-brand-navy tracking-tight leading-tight mb-2">
                          {s.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed">
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
      <section className="py-7 lg:py-14 bg-brand-blue-soft">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 lg:gap-8">
                <div className="flex flex-row items-center gap-4 sm:gap-8 text-left">
                   <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg">
                      <img
                        src="/advisors/advisor-3.jpeg"
                        className="w-full h-full object-cover object-top"
                        alt="Advisor Asterys Lab"
                      />
                   </div>
                   <div>
                      <h3 className="text-base sm:text-xl font-display font-black text-brand-navy tracking-tight mb-1 sm:mb-2 leading-snug">Troviamo insieme la soluzione giusta per te</h3>
                      <p className="text-xs sm:text-base text-brand-navy/65 font-medium leading-relaxed max-w-md">Scopri i dettagli del percorso e parla con un Advisor Asterys Lab.</p>
                   </div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-brand-navy text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full font-display font-black text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.2em] hover:bg-brand-accent transition-all shadow-lg active:scale-[0.98] shrink-0 w-full sm:w-auto">SCRIVICI SU WHATSAPP</a>
            </div>
         </div>
      </section>

      {/* 8. CAREER CENTER SECTION */}
      {id === 'apcm' ? (
      <section id="career" className="py-10 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4 text-center">
            <div className="mb-7 lg:mb-16">
               <h2 className={`${tSection} mb-3 lg:mb-4`}>
                  Asterys Lab{' '}
                  <span className={id === 'apcm' ? 'lg:underline lg:decoration-brand-accent lg:decoration-[0.18em] lg:underline-offset-[0.14em]' : ''}>
                    Career
                  </span>
               </h2>
               <p className={`${tBody} max-w-2xl mx-auto text-center`}>
                  {course.career.content}
               </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 sm:gap-x-8 sm:gap-y-8">
               {course.career.points.map((p, i) => (
                 <div
                   key={i}
                   className={`flex flex-col items-start text-left ${
                     id === 'apcm'
                       ? 'lg:p-7 lg:bg-white lg:rounded-[1.25rem] lg:shadow-[0_16px_44px_-30px_rgba(0,21,51,0.2)] lg:border lg:border-gray-100 lg:h-full lg:group lg:hover:shadow-[0_22px_55px_-32px_rgba(0,21,51,0.22)] lg:transition-all'
                       : ''
                   }`}
                 >
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 bg-[#EEF4FC] rounded-full flex items-center justify-center text-brand-accent mb-3 ring-1 ring-brand-navy/5 ${
                      id === 'apcm'
                        ? 'lg:bg-[#F9FAFB] lg:mb-6 lg:ring-black/5 lg:group-hover:bg-brand-navy lg:group-hover:text-white lg:transition-colors'
                        : ''
                    }`}>
                       {i === 0 ? <UserCheck size={18} strokeWidth={2} /> : i === 1 ? <Briefcase size={18} strokeWidth={2} /> : i === 2 ? <TrendingUp size={18} strokeWidth={2} /> : <Users size={18} strokeWidth={2} />}
                    </div>
                    <h3 className={`text-[12px] sm:text-base font-black uppercase tracking-tight mb-1.5 sm:mb-2 leading-snug ${
                      id === 'apcm' ? 'lg:mb-3' : ''
                    }`}>{p.title}</h3>
                    <p className="text-brand-navy/50 text-[11px] sm:text-xs font-medium leading-relaxed">{p.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
      ) : null}

      {course.pegasusProgram ? (
        <section id="pegasus" className="py-10 lg:py-20 bg-[#001D4B] text-white">
          <div className="max-w-[941px] mx-auto px-4">
            <div className="grid grid-cols-[auto_1fr] gap-4 lg:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-2xl bg-white p-2.5 sm:p-4 ring-1 ring-white/15 shadow-[0_18px_48px_-30px_rgba(0,0,0,0.55)] lg:bg-transparent lg:p-0 lg:ring-0 lg:shadow-none">
                  <img
                    src={course.pegasusProgram.logo}
                    alt="Pegasus Coaching Program"
                    className="h-16 sm:h-32 w-auto object-contain"
                  />
                </div>
              </div>
              <div>
                {course.pegasusProgram.eyebrow ? (
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#5E8AD0] mb-3">
                    {course.pegasusProgram.eyebrow}
                  </p>
                ) : null}
                <h2 className="text-xl sm:text-4xl lg:text-[2.65rem] font-display font-black uppercase tracking-tighter leading-[1.05] mb-2 sm:mb-4">
                  {course.pegasusProgram.title}
                </h2>
                <p className="text-xs sm:text-base text-white/68 font-medium leading-relaxed max-w-2xl">
                  {course.pegasusProgram.intro}
                </p>
              </div>
            </div>

            <div className="mt-5 lg:mt-9 grid grid-cols-1 md:grid-cols-3 gap-2.5 lg:gap-4">
              {course.pegasusProgram.points.map((point, i) => (
                <div key={i} className="rounded-xl sm:rounded-2xl bg-white/[0.07] p-3.5 sm:p-6 ring-1 ring-white/10">
                  {point.meta ? (
                    <p className="mb-2 sm:mb-4 text-[10px] font-black uppercase tracking-[0.22em] text-[#CFE0F5]">
                      {point.meta}
                    </p>
                  ) : null}
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight leading-snug mb-2 sm:mb-3">
                    {point.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-white/62 font-medium leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {course.pegasusProgram.note ? (
              <p className="mt-6 text-[11px] font-semibold leading-relaxed text-white/42">
                {course.pegasusProgram.note}
              </p>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* 8b. COMPETENZE & SBOCCHI LAVORATIVI */}
      {!isCoachingCircle ? (
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
               {competenciesAndCareers.careerPaths.length > 0 ? (
               <div className="grid grid-cols-2 gap-2 p-2 bg-[#EEF4FC] border-b border-gray-100">
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
                      careerTab === 'competencies' ? 'bg-[#EEF4FC] text-brand-accent' : 'bg-brand-navy/5 text-brand-navy/50'
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
                    <Compass size={16} strokeWidth={2.25} className={careerTab === 'careers' ? 'text-[#CFE0F5]' : ''} />
                    <span>Sbocchi professionali</span>
                    <span className={`hidden sm:inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full px-1.5 text-[10px] font-black ${
                      careerTab === 'careers' ? 'bg-[#CFE0F5] text-brand-navy' : 'bg-brand-navy/5 text-brand-navy/50'
                    }`}>
                      {competenciesAndCareers.careerPaths.length}
                    </span>
                  </button>
               </div>
               ) : null}

               {/* List area */}
               <div className="relative">
                  <AnimatePresence mode="wait" initial={false}>
                    {careerTab === 'competencies' || competenciesAndCareers.careerPaths.length === 0 ? (
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
      ) : null}

      <TestimonialsSection compact />

      {/* 9. UN PERCORSO FORMATIVO COMPLETO SECTION */}
      {!isCoachingCircle && !isWorkout && !isCL && id !== 'marketing-per-coach' ? (
      <section className="py-10 lg:py-24 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-3 lg:mb-4`}>
              Un percorso formativo{' '}
              <Highlight>completo</Highlight>
            </h2>
            <p className={`${tLead} mb-6 lg:mb-14 max-w-2xl`}>
              Scegli la formazione di Asterys Lab: qualità ICF, metodo e un percorso davvero professionale. Affidati a <span className="text-brand-navy font-black">20+ anni di esperienza</span> e a un metodo collaudato, costruito per accompagnarti con serietà lungo tutto il percorso.
            </p>

            <div className="space-y-3 lg:space-y-6">
               {/* Card 1 — full width, periwinkle, icon + text */}
               <div className="bg-[#CFE0F5] rounded-[1.35rem] lg:rounded-[2rem] p-4 sm:p-9 lg:p-11 flex flex-row sm:flex-row items-start gap-4 sm:gap-7 lg:gap-10 border border-white/40">
                  <div className="shrink-0 h-11 w-11 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-2xl bg-white/50 flex items-center justify-center ring-1 ring-white/60">
                     <Sparkles size={22} strokeWidth={2} className="text-brand-navy" />
                  </div>
                  <div className="flex-1 min-w-0">
                     <h3 className="text-lg sm:text-2xl lg:text-3xl font-display font-black text-brand-navy leading-tight mb-2 sm:mb-3 tracking-tight">
                       Mindset ICF e presenza del coach
                     </h3>
                     <p className="text-xs sm:text-base text-brand-navy/70 font-medium leading-relaxed max-w-2xl">
                       Il coaching parte da chi sei. Alleni presenza, ascolto e capacità di generare consapevolezza prima degli strumenti — un metodo ICF integrato con intelligenza emotiva e approccio sistemico.
                     </p>
                  </div>
               </div>

               {/* Row 2 — two cards side by side */}
               <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-6">
                  {/* Card 2 — cyan/blue gradient, text top, image bottom */}
                  <div className={`col-span-2 min-[480px]:col-span-1 lg:col-span-3 bg-gradient-to-br from-[#C8F2FB] to-[#EEF4FC] rounded-[1.35rem] lg:rounded-[2rem] p-4 sm:p-7 lg:p-8 overflow-hidden border border-white/40 flex flex-col ${usesApcmCompleteSection ? 'relative min-h-[260px] sm:min-h-[438px] lg:h-[430px]' : ''}`}>
                     <h3 className={`${usesApcmCompleteSection ? 'relative z-10' : ''} text-lg sm:text-2xl lg:text-3xl font-display font-black text-brand-navy leading-tight mb-2 sm:mb-3 tracking-tight`}>
                       {usesApcmCompleteSection ? (
                         <>
                           Piattaforma didattica
                           <br />
                           potenziata dall'AI
                         </>
                       ) : (
                         'Piattaforma didattica con registrazioni'
                       )}
                     </h3>
                     <p className={`${usesApcmCompleteSection ? 'relative z-10' : ''} text-xs sm:text-base text-brand-navy/70 font-medium leading-relaxed mb-4 sm:mb-6 max-w-md`}>
                       {usesApcmCompleteSection
                         ? 'Trovi materiali, dispense e strumenti di supporto al percorso. Le eventuali registrazioni sono riservate a uso interno e non sono accessibili agli studenti.'
                         : 'Registrazioni, materiali strutturati e percorsi di recupero: la piattaforma tiene il filo di ogni lezione. Hai perso una sessione? Riprendi il tuo ritmo senza stress.'}
                     </p>
                     <div className={usesApcmCompleteSection ? 'pointer-events-none absolute inset-x-0 bottom-0 h-[145px] sm:h-[256px] lg:h-[260px] overflow-hidden' : 'mt-auto -mb-2 -mr-2 lg:-mb-4 lg:-mr-4'}>
                       {usesApcmCompleteSection ? (
                         <img
                           src={media.completePlatform}
                           className="absolute left-1/2 bottom-[-120px] w-[178%] max-w-none -translate-x-1/2 object-contain sm:bottom-[-226px] sm:w-[194%] lg:bottom-[-240px] lg:w-[200%]"
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

                  {/* Card 3 — blue accent, image top, text bottom */}
                  <div className={`col-span-2 min-[480px]:col-span-1 lg:col-span-2 bg-[#CFE0F5] rounded-[1.35rem] lg:rounded-[2rem] p-4 sm:p-7 lg:p-8 flex flex-col border border-[#5E8AD0]/40 ${usesApcmCompleteSection ? 'relative overflow-hidden min-h-[220px] pb-[80px] sm:min-h-[438px] sm:pb-7 lg:h-[430px] lg:pb-8' : 'overflow-hidden'}`}>
                     <h3 className="text-lg sm:text-2xl font-display font-black text-brand-navy leading-tight mb-2 sm:mb-3 tracking-tight">
                       {id === 'apcm' ? 'Supporto 1:1' : usesApcmCompleteSection ? 'Supporto 1:1 con tutor' : 'Supervisione 1:1 con Mentor MCC'}
                     </h3>
                     <p className="relative z-10 text-xs sm:text-sm text-brand-navy/75 font-medium leading-relaxed">
                       {id === 'apcm'
                         ? "Lungo tutto il percorso i trainer ti supportano nella creazione di checkpoint da prima dell'iscrizione e anche dopo l'ottenimento della credenziale."
                         : usesApcmCompleteSection
                         ? "Lungo tutto il percorso tutor e teacher ti supportano con incontri individuali in aula virtuale e checkpoint, fuori dall'orario di lavoro."
                         : 'Mentor Coach MCC ti affiancano con sessioni individuali, feedback certificati ICF e check-point sul tuo stile — il salto di qualità verso la certificazione.'}
                     </p>
                     <div className={usesApcmCompleteSection ? 'pointer-events-none absolute inset-x-0 bottom-0 h-[72px] sm:h-[252px] lg:h-[260px]' : 'mb-6'}>
                       {usesApcmCompleteSection ? (
                         <img
                           src={media.completePractical}
                           className="absolute left-1/2 bottom-[-8px] w-[85%] max-w-none -translate-x-1/2 object-contain sm:bottom-[-70px] sm:w-[188%] lg:bottom-[-74px] lg:w-[190%]"
                           alt="Supervisione 1:1"
                         />
                       ) : (
                         <CourseImage
                           src={media.completePractical}
                           fallbackSrc={defaultCourseMedia(id ?? 'corso').completePractical}
                           className="w-full rounded-xl lg:rounded-2xl shadow-[0_20px_50px_-26px_rgba(0,21,51,0.4)]"
                           alt="Supervisione 1:1"
                         />
                       )}
                     </div>
                  </div>
               </div>

               {/* Card 4 — full width, brand-accent blue, icon + text */}
               <div className="bg-brand-accent rounded-[1.35rem] lg:rounded-[2rem] p-4 sm:p-9 lg:p-11 flex flex-row sm:flex-row items-start gap-4 sm:gap-7 lg:gap-10 text-white relative overflow-hidden">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                  <div className="relative shrink-0 h-11 w-11 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-2xl bg-white/15 flex items-center justify-center ring-1 ring-white/25">
                     <Briefcase size={22} strokeWidth={2} />
                  </div>
                  <div className="relative flex-1 min-w-0">
                     <h3 className="text-lg sm:text-2xl lg:text-3xl font-display font-black leading-tight mb-2 sm:mb-3 tracking-tight">
                       {isVoiceDialogue ? 'Community Alumni Asterys' : 'Community Alumni e opportunità continue'}
                     </h3>
                     <p className="text-xs sm:text-base text-white/80 font-medium leading-relaxed max-w-2xl">
                       {isVoiceDialogue ? (
                         <>Al termine del corso entri in contatto con la <span className="text-white font-black">community degli alumni Asterys</span>: eventi, formazione continua e occasioni di confronto tra professionisti del coaching e dello sviluppo personale.</>
                       ) : (
                         <>Alla fine del percorso entri nel network degli alumni Asterys: eventi, supervisione continuativa, collaborazioni e opportunità di lavoro con <span className="text-white font-black">oltre 3.000 professionisti</span> in Italia e all'estero.</>
                       )}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      ) : null}

      {/* 10. ACCELERA LA TUA CARRIERA SECTION */}
      <section className="py-8 lg:py-14 bg-[#2A56A8] text-white">
         <div className="max-w-[1100px] mx-auto px-4 sm:px-8">
               <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-left">
                  <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase tracking-tight leading-[1.05]">
                    {isCoachingCircle ? (
                      <>
                        Fai pratica di coaching: <span className="text-[#CFE0F5]">prenota il tuo posto</span>
                      </>
                    ) : (
                      <>
                        Accelera la tua carriera: <span className="text-[#CFE0F5]">parti da qui</span>
                      </>
                    )}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-white/70 font-medium max-w-md leading-relaxed">
                    {isCoachingCircle
                      ? "Dopo l'acquisto riceverai il link al calendario per scegliere la data più comoda tra quelle disponibili."
                      : isWorkout
                      ? 'Prenota il tuo Round: posti limitati. Scegli il set di emozioni e mettilo in agenda.'
                      : 'Inizia il tuo processo di ammissione gratis e senza impegno.'}
                  </p>
                  </div>
                  <button
                    onClick={() => contactHref && document.querySelector(contactHref)?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#CFE0F5] text-brand-navy px-7 py-3.5 sm:px-10 sm:py-4 rounded-full font-display font-black text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] shadow-lg hover:bg-white transition-all active:scale-[0.98] self-start sm:self-auto shrink-0"
                  >
                     {contactHref ? (contactLabel ?? 'RICHIEDI LA BORSA') : isCoachingCircle ? 'PRENOTA SULLO STORE' : 'INIZIA ORA'}
                  </button>
               </div>
         </div>
      </section>

      {/* 11. FAQs SECTION */}
      <section className="py-8 lg:py-20 bg-[#F9FAFB]/80">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-4 lg:mb-12`}>FAQs</h2>
            <div className="space-y-2 sm:space-y-4">
               {course.faqs.map((faq, i) => (
                 <div key={i} className="bg-white rounded-xl sm:rounded-3xl px-3.5 sm:px-10 border border-gray-100 shadow-[0_18px_50px_-32px_rgba(0,21,51,0.14)]">
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
