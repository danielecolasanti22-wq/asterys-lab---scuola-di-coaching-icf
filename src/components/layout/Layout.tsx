import { useState, useEffect, ReactNode } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  Zap, 
  Globe, 
  PhoneCall, 
  MessageCircle, 
  ArrowRight,
  Star,
  Play,
  Video,
  Monitor,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Corsi', href: '/corsi', hasDropdown: true },
    { name: 'Eventi', href: '/eventi' },
    { name: 'Blog', href: '/blog' },
  ];

  const isHome = location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20 flex items-center ${isScrolled || !isHome ? 'bg-white border-b border-gray-100' : 'bg-white'}`}>
      <div className="max-w-[1400px] mx-auto px-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-8 h-8 rotate-45 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#008060] rounded-sm transform scale-90"></div>
              <div className="absolute inset-0 bg-white rounded-sm transform scale-50 -translate-x-1 -translate-y-1"></div>
            </div>
            <span className="font-sans font-black text-2xl tracking-tighter text-brand-navy lowercase select-none">asteryslab</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`flex items-center gap-1 font-bold text-sm tracking-tight transition-colors ${location.pathname === link.href ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'}`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-60" />}
              </Link>
            ))}
            <div className="h-4 w-px bg-gray-200"></div>
            <Link 
              to="/aziende" 
              className={`font-bold text-sm tracking-tight transition-colors ${location.pathname === '/aziende' ? 'text-brand-navy' : 'text-brand-navy hover:text-brand-accent'}`}
            >
              Per le aziende
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <button className="text-brand-navy font-bold text-xs uppercase tracking-widest hover:text-brand-accent transition-colors">
            Accedi
          </button>
          <button className="bg-[#1D3BB9] text-white px-8 py-3 rounded-full font-sans font-black text-xs uppercase tracking-[0.1em] hover:bg-blue-700 transition-all active:scale-95">
            Iscriviti
          </button>
        </div>

        <button className="lg:hidden text-brand-navy" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t lg:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-lg font-black uppercase tracking-widest ${location.pathname === link.href ? 'text-brand-accent' : 'text-brand-navy'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/aziende" className="text-lg font-black uppercase tracking-widest text-brand-navy" onClick={() => setIsMenuOpen(false)}>Per le aziende</Link>
            <hr className="my-2 border-brand-blue-soft" />
            <button className="bg-[#1D3BB9] text-white py-4 rounded-md font-black text-xs uppercase tracking-widest text-center">Iscriviti</button>
            <button className="border-2 border-brand-navy/10 text-brand-navy py-4 rounded-md font-black text-xs uppercase tracking-widest text-center">Accedi</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-11 h-11 bg-brand-navy rounded-sm flex items-center justify-center">
                <span className="text-white font-display font-black text-2xl italic leading-none">A</span>
              </div>
              <span className="font-display font-black text-4xl tracking-tighter text-brand-navy uppercase italic leading-none">Asterys Lab</span>
            </div>
            <p className="text-brand-navy text-2xl font-black uppercase tracking-tight mb-10 italic leading-tight">La 1° Coaching School ICF Accreditata in Italia</p>
            
            <div className="flex items-center gap-8 mb-12 grayscale opacity-40 py-6 border-y border-gray-50">
               <p className="text-[10px] font-black uppercase tracking-widest">+8.000 professionisti formati</p>
               <div className="flex text-brand-accent gap-1"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
               <p className="text-[10px] font-black uppercase tracking-widest">Trustpilot 4.7 Eccellente</p>
            </div>
            
            <div className="space-y-12">
               <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/20 mb-6 italic">Vuoi più informazioni?</h4>
                  <button className="flex items-center gap-6 group">
                     <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-navy group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-sm">
                        <MessageCircle size={28} />
                     </div>
                     <div className="text-left">
                        <p className="text-lg font-black uppercase tracking-tight italic group-hover:text-[#25D366] transition-colors leading-none">Contattaci su WhatsApp</p>
                     </div>
                  </button>
               </div>
               <div className="space-y-2">
                  <p className="text-xs font-bold text-brand-navy/60 italic leading-none">Chiama +39 02 1234 5678</p>
                  <p className="text-xs font-bold text-brand-navy/60 italic leading-none">Scrivici info@asteryslab.com</p>
               </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-16 text-left">
            <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/20 mb-12 italic">Percorsi</h4>
               <ul className="space-y-6 text-sm font-bold text-brand-navy/80 uppercase tracking-tight italic">
                  <li><Link to="/corsi/apcm" className="hover:text-brand-accent transition-colors">Master APCM</Link></li>
                  <li><Link to="/corsi/systemic-team-coaching" className="hover:text-brand-accent transition-colors">Team Coaching Sistemico</Link></li>
                  <li><Link to="/corsi/eiw" className="hover:text-brand-accent transition-colors">Intelligenza Emotiva</Link></li>
                  <li><Link to="/corsi/prosperous-coach" className="hover:text-brand-accent transition-colors">Prosperous Coach</Link></li>
                  <li><Link to="/corsi" className="hover:text-brand-accent transition-colors">Tutti i corsi</Link></li>
               </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/20 mb-12 italic">Prova Gratis</h4>
               <ul className="space-y-6 text-sm font-bold text-brand-navy/80 uppercase tracking-tight italic">
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">Web Development</li>
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">Data Analytics</li>
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">UX/UI Design</li>
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">Growth Marketing</li>
               </ul>
            </div>
            <div className="col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-gray-100 pt-16 md:pt-0 md:pl-16">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/20 mb-12 italic">Links</p>
               <ul className="space-y-6 text-sm font-bold text-brand-navy/80 uppercase tracking-tight italic">
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">Per le Aziende</li>
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">Events</li>
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">Blog</li>
                  <li className="hover:text-brand-accent cursor-pointer transition-colors">Finanzia il tuo corso</li>
               </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/10">
           <div className="flex gap-12">
              <span className="hover:text-brand-navy cursor-pointer transition-colors">Terms & Privacy</span>
           </div>
           <p className="text-center">Asterys Lab S.r.l. — Scuola di Coaching ICF Accreditata — Milano</p>
           <div className="flex gap-6 opacity-20">
              <Play size={16} fill="currentColor" />
              <Video size={16} fill="currentColor" />
              <Monitor size={16} fill="currentColor" />
           </div>
        </div>
      </div>
    </footer>
  );
};

export const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-sans text-brand-navy min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
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
