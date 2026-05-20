import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Compass,
  HeartHandshake,
  Users,
  Sparkles,
  Newspaper,
} from 'lucide-react';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

const pillars = [
  {
    icon: <HeartHandshake size={22} />,
    title: 'Persone al centro',
    body:
      'Il cambiamento sostenibile parte dalla relazione: prima di qualsiasi tecnica viene la qualità dell\'incontro tra coach e cliente.',
  },
  {
    icon: <Compass size={22} />,
    title: 'Metodo evidence-based',
    body:
      'Intelligenza emotiva misurabile, approccio sistemico e standard ICF: un metodo solido, validato su migliaia di professionisti.',
  },
  {
    icon: <Users size={22} />,
    title: 'Apprendimento in community',
    body:
      'Si cresce dentro una comunità viva: trainer certificati, compagni di aula e alumni in tutta Europa, con pratica supervisionata.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Alta formazione accessibile',
    body:
      'Formazione di livello internazionale pensata per chi lavora: lezioni live, percorsi modulari e rateizzazioni su misura.',
  },
];

const values = [
  { label: 'Rigore', body: 'Standard ICF, supervisione e valutazione continua.' },
  { label: 'Umanità', body: 'La relazione prima della performance.' },
  { label: 'Impatto', body: 'Strumenti concreti, misurabili e replicabili nella tua pratica.' },
  { label: 'Comunità', body: 'Alumni, trainer e advisor a supporto del tuo percorso.' },
];

type PressLogoEntry = { name: string; file: string; tall?: boolean };
const pressLogos: PressLogoEntry[] = [
  { name: 'Corriere della Sera', file: 'corriere-della-sera' },
  { name: 'Il Sole 24 Ore', file: 'il-sole-24-ore' },
  { name: 'HBR Italia', file: 'hbr-italia', tall: true },
  { name: 'La Repubblica', file: 'la-repubblica' },
  { name: 'Forbes', file: 'forbes' },
  { name: 'Wired', file: 'wired' },
];

function PressLogo({ name, file, tall }: { name: string; file: string; tall?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <span className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-navy/40">
        {name}
      </span>
    );
  }
  const sizeClasses = tall ? 'h-12 sm:h-14' : 'h-6 sm:h-8';
  return (
    <img
      src={`/press/${file}.png`}
      alt={name}
      onError={() => setFailed(true)}
      className={`${sizeClasses} w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all`}
    />
  );
}

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
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
              About · Asterys Lab
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tighter leading-[1.02]">
              La nostra{' '}
              <span className="relative inline-block">
                <span className="relative z-10">filosofia</span>
                <span className="absolute inset-x-[-0.1em] bottom-[0.08em] h-[0.35em] bg-[#BFD4FF] -z-0 rounded-sm" />
              </span>{' '}
              del coaching.
            </h1>
            <p className="mt-6 text-lg text-brand-navy/75 font-medium max-w-[640px] leading-relaxed">
              Asterys Lab è la prima Coaching School ICF accreditata in Italia. Da venticinque anni
              accompagniamo coach, manager, HR e professionisti della relazione a stare nelle relazioni
              con rigore, intelligenza emotiva misurabile e un'umanità che si vede.
            </p>
          </div>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="px-2 sm:px-6 lg:px-10 py-6 sm:py-2 text-center sm:text-left">
              <p className="text-3xl lg:text-4xl font-display font-black tracking-tighter text-brand-navy leading-tight">
                25+
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-navy/55 leading-snug">
                Anni di ricerca e pratica nel coaching
              </p>
            </div>
            <div className="px-2 sm:px-6 lg:px-10 py-6 sm:py-2 text-center sm:text-left">
              <p className="text-3xl lg:text-4xl font-display font-black tracking-tighter text-brand-navy leading-tight">
                3.000+
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-navy/55 leading-snug">
                Coach formati in Italia e nel mondo
              </p>
            </div>
            <div className="px-2 sm:px-6 lg:px-10 py-6 sm:py-2 text-center sm:text-left">
              <p className="text-3xl lg:text-4xl font-display font-black tracking-tighter text-brand-navy leading-tight">
                Scuola accreditata <span className="text-brand-accent">ICF</span>
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-navy/55 leading-snug">
                Level 1 · Level 2 · CCE · ACTC · Mentor
              </p>
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
                  <span className="absolute inset-x-[-0.08em] bottom-[0.06em] h-[0.3em] bg-[#BFD4FF] -z-0 rounded-sm" />
                </span>.
              </h2>
            </div>
            <div className="space-y-6 text-lg text-brand-navy/80 font-medium leading-relaxed">
              <p>
                Per noi il coaching non è una moda né una tecnica: è una <strong>scelta di metodo</strong>
                {' '}e di <strong>postura</strong>. Significa stare accanto alle persone — senza sostituirsi
                a loro — per aiutarle a trovare risorse, direzione e voce.
              </p>
              <p>
                Da un quarto di secolo portiamo in aula ricerca internazionale, standard <strong>ICF</strong>,
                intelligenza emotiva misurabile e lettura sistemica. Ma partiamo sempre dalla domanda più
                difficile: <em>chi vogliamo essere, quando siamo accanto a un'altra persona?</em>
              </p>
              <p>
                È da questa domanda che è nato Asterys Lab. Ed è per questa domanda che continuiamo,
                edizione dopo edizione, a formare coach, counsellor, psicologi, manager e HR che vogliono
                fare la differenza — davvero, con rigore e con cuore.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="px-0 lg:px-7 py-8 lg:py-2 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue-soft/60 text-brand-accent flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-display font-black tracking-tight text-brand-navy mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-brand-navy/65 font-medium leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORI / MANIFESTO */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#BFD4FF]">
                Il manifesto
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter leading-[1.05]">
                Quattro parole che guidano ogni aula.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.label} className="border-t border-white/15 pt-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#BFD4FF]">
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
          <div className="mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
              Press
            </span>
            <h2 className={`${tSection} mt-3`}>Hanno parlato di noi.</h2>
            <p className="mt-4 text-base text-brand-navy/70 font-medium max-w-[560px]">
              Ricerche, interviste e racconti sulla nostra Coaching School ICF, sulla community di coach
              e sull'impatto del coaching nelle organizzazioni italiane.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-10 sm:gap-x-14 gap-y-6 py-8 border-y border-gray-100 mb-10">
            {pressLogos.map((l) => (
              <div key={l.file} className="flex items-center">
                <PressLogo name={l.name} file={l.file} tall={l.tall} />
              </div>
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
        </div>
      </section>
    </div>
  );
}
