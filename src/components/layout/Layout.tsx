import { useState, useEffect, useRef, ReactNode } from 'react';
import {
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
  Star,
  ChevronDown,
  GraduationCap,
  Sparkles,
  Clock,
  Calendar,
  Send,
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

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
      { id: 'mentor-coaching', title: 'Mentor Coaching ICF', kicker: 'Verso ACC e PCC', meta: '10 ore · Online' },
    ],
  },
  {
    label: 'Specializzazioni',
    caption: 'Approfondisci ambiti chiave del coaching',
    icon: 'specialization',
    items: [
      { id: 'prosperous-coach', title: 'Prosperous Coach', kicker: 'Business del Coaching', meta: '3 mesi · Masterclass + 1:1' },
      { id: 'voice-dialogue', title: 'Voice Dialogue Skills', kicker: 'Metodo esperienziale', meta: '3 giorni · In presenza a Milano' },
      { id: 'hr-manager-coaching', title: 'Manager come Coach', kicker: 'Leadership & HR', meta: '32 ore · Ibrido' },
    ],
  },
  {
    label: 'Corsi brevi',
    caption: 'Skill pratiche, tempi ridotti',
    icon: 'short',
    items: [
      { id: 'eiw', title: 'Intelligenza Emotiva', kicker: 'EIW · Six Seconds', meta: '24 ore · Live Online' },
      { id: 'public-speaking', title: 'Public Speaking Pro', kicker: 'Comunicazione', meta: '16 ore · Live Online' },
    ],
  },
];

const megaIconFor = (icon: MegaColumn['icon']) => {
  if (icon === 'master') return <GraduationCap size={16} />;
  if (icon === 'specialization') return <Sparkles size={16} />;
  return <Clock size={16} />;
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
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
    { name: 'Blog', href: '/blog' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header
      id="site-header"
      className={`fixed left-0 right-0 z-50 transition-all duration-500 h-[72px] max-[939px]:h-[74px] flex items-center ${isCourseDetailPage ? 'top-12' : 'top-0'} ${isScrolled || !isHome ? 'bg-white border-b border-gray-100' : 'bg-white'}`}
    >
      <div className="max-w-[941px] mx-auto px-4 w-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-8 h-8 rotate-45 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#008060] rounded-sm transform scale-90"></div>
              <div className="absolute inset-0 bg-white rounded-sm transform scale-50 -translate-x-1 -translate-y-1"></div>
            </div>
            <span className="font-sans font-black text-2xl tracking-tighter text-brand-navy lowercase select-none">asteryslab</span>
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
            <div className="h-4 w-px bg-gray-200"></div>
            <Link
              to="/aziende"
              className={`font-bold text-sm tracking-tight transition-colors ${location.pathname === '/aziende' ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'}`}
            >
              Per le aziende
            </Link>
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
                    <div className="w-48 bg-white border border-gray-100 rounded-xl shadow-[0_20px_60px_-20px_rgba(29,59,185,0.25)] overflow-hidden">
                      <Link
                        to="/about#filosofia"
                        className="flex items-center justify-between px-4 py-3 text-sm font-black text-brand-navy hover:bg-gray-50 hover:text-brand-accent transition-colors"
                      >
                        Filosofia
                        <ArrowUpRight size={14} className="opacity-40" />
                      </Link>
                      <div className="h-px bg-gray-100 mx-4" />
                      <Link
                        to="/about#press"
                        className="flex items-center justify-between px-4 py-3 text-sm font-black text-brand-navy hover:bg-gray-50 hover:text-brand-accent transition-colors"
                      >
                        Press
                        <ArrowUpRight size={14} className="opacity-40" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/iscriviti"
            className="bg-[#1D3BB9] text-white px-8 py-3 rounded-full font-sans font-black text-xs uppercase tracking-[0.1em] hover:bg-blue-700 transition-all active:scale-95"
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
            <div className="max-w-[920px] mx-auto px-4">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_20px_60px_-20px_rgba(29,59,185,0.25)] overflow-hidden">
                <div className="grid grid-cols-3 gap-0 p-6">
                  {megaColumns.map((col, idx) => (
                    <div
                      key={col.label}
                      className={`flex flex-col gap-3 px-4 ${idx < megaColumns.length - 1 ? 'border-r border-gray-100' : ''}`}
                    >
                      <div className="flex items-center gap-2 text-brand-accent">
                        <span className="w-7 h-7 rounded-lg bg-brand-blue-soft/60 text-brand-accent flex items-center justify-center">
                          {megaIconFor(col.icon)}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.22em]">{col.label}</span>
                      </div>
                      <p className="text-xs text-brand-navy/60 font-medium leading-snug -mt-1">{col.caption}</p>
                      <div className="flex flex-col gap-1 mt-1">
                        {col.items.map((item) => (
                          <Link
                            key={item.id}
                            to={`/corsi/${item.id}`}
                            className="group/item flex flex-col gap-0.5 rounded-lg px-3 py-2.5 -mx-1 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[13px] font-black text-brand-navy tracking-tight leading-tight group-hover/item:text-brand-accent transition-colors">
                                {item.title}
                              </span>
                              <ArrowUpRight
                                size={14}
                                className="text-brand-navy/20 group-hover/item:text-brand-accent group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 transition-all"
                              />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-brand-accent/80">
                              {item.kicker}
                            </span>
                            <span className="text-[11px] text-brand-navy/55 font-medium">{item.meta}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
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
                <div className="flex items-center gap-2 text-brand-accent">
                  <span className="w-7 h-7 rounded-lg bg-brand-blue-soft/60 flex items-center justify-center">
                    {megaIconFor(col.icon)}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em]">{col.label}</span>
                </div>
                <div className="flex flex-col pl-9">
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
              Blog
            </Link>
            <Link to="/aziende" className="text-lg font-black uppercase tracking-widest text-brand-navy" onClick={() => setIsMenuOpen(false)}>Per le aziende</Link>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-navy/50">About</span>
              <Link
                to="/about#filosofia"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-black text-brand-navy tracking-tight pl-1"
              >
                Filosofia
              </Link>
              <Link
                to="/about#press"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-black text-brand-navy tracking-tight pl-1"
              >
                Press
              </Link>
            </div>
            <hr className="my-2 border-brand-blue-soft" />
            <Link
              to="/iscriviti"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#1D3BB9] text-white py-4 rounded-md font-black text-xs uppercase tracking-widest text-center"
            >
              Iscriviti
            </Link>
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

const certifications = [
  { label: 'ICF Level 1', sub: 'Accredited Coaching Education · 63 ore', badge: 'L1' },
  { label: 'ICF Level 2', sub: 'Accredited Coaching Education · 130.5 ore', badge: 'L2' },
  { label: 'ICF AATC', sub: 'Advanced Accreditation Team Coaching', badge: 'AATC' },
  { label: 'ISO 9001:2015', sub: 'Cert. n. 655Q · Formazione & Coaching', badge: 'ISO' },
];

export const Footer = () => {
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
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-navy">Asterys Letters</span>
                <span className="absolute inset-x-[-0.08em] bottom-[-0.04em] top-[-0.02em] bg-white -z-0 rounded-sm" />
              </span>
              .
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

          {/* Social */}
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
              Social
            </span>
            <h3 className="mt-4 text-3xl lg:text-4xl font-display font-black tracking-tighter leading-[1.05]">
              Vieni a conoscerci.
            </h3>
            <p className="mt-3 text-sm text-white/70 font-medium leading-relaxed">
              Backstage delle aule, live con i docenti, storie di alumni.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {socialChannels.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-3.5 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-white text-brand-navy flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-black tracking-tight truncate">{s.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45 truncate">
                      {s.handle}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAND 2 — CONTACTS (logo, sedi, orari, telefono) */}
      <section className="border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-14 grid lg:grid-cols-[1.1fr_1fr_1fr] gap-10">
          {/* Logo + sedi */}
          <div>
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rotate-45 flex items-center justify-center">
                <div className="absolute inset-0 bg-white rounded-sm transform scale-90" />
                <div className="absolute inset-0 bg-brand-navy rounded-sm transform scale-50 -translate-x-1 -translate-y-1" />
              </div>
              <span className="font-sans font-black text-2xl tracking-tighter text-white lowercase">
                asteryslab
              </span>
            </div>
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

          {/* Orari + Telefono */}
          <div className="space-y-7">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
                  Segreteria
                </span>
              </div>
              <p className="text-sm text-white/80 font-medium leading-relaxed">
                <span className="font-black text-white">Lunedì – Venerdì</span>
                <br />
                9:00 – 13:00 · 15:00 – 17:00
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Phone size={14} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
                  Telefono
                </span>
              </div>
              <a
                href="tel:+390280016434"
                className="block text-sm font-black text-white hover:text-white transition-colors"
              >
                +39 02 8001 6434
              </a>
              <a
                href="tel:+390687165254"
                className="block text-sm font-black text-white hover:text-white transition-colors mt-1"
              >
                +39 06 8716 5254
              </a>
            </div>
          </div>

          {/* Email + WhatsApp + Mappa links */}
          <div className="space-y-7">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail size={14} className="text-white" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/55">
                  Scrivici
                </span>
              </div>
              <a
                href="mailto:info@asteryslab.com"
                className="text-sm font-black text-white hover:text-white transition-colors"
              >
                info@asteryslab.com
              </a>
            </div>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-2xl p-4 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle size={18} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                  Chat diretta
                </p>
                <p className="text-sm font-black text-white">Parla con un advisor</p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-auto text-white/40 group-hover:text-white transition-colors"
              />
            </a>

            <div className="flex items-center gap-3 pt-1">
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
              <li><Link to="/corsi/prosperous-coach" className="hover:text-white transition-colors">Prosperous Coach</Link></li>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {certifications.map((c) => (
              <div
                key={c.label}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[11px] font-black text-white tracking-tight shrink-0">
                  {c.badge}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-white tracking-tight">{c.label}</p>
                  <p className="text-[10px] text-white/50 font-medium leading-tight mt-0.5">
                    {c.sub}
                  </p>
                </div>
                <ShieldCheck size={14} className="ml-auto text-white/30" />
              </div>
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

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isCourseDetailPage = /^\/corsi\/[^/]+$/.test(location.pathname);

  return (
    <div className="font-sans text-brand-navy min-h-screen flex flex-col">
      <Header />
      <main
        className={`flex-grow ${
          isCourseDetailPage ? 'pt-[120px] max-[939px]:pt-[134px]' : 'pt-[72px] max-[939px]:pt-[74px]'
        }`}
      >
        {children}
      </main>
      <Footer />
      
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-[#25D366] text-white px-8 py-5 rounded-full shadow-3xl font-black text-xs uppercase tracking-widest flex items-center gap-4 hover:scale-110 active:scale-95 transition-all shadow-green-500/30 group">
          <div className="relative">
            <MessageCircle size={24} fill="currentColor" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366] animate-pulse"></span>
          </div>
          <span>Advisor Asterys</span>
        </button>
      </div>
    </div>
  );
};
