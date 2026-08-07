import {
  MessageCircle,
  Heart,
  Scale,
  Activity,
  Clock,
  Compass,
  TrendingUp,
  ShieldCheck,
  Video,
  CheckCircle2,
} from 'lucide-react';

import { whatsappHref } from '../utils/whatsapp';
import Img from '../components/Img';

// Aree di vita su cui lavora un personal coach (reference: /sviluppo-personale/).
const aree = [
  { icon: Heart, title: 'Relazioni', desc: 'Relazioni più autentiche e appaganti, con gli altri e con te stesso.' },
  { icon: Scale, title: 'Equilibrio vita-lavoro', desc: 'Un confine più sano tra vita professionale e privata, senza sentirti sempre in servizio.' },
  { icon: Activity, title: 'Gestione dello stress', desc: 'Strumenti concreti per affrontare la pressione con lucidità ed energia.' },
  { icon: Clock, title: 'Gestione del tempo', desc: 'Priorità chiare e più spazio per ciò che conta davvero.' },
  { icon: Compass, title: 'Scopo di vita', desc: 'Ritrovi la direzione: capisci cosa vuoi davvero e come arrivarci.' },
  { icon: TrendingUp, title: 'Sviluppo della carriera', desc: 'Scelte professionali più consapevoli e allineate a chi sei.' },
];

// Cosa porti a casa (reference: percorsi di Sviluppo Personale).
const trasformazioni = [
  'Maggiore consapevolezza di te',
  'Nuove abilità personali',
  'Fondamenta personali più solide',
  'Una nuova visione di te stesso',
  'Più padronanza della tua vita',
  'Il tuo pieno potenziale di gioia ed efficacia',
];

export default function PersonalCoaching() {
  return (
    <div className="bg-white text-brand-navy">
      {/* HERO */}
      <section className="relative bg-brand-hero text-white overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,#00091c_0%,#001a45_20%,#143f7a_55%,#2c63a8_100%)]"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:block overflow-hidden">
          <Img
            src="/personal-coaching/hero.png"
            sizes="(max-width: 1024px) 0px, 100vw"
            alt=""
            className="hero-figure absolute bottom-0 right-0 w-[calc(100vw-135px)] max-w-[1480px] min-w-[1020px] object-contain object-bottom object-right-bottom"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-sky mb-5">Personal Coaching</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[4.4rem] leading-[0.96] tracking-tighter max-w-[720px]">
            Realizza il tuo pieno potenziale, con un coach al tuo fianco
          </h1>
          <p className="mt-6 text-white/80 text-base sm:text-lg max-w-[600px] leading-relaxed">
            Un percorso di coaching individuale per crescere davvero: più consapevolezza di te, obiettivi chiari e
            la libertà di essere più padrone della tua vita — nella sfera personale come in quella professionale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-full px-6 py-3.5 text-xs font-black uppercase tracking-[0.16em] hover:brightness-110 transition-all"
            >
              <MessageCircle size={16} /> Parla con un coach
            </a>
            <span className="text-white/60 text-sm">Primo confronto senza impegno</span>
          </div>
        </div>
      </section>

      {/* COS'È */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-accent mb-5">
            Cos'è il Personal Coaching
          </p>
          <p className="text-2xl sm:text-3xl lg:text-[2.35rem] font-display font-black leading-[1.12] tracking-tight">
            Il focus è sempre la persona e la sua realizzazione. Il coaching è un viaggio, dove il viaggio conta
            quanto la destinazione.
          </p>
          <p className="mt-6 text-brand-navy/70 leading-relaxed">
            Con il personal coaching lavori sui temi della tua vita — obiettivi, relazioni, scelte, equilibrio —
            anche quando riguardano il lavoro, ma vissuti dal tuo punto di vista personale. Un percorso pratico,
            basato sull'esperienza, per trasformare le tue dinamiche e liberare il tuo potenziale di gioia ed efficacia.
          </p>
        </div>
      </section>

      {/* AREE */}
      <section className="bg-[#EEF4FC] py-14 lg:py-20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px]">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-display font-black tracking-tight leading-[1.02]">
              Su cosa puoi lavorare
            </h2>
            <p className="mt-4 text-brand-navy/75 leading-relaxed">
              Un personal coach ti accompagna a sviluppare e migliorare qualsiasi aspetto della tua vita, quello che
              senti più importante adesso.
            </p>
          </div>
          <div className="mt-10 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-1 sm:mx-0 sm:px-0 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {aree.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="w-[78%] shrink-0 snap-start sm:w-auto bg-white border border-[#EEF4FC] rounded-3xl p-7 hover:shadow-[0_24px_50px_-34px_rgba(0,29,75,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <span className="w-12 h-12 rounded-2xl bg-brand-blue-soft text-brand-accent flex items-center justify-center">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-display font-black tracking-tight leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IL RUOLO DEL COACH */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-accent mb-3">Il ruolo del coach</p>
            <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-[1.05]">
              Un alleato che ti sfida a osare
            </h3>
            <p className="mt-5 text-brand-navy/80 leading-relaxed">
              Il tuo personal coach si mette al tuo totale servizio: non giudica, ti incoraggia e ti supporta, ma ti
              sfida anche ad andare oltre i tuoi limiti percepiti, a non accontentarti, a osare ed essere creativo.
            </p>
            <p className="mt-4 text-brand-navy/80 leading-relaxed">
              Si crea una sinergia collaborativa in cui resti pienamente autonomo nelle tue scelte — ed è proprio lì
              che generi le tue realizzazioni più importanti.
            </p>
          </div>
          <div className="bg-[#001D4B] text-white rounded-[2rem] p-8 lg:p-10 shadow-[0_24px_60px_-40px_rgba(0,29,75,0.6)]">
            <h3 className="text-xl font-display font-black tracking-tight">Cosa ti porti a casa</h3>
            <ul className="mt-6 space-y-4">
              {trasformazioni.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#2A56A8] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </span>
                  <span className="text-white/90 leading-snug font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="bg-[#EEF4FC] py-14 lg:py-20">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
          <div className="max-w-[680px] mb-10">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-brand-accent mb-3">Come funziona</p>
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight leading-[1.02]">
              Un percorso costruito su di te
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-3xl p-7">
              <span className="w-12 h-12 rounded-2xl bg-brand-blue-soft text-brand-accent flex items-center justify-center">
                <Clock size={22} />
              </span>
              <h3 className="mt-5 text-lg font-display font-black">Da 3 a 10 mesi</h3>
              <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">
                La durata si adatta ai tuoi obiettivi: il percorso dura il tempo che serve a te.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-7">
              <span className="w-12 h-12 rounded-2xl bg-brand-blue-soft text-brand-accent flex items-center justify-center">
                <Video size={22} />
              </span>
              <h3 className="mt-5 text-lg font-display font-black">Sessioni di circa 1 ora</h3>
              <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">
                Di persona o in videoconferenza, con la cadenza che concordi con il tuo coach.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-7">
              <span className="w-12 h-12 rounded-2xl bg-brand-blue-soft text-brand-accent flex items-center justify-center">
                <ShieldCheck size={22} />
              </span>
              <h3 className="mt-5 text-lg font-display font-black">Qualità garantita</h3>
              <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">
                Lavori con coach professionisti con credenziali ICF e la nostra esperienza a garantire qualità e
                supporto lungo tutto il percorso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001D4B] text-white py-16 lg:py-20">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight">Il tuo percorso può iniziare oggi</h2>
          <p className="mt-4 text-white/75 leading-relaxed max-w-[560px] mx-auto">
            Raccontaci cosa vuoi cambiare o realizzare: troviamo insieme il coach giusto per te, con un primo confronto
            senza impegno.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full px-7 py-3.5 text-xs font-black uppercase tracking-[0.16em] hover:brightness-110 transition-all"
            >
              <MessageCircle size={16} /> Parla con un coach
            </a>
            <a href="tel:+393498864895" className="text-white/70 text-sm">
              oppure chiamaci al <span className="font-black text-white">+39 349 886 4895</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
