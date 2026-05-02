import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  MapPin,
  Quote,
  Star,
  Award,
  GraduationCap,
  Sparkles,
  MessageCircle,
  PlayCircle,
  Play,
  Video,
  X,
  Users,
  Target,
  Handshake,
  BriefcaseBusiness,
  BadgeCheck
} from 'lucide-react';
import { coursesContent, type CourseTestimonial } from '../constants/coursesContent';
import { CourseImage } from '../components/CourseImage';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

const homeTestimonials: CourseTestimonial[] = [
  {
    name: 'Nicola Fratiglioni',
    role: 'Business Coach',
    cohort: 'Video testimonianza',
    quote: 'Un racconto diretto sul percorso di coaching e sull’impatto del metodo Asterys Lab nella crescita professionale.',
    video: {
      poster: 'https://vumbnail.com/359988626.jpg',
      vimeoEmbedUrl: 'https://player.vimeo.com/video/359988626?badge=0&autopause=0&player_id=0&app_id=58479'
    }
  },
  {
    name: 'Alessandro Stocco',
    role: 'Coach',
    img: '/testimonials/people/alessandro-stocco.jpeg',
    quote:
      'Avevo aspettative limitate rispetto al corso. Non solo sono state ampiamente superate, ma ho scoperto passo dopo passo nuove possibilità e nuove consapevolezze.',
    rating: 5,
    cohort: 'Community Asterys Lab'
  },
  {
    name: 'Costanza Catapano',
    role: 'HR',
    img: '/testimonials/people/costanza-catapano.jpeg',
    quote:
      'Un viaggio alla scoperta di sé stessi e degli altri, accompagnato da trainer competenti e da un gruppo entusiasta ed eterogeneo.',
    rating: 5,
    cohort: 'Community Asterys Lab'
  },
  {
    name: 'Flora Pietropaolo',
    role: 'Recruiting Manager',
    cohort: 'Video testimonianza',
    quote: 'Una testimonianza sul valore del coaching nelle relazioni professionali, nello sviluppo delle persone e nei contesti HR.',
    video: {
      poster: 'https://vumbnail.com/365158982.jpg',
      vimeoEmbedUrl: 'https://player.vimeo.com/video/365158982?badge=0&autopause=0&player_id=0&app_id=58479'
    }
  },
  {
    name: 'Damiano Zanotti',
    role: 'COO presso Claypaky',
    img: '/testimonials/people/damiano-zanotti.jpeg',
    quote:
      'Questo percorso mi ha aiutato a cambiare come persona: essere più sensibile, ascoltare di più e portare questa qualità anche nel lavoro.',
    rating: 5,
    cohort: 'Community Asterys Lab'
  },
  {
    name: 'Camilla Pedrazzini',
    role: 'Product Manager HR',
    img: '/testimonials/people/camilla-pedrazzini.jpeg',
    quote:
      'Un percorso sulla consapevolezza. La scuola offre metodi e tecniche per accompagnare davvero un cliente verso il suo obiettivo.',
    rating: 5,
    cohort: 'Community Asterys Lab'
  }
];

/* 1. HERO */
const Hero = () => (
  <section className="relative bg-[#F2F7FF] overflow-hidden pb-6 lg:pb-0">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.08fr_0.92fr] gap-0 lg:gap-10 items-end min-h-0 lg:min-h-[500px]">
      <div className="relative lg:hidden -mx-4 sm:-mx-6">
        <img
          src="/home/hero-people.png"
          alt="Coach Asterys"
          className="w-full h-auto object-contain aspect-[16/10] object-bottom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20">
          <div className="inline-flex items-center gap-2 bg-[#DFFF38] px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.12em] text-brand-navy whitespace-nowrap">
            <span className="w-2 h-2 bg-brand-accent rounded-full" />
            ICF Accreditato
          </div>
        </div>
      </div>

      <div className="pt-12 lg:pt-14 pb-0 lg:pb-10 relative z-10 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-t-[2.6rem] lg:rounded-none bg-[#F2F7FF] -mt-8 lg:mt-0">
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
        <div className="absolute right-[-18%] bottom-0 w-[120vw] max-w-[1900px] min-w-[1360px]">
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
const AccreditamentoBadge = ({
  label,
  size,
  logo,
}: {
  label: string;
  size: string;
  logo?: string;
}) => {
  const base = import.meta.env.BASE_URL || '/';
  const [showFallback, setShowFallback] = useState(false);

  if (logo && !showFallback) {
    return (
      <div className="flex items-center gap-2">
        <img
          src={`${base}${logo}`}
          alt={label}
          className="h-16 md:h-20 w-auto object-contain"
          onError={() => setShowFallback(true)}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-brand-navy/80">
      <Award size={22} strokeWidth={2} />
      <span className={`font-black tracking-[0.2em] ${size}`}>{label}</span>
    </div>
  );
};

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
  const items = [
    { label: 'ICF', size: 'text-lg', logo: 'brand/icf.png' },
    { label: 'ACC', size: 'text-base', logo: 'brand/acc.png' },
    { label: 'PCC', size: 'text-base', logo: 'brand/pcc.png' },
    { label: 'CCE', size: 'text-base', logo: 'brand/cce.png' },
    { label: 'ACTC', size: 'text-base', logo: 'brand/actc.png' }
  ];
  return (
    <section className="bg-[#F2F7FF] border-t border-brand-navy/5">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-6">
        {items.map((i) => (
          <div key={i.label}>
            <AccreditamentoBadge label={i.label} size={i.size} logo={i.logo} />
          </div>
        ))}
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
            <span className="absolute top-4 left-4 bg-[#E2FF3B] text-brand-navy px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-[0.22em] shadow-sm">
              Master Full-Time
            </span>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-5 justify-center">
            <h3 className="text-[1.65rem] lg:text-[2.25rem] font-display font-black text-brand-accent leading-[1.05] tracking-tight">
              Professione Coach
            </h3>
            <div className="flex items-center gap-5 text-[11px] text-brand-accent font-bold uppercase tracking-[0.18em]">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> 6 mesi
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
                Garanzia di rimborso se non trovi lavoro
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
      desc: "Allena l'IE con esperienze consapevoli: modello CSI, fiore di Plutchik, coach dedicati.",
      start: 'Prossimo Round',
      lastSeats: true,
      seed: 'eiw'
    },
    {
      id: 'coaching-circle',
      title: 'Coaching Circle',
      duration: '3,30 ore · Gruppi da 4',
      desc: 'Pratica supervisionata di coaching con un mentor-coach PCC: feedback immediato e confronto tra pari.',
      start: 'Data condivisa nel gruppo',
      lastSeats: false,
      seed: 'coaching-circle'
    },
    {
      id: 'voice-dialogue',
      title: 'Voice Dialogue Skills',
      duration: '3 giornate · In aula',
      desc: 'Laboratorio intensivo per integrare il Voice Dialogue nella pratica di coaching, con Lab online su piattaforma Inner.',
      start: '17 novembre 2026',
      lastSeats: false,
      seed: 'voice-dialogue'
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      duration: '1 live class/mese',
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
                  Master Part-Time
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
                        <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#E2193A]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E2193A] animate-pulse" />
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
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#E2FF3B] mb-3">
              Nuove competenze in poche settimane
            </p>
            <h3 className="text-2xl lg:text-[1.75rem] font-display font-black leading-tight mb-3">
              Cerchi un corso breve?
            </h3>
            <p className="text-sm text-white/80 mb-5 leading-relaxed max-w-sm">
              Scopri i corsi brevi, pratici, in diretta con chi ti può guidare passo dopo passo.
            </p>
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#E2FF3B] group-hover:gap-3 transition-all">
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

/* 7. TESTIMONIANZE */
const Testimonianze = () => {
  const testimonials = homeTestimonials;
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const tLead = 'text-base sm:text-lg text-brand-navy/65 font-medium leading-relaxed max-w-2xl';
  const videoTestimonials = useMemo(() => testimonials.filter((t) => t.video), [testimonials]);
  const textTestimonials = useMemo(() => testimonials.filter((t) => !t.video), [testimonials]);
  const slides = useMemo(
    () =>
      textTestimonials.reduce<Array<{ video: CourseTestimonial; cards: CourseTestimonial[] }>>(
        (acc, testimonial, i) => {
          if (i % 2 === 0) {
            acc.push({ video: videoTestimonials[Math.min(acc.length, videoTestimonials.length - 1)], cards: [testimonial] });
          } else {
            acc[acc.length - 1].cards.push(testimonial);
          }
          return acc;
        },
        []
      ),
    [textTestimonials, videoTestimonials]
  );
  const goToSlide = (index: number) => {
    if (!slides.length) return;
    setActiveSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="testimonianze" className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#F4F6FB] to-white">
      <div className="max-w-[941px] mx-auto px-4">
        <div className="max-w-2xl mb-10 lg:mb-12">
          <p className="text-lg font-display font-black text-brand-accent mb-3">Testimonianze</p>
          <h2 className={`${tSection} uppercase mb-4`}>
            Storie di chi ha scelto <span className="text-brand-accent">Asterys Lab</span>
          </h2>
          <p className={tLead}>
            Professionisti che hanno trasformato la loro carriera con il nostro metodo. Video e racconti dalla nostra community.
          </p>
        </div>

        {slides.length > 0 ? (
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                drag={slides.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) goToSlide(activeSlide + 1);
                  if (info.offset.x > 70) goToSlide(activeSlide - 1);
                }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch ${activeSlide % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveVideoTestimonial(testimonials.findIndex((t) => t.name === slides[activeSlide].video.name))}
                  className="group relative overflow-hidden rounded-[1.5rem] lg:rounded-[1.75rem] text-left ring-1 ring-brand-navy/5 shadow-[0_24px_60px_-28px_rgba(0,21,51,0.45)] min-h-[340px] sm:min-h-[420px]"
                >
                  <img
                    src={slides[activeSlide].video.video?.poster}
                    alt={slides[activeSlide].video.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
                    <Video size={11} strokeWidth={2.75} />
                    Video
                  </div>
                  {slides[activeSlide].video.video?.duration ? (
                    <div className="absolute top-4 right-4 rounded-full bg-black/55 backdrop-blur px-2.5 py-1 text-[10px] font-black text-white tracking-wide">
                      {slides[activeSlide].video.video?.duration}
                    </div>
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] ring-4 ring-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white">
                      <Play size={28} strokeWidth={2.5} className="ml-1" fill="currentColor" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
                    <p className="font-display font-black leading-tight mb-0.5 text-lg lg:text-xl">{slides[activeSlide].video.name}</p>
                    <p className="text-[11px] lg:text-xs font-semibold text-white/75 leading-tight">{slides[activeSlide].video.role}</p>
                    {slides[activeSlide].video.cohort ? (
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent mt-2">
                        {slides[activeSlide].video.cohort}
                      </p>
                    ) : null}
                  </div>
                </button>

                <div className="grid grid-cols-1 gap-4">
                  {slides[activeSlide].cards.map((t, idx) => (
                    <div
                      key={`${t.name}-${idx}`}
                      className="relative flex flex-col bg-white rounded-[1.5rem] lg:rounded-[1.75rem] p-5 lg:p-6 border border-gray-100 shadow-[0_22px_60px_-32px_rgba(0,21,51,0.22)] overflow-hidden"
                    >
                      <div className="flex items-start justify-between mb-3 gap-3">
                        <div>
                          <p className="text-base font-black text-brand-navy leading-tight">{t.name}</p>
                          <p className="text-xs font-semibold text-brand-navy/60 mt-1">{t.role}</p>
                        </div>
                        {t.rating ? (
                          <div className="flex text-[#008060] gap-0.5 shrink-0">
                            {Array.from({ length: t.rating }).map((_, s) => (
                              <Star key={s} size={12} fill="currentColor" />
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <p className="text-[13px] lg:text-sm text-brand-navy/75 leading-relaxed font-medium flex-1 mb-4 line-clamp-4 min-h-0">
                        “{t.quote}”
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 shrink-0">
                        {t.cohort ? (
                          <p className="text-[10px] font-black uppercase tracking-wider text-brand-accent truncate">
                            {t.cohort}
                          </p>
                        ) : (
                          <span />
                        )}
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
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {slides.length > 1 ? (
              <div className="mt-6 flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Vai alla pagina testimonianze ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index
                        ? 'w-8 bg-brand-accent'
                        : 'w-2.5 bg-brand-navy/18 hover:bg-brand-navy/35'
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
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
                  {testimonials[activeVideoTestimonial].video?.vimeoEmbedUrl ? (
                    <iframe
                      src={testimonials[activeVideoTestimonial].video?.vimeoEmbedUrl}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={`Testimonianza video ${testimonials[activeVideoTestimonial].name}`}
                      allowFullScreen
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
  );
};

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
      <Testimonianze />
      <PercheNoi />
      <StatsBand />
      <CorsiCta />
    </>
  );
}
