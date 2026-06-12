import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Animazioni leggere al scroll per le sezioni dentro <main>. */
export function useSectionReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('main section').forEach((s) => s.classList.add('section-in-view'));
      return;
    }

    const sections = document.querySelectorAll('main section:not(.no-reveal)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('section-in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    );

    sections.forEach((section) => observer.observe(section));

    requestAnimationFrame(() => {
      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight * 0.9) section.classList.add('section-in-view');
      });
    });

    return () => observer.disconnect();
  }, [pathname]);
}
