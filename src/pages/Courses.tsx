import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CourseImage } from '../components/CourseImage';
import { Highlight } from '../components/Highlight';

type Course = {
  id: string;
  title: string;
  badge: string;
  duration: string;
  modality: string;
  desc: string;
  img: string;
};

type CourseGroup = {
  label: string;
  caption: string;
  courses: Course[];
};

const courseGroups: CourseGroup[] = [
  {
    label: 'Master',
    caption: 'Diventa coach professionista e ottieni le credenziali ICF riconosciute nel mondo.',
    courses: [
      {
        id: 'apcm',
        title: 'Professione Coach',
        badge: 'Master',
        duration: '6–12 mesi',
        modality: 'Online + Aula',
        desc:
          'Arrivi pronto al tuo primo cliente e diventi coach con le credenziali ICF Level 1 & 2: metodo, pratica supervisionata e intelligenza emotiva che si vede nei risultati.',
        img: '/course-media/apcm/card.png',
      },
      {
        id: 'systemic-team-coaching',
        title: 'Team Coaching Sistemico',
        badge: 'Master',
        duration: '54 ore · 60 CCE',
        modality: 'Online + Milano/Roma',
        desc:
          'Impari ad accompagnare team e organizzazioni a risultati straordinari in tempi brevi, con il modello sistemico accreditato ICF. È il prerequisito per la credenziale ACTC.',
        img: '/course-media/systemic-team-coaching/card.jpg',
      },
    ],
  },
  {
    label: 'Formazione avanzata',
    caption: 'Porta a un nuovo livello la tua pratica e allarga ciò che sai fare con i clienti.',
    courses: [
      {
        id: 'coaching-circle',
        title: 'Mentoring per il rinnovo delle credenziali',
        badge: 'Formazione avanzata',
        duration: '10 ore per il rinnovo',
        modality: 'Zoom · gruppo o individuale',
        desc:
          'Rinnovi la tua credenziale ICF con serenità: maturi le 10 ore di mentor coaching richieste — Mentoring di Gruppo (7h) e/o Individuale (3h) — al fianco di un Mentor Coach MCC.',
        img: '/course-media/coaching-circle/card.png',
      },
      {
        id: 'voice-dialogue',
        title: 'Voice Dialogue Skills',
        badge: 'Formazione avanzata',
        duration: '3 giornate',
        modality: 'In presenza · Milano',
        desc:
          'Aggiungi uno strumento potente alla tua pratica: in un laboratorio in presenza a Milano impari a integrare il Voice Dialogue nel coaching e nel supporto alla persona.',
        img: '/course-media/voice-dialogue/card.png',
      },
      {
        id: 'marketing-per-coach',
        title: 'Personal Branding per Coach',
        badge: 'Formazione avanzata',
        duration: '5 incontri online',
        modality: 'Live online',
        desc:
          'Ti posizioni, ti racconti e acquisisci i tuoi primi clienti: 5 incontri online con Helga Ogliari sul personal branding del coach. Incluso nel 2° livello del Master.',
        img: '/course-media/marketing-per-coach/card.png',
      },
    ],
  },
  {
    label: 'Corsi brevi',
    caption: 'Competenze spendibili da subito, in poche sessioni.',
    courses: [
      {
        id: 'eiw',
        title: 'Intelligenza Emotiva',
        badge: 'Corso Breve',
        duration: '4 Workout live · 4 CCE',
        modality: 'Live Online',
        desc:
          "Impari a stare con le emozioni e a usarle a tuo vantaggio in ogni relazione: esperienze guidate con modello CSI, fiore di Plutchik e coach dedicati. Ogni ciclo è di 4 Workout live da 60' (4 CCE ICF).",
        img: '/course-media/eiw/card.png',
      },
      {
        id: 'continuous-learning',
        title: 'Continuous Learning',
        badge: 'Corso Breve',
        duration: '1 live class/mese',
        modality: 'Zoom · 18:30–20:00',
        desc:
          'Resti sempre aggiornato e in allenamento: una live class al mese in Zoom, tutto l’anno tranne agosto. Entri quando vuoi.',
        img: '/course-media/continuous-learning/card.jpg',
      },
      {
        id: 'public-speaking',
        title: 'Public Speaking Pro',
        badge: 'Corso Breve',
        duration: '3 giornate + 2 online',
        modality: 'Aula + Online',
        desc:
          'Conquisti la tua audience e ti presenti con autorevolezza: voce, corpo ed emozioni al servizio di una presenza che resta impressa, in una full immersion pratica.',
        img: '/course-media/public-speaking/card.jpg',
      },
    ],
  },
];

const corporatePrograms = [
  {
    title: 'Coaching per Manager',
    desc: 'I tuoi manager guidano meglio ogni giorno, con un coach dedicato al loro fianco.',
  },
  {
    title: 'Leadership Development',
    desc: 'Chi guida le persone cresce e porta tutto il team a un nuovo livello.',
  },
  {
    title: 'Team Coaching Sistemico',
    desc: 'I tuoi team si allineano e accelerano verso risultati concreti.',
  },
];

export default function Courses() {
  return (
    <div className="pb-20 bg-white">
      {/* HERO */}
      <section className="bg-brand-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-12 lg:pt-16 lg:pb-16 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-sky">
            Academy
          </span>
          <h1 className="mt-4 text-[2.3rem] sm:text-[2.9rem] lg:text-[3.3rem] font-display font-black leading-[0.98] tracking-tighter text-white mb-5">
            Il percorso che ti fa <Highlight className="text-brand-sky">crescere</Highlight>
          </h1>
          <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
            Che tu voglia muovere i primi passi come coach o portare la tua pratica a un nuovo
            livello, qui trovi il percorso che ti fa arrivare pronto: credenziali ICF riconosciute e
            competenze spendibili da subito.
          </p>
        </div>
      </section>

      {/* GROUPED COURSES */}
      <div className="max-w-[var(--wrap-max)] mx-auto px-4">
        {courseGroups.map((group, gi) => (
          <section key={group.label} className={gi === 0 ? 'pt-14 lg:pt-16' : 'pt-16 lg:pt-20'}>
            <div className="mb-8 pb-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <h2 className="text-2xl lg:text-[2rem] font-display font-black tracking-tight text-brand-navy">
                {group.label}
              </h2>
              <p className="text-sm text-brand-navy/55 font-medium">{group.caption}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {group.courses.map((c) => (
                <Link
                  key={c.id}
                  to={`/corsi/${c.id}`}
                  className="group bg-white border border-gray-100 rounded-[1.4rem] sm:rounded-[2rem] p-3.5 sm:p-4 shadow-[0_12px_40px_-28px_rgba(0,21,51,0.2)] hover:shadow-[0_18px_55px_-28px_rgba(0,21,51,0.32)] transition-shadow flex flex-col"
                >
                  <div className="aspect-[16/9] relative rounded-2xl overflow-hidden bg-gray-100">
                    <CourseImage
                      src={c.img}
                      fallbackSrc={`https://picsum.photos/seed/${c.id}/700/400`}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-brand-accent text-white px-3 py-1.5 rounded-md text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">
                      {c.badge}
                    </span>
                  </div>
                  <div className="px-2 sm:px-3 pt-5 pb-3 flex flex-col gap-3 flex-1">
                    <h3 className="text-lg lg:text-2xl font-display font-black text-brand-accent leading-tight">
                      {c.title}
                    </h3>
                    <div className="flex items-center gap-5 text-[11px] text-brand-accent font-bold uppercase tracking-[0.16em]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} /> {c.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {c.modality}
                      </span>
                    </div>
                    <p className="text-sm text-brand-navy/75 leading-relaxed">{c.desc}</p>
                    <div className="flex items-center justify-end mt-auto pt-4">
                      <span className="inline-flex items-center justify-center rounded-full bg-[#2A56A8] text-white px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] font-black gap-1.5 leading-none group-hover:brightness-110 transition-all">
                        Scopri <ArrowUpRight size={13} strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CORPORATE BRIDGE — redesigned */}
      <section className="mt-20 lg:mt-28">
        <div className="max-w-[var(--wrap-max)] mx-auto px-4">
          <div className="bg-brand-navy rounded-[1.75rem] lg:rounded-[2.5rem] overflow-hidden">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 sm:p-12 lg:p-14 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#CFE0F5]">
                  Per le aziende
                </span>
                <h2 className="mt-4 text-3xl lg:text-[2.5rem] font-display font-black tracking-tighter leading-[1.05]">
                  Cerchi formazione per il tuo team?
                </h2>
                <p className="mt-5 text-white/70 leading-relaxed max-w-md">
                  Fai crescere il tuo team con percorsi su misura e la stessa qualità ICF dei nostri
                  Master: dal coaching per manager allo sviluppo della leadership, fino al team
                  coaching sistemico.
                </p>
                <Link
                  to="/aziende"
                  className="btn-primary bg-white text-brand-navy hover:bg-white/90 w-fit mt-8"
                >
                  Area Corporate &amp; HR
                </Link>
              </div>
              <div className="bg-white/[0.04] border-t lg:border-t-0 lg:border-l border-white/10 p-8 sm:p-12 lg:p-14 flex flex-col justify-center divide-y divide-white/10">
                {corporatePrograms.map((p) => (
                  <div key={p.title} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-white font-display font-black tracking-tight text-lg">
                      {p.title}
                    </p>
                    <p className="text-sm text-white/55 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
