import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Award, Train, CheckCircle2 } from 'lucide-react';
import { coursesContent } from '../constants/coursesContent';
import { whatsappHref } from '../utils/whatsapp';
import { Highlight } from '../components/Highlight';

/**
 * Pagina di una sede (Milano, Roma).
 *
 * Serve a intercettare le ricerche locali — "scuola di coaching Milano", "corso per
 * diventare coach Roma" — che hanno intento alto (chi le fa sta scegliendo dove
 * iscriversi) e che il sito non copriva: le due città comparivano centinaia di volte
 * nelle pagine, ma nessuna pagina le aveva nel titolo.
 *
 * L'elenco dei corsi non è scritto a mano: si ricava dalle edizioni reali in
 * coursesContent, così quando cambiano date o sedi la pagina resta vera da sola.
 */
export type SedeInfo = {
  citta: string;
  /** Deve combaciare con `city` nelle edizioni dei corsi. */
  cityMatch: string;
  indirizzo: string;
  cap: string;
  zona: string;
  comeArrivare: string;
  intro: string;
};

export default function SedePage({ sede }: { sede: SedeInfo }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [sede.citta]);

  // Corsi che hanno almeno un'edizione in questa città, con le loro date reali.
  const corsi = Object.entries(coursesContent)
    .map(([id, corso]) => {
      const edizioni = (corso.editions ?? []).filter(
        (e) => e.city?.toLowerCase() === sede.cityMatch.toLowerCase(),
      );
      return { id, corso, edizioni };
    })
    .filter((c) => c.edizioni.length > 0);

  return (
    <div className="bg-white text-brand-navy">
      <section className="relative overflow-hidden bg-brand-hero">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,#00091c_0%,#001a45_20%,#143f7a_58%,#2c63a8_100%)]"
        />
        <div className="relative max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.24em] text-brand-sky">
            <MapPin size={14} /> Sede di {sede.citta}
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tighter leading-[1.02] text-white max-w-4xl">
            Scuola di coaching a {sede.citta},{' '}
            <Highlight className="text-brand-sky">accreditata ICF</Highlight>
          </h1>
          <p className="mt-6 text-lg text-white/75 font-medium max-w-[640px] leading-relaxed">
            {sede.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/corsi"
              className="inline-flex items-center gap-2 bg-[#2A56A8] text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.18em] hover:bg-[#2748d1] transition-colors"
            >
              Vedi i percorsi <ArrowRight size={15} />
            </Link>
            <a
              href={whatsappHref(
                `Salve, vorrei informazioni sui corsi di coaching nella sede di ${sede.citta}.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 ring-1 ring-white/20 text-white px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-[0.18em] hover:bg-white/20 transition-colors"
            >
              Parla con un Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Dove siamo */}
      <section className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 py-14 lg:py-20 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
        <div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter leading-[1.05]">
            Dove ci trovi a {sede.citta}
          </h2>
          <p className="mt-5 text-brand-navy/70 leading-relaxed">{sede.comeArrivare}</p>
          <div className="mt-7 rounded-2xl border border-gray-100 bg-[#EEF4FC] p-6">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-black text-brand-navy">Asterys Lab · {sede.citta}</p>
                <p className="text-sm text-brand-navy/70 mt-1">
                  {sede.indirizzo} — {sede.cap} {sede.citta}
                </p>
                <p className="text-sm text-brand-navy/55 mt-2 flex items-center gap-2">
                  <Train size={14} className="text-brand-accent" /> {sede.zona}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter leading-[1.05]">
            Perché scegliere Asterys Lab
          </h2>
          <ul className="mt-6 space-y-4">
            {[
              'Accreditamento ICF Level 1 e Level 2: ti prepari alle credenziali ACC e PCC riconosciute nel mondo.',
              'Trainer con credenziali MCC e PCC, non docenti improvvisati.',
              'Lezioni in diretta e pratica supervisionata: gran parte del percorso è allenamento reale.',
              'Oltre 3.000 alumni e una community che resta accessibile anche dopo il diploma.',
            ].map((v) => (
              <li key={v} className="flex gap-3 text-brand-navy/75 leading-relaxed">
                <CheckCircle2 size={19} className="text-brand-accent shrink-0 mt-0.5" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Corsi in presenza in questa città */}
      {corsi.length > 0 && (
        <section className="bg-[#EEF4FC] py-14 lg:py-20">
          <div className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter leading-[1.05]">
              I percorsi in aula a {sede.citta}
            </h2>
            <div className="mt-9 grid sm:grid-cols-2 gap-6">
              {corsi.map(({ id, corso, edizioni }) => (
                <Link
                  key={id}
                  to={`/corsi/${id}`}
                  className="group bg-white rounded-[1.75rem] border border-gray-100 p-7 hover:shadow-xl transition-shadow flex flex-col"
                >
                  <h3 className="font-display font-black text-xl leading-tight group-hover:text-brand-accent transition-colors">
                    {corso.title}
                  </h3>
                  {corso.subtitle ? (
                    <p className="mt-2 text-sm text-brand-navy/60 leading-relaxed">
                      {corso.subtitle}
                    </p>
                  ) : null}
                  <div className="mt-5 space-y-2">
                    {edizioni.slice(0, 3).map((e) => (
                      <p
                        key={e.editionSlug + e.levelSlug}
                        className="flex items-center gap-2 text-[13px] font-bold text-brand-navy/70"
                      >
                        <Calendar size={13} className="text-brand-accent shrink-0" />
                        {e.level}
                        {e.subtitle ? ` · ${e.subtitle}` : ''}
                      </p>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent">
                    Scopri il percorso <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Chiusura */}
      <section className="max-w-[var(--wrap-max)] mx-auto px-4 sm:px-6 py-14 lg:py-20 text-center">
        <Award className="mx-auto mb-6 text-brand-accent" size={44} />
        <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter leading-[1.05] max-w-2xl mx-auto">
          Non sai da quale percorso partire?
        </h2>
        <p className="mt-5 text-brand-navy/65 leading-relaxed max-w-xl mx-auto">
          Un Advisor ti aiuta a capire quale percorso è adatto ai tuoi obiettivi e quando parte la
          prossima edizione a {sede.citta}. Senza impegno.
        </p>
        <a
          href={whatsappHref(
            `Salve, vorrei capire quale percorso di coaching fa per me, nella sede di ${sede.citta}.`,
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-[#2A56A8] text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.18em] hover:bg-[#2748d1] transition-colors"
        >
          Parla con un Advisor <ArrowRight size={15} />
        </a>
      </section>
    </div>
  );
}
