import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Le pagine arrivano dal server già renderizzate (vedi scripts/prerender.mjs): React
// riusa quell'HTML invece di ricostruirlo da zero, così il contenuto è visibile subito
// e non lampeggia. Il ramo createRoot copre `npm run dev`, dove l'HTML è ancora vuoto.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
