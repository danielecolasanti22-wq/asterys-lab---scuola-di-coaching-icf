import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook,
} from 'lucide-react';
import { blogPosts, blogPostsBySlug } from '../constants/blogPosts';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsBySlug[id] : undefined;

  if (!post) {
    return (
      <div className="pt-40 pb-32 min-h-screen text-center px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-4">Articolo non trovato</p>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mb-6 tracking-tight">
          Questo articolo non esiste o è stato spostato
        </h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-accent hover:underline"
        >
          <ArrowLeft size={16} /> Torna al Blog
        </Link>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-24 min-h-screen">
      <article className="pb-32">
        {/* Post Hero */}
        <section className="bg-brand-navy text-white py-20 lg:py-36 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={post.img} className="w-full h-full object-cover blur-sm" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-accent mb-10 hover:underline text-xs font-black uppercase tracking-widest">
              <ArrowLeft size={16} /> Torna al Blog
            </Link>
            <div className="flex justify-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-black uppercase tracking-widest rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-10 tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-[10px] font-black uppercase tracking-widest text-white/50">
              <div className="flex items-center gap-2"><Calendar size={14} className="text-brand-accent" /> {post.date}</div>
              <div className="flex items-center gap-2"><Clock size={14} className="text-brand-accent" /> {post.readTime} di lettura</div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5"><User size={14} className="text-brand-accent" /> {post.author}</div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 py-16 lg:py-24">
          {/* Social Share Sidebar */}
          <div className="hidden lg:block lg:col-span-1 border-r border-gray-100 pr-12">
            <div className="sticky top-40 flex flex-col gap-6">
              <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Linkedin size={18} /></button>
              <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Twitter size={18} /></button>
              <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Facebook size={18} /></button>
              <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Share2 size={18} /></button>
            </div>
          </div>

          <div className="lg:col-span-11 grid lg:grid-cols-11 gap-12 lg:gap-20">
            {/* Article Body */}
            <div className="lg:col-span-7 text-brand-navy/80 leading-relaxed">
              <p className="text-xl sm:text-2xl font-display font-bold text-brand-navy leading-snug mb-12">
                {post.excerpt}
              </p>
              {post.content.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h2 key={i} className="text-2xl sm:text-3xl font-display font-bold text-brand-navy mt-12 mb-6 tracking-tight">
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote key={i} className="text-xl sm:text-2xl font-display font-bold text-brand-navy italic border-l-4 border-brand-accent pl-6 sm:pl-8 my-10">
                      {block.text}
                    </blockquote>
                  );
                }
                if (block.type === 'list') {
                  return (
                    <ul key={i} className="my-6 space-y-3">
                      {block.items.map((it, j) => (
                        <li key={j} className="flex gap-3 text-base sm:text-lg leading-relaxed">
                          <span className="text-brand-accent font-black mt-1 shrink-0">→</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-base sm:text-lg leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 p-8 sm:p-10 rounded-[2.5rem] border border-gray-100">
                <h4 className="font-display font-bold text-lg mb-8 tracking-tight">Articoli correlati</h4>
                <div className="space-y-8">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="group block">
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-2">{r.category}</p>
                      <h5 className="font-display font-bold text-sm leading-tight group-hover:text-brand-accent transition-colors">
                        {r.title}
                      </h5>
                      <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-brand-navy/40 group-hover:text-brand-accent transition-colors">
                        Leggi <ArrowRight size={12} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-brand-navy py-20 lg:py-24 text-center text-white">
          <div className="max-w-2xl mx-auto px-6">
            <MessageCircle className="mx-auto mb-8 text-brand-accent" size={48} />
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">Hai trovato utile questo articolo?</h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              Iscriviti alla newsletter per ricevere nuovi approfondimenti su coaching, intelligenza emotiva e crescita professionale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="La tua email..." className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-accent font-medium" />
              <button className="btn-primary bg-brand-accent text-white border-brand-accent whitespace-nowrap">Iscriviti</button>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
