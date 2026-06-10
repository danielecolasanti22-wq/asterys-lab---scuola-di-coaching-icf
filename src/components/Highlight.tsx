import { ReactNode } from 'react';

type HighlightProps = {
  children: ReactNode;
  /**
   * Classe per le parole in evidenza.
   * Default: `text-hl` = gradiente blu scuro (navy → blu), pensato per sfondi chiari.
   * Su sfondi scuri passare un colore chiaro, es. `text-brand-sky`.
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
export function Highlight({ children, className = 'text-hl' }: HighlightProps) {
  return <span className={className}>{children}</span>;
}
