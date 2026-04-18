import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Star,
  ChevronDown,
  Clock,
  Video,
  UserCheck,
  Briefcase,
  Play,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { coursesContent, CourseData } from '../constants/coursesContent';

const Accordion = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border-b border-gray-100">
    <button 
      onClick={onClick}
      className="w-full py-6 text-left flex items-center justify-between group"
    >
      <span className="text-lg font-black text-brand-navy group-hover:text-brand-accent transition-colors tracking-tight uppercase italic">{title}</span>
      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown size={20} className={isOpen ? 'text-brand-accent' : 'text-gray-300'} />
      </div>
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

  return (
    <div className="bg-white font-sans text-brand-navy antialiased overflow-x-hidden">
      
      {/* 0. ANNOUNCEMENT BAR */}
      <div className="fixed top-0 left-0 right-0 h-10 bg-[#001D4B] text-white flex items-center justify-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] z-[60] px-3 sm:px-4 overflow-x-auto">
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
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 lg:gap-16 items-center min-h-[500px] lg:min-h-[550px]">
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
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-auto object-contain scale-100 lg:origin-bottom-right" 
                  alt={course.title} 
                />
             </div>
          </div>
        </div>
      </section>

      {/* 2. LA FIGURA CENTRALE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="rounded-[3rem] overflow-hidden shadow-2xl overflow-hidden">
                <img src={`https://picsum.photos/seed/${id}central/800/600`} className="w-full h-full object-cover aspect-video lg:aspect-square" alt="Core Role" />
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
      <section id="programma" className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl lg:text-7xl font-display font-black uppercase tracking-tighter mb-6 italic">Programma del Master</h2>
            <p className="text-lg text-brand-navy/60 font-medium max-w-4xl mb-16 leading-relaxed">
              {programIntro}
            </p>
            
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 flex flex-col lg:flex-row shadow-sm min-h-[600px]">
               {/* Left Sidebar Tabs */}
               <div className="lg:w-1/3 bg-[#F9FAFB] border-r border-gray-100 p-8 space-y-4">
                  {course.structure.modules.map((m, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveModule(i)}
                      className={`w-full text-left px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-tight transition-all flex items-center justify-between group ${activeModule === i ? 'bg-brand-navy text-white shadow-xl lg:translate-x-1' : 'text-brand-navy/40 hover:bg-gray-100 hover:text-brand-navy'}`}
                    >
                      <span>{m.title}</span>
                      <ArrowRight size={18} className={`transition-transform ${activeModule === i ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
               </div>
               
               {/* Right Content */}
               <div className="lg:w-2/3 p-12 lg:p-20 bg-white relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModule}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 h-full flex flex-col"
                    >
                       <h3 className="text-3xl lg:text-5xl font-display font-black text-brand-navy mb-8 uppercase italic tracking-tighter">
                          {course.structure.modules[activeModule].title}
                       </h3>
                       <p className="text-xl text-brand-navy/60 leading-relaxed font-medium italic mb-12">
                          {course.structure.modules[activeModule].desc}
                       </p>
                       
                       <div className="mt-auto pt-10 border-t border-gray-100">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/35 mb-4">In sintesi</p>
                          <div className="flex flex-wrap gap-2">
                            {moduleTags.map((tag, i) => (
                              <span
                                key={`${activeModule}-${i}`}
                                className="inline-flex items-center rounded-md border border-brand-navy/10 bg-[#F9FAFB] px-3 py-2 text-[11px] font-bold text-brand-navy/80"
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
            <div className="mt-12 bg-[#0047FF] rounded-[2.5rem] p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group overflow-hidden relative">
               <div className="relative z-10">
                  <h3 className="text-3xl lg:text-5xl font-display font-black text-white uppercase italic tracking-tighter leading-none mb-4">
                    Vuoi scoprire il programma<br />settimana per settimana?
                  </h3>
                  <button className="bg-[#E2FF3B] text-brand-navy px-12 py-5 rounded-md font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all mt-6">
                     SCARICA BROCHURE
                  </button>
               </div>
               <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
                  <img src="https://picsum.photos/seed/brochure/800/400" className="w-full h-full object-cover" alt="Brochure" />
               </div>
            </div>
         </div>
      </section>

      {/* 4. SCEGLI TU QUANDO INIZIARE SECTION */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#001D4B] rounded-[3rem] p-12 lg:p-24 text-white text-center relative overflow-hidden">
               <h2 className="text-4xl lg:text-7xl font-display font-black uppercase mb-10 tracking-tighter italic">Scegli tu quando iniziare</h2>
               <p className="text-lg text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed italic">
                 Inizia gratis e senza impegno il processo di ammissione e poi valuta insieme a un Advisor la data di partenza migliore per te.
               </p>
               
               <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-4xl mx-auto mb-12">
                  <div className="text-left w-full">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-8 italic">Le classi di questo master partono di continuo: ecco le prossime</p>
                     <div className="flex flex-col md:flex-row md:items-center gap-12">
                        {(course.classDates || [{ date: course.summaryBox.dates, badge: "PROSSIMA EDIZIONE" }]).map((cd, i, arr) => (
                          <div key={i} className="contents">
                            {i > 0 && <div className="h-px w-full md:h-12 md:w-px bg-white/10 shrink-0"></div>}
                            <div className="flex-1">
                              <p className={`text-3xl font-black uppercase italic tracking-tighter ${i > 0 ? 'opacity-50' : ''}`}>{cd.date}</p>
                              {cd.badge && <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent mt-2">{cd.badge}</p>}
                              {cd.note && <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 mt-2 italic">{cd.note}</p>}
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               
               <p className="text-sm font-bold opacity-60 italic">Vuoi parlare con noi? <a href="#" className="underline hover:text-white transition-colors">Scrivici</a></p>
            </div>
         </div>
      </section>

      {/* 5. COME FUNZIONA IL CORSO? SECTION */}
      <section id="metodo" className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl lg:text-7xl font-display font-black uppercase tracking-tighter mb-8 italic leading-none">Come funziona il corso?</h2>
            <p className="text-lg text-brand-navy/60 font-medium max-w-4xl mb-16 leading-relaxed">
              Il Master in {course.subtitle} è pensato per professionisti già impegnati: il carico settimanale è sostenibile, le sessioni sono organizzate in formula part-time e con recuperi quando serve. Ti consigliamo di partecipare live, ma puoi sempre rivedere le registrazioni in piattaforma.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-24">
               <div className="bg-[#F9FAFB] rounded-[2.5rem] p-10 lg:p-12 flex gap-8 items-start border border-gray-100">
                  <div className="w-14 h-14 bg-brand-navy text-white rounded-full flex items-center justify-center shrink-0">
                     <Video size={26} strokeWidth={1.75} />
                  </div>
                  <div>
                     <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight mb-3 italic leading-tight">Lezioni in diretta</h3>
                     <p className="text-brand-navy/60 font-medium leading-relaxed">
                       Segui le lezioni live in aula virtuale, interagendo con i trainer e i compagni di corso.
                     </p>
                  </div>
               </div>
               <div className="bg-[#F9FAFB] rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                  <div className="flex items-start gap-5 min-w-0">
                     <Clock size={30} className="text-brand-navy/25 shrink-0 mt-1" strokeWidth={1.75} />
                     <div className="space-y-3 min-w-0">
                        {(course.sessionSchedule?.length
                          ? course.sessionSchedule
                          : [
                              { days: course.summaryBox.format, time: '' },
                            ]
                        ).map((s, i) => (
                          <p
                            key={i}
                            className={`${i === 0 ? 'text-base lg:text-lg' : 'text-sm lg:text-base'} font-black uppercase tracking-tight text-brand-navy`}
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
                           className={`${i === 0 ? 'text-base lg:text-lg' : 'text-sm lg:text-base'} font-black uppercase tracking-tight text-brand-navy`}
                         >
                           {s.time}
                         </p>
                       ))}
                  </div>
               </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
               <div className="space-y-8">
                  <h3 className="text-2xl font-display font-black text-brand-accent uppercase italic tracking-tighter">Flessibilità</h3>
                  <p className="text-brand-navy/60 text-base leading-relaxed font-medium italic">La modalità part-time è pensata per adattarsi ai tuoi ritmi, dandoti la libertà di seguire le lezioni online in diretta oppure di recuperarle con le registrazioni quando ti è più comodo.</p>
                  <ul className="space-y-4 pt-4">
                     <li className="flex items-center gap-3 text-xs font-black text-brand-navy uppercase tracking-widest italic">
                        <CheckCircle2 size={18} className="text-[#008060]" /> Nessun obbligo di presenza
                     </li>
                     <li className="flex items-center gap-3 text-xs font-black text-brand-navy uppercase tracking-widest italic">
                        <CheckCircle2 size={18} className="text-[#008060]" /> Esercizi settimanali facoltativi
                     </li>
                  </ul>
               </div>
               <div className="space-y-8">
                  <h3 className="text-2xl font-display font-black text-brand-accent uppercase italic tracking-tighter">Impegno</h3>
                  <p className="text-brand-navy/60 text-base leading-relaxed font-medium italic">Ti mettiamo a disposizione strumenti, supporto e contenuti per aiutarti a raggiungere i tuoi obiettivi. Per ottenere il massimo dal percorso, però, serviranno costanza, motivazione e una buona dose di impegno settimanale.</p>
                  <ul className="space-y-4 pt-4">
                     <li className="flex items-center gap-3 text-xs font-black text-brand-navy uppercase tracking-widest italic">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/20"></div> Progetto individuale
                     </li>
                     <li className="flex items-center gap-3 text-xs font-black text-brand-navy uppercase tracking-widest italic">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/20"></div> Esame finale
                     </li>
                  </ul>
               </div>
               <div className="bg-[#E6F7F5] rounded-[3rem] p-10 space-y-6 flex flex-col h-full border border-[#D1EBE7]">
                  <h3 className="text-xl font-black text-brand-navy uppercase italic tracking-tight leading-snug">
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
      <section id="prezzo" className="py-32 bg-[#E6EFFF]/50">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-8xl font-display font-black mb-10 tracking-tighter uppercase leading-[0.85] italic">
               La migliore formazione professionale,<br/><span className="text-brand-accent">accessibile</span>
            </h2>
            <p className="text-[10px] font-black text-brand-navy/40 uppercase tracking-[0.3em] mb-20 italic">Scegli il metodo di pagamento per il tuo Master in {course.subtitle}</p>
            
            {/* Early Bird Toggle/Banner (Boolean-style; solo se configurato sul corso) */}
            {course.earlyBirdPromo ? (
              <div className="max-w-3xl mx-auto mb-20">
                <div className="grid grid-cols-2 bg-white rounded-full p-2 shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-[#008060] text-white rounded-full py-10 px-6 sm:px-8 flex flex-col items-center justify-center relative text-center">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#00664D] px-4 py-1 rounded-full text-[8px] font-black tracking-widest">
                      EARLY BIRD
                    </div>
                    <p className="text-[10px] font-black opacity-80 mb-2 uppercase tracking-widest">
                      ENTRO IL {course.earlyBirdPromo.pillDeadlineLabel ?? 'TERMINE PROMO'}
                    </p>
                    <p className="text-4xl sm:text-5xl font-black italic tracking-tighter leading-none">
                      {course.earlyBirdPromo.discountAmount ?? '800€'}{' '}
                      <span className="text-lg sm:text-xl">di sconto</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center py-10 text-center px-4">
                    <p className="text-[10px] font-black text-brand-navy/30 mb-2 uppercase tracking-widest">DOPO LA SCADENZA</p>
                    <p className="text-4xl sm:text-5xl font-black text-brand-navy/20 italic tracking-tighter leading-none">Prezzo pieno</p>
                  </div>
                </div>
                <p className="mt-8 text-[9px] font-black text-brand-navy/30 uppercase tracking-[0.3em] inline-block border-t border-brand-navy/5 pt-4">
                  Sconti validi per contratti di iscrizione firmati entro le date indicate.
                </p>
              </div>
            ) : null}

            {/* Payment Tabs Table-like layout */}
            <div className="max-w-5xl mx-auto bg-white rounded-[4rem] shadow-4xl overflow-hidden border border-gray-100">
               <div className="flex border-b border-gray-100">
                  {course.fees.map((fee, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setPaymentTab(fee.title.toLowerCase())}
                      className={`flex-1 py-10 px-4 font-black text-[10px] uppercase tracking-[0.3em] transition-all relative ${paymentTab === fee.title.toLowerCase() ? 'text-brand-navy' : 'text-brand-navy/20 hover:text-brand-navy'}`}
                    >
                      {fee.title}
                      {paymentTab === fee.title.toLowerCase() && <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-accent"></div>}
                    </button>
                  ))}
               </div>
               
               <div className="p-16 lg:p-24 text-center">
                  {course.fees.map((fee, idx) => paymentTab === fee.title.toLowerCase() && (
                    <div key={idx} className="animate-in fade-in duration-500 max-w-2xl mx-auto">
                       <h3 className="text-3xl font-black uppercase mb-10 italic tracking-tighter">{fee.heading}</h3>
                       <p className="text-lg text-brand-navy/60 font-medium leading-relaxed italic mb-16">
                          {fee.desc}
                       </p>
                       <div className="mb-20">
                          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-navy/20 mb-8 italic">
                            {fee.type === 'installment' || fee.type === 'zero-rate' || fee.type === 'after'
                              ? 'a partire da'
                              : 'prezzo'}
                          </p>
                          <div className="relative inline-block">
                             <p className="text-5xl lg:text-8xl font-display font-black text-[#008060] italic tracking-tighter leading-none mb-10">
                               {fee.price}{fee.priceLabel && <span className="text-3xl lg:text-4xl">{fee.priceLabel}</span>}
                             </p>
                             {course.earlyBirdPromo ? (
                               <div className="absolute -top-10 -right-24 bg-[#008060] text-white px-4 py-2 rounded-xl text-[10px] font-black whitespace-nowrap rotate-6 shadow-xl uppercase tracking-widest">
                                 EARLY BIRD
                               </div>
                             ) : null}
                          </div>
                          {fee.footnote && <p className="text-brand-navy/40 text-[10px] font-black uppercase tracking-[0.2em] mt-8">{fee.footnote}</p>}
                       </div>
                    </div>
                  ))}
                  
                  <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="bg-brand-navy text-white px-16 py-6 rounded-md font-display font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-brand-accent transition-all active:scale-95">ISCRIVITI ORA</button>
                    <button className="border-2 border-brand-navy/10 text-brand-navy px-16 py-6 rounded-md font-display font-black text-xs uppercase tracking-[0.3em] hover:bg-gray-50 transition-all active:scale-95">PARLA CON NOI</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. TROVIAMO INSIEME SECTION */}
      <section className="py-32 bg-white">
         <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#E6EFFF] rounded-[4rem] p-12 lg:px-24 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-brand-accent/5">
                <div className="flex items-center gap-12">
                   <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-8 border-white shadow-2xl">
                      <img src="https://picsum.photos/seed/advisor/400/400" className="w-full h-full object-cover" alt="Advisor" />
                   </div>
                   <div className="text-left">
                      <h3 className="text-3xl font-display font-black text-brand-navy uppercase tracking-tighter italic mb-3 leading-tight">Troviamo insieme la soluzione giusta per te</h3>
                      <p className="text-brand-navy/60 font-medium text-lg leading-relaxed italic">Scopri i dettagli del percorso e parla con un Advisor Asterys Lab.</p>
                   </div>
                </div>
                <button className="bg-brand-navy text-white px-12 py-6 rounded-md font-display font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-accent transition-all shadow-xl active:scale-95 shrink-0">SCRIVICI SU WHATSAPP</button>
            </div>
         </div>
      </section>

      {/* 8. CAREER CENTER SECTION */}
      <section id="career" className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-24">
               <h2 className="text-4xl lg:text-9xl font-display font-black leading-[0.85] mb-10 text-brand-navy tracking-tighter uppercase relative z-10 italic">
                  Career Center Asterys:<br/><span className="bg-brand-accent text-white px-8 py-2 inline-block -rotate-1">la tua carriera al centro</span>
               </h2>
               <p className="text-xl text-brand-navy/70 font-medium max-w-4xl mx-auto italic leading-relaxed py-10 opacity-60">
                  {course.career.content}
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {course.career.points.map((p, i) => (
                 <div key={i} className="flex flex-col items-start p-12 bg-white rounded-[2rem] shadow-soft border border-gray-50 h-full group hover:shadow-2xl transition-all text-left">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-brand-accent mb-10 group-hover:bg-brand-navy group-hover:text-white transition-all transform group-hover:rotate-6">
                       {i === 0 ? <UserCheck size={28} /> : i === 1 ? <Briefcase size={28} /> : i === 2 ? <TrendingUp size={28} /> : <Users size={28} />}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-6 italic leading-tight">{p.title}</h3>
                    <p className="text-brand-navy/40 text-xs font-medium leading-relaxed italic">{p.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. UN PERCORSO FORMATIVO COMPLETO SECTION */}
      <section className="py-40 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl lg:text-8xl font-display font-black uppercase tracking-tighter mb-10 italic leading-[0.85]">Un percorso formativo <span className="text-brand-accent underline decoration-8 underline-offset-8">completo</span></h2>
            <p className="text-xl text-brand-navy/40 font-medium max-w-4xl mb-24 italic leading-relaxed">
              Scegli la formazione di Asterys Lab: qualità ICF, metodo e un percorso davvero professionale. Affidati a <span className="text-brand-navy font-black">20+ anni di esperienza</span> e a un metodo collaudato, costruito per accompagnarti con serietà lungo tutto il percorso.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-10">
               <div className="lg:col-span-2 space-y-10">
                  <div className="bg-[#E6EFFF] rounded-[3.5rem] p-16 lg:flex items-center gap-16 group overflow-hidden border border-brand-accent/5">
                     <div className="lg:w-1/2">
                        <h3 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter italic leading-none">Formazione pratica e certificata ICF</h3>
                        <p className="text-brand-navy/60 text-base font-medium leading-relaxed italic">Competenze di coaching, intelligenza emotiva, approccio sistemico e sviluppo del business: un programma accreditato per trasformare le conoscenze in pratica professionale concreta.</p>
                     </div>
                     <div className="lg:w-1/2 mt-12 lg:mt-0 relative group-hover:scale-105 transition-transform duration-700">
                        <img src={`https://picsum.photos/seed/${id}prac/800/600`} className="rounded-3xl shadow-4xl w-full" alt="Practical" />
                     </div>
                  </div>
                  <div className="bg-[#F2F7FF] rounded-[3.5rem] p-16 lg:flex items-center gap-16 group overflow-hidden border border-gray-100">
                     <div className="lg:w-1/2">
                        <h3 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter italic leading-none">Piattaforma, registrazioni e supervisione</h3>
                        <p className="text-brand-navy/60 text-base font-medium leading-relaxed italic">
                          Hai perso una sessione? Nessun problema: in piattaforma trovi registrazioni, materiali e percorsi strutturati per recuperare con ordine. La supervisione con coach MCC è parte del metodo, per trasformare la pratica in competenza misurabile.
                        </p>
                     </div>
                     <div className="lg:w-1/2 mt-12 lg:mt-0">
                        <img src={`https://picsum.photos/seed/${id}plat/800/600`} className="rounded-3xl shadow-4xl w-full" alt="Platform" />
                     </div>
                  </div>
               </div>
               
               <div className="bg-[#001D4B] rounded-[4rem] p-16 text-white relative overflow-hidden flex flex-col items-center text-center justify-between group">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-150 transition-transform duration-700">
                     <Zap size={150} />
                  </div>
                  <div className="relative z-10 w-full mt-10">
                     <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-16 mx-auto border border-white/10 shadow-2xl">
                        <Play size={48} fill="currentColor" />
                     </div>
                     <h3 className="text-4xl font-display font-black uppercase mb-10 italic tracking-tighter leading-none">Il coaching nella vita reale</h3>
                     <p className="text-white/40 text-base font-medium leading-relaxed italic">Il coaching non resta in aula: lo applicherai sin dalla prima sessione, confrontandoti con situazioni reali, feedback diretti da coach MCC e casi d’uso che stanno cambiando il modo di lavorare con le persone.</p>
                  </div>
                  <div className="h-20"></div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. ACCELERA LA TUA CARRIERA SECTION */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#1D3BB9] rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden shadow-4xl group">
               <div className="relative z-10">
                  <h2 className="text-5xl lg:text-[140px] font-display font-black uppercase mb-12 tracking-[calc(-0.02em)] leading-[0.85] italic">Accelera la tua<br />carriera: <span className="text-brand-accent">parti da qui</span></h2>
                  <p className="text-xl text-white/40 mb-20 font-medium max-w-xl mx-auto italic leading-relaxed">Inizia il tuo processo di ammissione gratis e senza impegno.</p>
                  <button className="bg-[#E2FF3B] text-brand-navy px-20 py-8 rounded-md font-display font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:bg-white transition-all active:scale-95">
                     INIZIA ORA
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 11. FAQs SECTION */}
      <section className="py-40 bg-[#F9FAFB]/80">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-6xl font-display font-black uppercase text-brand-navy mb-20 italic tracking-tighter">FAQs</h2>
            <div className="space-y-4">
               {course.faqs.map((faq, i) => (
                 <div key={i} className="bg-white rounded-3xl px-10 border border-gray-100 shadow-sm">
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
