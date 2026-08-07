import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router';
import { AppRoutes } from './App';

// Riesportate perché scripts/prerender.mjs costruisca l'<head> con le stesse funzioni
// che il sito usa nel browser, senza doverne compilare un secondo bundle.
export { getSeoForPath, getJsonLdForPath, ogImageFor, SITE_URL } from './constants/seo';

/**
 * Punto d'ingresso usato SOLO dal prerender (scripts/prerender.mjs), mai dal browser.
 *
 * Rende l'app come HTML per un dato percorso, così ogni pagina del sito esiste come
 * file statico. Serve perché i motori diversi da Google — Bing e i bot delle AI
 * (GPTBot, PerplexityBot, ClaudeBot) — in genere non eseguono JavaScript: prima
 * trovavano una pagina vuota su ogni URL.
 *
 * Si usa `prerender` di React 19 (react-dom/static) invece di renderToString perché
 * attende che i Suspense si risolvano: senza, tutte le pagine caricate con lazy()
 * verrebbero rese come il loro placeholder vuoto.
 */
export async function render(url: string): Promise<string> {
  // Percorso corrente per il codice che nel browser leggerebbe window.location
  // (vedi src/utils/whatsapp.ts): serve a produrre lo stesso identico markup.
  (globalThis as { __PRERENDER_PATH__?: string }).__PRERENDER_PATH__ = url;

  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );

  // `prelude` è uno stream: qui serve l'HTML completo in una stringa da scrivere su file.
  const reader = prelude.getReader();
  const decoder = new TextDecoder();
  let html = '';
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    html += decoder.decode(value, { stream: true });
  }
  return html + decoder.decode();
}
