import { useState, useEffect, useRef, ReactNode } from 'react';
import TopBanner from './TopBanner';
import { hasBanner } from '../../utils/banner';
import {
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Clock,
  Calendar,
  Send,
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Mail,
  Award,
  User,
  Building2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Highlight } from '../Highlight';
import { NewsletterForm } from '../NewsletterForm';

import { whatsappHref } from '../../utils/whatsapp';
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
    caption: 'Diventa coach ICF, riconosciuto ovunque',
    icon: 'master',
    items: [
      { id: 'apcm', title: 'Professione Coach', kicker: 'Master in Coaching · ICF Level 1 & 2', meta: '6–12 mesi · Milano · Roma · Online' },
      { id: 'systemic-team-coaching', title: 'Team Coaching Sistemico', kicker: 'Accreditato ICF', meta: '60 ore · Online + Milano/Roma' },
    ],
  },
  {
    label: 'Formazione avanzata',
    caption: 'Porta il tuo coaching a un nuovo livello',
    icon: 'specialization',
    items: [
      { id: 'coaching-circle', title: 'Mentoring per il rinnovo delle credenziali', kicker: 'Per la credenziale ICF', meta: '10 ore · gruppo o individuale · Zoom' },
      { id: 'voice-dialogue', title: 'Voice Dialogue Skills', kicker: 'Metodo esperienziale', meta: '3 giorni · In presenza a Milano' },
      { id: 'marketing-per-coach', title: 'Personal Branding per Coach', kicker: 'Personal branding · 5 incontri online', meta: 'Con Helga Ogliari · Live online' },
    ],
  },
  {
    label: 'Corsi brevi',
    caption: 'Nuove skill spendibili subito, in poche ore',
    icon: 'short',
    items: [
      { id: 'eiw', title: 'Intelligenza Emotiva', kicker: 'Modello CSI', meta: '4 Workout · Live Online' },
      { id: 'continuous-learning', title: 'Continuous Learning', kicker: 'Incontri online mensili', meta: 'Annuale · Zoom 18:30–20:00' },
      { id: 'public-speaking', title: 'Public Speaking PRO', kicker: 'Comunicazione', meta: '3 giornate · Aula + Online' },
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
    kicker: 'Open Day gratuito',
    title: 'Scopri dal vivo come diventare coach ICF',
    cta: 'Prenota il tuo posto',
    img: '/course-media/apcm/card.png',
    to: '/eventi',
  },
  {
    kicker: 'Guida gratuita',
    title: 'Come diventare coach ICF, passo dopo passo',
    cta: 'Leggi la guida',
    img: '/blog/credenziali-icf.png',
    to: '/blog',
  },
  {
    kicker: 'Borsa di studio',
    title: 'Formati a Roma con fino a 1.500€ di sconto',
    cta: 'Candidati ora',
    img: '/promo/borsa-di-studio-roma.png',
    to: '/borsa-di-studio',
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
        <div className="h-10 w-[158px] sm:h-14 sm:w-[230px] overflow-hidden flex items-center">
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
  const [mobileCampusOpen, setMobileCampusOpen] = useState(false);
  const [mobileMegaIdx, setMobileMegaIdx] = useState(-1);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const aboutCloseTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaOpen(false);
    setIsAboutOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setMobileCampusOpen(false);
      setMobileMegaIdx(-1);
      setMobileAboutOpen(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
    { name: 'Corsi', href: '/corsi', hasDropdown: true },
    { name: 'Eventi', href: '/eventi' },
    { name: 'Risorse', href: '/blog' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      id="site-header"
      className={`fixed left-0 right-0 z-50 transition-all duration-500 h-[72px] max-[939px]:h-[74px] flex items-center overflow-visible max-[939px]:overflow-hidden ${hasBanner(location.pathname) ? 'top-12' : 'top-0'} ${isScrolled || !isHome ? 'bg-white border-b border-gray-100' : 'bg-white'}`}
    >
      <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 w-full grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="col-start-1 flex items-center justify-self-start">
          <Link to="/" className="group shrink-0">
            <BrandLogo />
          </Link>
        </div>

          <nav className="col-start-2 justify-self-center hidden lg:flex items-center gap-8">
            <Link
              to="/personal-coaching"
              className={`whitespace-nowrap font-bold text-sm tracking-tight transition-colors ${location.pathname === '/personal-coaching' ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'}`}
            >
              Personal Coaching
            </Link>
            <div className="h-4 w-px bg-gray-200"></div>
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
                    className={`flex items-center gap-1 whitespace-nowrap font-bold text-sm tracking-tight transition-colors ${
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
                  className={`flex items-center gap-1 whitespace-nowrap font-bold text-sm tracking-tight transition-colors ${
                    location.pathname === link.href ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <div
              className="relative flex items-center gap-0.5"
              onMouseEnter={openAbout}
              onMouseLeave={scheduleCloseAbout}
            >
              <Link
                to="/about"
                className={`whitespace-nowrap font-bold text-sm tracking-tight transition-colors ${
                  location.pathname.startsWith('/about') ? 'text-brand-accent' : 'text-brand-navy hover:text-brand-accent'
                }`}
              >
                About
              </Link>
              <button
                type="button"
                aria-label="Apri sottomenu About"
                aria-expanded={isAboutOpen}
                className={`p-1 rounded-md transition-colors ${
                  location.pathname.startsWith('/about') ? 'text-brand-accent' : 'text-brand-navy/60 hover:text-brand-accent'
                }`}
                onMouseEnter={openAbout}
                onFocus={openAbout}
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isAboutOpen ? 'rotate-180' : ''}`}
                />
              </button>
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
              className={`whitespace-nowrap font-bold text-sm tracking-tight transition-colors ${location.pathname === '/aziende' ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'}`}
            >
              Per Aziende
            </Link>
          </nav>

        <div className="col-start-3 flex items-center justify-self-end">
          <Link
            to="/iscriviti"
            className="hidden lg:inline-flex items-center bg-[#2A56A8] text-white px-8 py-3 rounded-full font-sans font-black text-xs uppercase tracking-[0.1em] hover:bg-blue-700 transition-all active:scale-95"
          >
            Contattaci
          </Link>

          <div className="lg:hidden flex items-center gap-3.5">
            <Link
              to="/iscriviti"
              className="inline-flex items-center justify-center rounded-full bg-[#2A56A8] text-white px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.12em] whitespace-nowrap shadow-[0_12px_24px_-16px_rgba(42,86,168,0.55)]"
            >
              Contattaci
            </Link>
            <button
              className="text-brand-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
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
            <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
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

      {/* Mobile Menu — stile Talent Garden (solo mobile) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 bottom-0 z-40 bg-white lg:hidden flex flex-col overflow-hidden ${
              hasBanner(location.pathname) ? 'top-[120px] max-[939px]:top-[122px]' : 'top-[72px] max-[939px]:top-[74px]'
            }`}
          >
            <div className="flex-1 overflow-y-auto overscroll-contain px-1">
              {/* Le tre direzioni: subito visibili e facili da toccare */}
              <div className="grid grid-cols-2 gap-3 px-5 pt-5 pb-6">
                <Link
                  to="/personal-coaching"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-brand-blue-soft/40 p-4 min-h-[104px] active:scale-[0.98] transition-transform"
                >
                  <User size={22} className="text-brand-accent" />
                  <span>
                    <span className="block text-[15px] font-display font-black tracking-tight text-brand-navy leading-tight">Personal Coaching</span>
                    <span className="block mt-0.5 text-[11px] font-medium text-brand-navy/50">Percorsi 1:1</span>
                  </span>
                </Link>
                <Link
                  to="/aziende"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-brand-blue-soft/40 p-4 min-h-[104px] active:scale-[0.98] transition-transform"
                >
                  <Building2 size={22} className="text-brand-accent" />
                  <span>
                    <span className="block text-[15px] font-display font-black tracking-tight text-brand-navy leading-tight">Per Aziende</span>
                    <span className="block mt-0.5 text-[11px] font-medium text-brand-navy/50">Formazione per team</span>
                  </span>
                </Link>
              </div>

              <p className="px-6 pb-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/35">La scuola</p>

              <button
                type="button"
                onClick={() => setMobileCampusOpen((v) => !v)}
                className="w-full flex items-center justify-between px-6 py-5 border-b border-gray-100 text-left"
              >
                <span className={`text-[18px] font-display font-black tracking-tight ${mobileCampusOpen ? 'text-brand-accent' : 'text-brand-navy'}`}>
                  Corsi
                </span>
                <ChevronDown
                  size={19}
                  className={`shrink-0 text-brand-navy/40 transition-transform ${mobileCampusOpen ? 'rotate-180 text-brand-accent' : ''}`}
                />
              </button>

              {mobileCampusOpen ? (
                <div className="border-b border-gray-100 pb-3">
                  {megaColumns.map((col, idx) => (
                    <div key={col.label} className="border-t border-gray-100 first:border-t-0">
                      <button
                        type="button"
                        onClick={() => setMobileMegaIdx((prev) => (prev === idx ? -1 : idx))}
                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                      >
                        <span className={`text-[16px] font-display font-black tracking-tight ${mobileMegaIdx === idx ? 'text-brand-accent' : 'text-brand-navy'}`}>
                          {col.label}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 text-brand-navy/35 transition-transform ${mobileMegaIdx === idx ? 'rotate-180 text-brand-accent' : ''}`}
                        />
                      </button>

                      {mobileMegaIdx === idx ? (
                        <div className="mx-4 mb-4 rounded-xl bg-brand-blue-soft/35 px-4 py-4">
                          <p className="text-[11px] text-brand-navy/50 font-medium mb-4 leading-relaxed">{col.caption}</p>
                          <div className="space-y-2">
                            {col.items.map((item) => (
                              <Link
                                key={item.id}
                                to={`/corsi/${item.id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block rounded-lg px-2 py-3.5 group hover:bg-white/70 transition-colors"
                              >
                                <span className="block text-[15px] font-black text-brand-navy group-hover:text-brand-accent transition-colors leading-snug">
                                  {item.title}
                                </span>
                                <span className="block mt-1 text-[10px] font-black uppercase tracking-[0.1em] text-brand-accent/75">
                                  {item.kicker}
                                </span>
                                <span className="block mt-0.5 text-xs text-brand-navy/50 font-medium">{item.meta}</span>
                              </Link>
                            ))}
                          </div>
                          <Link
                            to="/corsi"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-2 inline-flex items-center gap-1.5 px-2 py-2 text-sm font-black text-brand-accent"
                          >
                            Tutti i corsi <ArrowRight size={14} />
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  ))}

                  <div className="mx-3 mt-3 pt-4 border-t border-gray-100 space-y-2.5">
                    <p className="px-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/40">In evidenza</p>
                    {megaPromos.map((promo) => (
                      <Link
                        key={promo.title}
                        to={promo.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl bg-gray-50 border border-gray-100 p-3"
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                          <img src={promo.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block text-[10px] font-black uppercase tracking-[0.1em] text-brand-accent/80">{promo.kicker}</span>
                          <span className="block mt-0.5 text-sm font-black text-brand-navy leading-snug">{promo.title}</span>
                        </div>
                        <ArrowRight size={14} className="shrink-0 text-brand-accent/60" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              <Link
                to="/eventi"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-5 py-5 border-b border-gray-100 text-[17px] font-display font-black tracking-tight ${location.pathname === '/eventi' ? 'text-brand-accent' : 'text-brand-navy'}`}
              >
                Eventi
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-5 py-5 border-b border-gray-100 text-[17px] font-display font-black tracking-tight ${location.pathname === '/blog' ? 'text-brand-accent' : 'text-brand-navy'}`}
              >
                Risorse
              </Link>

              <div className="flex items-stretch border-b border-gray-100">
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex-1 flex items-center px-5 py-5 text-[17px] font-display font-black tracking-tight ${
                    location.pathname.startsWith('/about') ? 'text-brand-accent' : 'text-brand-navy'
                  }`}
                >
                  About
                </Link>
                <button
                  type="button"
                  aria-label="Apri sottomenu About"
                  onClick={() => setMobileAboutOpen((v) => !v)}
                  className="flex items-center justify-center px-5 border-l border-gray-100 text-brand-navy/45"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${mobileAboutOpen ? 'rotate-180 text-brand-accent' : ''}`}
                  />
                </button>
              </div>
              {mobileAboutOpen ? (
                <div className="mx-3 mb-3 rounded-xl bg-brand-blue-soft/35 border-b border-gray-100 divide-y divide-brand-navy/8 overflow-hidden">
                  {aboutMenu.map((item) => (
                    <Link
                      key={item.hash}
                      to={`/about${item.hash}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3.5 text-[15px] font-bold text-brand-navy hover:text-brand-accent hover:bg-white/60 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
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
      <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 w-full flex items-center justify-between gap-4">
        <Link to="/aziende" className="shrink-0">
          <img
            src="/brand/asterys-for-business.png"
            alt="Asterys Lab for business"
            className="h-9 lg:h-10 w-auto"
          />
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
    href: 'https://www.instagram.com/asteryslab/',
    icon: <Instagram size={18} />,
  },
  {
    name: 'LinkedIn',
    handle: 'Asterys Lab',
    href: 'https://www.linkedin.com/company/asterys-lab/',
    icon: <Linkedin size={18} />,
  },
  {
    name: 'Facebook',
    handle: 'asteryslab',
    href: 'https://www.facebook.com/AsterysLab/',
    icon: <Facebook size={18} />,
  },
];

const certifications: { label: string; src: string; invert?: boolean }[] = [
  { label: 'ICF Level 1', src: 'brand/icf-level-1.png' },
  { label: 'ICF Level 2', src: 'brand/icf-level-2.png' },
  { label: 'ICF AATC', src: 'brand/icf-aatc.png' },
  { label: 'ICF CCE', src: 'brand/icf-cce-new.png' },
];

const footerNavGroups = [
  {
    title: 'The Campus',
    links: [
      { label: 'Master in Coaching', to: '/corsi/apcm' },
      { label: 'Team Coaching', to: '/corsi/systemic-team-coaching' },
      { label: 'Intelligenza Emotiva', to: '/corsi/eiw' },
      { label: 'Mentoring per le credenziali', to: '/corsi/coaching-circle' },
      { label: 'Tutti i corsi', to: '/corsi' },
    ],
  },
  {
    title: 'Scopri',
    links: [
      { label: 'Eventi', to: '/eventi' },
      { label: 'Blog', to: '/blog' },
      { label: 'Filosofia', to: '/about#filosofia' },
      { label: 'Press', to: '/about#press' },
    ],
  },
  {
    title: 'Per le aziende',
    links: [
      { label: 'Corporate', to: '/aziende' },
      { label: 'Team Coaching', to: '/corsi/systemic-team-coaching' },
      { label: 'Leadership programs', to: '/aziende' },
      { label: 'Finanzia il corso', to: '/iscriviti' },
    ],
  },
  {
    title: 'Candidati',
    links: [
      { label: 'Iscriviti', to: '/iscriviti' },
      { label: 'Credito ai talenti', to: '/credito-ai-talenti' },
      { label: 'Parla con advisor', to: '/iscriviti' },
      { label: 'Scarica brochure', to: '/iscriviti' },
      { label: 'Calendario edizioni', to: '/corsi/apcm' },
    ],
  },
];

const FooterNavToggle = ({
  title,
  links,
  defaultOpen = false,
}: {
  title: string;
  links: { label: string; to: string }[];
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3.5 text-left"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">{title}</span>
        <ChevronDown size={14} className={`text-white/40 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? (
        <ul className="pb-3 space-y-2.5 text-sm font-bold text-white/75">
          {links.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export const Footer = () => {
  const base = import.meta.env.BASE_URL || '/';
  return (
    <footer className="bg-brand-navy text-white relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-[120px]" />

      {/* BAND 1 — NEWSLETTER + CONTATTI */}
      <section className="relative border-b border-white/10">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-10 lg:py-12 grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8">
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-brand-navy flex items-center justify-center">
                <Send size={15} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/60">Newsletter</span>
            </div>
            <h3 className="mt-3 text-xl sm:text-2xl font-display font-black tracking-tighter leading-[1.08]">
              Iscriviti a <Highlight className="text-brand-blue">Le Note di AL</Highlight>.
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/65 font-medium leading-relaxed">
              Idee pratiche di coaching, intelligenza emotiva e leadership per crescere ogni mese. Senza spam.
            </p>
            <NewsletterForm
              source="Footer"
              placeholder="la-tua@email.com"
              tone="dark"
              wrapperClassName="mt-4 flex flex-col sm:flex-row gap-2"
              inputClassName="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-2.5 text-sm font-medium placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              buttonClassName="bg-white text-brand-navy px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.18em] hover:bg-brand-blue-soft transition-colors whitespace-nowrap"
            />
            <p className="mt-2 text-[10px] text-white/40 font-medium">
              Iscrivendoti accetti l'
              <a href="/privacy" target="_blank" rel="noreferrer" className="underline decoration-white/30 hover:text-white">informativa privacy</a>.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/60">Contatti</span>
            <h3 className="mt-2 text-xl sm:text-2xl font-display font-black tracking-tighter leading-[1.08]">
              Parla con noi.
            </h3>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contattaci su WhatsApp"
              className="group mt-4 inline-flex items-center gap-3 self-start bg-brand-accent hover:bg-[#2748d1] rounded-full p-1.5 pr-5 transition-colors active:scale-[0.98]"
            >
              <span className="relative shrink-0">
                <img
                  src={ADVISOR_PHOTO}
                  alt="Luciana — advisor Asterys Lab"
                  className="w-12 h-12 rounded-full object-cover object-top bg-brand-blue-soft"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-6 h-6 rounded-full bg-[#25D366] border-2 border-brand-accent flex items-center justify-center">
                  <WhatsAppIcon size={13} className="text-white" />
                </span>
              </span>
              <span className="text-white font-display font-black text-base leading-tight tracking-tight">
                Contattaci su WhatsApp
              </span>
            </a>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Mail size={13} className="text-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/55">Scrivici</span>
                </div>
                <a href="mailto:info@asteryslab.com" className="text-sm font-black text-white break-all">info@asteryslab.com</a>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <WhatsAppIcon size={13} className="text-white" />
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/55">Telefono / WhatsApp</span>
                </div>
                <a href="tel:+393498864895" className="text-sm font-black text-white">+39 349 886 4895</a>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-2 mb-1.5">
                <Clock size={13} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/55">Segreteria</span>
              </div>
              <p className="text-sm text-white/80 font-medium">
                <span className="font-black text-white">Lun – Ven</span> · 9:00–13:00 · 15:00–17:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 2 — LOGO + SEDI + SOCIAL */}
      <section className="border-b border-white/10">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-8 lg:py-10 grid lg:grid-cols-[1.05fr_1fr] gap-8">
          <div>
            <img src={`${base}brand/asterys-lab-logo-white.png`} alt="Asterys Lab" className="h-9 w-auto" />
            <p className="mt-3 text-sm text-white/70 font-medium leading-relaxed max-w-[360px]">
              Transforming people, expanding results. La tua scuola di coaching accreditata ICF.
            </p>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={13} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/55">Sedi</span>
              </div>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                <span className="font-black text-white">Milano</span> · via Conservatorio, 22 — 20122
                <br />
                <span className="font-black text-white">Roma</span> · via del Porto Fluviale, 35 — 00154
              </p>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/60">Social</span>
            <div className="mt-3 flex items-center gap-3">
              {socialChannels.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-white text-brand-navy flex items-center justify-center hover:bg-brand-blue-soft transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAND 3 — NAV LINKS (toggle) */}
      <section className="border-b border-white/10">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {footerNavGroups.map((group) => (
            <div key={group.title}>
              <FooterNavToggle title={group.title} links={group.links} />
            </div>
          ))}
        </div>
      </section>

      {/* BAND 4 — CERTIFICATIONS */}
      <section className="border-b border-white/10 bg-black/20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-7">
          <div className="flex items-center gap-2 justify-center mb-5">
            <Award size={13} className="text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/50">
              Accreditamenti
            </span>
          </div>
          <div className="flex flex-nowrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 overflow-x-auto">
            {certifications.map((c) => (
              <img
                key={c.label}
                src={`${base}${c.src}`}
                alt={c.label}
                className="h-11 sm:h-12 w-auto object-contain shrink-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* BAND 5 — COPYRIGHT */}
      <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold text-white/45">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Asterys Lab S.r.l. — Scuola di Coaching ICF Accreditata · Milano · Roma
          <br />
          P.IVA e C.F. 11673371008 · REA RM-1320906 · Cert. n. 655Q
        </p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/cookie" className="hover:text-white transition-colors">Cookie</Link>
          <Link to="/termini" className="hover:text-white transition-colors">Termini</Link>
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
            className="relative w-[240px] lg:w-[300px] max-w-[calc(100vw-3rem)] bg-white rounded-[1.5rem] lg:rounded-[1.75rem] shadow-[0_24px_70px_-12px_rgba(0,29,75,0.45)] border border-brand-navy/5 p-4 lg:p-5"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi"
              className="absolute -top-2.5 -right-2.5 lg:-top-3 lg:-right-3 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              <X className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            </button>

            <div className="flex items-center gap-2.5 lg:gap-3">
              <img
                src={ADVISOR_PHOTO}
                alt="Luciana — advisor Asterys Lab"
                className="w-9 h-9 lg:w-11 lg:h-11 rounded-full object-cover object-top bg-brand-blue-soft shrink-0"
              />
              <div className="min-w-0">
                <p className="text-sm lg:text-base font-display font-black text-brand-navy leading-tight tracking-tight">
                  Vuoi parlare con noi?
                </p>
                <p className="text-[11px] lg:text-xs text-brand-navy/55 font-medium">Rispondiamo su WhatsApp</p>
              </div>
            </div>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 lg:mt-4 flex items-center justify-center gap-2 lg:gap-2.5 w-full bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-xl lg:rounded-2xl py-2.5 lg:py-3.5 font-display font-black text-[13px] lg:text-[15px] tracking-tight transition-colors active:scale-[0.98]"
            >
              <WhatsAppIcon size={20} className="hidden lg:block text-white" />
              <WhatsAppIcon size={17} className="lg:hidden text-white" />
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
            className="relative w-10 h-10 lg:w-[52px] lg:h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_14px_34px_-6px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-transform"
          >
            <WhatsAppIcon size={26} className="hidden lg:block text-white" />
            <WhatsAppIcon size={22} className="lg:hidden text-white" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 bg-brand-blue rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isCorporatePage = location.pathname === '/aziende';
  // La barra c'è solo dove getBanner() ha davvero qualcosa di reale da dire (EB attivo o edizione a
  // calendario): niente barra ⇒ niente offset di 48px. Aziende ha un header dedicato senza barra.
  const showBanner = !isCorporatePage && hasBanner(location.pathname);

  return (
    <div className="font-sans text-brand-navy min-h-screen flex flex-col overflow-x-clip w-full max-w-[100vw]">
      {showBanner && <TopBanner />}
      {isCorporatePage ? <CorporateHeader /> : <Header />}
      <main
        className={`flex-grow overflow-x-clip w-full ${
          showBanner
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
