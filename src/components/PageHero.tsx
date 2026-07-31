import { Highlight } from './Highlight';

type PageHeroProps = {
  title: string;
  /** Parola/e finali evidenziate con il sottolineato azzurro (stile home) */
  highlight?: string;
  subtitle: string;
};

/**
 * Hero compatto in stile home: sfondo navy, titolo display bianco con
 * parola in evidenza (azzurro brand) e sottotitolo. Tutto centrato, solo testo.
 */
export function PageHero({ title, highlight, subtitle }: PageHeroProps) {
  return (
    <section className="bg-brand-hero">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-12 lg:pt-16 lg:pb-16 text-center min-h-[300px] lg:min-h-[340px] flex flex-col justify-center">
        <h1 className="text-[2.3rem] sm:text-[2.9rem] lg:text-[3.3rem] font-display font-black leading-[0.98] tracking-tighter text-white mb-5">
          {title}
          {highlight ? (
            <>
              {' '}
              <Highlight className="text-brand-sky">{highlight}</Highlight>
            </>
          ) : null}
        </h1>
        <p className="text-sm sm:text-base text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
