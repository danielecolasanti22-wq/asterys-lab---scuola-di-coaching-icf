import { ReactNode } from 'react';

type HighlightProps = {
  children: ReactNode;
  /**
   * Classe di colore testo (Tailwind) per le parole in evidenza.
   * Default: blu brand (accent), pensato per sfondi chiari.
   * Su sfondi scuri passare un colore chiaro, es. `text-brand-blue`.
   */
  className?: string;
};

/**
 * Evidenziazione del titolo tramite semplice cambio di colore del testo.
 *
 * In precedenza disegnava una barra/marker dietro alle parole (stile
 * evidenziatore): è stata rimossa in favore di un'emfasi più pulita.
 * Modificando questo componente si aggiorna l'evidenziazione in tutto il sito.
 */
export function Highlight({ children, className = 'text-brand-accent' }: HighlightProps) {
  return <span className={className}>{children}</span>;
}
