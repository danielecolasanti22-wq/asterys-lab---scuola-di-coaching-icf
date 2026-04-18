import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Star,
  Plus,
  Minus,
  Clock,
  Video,
  UserCheck,
  Briefcase,
  Play,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { coursesContent, defaultCourseMedia } from '../constants/coursesContent';
import { CourseImage } from '../components/CourseImage';

const Accordion = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-gray-100 last:border-b-0">
    <button 
      onClick={onClick}
      className="w-full py-6 text-left flex items-center justify-between group gap-6"
    >
      <span className="text-[15px] sm:text-base font-black text-brand-navy group-hover:text-brand-accent transition-colors tracking-tight">
        {title}
      </span>
      <span
        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-navy/10 bg-white text-brand-navy transition-colors ${
          isOpen ? 'bg-brand-navy text-white border-brand-navy' : ''
        }`}
      >
        {isOpen ? <Minus size={18} strokeWidth={2.25} /> : <Plus size={18} strokeWidth={2.25} />}
      </span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="pb-6 text-brand-navy/60 leading-relaxed text-sm font-medium">
            {content}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState(0);
  const course: CourseData | undefined = id ? coursesContent[id] : undefined;
  const [paymentTab, setPaymentTab] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (course) {
      setPaymentTab(course.fees[0]?.title.toLowerCase() || '');
    }
  }, [id, course]);

  if (!course) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Corso non trovato</h1>
        <Link to="/corsi" className="text-brand-accent font-bold hover:underline">Torna alla lista corsi</Link>
      </div>
    );
  }

  const programIntro =
    course.programIntro ??
    'Imparerai un percorso strutturato e professionale: teoria, pratica supervisionata e strumenti concreti per portare valore alle persone e alle organizzazioni.';

  const admissionBox = course.admissionBox ?? {
    title: 'Requisiti di ammissione al Master',
    body: 'Questo Master richiede impegno e maturità professionale. Il livello è avanzato e il percorso è pensato per chi ha già esperienza nel mondo del lavoro e vuole applicare il metodo a contesti reali, non per chi parte senza una base professionale solida.',
  };

  const earlyPromo = course.earlyBirdPromo ?? {
    ribbon: 'PROMO',
    line: `Scopri condizioni dedicate al Master in ${course.subtitle} | Contattaci per i dettagli`,
    deadline: '',
    ctaHref: '#prezzo',
  };

  const activeModuleData = course.structure.modules[activeModule];
  const moduleTags =
    activeModuleData.tags ?? course.learning.softSkills.slice(0, 8);

  const media = { ...defaultCourseMedia(id ?? 'corso'), ...course.media };

  /** Tipografia compatta (reference: PDF Asterys) — migliora leggibilità sotto la piega */
  const tSection = 'text-3xl sm:text-4xl lg:text-[2.65rem] font-display font-black uppercase tracking-tighter text-brand-navy';
  const tLead = 'text-base sm:text-lg text-brand-navy/65 font-medium leading-relaxed max-w-2xl';
  const tModuleSide = 'text-[11px] sm:text-xs font-black uppercase tracking-tight';
  const tModuleTitle = 'text-xl sm:text-2xl lg:text-[1.75rem] font-display font-black uppercase tracking-tight text-brand-navy';
  const tBody = 'text-sm sm:text-base text-brand-navy/65 font-medium leading-relaxed';

  return (
    <div className="bg-white font-sans text-brand-navy antialiased overflow-x-hidden">
      
      {/* 0. ANNOUNCEMENT BAR */}
      <div className="fixed top-0 left-0 right-0 h-12 bg-[#001D4B] text-white flex items-center justify-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] z-[60] px-3 sm:px-4 overflow-x-auto">
        <span className="text-[#008060] shrink-0">{earlyPromo.ribbon}</span>
        <span className="text-white/90 font-semibold normal-case tracking-normal hidden min-[480px]:inline max-w-[52ch] truncate">
          {earlyPromo.line}
        </span>
        <span className="text-white/90 font-semibold normal-case tracking-normal min-[480px]:hidden">Dettagli e date sul Master</span>
        <a
          href={earlyPromo.ctaHref}
          className="ml-1 shrink-0 border-b border-white/80 text-white hover:text-[#E2FF3B] transition-colors whitespace-nowrap"
        >
          Blocca il tuo sconto →
        </a>
      </div>

      {/* 1. HERO SECTION */}
      <section className="bg-[#F2F7FF] relative overflow-hidden flex flex-col">
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#1D3BB9]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#0047FF]/10 blur-3xl" />
        <div className="max-w-[941px] mx-auto px-4 w-full grid lg:grid-cols-2 lg:gap-16 items-center min-h-[500px] lg:min-h-[550px]">
          <div className="py-12 lg:py-16 relative z-10">
            <p className="text-[#1D3BB9] text-[11px] font-black uppercase tracking-[0.05em] mb-8 flex items-center gap-2 flex-wrap">
              <span className="bg-[#1D3BB9]/10 px-2 py-0.5 rounded text-[10px]">
                {(course.heroKicker ?? course.type).toUpperCase()}
              </span>
              <span className="text-gray-300">|</span>
              <span>{course.summaryBox.duration.toUpperCase()}</span>
              <span className="text-gray-300">|</span>
              <span>{course.summaryBox.format.toUpperCase()}</span>
            </p>
            
            <h1 className="text-5xl lg:text-[76px] font-display font-black leading-[1] tracking-tighter mb-8 text-[#1D3BB9]">
              {course.subtitle.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            
            <p className="text-lg text-brand-navy mb-10 max-w-sm leading-relaxed font-semibold opacity-90">
              {course.tagline}
            </p>
            
            <button className="bg-[#001D4B] text-white px-9 py-4 rounded-full font-display font-black text-[11px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#1D3BB9] transition-all active:scale-95 mb-10">
              INIZIA IL PROCESSO DI AMMISSIONE
            </button>
            
            <div className="flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} className="w-9 h-9 rounded-full border-2 border-[#F2F7FF] object-cover" alt="Student" />
                  ))}
               </div>
               <div className="flex flex-col">
                  <div className="flex text-[#008060] gap-0.5">
                     {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="currentColor" />)}
                  </div>
                  <p className="text-[12px] text-brand-navy">
                    <span className="font-black">4.7/5 Eccellente</span> · +8.000 studenti
                  </p>
               </div>
            </div>
          </div>
          
          <div className="relative self-end h-full flex items-end justify-center lg:justify-end">
             <div className="w-full lg:w-[105%] h-auto relative overflow-visible flex items-end">
                <CourseImage
                  src={media.hero}
                  fallbackSrc={defaultCourseMedia(id ?? 'corso').hero}
                  className="w-full h-auto object-contain scale-100 lg:origin-bottom-right drop-shadow-[0_30px_80px_rgba(0,21,51,0.18)]"
                  alt={course.title}
                />
             </div>
          </div>
        </div>
      </section>

      {/* 2. LA FIGURA CENTRALE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[941px] mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="rounded-[3rem] overflow-hidden shadow-2xl overflow-hidden">
                <CourseImage
                  src={media.overview}
                  fallbackSrc={defaultCourseMedia(id ?? 'corso').overview}
                  className="w-full h-full object-cover aspect-video lg:aspect-square"
                  alt={course.overview.title}
                />
             </div>
          </div>
          <div>
             <h2 className="text-4xl lg:text-7xl font-display font-black leading-[0.9] mb-10 text-brand-navy uppercase tracking-tighter">
                {course.overview.title}
             </h2>
             <div className="space-y-8">
               {course.overview.content.map((p, i) => (
                 <p key={i} className="text-lg text-brand-navy/70 leading-relaxed font-medium">
                    {p}
                 </p>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMMA DEL MASTER TABS */}
      <section id="programma" className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-4`}>Programma del Master</h2>
            <p className={`${tLead} mb-10 lg:mb-12`}>
              {programIntro}
            </p>
            
            <div className="bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 flex flex-col lg:flex-row shadow-[0_18px_50px_-38px_rgba(0,21,51,0.14)] min-h-0 lg:min-h-[440px]">
               {/* Left Sidebar Tabs */}
               <div className="lg:w-[38%] bg-[#F9FAFB] border-b lg:border-b-0 lg:border-r border-gray-100 p-4 sm:p-6 space-y-2">
                  {course.structure.modules.map((m, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveModule(i)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl ${tModuleSide} transition-all flex items-center justify-between gap-3 group ${activeModule === i ? 'bg-brand-navy text-white shadow-md' : 'text-brand-navy/45 hover:bg-white hover:text-brand-navy ring-1 ring-transparent hover:ring-black/5'}`}
                    >
                      <span className="leading-snug">{m.title}</span>
                      <ArrowRight size={16} className={`shrink-0 transition-transform ${activeModule === i ? 'translate-x-0.5 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
               </div>
               
               {/* Right Content */}
               <div className="lg:w-[62%] p-6 sm:p-8 lg:p-10 bg-white relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 h-full flex flex-col"
                    >
                       <h3 className={`${tModuleTitle} mb-4`}>
                          {course.structure.modules[activeModule].title}
                       </h3>
                       <p className={`${tBody} mb-8`}>
                          {course.structure.modules[activeModule].desc}
                       </p>
                       
                       <div className="mt-auto pt-8 border-t border-gray-100">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/35 mb-3">In sintesi</p>
                          <div className="flex flex-wrap gap-2">
                            {moduleTags.map((tag, i) => (
                              <span
                                key={`${activeModule}-${i}`}
                                className="inline-flex items-center rounded-md border border-brand-navy/10 bg-white px-2.5 py-1.5 text-[10px] sm:text-[11px] font-bold text-brand-navy/80"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                       </div>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
            
            {/* CTA Program Brochure */}
            <div className="mt-10 bg-[#0047FF] rounded-[1.75rem] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group overflow-hidden relative">
               <div className="relative z-10 max-w-xl">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white uppercase tracking-tight leading-[1.05] mb-4">
                    Vuoi scoprire il programma<br className="hidden sm:block" /> settimana per settimana?
                  </h3>
                  <button className="bg-[#E2FF3B] text-brand-navy px-8 py-3.5 rounded-md font-black text-[11px] uppercase tracking-[0.2em] shadow-lg hover:brightness-95 active:scale-[0.98] transition-all">
                     SCARICA BROCHURE
                  </button>
               </div>
               <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
                  <CourseImage
                    src={media.brochureDecor}
                    fallbackSrc={defaultCourseMedia(id ?? 'corso').brochureDecor}
                    className="w-full h-full object-cover"
                    alt=""
                  />
               </div>
            </div>
         </div>
      </section>

      {/* 4. SCEGLI TU QUANDO INIZIARE SECTION */}
      <section className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="bg-[#001D4B] rounded-[1.75rem] p-8 sm:p-10 lg:p-14 text-white text-center relative overflow-hidden">
               <h2 className={`${tSection} text-white mb-4`}>Scegli tu quando iniziare</h2>
               <p className="text-sm sm:text-base text-white/75 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                 Inizia gratis e senza impegno il processo di ammissione e poi valuta insieme a un Advisor la data di partenza migliore per te.
               </p>
               
               <div className="bg-white/5 border border-white/10 rounded-[1.25rem] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto mb-8 text-left">
                  <div className="text-left w-full">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/45 mb-5">Le classi di questo master partono di continuo: ecco le prossime</p>
                     <div className="flex flex-col md:flex-row md:items-center gap-12">
                        {(course.classDates || [{ date: course.summaryBox.dates, badge: "PROSSIMA EDIZIONE" }]).map((cd, i, arr) => (
                          <div key={i} className="contents">
                            {i > 0 && <div className="h-px w-full md:h-12 md:w-px bg-white/10 shrink-0"></div>}
                            <div className="flex-1">
                              <p className={`text-2xl sm:text-3xl font-black uppercase tracking-tighter ${i > 0 ? 'opacity-55' : ''}`}>{cd.date}</p>
                              {cd.badge && <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mt-2">{cd.badge}</p>}
                              {cd.note && <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 mt-2 italic">{cd.note}</p>}
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               
               <p className="text-xs sm:text-sm font-bold text-white/55">Vuoi parlare con noi? <a href="#" className="underline hover:text-white transition-colors">Scrivici</a></p>
            </div>
         </div>
      </section>

      {/* 5. COME FUNZIONA IL CORSO? SECTION */}
      <section id="metodo" className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-4`}>Come funziona il corso?</h2>
            <p className={`${tLead} mb-10 lg:mb-12 max-w-2xl`}>
              Il Master in {course.subtitle} è pensato per professionisti già impegnati: il carico settimanale è sostenibile, le sessioni sono organizzate in formula part-time e con recuperi quando serve. Ti consigliamo di partecipare live, ma puoi sempre rivedere le registrazioni in piattaforma.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-14 lg:mb-16">
               <div className="bg-[#F9FAFB] rounded-[1.75rem] p-6 sm:p-8 flex gap-5 items-start border border-gray-100">
                  <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center shrink-0">
                     <Video size={22} strokeWidth={2} />
                  </div>
                  <div>
                     <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mb-2 leading-snug">Lezioni in diretta</h3>
                     <p className={`${tBody}`}>
                       Segui le lezioni live in aula virtuale, interagendo con i trainer e i compagni di corso.
                     </p>
                  </div>
               </div>
               <div className="bg-[#F9FAFB] rounded-[1.75rem] p-6 sm:p-8 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex items-start gap-5 min-w-0">
                     <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-navy shadow-sm ring-1 ring-black/5">
                       <Clock size={22} strokeWidth={2} />
                     </span>
                     <div className="space-y-3 min-w-0">
                        {(course.sessionSchedule?.length
                          ? course.sessionSchedule
                          : [
                              { days: course.summaryBox.format, time: '' },
                            ]
                        ).map((s, i) => (
                          <p
                            key={i}
                            className={`${i === 0 ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} font-black uppercase tracking-tight text-brand-navy leading-snug`}
                          >
                            {s.days}
                          </p>
                        ))}
                     </div>
                  </div>
                  <div className="sm:text-right border-t sm:border-t-0 border-gray-200/80 pt-6 sm:pt-0 sm:pl-6 shrink-0">
                     {(course.sessionSchedule?.length ? course.sessionSchedule : [])
                       .filter((s) => s.time)
                       .map((s, i) => (
                         <p
                           key={i}
                           className={`${i === 0 ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} font-black uppercase tracking-tight text-brand-navy`}
                         >
                           {s.time}
                         </p>
                       ))}
                  </div>
               </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
               <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Flessibilità</h3>
                  <p className={tBody}>La modalità part-time è pensata per adattarsi ai tuoi ritmi, dandoti la libertà di seguire le lezioni online in diretta oppure di recuperarle con le registrazioni quando ti è più comodo.</p>
                  <ul className="space-y-3 pt-2">
                     <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                        <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Nessun obbligo di presenza
                     </li>
                     <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                        <CheckCircle2 size={16} className="text-[#008060] shrink-0 mt-0.5" /> Esercizi settimanali facoltativi
                     </li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-display font-black text-brand-accent uppercase tracking-tight">Impegno</h3>
                  <p className={tBody}>Ti mettiamo a disposizione strumenti, supporto e contenuti per aiutarti a raggiungere i tuoi obiettivi. Per ottenere il massimo dal percorso, però, serviranno costanza, motivazione e una buona dose di impegno settimanale.</p>
                  <ul className="space-y-3 pt-2">
                     <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0"></div> Progetto individuale
                     </li>
                     <li className="flex items-start gap-2.5 text-[11px] font-black text-brand-navy uppercase tracking-wide leading-snug">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/25 mt-1.5 shrink-0"></div> Esame finale
                     </li>
                  </ul>
               </div>
               <div className="bg-[#E6F7F5] rounded-[1.75rem] p-6 sm:p-8 space-y-4 flex flex-col h-full border border-[#D1EBE7]">
                  <h3 className="text-sm sm:text-base font-black text-brand-navy uppercase tracking-tight leading-snug">
                    {admissionBox.title}
                  </h3>
                  <p className="text-[#0F766E] text-sm leading-relaxed font-semibold">
                    {admissionBox.body}
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 6. LA MIGLIORE FORMAZIONE TECH SECTION (Pricing) */}
      <section id="prezzo" className="py-16 lg:py-20 bg-[#E6EFFF]/50">
         <div className="max-w-[941px] mx-auto px-4 text-center">
            <h2 className={`${tSection} mb-3`}>
               La migliore formazione professionale, <span className="text-brand-accent">accessibile</span>
            </h2>
            <p className="text-[10px] font-black text-brand-navy/45 uppercase tracking-[0.28em] mb-10 sm:mb-12">Scegli il metodo di pagamento per il tuo Master in {course.subtitle}</p>
            
            {/* Early Bird Toggle/Banner (Boolean-style; solo se configurato sul corso) */}
            {course.earlyBirdPromo ? (
              <div className="max-w-xl mx-auto mb-12">
                <div className="grid grid-cols-2 bg-white rounded-full p-1.5 shadow-[0_18px_50px_-32px_rgba(0,21,51,0.2)] border border-gray-100 overflow-hidden">
                  <div className="bg-[#008060] text-white rounded-full py-7 px-4 sm:px-6 flex flex-col items-center justify-center relative text-center">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#00664D] px-4 py-1 rounded-full text-[8px] font-black tracking-widest">
                      EARLY BIRD
                    </div>
                    <p className="text-[10px] font-black opacity-80 mb-2 uppercase tracking-widest">
                      ENTRO IL {course.earlyBirdPromo.pillDeadlineLabel ?? 'TERMINE PROMO'}
                    </p>
                    <p className="text-3xl sm:text-4xl font-black italic tracking-tighter leading-none">
                      {course.earlyBirdPromo.discountAmount ?? '800€'}{' '}
                      <span className="text-base sm:text-lg">di sconto</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center py-7 text-center px-3">
                    <p className="text-[10px] font-black text-brand-navy/30 mb-2 uppercase tracking-widest">DOPO LA SCADENZA</p>
                    <p className="text-2xl sm:text-3xl font-black text-brand-navy/25 italic tracking-tighter leading-none">Prezzo pieno</p>
                  </div>
                </div>
                <p className="mt-6 text-[9px] font-black text-brand-navy/35 uppercase tracking-[0.28em] inline-block border-t border-brand-navy/5 pt-3">
                  Sconti validi per contratti di iscrizione firmati entro le date indicate.
                </p>
              </div>
            ) : null}

            {/* Payment Tabs Table-like layout */}
            <div className="max-w-[941px] mx-auto bg-white rounded-[1.75rem] shadow-[0_22px_60px_-34px_rgba(0,21,51,0.2)] overflow-hidden border border-gray-100">
               <div className="flex overflow-x-auto border-b border-gray-100">
                  {course.fees.map((fee, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setPaymentTab(fee.title.toLowerCase())}
                      className={`min-w-[140px] flex-1 py-6 px-3 font-black text-[9px] uppercase tracking-[0.28em] transition-all relative whitespace-nowrap ${paymentTab === fee.title.toLowerCase() ? 'text-brand-navy' : 'text-brand-navy/20 hover:text-brand-navy'}`}
                    >
                      {fee.title}
                      {paymentTab === fee.title.toLowerCase() && <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-accent"></div>}
                    </button>
                  ))}
               </div>
               
               <div className="p-8 sm:p-10 lg:p-12 text-center">
                  {course.fees.map((fee, idx) => paymentTab === fee.title.toLowerCase() && (
                    <div key={idx} className="animate-in fade-in duration-500 max-w-xl mx-auto">
                       <h3 className="text-lg sm:text-xl font-black uppercase mb-6 tracking-tight">{fee.heading}</h3>
                       <p className={`${tBody} mb-10 text-center mx-auto`}>
                          {fee.desc}
                       </p>
                       <div className="mb-12">
                          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-navy/25 mb-4">
                            {fee.type === 'installment' || fee.type === 'zero-rate' || fee.type === 'after'
                              ? 'a partire da'
                              : 'prezzo'}
                          </p>
                          <div className="relative inline-block">
                             <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#008060] italic tracking-tighter leading-none mb-6">
                               {fee.price}{fee.priceLabel && <span className="text-xl sm:text-2xl lg:text-3xl">{fee.priceLabel}</span>}
                             </p>
                             {course.earlyBirdPromo ? (
                               <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-[#008060] text-white px-3 py-1.5 rounded-lg text-[9px] font-black whitespace-nowrap rotate-3 shadow-lg uppercase tracking-widest">
                                 EARLY BIRD
                               </div>
                             ) : null}
                          </div>
                          {fee.footnote && <p className="text-brand-navy/40 text-[10px] font-black uppercase tracking-[0.2em] mt-8">{fee.footnote}</p>}
                       </div>
                    </div>
                  ))}
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-brand-navy text-white px-10 py-4 rounded-md font-display font-black text-[11px] uppercase tracking-[0.28em] shadow-lg hover:bg-brand-accent transition-all active:scale-[0.98]">ISCRIVITI ORA</button>
                    <button className="border-2 border-brand-navy/10 text-brand-navy px-10 py-4 rounded-md font-display font-black text-[11px] uppercase tracking-[0.28em] hover:bg-gray-50 transition-all active:scale-[0.98]">PARLA CON NOI</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. TROVIAMO INSIEME SECTION */}
      <section className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="bg-[#E6EFFF] rounded-[1.75rem] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-accent/5">
                <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                   <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-[6px] border-white shadow-lg">
                      <CourseImage
                        src={media.advisor}
                        fallbackSrc={defaultCourseMedia(id ?? 'corso').advisor}
                        className="w-full h-full object-cover"
                        alt="Advisor"
                      />
                   </div>
                   <div>
                      <h3 className="text-lg sm:text-xl font-display font-black text-brand-navy uppercase tracking-tight mb-2 leading-snug">Troviamo insieme la soluzione giusta per te</h3>
                      <p className={`${tBody} max-w-md`}>Scopri i dettagli del percorso e parla con un Advisor Asterys Lab.</p>
                   </div>
                </div>
                <button className="bg-brand-navy text-white px-8 py-4 rounded-md font-display font-black text-[11px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all shadow-lg active:scale-[0.98] shrink-0 w-full sm:w-auto">SCRIVICI SU WHATSAPP</button>
            </div>
         </div>
      </section>

      {/* 8. CAREER CENTER SECTION */}
      <section id="career" className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4 text-center">
            <div className="mb-14 lg:mb-16">
               <h2 className={`${tSection} mb-4`}>
                  Career Center Asterys:{' '}
                  <span className="bg-brand-accent text-white px-3 py-1.5 inline-block -rotate-1 text-[0.85em] sm:text-[0.9em]">
                    la tua carriera al centro
                  </span>
               </h2>
               <p className={`${tBody} max-w-2xl mx-auto text-center`}>
                  {course.career.content}
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
               {course.career.points.map((p, i) => (
                 <div key={i} className="flex flex-col items-start p-6 sm:p-7 bg-white rounded-[1.25rem] shadow-[0_16px_44px_-30px_rgba(0,21,51,0.2)] border border-gray-100 h-full group hover:shadow-[0_22px_55px_-32px_rgba(0,21,51,0.22)] transition-all text-left">
                    <div className="w-11 h-11 bg-[#F9FAFB] rounded-full flex items-center justify-center text-brand-accent mb-6 ring-1 ring-black/5 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                       {i === 0 ? <UserCheck size={22} strokeWidth={2} /> : i === 1 ? <Briefcase size={22} strokeWidth={2} /> : i === 2 ? <TrendingUp size={22} strokeWidth={2} /> : <Users size={22} strokeWidth={2} />}
                    </div>
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight mb-3 leading-snug">{p.title}</h3>
                    <p className="text-brand-navy/50 text-xs font-medium leading-relaxed">{p.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. UN PERCORSO FORMATIVO COMPLETO SECTION */}
      <section className="py-16 lg:py-24 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-4`}>
              Un percorso formativo <span className="text-brand-accent underline decoration-4 underline-offset-4">completo</span>
            </h2>
            <p className={`${tLead} mb-12 lg:mb-14 max-w-2xl`}>
              Scegli la formazione di Asterys Lab: qualità ICF, metodo e un percorso davvero professionale. Affidati a <span className="text-brand-navy font-black">20+ anni di esperienza</span> e a un metodo collaudato, costruito per accompagnarti con serietà lungo tutto il percorso.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
               <div className="lg:col-span-2 space-y-6 lg:space-y-8">
                  <div className="bg-[#E6EFFF] rounded-[1.75rem] p-8 lg:p-10 lg:flex items-center gap-10 group overflow-hidden border border-brand-accent/5">
                     <div className="lg:w-1/2">
                        <h3 className="text-lg sm:text-xl font-display font-black mb-4 uppercase tracking-tight leading-snug">Formazione pratica e certificata ICF</h3>
                        <p className={tBody}>Competenze di coaching, intelligenza emotiva, approccio sistemico e sviluppo del business: un programma accreditato per trasformare le conoscenze in pratica professionale concreta.</p>
                     </div>
                     <div className="lg:w-1/2 mt-8 lg:mt-0 relative group-hover:scale-[1.02] transition-transform duration-700">
                        <CourseImage
                          src={media.completePractical}
                          fallbackSrc={defaultCourseMedia(id ?? 'corso').completePractical}
                          className="rounded-3xl shadow-[0_24px_70px_-28px_rgba(0,21,51,0.22)] w-full"
                          alt="Practical"
                        />
                     </div>
                  </div>
                  <div className="bg-[#F2F7FF] rounded-[1.75rem] p-8 lg:p-10 lg:flex items-center gap-10 group overflow-hidden border border-gray-100">
                     <div className="lg:w-1/2">
                        <h3 className="text-lg sm:text-xl font-display font-black mb-4 uppercase tracking-tight leading-snug">Piattaforma, registrazioni e supervisione</h3>
                        <p className={tBody}>
                          Hai perso una sessione? Nessun problema: in piattaforma trovi registrazioni, materiali e percorsi strutturati per recuperare con ordine. La supervisione con coach MCC è parte del metodo, per trasformare la pratica in competenza misurabile.
                        </p>
                     </div>
                     <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <CourseImage
                          src={media.completePlatform}
                          fallbackSrc={defaultCourseMedia(id ?? 'corso').completePlatform}
                          className="rounded-3xl shadow-[0_24px_70px_-28px_rgba(0,21,51,0.22)] w-full"
                          alt="Platform"
                        />
                     </div>
                  </div>
               </div>
               
               <div className="bg-[#001D4B] rounded-[1.75rem] p-8 sm:p-10 text-white relative overflow-hidden flex flex-col items-center text-center justify-between group min-h-[420px] lg:min-h-0">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-150 transition-transform duration-700">
                     <Zap size={150} />
                  </div>
                  <div className="relative z-10 w-full mt-10">
                     <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-10 mx-auto border border-white/10 shadow-xl">
                        <Play size={36} fill="currentColor" />
                     </div>
                     <h3 className="text-xl sm:text-2xl font-display font-black uppercase mb-6 tracking-tight leading-snug">Il coaching nella vita reale</h3>
                     <p className="text-white/55 text-sm sm:text-base font-medium leading-relaxed">Il coaching non resta in aula: lo applicherai sin dalla prima sessione, confrontandoti con situazioni reali, feedback diretti da coach MCC e casi d’uso che stanno cambiando il modo di lavorare con le persone.</p>
                  </div>
                  <div className="h-20"></div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. ACCELERA LA TUA CARRIERA SECTION */}
      <section className="py-16 lg:py-20 bg-white">
         <div className="max-w-[941px] mx-auto px-4">
            <div className="bg-[#1D3BB9] rounded-[1.75rem] p-10 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-[0_26px_70px_-34px_rgba(0,21,51,0.35)] group">
               <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase mb-6 tracking-tight leading-[1.05]">
                    Accelera la tua carriera: <span className="text-[#E2FF3B]">parti da qui</span>
                  </h2>
                  <p className="text-sm sm:text-base text-white/55 mb-10 font-medium max-w-md mx-auto leading-relaxed">Inizia il tuo processo di ammissione gratis e senza impegno.</p>
                  <button className="bg-[#E2FF3B] text-brand-navy px-10 py-4 rounded-md font-display font-black text-[11px] uppercase tracking-[0.28em] shadow-lg hover:bg-white transition-all active:scale-[0.98]">
                     INIZIA ORA
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 11. FAQs SECTION */}
      <section className="py-16 lg:py-20 bg-[#F9FAFB]/80">
         <div className="max-w-[941px] mx-auto px-4">
            <h2 className={`${tSection} mb-10 lg:mb-12`}>FAQs</h2>
            <div className="space-y-4">
               {course.faqs.map((faq, i) => (
                 <div key={i} className="bg-white rounded-3xl px-6 sm:px-10 border border-gray-100 shadow-[0_18px_50px_-32px_rgba(0,21,51,0.14)]">
                    <Accordion 
                     title={faq.q}
                     content={faq.a}
                     isOpen={openFaq === i}
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    />
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
}
