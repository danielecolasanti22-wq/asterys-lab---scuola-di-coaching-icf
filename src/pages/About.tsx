import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Compass,
  HeartHandshake,
  Users,
  Sparkles,
  Calendar,
  RefreshCw,
  MessagesSquare,
  Image as ImageIcon,
} from 'lucide-react';
import { Highlight } from '../components/Highlight';
import { autoHighlight } from '../utils/highlight';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

/**
 * Immagine di sezione. Passando `src` mostra la foto; altrimenti un placeholder
 * pulito. Per inserire l'immagine definitiva basta mettere il file in /public
 * e passare il relativo percorso a `src`.
 */
function SectionImage({
  src,
  alt,
  note,
  contain,
}: {
  src?: string;
  alt: string;
  note?: string;
  /** true → mostra l'immagine intera (es. ritaglio stampa), senza ritaglio 4:3. */
  contain?: boolean;
}) {
  if (src) {
    return contain ? (
      <img
        src={src}
        alt={alt}
        className="mt-8 w-full h-auto rounded-2xl shadow-soft border border-gray-100"
      />
    ) : (
      <img
        src={src}
        alt={alt}
        className="mt-8 w-full aspect-[4/3] object-cover rounded-2xl shadow-soft"
      />
    );
  }
  return (
    <div className="mt-8 w-full aspect-[4/3] rounded-2xl bg-brand-blue-soft/50 border border-dashed border-brand-navy/20 flex flex-col items-center justify-center gap-2 text-brand-navy/40">
      <ImageIcon size={30} />
      <span className="text-[11px] font-black uppercase tracking-[0.22em]">Immagine</span>
      {note && <span className="text-[10px] font-medium text-brand-navy/35">{note}</span>}
    </div>
  );
}

const pillars = [
  {
    icon: <HeartHandshake size={22} />,
    title: 'Persone al centro',
    body:
      'Il cambiamento che generi parte dalla relazione: prima di ogni tecnica impari a curare la qualità dell’incontro tra te e il tuo cliente.',
  },
  {
    icon: <Compass size={22} />,
    title: 'Metodo evidence-based',
    body:
      'Lavori con intelligenza emotiva misurabile, approccio sistemico e standard ICF: un metodo solido, validato su migliaia di professionisti, su cui puoi contare davanti a ogni cliente.',
  },
  {
    icon: <Users size={22} />,
    title: 'Apprendimento in community',
    body:
      'Cresci dentro una comunità viva: trainer certificati, compagni di aula e alumni in tutta Europa, con pratica supervisionata che ti fa arrivare pronto.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Alta formazione accessibile',
    body:
      'Accedi a una formazione di livello internazionale pensata per chi lavora: lezioni live, percorsi modulari e rateizzazioni su misura per farla stare nella tua vita.',
  },
];

const values = [
  { label: 'Rigore', body: 'Standard ICF, supervisione e valutazione continua che alzano il tuo livello.' },
  { label: 'Umanità', body: 'Impari a mettere la relazione prima della performance.' },
  { label: 'Impatto', body: 'Strumenti concreti, misurabili e replicabili nella tua pratica.' },
  { label: 'Comunità', body: 'Alumni, trainer e advisor a supporto del tuo percorso.' },
];

const accreditations = [
  { file: 'icf', label: 'ICF', desc: 'International Coaching Federation: l’ente mondiale che dà valore al tuo titolo.' },
  { file: 'icf-level-1', label: 'Level 1', desc: 'Accredited Coaching Education: la tua strada verso la credenziale ACC.' },
  { file: 'icf-level-2', label: 'Level 2', desc: 'Accredited Coaching Education: la tua strada verso la credenziale PCC.' },
  { file: 'icf-cce-new', label: 'CCE', desc: 'Continuing Coach Education: i crediti che ti servono per rinnovare la credenziale.' },
  { file: 'icf-aatc', label: 'AATC', desc: 'Advanced Accreditation in Team Coaching: alleni team e leader al risultato.' },
];

const communityPillars = [
  {
    icon: <Users size={20} />,
    title: 'Alumni network',
    body: '3.000+ professionisti in Italia e in Europa a cui appoggiarti per referral, collaborazioni e nuove opportunità.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'Continuous Learning',
    body: 'Live class mensili in Zoom per restare aggiornato tutto l’anno, anche dopo il diploma.',
  },
  {
    icon: <Calendar size={20} />,
    title: 'Eventi & incontri',
    body: 'Workshop, open day e momenti di confronto dal vivo e online dove allarghi la tua rete con docenti e coach.',
  },
  {
    icon: <MessagesSquare size={20} />,
    title: 'Mentoring tra pari',
    body: 'Mentoring di gruppo e pratica supervisionata per continuare ad allenarti con altri coach e maturare le ore utili al rinnovo della credenziale ICF.',
  },
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

  const seenPillars = new Set<string>();
  const seenValues = new Set<string>();
  return (
    <div className="bg-white text-brand-navy">
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-hero">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-sky">
              About · Asterys Lab
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tighter leading-[1.02] text-white">
              La scuola che ti fa{' '}
              <Highlight className="text-brand-sky">diventare coach</Highlight>{' '}
              e riconoscere ovunque.
            </h1>
            <p className="mt-6 text-lg text-white/75 font-medium max-w-[640px] leading-relaxed">
              Scegli la prima Coaching School ICF accreditata in Italia e porti a casa venticinque anni
              di metodo: impari a stare nelle relazioni con rigore, intelligenza emotiva misurabile e
              un'umanità che si vede — e a farti riconoscere come coach, ovunque.
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
                Anni di metodo collaudato che erediti dal primo giorno
              </p>
            </div>
            <div className="px-2 sm:px-6 lg:px-10 py-6 sm:py-2 text-center sm:text-left">
              <p className="text-3xl lg:text-4xl font-display font-black tracking-tighter text-brand-navy leading-tight">
                3.000+
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-navy/55 leading-snug">
                Colleghi e alumni pronti a sostenere la tua carriera
              </p>
            </div>
            <div className="px-2 sm:px-6 lg:px-10 py-6 sm:py-2 text-center sm:text-left">
              <p className="text-3xl lg:text-4xl font-display font-black tracking-tighter text-brand-navy leading-tight whitespace-nowrap">
                Accreditamento <span className="text-brand-accent">ICF</span>
              </p>
              <p className="mt-3 text-[11px] font-black uppercase tracking-[0.2em] text-brand-navy/55 leading-snug">
                Level 1 · Level 2 · CCE · ACTC · Mentor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section id="chi-siamo" className="scroll-mt-28 border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
                Chi siamo
              </span>
              <h2 className={`${tSection} mt-3`}>
                Impari dove tutto è iniziato: la prima Coaching School{' '}
                <Highlight>ICF accreditata</Highlight> in Italia.
              </h2>
              <SectionImage
                src="/about/chi-siamo.jpg"
                alt="Il Sole 24 Ore: «Un'italiana al vertice del coaching», su Giovanna D'Alessio"
                contain
              />
            </div>
            <div className="space-y-6 text-lg text-brand-navy/80 font-medium leading-relaxed">
              <p>
                Porti a casa un coaching <Highlight>rigoroso, misurabile e profondamente umano</Highlight>,
                allineato agli standard internazionali della International Coaching Federation: è l'idea
                precisa con cui, oltre venticinque anni fa, Asterys Lab ha portato in Italia un nuovo
                modo di formare coach.
              </p>
              <p>
                Entri in una <Highlight>scuola, un metodo e una comunità</Highlight> cresciuti insieme:
                più di 3.000 tra coach, manager, HR e professionisti della relazione si sono già formati
                qui, in Italia e in Europa, dentro un punto di riferimento riconosciuto dalla stampa e
                dal mondo delle organizzazioni. La stessa rete e la stessa reputazione lavorano per te.
              </p>
              <p>
                Impari da un team di trainer e mentor coach certificati ICF: nessuna formula
                preconfezionata, ma persone che fanno coaching ogni giorno e restano accanto a te
                mentre cresci.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFIA */}
      <section id="filosofia" className="scroll-mt-28">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
                Filosofia
              </span>
              <h2 className={`${tSection} mt-3`}>
                Esci con un coaching che è un atto di{' '}
                <Highlight>responsabilità</Highlight>.
              </h2>
              <SectionImage
                src="/about/filosofia.jpg"
                alt="Trainer Asterys Lab durante un intervento dal vivo"
              />
            </div>
            <div className="space-y-6 text-lg text-brand-navy/80 font-medium leading-relaxed lg:order-1">
              <p>
                Impari che il coaching non è una moda né una tecnica: è una <Highlight>scelta di metodo</Highlight>
                {' '}e di <Highlight>postura</Highlight>. Sai stare accanto alle persone — senza sostituirti
                a loro — per aiutarle a trovare risorse, direzione e voce.
              </p>
              <p>
                Porti in ogni sessione un quarto di secolo di ricerca internazionale, standard <Highlight>ICF</Highlight>,
                intelligenza emotiva misurabile e lettura sistemica. E parti sempre dalla domanda più
                difficile: <em>chi vuoi essere, quando sei accanto a un'altra persona?</em>
              </p>
              <p>
                È da questa domanda che nasce tutto. Ed è la domanda che ti alleni a farti, edizione dopo
                edizione, insieme a coach, counsellor, psicologi, manager e HR che vogliono fare la
                differenza — davvero, con rigore e con cuore.
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
                <p className="text-sm text-brand-navy/65 font-medium leading-relaxed">{autoHighlight(p.body, seenPillars)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCREDITAMENTI */}
      <section id="accreditamenti" className="scroll-mt-28 border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
              Accreditamenti
            </span>
            <h2 className={`${tSection} mt-3`}>
              Le tue credenziali, riconosciute in tutto il mondo.
            </h2>
            <p className="mt-4 text-base text-brand-navy/70 font-medium leading-relaxed">
              Ogni percorso risponde agli standard della International Coaching Federation: porti a casa
              metodo verificato, ore certificate e una credenziale spendibile a livello internazionale,
              ovunque tu voglia lavorare.
            </p>
          </div>

          <div className="flex flex-col lg:hidden items-center gap-6 max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 justify-items-center w-full">
              {[accreditations[4], accreditations[1]].map((a) => (
                <div key={a.file} className="flex flex-col items-center text-center">
                  <div className="h-16 flex items-center justify-center mb-2">
                    <img src={`/brand/${a.file}.png`} alt={a.label} className="max-h-16 w-auto object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-brand-navy">{a.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 justify-items-center w-full">
              {accreditations.slice(2, 4).map((a) => (
                <div key={a.file} className="flex flex-col items-center text-center">
                  <div className="h-16 flex items-center justify-center mb-2">
                    <img src={`/brand/${a.file}.png`} alt={a.label} className="max-h-16 w-auto object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-brand-navy">{a.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 flex items-center justify-center">
                <img src={`/brand/${accreditations[0].file}.png`} alt={accreditations[0].label} className="max-h-16 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-5 gap-4">
            {accreditations.map((a) => (
              <div
                key={a.file}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={`/brand/${a.file}.png`}
                    alt={a.label}
                    className="max-h-16 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-brand-navy">
                  {a.label}
                </p>
                <p className="mt-2 text-xs text-brand-navy/60 font-medium leading-relaxed">
                  {a.desc}
                </p>
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CFE0F5]">
                Il manifesto
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter leading-[1.05]">
                Quattro parole che porti in ogni tua sessione.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.label} className="border-t border-white/15 pt-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CFE0F5]">
                    {v.label}
                  </p>
                  <p className="mt-2 text-lg font-display font-black tracking-tight leading-tight">
                    {autoHighlight(v.body, seenValues)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LA COMMUNITY */}
      <section id="community" className="scroll-mt-28 bg-brand-blue-soft">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">
                La community
              </span>
              <h2 className={`${tSection} mt-3`}>
                Entri in una rete viva di{' '}
                <Highlight>3.000+ coach</Highlight>.
              </h2>
              <p className="mt-6 text-lg text-brand-navy/80 font-medium leading-relaxed">
                Con il diploma non finisce nulla: entri in una comunità che continua a sostenerti.
                Alumni, trainer e advisor fanno pratica con te e crescono al tuo fianco, in Italia e in
                tutta Europa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {communityPillars.map((p) => (
                <div key={p.title} className="flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-soft text-brand-accent flex items-center justify-center mb-3">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-display font-black tracking-tight text-brand-navy mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-brand-navy/65 font-medium leading-relaxed">{autoHighlight(p.body, seenPillars)}</p>
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
            <h2 className={`${tSection} mt-3`}>Una reputazione che lavora per te.</h2>
            <p className="mt-4 text-base text-brand-navy/70 font-medium max-w-[560px]">
              Ricerche, interviste e racconti sulla Coaching School ICF che scegli, sulla community di
              coach e sull'impatto del coaching nelle organizzazioni italiane: la stessa autorevolezza
              che porti nel tuo nome.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-10 sm:gap-x-14 gap-y-6 py-8 border-y border-gray-100">
            {pressLogos.map((l) => (
              <div key={l.file} className="flex items-center">
                <PressLogo name={l.name} file={l.file} tall={l.tall} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
