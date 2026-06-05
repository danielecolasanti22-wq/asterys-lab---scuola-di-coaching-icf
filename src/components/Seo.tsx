import { useLocation } from 'react-router-dom';
import { SITE_URL, getSeoForPath, getJsonLdForPath, ogImageFor } from '../constants/seo';

/**
 * SEO per pagina. Usa il supporto nativo metadata di React 19 (i tag <title>/<meta>/<link>
 * vengono sollevati in <head>). Va montato una sola volta dentro il Router (vedi App.tsx).
 * NB: senza prerender/SSG questi tag sono impostati lato client → Google li legge (renderizza il JS),
 * ma per Bing/AI conviene aggiungere il prerender (passo successivo consigliato).
 */
export default function Seo() {
  const { pathname } = useLocation();
  const meta = getSeoForPath(pathname);
  const canonical = SITE_URL + (pathname === '/' ? '' : pathname);
  const og = ogImageFor(meta);
  const jsonLd = getJsonLdForPath(pathname);

  return (
    <>
      <title>{meta.title}</title>
      {meta.description ? <meta name="description" content={meta.description} /> : null}
      <link rel="canonical" href={canonical} />
      {meta.noindex ? <meta name="robots" content="noindex,follow" /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Asterys Lab" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:title" content={meta.title} />
      {meta.description ? <meta property="og:description" content={meta.description} /> : null}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={og} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      {meta.description ? <meta name="twitter:description" content={meta.description} /> : null}
      <meta name="twitter:image" content={og} />

      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </>
  );
}
