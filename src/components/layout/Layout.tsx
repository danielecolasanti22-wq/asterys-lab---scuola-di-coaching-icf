import { useState, useEffect, useRef, ReactNode } from 'react';
import {
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Star,
  ChevronDown,
  ChevronRight,
  Clock,
  Calendar,
  Send,
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Highlight } from '../Highlight';

/** Contatto WhatsApp (numero in formato internazionale senza "+"). */
const WHATSAPP_NUMBER = '393498864895';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
/** Foto di Luciana (advisor) usata nei contatti WhatsApp. */
const ADVISOR_PHOTO = '/advisors/advisor-1.png';

/** Logo ufficiale WhatsApp. */
const WhatsAppIcon = ({ size = 22, className = '' }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.595 5.298l-.999 3.648 3.893-1.021zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

type MegaCourseItem = {
  id: string;
  title: string;
  kicker: string;
  meta: string;
};

type MegaColumn = {
  label: string;
  caption: string;
  icon: 'master' | 'specialization' | 'short';
  items: MegaCourseItem[];
};

const megaColumns: MegaColumn[] = [
  {
    label: 'Master',
    caption: 'Percorsi completi per diventare coach ICF',
    icon: 'master',
    items: [
      { id: 'apcm', title: 'Professione Coach', kicker: 'APCM · ICF Level 1 & 2', meta: '6 mesi · Milano · Roma · Online' },
      { id: 'systemic-team-coaching', title: 'Team Coaching Sistemico', kicker: 'ASTC · Accreditato ICF', meta: '54 ore · Online + Milano/Roma' },
    ],
  },
  {
    label: 'Specializzazioni',
    caption: 'Approfondisci ambiti chiave del coaching',
    icon: 'specialization',
    items: [
      { id: 'coaching-circle', title: 'Coaching Circle', kicker: 'Pratica supervisionata', meta: '3,30 ore · Gruppi da 4 · Zoom' },
      { id: 'voice-dialogue', title: 'Voice Dialogue Skills', kicker: 'Metodo esperienziale', meta: '3 giorni · In presenza a Milano' },
    ],
  },
  {
    label: 'Corsi brevi',
    caption: 'Skill pratiche, tempi ridotti',
    icon: 'short',
    items: [
      { id: 'eiw', title: 'Intelligenza Emotiva', kicker: 'EIW · Modello CSI', meta: '4 Workout · Live Online' },
      { id: 'continuous-learning', title: 'Continuous Learning', kicker: 'Live Class mensili', meta: 'Annuale · Zoom 18:30–20:00' },
      { id: 'public-speaking', title: 'Public Speaking Pro', kicker: 'Comunicazione', meta: '16 ore · Live Online' },
    ],
  },
];

const aboutMenu = [
  { label: 'Chi siamo', hash: '#chi-siamo' },
  { label: 'Filosofia', hash: '#filosofia' },
  { label: 'Accreditamenti', hash: '#accreditamenti' },
  { label: 'La community', hash: '#community' },
  { label: 'Press', hash: '#press' },
];

const megaPromos = [
  {
    kicker: 'Evento in evidenza',
    title: 'Open Day Online: Master APCM',
    cta: "Scopri l'evento",
    img: '/course-media/apcm/card.png',
    to: '/eventi/open-day-master-apcm',
  },
  {
    kicker: 'Risorsa',
    title: 'Come diventare coach ICF',
    cta: 'Leggi la guida',
    img: '/blog/credenziali-icf.png',
    to: '/blog',
  },
  {
    kicker: 'Borsa di studio',
    title: 'Fino a 1.500€ · Sede di Roma',
    cta: 'Candidati ora',
    img: '/promo/borsa-di-studio-roma.png',
    to: '/iscriviti',
  },
];

const BrandLogo = () => {
  const base = import.meta.env.BASE_URL || '/';
  const [logoSrc, setLogoSrc] = useState(`${base}brand/asterys-lab-logo.png`);
  const [showFallback, setShowFallback] = useState(false);

  const tryNextAsset = () => {
    const candidates = [
      `${base}brand/asterys-lab-logo.png`,
      `${base}brand/asterys-lab-logo.PNG`,
      `${base}brand/asterys-lab-logo.svg`,
      `${base}brand/asterys-lab-logo.webp`,
      `${base}brand/asterys-lab-logo.jpg`,
      `${base}brand/asterys-lab-logo.jpeg`,
      `${base}public/brand/asterys-lab-logo.png`,
      `${base}asterys-lab-logo.png`,
      `${base}brand/asteryslab-logo.png`,
    ];
    const idx = candidates.indexOf(logoSrc);
    const next = candidates[idx + 1];
    if (next) {
      setLogoSrc(next);
      return;
    }
    setShowFallback(true);
  };

  return (
    <div className="flex items-center gap-3">
      {!showFallback && (
        <div className="h-14 w-[230px] overflow-hidden flex items-center">
          <img
            src={logoSrc}
            alt="Asterys Lab"
            className="h-full w-full object-contain object-left origin-left scale-[2.35]"
            onError={tryNextAsset}
          />
        </div>
      )}
      <span className={`${showFallback ? 'flex' : 'hidden'} items-center gap-2`}>
      <span className="relative w-8 h-8 rotate-45 flex items-center justify-center">
        <span className="absolute inset-0 bg-[#008060] rounded-sm transform scale-90"></span>
        <span className="absolute inset-0 bg-white rounded-sm transform scale-50 -translate-x-1 -translate-y-1"></span>
      </span>
      <span className="font-display font-black text-[2rem] tracking-tight text-brand-navy uppercase leading-none select-none">
        ASTERYS
      </span>
      <span className="font-display font-black text-[0.95rem] tracking-[0.16em] text-brand-navy/55 uppercase leading-none select-none mt-2">
        LAB
      </span>
      </span>
    </div>
  );
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(0);
  const closeTimer = useRef<number | null>(null);
  const aboutCloseTimer = useRef<number | null>(null);
  const location = useLocation();
  const isCourseDetailPage = /^\/corsi\/[^/]+$/.test(location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaOpen(false);
    setIsAboutOpen(false);
  }, [location.pathname]);

  // All'apertura del mega menu mostra sempre la prima categoria.
  useEffect(() => {
    if (isMegaOpen) setActiveMega(0);
  }, [isMegaOpen]);

  const openMega = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsMegaOpen(true);
  };

  const scheduleCloseMega = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setIsMegaOpen(false), 120);
  };

  const openAbout = () => {
    if (aboutCloseTimer.current) {
      window.clearTimeout(aboutCloseTimer.current);
      aboutCloseTimer.current = null;
    }
    setIsAboutOpen(true);
  };

  const scheduleCloseAbout = () => {
    if (aboutCloseTimer.current) window.clearTimeout(aboutCloseTimer.current);
    aboutCloseTimer.current = window.setTimeout(() => setIsAboutOpen(false), 120);
  };

  const navLinks = [
    { name: 'The Campus', href: '/corsi', hasDropdown: true },
    { name: 'Eventi', href: '/eventi' },
    { name: 'Risorse', href: '/blog' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      id="site-header"
      className={`fixed left-0 right-0 z-50 transition-all duration-500 h-[72px] max-[939px]:h-[74px] flex items-center ${isCourseDetailPage ? 'top-12' : 'top-0'} ${isScrolled || !isHome ? 'bg-white border-b border-gray-100' : 'bg-white'}`}
    >
      <div className="max-w-[941px] mx-auto px-4 w-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="group shrink-0">
            <BrandLogo />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                  onFocus={openMega}
                  onBlur={scheduleCloseMega}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 font-bold text-sm tracking-tight transition-colors ${
                      location.pathname.startsWith('/corsi') ? 'text-brand-accent' : 'text-brand-navy hover:text-brand-accent'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isMegaOpen}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`mt-0.5 opacity-60 transition-transform ${isMegaOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`flex items-center gap-1 font-bold text-sm tracking-tight transition-colors ${
                    location.pathname === link.href ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <div
              className="relative"
              onMouseEnter={openAbout}
              onMouseLeave={scheduleCloseAbout}
              onFocus={openAbout}
              onBlur={scheduleCloseAbout}
            >
              <Link
                to="/about"
                className={`flex items-center gap-1 font-bold text-sm tracking-tight transition-colors ${
                  location.pathname.startsWith('/about') ? 'text-brand-accent' : 'text-brand-navy hover:text-brand-accent'
                }`}
                aria-haspopup="true"
                aria-expanded={isAboutOpen}
              >
                About
                <ChevronDown
                  size={14}
                  className={`mt-0.5 opacity-60 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                />
              </Link>
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute top-full right-0 pt-3"
                  >
                    <div className="w-56 bg-white border border-gray-100 rounded-xl shadow-[0_20px_60px_-20px_rgba(29,59,185,0.25)] overflow-hidden divide-y divide-gray-100">
                      {aboutMenu.map((item) => (
                        <Link
                          key={item.hash}
                          to={`/about${item.hash}`}
                          className="flex items-center justify-between px-4 py-3 text-sm font-bold text-brand-navy hover:bg-gray-50 hover:text-brand-accent transition-colors"
                        >
                          {item.label}
                          <ArrowUpRight size={14} className="opacity-40" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <Link
              to="/aziende"
              className={`font-bold text-sm tracking-tight transition-colors ${location.pathname === '/aziende' ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'}`}
            >
              Per Aziende
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/iscriviti"
            className="bg-[#2A56A8] text-white px-8 py-3 rounded-full font-sans font-black text-xs uppercase tracking-[0.1em] hover:bg-blue-700 transition-all active:scale-95"
          >
            Iscriviti
          </Link>
        </div>

        <button className="lg:hidden text-brand-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {isMegaOpen && (
          <motion.div
            key="mega-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="hidden lg:block absolute top-full left-0 right-0 pt-3"
            onMouseEnter={openMega}
            onMouseLeave={scheduleCloseMega}
          >
            <div className="max-w-[1140px] mx-auto px-4">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_20px_60px_-20px_rgba(29,59,185,0.25)] overflow-hidden">
                <div className="grid grid-cols-3 gap-0 p-6">
                  {/* Colonna 1 — categorie */}
                  <div className="flex flex-col gap-1.5 px-4 border-r border-gray-100">
                    {megaColumns.map((col, idx) => (
                      <button
                        key={col.label}
                        type="button"
                        onMouseEnter={() => setActiveMega(idx)}
                        onFocus={() => setActiveMega(idx)}
                        className={`flex items-center justify-between gap-2 rounded-lg px-3 py-4 -mx-1 text-left transition-colors ${
                          activeMega === idx ? 'bg-gray-50' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="flex flex-col gap-1 min-w-0">
                          <span
                            className={`text-[13px] font-bold uppercase tracking-[0.24em] whitespace-nowrap transition-colors ${
                              activeMega === idx ? 'text-brand-accent' : 'text-brand-navy'
                            }`}
                          >
                            {col.label}
                          </span>
                          <span className="text-[13px] text-brand-navy/55 font-medium leading-snug whitespace-nowrap">{col.caption}</span>
                        </span>
                        <ChevronRight
                          size={15}
                          className={`shrink-0 transition-colors ${
                            activeMega === idx ? 'text-brand-accent' : 'text-brand-navy/20'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Colonna 2 — corsi della categoria selezionata */}
                  <div className="flex flex-col gap-1.5 px-4 border-r border-gray-100">
                    {megaColumns[activeMega].items.map((item) => (
                      <Link
                        key={item.id}
                        to={`/corsi/${item.id}`}
                        className="group/item flex flex-col gap-0.5 rounded-lg px-3 py-4 -mx-1 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[15px] font-black text-brand-navy tracking-tight leading-tight whitespace-nowrap group-hover/item:text-brand-accent transition-colors">
                            {item.title}
                          </span>
                          <ArrowUpRight
                            size={15}
                            className="shrink-0 text-brand-navy/20 group-hover/item:text-brand-accent group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 transition-all"
                          />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.14em] whitespace-nowrap text-brand-accent/80">
                          {item.kicker}
                        </span>
                        <span className="text-[13px] text-brand-navy/55 font-medium whitespace-nowrap">{item.meta}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Colonna 3 — card in evidenza con immagine */}
                  <div className="flex flex-col gap-3.5 px-4">
                    {megaPromos.map((promo) => (
                      <Link
                        key={promo.title}
                        to={promo.to}
                        className="group/promo flex items-center gap-4 rounded-xl border border-gray-100 p-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-[88px] h-[88px] rounded-lg overflow-hidden bg-gray-100 shrink-0">
                          <img
                            src={promo.img}
                            alt=""
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="block text-[11px] font-black uppercase tracking-[0.14em] text-brand-accent/80">
                            {promo.kicker}
                          </span>
                          <span className="block mt-0.5 text-[15px] font-black text-brand-navy tracking-tight leading-tight group-hover/promo:text-brand-accent transition-colors">
                            {promo.title}
                          </span>
                          <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.14em] text-brand-accent">
                            {promo.cta}
                            <ArrowRight size={12} className="group-hover/promo:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 px-8 py-4 bg-gray-50 border-t border-gray-100">
                  <Link
                    to="/corsi"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-navy hover:text-brand-accent transition-colors"
                  >
                    Vedi tutti i corsi
                    <ArrowRight size={14} />
                  </Link>
                  <div className="flex items-center gap-5">
                    <Link
                      to="/eventi"
                      className="flex items-center gap-1.5 text-[11px] font-bold text-brand-navy/70 hover:text-brand-accent transition-colors"
                    >
                      <Calendar size={13} />
                      Prossimi eventi
                    </Link>
                    <a
                      href="#advisor"
                      className="flex items-center gap-1.5 text-[11px] font-bold text-brand-navy hover:text-[#25D366] transition-colors"
                    >
                      <MessageCircle size={13} />
                      Parla con un advisor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t lg:hidden flex flex-col p-6 gap-4 max-h-[85vh] overflow-y-auto"
          >
            {megaColumns.map((col) => (
              <div key={col.label} className="flex flex-col gap-2">
                <div className="pb-2 border-b border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-navy">{col.label}</span>
                </div>
                <div className="flex flex-col pl-1">
                  {col.items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/corsi/${item.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-2 text-sm font-black text-brand-navy hover:text-brand-accent tracking-tight"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              to="/corsi"
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent flex items-center gap-2"
            >
              The Campus · Tutti i corsi <ArrowRight size={14} />
            </Link>
            <hr className="my-1 border-brand-blue-soft" />
            <Link
              to="/eventi"
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-black uppercase tracking-widest ${location.pathname === '/eventi' ? 'text-brand-accent' : 'text-brand-navy'}`}
            >
              Eventi
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-black uppercase tracking-widest ${location.pathname === '/blog' ? 'text-brand-accent' : 'text-brand-navy'}`}
            >
              Risorse
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/50">About</span>
              {aboutMenu.map((item) => (
                <Link
                  key={item.hash}
                  to={`/about${item.hash}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-black text-brand-navy tracking-tight pl-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/aziende" className="text-lg font-black uppercase tracking-widest text-brand-navy" onClick={() => setIsMenuOpen(false)}>Per Aziende</Link>
            <hr className="my-2 border-brand-blue-soft" />
            <Link
              to="/iscriviti"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#2A56A8] text-white py-4 rounded-md font-black text-xs uppercase tracking-widest text-center"
            >
              Iscriviti
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const CorporateHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Perché un coach', href: '#perche' },
    { label: 'Ambiti', href: '#ambiti' },
    { label: 'Vantaggi', href: '#vantaggi' },
    { label: 'Come operiamo', href: '#come-operiamo' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-white border-b border-gray-100 flex items-center">
      <div className="max-w-[1200px] mx-auto px-4 w-full flex items-center justify-between gap-4">
        <Link to="/aziende" className="flex items-center gap-3 shrink-0">
          <BrandLogo />
          <span className="h-6 w-px bg-brand-navy/15" />
          <span className="text-sm font-bold text-brand-navy/60 whitespace-nowrap">per aziende</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#001D4B] font-black text-[15px] tracking-tight hover:text-[#2A56A8] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="#contatti-aziende"
            className="bg-[#2A56A8] text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.08em] hover:bg-[#2b45c6] transition-colors"
          >
            Parla con noi
          </a>
        </div>

        <button className="lg:hidden text-[#001D4B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl lg:hidden p-5"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#001D4B] font-black text-base tracking-tight"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contatti-aziende"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-[#2A56A8] text-white rounded-full py-3 text-center text-xs font-black uppercase tracking-[0.08em]"
              >
                Parla con noi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const socialChannels = [
  {
    name: 'Instagram',
    handle: '@asteryslab',
    href: 'https://instagram.com/',
    icon: <Instagram size={18} />,
  },
  {
    name: 'LinkedIn',
    handle: 'Asterys Lab',
    href: 'https://linkedin.com/',
    icon: <Linkedin size={18} />,
  },
  {
    name: 'Facebook',
    handle: 'asteryslab',
    href: 'https://facebook.com/',
    icon: <Facebook size={18} />,
  },
];

const certifications: { label: string; src: string; invert?: boolean }[] = [
  // icf.png è un logo scuro su trasparente: lo rendiamo bianco per leggerlo sul navy.
  { label: 'ICF', src: 'brand/icf.png', invert: true },
  { label: 'ICF Level 1', src: 'brand/icf-level-1.png' },
  { label: 'ICF Level 2', src: 'brand/icf-level-2.png' },
  { label: 'ICF CCE', src: 'brand/icf-cce-new.png' },
  { label: 'ICF AATC', src: 'brand/icf-aatc.png' },
];

export const Footer = () => {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      {/* soft decorative glow */}
      <div className="pointer-events-none absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-[120px]" />

      {/* BAND 1 — NEWSLETTER + SOCIAL (highlighted) */}
      <section className="relative border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-16 lg:py-20 grid lg:grid-cols-[1.15fr_1fr] gap-8">
          {/* Newsletter */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-brand-navy flex items-center justify-center">
                <Send size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
                Newsletter
              </span>
            </div>
            <h3 className="mt-5 text-3xl lg:text-4xl font-display font-black tracking-tighter leading-[1.05]">
              Entra in{' '}
              <Highlight className="text-brand-blue">Asterys Letters</Highlight>.
            </h3>
            <p className="mt-3 text-sm text-white/70 font-medium max-w-[440px] leading-relaxed">
              Ogni mese, approfondimenti su coaching, intelligenza emotiva e leadership.
              Storie di alumni, strumenti pratici, eventi. Senza spam.
            </p>

            <form
              className="mt-6 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="la-tua@email.com"
                className="flex-1 bg-white/10 border border-white/15 rounded-full px-5 py-3.5 text-sm font-medium placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-brand-navy px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-brand-blue-soft transition-colors whitespace-nowrap"
              >
                Iscriviti
              </button>
            </form>
            <p className="mt-3 text-[10px] text-white/40 font-medium">
              Iscrivendoti accetti l'
              <a href="#" className="underline decoration-white/30 hover:text-white">
                informativa privacy
              </a>
              .
            </p>
          </div>

          {/* Contatti */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
              Contatti
            </span>
            <h3 className="mt-4 text-3xl lg:text-4xl font-display font-black tracking-tighter leading-[1.05]">
              Parla con noi.
            </h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contattaci su WhatsApp"
              className="group mt-6 inline-flex items-center gap-4 self-start bg-brand-accent hover:bg-[#2748d1] rounded-full p-2 pr-7 transition-colors active:scale-[0.98]"
            >
              <span className="relative shrink-0">
                <img
                  src={ADVISOR_PHOTO}
                  alt="Luciana — advisor Asterys Lab"
                  className="w-16 h-16 rounded-full object-cover object-top bg-brand-blue-soft"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-full bg-[#25D366] border-2 border-brand-accent flex items-center justify-center">
                  <WhatsAppIcon size={15} className="text-white" />
                </span>
              </span>
              <span className="text-white font-display font-black text-xl lg:text-2xl leading-[1.1] tracking-tight">
                Contattaci
                <br />
                su WhatsApp
              </span>
            </a>
            <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={14} className="text-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.26em] text-white/55">Segreteria</span>
                </div>
                <p className="text-sm text-white/80 font-medium leading-relaxed">
                  <span className="font-black text-white">Lun – Ven</span>
                  <br />
                  9:00–13:00 · 15:00–17:00
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={14} className="text-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.26em] text-white/55">Telefono</span>
                </div>
                <a href="tel:+390280016434" className="block text-sm font-black text-white">+39 02 8001 6434</a>
                <a href="tel:+390687165254" className="block text-sm font-black text-white mt-0.5">+39 06 8716 5254</a>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={14} className="text-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.26em] text-white/55">Scrivici</span>
                </div>
                <a href="mailto:info@asteryslab.com" className="text-sm font-black text-white break-all">info@asteryslab.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 2 — LOGO + SEDI + SOCIAL */}
      <section className="border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-14 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16">
          {/* Logo + sedi */}
          <div>
            <img
              src={`${base}brand/asterys-lab-logo-white.png`}
              alt="Asterys Lab"
              className="h-10 w-auto"
            />
            <p className="mt-5 text-sm text-white/70 font-medium leading-relaxed max-w-[360px]">
              Transforming people, expanding results. La 1° Coaching School ICF accreditata in Italia.
            </p>

            <div className="mt-7">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={14} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
                  Sedi
                </span>
              </div>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                <span className="font-black text-white">Milano</span> · via Conservatorio, 22 — 20122
                <br />
                <span className="font-black text-white">Roma</span> · via del Porto Fluviale, 35 — 00154
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
              Social
            </span>
            <h3 className="mt-4 text-2xl lg:text-3xl font-display font-black tracking-tighter leading-[1.05]">
              Vieni a conoscerci.
            </h3>
            <p className="mt-3 text-sm text-white/70 font-medium leading-relaxed">
              Backstage delle aule, live con i docenti, storie di alumni.
            </p>
            <div className="mt-5 grid sm:grid-cols-3 gap-3">
              {socialChannels.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-3.5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-brand-navy flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <p className="text-sm font-black tracking-tight truncate">{s.name}</p>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-6 mt-auto">
              <div className="flex text-white gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/55">
                Trustpilot 4.7 · +3.000 alumni
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 3 — NAV LINKS */}
      <section className="border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-5">
              The Campus
            </h4>
            <ul className="space-y-3 text-sm font-bold text-white/80">
              <li><Link to="/corsi/apcm" className="hover:text-white transition-colors">Master APCM</Link></li>
              <li><Link to="/corsi/systemic-team-coaching" className="hover:text-white transition-colors">Team Coaching</Link></li>
              <li><Link to="/corsi/eiw" className="hover:text-white transition-colors">Intelligenza Emotiva</Link></li>
              <li><Link to="/corsi/coaching-circle" className="hover:text-white transition-colors">Coaching Circle</Link></li>
              <li><Link to="/corsi" className="hover:text-white transition-colors">Tutti i corsi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-5">
              Scopri
            </h4>
            <ul className="space-y-3 text-sm font-bold text-white/80">
              <li><Link to="/eventi" className="hover:text-white transition-colors">Eventi</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/about#filosofia" className="hover:text-white transition-colors">Filosofia</Link></li>
              <li><Link to="/about#press" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-5">
              Per le aziende
            </h4>
            <ul className="space-y-3 text-sm font-bold text-white/80">
              <li><Link to="/aziende" className="hover:text-white transition-colors">Corporate</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Team Coaching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Finanzia il corso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-5">
              Candidati
            </h4>
            <ul className="space-y-3 text-sm font-bold text-white/80">
              <li><Link to="/iscriviti" className="hover:text-white transition-colors">Iscriviti</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Parla con advisor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scarica brochure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calendario edizioni</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* BAND 4 — CERTIFICATIONS */}
      <section className="border-b border-white/10 bg-black/20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-10">
          <div className="flex items-center gap-2 justify-center mb-7">
            <Award size={14} className="text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
              Accreditamenti & Certificazioni
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 items-center justify-items-center">
            {certifications.map((c) => (
              <img
                key={c.label}
                src={`${base}${c.src}`}
                alt={c.label}
                className={`max-h-16 w-auto max-w-full object-contain ${
                  c.invert ? 'brightness-0 invert opacity-90' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BAND 5 — COPYRIGHT */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold text-white/45">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Asterys Lab S.r.l. — Scuola di Coaching ICF Accreditata · Milano · Roma
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie</a>
          <a href="#" className="hover:text-white transition-colors">Termini</a>
        </div>
      </div>
    </footer>
  );
};

/** Widget WhatsApp flottante: bolla compatta che si apre in una card con la foto dell'advisor. */
const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-[300px] max-w-[calc(100vw-3rem)] bg-white rounded-[1.75rem] shadow-[0_24px_70px_-12px_rgba(0,29,75,0.45)] border border-brand-navy/5 p-5"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi"
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-3">
              <img
                src={ADVISOR_PHOTO}
                alt="Luciana — advisor Asterys Lab"
                className="w-11 h-11 rounded-full object-cover object-top bg-brand-blue-soft shrink-0"
              />
              <div className="min-w-0">
                <p className="text-base font-display font-black text-brand-navy leading-tight tracking-tight">
                  Vuoi parlare con noi?
                </p>
                <p className="text-xs text-brand-navy/55 font-medium">Rispondiamo su WhatsApp</p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-2xl py-3.5 font-display font-black text-[15px] tracking-tight transition-colors active:scale-[0.98]"
            >
              <WhatsAppIcon size={20} className="text-white" />
              Contattaci su WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.button
            key="bubble"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Apri chat WhatsApp"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_14px_34px_-6px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-transform"
          >
            <WhatsAppIcon size={32} className="text-white" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-brand-blue rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isCourseDetailPage = /^\/corsi\/[^/]+$/.test(location.pathname);
  const isCorporatePage = location.pathname === '/aziende';

  return (
    <div className="font-sans text-brand-navy min-h-screen flex flex-col">
      {isCorporatePage ? <CorporateHeader /> : <Header />}
      <main
        className={`flex-grow ${
          isCourseDetailPage
            ? 'pt-[120px] max-[939px]:pt-[122px]'
            : isCorporatePage
              ? 'pt-[72px]'
              : 'pt-[72px] max-[939px]:pt-[74px]'
        }`}
      >
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp widget */}
      <FloatingWhatsApp />
    </div>
  );
};
