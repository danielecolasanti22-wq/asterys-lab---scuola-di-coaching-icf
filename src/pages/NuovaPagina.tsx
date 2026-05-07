import {
  BarChart3,
  Check,
  Compass,
  GraduationCap,
  Megaphone,
  MessageCircle,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { coursesContent } from '../constants/coursesContent';

const course = coursesContent.apcm;

const idealPath = [
  {
    title: 'Skills',
    body: 'Competenze fondamentali per accompagnare persone e organizzazioni.',
    icon: <Compass size={20} />,
  },
  {
    title: '1° Livello',
    body: 'Approfondimento delle tecniche di coaching e pratica guidata sul campo.',
    icon: <Check size={20} />,
  },
  {
    title: '2° Livello',
    body: 'Percorso avanzato per diventare coach professionista certificato.',
    icon: <ShieldCheck size={20} />,
  },
];

const priceCards = [
  {
    title: 'Coaching Skills',
    accent: true,
    lines: [
      '3 giorni in presenza',
      '40 ore',
      'Lezioni live',
      'Esercizi e sessioni online',
      'Personal coaching',
      'Demo mentoring',
      'Durata: 1 mese',
    ],
  },
  {
    title: 'APCM - Livello 1',
    subtitle: 'Modulo Basic',
    price: course.levelsComparison?.levels[0]?.price ?? '3.400€',
    lines: [
      'Business Coach',
      'Mentor ICF',
      'Live Class',
      'Personal coaching 5 ore',
      'Peer practice',
      'Mentor Coaching',
      'Esame Pratico con la scuola',
      '60 ore di formazione ICF',
      'Durata: da 2 a 6 mesi',
    ],
  },
  {
    title: 'APCM - Livello 2',
    subtitle: 'Modulo Avanzato',
    price: course.levelsComparison?.levels[2]?.price ?? '4.500€',
    lines: [
      'Business Coach',
      'Mentor ICF',
      'Giornate full immersion',
      'Laboratori EI',
      'Live Class',
      'Personal coaching 15 ore',
      'Mentor Coaching',
      'Esame Pratico con la scuola',
      '90 ore di formazione ICF',
      'Durata: da 6 a 12 mesi',
    ],
  },
];

const outcomes = [
  {
    title: 'Competenze e strumenti',
    text: 'Per esercitare con sicurezza la figura professionale del coach.',
    icon: <Compass size={36} />,
  },
  {
    title: 'Certificazione di valore',
    text: 'Ore formative e pratica supervisionata per il percorso ICF.',
    icon: <ShieldCheck size={36} />,
  },
  {
    title: 'Percorso accreditato',
    text: 'Standard internazionali e faculty con credenziali MCC e PCC.',
    icon: <GraduationCap size={36} />,
  },
  {
    title: 'Credenziali riconosciute',
    text: 'Un percorso che sostiene la tua evoluzione professionale.',
    icon: <Star size={36} />,
  },
];

const learnItems = [
  'Padroneggiare il coaching professionale e le sue basi etiche',
  'Allenare presenza, ascolto e competenze chiave di coaching',
  'Misurare e lavorare sulle emozioni attraverso strumenti certificati',
  'Integrare approccio sistemico e facilitazione nella professione',
  'Gestire sessioni reali e ricevere feedback qualificato',
  'Costruire la propria identità professionale come coach',
];

const roiItems = [
  'Credenziali ICF come risultato di un percorso solido',
  'Metodo, strumenti e pratica per lavorare con persone e aziende',
  'Career Center, community e occasioni di formazione continua',
  'Un network professionale con cui crescere anche dopo il Master',
];

export default function NuovaPagina() {
  return (
    <main className="bg-white pt-[72px] text-[#363b4d]">
      <section className="mx-auto grid max-w-[980px] grid-cols-1 bg-white md:min-h-[520px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-16 md:px-14">
          <h1 className="font-display text-[3rem] font-black leading-[0.96] tracking-tight text-[#9B9DA9] md:text-[3.45rem]">
            Professione:
            <br />
            Coach.
          </h1>
          <p className="mt-6 max-w-[340px] text-[13px] font-semibold leading-relaxed text-[#7c8291]">
            {course.title}: corso accreditato dalla International Coaching Federation
            per ottenere la credenziale di Professional Certified Coach.
          </p>
          <a
            href="#contatto"
            className="mt-12 inline-flex w-fit items-center rounded-sm border border-[#D4D8E2] px-8 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-[#8B90A0] transition-colors hover:border-[#8BCFE0] hover:text-[#087EA4]"
          >
            Se sei già un coach clicca qui
          </a>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-[#F1F3F8] md:min-h-0">
          <img
            src="/course-media/apcm/card.png"
            alt="Professione Coach"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute bottom-9 right-8 flex gap-3">
            <img src="/brand/icf-level-1.png" alt="ICF Level 1" className="h-20 w-20 rounded-full bg-white object-contain p-1 shadow-lg" />
            <img src="/brand/icf-level-2.png" alt="ICF Level 2" className="h-20 w-20 rounded-full bg-white object-contain p-1 shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6FA] py-16">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <h2 className="font-display text-2xl font-black text-[#7A7F8E]">
            Trova il Percorso di Coaching Ideale per Te
          </h2>
          <p className="mt-2 text-[13px] font-semibold text-[#9095A3]">
            Scegli il percorso più adatto alla tua esigenza.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {idealPath.map((item) => (
              <article key={item.title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center text-[#3251DD]">
                  {item.icon}
                </span>
                <h3 className="mt-3 text-sm font-black text-[#6F7483]">{item.title}</h3>
                <p className="mt-2 text-[11px] font-medium leading-relaxed text-[#8D93A0]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F6FA] px-5 pb-20">
        <div className="mx-auto grid max-w-[760px] items-start gap-5 md:grid-cols-3">
          {priceCards.map((card) => (
            <article
              key={card.title}
              className={`min-h-[620px] border border-[#D6DCE8] text-center shadow-sm ${
                card.accent ? 'bg-[#8AD0E2]' : 'bg-white'
              }`}
            >
              <div className={`px-5 py-6 ${card.accent ? 'text-white' : 'text-[#5F6676]'}`}>
                <h3 className="font-display text-lg font-black">{card.title}</h3>
                {card.subtitle ? <p className="mt-5 text-[12px] font-black">{card.subtitle}</p> : null}
                {card.price ? <p className="mt-4 text-base font-black">{card.price} + iva</p> : null}
              </div>
              <div className="divide-y divide-[#E5E9F0] bg-white">
                {card.lines.map((line) => (
                  <p key={line} className="px-4 py-4 text-[12px] font-semibold leading-snug text-[#7E8492]">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#EEF0FF] py-16">
        <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#C9D1FF]" />
        <div className="absolute right-16 top-8 h-10 w-20 rotate-12 bg-[#C9D1FF]" />
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <p className="text-sm font-semibold text-[#7C8291]">
            Il percorso di formazione che può darti davvero tanto!
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {outcomes.map((item) => (
              <article key={item.title} className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[5px] border-[#21C7E8] bg-white text-[#3251DD] shadow-sm">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-[13px] font-black leading-tight text-[#606779]">{item.title}</h3>
                <p className="mt-1 text-[10px] font-semibold leading-relaxed text-[#8C92A1]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img src="/course-media/apcm/overview-master.jpg" alt="Aula APCM" className="h-full min-h-[420px] w-full object-cover" />
        <div className="flex min-h-[420px] flex-col justify-center bg-[#F7F8FB] px-9 py-14 md:px-16">
          <GraduationCap className="mb-6 text-[#8B8D95]" size={44} />
          <h2 className="font-display text-4xl font-black text-[#9B9DA9]">Apprendi</h2>
          <p className="mt-2 text-sm font-black text-[#8A8F9D]">Cosa avrai l'opportunità di apprendere?</p>
          <ul className="mt-6 space-y-2">
            {learnItems.map((item) => (
              <li key={item} className="flex gap-2 text-[13px] font-semibold leading-relaxed text-[#737A8A]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#21C7E8]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="flex min-h-[420px] flex-col justify-center bg-white px-9 py-14 md:px-16">
          <Star className="mb-6 fill-[#FFC640] text-[#FFC640]" size={40} />
          <h2 className="font-display text-4xl font-black text-[#9B9DA9]">Ottieni</h2>
          <p className="mt-2 text-sm font-black text-[#8A8F9D]">Iscrivendoti a questo corso puoi ottenere molto.</p>
          <ul className="mt-6 space-y-2">
            {course.career.points.map((item) => (
              <li key={item.title} className="flex gap-2 text-[13px] font-semibold leading-relaxed text-[#737A8A]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6B126]" />
                <span>
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <img src="/course-media/apcm/supervision-mentor.png" alt="Certificazione APCM" className="h-full min-h-[420px] w-full object-cover" />
      </section>

      <section className="grid md:grid-cols-2">
        <div className="flex min-h-[420px] items-center justify-center bg-[#D7D9FF] px-8 py-12">
          <img
            src="/course-media/apcm/platform-ui.png"
            alt="Piattaforma APCM"
            className="w-full max-w-[520px] rotate-[-6deg] rounded-xl shadow-[0_24px_70px_-38px_rgba(0,21,51,0.55)]"
          />
        </div>
        <div className="flex min-h-[420px] flex-col justify-center bg-white px-9 py-14 md:px-16">
          <BarChart3 className="mb-6 text-[#13A97A]" size={42} />
          <h2 className="font-display text-4xl font-black text-[#9B9DA9]">Il tuo ROI</h2>
          <p className="mt-2 text-sm font-black text-[#8A8F9D]">
            Considera quello che otterrai al termine del tuo investimento.
          </p>
          <ul className="mt-6 space-y-2">
            {roiItems.map((item) => (
              <li key={item} className="flex gap-2 text-[13px] font-semibold leading-relaxed text-[#737A8A]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#13A97A]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid bg-[#00066B] text-white md:grid-cols-2">
        <div className="flex min-h-[280px] items-center justify-center p-10">
          <img src="/brand/icf.png" alt="ICF Member" className="h-48 w-48 rounded-full bg-white object-contain p-7" />
        </div>
        <div className="flex min-h-[280px] flex-col justify-center px-9 py-14 md:px-16">
          <h2 className="font-display text-4xl font-black">Network di valore</h2>
          <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-white/78">
            Dal primo giorno entri in contatto con trainer, mentor, colleghi e alumni:
            una rete professionale che continua anche dopo il Master.
          </p>
          <a href="#contatto" className="mt-7 w-fit border border-white/35 px-6 py-3 text-[11px] font-black uppercase tracking-[0.18em]">
            Per saperne di più
          </a>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="flex min-h-[420px] flex-col justify-center bg-white px-9 py-14 md:px-16">
          <Megaphone className="mb-5 text-[#1D62E8]" size={38} />
          <h2 className="font-display text-4xl font-black text-[#9B9DA9]">Testimonianze</h2>
          <div className="mt-7 aspect-video overflow-hidden bg-[#E8ECF3] shadow-md">
            <img src="/testimonials/people/damiano-zanotti.jpeg" alt="Testimonianza APCM" className="h-full w-full object-cover" />
          </div>
        </div>
        <img src="/course-media/apcm/how-master.jpg" alt="Community APCM" className="h-full min-h-[420px] w-full object-cover" />
      </section>

      <section className="grid bg-[#00066B] text-white md:grid-cols-2">
        <div className="flex min-h-[320px] items-center justify-center p-10">
          <img
            src="/course-media/apcm/trainer-pier-paolo-colasanti.jpg"
            alt="Trainer APCM"
            className="h-56 w-56 rounded-full object-cover shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
          />
        </div>
        <div className="flex min-h-[320px] flex-col justify-center px-9 py-14 md:px-16">
          <h2 className="font-display text-4xl font-black">Percorso di valore</h2>
          <p className="mt-5 max-w-lg text-sm font-medium leading-relaxed text-white/80">
            “Un Master che mette insieme metodo, pratica e trasformazione personale.
            Un percorso pensato per chi vuole diventare coach con rigore, presenza e
            uno standard professionale riconoscibile.”
          </p>
          <p className="mt-5 text-sm font-black text-white">Pier Paolo Colasanti - CEO Asterys Lab</p>
        </div>
      </section>

      <section id="contatto" className="grid md:grid-cols-2">
        <img src="/course-media/apcm/card.png" alt="Parliamone" className="h-full min-h-[520px] w-full object-cover" />
        <div className="flex min-h-[520px] flex-col justify-center bg-[#F4F6FA] px-9 py-14 md:px-16">
          <MessageCircle className="mb-5 text-[#1D62E8]" size={38} />
          <h2 className="font-display text-4xl font-black text-[#9B9DA9]">Parliamone</h2>
          <p className="mt-4 max-w-md text-sm font-semibold leading-relaxed text-[#737A8A]">
            Siamo qui per dare forma al tuo progetto di sviluppo.
            Vorrei ricevere informazioni sul Master APCM.
          </p>

          <form className="mt-8 space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="h-11 bg-white px-4 text-sm outline-none" placeholder="Nome" />
              <input className="h-11 bg-white px-4 text-sm outline-none" placeholder="Indirizzo email" />
            </div>
            <input className="h-11 w-full bg-white px-4 text-sm outline-none" placeholder="Telefono" />
            <textarea className="h-28 w-full resize-none bg-white px-4 py-3 text-sm outline-none" placeholder="Messaggio" />
            <div className="flex items-center justify-between gap-4">
              <span className="text-[11px] font-semibold text-[#8C92A1]">10 + 8 =</span>
              <button type="button" className="bg-[#D4D7DE] px-6 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#626A78]">
                Invia
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-[#060A2C] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-[900px] gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img src="/brand/asterys-lab-logo.png" alt="Asterys Lab" className="h-10 w-auto brightness-0 invert" />
            <div className="mt-9 grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/50">Sedi</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/70">
                  Roma: via di Villa Zingone, 36
                  <br />
                  Milano: via Conservatorio, 22
                </p>
              </div>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/50">Orari</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/70">
                  Lunedì - Venerdì
                  <br />
                  9:00 - 13:00
                  <br />
                  15:00 - 17:00
                </p>
              </div>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/50">Telefono</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/70">
                  +39 0280016434
                  <br />
                  +39 0687165254
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.18em] text-white/50">Vuoi ricevere i nostri aggiornamenti?</p>
            <div className="mt-5 space-y-3">
              <input className="h-10 w-full border-b border-white/35 bg-transparent text-sm outline-none" placeholder="Nome" />
              <input className="h-10 w-full border-b border-white/35 bg-transparent text-sm outline-none" placeholder="Email" />
              <button className="mt-4 border border-white/40 px-7 py-3 text-[11px] font-black uppercase tracking-[0.18em]">
                Iscrivimi
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-[760px] gap-5 sm:grid-cols-3">
          <img src="/brand/icf-level-1.png" alt="ICF Level 1" className="bg-white p-2" />
          <img src="/brand/icf-level-2.png" alt="ICF Level 2" className="bg-white p-2" />
          <img src="/brand/icf-aatc.png" alt="ICF AATC" className="bg-white p-2" />
        </div>
      </section>
    </main>
  );
}
