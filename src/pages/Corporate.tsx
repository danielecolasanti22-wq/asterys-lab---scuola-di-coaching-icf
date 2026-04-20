import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Laptop,
  Rocket,
  Star,
  UserRound,
} from 'lucide-react';

const partnerLogos = ['Wikicasa', 'Zanichelli', 'Accenture', 'WEROAD', 'Experis', 'TeamSystem', 'NTT'];

const aiAdoptionPoints = [
  'Definisci una roadmap chiara per innovare l\'azienda',
  'Formazione AI per Sales, Marketing e team tech',
  'Integriamo l\'AI nei processi aziendali già esistenti',
];

const formazioneTechPoints = [
  'Impara da professionisti del settore con lezioni in diretta',
  'Piattaforma AI proprietaria per ripasso e accesso al materiale',
  'Certificazione delle competenze tramite project work o esame',
];

const recruitingTechPoints = [
  'Incontra talenti dal nostro network proprietario',
  'Chiudi lo skill gap del tuo team con formazione ad-hoc',
  'Risparmia tempo e risorse per i tuoi progetti aziendali',
];

export default function Corporate() {
  return (
    <div className="bg-[#F8FAFF] text-brand-navy">
      {/* HERO */}
      <section className="bg-[#001D4B] text-white">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-[6.25rem] leading-[0.92] tracking-tight max-w-[620px]">
              Fai crescere il business con il coaching
            </h1>
            <p className="mt-6 text-white/75 text-base sm:text-lg max-w-[540px] leading-relaxed">
              Programmi corporate su AI, formazione e recruiting: tutto quello che serve al tuo team
              per emergere in un mercato che cambia velocemente.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 bg-[#1D3BB9] hover:bg-[#2748d1] text-white rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition-colors">
              Parla con noi
            </button>
          </div>

          <div className="relative h-[300px] sm:h-[360px] lg:h-[390px]">
            <img
              src="https://picsum.photos/seed/corporate-hero-main/520/360"
              alt="Team corporate Asterys"
              className="absolute top-4 right-8 w-[250px] sm:w-[300px] rounded-2xl shadow-2xl object-cover"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://picsum.photos/seed/corporate-hero-side/220/160"
              alt="Coach in sessione"
              className="absolute bottom-10 right-0 w-[160px] sm:w-[190px] rounded-xl shadow-2xl object-cover border-4 border-[#001D4B]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-white py-12 lg:py-16 border-b border-[#E5ECFF]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-center mb-10">
            Asterys, il partner coaching per la tua azienda
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-[#1D62E8] text-white rounded-3xl p-7 rotate-[-2deg] shadow-lg">
              <p className="text-5xl font-black">+8.000</p>
              <p className="text-4xl font-black leading-[0.9] mt-1">studenti</p>
              <p className="text-sm text-white/90 mt-4 leading-relaxed">
                Abbiamo guidato migliaia di professionisti a posizionarsi meglio nel mercato del lavoro.
              </p>
            </div>
            <div className="bg-[#081C75] text-white rounded-3xl p-7 rotate-[1deg] shadow-lg">
              <p className="text-5xl font-black">+1.500</p>
              <p className="text-4xl font-black leading-[0.9] mt-1">aziende</p>
              <p className="text-sm text-white/90 mt-4 leading-relaxed">
                Da anni aiutiamo imprese e team a crescere con percorsi strutturati e concreti.
              </p>
            </div>
            <div className="bg-[#10192B] text-white rounded-3xl p-7 rotate-[-2deg] shadow-lg">
              <p className="text-5xl font-black">+50.000</p>
              <p className="text-4xl font-black leading-[0.9] mt-1">ore</p>
              <p className="text-sm text-white/90 mt-4 leading-relaxed">
                Oltre 250 classi concluse con successo tra corsi a catalogo, academy personalizzate e progetti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="bg-[#E7EFFD] py-4 border-y border-[#D9E6FF]">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-brand-navy/55 text-sm font-black uppercase tracking-wide">
          {partnerLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      {/* SERVICE 1 */}
      <section id="ai-adoption" className="bg-white py-12 lg:py-16">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-start">
          <div>
            <h3 className="text-[3rem] leading-none font-display font-black tracking-tight">AI Adoption</h3>
            <p className="text-[2.1rem] font-display font-bold leading-[1.05] mt-2">Dalle persone ai flussi: porta l'AI dove serve davvero</p>
            <p className="mt-4 text-brand-navy/70 leading-relaxed">
              Costruiamo con te la strategia AI per ogni livello aziendale, allineando leadership e team operativi
              attraverso piani formativi, progetti di implementazione e percorsi di approfondimento specifici.
            </p>
            <img
              src="https://picsum.photos/seed/corporate-ai/640/420"
              alt="AI Adoption"
              className="mt-8 rounded-[2rem] shadow-[0_20px_45px_-30px_rgba(0,29,75,0.55)] w-full max-w-[650px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 pt-24 lg:pt-[11.5rem]">
            {aiAdoptionPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#E9F1FF] text-[#1D3BB9] flex items-center justify-center shrink-0 mt-0.5">
                  <Rocket size={16} />
                </span>
                <p className="text-brand-navy/85 leading-snug font-medium">{point}</p>
              </div>
            ))}
            <button className="mt-3 inline-flex items-center gap-2 bg-[#001D90] hover:bg-[#0b2baa] text-white rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition-colors">
              Scopri di più
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE 2 */}
      <section id="formazione-tech" className="bg-white py-8 lg:py-10">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6">
          <h3 className="text-[3rem] leading-none font-display font-black tracking-tight">Formazione Tech</h3>
          <p className="text-[2.1rem] font-display font-bold leading-[1.05] mt-2">Potenzia il tuo team con skill di nuova generazione</p>
          <p className="mt-4 text-brand-navy/80 leading-relaxed max-w-[980px]">
            Formazione live con <strong>esperti del settore</strong> e piattaforma di e-learning potenziata dall'AI.
            Programmazione, analisi dati, UX/UI, marketing e tanto altro: ottieni il meglio dai docenti professionisti.
          </p>

          <div className="mt-9 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <div className="space-y-4">
            {formazioneTechPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#E9F1FF] text-[#1D3BB9] flex items-center justify-center shrink-0 mt-0.5">
                  <Star size={16} />
                </span>
                <p className="text-brand-navy/85 leading-snug font-medium">{point}</p>
              </div>
            ))}
            <button className="mt-4 inline-flex items-center gap-2 bg-[#001D90] hover:bg-[#0b2baa] text-white rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition-colors">
              Scopri di più
            </button>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/corporate-training/640/420"
              alt="Formazione Tech"
              className="rounded-[2rem] shadow-[0_20px_45px_-30px_rgba(0,29,75,0.55)] w-full max-w-[650px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        </div>
      </section>

      {/* SERVICE 3 */}
      <section id="recruiting-tech" className="bg-white py-6 lg:py-10">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
          <div>
            <h3 className="text-[3rem] leading-none font-display font-black tracking-tight">Recruiting Tech</h3>
            <p className="text-[2.1rem] font-display font-bold leading-[1.05] mt-2">Efficiente e veloce: trova un nuovo talento in 2 settimane</p>
            <p className="mt-4 text-brand-navy/70 leading-relaxed">
              Selezione di figure mid e senior in ambito IT. Dalla ricerca alla shortlist in tempi rapidi,
              con assessment strutturato e possibilità di upskilling sui ruoli inseriti.
            </p>
            <img
              src="https://picsum.photos/seed/corporate-recruiting/640/420"
              alt="Recruiting Tech"
              className="mt-8 rounded-[2rem] shadow-[0_20px_45px_-30px_rgba(0,29,75,0.55)] w-full max-w-[650px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4 pt-20 lg:pt-[8.5rem]">
            {recruitingTechPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#E9F1FF] text-[#1D3BB9] flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase size={16} />
                </span>
                <p className="text-brand-navy/85 leading-snug font-medium">{point}</p>
              </div>
            ))}
            <button className="mt-3 inline-flex items-center gap-2 bg-[#001D90] hover:bg-[#0b2baa] text-white rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.16em] transition-colors">
              Scopri di più
            </button>
          </div>
        </div>
      </section>

      {/* EMPLOYER BRANDING */}
      <section id="hiring-platform" className="bg-white py-14 lg:py-16">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-display font-black tracking-tight">Fai employer branding con noi</h3>
            <p className="mt-4 text-brand-navy/70 leading-relaxed max-w-[560px]">
              Fai conoscere la tua azienda nelle nostre iniziative: masterclass, challenge, project work ed eventi
              per mostrare chi sei e chi potresti assumere domani.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              { title: 'Eventi e Masterclass', desc: 'Sali sul palco e presenta la tua azienda' },
              { title: 'Giuria per progetti finali', desc: 'Valuta le competenze degli studenti' },
              { title: 'Challenge aziendali', desc: 'Coinvolgi gli studenti su progetti reali' },
            ].map((item) => (
              <li key={item.title} className="flex gap-3">
                <ArrowRight size={18} className="text-[#00A76F] mt-1 shrink-0" />
                <div>
                  <p className="font-black text-xl tracking-tight">{item.title}</p>
                  <p className="text-brand-navy/70">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contatti-aziende" className="bg-[#CFE0FF] py-14 lg:py-16 border-t border-[#B7CDF7]">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <h3 className="text-4xl font-display font-black tracking-tight text-center">Contattaci per maggiori informazioni</h3>
          <p className="text-center text-brand-navy/75 mt-2">Compila il modulo per ricevere dettagli sui nostri servizi.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="h-12 px-4 rounded-lg border border-[#AFC5ED] bg-white/90 outline-none" placeholder="Nome" />
              <input className="h-12 px-4 rounded-lg border border-[#AFC5ED] bg-white/90 outline-none" placeholder="Cognome" />
              <input className="h-12 px-4 rounded-lg border border-[#AFC5ED] bg-white/90 outline-none" placeholder="Azienda" />
              <input className="h-12 px-4 rounded-lg border border-[#AFC5ED] bg-white/90 outline-none" placeholder="Area di interesse" />
              <input className="h-12 px-4 rounded-lg border border-[#AFC5ED] bg-white/90 outline-none sm:col-span-1" placeholder="Email" />
              <div className="h-12 px-4 rounded-lg border border-[#AFC5ED] bg-white/90 flex items-center gap-2">
                <span className="text-sm">🇮🇹 +39</span>
                <input className="w-full outline-none bg-transparent" placeholder="Telefono" />
              </div>
            </div>
            <textarea className="w-full h-28 p-4 rounded-lg border border-[#AFC5ED] bg-white/90 outline-none" placeholder="Lascia qui il tuo messaggio" />
            <label className="flex items-center gap-2 text-sm text-brand-navy/70">
              <input type="checkbox" className="rounded border-gray-300" />
              Accetto la Privacy Policy
            </label>
            <div className="flex justify-center pt-2">
              <button className="inline-flex items-center gap-2 bg-[#5F7FB8] hover:bg-[#4f6ea5] text-white rounded-full px-7 py-3 text-xs font-black uppercase tracking-[0.14em] transition-colors">
                Invia messaggio
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SMALL END BAND */}
      <section className="bg-[#001D4B] text-white py-8">
        <div className="max-w-[1060px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 font-black">
            <UserRound size={16} />
            Asterys for business
          </div>
          <div className="flex items-center gap-2 text-white/75">
            <CheckCircle2 size={16} />
            Soluzioni corporate su misura
          </div>
          <div className="flex items-center gap-2 text-white/75">
            <Laptop size={16} />
            Supporto continuo al team
          </div>
        </div>
      </section>
    </div>
  );
}
