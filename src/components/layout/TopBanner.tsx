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

  return (
    <Link
      to={banner.href}
      onClick={handleClick}
      className="group/banner fixed top-0 left-0 right-0 h-12 bg-[#001D4B] text-white flex items-center justify-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.15em] z-[60] px-3 sm:px-4 overflow-hidden"
    >
      <span className="shrink-0 text-[#008060]">{banner.eyebrow}</span>
      <span className="truncate text-white/95">
        {banner.segments.map((s, i) => (
          <span key={i} className={s.accent ? 'text-[#6BB0F5]' : undefined}>
            {s.t}
          </span>
        ))}
      </span>
      <span className="hidden sm:inline-flex items-center gap-1 shrink-0 underline underline-offset-2 decoration-white/40 group-hover/banner:text-brand-accent group-hover/banner:decoration-brand-accent transition-colors">
        {banner.ctaLabel}
        <ArrowRight size={12} className="group-hover/banner:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}
