import { useState } from 'react';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Calendar, 
  Layout, 
  ChevronRight,
  Target,
  Zap,
  Users,
  Brain
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const coursesData = [
  {
    id: 'apcm',
    category: 'Diventare coach professionista',
    type: "MASTER",
    title: "Accredited Professional Coaching Mastery (APCM)",
    desc: "Il percorso definitivo per chi vuole ottenere credenziali ICF Level 1 e Level 2. Un viaggio trasformativo dal metodo alla professione.",
    duration: "150 ore - Online/Presenza",
    next: "Maggio 2026",
    img: "https://picsum.photos/seed/master/600/400",
    tags: ['ICF L1', 'ICF L2', 'Pratica Supervisionata']
  },
  {
    id: 'systemic-team-coaching',
    category: 'Per coach già attivi',
    type: "AVANZATO",
    title: "Asterys Systemic Team Coaching (ASTC)",
    desc: "Il modello ASTC accreditato ICF per il coaching sistemico dei team. Prerequisito per la credenziale ACTC, 54 ore sincrone equivalenti a 60 CCE.",
    duration: "54 ore - Online + Aula",
    next: "Ottobre 2026",
    img: "https://picsum.photos/seed/team/600/400",
    tags: ['ICF AATC', 'Sistemico', 'Milano / Roma']
  },
  {
    id: 'eiw',
    category: 'Intelligenza emotiva',
    type: "WORKOUT EQ",
    title: "Emotional Intelligence Workout (EIW)",
    desc: "Allena la tua intelligenza emotiva con esperienze consapevoli guidate dai coach EIW. Modello CSI, fiore di Plutchik, 4 CCE ICF per Round.",
    duration: "Round da 4 CCE ICF",
    next: "Prossimo Round",
    img: "https://picsum.photos/seed/ei/600/400",
    tags: ['Modello CSI', 'Plutchik', 'CCE ICF']
  },
  {
    id: 'prosperous-coach',
    category: 'Per coach già attivi',
    type: "BUSINESS",
    title: "Prosperous Coach Program",
    desc: "Dimentica il marketing generico. Impara a posizionarti come esperto e a trovare clienti in linea con i tuoi valori.",
    duration: "3 mesi - Mentoring",
    next: "Inizio libero",
    img: "https://picsum.photos/seed/business/600/400",
    tags: ['Business', 'Marketing', 'Posizionamento']
  },
  {
    id: 'public-speaking',
    category: 'Per HR/manager',
    type: "COMUNICAZIONE",
    title: "Public Speaking Pro",
    desc: "Gestisci l'ansia, struttura discorsi d'impatto e ispira la tua platea con presenza e storytelling.",
    duration: "16 ore - Online",
    next: "Novembre 2026",
    img: "https://picsum.photos/seed/speaking/600/400",
    tags: ['Soft Skills', 'Comunicazione']
  }
];

const categories = [
  "Tutti i corsi",
  "Diventare coach professionista",
  "Per coach già attivi",
  "Per HR/manager",
  "Intelligenza emotiva"
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("Tutti i corsi");

  const filteredCourses = activeCategory === "Tutti i corsi" 
    ? coursesData 
    : coursesData.filter(c => c.category === activeCategory);

  return (
    <div className="pb-20 bg-white">
      <section className="bg-[#F2F7FF] py-16 lg:py-20 mb-10 relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#1D3BB9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0047FF]/10 blur-3xl" />
        <div className="max-w-[941px] mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-6 text-[#1D3BB9] uppercase text-[10px] font-black tracking-[0.25em]">
            <span className="w-8 h-px bg-[#1D3BB9]/40"></span>
            Asterys Lab · Academy
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl mb-6 tracking-tighter text-brand-navy uppercase italic leading-[0.95]">
            Tutti i percorsi
          </h1>
          <p className="text-lg text-brand-navy/65 max-w-2xl leading-relaxed font-medium">
            Dalla formazione di base per aspiranti coach alle specializzazioni avanzate per professionisti e aziende. Trova il programma adatto ai tuoi obiettivi.
          </p>
        </div>
      </section>

      <div className="max-w-[941px] mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2 text-brand-navy mr-6 font-bold text-sm">
            <Filter size={18} className="text-brand-accent" /> Filtra per:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.12em] transition-all ${
                activeCategory === cat 
                  ? 'bg-[#001D4B] text-white shadow-[0_14px_40px_-18px_rgba(0,21,51,0.45)]' 
                  : 'bg-[#F9FAFB] text-brand-navy/55 hover:bg-white hover:text-brand-navy ring-1 ring-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm font-bold text-brand-navy/40">
            Mostrando <span className="text-brand-navy">{filteredCourses.length}</span> percorsi formativi
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((c, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={c.id} 
              className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-[0_22px_60px_-32px_rgba(0,21,51,0.18)] hover:shadow-[0_28px_80px_-34px_rgba(0,21,51,0.22)] transition-all border border-gray-100 group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={c.img} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  referrerPolicy="no-referrer" 
                  alt={c.title} 
                />
                <div className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-black tracking-widest text-brand-navy ring-1 ring-black/5">
                  {c.type}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {c.tags.slice(0, 2).map(t => (
                    <span key={t} className="text-[10px] bg-[#F9FAFB] px-2 py-1 rounded-md font-black text-brand-navy/45 uppercase tracking-wider ring-1 ring-black/5">{t}</span>
                  ))}
                </div>
                <h3 className="font-display font-black text-lg mb-4 leading-snug group-hover:text-brand-accent transition-colors uppercase italic tracking-tight">{c.title}</h3>
                <p className="text-sm text-brand-navy/60 mb-8 flex-grow leading-relaxed line-clamp-3">{c.desc}</p>
                
                <div className="space-y-3 mb-8 text-xs font-bold pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-brand-navy/40">
                    <Calendar size={14} className="text-brand-accent" /> <span>Prossima edizione: {c.next}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-navy/40">
                    <Layout size={14} className="text-brand-accent" /> <span>{c.duration}</span>
                  </div>
                </div>
                
                <Link
                  to={`/corsi/${c.id}`}
                  className="w-full py-4 text-[11px] font-black uppercase tracking-[0.22em] rounded-full bg-[#001D4B] text-white hover:bg-[#1D3BB9] transition-colors flex justify-center items-center gap-2"
                >
                  Dettagli corso <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Corporate Bridge */}
      <section className="mt-32 section-padding bg-brand-blue-soft/30">
        <div className="max-w-[941px] mx-auto px-4 bg-brand-navy rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-accent rounded-full opacity-10"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl mb-6">Cerchi formazione per il tuo team?</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Asterys Lab collabora direttamente con la divisione Corporate per offrire programmi su misura: Coaching per Manager, Leadership Development e Team Coaching Sistemico.
              </p>
              <Link to="/aziende" className="btn-primary bg-white text-brand-navy hover:bg-white/90">Area Corporate & HR</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Zap />, label: 'Agilità' },
                { icon: <Users />, label: 'Team Building' },
                { icon: <Brain />, label: 'IE in Azienda' },
                { icon: <Target />, label: 'Strategia' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
                  <div className="text-brand-accent mb-3">{item.icon}</div>
                  <p className="font-bold text-xs uppercase tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
