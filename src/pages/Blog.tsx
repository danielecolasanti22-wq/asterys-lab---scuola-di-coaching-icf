import { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  User, 
  Calendar, 
  Clock, 
  Tag, 
  Download,
  CheckCircle2,
  ChevronRight,
  Bookmark
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'diventare-coach-professionista-guida-2026',
    title: "Come diventare Coach Professionista: la guida definitiva 2026",
    excerpt: "Dalla scelta della scuola all'accreditamento ICF. Tutto quello che devi sapere per iniziare la tua carriera nel coaching.",
    category: "Diventare coach professionista",
    date: "10 Aprile 2026",
    author: "Giovanna Giuffredi",
    readTime: "12 min",
    img: "https://picsum.photos/seed/blog1/800/500"
  },
  {
    id: 'intelligenza-emotiva-misurabile',
    title: "Perché l'Intelligenza Emotiva misurabile è il futuro del coaching",
    excerpt: "Oltre la teoria: come i dati e il metodo Six Seconds possono certificare la crescita emotiva di un coachee.",
    category: "Intelligenza emotiva",
    date: "5 Aprile 2026",
    author: "Pietro Monti",
    readTime: "8 min",
    img: "https://picsum.photos/seed/blog2/800/500"
  },
  {
    id: 'business-coach-trovare-clienti',
    title: "Il business del coach: 3 strategie per trovare clienti alto-spendenti",
    excerpt: "Non basta essere bravi coach, bisogna essere bravi imprenditori. Come posizionarsi sul mercato senza sembrare dei 'guru'.",
    category: "Business del coach",
    date: "1 Aprile 2026",
    author: "Redazione Lab",
    readTime: "10 min",
    img: "https://picsum.photos/seed/blog3/800/500"
  },
  {
    id: 'credenziali-icf-novita-2026',
    title: "Credenziali ICF: le novità su Level 1, 2 e 3 per il rinnovo",
    excerpt: "Un riassunto completo sui nuovi standard International Coaching Federation per chi deve rinnovare ACC o PCC.",
    category: "Credenziali ICF",
    date: "28 Marzo 2026",
    author: "Giovanna Giuffredi",
    readTime: "15 min",
    img: "https://picsum.photos/seed/blog4/800/500"
  },
  {
    id: 'team-coaching-sistemico-aziende',
    title: "Team Coaching Sistemico: come sbloccare le dinamiche di board difficili",
    excerpt: "Quando il coaching individuale non basta. L'approccio sistemico applicato ai gruppi di comando in azienda.",
    category: "Team coaching sistemico",
    date: "20 Marzo 2026",
    author: "Pietro Monti",
    readTime: "11 min",
    img: "https://picsum.photos/seed/blog5/800/500"
  }
];

const pillars = [
  "Tutto",
  "Diventare coach professionista",
  "Intelligenza emotiva",
  "Team coaching sistemico",
  "Business del coach",
  "Credenziali ICF"
];

export default function Blog() {
  const [activePillar, setActivePillar] = useState("Tutto");

  const filteredPosts = activePillar === "Tutto" 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activePillar);

  return (
    <div className="pt-32 pb-20">
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-black uppercase text-xs tracking-[0.2em] mb-4 block">Knowledge Hub</span>
              <h1 className="font-display font-bold text-5xl lg:text-7xl mb-6 tracking-tight text-brand-navy">Risorse & Blog.</h1>
              <p className="text-xl text-brand-navy/60 leading-relaxed">
                Approfondimenti su coaching, intelligenza emotiva e sistemi organizzativi scritti dai nostri trainer MCC e PCC.
              </p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-navy/30" size={20} />
              <input 
                type="text" 
                placeholder="Cerca un argomento..." 
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-brand-blue-soft/30 border-none focus:ring-2 ring-brand-navy/5 outline-none font-medium placeholder:text-brand-navy/30"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Categories / Pillars */}
        <div className="flex flex-wrap gap-3 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          {pillars.map(p => (
            <button
              key={p}
              onClick={() => setActivePillar(p)}
              className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                activePillar === p 
                  ? 'bg-brand-navy text-white shadow-xl translate-y-[-2px]' 
                  : 'bg-gray-50 text-brand-navy/40 hover:bg-brand-blue-soft/50 hover:text-brand-navy'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Posts List */}
          <div className="lg:col-span-8 space-y-20">
            {filteredPosts.map((post, i) => (
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={post.id} 
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                    <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={post.title} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-6 left-6 inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-[10px] font-black uppercase tracking-widest text-brand-navy shadow-xl">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mb-4 text-[10px] font-black uppercase tracking-widest text-brand-navy/40">
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-brand-accent" /> {post.date}</div>
                    <div className="flex items-center gap-2"><Clock size={14} className="text-brand-accent" /> {post.readTime}</div>
                    <div className="flex items-center gap-2"><User size={14} className="text-brand-accent" /> {post.author}</div>
                  </div>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 group-hover:text-brand-navy transition-colors tracking-tight leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-brand-navy/60 leading-relaxed mb-6 line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest group-hover:text-brand-accent transition-colors">
                    Continua a leggere <ArrowRight size={18} className="translate-x-[-4px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Lead Magnet Card */}
            <div className="bg-brand-blue-soft p-10 rounded-[2.5rem] shadow-brand-navy/5 shadow-xl sticky top-32">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Bookmark className="text-brand-accent" size={32} />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 leading-tight">Risorsa Gratuita per Aspiranti Coach</h3>
              <p className="text-sm text-brand-navy/60 leading-relaxed mb-8">
                Scarica la nostra guida su come ottenere le credenziali ICF e scegliere il percorso formativo corretto per le tue ambizioni.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-xs font-bold text-brand-navy"><CheckCircle2 size={16} className="text-brand-accent" /> Roadmap ICF 2026</div>
                <div className="flex items-center gap-3 text-xs font-bold text-brand-navy"><CheckCircle2 size={16} className="text-brand-accent" /> Tabella comparativa Master</div>
              </div>
              <button className="btn-primary w-full py-4 flex items-center justify-center gap-2 shadow-xl shadow-brand-navy/10 transform transition-transform hover:scale-[1.02]">
                Ottieni la guida <Download size={18} />
              </button>
            </div>

            {/* Popular Topics */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-navy/30 mb-8 border-b border-gray-100 pb-4">Argomenti caldi</h4>
              <div className="flex flex-wrap gap-2">
                {["ICF Level 2", "Six Seconds", "Team Dynamics", "Self-Brand", "Leadership", "Mentoring"].map(t => (
                  <span key={t} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-black uppercase tracking-widest hover:border-brand-accent transition-colors cursor-pointer">{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
