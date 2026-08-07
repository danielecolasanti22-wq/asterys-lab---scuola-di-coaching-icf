import { coursesContent } from '../constants/coursesContent';

const WA_NUMBER = '393498864895';

/**
 * Link WhatsApp con messaggio PRECOMPILATO in base alla pagina da cui si clicca.
 * - Pagina corso → cita il corso per nome ("…sul corso «X»…").
 * - Altre pagine → messaggio tematico: la provenienza resta IMPLICITA nel contenuto
 *   della richiesta (non "vi scrivo dalla pagina X").
 * `message` forza un testo esplicito; altrimenti viene dedotto dall'URL corrente.
 */
export function whatsappHref(message?: string): string {
  const msg = message ?? messageFromPath();
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function messageFromPath(): string {
  const fallback = 'Salve, vorrei avere maggiori informazioni sui vostri percorsi di coaching.';

  // Durante il prerender non esiste window: il percorso lo passa entry-server. Senza
  // questo il link generato al build direbbe una cosa e quello ricostruito nel browser
  // un'altra, e React scarterebbe l'HTML statico trovandolo diverso.
  const p =
    typeof window === 'undefined'
      ? (globalThis as { __PRERENDER_PATH__?: string }).__PRERENDER_PATH__
      : window.location.pathname;
  if (!p) return fallback;
  const path = p.replace(/\/$/, '') || '/';

  const course = path.match(/^\/corsi\/([^/]+)$/);
  if (course && coursesContent[course[1]]) {
    return `Salve, vorrei saperne di più sul corso «${coursesContent[course[1]].title}»: date, costi e come iscrivermi.`;
  }

  const map: Record<string, string> = {
    '/': fallback,
    '/corsi': 'Salve, vorrei un aiuto a scegliere il percorso di coaching più adatto a me.',
    '/aziende': 'Salve, vorrei informazioni sul coaching per la mia azienda e il mio team.',
    '/eventi': 'Salve, vorrei sapere quando si terranno i prossimi eventi e open day.',
    '/blog': 'Salve, ho letto i vostri contenuti e vorrei maggiori informazioni sui percorsi di coaching.',
    '/iscriviti': 'Salve, vorrei parlare con un Advisor per capire quale percorso di coaching fa per me.',
    '/personal-coaching': 'Salve, vorrei informazioni su un percorso di personal coaching individuale.',
    '/borsa-di-studio': 'Salve, vorrei informazioni sulla borsa di studio per i corsi di coaching.',
    '/credito-ai-talenti': 'Salve, vorrei più informazioni su come funziona il Credito ai Talenti.',
    '/about': 'Salve, vorrei conoscere meglio la vostra scuola e i vostri percorsi di coaching.',
  };
  if (map[path]) return map[path];
  if (path.startsWith('/blog/')) return 'Salve, ho letto un vostro articolo e vorrei maggiori informazioni sui percorsi di coaching.';
  if (path.startsWith('/eventi/')) return 'Salve, vorrei informazioni su un vostro evento.';
  if (path.startsWith('/corsi/')) return 'Salve, vorrei saperne di più su un vostro corso di coaching.';
  return fallback;
}
