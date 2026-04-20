import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Users,
  Sparkles,
  BookOpen,
  Download,
  Mail,
  Newspaper,
} from 'lucide-react';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

const pillars = [
  {
    icon: <HeartHandshake size={22} />,
    title: 'Persone al centro',
    body:
      'Crediamo che il cambiamento sostenibile parta dalla relazione: prima di qualsiasi tecnica, viene la qualità dell\'incontro tra coach e cliente.',
  },
  {
    icon: <Compass size={22} />,
    title: 'Metodo evidence-based',
    body:
      'Uniamo intelligenza emotiva misurabile, approccio sistemico e standard ICF: un metodo collaudato su migliaia di professionisti.',
  },
  {
    icon: <Users size={22} />,
    title: 'Apprendimento in community',
    body:
      'Si impara dentro una comunità viva: trainer certificati, compagni di classe, alumni in tutto il mondo e pratica supervisionata.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Alta formazione accessibile',
    body:
      'Formazione di livello internazionale, con format pensati per chi lavora: lezioni live, rate agevolate e percorsi modulari.',
  },
];

const values = [
  { label: 'Rigore', body: 'Standard ICF, supervisione, valutazione continua.' },
  { label: 'Umanità', body: 'La relazione prima della performance.' },
  { label: 'Impatto', body: 'Strumenti concreti, misurabili, replicabili.' },
  { label: 'Comunità', body: 'Alumni, trainer e advisor a supporto del percorso.' },
];

const pressLogos = [
  'Corriere della Sera',
  'Il Sole 24 Ore',
  'HBR Italia',
  'La Repubblica',
  'Forbes',
  'Wired',
];

const pressItems = [
  {
    outlet: 'Il Sole 24 Ore',
    date: 'Marzo 2026',
    title: 'Coaching, la formazione che cambia la leadership italiana',
    excerpt:
      'Intervista a Giovanna Giuffredi sul ruolo della formazione continua e dell\'intelligenza emotiva nelle aziende che crescono.',
  },
  {
    outlet: 'HBR Italia',
    date: 'Gennaio 2026',
    title: 'Dal manager al coach: perché sempre più leader scelgono il coaching',
    excerpt:
      'Il nuovo ruolo del leader come facilitatore di talento: strumenti, metodo e limiti del coaching dentro le organizzazioni.',
  },
  {
    outlet: 'Forbes',
    date: 'Ottobre 2025',
    title: 'Asterys Lab, la scuola italiana che forma coach nel mondo',
    excerpt:
      'Un focus sulla prima Coaching School ICF accreditata in Italia e sulla sua rete di alumni in tutta Europa.',
  },
];

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => {
        (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [hash]);

  return (
    <div className="bg-white text-brand-navy">
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-blue-soft/60">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
              About · Asterys Lab
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tighter leading-[1.02]">
              La nostra{' '}
              <span className="relative inline-block">
                <span className="relative z-10">filosofia</span>
                <span className="absolute inset-x-[-0.1em] bottom-[0.08em] h-[0.35em] bg-[#E2FF3B] -z-0 rounded-sm" />
              </span>{' '}
              del coaching.
            </h1>
            <p className="mt-6 text-lg text-brand-navy/75 font-medium max-w-[560px] leading-relaxed">
              Siamo la prima Coaching School ICF accreditata in Italia. Da più di vent'anni formiamo
              coach, manager e HR a stare davvero dentro le relazioni, con rigore e umanità.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#filosofia"
                className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.18em] hover:bg-brand-accent transition-colors"
              >
                Scopri la filosofia
                <ArrowRight size={14} />
              </a>
              <Link
                to="/iscriviti"
                className="inline-flex items-center gap-2 text-brand-navy text-xs font-black uppercase tracking-[0.18em] border-b-2 border-brand-navy/15 hover:border-brand-accent hover:text-brand-accent transition-colors pb-1"
              >
                Candidati al Master
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-white/80">
              <p className="text-4xl font-display font-black tracking-tight text-brand-navy">20+</p>
              <p className="text-xs font-bold text-brand-navy/60 mt-1 leading-tight">anni di ricerca e pratica sul coaching</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-white/80">
              <p className="text-4xl font-display font-black tracking-tight text-brand-navy">3.000+</p>
              <p className="text-xs font-bold text-brand-navy/60 mt-1 leading-tight">coach formati in Italia e nel mondo</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-white/80">
              <p className="text-4xl font-display font-black tracking-tight text-brand-navy">ICF</p>
              <p className="text-xs font-bold text-brand-navy/60 mt-1 leading-tight">Level 1 · Level 2 · CCE · ACTC · Mentor</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-white/80">
              <p className="text-4xl font-display font-black tracking-tight text-brand-navy">+40</p>
              <p className="text-xs font-bold text-brand-navy/60 mt-1 leading-tight">trainer e supervisor certificati</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="scroll-mt-28">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
                Filosofia
              </span>
              <h2 className={`${tSection} mt-3`}>
                Il coaching come atto di{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">responsabilità</span>
                  <span className="absolute inset-x-[-0.08em] bottom-[0.06em] h-[0.3em] bg-[#E2FF3B] -z-0 rounded-sm" />
                </span>.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-brand-navy/80 font-medium leading-relaxed">
              <p>
                Per noi il coaching non è una moda né una tecnica: è una <strong>scelta di metodo</strong>
                {' '}e di <strong>postura</strong>. Significa scegliere di stare con le persone senza sostituirsi
                a loro, aiutandole a trovare risorse, direzione e voce.
              </p>
              <p>
                Da oltre vent'anni portiamo in aula ricerca internazionale, standard ICF,
                intelligenza emotiva misurabile e lettura sistemica. Ma partiamo sempre dalla domanda
                più difficile: <em>chi vogliamo essere, quando siamo accanto a un'altra persona?</em>
              </p>
              <p>
                È da questa domanda che è nato Asterys Lab. Ed è per questa domanda che continuiamo,
                edizione dopo edizione, a formare coach, manager e HR che vogliono fare la differenza —
                davvero, con rigore e con cuore.
              </p>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-11 h-11 rounded-xl bg-white text-brand-accent flex items-center justify-center border border-gray-100">
                  {p.icon}
                </div>
                <h3 className="mt-5 text-xl font-display font-black tracking-tight text-brand-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-brand-navy/70 font-medium leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORI / MANIFESTO */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E2FF3B]">
                Il manifesto
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter leading-[1.05]">
                Quattro parole che guidano ogni aula.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.label} className="border-t border-white/15 pt-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E2FF3B]">
                    {v.label}
                  </p>
                  <p className="mt-2 text-lg font-display font-black tracking-tight leading-tight">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section id="press" className="scroll-mt-28">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
                Press
              </span>
              <h2 className={`${tSection} mt-3`}>Hanno parlato di noi.</h2>
              <p className="mt-4 text-base text-brand-navy/70 font-medium max-w-[560px]">
                Ricerche, interviste e racconti sulla nostra scuola, sulla community di coach e
                sull'impatto del coaching nelle organizzazioni italiane.
              </p>
            </div>
            <a
              href="mailto:press@asteryslab.com"
              className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.18em] hover:bg-brand-accent transition-colors self-start"
            >
              <Mail size={14} />
              Contatta l'ufficio stampa
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4 py-6 border-y border-gray-100 mb-10">
            {pressLogos.map((l) => (
              <span
                key={l}
                className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-navy/40"
              >
                {l}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {pressItems.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-accent/40 hover:shadow-[0_20px_60px_-30px_rgba(29,59,185,0.3)] transition-all"
              >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">
                  <Newspaper size={12} />
                  {item.outlet}
                </div>
                <p className="mt-1 text-[10px] font-bold text-brand-navy/50 uppercase tracking-[0.18em]">
                  {item.date}
                </p>
                <h3 className="mt-4 text-lg font-display font-black tracking-tight text-brand-navy leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-brand-navy/70 font-medium leading-relaxed">
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center justify-between gap-4 bg-gray-50 hover:bg-brand-blue-soft/60 transition-colors rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-accent border border-gray-100">
                  <Download size={18} />
                </div>
                <div>
                  <p className="text-sm font-black text-brand-navy tracking-tight">Press kit Asterys Lab</p>
                  <p className="text-xs font-bold text-brand-navy/60">Logo, brand assets, bio fondatori</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-brand-navy/40" />
            </a>
            <a
              href="#"
              className="flex items-center justify-between gap-4 bg-gray-50 hover:bg-brand-blue-soft/60 transition-colors rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-brand-accent border border-gray-100">
                  <BookOpen size={18} />
                </div>
                <div>
                  <p className="text-sm font-black text-brand-navy tracking-tight">Rassegna completa</p>
                  <p className="text-xs font-bold text-brand-navy/60">Tutte le uscite su stampa e media</p>
                </div>
              </div>
              <ArrowRight size={16} className="text-brand-navy/40" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
