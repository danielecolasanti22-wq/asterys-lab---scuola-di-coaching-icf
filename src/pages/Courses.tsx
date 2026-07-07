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
    caption: 'Percorsi completi per diventare coach professionista ICF.',
    courses: [
      {
        id: 'apcm',
        title: 'Professione Coach',
        badge: 'Master',
        duration: '6–12 mesi',
        modality: 'Online + Aula',
        desc:
          'Il percorso completo per diventare coach professionista con credenziali ICF Level 1 & 2: metodo, pratica supervisionata e intelligenza emotiva misurabile.',
        img: '/course-media/apcm/card.png',
      },
      {
        id: 'systemic-team-coaching',
        title: 'Team Coaching Sistemico',
        badge: 'Master',
        duration: '54 ore · 60 CCE',
        modality: 'Online + Milano/Roma',
        desc:
          'Il modello sistemico accreditato ICF per il coaching sistemico di team e organizzazioni. Prerequisito per la credenziale ACTC.',
        img: '/course-media/systemic-team-coaching/card.jpg',
      },
    ],
  },
  {
    label: 'Formazione avanzata',
    caption: 'Approfondisci ambiti chiave della pratica di coaching.',
    courses: [
      {
        id: 'coaching-circle',
        title: 'Mentoring per il rinnovo delle credenziali',
        badge: 'Formazione avanzata',
        duration: '10 ore per il rinnovo',
        modality: 'Zoom · gruppo o individuale',
        desc:
          'Matura le 10 ore di mentor coaching per il rinnovo ICF: Mentoring di Gruppo (7h) e/o Individuale (3h), con un Mentor Coach MCC.',
        img: '/course-media/coaching-circle/card.png',
      },
      {
        id: 'voice-dialogue',
        title: 'Voice Dialogue Skills',
        badge: 'Formazione avanzata',
        duration: '3 giornate',
        modality: 'In presenza · Milano',
        desc:
          'Un laboratorio in presenza per integrare il Voice Dialogue nella tua pratica di coaching e di supporto alla persona.',
        img: '/course-media/voice-dialogue/card.png',
      },
      {
        id: 'marketing-per-coach',
        title: 'Marketing per Coach',
        badge: 'Formazione avanzata',
        duration: '5 webinar',
        modality: 'Live online',
        desc:
          'Il personal branding del coach: 5 webinar con Helga Ogliari per posizionarti, raccontarti e acquisire clienti. Incluso nel 2° livello del Master.',
        img: '/course-media/marketing-per-coach/card.png',
      },
    ],
  },
  {
    label: 'Corsi brevi',
    caption: 'Competenze pratiche, in tempi ridotti.',
    courses: [
      {
        id: 'eiw',
        title: 'Intelligenza Emotiva',
        badge: 'Corso Breve',
        duration: '4 Workout live · 4 CCE',
        modality: 'Live Online',
        desc:
          "Allena l'intelligenza emotiva con esperienze guidate: modello CSI, fiore di Plutchik e coach dedicati. Ogni ciclo è di 4 Workout live da 60' (4 CCE ICF).",
        img: '/course-media/eiw/card.png',
      },
      {
        id: 'continuous-learning',
        title: 'Continuous Learning',
        badge: 'Corso Breve',
        duration: '1 live class/mese',
        modality: 'Zoom · 18:30–20:00',
        desc:
          'Formazione continua per coach: una live class al mese in Zoom, tutto l’anno tranne agosto. Entri quando vuoi.',
        img: '/course-media/continuous-learning/card.jpg',
      },
      {
        id: 'public-speaking',
        title: 'Public Speaking Pro',
        badge: 'Corso Breve',
        duration: '3 giornate + 2 online',
        modality: 'Aula + Online',
        desc:
          'Rendi memorabile la tua presenza in pubblico: voce, corpo ed emozioni in una full immersion pratica.',
        img: '/course-media/public-speaking/card.jpg',
      },
    ],
  },
];

const corporatePrograms = [
  {
    title: 'Coaching per Manager',
    desc: 'Allena la leadership quotidiana con un coach dedicato.',
  },
  {
    title: 'Leadership Development',
    desc: 'Programmi strutturati per far crescere chi guida le persone.',
  },
  {
    title: 'Team Coaching Sistemico',
    desc: 'Il modello sistemico per allineare e accelerare i team.',
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
            Tutti i <Highlight className="text-brand-sky">percorsi</Highlight>
          </h1>
          <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
            Dalla formazione di base per aspiranti coach ai percorsi di formazione avanzata per
            professionisti e aziende. Trova il programma adatto ai tuoi obiettivi.
          </p>
        </div>
      </section>

      {/* GROUPED COURSES */}
      <div className="max-w-[941px] mx-auto px-4">
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
        <div className="max-w-[941px] mx-auto px-4">
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
                  Progettiamo percorsi su misura per le organizzazioni, con la stessa qualità ICF dei
                  nostri Master: dal coaching per manager allo sviluppo della leadership, fino al team
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
