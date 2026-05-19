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
import { PageHero } from '../components/PageHero';

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
    <div className="pb-20">
      <PageHero
        title="Eventi &"
        highlight="Open Day"
        subtitle="Scopri il mondo Asterys Lab partecipando ai nostri incontri. Webinar gratuiti, sessioni di orientamento e seminari dal vivo per esplorare la tua prossima evoluzione."
      />

      {/* FEATURED — prossimo evento */}
      <section className="max-w-7xl mx-auto px-6 pt-14">
        <Link to={`/eventi/${eventsData[0].id}`} className="group block">
          <div className="grid lg:grid-cols-2 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition-all bg-white">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px] overflow-hidden">
              <img
                src={eventsData[0].img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={eventsData[0].title}
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-5 left-5 bg-brand-accent text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.18em]">
                Prossimo evento
              </span>
            </div>
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="bg-brand-blue-soft text-brand-navy text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest leading-none self-start mb-5">
                {eventsData[0].category}
              </span>
              <h2 className="font-display font-black text-3xl lg:text-[2.6rem] leading-[1.05] tracking-tight mb-5 group-hover:text-brand-accent transition-colors">
                {eventsData[0].title}
              </h2>
              <p className="text-brand-navy/60 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                {eventsData[0].desc}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-brand-navy/45 mb-8">
                <div className="flex items-center gap-1.5"><Calendar size={15} className="text-brand-accent" /> {eventsData[0].date}</div>
                <div className="flex items-center gap-1.5"><Clock size={15} className="text-brand-accent" /> {eventsData[0].time}</div>
                <div className="flex items-center gap-1.5"><MapPin size={15} className="text-brand-accent" /> {eventsData[0].modality}</div>
              </div>
              <span className="inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] self-start group-hover:bg-brand-accent transition-colors">
                Scopri &amp; iscriviti <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* GRIGLIA — altri appuntamenti */}
      <section className="max-w-7xl mx-auto px-6 pt-12 lg:pt-16">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-10">
          <h2 className="font-display font-bold text-2xl tracking-tight">Tutti gli appuntamenti</h2>
          <p className="text-xs font-black text-brand-navy/30 uppercase tracking-widest">{eventsData.length} eventi in programma</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.slice(1).map((event, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              key={event.id}
              className="group"
            >
              <Link
                to={`/eventi/${event.id}`}
                className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={event.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={event.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <span className="bg-brand-blue-soft text-brand-navy text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest leading-none self-start mb-4">
                    {event.category}
                  </span>
                  <h3 className="font-display font-bold text-xl mb-3 leading-tight group-hover:text-brand-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-brand-navy/55 text-sm leading-relaxed mb-6 line-clamp-2">
                    {event.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-50">
                    <div className="text-xs font-bold text-brand-navy/45 space-y-1">
                      <div className="flex items-center gap-1.5"><Calendar size={13} className="text-brand-accent" /> {event.date}</div>
                      <div className="flex items-center gap-1.5"><Clock size={13} className="text-brand-accent" /> {event.time}</div>
                    </div>
                    <span className="w-11 h-11 rounded-full bg-brand-blue-soft flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all group-hover:rotate-45 shrink-0">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BAND — incontro individuale + info utili */}
      <section className="max-w-7xl mx-auto px-6 pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          <div className="bg-brand-navy text-white p-10 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Zap size={64} /></div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-5 relative z-10">Vuoi un incontro individuale?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 relative z-10 max-w-md">
              Se preferisci un confronto privato e personalizzato, i nostri counselor sono a disposizione per un colloquio orientativo gratuito via Zoom.
            </p>
            <button className="btn-primary bg-white text-brand-navy hover:bg-white/90 px-8 py-4 font-bold rounded-xl relative z-10">Prenota ora</button>
          </div>

          <div className="bg-brand-blue-soft/50 p-10 lg:p-12 rounded-[2.5rem]">
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
        </div>
      </section>
    </div>
  );
}
