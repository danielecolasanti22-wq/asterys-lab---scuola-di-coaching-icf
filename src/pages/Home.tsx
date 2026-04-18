import { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Brain, 
  Building2, 
  Calendar, 
  Download, 
  Star,
  HelpCircle,
  Layout,
  Award,
  Globe,
  Handshake,
  TrendingUp,
  Zap,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-blue-soft text-brand-navy px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
            ISCRIZIONI APERTE - MASTER APCM
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-6 tracking-tight">
            Diventa un coach professionista con <span className="text-brand-accent italic underline decoration-brand-accent/30 underline-offset-8">eccellenza ICF</span>.
          </h1>
          <p className="text-lg text-brand-navy/70 mb-8 max-w-xl leading-relaxed">
            Asterys Lab è la scuola italiana dove integri intelligenza emotiva misurabile e metodo sistemico. Formiamo i leader del cambiamento umano con credenziali riconosciute in tutto il mondo.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "Ottieni credenziali ICF riconosciute a livello globale",
              "Competenze reali e misurabili (non solo teoria)",
              "Sviluppa il tuo business con il percorso Prosperous Coach",
              "Flessibilità: online e in presenza a Milano e Roma"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-brand-navy font-medium">
                <CheckCircle2 className="text-brand-accent shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">Prenota un colloquio gratuito</button>
            <button className="btn-secondary">Scarica il programma Master</button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Accreditamenti & Storia</p>
            <div className="flex flex-wrap gap-6 items-center opacity-60">
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                < Award size={24} />
                <span className="font-bold text-sm">ICF LEVEL 1 & 2</span>
              </div>
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                < Globe size={24} />
                <span className="font-bold text-sm">DAL 2001 IN ITALIA</span>
              </div>
              <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default">
                < Users size={24} />
                <span className="font-bold text-sm">ALUMNI COMMUNITY</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-[4/3] lg:aspect-square">
            <img 
              src="https://picsum.photos/seed/coaching/800/800" 
              alt="Scuola di Coaching ICF Milano e Roma" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-3">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl flex items-center gap-4 shadow-lg border border-white/20">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-navy">+3.000 Coach Formati</p>
                  <p className="text-[10px] text-gray-500">In tutta Italia e all'estero</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent rounded-full -z-10 opacity-10"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-navy rounded-[3rem] -z-10 opacity-5"></div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const stats = [
    { label: "Anni di esperienza", value: "20+" },
    { label: "Coach professionisti formati", value: "3.000+" },
    { label: "Livelli di accreditamento ICF", value: "L1 & L2" },
    { label: "Sedi principali", value: "MI, RM & Online" }
  ];

  return (
    <section className="bg-brand-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left border-l border-white/10 pl-6">
              <p className="text-white font-display font-bold text-3xl mb-1">{stat.value}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChoosePath = () => {
  const paths = [
    {
      title: "Voglio diventare coach",
      desc: "Il Master APCM è il percorso definitivo per ottenere credenziali ICF e iniziare una nuova carriera.",
      icon: <Users size={32} className="text-brand-accent" />,
      cta: "Diventa Coach"
    },
    {
      title: "Sono già un coach",
      desc: "Specializzati in Team Coaching Sistemico o approfondisci l'Intelligenza Emotiva.",
      icon: <TrendingUp size={32} className="text-brand-accent" />,
      cta: "Cresci Ora"
    },
    {
      title: "Sono HR o Manager",
      desc: "Porta la cultura del coaching in azienda e sviluppa leadership coach efficaci.",
      icon: <Brain size={32} className="text-brand-accent" />,
      cta: "Per Aziende"
    },
    {
      title: "Sviluppo Business",
      desc: "Impara a posizionarti sul mercato e trovare clienti con il programma Prosperous Coach.",
      icon: <Building2 size={32} className="text-brand-accent" />,
      cta: "Lancia Business"
    }
  ];

  return (
    <section id="percorsi" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl mb-4">Scegli il percorso giusto per te.</h2>
          <p className="text-brand-navy/60 max-w-2xl mx-auto">
            Dalla formazione iniziale alle specializzazioni avanzate, ti accompagniamo in ogni fase della tua evoluzione professionale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, i) => (
            <div key={i} className="card-boolean flex flex-col">
              <div className="w-16 h-16 bg-brand-blue-soft rounded-2xl flex items-center justify-center mb-6">
                {path.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-4">{path.title}</h3>
              <p className="text-brand-navy/70 text-sm mb-8 flex-grow leading-relaxed">
                {path.desc}
              </p>
              <button className="text-brand-navy font-bold flex items-center gap-2 group">
                {path.cta} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      title: "Esperienza & Storia",
      desc: "Nati nel 2001, siamo stati tra i primi a portare il coaching ICF in Italia. I nostri fondatori sono MCC di fama internazionale.",
      icon: <Award className="text-brand-navy" />
    },
    {
      title: "AI & Intelligenza Emotiva",
      desc: "L'unica scuola che integra la misurazione dell'Intelligenza Emotiva (Six Seconds) come cuore della trasformazione.",
      icon: <Zap className="text-brand-navy" />
    },
    {
      title: "Approccio Sistemico",
      desc: "Non guardiamo solo all'individuo, ma al sistema. Formiamo esperti in Systemic Team Coaching, la frontiera delle aziende.",
      icon: <Layout className="text-brand-navy" />
    },
    {
      title: "Supporto al Business",
      desc: "Non ti lasciamo solo con un certificato. Il programma Prosperous Coach ti insegna a costruire il tuo business di successo.",
      icon: <Handshake className="text-brand-navy" />
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-display font-bold text-4xl mb-6">Perché scegliere Asterys Lab?</h2>
          <p className="text-brand-navy/70 mb-10 leading-relaxed">
            Non siamo una "fabbrica di certificati". Siamo una comunità di apprendimento che crede nell'etica, nella profondità e nel potere trasformativo del coaching sistemico. Se tu cambi, il mondo cambia.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="space-y-3">
                <div className="w-12 h-12 bg-brand-blue-soft rounded-xl flex items-center justify-center">
                  {r.icon}
                </div>
                <h4 className="font-display font-bold text-lg">{r.title}</h4>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/lab/800/1000" 
              alt="Coaching Workshop Milano" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-brand-navy p-8 rounded-2xl text-white max-w-[280px] shadow-2xl border border-white/10">
            <Quote size={32} className="text-brand-accent mb-4 opacity-50" />
            <p className="text-sm italic font-medium leading-relaxed text-white/90">
              "In Asterys Lab ho trovato non solo competenze, ma una vera community di supporto che mi ha permesso di cambiare vita professionale."
            </p>
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="font-display font-bold text-xs uppercase tracking-widest text-brand-accent">Elena Monti</p>
              <p className="text-[10px] text-white/50 uppercase">Coach Professionista PCC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseGrid = () => {
  const courses = [
    {
      type: "MASTER",
      title: "Accredited Professional Coaching Mastery (APCM)",
      desc: "Il percorso completo per diventare coach professionista accreditato ICF Level 1 & 2.",
      duration: "150 ore - Online/Presenza",
      next: "Maggio 2026",
      img: "https://picsum.photos/seed/master/600/400"
    },
    {
      type: "AVANZATO",
      title: "Systemic Team Coaching Master",
      desc: "Sviluppa le competenze per guidare i team verso l'eccellenza attraverso l'approccio sistemico.",
      duration: "60 ore - Online",
      next: "Giugno 2026",
      img: "https://picsum.photos/seed/team/600/400"
    },
    {
      type: "SHORT",
      title: "Emotional Intelligence Workout (EIW)",
      desc: "Allenare l'intelligenza emotiva con il metodo Six Seconds per coach, manager e HR.",
      duration: "24 ore - Online",
      next: "Settembre 2026",
      img: "https://picsum.photos/seed/ei/600/400"
    },
    {
      type: "BUSINESS",
      title: "Prosperous Coach Program",
      desc: "Strategie pratiche di marketing e posizionamento per costruire un business di coaching sostenibile.",
      duration: "3 mesi - Mentoring",
      next: "Inizio libero",
      img: "https://picsum.photos/seed/business/600/400"
    }
  ];

  return (
    <section id="calendario" className="section-padding bg-brand-blue-soft/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-brand-accent/20 text-brand-accent text-[10px] font-bold px-2 py-0.5 rounded">GARANZIA SODDISFATTI O RIMBORSATI</span>
              <span className="bg-brand-navy text-white text-[10px] font-bold px-2 py-0.5 rounded">RATE FINO A 24 MESI</span>
            </div>
            <h2 className="font-display font-bold text-4xl mb-4">Percorsi principali in evidenza.</h2>
            <p className="text-brand-navy/60 max-w-xl">
              Dall'orientamento al business: scopri come trasformare la tua visione in realtà.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap">Vedi Tutti i Corsi</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((c, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-soft hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="sm:w-2/5 relative">
                <img src={c.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt={c.title} />
                <div className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black tracking-widest text-brand-navy">
                  {c.type}
                </div>
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col">
                <h3 className="font-display font-bold text-xl mb-3 leading-tight uppercase">{c.title}</h3>
                <p className="text-sm text-brand-navy/60 mb-6 flex-grow leading-relaxed">{c.desc}</p>
                <div className="space-y-2 mb-6 text-xs font-bold">
                  <div className="flex items-center gap-2 text-brand-navy/40">
                    <Calendar size={14} /> <span>Prossima edizione: {c.next}</span>
                  </div>
                  <div className="flex items-center gap-2 text-brand-accent">
                    <Layout size={14} /> <span>{c.duration}</span>
                  </div>
                </div>
                <button className="btn-primary py-3 text-sm">Scopri il programma</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EmotionalIntelligence = () => {
  return (
    <section id="ie" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto bg-brand-navy rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 -mr-32"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-8 leading-tight">
              Intelligenza Emotiva nell'era dell'AI.
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                In un mondo sempre più automatizzato, l'Intelligenza Emotiva è la competenza che fa la differenza. Non è una teoria astratta: è un'abilità pratica e misurabile.
              </p>
              <p>
                Asterys Lab è stata la prima scuola in Italia a utilizzare gli strumenti <span className="text-brand-accent font-bold">Six Seconds</span>. Integriamo il SEI Assessment in ogni percorso per offrirti dati reali sulla tua crescita.
              </p>
              <p>
                Perché non basta essere "bravi", occorre essere emotivamente intelligenti per guidare il cambiamento altrui.
              </p>
            </div>
            <button className="mt-10 btn-primary bg-white text-brand-navy hover:bg-white/90">Scarica Whitepaper IE</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[ 
              { label: "Misurabile", val: "100%" },
              { label: "Scientifico", val: "Metodo SEI" },
              { label: "Partner", val: "Six Seconds" },
              { label: "Impatto", val: "Garantito" }
            ].map((box, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                <p className="text-brand-accent font-display font-bold text-2xl mb-2">{box.val}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{box.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    { title: "Colloquio orientativo", desc: "Definiamo insieme il tuo obiettivo e capiamo se siamo la scuola giusta per te." },
    { title: "Formazione esperienziale", desc: "Lezioni live e practice lab dove apprendi il metodo sporcandoti le mani." },
    { title: "Pratica supervisionata", desc: "Ore di coaching reale con feedback dei nostri Mentor Coach (MCC/PCC)." },
    { title: "Lancio del business", desc: "Accedi alla community e trasforma la tua passione in una professione redditizia." }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl mb-4">Come funziona il tuo percorso.</h2>
          <p className="text-brand-navy/60">Quattro step per trasformare il tuo approccio e la tua carriera.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-brand-blue-soft -z-0"></div>
          {steps.map((step, i) => (
            <div key={i} className="text-center relative z-10">
              <div className="w-12 h-12 bg-brand-blue-soft text-brand-navy rounded-full flex items-center justify-center font-black mx-auto mb-6 shadow-sm">
                {i + 1}
              </div>
              <h4 className="font-display font-bold text-lg mb-3 tracking-tight">{step.title}</h4>
              <p className="text-sm text-brand-navy/60 leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="btn-primary">Inizia oggi il primo step</button>
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  return (
    <section className="section-padding bg-brand-blue-soft">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6">Prova Asterys Lab gratis.</h2>
          <p className="text-brand-navy/70 text-lg mb-8">
            Scarica la nostra guida completa: <strong>"Come diventare coach professionista in Italia: 5 errori da evitare e 3 passi fondamentali."</strong> Una risorsa gratuita per orientarti nel mondo ICF.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-brand-accent" size={20} /> Nessun impegno</li>
            <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-brand-accent" size={20} /> Roadmap completa verso la credenziale</li>
            <li className="flex items-center gap-3 font-bold"><CheckCircle2 className="text-brand-accent" size={20} /> Bonus: mini-test intelligenza emotiva</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded-[2rem] shadow-2xl">
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" className="w-full px-6 py-4 rounded-xl border-gray-200 outline-none focus:border-brand-navy transition-all bg-gray-50 font-medium" />
              <input type="text" placeholder="Cognome" className="w-full px-6 py-4 rounded-xl border-gray-200 outline-none focus:border-brand-navy transition-all bg-gray-50 font-medium" />
            </div>
            <input type="email" placeholder="Email professionale" className="w-full px-6 py-4 rounded-xl border-gray-200 outline-none focus:border-brand-navy transition-all bg-gray-50 font-medium" />
            <select className="w-full px-6 py-4 rounded-xl border-gray-200 outline-none focus:border-brand-navy transition-all bg-gray-50 font-medium appearance-none">
              <option>Sono interessato a...</option>
              <option>Diventare Coach</option>
              <option>Specializzazioni (Team/IE)</option>
              <option>Corporate/Aziende</option>
            </select>
            <button className="btn-primary w-full">
              Invia e scarica la guida <Download size={20} />
            </button>
            <p className="text-[10px] text-gray-400 text-center">Trattiamo i tuoi dati con rispetto. Privacy Policy dedicata.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "A chi sono rivolti i percorsi di coaching?", a: "I nostri corsi sono ideali sia per chi parte da zero e vuole cambiare carriera, sia per manager, HR e professionisti che desiderano integrare il coaching nel loro stile di leadership." },
    { q: "Devo essere psicologo per iscrivermi?", a: "No, il coaching è una professione distinta dalla psicologia e dalla terapia. Non è richiesta una laurea specifica, ma è fondamentale l'impegno etico e la voglia di lavorare su di sé." },
    { q: "Che credenziali ICF posso ottenere?", a: "I nostri master sono accreditati Level 1 e Level 2, il che significa che ti preparano direttamente per le credenziali ACC (Associate) e PCC (Professional) di ICF." },
    { q: "Come funziona la rateizzazione?", a: "Tutti i nostri percorsi principali sono rateizzabili fino a 24 mesi senza costi nascosti. Vogliamo che la formazione sia accessibile a chiunque abbia talento e voglia di crescere." },
  ];

  return (
    <section id="faq" className="section-padding bg-brand-blue-soft/20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display font-bold text-4xl mb-12 text-center">Domande frequenti.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button 
                className="w-full p-6 text-left flex items-center justify-between font-bold text-brand-navy hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                {faq.q}
                <HelpCircle className={`text-brand-accent transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-navy/70 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ChoosePath />
      <WhyUs />
      <CourseGrid />
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Cosa dicono i nostri coach.</h2>
            <p className="text-brand-navy/60">Storie reali di trasformazione personale e professionale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Marco R.", role: "PCC Coach & Executive", text: "In Asterys Lab non ho imparato solo a fare coaching, ho imparato a guardare ai sistemi e all'intelligenza emotiva come leve di business." },
              { name: "Sara L.", role: "HR Director", text: "Il Master APCM ha cambiato il mio modo di gestire le persone. Una formazione intensa, seria e profondamente umana." },
              { name: "Giorgio B.", role: "Full-time Coach", text: "Grazie a Prosperous Coach sono passato da dipendente a libera professione in meno di 6 mesi. La community è formidabile." }
            ].map((t, i) => (
              <div key={i} className="card-boolean">
                <div className="flex gap-1 mb-6">
                 {[1,2,3,4,5].map(j => <Star key={j} size={16} fill="currentColor" className="text-brand-accent opacity-40" />)}
                </div>
                <p className="text-brand-navy/80 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/coach${i}/100/100`} className="w-12 h-12 rounded-full grayscale opacity-80" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-display font-bold text-sm uppercase tracking-tight">{t.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EmotionalIntelligence />
      <Timeline />
      <LeadMagnet />
      <FAQ />
    </>
  );
}
