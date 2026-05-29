import { ReactNode } from 'react';

type HighlightProps = {
  children: ReactNode;
  /** Background utility class for the bar, e.g. 'bg-[#2A56A8]' or 'bg-[#CFE0F5]'. */
  color?: string;
  /**
   * 'underline' → barra bassa stile evidenziatore (default).
   * 'marker'    → blocco pieno dietro l'intera parola.
   */
  variant?: 'underline' | 'marker';
  className?: string;
};

/**
 * Evidenziazione testuale unificata.
 *
 * La barra è sempre DIETRO al testo (`isolate` crea un nuovo stacking context,
 * la barra usa `-z-10`, il testo resta sopra) e lascia un piccolo padding
 * inferiore così non taglia i discendenti delle lettere (p, g, y…).
 * Modificando questo componente si aggiorna l'evidenziazione in tutto il sito.
 */
export function Highlight({
  children,
  color = 'bg-[#CFE0F5]',
  variant = 'underline',
  className = '',
}: HighlightProps) {
  const bar =
    variant === 'marker'
      ? 'inset-x-[-0.12em] top-[0.06em] bottom-[0.16em]'
      : 'inset-x-[-0.08em] bottom-[0.08em] h-[0.26em]';

  return (
    <span className={`relative inline-block isolate ${className}`}>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10 rounded-[3px] ${bar} ${color}`}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
