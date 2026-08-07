import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, getSeoForPath, getJsonLdForPath, ogImageFor } from '../constants/seo';

/**
 * Tiene aggiornati i tag SEO durante la navigazione interna.
 *
 * Al primo caricamento non fa nulla di visibile: title, description, canonical, Open Graph
 * e JSON-LD sono già nell'HTML servito, scritti da scripts/prerender.mjs con queste stesse
 * funzioni. È ciò che permette a Bing e ai bot delle AI — che non eseguono JavaScript — di
 * leggere ogni pagina.
 *
 * Serve invece quando si passa da una pagina all'altra senza ricaricare: lì l'HTML resta
 * quello di partenza, e senza questo aggiornamento la pagina continuerebbe a dichiarare i
 * meta di quella precedente.
 *
 * I tag vengono scritti direttamente nel DOM invece di essere renderizzati da React: se li
 * emettesse il componente, React proverebbe a riconciliarli con quelli già presenti
 * nell'head e l'idratazione fallirebbe, buttando via tutto l'HTML prerenderizzato.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getSeoForPath(pathname);
    const canonical = SITE_URL + (pathname === '/' ? '' : pathname);
    const og = ogImageFor(meta);

    document.title = meta.title;

    /** Crea o aggiorna un tag nell'head, cercandolo per selettore. */
    const set = (selettore: string, crea: () => HTMLElement, valore: string) => {
      let el = document.head.querySelector(selettore);
      if (!el) {
        el = crea();
        document.head.appendChild(el);
      }
      if (el instanceof HTMLMetaElement) el.content = valore;
      else if (el instanceof HTMLLinkElement) el.href = valore;
    };

    const metaTag = (attr: 'name' | 'property', nome: string) => () => {
      const el = document.createElement('meta');
      el.setAttribute(attr, nome);
      return el;
    };

    if (meta.description) {
      set('meta[name="description"]', metaTag('name', 'description'), meta.description);
    }
    set(
      'link[rel="canonical"]',
      () => {
        const el = document.createElement('link');
        el.rel = 'canonical';
        return el;
      },
      canonical,
    );

    // Il noindex va tolto quando si arriva su una pagina che invece va indicizzata.
    const robots = document.head.querySelector('meta[name="robots"]');
    if (meta.noindex) {
      set('meta[name="robots"]', metaTag('name', 'robots'), 'noindex,follow');
    } else if (robots) {
      robots.remove();
    }

    set('meta[property="og:title"]', metaTag('property', 'og:title'), meta.title);
    set('meta[property="og:url"]', metaTag('property', 'og:url'), canonical);
    set('meta[property="og:image"]', metaTag('property', 'og:image'), og);
    set('meta[name="twitter:title"]', metaTag('name', 'twitter:title'), meta.title);
    set('meta[name="twitter:image"]', metaTag('name', 'twitter:image'), og);
    if (meta.description) {
      set(
        'meta[property="og:description"]',
        metaTag('property', 'og:description'),
        meta.description,
      );
      set(
        'meta[name="twitter:description"]',
        metaTag('name', 'twitter:description'),
        meta.description,
      );
    }

    // I dati strutturati cambiano di numero da pagina a pagina (una scheda corso ne ha di
    // più di un articolo), quindi si rifanno da zero invece di aggiornarli uno per uno.
    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((s) => s.remove());
    for (const obj of getJsonLdForPath(pathname)) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    }
  }, [pathname]);

  return null;
}
