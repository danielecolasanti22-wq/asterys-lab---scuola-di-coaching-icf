import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Download,
  Bookmark,
  MessageCircle,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="pt-24 min-h-screen">
      <article className="pb-32">
        {/* Post Hero */}
        <section className="bg-brand-navy text-white py-20 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <img src="https://picsum.photos/seed/article/1920/1080" className="w-full h-full object-cover blur-sm" alt="Background" referrerPolicy="no-referrer" />
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-accent mb-12 hover:underline text-xs font-black uppercase tracking-widest">
              <ArrowLeft size={16} /> Torna al Blog
            </Link>
            <div className="flex justify-center gap-3 mb-8">
               <span className="px-4 py-1.5 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-[10px] font-black uppercase tracking-widest rounded-full">Articolo in primo piano</span>
            </div>
            <h1 className="font-display font-bold text-4xl lg:text-6xl mb-10 tracking-tight leading-tight">
              {id?.split('-').join(' ').toUpperCase()}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
              <div className="flex items-center gap-2"><Calendar size={14} className="text-brand-accent" /> 10 Aprile 2026</div>
              <div className="flex items-center gap-2"><Clock size={14} className="text-brand-accent" /> 12 Minuti di lettura</div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5"><User size={14} className="text-brand-accent" /> Giovanna Giuffredi</div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20 py-20 lg:py-32">
          {/* Social Share Sidebar */}
          <div className="hidden lg:block lg:col-span-1 border-r border-gray-100 pr-12">
            <div className="sticky top-40 flex flex-col gap-6">
               <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Linkedin size={18} /></button>
               <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Twitter size={18} /></button>
               <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Facebook size={18} /></button>
               <button className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all"><Share2 size={18} /></button>
            </div>
          </div>

          <div className="lg:col-span-11 grid lg:grid-cols-11 gap-20">
            {/* Article Body */}
            <div className="lg:col-span-7 prose prose-lg prose-brand max-w-none text-brand-navy/80 leading-relaxed">
               <p className="text-2xl font-display font-bold text-brand-navy italic border-l-4 border-brand-accent pl-8 mb-12">
                 "Il coaching non è dare consigli, è creare lo spazio affinché l'altro possa vedere ciò che prima era invisibile."
               </p>
               <h3 className="text-3xl font-display font-bold text-brand-navy mb-8">L'importanza della consapevolezza sistemica</h3>
               <p>
                 Nel mondo moderno, siamo abituati a guardare ai problemi come se fossero isolati. Un dipendente non lavora bene? È 'colpa' sua. Un progetto fallisce? È colpa del Project Manager. In realtà, ogni individuo è parte di un sistema complesso.
               </p>
               <p>
                 In Asterys Lab, insegnamo a spostare lo sguardo dall'individuo all'interazione tra le parti. È qui che avviene la vera magia del coaching.
               </p>
               <img src="https://picsum.photos/seed/writing/1000/600" className="w-full rounded-[2.5rem] shadow-2xl my-12" alt="Content" referrerPolicy="no-referrer" />
               <h3 className="text-3xl font-display font-bold text-brand-navy mb-8">Intelligenza Emotiva e Risultati</h3>
               <p>
                 Non basta essere gentili. L'Intelligenza Emotiva, come definita da Six Seconds, è la capacità di gestire i propri stati interiori per guidare i propri comportamenti verso un obiettivo. Non è una dote innata, è un muscolo che si allena.
               </p>
               <p>
                 Nel nostro Master APCM, dedichiamo ampio spazio alla misurazione di queste competenze. Perché ciò che non si misura, non si può migliorare.
               </p>
            </div>

            {/* Sidebar Resources */}
            <aside className="lg:col-span-4 space-y-12">
               <div className="bg-brand-blue-soft p-10 rounded-[2.5rem] shadow-xl shadow-brand-navy/5 sticky top-32">
                 <Bookmark className="text-brand-accent mb-6" size={32} />
                 <h4 className="font-display font-bold text-2xl mb-4 leading-tight">Vuoi diventare un Coach Professionista?</h4>
                 <p className="text-sm text-brand-navy/60 leading-relaxed mb-8">
                   Scarica il programma dettagliato del Master APCM e scopri come ottenere le credenziali ICF nel 2026.
                 </p>
                 <button className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                   Scarica il Master Plan <Download size={18} />
                 </button>
               </div>

               <div className="p-10 rounded-[2.5rem] border border-gray-100">
                  <h4 className="font-display font-bold text-lg mb-6 tracking-tight">Articoli Correlati</h4>
                  <div className="space-y-8">
                     {[1,2,3].map(i => (
                       <div key={i} className="group cursor-pointer">
                          <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-2">Pillar: Leadership</p>
                          <h5 className="font-display font-bold text-sm leading-tight group-hover:text-brand-navy transition-colors">Perché i manager oggi devono essere coach di sistema</h5>
                       </div>
                     ))}
                  </div>
               </div>
            </aside>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-brand-navy py-24 text-center text-white">
           <div className="max-w-2xl mx-auto px-6">
              <MessageCircle className="mx-auto mb-8 text-brand-accent" size={48} />
              <h2 className="font-display font-bold text-4xl mb-6">Hai trovato utile questo articolo?</h2>
              <p className="text-white/40 mb-10 leading-relaxed">Iscriviti alla nostra newsletter 'Monthly Lab' per ricevere approfondimenti esclusivi direttamente nella tua inbox.</p>
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
