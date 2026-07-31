import { FormEvent, useState } from 'react';
import { autoHighlight } from '../utils/highlight';
import { submitToGravityForms, mapGfErrors } from '../utils/gravityForms';
import { GF_AZIENDE, GF_ERR_AZIENDE } from '../constants/gravityForms';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  Compass,
  GraduationCap,
  Handshake,
  Heart,
  MapPin,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  Users,
} from 'lucide-react';

// Foto reali della pagina aziende (in /public/aziende)
const IMG = {
  heroMain: '/aziende/4.jpg',
  heroSide: '/aziende/1.jpg',
  avviamento: '/aziende/3.jpg',
  coach: '/aziende/2.jpg',
  operiamo: '/aziende/5.jpg',
};

// Loghi dei clienti per il banner scorrevole (altri verranno aggiunti)
const clients = [
  { name: 'Buildo', src: '/clients/buildo.svg' },
  { name: 'Kuehne + Nagel', src: '/clients/kuehne-nagel.png' },
  { name: 'Crédit Agricole', src: '/clients/credit-agricole.png' },
  { name: 'Cittalia — Fondazione ANCI', src: '/clients/cittalia.png' },
  { name: 'KNF', src: '/clients/knf.png' },
];

// Una "metà" del carosello: i loghi ripetuti quanto basta a riempire la larghezza.
// In pagina ne renderizziamo DUE identiche e animiamo il contenitore a -50%: quando
// la prima metà esce a sinistra, la seconda (già caricata e identica) è esattamente
// al suo posto → scorrimento continuo, infinito, senza stacchi.
const marqueeHalf = Array.from({ length: 4 }).flatMap(() => clients);

const ambiti = [
  {
    icon: Building2,
    title: 'Organizzazione e riorganizzazione aziendale',
    desc: 'Ruoli e processi allineati a come funziona davvero la tua impresa.',
  },
  {
    icon: RefreshCw,
    title: 'Facilitazione del cambiamento',
    desc: 'Attraversi i passaggi più delicati con lucidità, anche quando il cambio di approccio è radicale.',
  },
  {
    icon: TrendingUp,
    title: 'Miglioramento dei risultati aziendali',
    desc: 'Priorità chiare e leve concrete su cui agire per far crescere la performance.',
  },
  {
    icon: Compass,
    title: 'Sviluppo della leadership',
    desc: 'Una leadership capace di guidare, decidere e ispirare le persone.',
  },
  {
    icon: Briefcase,
    title: 'Business Coaching',
    desc: 'Decisioni più lucide per imprenditori, soci e manager, da soli o in gruppo.',
  },
  {
    icon: Users,
    title: 'Team Coaching',
    desc: 'Un team che collabora davvero e supera insieme ostacoli e conflitti.',
  },
];

const vantaggiBusiness = [
  'Migliori abilità di comunicazione e relazione',
  'Sviluppo delle risorse e del team, superando ostacoli e conflitti',
  'Maggiore capacità di delega',
  'Un team management più efficace',
  'Sviluppo del business e aumento della produttività',
  'Capacità di individuare nuovi mercati e attrarre nuovo business',
];

const beneficiPersonali = [
  { icon: Sparkles, text: 'Gestione dello stress e maggiore creatività' },
  { icon: Scale, text: 'Equilibrio tra vita privata e lavoro (life/work balance)' },
  { icon: Heart, text: 'Un più solido senso di fiducia in te stesso' },
];

export default function Corporate() {
  const seen = new Set<string>();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    area: '',
    email: '',
    phone: '',
    message: '',
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.terms || !form.firstName || !form.lastName || !form.company || !form.email) return;
    setError(null);
    setFieldErrors({});
    setSending(true);
    const result = await submitToGravityForms(GF_AZIENDE.formId, {
      'input_1.3': form.firstName,
      'input_1.6': form.lastName,
      input_2: form.company,
      input_3: form.area,
      input_4: form.email,
      input_5: form.phone ? `+39 ${form.phone}` : '',
      input_6: form.message,
      'input_7.1': form.terms ? '1' : '',
    });
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      return;
    }
    const fe = mapGfErrors(result.errors, GF_ERR_AZIENDE);
    if (Object.keys(fe).length) setFieldErrors(fe);
    else setError(result.message || 'Qualcosa non ha funzionato. Controlla i campi e riprova.');
  };
  return (
    <div className="bg-[#EEF4FC] text-brand-navy">
      {/* HERO */}
      <section className="bg-[#001D4B] text-white">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#5E8AD0] mb-5">
              Business Coaching
            </p>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[4.6rem] leading-[0.95] tracking-tight max-w-[640px]">
              Guida la tua impresa nei momenti che contano
            </h1>
            <p className="mt-6 text-white/75 text-base sm:text-lg max-w-[540px] leading-relaxed">
              Quando il tuo lavoro è la tua vita, non esiste un orario per «staccare»: sei così dentro il tuo
              business che un coach al tuo fianco può fare davvero la differenza. Prendi decisioni più lucide,
              fai crescere le tue persone e affronti con eccellenza i momenti cruciali. Dal 2014 affianchiamo
              imprenditori, manager e team con percorsi di business ed executive coaching su misura, per chi
              vuole guardare avanti.
            </p>
            <a
              href="#contatti-aziende"
              className="mt-8 inline-flex items-center gap-2 bg-[#2A56A8] hover:bg-[#2748d1] text-white rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition-colors"
            >
              Parla con un coach
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="relative h-[300px] sm:h-[360px] lg:h-[390px]">
            <img
              src={IMG.heroMain}
              alt="Imprenditori in confronto durante una sessione di lavoro"
              className="absolute top-4 right-8 w-[250px] sm:w-[300px] rounded-2xl shadow-2xl object-cover"
              referrerPolicy="no-referrer"
            />
            <img
              src={IMG.heroSide}
              alt="Risultati raggiunti grazie al coaching"
              className="absolute bottom-10 right-0 w-[160px] sm:w-[190px] rounded-xl shadow-2xl object-cover border-4 border-[#001D4B]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* CLIENTI — LOGHI SCORREVOLI */}
      <section className="bg-white py-10 lg:py-12 border-b border-[#EEF4FC]">
        <p className="text-center text-[11px] font-black uppercase tracking-[0.28em] text-brand-navy/45 mb-8">
          Aziende che hanno scelto di crescere con noi
        </p>
        <div className="marquee-mask group relative overflow-hidden">
          <div className="marquee-track flex w-max items-center animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {[0, 1].map((half) => (
              <ul
                key={half}
                aria-hidden={half === 1 || undefined}
                className="m-0 flex shrink-0 list-none items-center p-0"
              >
                {marqueeHalf.map((c, i) => (
                  <li key={`${half}-${i}`} className="mr-16 shrink-0 lg:mr-24">
                    <img
                      src={c.src}
                      alt={c.name}
                      className="h-8 lg:h-9 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* SIAMO IMPRENDITORI ANCHE NOI */}
      <section id="perche" className="bg-white py-14 lg:py-20 border-b border-[#EEF4FC]">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-display font-black tracking-tight leading-[1.02]">
              Nessuno conosce i tuoi affari meglio di te
            </h2>
            <p className="mt-5 text-brand-navy/80 leading-relaxed">
              Ogni giorno reinventi l'economia di un Paese come l'Italia, e per la tua azienda non esistono
              soluzioni standard. Al tuo fianco un coach ti dà un interlocutore equilibrato e creativo, esterno
              alle dinamiche aziendali e societarie: uno sguardo lucido su cui contare quando le decisioni pesano.
            </p>
            <p className="mt-4 text-brand-navy/80 leading-relaxed">
              {autoHighlight(
                "Da anni affianchiamo grandi aziende, spesso multinazionali, come consulenti, facilitatori e coach. Dal 2014 mettiamo la stessa esperienza al servizio delle imprese e degli imprenditori italiani, con la stessa serietà e lo stesso livello.",
                seen,
              )}
            </p>
          </div>

          <div className="bg-[#001D4B] text-white rounded-[2rem] p-8 lg:p-9 shadow-[0_30px_60px_-35px_rgba(0,29,75,0.7)]">
            <span className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-[#5E8AD0]">
              <Handshake size={20} />
            </span>
            <p className="mt-6 text-6xl font-display font-black tracking-tight">2014</p>
            <p className="text-sm text-white/80 leading-relaxed mt-3">
              L'anno in cui hai iniziato a poter contare sulla stessa esperienza che dedichiamo alle grandi
              multinazionali, portata al fianco della tua impresa.
            </p>
            <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/70">
              <span>Consulenti</span>
              <span>·</span>
              <span>Facilitatori</span>
              <span>·</span>
              <span>Coach</span>
            </div>
          </div>
        </div>
      </section>

      {/* RISULTATI */}
      <section className="bg-[#EEF4FC] py-14 lg:py-20 border-b border-[#EEF4FC]">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-accent mb-5">
            I risultati
          </p>
          <p className="text-2xl sm:text-3xl lg:text-[2.35rem] font-display font-black leading-[1.12] tracking-tight">
            Dopo un percorso con noi avrai le idee più chiare, spesso nuove idee e nuovi progetti. Ma
            soprattutto guarderai avanti con occhi nuovi, con più fiducia in te stesso e nelle tue capacità.
          </p>
          <p className="mt-6 text-brand-navy/70 leading-relaxed max-w-[640px] mx-auto">
            Quando il nostro lavoro sarà finito, ti scoprirai più capace di andare oltre le tue vecchie idee e
            di proseguire il tuo lavoro in modo ancora più autonomo.
          </p>
        </div>
      </section>

      {/* AMBITI DI INTERVENTO */}
      <section id="ambiti" className="bg-white py-14 lg:py-20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px]">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-display font-black tracking-tight leading-[1.02]">
              Metti a fuoco le priorità che fanno crescere la tua impresa
            </h2>
            <p className="mt-4 text-brand-navy/75 leading-relaxed">
              Individuiamo insieme le priorità su cui agire, una dopo l'altra. Ecco gli ambiti del coaching
              aziendale su cui puoi far leva, dal business coaching al team coaching, dalla leadership al
              cambiamento organizzativo.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ambiti.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#EEF4FC] border border-[#EEF4FC] rounded-3xl p-7 hover:shadow-[0_24px_50px_-34px_rgba(0,29,75,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#EEF4FC] text-[#2A56A8] flex items-center justify-center">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-display font-black tracking-tight leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS COACHING — AVVIAMENTO E SVILUPPO */}
      <section className="bg-[#EEF4FC] py-12 lg:py-16">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <img
              src={IMG.avviamento}
              alt="Pianificazione di visione, missione e obiettivi"
              className="rounded-[2rem] shadow-[0_20px_45px_-30px_rgba(0,29,75,0.55)] w-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-accent mb-3">
              Business Coaching
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-[1.05]">
              Dall'avviamento allo sviluppo
            </h3>
            <p className="mt-5 text-brand-navy/80 leading-relaxed">
              {autoHighlight(
                "Che tu stia avviando un'impresa — partendo da visione, missione e obiettivi — o la stia facendo crescere di fronte a nuove sfide e scenari, il business coaching ti aiuta ad anticipare i tempi e a restare un passo avanti alla concorrenza e alla complessità che avanza.",
                seen,
              )}
            </p>
            <p className="mt-4 text-brand-navy/80 leading-relaxed">
              Se guidi una PMI e vuoi fare tutto il possibile per risultati eccellenti, porti in azienda know-how
              e competenze per sviluppare il pieno potenziale della tua impresa e superare i momenti più critici,
              dalla contrazione all'espansione.
            </p>
          </div>
        </div>
      </section>

      {/* IL COACH AL TUO FIANCO */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-accent mb-3">
              Il metodo
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-[1.05]">
              Un vero partner al tuo fianco
            </h3>
            <p className="mt-5 text-brand-navy/80 leading-relaxed">
              Che tu sia imprenditore, socio o manager, ogni giorno prendi decisioni e guidi l'organizzazione. Lo
              stress e la pressione dei risultati, spesso in contesti poco favorevoli, possono spingerti su
              atteggiamenti poco produttivi e poco obiettivi.
            </p>
            <p className="mt-4 text-brand-navy/80 leading-relaxed">
              Un coach si mette al tuo fianco come un vero partner: ti apre spazi di reale confronto e maggiore
              obiettività sui temi che ti stanno a cuore. Resti pienamente autonomo nelle tue decisioni, ma con
              meno stress, più fiducia e uno sguardo capace di arrivare anche dove non avresti mai pensato di
              guardare.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={IMG.coach}
              alt="Sessione di coaching individuale tra coach e cliente"
              className="rounded-[2rem] shadow-[0_20px_45px_-30px_rgba(0,29,75,0.55)] w-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* VANTAGGI + BENEFICI PERSONALI */}
      <section id="vantaggi" className="bg-[#EEF4FC] py-14 lg:py-20 border-y border-[#EEF4FC]">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_24px_60px_-40px_rgba(0,29,75,0.4)]">
            <h3 className="text-2xl sm:text-[1.75rem] font-display font-black tracking-tight leading-snug">
              I vantaggi del Business Coaching
            </h3>
            <ul className="mt-6 space-y-4">
              {vantaggiBusiness.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#2A56A8] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-brand-navy/85 leading-snug font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#001D4B] text-white rounded-[2rem] p-8 lg:p-10 shadow-[0_24px_60px_-40px_rgba(0,29,75,0.6)]">
            <h3 className="text-2xl sm:text-[1.75rem] font-display font-black tracking-tight leading-snug">
              I benefici personali
            </h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Perché dietro ogni impresa c'è una persona.
            </p>
            <ul className="mt-7 space-y-5">
              {beneficiPersonali.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3.5">
                  <span className="w-10 h-10 rounded-2xl bg-white/10 text-[#5E8AD0] flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </span>
                  <span className="text-white/90 leading-snug font-medium pt-1.5">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COME OPERIAMO */}
      <section id="come-operiamo" className="bg-white py-14 lg:py-20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <img
              src={IMG.operiamo}
              alt="Coach Asterys mentre facilita un percorso di cambiamento con il team"
              className="rounded-[2rem] shadow-[0_20px_45px_-30px_rgba(0,29,75,0.55)] w-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-accent mb-3">
              Come operiamo
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-[1.05]">
              Non solo riorganizzare: cambiare cultura
            </h3>
            <p className="mt-5 text-brand-navy/80 leading-relaxed">
              Dentro un'azienda spesso non basta riorganizzare o aggiungere nuove attività. Il vero salto arriva
              da un cambiamento culturale: un cambio di approccio, a volte radicale, che coinvolge te e i tuoi
              collaboratori e cambia il modo in cui lavorate insieme.
            </p>
            <p className="mt-4 text-brand-navy/80 leading-relaxed">
              {autoHighlight(
                "Lavori con coach professionisti che, oltre a un solido background manageriale e imprenditoriale, si sono formati nella nostra scuola di coaching, con il know-how per supportare manager e professionisti in ambito aziendale.",
                seen,
              )}
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              <span className="inline-flex items-center gap-2 text-sm font-black text-brand-navy">
                <GraduationCap size={16} className="text-brand-accent" />
                Coach formati nella nostra scuola
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-black text-brand-navy">
                <ShieldCheck size={16} className="text-brand-accent" />
                Alto standard di qualità
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-black text-brand-navy">
                <MapPin size={16} className="text-brand-accent" />
                Progetti in tutta Italia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contatti-aziende" className="bg-[#CFE0F5] py-14 lg:py-16 border-t border-[#CFE0F5]">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <h3 className="text-4xl font-display font-black tracking-tight text-center">Parliamo della tua impresa</h3>
          <p className="text-center text-brand-navy/75 mt-2">
            Raccontaci la tua sfida: mettiamo a fuoco insieme le priorità della tua azienda e da dove partire.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl bg-white/90 border border-[#CFE0F5] p-8 text-center">
              <CheckCircle2 size={28} className="text-[#2A56A8] mx-auto mb-3" />
              <p className="text-lg font-display font-black text-brand-navy">Richiesta inviata!</p>
              <p className="text-brand-navy/70 mt-1">Ti ricontattiamo al più presto per fissare un confronto.</p>
            </div>
          ) : (
          <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input className={`w-full h-12 px-4 rounded-lg border bg-white/90 outline-none ${fieldErrors.firstName ? 'border-red-500' : 'border-[#CFE0F5]'}`} placeholder="Nome" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                {fieldErrors.firstName ? <p className="mt-1 text-xs font-bold text-red-600">{fieldErrors.firstName}</p> : null}
              </div>
              <input className="h-12 px-4 rounded-lg border border-[#CFE0F5] bg-white/90 outline-none" placeholder="Cognome" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
              <div>
                <input className={`w-full h-12 px-4 rounded-lg border bg-white/90 outline-none ${fieldErrors.company ? 'border-red-500' : 'border-[#CFE0F5]'}`} placeholder="Azienda" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                {fieldErrors.company ? <p className="mt-1 text-xs font-bold text-red-600">{fieldErrors.company}</p> : null}
              </div>
              <input className="h-12 px-4 rounded-lg border border-[#CFE0F5] bg-white/90 outline-none" placeholder="Area di interesse" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
              <div className="sm:col-span-1">
                <input className={`w-full h-12 px-4 rounded-lg border bg-white/90 outline-none ${fieldErrors.email ? 'border-red-500' : 'border-[#CFE0F5]'}`} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {fieldErrors.email ? <p className="mt-1 text-xs font-bold text-red-600">{fieldErrors.email}</p> : null}
              </div>
              <div>
                <div className={`h-12 px-4 rounded-lg border bg-white/90 flex items-center gap-2 ${fieldErrors.phone ? 'border-red-500' : 'border-[#CFE0F5]'}`}>
                  <span className="text-sm">🇮🇹 +39</span>
                  <input className="w-full outline-none bg-transparent" placeholder="Telefono" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                {fieldErrors.phone ? <p className="mt-1 text-xs font-bold text-red-600">{fieldErrors.phone}</p> : null}
              </div>
            </div>
            <textarea className="w-full h-28 p-4 rounded-lg border border-[#CFE0F5] bg-white/90 outline-none" placeholder="Raccontaci la tua sfida" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <label className="flex items-center gap-2 text-sm text-brand-navy/70">
              <input type="checkbox" className="rounded border-gray-300" checked={form.terms} onChange={(e) => setForm({ ...form, terms: e.target.checked })} />
              Accetto la Privacy Policy
            </label>
            {error ? <p className="text-sm font-bold text-red-600 text-center">{error}</p> : null}
            <div className="flex justify-center pt-2">
              <button type="submit" disabled={sending} className="inline-flex items-center gap-2 bg-[#2A56A8] hover:bg-[#2748d1] text-white rounded-full px-7 py-3 text-xs font-black uppercase tracking-[0.14em] transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {sending ? 'Invio in corso…' : 'Richiedi un confronto'}
              </button>
            </div>
          </form>
          )}
        </div>
      </section>

      {/* SMALL END BAND */}
      <section className="bg-[#001D4B] text-white py-8">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 font-black">
            <UserRound size={16} />
            Asterys for business
          </div>
          <div className="flex items-center gap-2 text-white/75">
            <CheckCircle2 size={16} />
            Business & Team Coaching per PMI
          </div>
          <div className="flex items-center gap-2 text-white/75">
            <MapPin size={16} />
            Coach certificati · in tutta Italia
          </div>
        </div>
      </section>
    </div>
  );
}
