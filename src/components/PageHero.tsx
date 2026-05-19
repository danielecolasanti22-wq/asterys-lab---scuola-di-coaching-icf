type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Parola/e finali evidenziate con il sottolineato azzurro (stile home) */
  highlight?: string;
  subtitle: string;
};

/**
 * Hero compatto in stile home: sfondo azzurro chiaro, pill, titolo display
 * con evidenziazione e sottotitolo. Tutto centrato, solo testo.
 */
export function PageHero({ eyebrow, title, highlight, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[#F2F7FF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-12 lg:pt-16 lg:pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy border border-brand-navy/10 mb-5">
          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
          {eyebrow}
        </div>
        <h1 className="text-[2.3rem] sm:text-[2.9rem] lg:text-[3.3rem] font-display font-black leading-[0.98] tracking-tighter text-brand-navy mb-5">
          {title}
          {highlight ? (
            <>
              {' '}
              <span className="relative inline-block">
                <span className="relative z-10">{highlight}</span>
                <span className="absolute inset-x-[-0.06em] bottom-[0.07em] h-[0.26em] bg-[#BED5FF] -z-0 rounded-none" />
              </span>
            </>
          ) : null}
        </h1>
        <p className="text-sm sm:text-base text-brand-navy/70 font-medium leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
