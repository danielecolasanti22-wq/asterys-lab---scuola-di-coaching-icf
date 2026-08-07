import { CSSProperties, useState } from 'react';
import Img from './Img';

type CourseImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc: string;
  style?: CSSProperties;
  /** Spazio occupato dall'immagine, per scegliere la risoluzione giusta (vedi Img). */
  sizes?: string;
  /** Solo per immagini visibili all'apertura della pagina. */
  priority?: boolean;
};

/**
 * Usa `src` (es. `/course-media/apcm/hero.jpg`); se il file non esiste,
 * passa automaticamente al `fallbackSrc` (placeholder temporaneo).
 *
 * Si appoggia a Img per WebP, dimensioni esplicite e caricamento differito: il fallback
 * scatta sull'immagine finale, quindi vale anche quando manca l'intera famiglia di file.
 */
export function CourseImage({
  src,
  alt,
  className,
  fallbackSrc,
  style,
  sizes,
  priority,
}: CourseImageProps) {
  // Si memorizza QUALE immagine ha fallito, non un semplice "ha fallito": così se `src`
  // cambia (stesso componente riusato per un altro corso) si riprova con la nuova invece
  // di restare incollati al fallback della precedente.
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const current = failedSrc === src ? fallbackSrc : src;

  return (
    <Img
      src={current}
      alt={alt}
      className={className}
      style={style}
      sizes={sizes}
      priority={priority}
      referrerPolicy="no-referrer"
      onError={() => setFailedSrc(src)}
    />
  );
}
