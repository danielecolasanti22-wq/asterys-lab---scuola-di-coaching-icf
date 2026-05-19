import {
  ArrowRight,
  User,
  Calendar,
  Clock,
  Download,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { blogPosts } from '../constants/blogPosts';

export default function Blog() {
  return (
    <div className="pb-20">
      <PageHero
        title="Risorse &"
        highlight="Blog"
        subtitle="Approfondimenti su coaching, intelligenza emotiva e sistemi organizzativi scritti dai nostri trainer MCC e PCC."
      />

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Posts List */}
          <div className="lg:col-span-8 space-y-20">
            {blogPosts.map((post, i) => (
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={post.slug}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.slug}`}>
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
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-12">
            {/* Lead Magnet Card — fisso durante lo scroll */}
            <div className="bg-brand-blue-soft p-10 rounded-[2.5rem] shadow-brand-navy/5 shadow-xl">
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
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
