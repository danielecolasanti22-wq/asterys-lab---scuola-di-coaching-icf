import { CSSProperties, useState } from 'react';

type CourseImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc: string;
  style?: CSSProperties;
};

/**
 * Usa `src` (es. `/course-media/apcm/hero.jpg`); se il file non esiste,
 * passa automaticamente al `fallbackSrc` (placeholder temporaneo).
 */
export function CourseImage({ src, alt, className, fallbackSrc, style }: CourseImageProps) {
  const [current, setCurrent] = useState(src);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
