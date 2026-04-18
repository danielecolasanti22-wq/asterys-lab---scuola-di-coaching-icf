import { useState } from 'react';

type CourseImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc: string;
};

/**
 * Usa `src` (es. `/course-media/apcm/hero.jpg`); se il file non esiste,
 * passa automaticamente al `fallbackSrc` (placeholder temporaneo).
 */
export function CourseImage({ src, alt, className, fallbackSrc }: CourseImageProps) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
