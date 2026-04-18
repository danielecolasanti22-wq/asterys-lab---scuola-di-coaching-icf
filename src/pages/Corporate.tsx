import { 
  Building2, 
  ArrowRight, 
  Target, 
  Zap, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  MessageCircle,
  Globe,
  Handshake,
  Brain
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Corporate() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-navy text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-brand-accent rounded-full blur-[150px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-brand-accent px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] mb-8 border border-white/10 uppercase">
                Corporate Excellence
              </div>
              <h1 className="font-display font-bold text-5xl lg:text-7xl mb-8 tracking-tight leading-tight">
                Trasformazione Culturale attraverso il Coaching.
              </h1>
              <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
                Supportiamo HR Director, L&D e C-Level nel costruire organizzazioni evolute, emotivamente intelligenti e capaci di navigare i sistemi complessi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-white text-brand-navy border-white hover:bg-white/90">Parla con un consulente</button>
                <button className="btn-secondary border-white/20 text-white hover:bg-white/5">Scarica Brochure Corporate</button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl skew-y-3 transform transition-transform hover:skew-y-0 duration-1000">
                <img src="https://picsum.photos/seed/office/800/1000" className="w-full h-full object-cover" alt="Asterys Corporate" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-accent p-10 rounded-[2.5rem] shadow-2xl">
                <Building2 size={48} className="text-white mb-4" />
                <p className="text-2xl font-display font-black text-white">+20 anni</p>
                <p className="text-xs uppercase tracking-widest text-white/60 font-bold">In progetti multinazionali</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relazione Asterys/Lab */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-blue-soft/30 p-12 lg:p-24 rounded-[4rem] border border-gray-100 relative">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8 text-brand-navy tracking-tight">Il nostro ecosistema.</h2>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                        <span className="text-white font-display font-bold text-xl uppercase">AL</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg mb-2">Asterys Lab: La Scuola</h4>
                        <p className="text-sm text-brand-navy/60 leading-relaxed">
                          Il braccio accademico dedicato alla formazione di coach professionisti, master individuali e certificazioni internazionali ICF e Six Seconds. Qui si costruiscono le competenze.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                        <span className="text-white font-display font-bold text-xl uppercase">A</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg mb-2">Asterys: I Progetti</h4>
                        <p className="text-sm text-brand-navy/60 leading-relaxed">
                          La società di consulenza globale specializzata in Business Transformation. Implementiamo ecosistemi di coaching, interventi sistemici e cultura organizzativa per grandi aziende.
                        </p>
                      </div>
                    </div>
                  </div>
               </div>
               <div className="relative flex justify-center">
                  <Globe className="text-brand-navy/5 w-[140%] max-w-none absolute -top-1/2" />
                  <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl relative z-10 max-w-md text-center border border-gray-100">
                    <Handshake className="text-brand-accent mb-6 mx-auto" size={48} />
                    <h3 className="font-display font-bold text-xl mb-4">Interconnessi per l'eccellenza</h3>
                    <p className="text-sm text-brand-navy/60 leading-relaxed">
                      Utilizziamo lo stesso DNA metodologico (Sistemico e Emotivo) per formare le persone (Lab) e trasformare le organizzazioni (Corporate).
                    </p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Corporate Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-display font-bold text-4xl mb-6">Soluzioni per HR & Business Leader.</h2>
            <p className="text-brand-navy/60 max-w-2xl mx-auto">Interventi mirati ad alto impatto per lo sviluppo della leadership e delle performance di team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Internal Coaching Academy",
                desc: "Creiamo all'interno della tua azienda una 'scuola' per formare manager-coach accreditati ICF, garantendo qualità e scalabilità culturale.",
                icon: <Brain />
              },
              {
                title: "Systemic Team Development",
                desc: "Interventi sui team di comando per allineare visione, valori e operatività, rimuovendo i blocchi sistemici che impediscono la crescita.",
                icon: <Zap />
              },
              {
                title: "EQ for Management",
                desc: "Programmi intensivi focalizzati sulla misurazione e lo sviluppo dell'Intelligenza Emotiva per leader chiamati a gestire il cambiamento.",
                icon: <BarChart3 />
              }
            ].map((sol, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-soft border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-brand-blue-soft rounded-2xl flex items-center justify-center mb-8 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all">
                  {sol.icon}
                </div>
                <h3 className="font-display font-bold text-2xl mb-6 leading-tight">{sol.title}</h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed mb-10">
                  {sol.desc}
                </p>
                <button className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-brand-navy hover:text-brand-accent transition-colors">
                  Dettagli Soluzione <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 border-y border-gray-100 py-16">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy/30 mb-12">Hanno scelto il nostro metodo</p>
          <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-32 opacity-30 grayscale grayscale-100">
             <div className="font-display font-black text-2xl">FERRERO</div>
             <div className="font-display font-black text-2xl">ENEL</div>
             <div className="font-display font-black text-2xl">INTESA SANPAOLO</div>
             <div className="font-display font-black text-2xl">GOOGLE</div>
             <div className="font-display font-black text-2xl">PIRELLI</div>
          </div>
        </div>
      </section>

      {/* Final CTAs */}
      <section className="section-padding bg-brand-blue-soft">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6">Inizia la trasformazione.</h2>
              <p className="text-brand-navy/70 text-lg leading-relaxed">
                Non offriamo soluzioni standard. Ogni progetto corporate parte da un'analisi delle necessità sistemiche del business. Un nostro Partner ti contatterà per approfondire.
              </p>
            </div>
            <div className="bg-brand-navy p-12 rounded-[4rem] text-white shadow-2xl">
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Nome & Cognome" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-accent transition-all font-medium placeholder:text-white/20" />
                <input type="email" placeholder="Email Aziendale" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-accent transition-all font-medium placeholder:text-white/20" />
                <input type="text" placeholder="Azienda" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-accent transition-all font-medium placeholder:text-white/20" />
                <textarea placeholder="Descrivi brevemente la sfida..." rows={3} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-accent transition-all font-medium placeholder:text-white/20"></textarea>
                <button className="btn-primary w-full bg-brand-accent text-white border-brand-accent py-4 font-black uppercase text-xs tracking-widest">Invia Richiesta di Contatto</button>
              </form>
            </div>
        </div>
      </section>
    </div>
  );
}
