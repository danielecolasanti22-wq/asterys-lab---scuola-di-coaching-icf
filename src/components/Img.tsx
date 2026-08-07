import type { ImgHTMLAttributes } from 'react';
import { HAS_WEBP, IMAGE_MANIFEST, VARIANTS } from '../constants/imageManifest';

type ImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading'> & {
  /** Percorso dell'immagine in public/, es. "/home/hero.jpg". */
  src: string;
  alt: string;
  /**
   * Da attivare SOLO per le immagini visibili all'apertura della pagina (hero).
   * Le carica subito e con priorità alta invece di rimandarle: usarlo su immagini
   * più in basso peggiora il caricamento, perché competono con quelle che si vedono.
   */
  priority?: boolean;
  /**
   * Quanto spazio occupa l'immagine, per far scegliere al browser la variante giusta.
   * Senza questo il browser assume l'intera larghezza della finestra e scarica la
   * variante più grande: va sempre passato quando l'immagine è piccola o sta in una
   * colonna (es. "48px", oppure "(max-width: 768px) 100vw, 320px").
   */
  sizes?: string;
};

/** Costruisce la lista di varianti WebP disponibili per un'immagine, dalla più piccola. */
function webpSrcSet(src: string, width: number, flags: number): string | null {
  const candidates = VARIANTS.filter((v) => (flags & v.bit) !== 0).map(
    (v) => `${src}.${v.width}w.webp ${v.width}w`,
  );

  if ((flags & HAS_WEBP) !== 0) {
    candidates.push(`${src}.webp ${width}w`);
  } else if (candidates.length === 0) {
    return null;
  }
  // Nota: se manca la variante a piena risoluzione (capita sui PNG a pochi colori, dove il
  // WebP pesa più dell'originale) restano solo le varianti ridotte. Riguarda badge e loghi,
  // che si mostrano piccoli; per una foto a tutta pagina passare sizes evita comunque che
  // il browser scelga una variante troppo piccola.
  return candidates.join(', ');
}

/**
 * Immagine con variante WebP, dimensioni esplicite e caricamento differito.
 *
 * Tre cose che il tag <img> nudo non fa:
 *  - serve WebP e una risoluzione adatta allo spazio reale, così nessuno scarica pixel
 *    che non vedrà;
 *  - dichiara width/height presi dal manifest, così il browser riserva lo spazio e la
 *    pagina non "salta" mentre carica;
 *  - rimanda il caricamento di tutto ciò che non è subito visibile.
 *
 * Le varianti stanno in `srcSet` sullo stesso <img>, non in un <picture> con <source>.
 * Con <picture> capitava che il browser risolvesse `src` prima di considerare il
 * <source> fratello appena montato, scaricando l'originale a piena risoluzione OLTRE
 * alla variante: doppio download. Qui non può succedere, perché src e srcSet arrivano
 * insieme sullo stesso elemento.
 * Non perdiamo il fallback per i browser senza WebP: il target di build (vedi
 * vite.config.ts) esclude già ogni browser che non lo supporta, e `src` resta comunque
 * come ripiego per chi non gestisce srcSet.
 *
 * Le varianti sono generate da scripts/images.mjs. Quando per un'immagine una variante
 * non esiste, qui si degrada da solo al file originale: nessun riferimento a file
 * inesistenti, e un'immagine nuova funziona anche prima di rigenerare il manifest.
 */
export default function Img({ src, alt, priority = false, sizes, ...rest }: ImgProps) {
  const meta = IMAGE_MANIFEST[src];

  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : undefined;
  const decoding = priority ? 'sync' : 'async';

  // Immagine fuori dal manifest (percorso dinamico o file aggiunto senza rigenerare):
  // resta un <img> normale, senza varianti ma con il caricamento differito.
  if (!meta) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
        {...rest}
      />
    );
  }

  const [width, height, flags] = meta;
  const srcSet = webpSrcSet(src, width, flags);

  return (
    <img
      // ATTENZIONE all'ordine: srcSet e sizes vanno dichiarati PRIMA di src.
      // React applica gli attributi nell'ordine in cui compaiono qui, e il browser fa
      // partire il download appena vede `src`. Mettendolo per primo scaricava l'originale
      // a piena risoluzione e subito dopo anche la variante: due file invece di uno.
      srcSet={srcSet ?? undefined}
      sizes={srcSet ? sizes : undefined}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      {...rest}
    />
  );
}

/**
 * Gli stessi attributi che applica <Img>, da spalmare su un tag immagine che non può
 * essere <Img>: tipicamente <motion.img>, che ha bisogno di essere lui l'elemento
 * animato. Usare così, con src DOPO lo spread per non farselo sovrascrivere:
 *
 *     <motion.img {...imgAttrs('/brand/logo.png', '128px')} src={...} alt={...} />
 */
export function imgAttrs(src: string, sizes?: string) {
  const meta = IMAGE_MANIFEST[src];
  if (!meta) return { loading: 'lazy', decoding: 'async' } as const;

  const [width, height, flags] = meta;
  const srcSet = webpSrcSet(src, width, flags);
  return {
    srcSet: srcSet ?? undefined,
    sizes: srcSet ? sizes : undefined,
    width,
    height,
    loading: 'lazy',
    decoding: 'async',
  } as const;
}

/**
 * Tag <link rel="preload"> per l'immagine principale di una pagina.
 * Va montato nella pagina che contiene quell'hero: anticipa il download rispetto al
 * momento in cui React monta l'immagine, che è il fattore che sposta di più l'LCP.
 */
export function ImgPreload({ src, sizes }: { src: string; sizes?: string }) {
  const meta = IMAGE_MANIFEST[src];
  if (!meta) return <link rel="preload" as="image" href={src} />;

  const [width, , flags] = meta;
  const srcSet = webpSrcSet(src, width, flags);
  if (!srcSet) return <link rel="preload" as="image" href={src} />;

  return (
    <link
      rel="preload"
      as="image"
      href={(flags & HAS_WEBP) !== 0 ? `${src}.webp` : src}
      type={(flags & HAS_WEBP) !== 0 ? 'image/webp' : undefined}
      imageSrcSet={srcSet}
      imageSizes={sizes}
    />
  );
}
