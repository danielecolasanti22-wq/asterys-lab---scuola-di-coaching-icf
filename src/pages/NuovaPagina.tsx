import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    title: 'Formazione aziendale',
    body: 'Percorsi su misura per organizzazioni che vogliono sviluppare leadership, collaborazione e capacità di attraversare i momenti cruciali.',
    icon: <BarChart3 size={22} strokeWidth={1.9} />,
  },
  {
    title: 'Scuola di coaching',
    body: 'Programmi accreditati e supervisione continua per professionisti che desiderano diventare coach e facilitatori riconosciuti.',
    icon: <Award size={22} strokeWidth={1.9} />,
  },
  {
    title: 'Sviluppo personale',
    body: 'Esperienze di coaching e consapevolezza pensate per liberare potenziale, efficacia relazionale e presenza personale.',
    icon: <HeartHandshake size={22} strokeWidth={1.9} />,
  },
];

const stats = [
  { value: '20+', label: 'anni di attività' },
  { value: '3.000+', label: 'persone formate' },
  { value: '4,8/5', label: 'soddisfazione media' },
  { value: 'ICF', label: 'accreditamenti' },
];

const reasons = [
  'Qualità e miglioramento costante dei servizi',
  'Flessibilità per chi lavora e studia',
  'Attestati e credenziali spendibili a livello internazionale',
  'Supporto prima, durante e dopo il percorso',
  'Partnership e faculty con esperienza internazionale',
  'Community di coach, trainer e professionisti dello sviluppo',
];

export default function NuovaPagina() {
  return (
    <main className="bg-[#F7F9FC] text-[#11213D]">
      <section className="relative overflow-hidden bg-[#163476] pt-24 text-white lg:min-h-[720px] lg:pt-32">
        <div className="absolute inset-0">
          <img
            src="/home/hero-people.png"
            alt=""
            className="h-full w-full object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#10245D_0%,rgba(22,52,118,0.92)_48%,rgba(22,52,118,0.42)_100%)]" />
        </div>

        <div className="relative mx-auto grid max-w-[1120px] gap-10 px-4 pb-32 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12 lg:pb-24 lg:pt-10">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#F28A3B]">
              <Sparkles size={14} />
              Prototipo visuale
            </p>
            <h1 className="font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Transforming People,
              <span className="block text-[#F28A3B]">Expanding Results.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-white/78 sm:mt-7 sm:text-lg">
              Una pagina test ispirata al linguaggio Asterys Lab: blu istituzionale,
              accenti caldi, contenuti densi e sezioni pensate per raccontare coaching,
              facilitazione e sviluppo personale con tono chiaro e professionale.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link
                to="/corsi"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F28A3B] px-8 py-4 text-[12px] font-black uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.45)] transition-colors hover:bg-[#E16F1E]"
              >
                Esplora i corsi
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/iscriviti"
                className="hidden items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[12px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#163476] sm:inline-flex"
              >
                Parla con noi
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 shadow-[0_28px_90px_-50px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white p-5 text-[#163476]">
                  <p className="font-display text-3xl font-black tracking-tight">{item.value}</p>
                  <p className="mt-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#163476]/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-white/70">
              Spazio prova: accesso veloce dall'header e contenuti modificabili senza impatto sulle pagine corso esistenti.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-4">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.26em] text-[#F28A3B]">
              Cosa facciamo
            </p>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-[#163476] lg:text-5xl">
              Coaching, facilitazione e percorsi di trasformazione.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="min-h-[300px] rounded-[1.25rem] border border-[#DDE5F4] bg-[#F7F9FC] p-7 transition-all hover:-translate-y-1 hover:border-[#F28A3B]/40 hover:bg-white hover:shadow-[0_22px_60px_-38px_rgba(22,52,118,0.35)]"
              >
                <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCE8FF] text-[#163476]">
                  {pillar.icon}
                </span>
                <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-[#163476]">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#11213D]/65">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF4FF] py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.26em] text-[#F28A3B]">
              Perché sceglierci
            </p>
            <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-[#163476] lg:text-5xl">
              Metodo, qualità e una community che resta.
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-[#11213D]/68">
              La direzione è quella del sito storico: comunicare solidità e vicinanza,
              con numeri chiari, messaggi essenziali e un forte accento sulla cura del percorso.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_24px_70px_-44px_rgba(22,52,118,0.35)]">
            <div className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-3 rounded-2xl bg-[#F7F9FC] p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#008060]" size={18} strokeWidth={2.25} />
                  <p className="text-sm font-black leading-snug text-[#163476]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1120px] px-4">
          <div className="overflow-hidden rounded-[1.5rem] bg-[#163476] text-white shadow-[0_30px_90px_-52px_rgba(22,52,118,0.7)]">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-[#F28A3B] p-8 lg:p-10">
                <Users size={34} strokeWidth={1.8} />
                <h2 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight">
                  Vuoi ricevere aggiornamenti?
                </h2>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-white/78">
                  Area demo per newsletter, contatti o campagne temporanee.
                </p>
              </div>
              <div className="p-8 lg:p-10">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                  <input
                    type="email"
                    placeholder="Indirizzo email"
                    className="min-h-14 rounded-full border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white outline-none placeholder:text-white/45 focus:border-white/45"
                  />
                  <button
                    type="button"
                    className="min-h-14 rounded-full bg-white px-8 text-[12px] font-black uppercase tracking-[0.2em] text-[#163476] transition-colors hover:bg-[#DCE8FF]"
                  >
                    Registrati
                  </button>
                </div>
                <p className="mt-4 text-xs font-medium leading-relaxed text-white/52">
                  Questo form è solo visuale per la prova e non invia dati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
