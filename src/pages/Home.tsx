import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  GraduationCap,
  Sparkles,
  Clock,
  MessageCircle,
  PlayCircle,
  Users,
  Target
} from 'lucide-react';
import { coursesContent } from '../constants/coursesContent';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

/* 1. HERO */
const Hero = () => (
  <section className="relative bg-[#F2F7FF] overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-end min-h-[560px]">
      <div className="pt-16 lg:pt-20 pb-12 lg:pb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-6">
          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
          La 1ª scuola di coaching accreditata ICF
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-[5.25rem] font-display font-black leading-[0.95] tracking-tighter mb-7 text-brand-navy">
          Sblocca il tuo{' '}
          <span className="relative inline-block">
            <span className="relative z-10">talento nel coaching</span>
            <span className="absolute inset-x-[-0.1em] bottom-[0.08em] h-[0.35em] bg-[#E2FF3B] -z-0 rounded-sm" />
          </span>
        </h1>
        <p className="text-base lg:text-lg text-brand-navy/80 mb-8 max-w-[520px] leading-relaxed">
          Non inseguire il futuro: costruiscilo. Diventa coach professionista accreditato ICF con un metodo d'eccellenza che integra intelligenza emotiva misurabile e approccio sistemico.
        </p>
        <ul className="space-y-3 mb-10 text-sm lg:text-[15px] font-medium text-brand-navy">
          {[
            'Impara da chi porta il coaching ICF in Italia dal 2001',
            'Trasforma la teoria in pratica supervisionata',
            'Studia con un metodo didattico sistemico e misurabile'
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="text-brand-accent font-black mt-0.5">→</span>
              {b}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`https://picsum.photos/seed/face${i}/100/100`}
                className="w-9 h-9 rounded-full border-2 border-[#F2F7FF] object-cover"
                alt=""
              />
            ))}
          </div>
          <p className="text-[12px] text-brand-navy">
            <span className="font-black">+3.000 coach</span> già formati
          </p>
        </div>
      </div>

      <div className="relative self-end h-full flex items-end justify-center lg:justify-end">
        <div className="w-full lg:w-[135%] lg:-mr-[15%] h-auto relative flex items-end">
          <img
            src="/course-media/apcm/hero.png"
            alt="Coach Asterys"
            className="w-full h-auto object-contain lg:origin-bottom-right"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

/* 2. ACCREDITAMENTI ICF */
const Accreditamenti = () => {
  const items = [
    { label: 'ICF', size: 'text-lg' },
    { label: 'ACC', size: 'text-base' },
    { label: 'PCC', size: 'text-base' },
    { label: 'CCE', size: 'text-base' },
    { label: 'ACTC', size: 'text-base' }
  ];
  return (
    <section className="bg-[#F2F7FF] border-t border-brand-navy/5">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-5 opacity-70">
        {items.map((i) => (
          <div
            key={i.label}
            className="flex items-center gap-2 text-brand-navy/80 grayscale hover:grayscale-0 transition-all"
          >
            <Award size={22} strokeWidth={2} />
            <span className={`font-black tracking-[0.2em] ${i.size}`}>{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

/* 3. SCEGLI IL PERCORSO */
const ScegliPercorso = () => {
  const features = [
    { icon: Users, title: 'Tutoring costante e dedicato' },
    { icon: Target, title: 'Supporto alla carriera incluso' },
    { icon: Award, title: 'Certificazione ICF delle skill acquisite' }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className={`${tSection} mb-4`}>Scegli il percorso giusto per te</h2>
          <p className="text-brand-navy/70 text-base leading-relaxed">
            Master professionalizzanti 100% blended, completi e in diretta per imparare da zero tutto ciò di cui hai bisogno per evolvere la tua carriera.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center gap-3 p-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-soft flex items-center justify-center">
                <f.icon className="text-brand-accent" size={22} strokeWidth={2} />
              </div>
              <p className="text-sm font-black text-brand-navy tracking-tight leading-snug">
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 4. MASTER FEATURED (APCM) */
const MasterFeatured = () => (
  <section className="bg-white pb-5">
    <div className="max-w-[1200px] mx-auto px-6">
      <Link to="/corsi/apcm" className="block group">
        <div className="grid sm:grid-cols-[1.15fr_1fr] rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[0_18px_60px_-34px_rgba(0,21,51,0.22)] hover:shadow-[0_24px_72px_-30px_rgba(0,21,51,0.32)] transition-shadow">
          <div className="relative aspect-[5/3] sm:aspect-auto bg-gray-100 min-h-[260px]">
            <img
              src="https://picsum.photos/seed/apcm-master/900/600"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
              alt=""
            />
            <span className="absolute top-4 left-4 bg-[#001D4B] text-[#E2FF3B] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.22em]">
              Master Full-Time
            </span>
          </div>
          <div className="p-8 lg:p-10 flex flex-col gap-4 justify-center">
            <div className="flex items-center gap-4 text-[11px] text-brand-navy/60 font-bold uppercase tracking-wide">
              <span className="flex items-center gap-1.5">
                <Clock size={12} /> 150 ore
              </span>
              <span>·</span>
              <span>In diretta</span>
            </div>
            <h3 className="text-2xl lg:text-[1.75rem] font-display font-black text-brand-navy leading-tight">
              Professione Coach <span className="text-brand-accent">(APCM)</span>
            </h3>
            <p className="text-sm text-brand-navy/75 leading-relaxed">
              Lancia una nuova carriera da zero con supporto costante e una full immersion nelle competenze di coaching ICF Level 1 & 2.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-3 mt-1">
              <span className="bg-[#E2FF3B] text-brand-navy text-[10px] font-black uppercase tracking-[0.18em] px-3 py-1.5 rounded-md">
                Garanzia di rimborso se non trovi lavoro
              </span>
              <span className="text-brand-navy font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-1 group-hover:gap-2 transition-all">
                Scopri <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </section>
);

/* 5. MASTER GRID */
const MasterGrid = () => {
  const masters = [
    {
      id: 'systemic-team-coaching',
      label: 'Master Part-Time',
      title: 'Systemic Team Coaching',
      duration: '60 ore',
      start: '21 Maggio',
      seed: 'stc'
    },
    {
      id: 'eiw',
      label: 'Master Part-Time',
      title: 'Intelligenza Emotiva',
      duration: '24 ore',
      start: '20 Maggio',
      seed: 'eiw'
    },
    {
      id: 'prosperous-coach',
      label: 'Master Part-Time',
      title: 'Prosperous Coach',
      duration: '3 mesi',
      start: '15 Maggio',
      seed: 'prosperous'
    },
    {
      id: 'hr-manager-coaching',
      label: 'Master Part-Time',
      title: 'Coaching per HR & Manager',
      duration: '45 ore',
      start: '28 Maggio',
      seed: 'hr'
    },
    {
      id: 'mentor-coaching',
      label: 'Master Part-Time',
      title: 'Mentor Coaching',
      duration: '30 ore',
      start: '10 Giugno',
      seed: 'mentor'
    }
  ];
  return (
    <section className="bg-white pt-3 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {masters.map((m) => (
            <Link
              key={m.id}
              to={`/corsi/${m.id}`}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_12px_40px_-28px_rgba(0,21,51,0.18)] hover:shadow-[0_18px_55px_-28px_rgba(0,21,51,0.3)] transition-shadow flex flex-col"
            >
              <div className="aspect-[4/3] relative bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${m.seed}/600/450`}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt=""
                />
                <span className="absolute top-3 left-3 bg-[#001D4B] text-[#E2FF3B] px-2.5 py-1 rounded text-[9px] font-black uppercase tracking-[0.2em]">
                  {m.label}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 text-[10px] text-brand-navy/60 font-bold uppercase tracking-wide">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {m.duration}
                  </span>
                  <span>·</span>
                  <span>In diretta</span>
                </div>
                <h3 className="text-lg font-display font-black text-brand-navy leading-tight">
                  {m.title}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 text-[10px] font-bold uppercase tracking-[0.18em]">
                  <span className="text-brand-navy/60">
                    Prossima: <span className="text-brand-navy">{m.start}</span>
                  </span>
                  <span className="text-brand-navy flex items-center gap-1 group-hover:gap-2 transition-all">
                    Scopri <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <Link
            to="/corsi"
            className="rounded-3xl overflow-hidden bg-[linear-gradient(135deg,#1D3BB9_0%,#0047FF_100%)] p-7 flex flex-col justify-center text-white relative group"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#E2FF3B] mb-3">
              Nuove competenze in poche settimane
            </p>
            <h3 className="text-xl lg:text-2xl font-display font-black leading-tight mb-3">
              Cerchi un corso breve?
            </h3>
            <p className="text-sm text-white/80 mb-5 leading-relaxed">
              Scopri i corsi brevi, pratici, in diretta con chi ti può guidare passo dopo passo.
            </p>
            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#E2FF3B] group-hover:gap-3 transition-all">
              Scopri <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* 6. ADVISOR BAND */
const AdvisorBand = () => (
  <section className="py-12 lg:py-14 bg-[#D5DCFB]">
    <div className="max-w-[1200px] mx-auto px-6 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
        <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-navy tracking-tight">
          Vuoi parlare con noi?
        </h2>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/advisor${i}/80/80`}
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
              alt=""
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-brand-navy/75 mb-5">
        I nostri advisor risponderanno a tutte le tue domande.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#contatti"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.22em] shadow-md hover:brightness-110 transition-all"
        >
          <MessageCircle size={16} /> Scrivici
        </a>
        <span className="text-xs text-brand-navy/70">
          Oppure chiamaci al{' '}
          <a href="tel:+390255555855" className="font-black text-brand-navy underline">
            +39 02 5555 855
          </a>
        </span>
      </div>
    </div>
  </section>
);

/* 7. TESTIMONIANZE */
const Testimonianze = () => {
  const tms = [
    {
      name: 'Marco Rossetti',
      role: 'PCC Coach & Executive',
      text: "In Asterys Lab non ho imparato solo a fare coaching: ho imparato a guardare ai sistemi e all'intelligenza emotiva come leve di business."
    },
    {
      name: 'Sara Lombardi',
      role: 'HR Director',
      text: 'Il Master APCM ha cambiato il mio modo di gestire le persone. Una formazione intensa, seria e profondamente umana.'
    },
    {
      name: 'Giorgio Bianchi',
      role: 'Full-time Coach',
      text: 'Grazie a Prosperous Coach sono passato da dipendente a libero professionista in meno di 6 mesi. La community è formidabile.'
    },
    {
      name: 'Elena Monti',
      role: 'Team Coach aziendale',
      text: 'Il Master in Team Coaching Sistemico mi ha dato strumenti concreti per affrontare dinamiche di gruppo complesse.'
    }
  ];
  const [idx, setIdx] = useState(0);
  const t = tms[idx];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className={`${tSection} mb-4`}>Cosa dicono i nostri studenti</h2>
            <p className="text-sm text-brand-navy/70 leading-relaxed">
              Oltre 3.000 studenti ci hanno già scelto: nessuno meglio di loro ti può raccontare perché Asterys è il percorso giusto per far evolvere la tua carriera.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Prev"
              onClick={() => setIdx((idx - 1 + tms.length) % tms.length)}
              className="w-11 h-11 rounded-full border border-brand-navy/15 flex items-center justify-center text-brand-navy hover:bg-brand-blue-soft transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next"
              onClick={() => setIdx((idx + 1) % tms.length)}
              className="w-11 h-11 rounded-full border border-brand-navy/15 flex items-center justify-center text-brand-navy hover:bg-brand-blue-soft transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-[#F4F6FB] rounded-3xl p-10 lg:p-14"
          >
            <div className="flex gap-1 text-brand-accent mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-xl lg:text-2xl font-display font-black text-brand-navy leading-snug mb-8 max-w-3xl">
              "{t.text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={`https://picsum.photos/seed/${t.name.split(' ').join('-')}/100/100`}
                className="w-12 h-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
                alt={t.name}
              />
              <div>
                <p className="font-black text-sm text-brand-navy">{t.name}</p>
                <p className="text-xs text-brand-navy/60">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

/* 8. PERCHÉ SCEGLIERE NOI */
const PercheNoi = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Metodo pratico e aggiornato',
      desc: 'Ogni percorso è costruito su casi reali: eserciti le competenze su situazioni concrete per arrivare preparato al primo cliente.'
    },
    {
      icon: PlayCircle,
      title: 'Lezioni in diretta e interattive',
      desc: 'Niente corsi pre-registrati. Fai parte di una classe: interagisci con i docenti, chiedi feedback, metti in pratica subito.'
    },
    {
      icon: Users,
      title: 'Docenti certificati ICF',
      desc: 'I tuoi trainer sono Master Coach attivi sul campo: condividono conoscenze pratiche e il loro modo di lavorare.'
    },
    {
      icon: GraduationCap,
      title: 'Alta formazione accessibile',
      desc: 'Scegli come investire: rateizzazione fino a 24 mesi e piani pensati per chi vuole crescere senza compromessi.'
    }
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className={`${tSection} mb-12 max-w-2xl`}>Perché scegliere i nostri percorsi?</h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-brand-blue-soft flex items-center justify-center">
                <r.icon className="text-brand-accent" size={19} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-black text-brand-navy mb-2">{r.title}</h3>
                <p className="text-sm text-brand-navy/70 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 9. STATS BAND MINT */
const StatsBand = () => (
  <section className="bg-[#C4F4DB]">
    <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-x-16 gap-y-2 text-center">
      <p className="text-sm lg:text-base font-display font-black text-brand-navy tracking-[0.08em] uppercase">
        +40 coach trainer certificati
      </p>
      <span className="hidden sm:block w-1 h-1 rounded-full bg-brand-navy/30" />
      <p className="text-sm lg:text-base font-display font-black text-brand-navy tracking-[0.08em] uppercase">
        +3.000 studenti hanno cambiato carriera
      </p>
    </div>
  </section>
);

/* 10. PROVA ASTERYS, GRATIS */
const ProvaGratis = () => {
  const items = [
    {
      tag: 'Masterclass aperta',
      title: 'Introduzione al Coaching',
      desc: '2 ore di lezione live per capire cosa significa diventare coach professionista ICF.',
      seed: 'masterclass-intro'
    },
    {
      tag: 'Webinar gratuito',
      title: 'Intelligenza Emotiva misurabile',
      desc: "Scopri come l'IE misurata con Six Seconds trasforma la tua leadership.",
      seed: 'webinar-ei'
    },
    {
      tag: 'Workshop demo',
      title: 'Team Coaching Sistemico',
      desc: 'Un assaggio pratico delle dinamiche di team coaching avanzate.',
      seed: 'workshop-team'
    },
    {
      tag: 'Sessione live',
      title: 'Prosperous Coach Q&A',
      desc: 'Parla con un advisor e scopri come costruire un business di coaching sostenibile.',
      seed: 'live-pro'
    }
  ];
  return (
    <section className="py-20 bg-[#C4F4DB]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className={`${tSection} mb-4`}>Prova Asterys, gratis</h2>
          <p className="text-sm text-brand-navy/80 leading-relaxed">
            Con le <strong>Masterclass introduttive</strong> puoi iniziare subito, seguendo lezioni live on-demand tenute direttamente dai nostri coach. Un modo concreto per capire il nostro metodo didattico prima di scegliere il tuo percorso.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 mt-5 text-[11px] text-brand-navy/70 font-bold uppercase tracking-wide">
            <span>· Scopri il metodo Asterys</span>
            <span>· Segui le lezioni quando vuoi</span>
            <span>· Parti da zero e fai pratica</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((i) => (
            <div
              key={i.title}
              className="bg-[#1D3BB9] rounded-3xl overflow-hidden grid grid-cols-[1.1fr_1fr]"
            >
              <div className="p-7 text-white flex flex-col justify-center gap-3">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#E2FF3B]">
                  {i.tag}
                </p>
                <h3 className="text-lg lg:text-xl font-display font-black leading-tight">
                  {i.title}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed">{i.desc}</p>
                <button className="mt-2 self-start inline-flex items-center gap-2 bg-[#E2FF3B] text-brand-navy px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-[0.22em] hover:bg-white transition-colors">
                  Inizia gratis
                </button>
              </div>
              <div className="bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${i.seed}/500/450`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* 11. COSA STAI ASPETTANDO */
const CorsiCta = () => {
  const ids = Object.keys(coursesContent);
  return (
    <section className="py-24 bg-[#F4F6FB]">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          <h2 className={`${tSection} mb-4`}>
            Cosa stai <br />
            aspettando?
          </h2>
          <p className="text-sm text-brand-navy/70">Scegli il tuo percorso.</p>
        </div>
        <ul className="space-y-3">
          {ids.map((id) => {
            const c = coursesContent[id];
            return (
              <li key={id}>
                <Link
                  to={`/corsi/${id}`}
                  className="flex items-center justify-between gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div>
                    <p className="text-sm font-black text-brand-navy leading-tight">
                      {c.subtitle}
                    </p>
                    <p className="text-[11px] text-brand-navy/60 mt-1">{c.type}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-brand-navy/40 group-hover:text-brand-navy group-hover:translate-x-1 transition-all"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Accreditamenti />
      <ScegliPercorso />
      <MasterFeatured />
      <MasterGrid />
      <AdvisorBand />
      <Testimonianze />
      <PercheNoi />
      <StatsBand />
      <ProvaGratis />
      <CorsiCta />
    </>
  );
}
