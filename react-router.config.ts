import type { Config } from '@react-router/dev/config';

// SPA mode (nessun server runtime) + prerender statico delle pagine principali.
// Le pagine elencate vengono generate come HTML statico al build (per SEO/Bing/AI);
// le rotte dinamiche (/corsi/:id, /eventi/:id, /blog/:id) restano client-side.
export default {
  appDirectory: 'src',
  ssr: false,
  async prerender() {
    return [
      '/',
      '/corsi',
      '/corsi/apcm',
      '/corsi/systemic-team-coaching',
      '/corsi/eiw',
      '/corsi/coaching-circle',
      '/corsi/voice-dialogue',
      '/corsi/continuous-learning',
      '/corsi/public-speaking',
      '/aziende',
      '/about',
      '/eventi',
      '/blog',
      '/iscriviti',
    ];
  },
} satisfies Config;
