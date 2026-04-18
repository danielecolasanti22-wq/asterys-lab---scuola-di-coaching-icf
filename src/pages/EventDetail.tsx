import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Share2, 
  Download,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-white border-b border-gray-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/eventi" className="flex items-center gap-2 text-brand-navy/30 mb-12 hover:text-brand-accent transition-colors text-xs font-black uppercase tracking-widest">
            <ArrowRight size={16} className="rotate-180" /> Tutti gli eventi
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-blue-soft text-brand-navy px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] mb-8 border border-brand-navy/5 uppercase">
                Evento Gratuito
              </div>
              <h1 className="font-display font-bold text-4xl lg:text-6xl mb-8 tracking-tight leading-tight">
                Dettaglio Evento: {id?.split('-').join(' ').toUpperCase()}
              </h1>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-accent"><Calendar size={24} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-brand-navy/30">Data</p>
                    <p className="font-bold text-brand-navy uppercase tracking-tight">15 Maggio 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-accent"><Clock size={24} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-brand-navy/30">Ora</p>
                    <p className="font-bold text-brand-navy uppercase tracking-tight">18:30 - 20:00</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-brand-navy/60 leading-relaxed max-w-xl">
                Un incontro dedicato a chi desidera approfondire il metodo Asterys Lab, conoscere i trainer e porre domande dirette sulla carriera da coach.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/eventdetail/800/1000" className="w-full h-full object-cover" alt="Evento" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="font-display font-bold text-3xl mb-8">Informazioni sull'incontro</h2>
              <div className="prose prose-brand text-brand-navy/70 leading-relaxed">
                <p>Durante questo incontro online scopriremo insieme:</p>
                <ul className="space-y-4 mt-8">
                  <li className="flex gap-3"><CheckCircle2 className="text-brand-accent shrink-0" size={20} /> La struttura del Master APCM e i suoi riconoscimenti.</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-brand-accent shrink-0" size={20} /> Una demo live di coaching sistemico.</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-brand-accent shrink-0" size={20} /> Case studies di successo dei nostri alumni.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <aside className="lg:col-span-4">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 sticky top-32">
              <h3 className="font-display font-bold text-2xl mb-8">Registrati ora</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Nome & Cognome" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 ring-brand-navy/5 font-medium" />
                <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 ring-brand-navy/5 font-medium" />
                <button className="btn-primary w-full py-4 uppercase text-xs font-black tracking-widest mt-4">Riserva il mio posto</button>
              </form>
              <p className="text-[10px] text-gray-400 text-center mt-6">Riceverai il link di accesso Zoom via email.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
