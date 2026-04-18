import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Clock, 
  Users, 
  Zap,
  ChevronRight,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const eventsData = [
  {
    id: 'open-day-master-apcm',
    title: "Open Day Online: Master APCM",
    date: "15 Maggio 2026",
    time: "18:30 - 20:00",
    modality: "Online (Zoom)",
    category: "Orientamento",
    desc: "Incontra i docenti, scopri il metodo sistemico e ricevi tutte le informazioni sul Master per diventare coach professionista.",
    img: "https://picsum.photos/seed/event1/800/600"
  },
  {
    id: 'webinar-cominciare-coaching',
    title: "Webinar: Come diventare coach nel 2026",
    date: "22 Maggio 2026",
    time: "14:00 - 15:30",
    modality: "Webinar Gratuito",
    category: "Webinar",
    desc: "Una panoramica sul mercato del coaching in Italia, le credenziali ICF e i primi passi per avviare la professione.",
    img: "https://picsum.photos/seed/event2/800/600"
  },
  {
    id: 'serata-orientamento-roma',
    title: "Serata di Orientamento: Coaching & Leadership",
    date: "5 Giugno 2026",
    time: "19:00 - 21:00",
    modality: "Presenza (Roma)",
    category: "Orientamento",
    desc: "Un incontro esperienziale nella nostra sede di Roma dedicato a Manager e HR che vogliono scoprire il coaching.",
    img: "https://picsum.photos/seed/event3/800/600"
  },
  {
    id: 'hr-summit-systemic',
    title: "HR Executive Summit: Systemic Team Coaching",
    date: "12 Giugno 2026",
    time: "09:30 - 13:00",
    modality: "Presenza (Milano)",
    category: "Per Aziende",
    desc: "Evento esclusivo per decision maker: come il team coaching sistemico accelera i risultati aziendali.",
    img: "https://picsum.photos/seed/event4/800/600"
  }
];

export default function Events() {
  return (
    <div className="pt-32 pb-20">
      <section className="bg-brand-navy text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-brand-accent rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl lg:text-7xl mb-8 tracking-tight">Eventi & Open Day.</h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Scopri il mondo Asterys Lab partecipando ai nostri incontri. Webinar gratuiti, webinar di orientamento e seminari dal vivo per esplorare la tua prossima evoluzione.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h2 className="font-display font-bold text-2xl tracking-tight">Prossimi Appuntamenti</h2>
              <p className="text-xs font-black text-brand-navy/30 uppercase tracking-widest">{eventsData.length} Eventi programmati</p>
            </div>

            {eventsData.map((event, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={event.id} 
                className="bg-white rounded-[2rem] p-8 flex flex-col md:flex-row gap-8 shadow-soft hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shrink-0">
                  <img src={event.img} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={event.title} referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-brand-blue-soft text-brand-navy text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest leading-none">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-brand-accent transition-colors leading-tight">{event.title}</h3>
                    <p className="text-brand-navy/60 text-sm leading-relaxed mb-6 line-clamp-2">
                      {event.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-brand-navy/40 pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-1.5"><Calendar size={14} className="text-brand-accent" /> {event.date}</div>
                    <div className="flex items-center gap-1.5"><Clock size={14} className="text-brand-accent" /> {event.time}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={14} className="text-brand-accent" /> {event.modality}</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Link to={`/eventi/${event.id}`} className="w-14 h-14 rounded-full bg-brand-blue-soft flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all transform group-hover:rotate-45">
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-10">
            <div className="bg-brand-navy text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><Zap size={48} /></div>
              <h3 className="font-display font-bold text-2xl mb-6 relative z-10">Vuoi un incontro individuale?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 relative z-10">
                Se preferisci un confronto privato e personalizzato, i nostri counselor sono a disposizione per un colloquio orientativo gratuito via Zoom.
              </p>
              <button className="w-full btn-primary bg-white text-brand-navy hover:bg-white/90 py-4 font-bold rounded-xl relative z-10">Prenota ora</button>
            </div>

            <div className="bg-brand-blue-soft/50 p-10 rounded-[2rem]">
              <div className="flex items-center gap-3 mb-6">
                <Info className="text-brand-accent" size={24} />
                <h3 className="font-display font-bold text-xl">Info utili</h3>
              </div>
              <ul className="space-y-4">
               {[
                 "Tutti i webinar online vengono registrati.",
                 "Gli open day in sede hanno posti limitati.",
                 "Riceverai il link Zoom 2h prima.",
                 "Possibilità di colloquio post-evento."
               ].map((item, i) => (
                 <li key={i} className="flex gap-2 text-xs font-medium text-brand-navy/60 leading-relaxed">
                   <ChevronRight size={14} className="text-brand-accent shrink-0 mt-0.5" />
                   {item}
                 </li>
               ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
