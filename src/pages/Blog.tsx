import {
  ArrowRight,
  Calendar,
  Download,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { blogPosts } from '../constants/blogPosts';
import { submitToGravityForms, mapGfErrors } from '../utils/gravityForms';
import { GF_GUIDA, GF_ERR_GUIDA } from '../constants/gravityForms';
import Img from '../components/Img';

const GUIDE_URL = '/guide/diventare-coach.pdf';

/** Lead magnet: clic sul bottone → compare il campo email → invio → download della guida. */
function LeadMagnetCard() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const startDownload = () => {
    const a = document.createElement('a');
    a.href = GUIDE_URL;
    a.download = 'Diventare-Coach-Asterys-Lab.pdf';
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError(null);
    setSending(true);
    if (GF_GUIDA.formId) {
      const r = await submitToGravityForms(GF_GUIDA.formId, {
        input_1: email,
        input_2: 'Guida: Diventare Coach',
      });
      setSending(false);
      if (!r.ok) {
        const fe = mapGfErrors(r.errors, GF_ERR_GUIDA);
        setError(fe.email || r.message || "Controlla l'email e riprova.");
        return;
      }
    } else {
      setSending(false);
    }
    setDone(true);
    startDownload();
  };

  return (
    <div className="bg-brand-blue-soft p-10 rounded-[2.5rem] shadow-brand-navy/5 shadow-xl">
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
        <Bookmark className="text-brand-accent" size={32} />
      </div>
      <h3 className="font-display font-bold text-2xl mb-4 leading-tight">La guida gratuita per diventare Coach</h3>
      <p className="text-sm text-brand-navy/60 leading-relaxed mb-8">
        Scarica la guida di Asterys Lab e scopri come trasformare la tua passione per le persone in una professione: cos'è il coaching, come si diventa coach e il percorso verso le credenziali ICF.
      </p>

      {done ? (
        <div className="rounded-2xl bg-white/70 p-6 text-center">
          <CheckCircle2 className="text-brand-accent mx-auto mb-2" size={26} />
          <p className="font-display font-black text-brand-navy">Ecco la tua guida!</p>
          <p className="text-sm text-brand-navy/60 mt-1">
            Il download è partito.{' '}
            <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              Non parte? Scarica qui
            </a>
            .
          </p>
        </div>
      ) : open ? (
        <form onSubmit={handleSubmit} noValidate className="space-y-3">
          <input
            type="email"
            required
            autoFocus
            placeholder="La tua email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(null); }}
            className={`w-full px-5 py-3.5 rounded-xl bg-white border outline-none transition-colors font-medium text-sm ${error ? 'border-red-500' : 'border-gray-100 focus:border-brand-accent'}`}
          />
          {error ? <p className="text-xs font-bold text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={sending}
            className="btn-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? 'Invio…' : <>Scarica <Download size={18} /></>}
          </button>
          <p className="text-[11px] text-brand-navy/45 text-center">Lasciando l'email accetti l'informativa privacy.</p>
        </form>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="btn-primary w-full py-4 flex items-center justify-center gap-2 shadow-xl shadow-brand-navy/10 transform transition-transform hover:scale-[1.02]"
        >
          Scarica la guida gratuita <Download size={18} />
        </button>
      )}
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  // Categorie reali dai post, ordinate per frequenza, max 12 pill
  const categories = (() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([c]) => c);
  })();
  const visiblePosts = activeCategory ? blogPosts.filter((p) => p.category === activeCategory) : blogPosts;

  return (
    <div className="pb-20">
      <PageHero
        title="Risorse &"
        highlight="Blog"
        subtitle="Approfondimenti su coaching, intelligenza emotiva e sistemi organizzativi per crescere come professionista e come persona."
      />

      <div className="max-w-[var(--wrap-max)] mx-auto px-6 pt-16">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Posts List */}
          <div className="lg:col-span-8 space-y-20">
            {visiblePosts.map((post, i) => (
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={post.slug}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                    <Img src={post.img} sizes="(max-width: 1024px) 100vw, 1100px" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={post.title} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-6 left-6 inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-[10px] font-black uppercase tracking-widest text-brand-navy shadow-xl">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 mb-4 text-[10px] font-black uppercase tracking-widest text-brand-navy/40">
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-brand-accent" /> {post.date}</div>
                  </div>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 group-hover:text-brand-navy transition-colors tracking-tight leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-brand-navy/60 leading-relaxed mb-6 line-clamp-2 max-w-3xl">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest group-hover:text-brand-accent transition-colors">
                    Leggi e portalo nella pratica <ArrowRight size={18} className="translate-x-[-4px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-12">
            {/* Lead Magnet Card — fisso durante lo scroll */}
            <LeadMagnetCard />

            {/* Popular Topics */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-widest text-brand-navy/30 mb-8 border-b border-gray-100 pb-4">Approfondisci per argomento</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory(null)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors ${
                    activeCategory === null
                      ? 'bg-brand-navy text-white border border-brand-navy'
                      : 'bg-gray-50 border border-gray-100 text-brand-navy hover:border-brand-accent'
                  }`}
                >
                  Tutti
                </button>
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActiveCategory(c)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors ${
                      activeCategory === c
                        ? 'bg-brand-navy text-white border border-brand-navy'
                        : 'bg-gray-50 border border-gray-100 text-brand-navy hover:border-brand-accent'
                    }`}
                  >
                    {c}
                  </button>
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
