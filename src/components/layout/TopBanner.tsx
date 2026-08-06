import type { MouseEvent as ReactMouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBanner } from '../../utils/banner';

/**
 * Barra promo fissa in cima al sito. Il contenuto è deciso da getBanner() in base a date/edizioni
 * reali (Early Bird → prossima edizione con iscrizioni aperte). Il click porta alla sezione giusta
 * del corso: Early Bird → prezzi (#prezzo), edizione → date (#calendario-edizioni). Se sei già su
 * quella pagina fa uno scroll fluido; da un'altra pagina naviga e lo scroll all'ancora lo gestisce
 * CourseDetail al mount.
 */
export default function TopBanner() {
  const { pathname } = useLocation();
  const banner = getBanner(pathname);
  if (!banner) return null;

  const [targetPath, hash] = banner.href.split('#');

  const handleClick = (e: ReactMouseEvent) => {
    if (hash && pathname === targetPath) {
      const el = document.getElementById(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const line = (
    <>
      <span className="shrink-0 text-[#008060]">{banner.eyebrow}</span>
      {banner.segments.map((s, i) => (
        <span key={i} className={s.accent ? 'text-[#6BB0F5]' : 'text-white/95'}>
          {s.t}
        </span>
      ))}
    </>
  );

  return (
    <Link
      to={banner.href}
      onClick={handleClick}
      className="group/banner fixed top-0 left-0 right-0 h-12 bg-[#001D4B] text-white flex items-center z-[60] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] overflow-hidden"
    >
      {/* Mobile: la frase scorre orizzontalmente così si legge per intero (niente testo tagliato). */}
      <div className="sm:hidden w-full overflow-hidden">
        <div className="flex w-max animate-[marquee_16s_linear_infinite] marquee-track">
          <span className="flex shrink-0 items-center gap-2 pr-10 pl-3">{line}</span>
          <span aria-hidden className="flex shrink-0 items-center gap-2 pr-10 pl-3">{line}</span>
        </div>
      </div>

      {/* Tablet/desktop: frase centrata + CTA */}
      <div className="hidden sm:flex w-full items-center justify-center gap-3 px-4">
        <span className="flex items-center gap-1.5 truncate">{line}</span>
        <span className="inline-flex items-center gap-1 shrink-0 underline underline-offset-2 decoration-white/40 group-hover/banner:text-brand-accent group-hover/banner:decoration-brand-accent transition-colors">
          {banner.ctaLabel}
          <ArrowRight size={12} className="group-hover/banner:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
