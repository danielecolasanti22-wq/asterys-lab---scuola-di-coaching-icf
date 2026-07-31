import { 
  Calendar, 
  MapPin, 
  ArrowRight,
  Clock,
  ChevronRight,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { eventsData } from '../constants/events';

export default function Events() {
  return (
    <div className="pb-20">
      <PageHero
        title="Eventi &"
        highlight="Open Day"
        subtitle="Vivi il metodo dal vivo prima di scegliere. Webinar gratuiti, sessioni di orientamento e incontri in presenza per capire se il coaching fa per te e fare il primo passo senza impegno."
      />

      {/* FEATURED — prossimo evento */}
      <section className="max-w-[var(--wrap-max)] mx-auto px-6 pt-14">
        <Link to={`/eventi/${eventsData[0].id}`} className="group block">
          <div className="grid lg:grid-cols-[1fr_1.15fr] rounded-[2rem] overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition-all bg-white">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[260px] overflow-hidden">
              <img
                src={eventsData[0].img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={eventsData[0].title}
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-4 left-4 bg-brand-accent text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-[0.18em]">
                Prossimo evento
              </span>
            </div>
            <div className="p-6 sm:p-7 lg:p-9 flex flex-col justify-center">
              <span className="bg-brand-blue-soft text-brand-navy text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest leading-none self-start mb-3">
                {eventsData[0].category}
              </span>
              <h2 className="font-display font-black text-xl sm:text-2xl lg:text-[1.9rem] leading-[1.1] tracking-tight mb-3 group-hover:text-brand-accent transition-colors">
                {eventsData[0].title}
              </h2>
              <p className="text-brand-navy/60 text-sm leading-relaxed mb-5 max-w-md line-clamp-2">
                {eventsData[0].desc}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold text-brand-navy/45 mb-6">
                <div className="flex items-center gap-1.5"><Calendar size={14} className="text-brand-accent" /> {eventsData[0].date}</div>
                <div className="flex items-center gap-1.5"><Clock size={14} className="text-brand-accent" /> {eventsData[0].time}</div>
                <div className="flex items-center gap-1.5"><MapPin size={14} className="text-brand-accent" /> {eventsData[0].modality}</div>
              </div>
              <span className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] self-start group-hover:bg-brand-accent transition-colors">
                Prenota il tuo posto <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* GRIGLIA — altri appuntamenti */}
      <section className="max-w-[var(--wrap-max)] mx-auto px-6 pt-12 lg:pt-16">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-10">
          <h2 className="font-display font-bold text-2xl tracking-tight">Scegli il tuo prossimo passo</h2>
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
      <section className="max-w-[var(--wrap-max)] mx-auto px-6 pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          <div className="bg-brand-navy text-white p-10 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <h3 className="font-display font-bold text-2xl lg:text-3xl mb-5 relative z-10">Preferisci parlarne a tu per tu?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 relative z-10 max-w-md">
              Prenota un colloquio orientativo gratuito via Zoom: ricevi risposte sul tuo caso specifico e capisci quale percorso ti porta davvero dove vuoi arrivare.
            </p>
            <button className="btn-primary bg-white text-brand-navy hover:bg-white/90 px-8 py-4 font-bold rounded-xl relative z-10">Prenota la tua call gratuita</button>
          </div>

          <div className="bg-brand-blue-soft/50 p-10 lg:p-12 rounded-[2.5rem]">
            <div className="flex items-center gap-3 mb-6">
              <Info className="text-brand-accent" size={24} />
              <h3 className="font-display font-bold text-xl">Info utili</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Rivedi con calma ogni webinar: li registriamo tutti per te.",
                "Assicurati il posto in anticipo: gli open day in sede sono a numero chiuso.",
                "Ti basta un clic: ricevi il link Zoom 2h prima dell’incontro.",
                "Vuoi approfondire? Prenoti un colloquio dedicato dopo l’evento."
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
