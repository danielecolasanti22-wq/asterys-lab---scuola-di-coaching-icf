import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Ticket,
} from 'lucide-react';
import { eventsBySlug } from '../constants/events';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = id ? eventsBySlug[id] : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  if (!event) {
    return (
      <div className="pt-24 pb-32 min-h-screen text-center px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mb-4">
          Evento non trovato
        </p>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mb-6 tracking-tight">
          Questo evento non esiste o è già passato
        </h1>
        <Link
          to="/eventi"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-accent hover:underline"
        >
          <ArrowLeft size={16} /> Tutti gli eventi
        </Link>
      </div>
    );
  }

  const meta = [
    { icon: Calendar, label: event.date },
    { icon: Clock, label: event.time },
    { icon: MapPin, label: event.location },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-brand-hero">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-10 lg:py-14">
          <Link
            to="/eventi"
            className="inline-flex items-center gap-2 text-brand-navy/60 hover:text-brand-accent transition-colors text-[11px] font-black uppercase tracking-[0.18em]"
          >
            <ArrowLeft size={15} /> Tutti gli eventi
          </Link>

          <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-white text-brand-navy px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.18em]">
                  {event.category}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-brand-navy text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.18em]">
                  <Ticket size={12} /> {event.price}
                </span>
              </div>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[3rem] font-display font-black tracking-tighter leading-[1.04] text-brand-navy">
                {event.title}
              </h1>
              <p className="mt-5 text-base lg:text-lg text-brand-navy/70 font-medium leading-relaxed max-w-xl">
                {event.desc}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                    <m.icon size={16} className="text-brand-accent shrink-0" />
                    {m.label}
                  </div>
                ))}
              </div>
              <a
                href="#registrati"
                className="mt-8 inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.18em] hover:bg-brand-accent transition-colors"
              >
                Riserva il posto <ArrowRight size={15} />
              </a>
            </div>

            <div className="relative">
              <div className="rounded-[1.75rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,21,51,0.5)] aspect-[4/3]">
                <img
                  src={event.img}
                  className="w-full h-full object-cover"
                  alt={event.title}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + REGISTRATION */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 py-14 lg:py-20 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-brand-navy mb-6">
            Di cosa parleremo
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-brand-navy/75 leading-relaxed">
            {event.long.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-12 text-lg font-display font-black uppercase tracking-[0.16em] text-brand-navy">
            Durante l'incontro
          </h3>
          <ul className="mt-6 space-y-4">
            {event.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-base text-brand-navy/80 leading-relaxed">
                <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside id="registrati" className="lg:col-span-5 scroll-mt-28">
          <div className="lg:sticky lg:top-28 bg-white border border-gray-100 rounded-[2rem] shadow-[0_24px_70px_-40px_rgba(0,21,51,0.35)] p-8 lg:p-10">
            <span className="text-[10px] font-black uppercase tracking-[0.26em] text-brand-accent">
              Partecipazione · {event.price}
            </span>
            <h3 className="mt-3 text-2xl font-display font-black tracking-tight text-brand-navy">
              Registrati ora
            </h3>
            <p className="mt-2 text-sm text-brand-navy/60 leading-relaxed">
              {event.date} · {event.time} — {event.location}
            </p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nome e cognome"
                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-brand-accent transition-colors font-medium text-sm"
              />
              <input
                type="email"
                placeholder="La tua email"
                className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 outline-none focus:border-brand-accent transition-colors font-medium text-sm"
              />
              <button
                type="submit"
                className="btn-primary w-full py-4 uppercase text-xs font-black tracking-widest"
              >
                Riserva il mio posto
              </button>
            </form>
            <p className="mt-4 text-[11px] text-brand-navy/45 text-center leading-relaxed">
              Riceverai via email la conferma e le istruzioni per partecipare.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
