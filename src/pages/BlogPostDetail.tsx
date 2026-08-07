import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { blogPosts, blogPostsBySlug } from '../constants/blogPosts';
import { autoHighlight, createLinkBudget, PERCORSO_PER_CATEGORIA } from '../utils/highlight';
import { NewsletterForm } from '../components/NewsletterForm';
import Img from '../components/Img';

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

  // Correlati: due dello stesso argomento più uno di un altro, così chi ha finito di
  // leggere trova sia l'approfondimento sia una via per uscire dal tema. Prima erano
  // semplicemente i primi tre dell'elenco: gli stessi sotto ogni articolo, quasi mai
  // attinenti a quello appena letto.
  const altri = blogPosts.filter((p) => p.slug !== post.slug);
  const stessoTema = altri.filter((p) => p.category === post.category);
  const altroTema = altri.filter((p) => p.category !== post.category);
  const related = [...stessoTema.slice(0, 2), ...altroTema, ...stessoTema.slice(2)].slice(0, 3);

  // Tetto ai link verso i corsi per questo articolo, con un posto tenuto da parte per il
  // percorso più pertinente all'argomento (vedi autoHighlight).
  const linkBudget = createLinkBudget(PERCORSO_PER_CATEGORIA[post.category]);

  return (
    <div className="min-h-screen">
      <article>
        {/* Post Hero — immagine articolo visibile, velo leggero */}
        <section className="relative bg-brand-navy text-white overflow-hidden">
          <Img
            src={post.img}
            sizes="100vw"
            priority
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-navy/35" />

          {/* Back link — alto a sinistra */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
            >
              <ArrowLeft size={16} /> Torna al Blog
            </Link>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-12 pb-20 lg:pt-16 lg:pb-28">
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl mb-8 tracking-tight leading-[1.1]">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-[10px] font-black uppercase tracking-widest text-white/60">
              <div className="flex items-center gap-2"><Calendar size={14} className="text-brand-accent" /> {post.date}</div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 py-16 lg:py-24">
          {/* Article Body */}
          <div className="lg:col-span-8 text-brand-navy/80 leading-relaxed">
            <p className="text-xl sm:text-2xl font-display font-bold text-brand-navy leading-snug mb-12">
              {autoHighlight(post.excerpt, new Set<string>())}
            </p>
            {(() => {
              // Set condiviso per evidenziare la PRIMA occorrenza di ogni keyword;
              // si azzera a ogni H2 così ogni sezione può rievidenziare i suoi termini.
              const seen = new Set<string>();
              return post.content.map((block, i) => {
              if (block.type === 'h2') {
                seen.clear();
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
                        <span>{autoHighlight(it, seen, linkBudget)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-base sm:text-lg leading-relaxed mb-6">
                  {autoHighlight(block.text, seen, linkBudget)}
                </p>
              );
            });
            })()}
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
        </section>

        {/* Footer CTA */}
        <section className="bg-brand-blue-soft py-20 lg:py-24 text-center text-brand-navy">
          <div className="max-w-2xl mx-auto px-6">
            <MessageCircle className="mx-auto mb-8 text-brand-accent" size={48} />
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-6 tracking-tight">Hai trovato utile questo articolo?</h2>
            <p className="text-brand-navy/65 mb-10 leading-relaxed">
              Iscriviti alla newsletter per ricevere nuovi approfondimenti su coaching, intelligenza emotiva e crescita professionale.
            </p>
            <NewsletterForm
              source="Fine articolo blog"
              placeholder="La tua email..."
              wrapperClassName="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              inputClassName="flex-grow px-6 py-4 rounded-xl bg-white border border-brand-navy/10 outline-none focus:border-brand-accent font-medium"
              buttonClassName="btn-primary bg-brand-navy text-white whitespace-nowrap"
            />
          </div>
        </section>
      </article>
    </div>
  );
}
