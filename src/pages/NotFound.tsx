import { Link } from 'react-router-dom';
import { ArrowRight, Home, Compass } from 'lucide-react';

/** Pagina 404. In SPA il server risponde comunque 200, quindi qui forziamo noindex
 *  così i motori non indicizzano URL inesistenti (React 19 solleva il tag in <head>). */
export default function NotFound() {
  return (
    <>
      <meta name="robots" content="noindex,follow" />

      <div className="min-h-[70vh] flex items-center justify-center px-6 py-24 text-center">
        <div className="max-w-xl">
          <p className="font-display font-black text-[80px] sm:text-[110px] leading-none tracking-tight text-brand-blue-soft">
            404
          </p>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-navy mb-5 tracking-tight leading-tight">
            Questa pagina non esiste (più)
          </h1>
          <p className="text-brand-navy/60 leading-relaxed mb-10">
            Forse il link è vecchio o l'indirizzo è stato scritto in modo diverso. Nessun problema:
            ripartiamo da qui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4"
            >
              <Home size={18} /> Torna alla home
            </Link>
            <Link
              to="/corsi"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-200 font-black text-xs uppercase tracking-[0.12em] text-brand-navy hover:border-brand-accent transition-colors"
            >
              <Compass size={18} /> Scopri i corsi
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold text-brand-navy/50">
            <Link to="/eventi" className="hover:text-brand-accent transition-colors inline-flex items-center gap-1">
              Eventi <ArrowRight size={13} />
            </Link>
            <Link to="/blog" className="hover:text-brand-accent transition-colors inline-flex items-center gap-1">
              Risorse <ArrowRight size={13} />
            </Link>
            <Link to="/iscriviti" className="hover:text-brand-accent transition-colors inline-flex items-center gap-1">
              Contattaci <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
