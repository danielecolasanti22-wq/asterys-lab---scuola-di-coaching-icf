import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Play, Star, Video, X } from 'lucide-react';
import type { CourseTestimonial } from '../constants/coursesContent';
import { homeTestimonials } from '../constants/testimonials';

const tSection =
  'text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-black tracking-tighter text-brand-navy leading-[1.05]';

type TestimonialsSectionProps = {
  testimonials?: CourseTestimonial[];
  titleUppercase?: boolean;
};

type Slide = { video?: CourseTestimonial; cards: CourseTestimonial[] };

export function TestimonialsSection({
  testimonials = homeTestimonials,
  titleUppercase = true,
}: TestimonialsSectionProps) {
  const [activeVideoTestimonial, setActiveVideoTestimonial] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const tLead = 'text-base sm:text-lg text-brand-navy/65 font-medium leading-relaxed max-w-2xl';
  const videoTestimonials = useMemo(() => testimonials.filter((t) => t.video), [testimonials]);
  const textTestimonials = useMemo(() => testimonials.filter((t) => !t.video), [testimonials]);

  // Pagine del carosello:
  //  - una pagina per ogni VIDEO (video + max 2 card testo a fianco)
  //  - le restanti testimonianze testuali in pagine SOLO-TESTO da 3 card (max 4)
  // Ogni testimonianza compare una sola volta → niente ripetizioni tra pagine.
  const slides = useMemo<Slide[]>(() => {
    const result: Slide[] = [];
    const pool = [...textTestimonials];
    videoTestimonials.forEach((video) => {
      result.push({ video, cards: pool.splice(0, 2) });
    });
    while (pool.length) {
      result.push({ cards: pool.splice(0, 3) });
    }
    return result;
  }, [textTestimonials, videoTestimonials]);

  const goToSlide = (index: number) => {
    if (!slides.length) return;
    setActiveSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length < 2) return;
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [slides.length]);

  const renderVideoCard = (video: CourseTestimonial) => (
    <button
      type="button"
      onClick={() => setActiveVideoTestimonial(testimonials.findIndex((t) => t.name === video.name))}
      className="group relative overflow-hidden rounded-[1.5rem] lg:rounded-[1.75rem] text-left ring-1 ring-brand-navy/5 shadow-[0_24px_60px_-28px_rgba(0,21,51,0.45)] h-full min-h-[200px] sm:min-h-[380px] lg:min-h-[420px]"
    >
      <img
        src={video.video?.poster}
        alt={video.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />
      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
        <Video size={11} strokeWidth={2.75} />
        Video
      </div>
      {video.video?.duration ? (
        <div className="absolute top-4 right-4 rounded-full bg-black/55 backdrop-blur px-2.5 py-1 text-[10px] font-black text-white tracking-wide">
          {video.video?.duration}
        </div>
      ) : null}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-[0_16px_40px_-10px_rgba(0,0,0,0.6)] ring-4 ring-white/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white">
          <Play size={28} strokeWidth={2.5} className="ml-1" fill="currentColor" />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
        <p className="font-display font-black leading-tight mb-0.5 text-lg lg:text-xl">{video.name}</p>
        <p className="text-[11px] lg:text-xs font-semibold text-white/75 leading-tight">{video.role}</p>
        {video.cohort ? (
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent mt-2">
            {video.cohort}
          </p>
        ) : null}
      </div>
    </button>
  );

  const renderTextCard = (t: CourseTestimonial, idx: number) => (
    <div
      key={`${t.name}-${idx}`}
      className="relative flex flex-col bg-white rounded-[1.25rem] lg:rounded-[1.75rem] p-4 lg:p-6 border border-gray-100 shadow-[0_22px_60px_-32px_rgba(0,21,51,0.22)] overflow-hidden"
    >
      <div className="flex items-start justify-between mb-3 gap-3">
        <div>
          <p className="text-base font-black text-brand-navy leading-tight">{t.name}</p>
          <p className="text-xs font-semibold text-brand-navy/60 mt-1">{t.role}</p>
        </div>
        {t.rating ? (
          <div className="flex text-[#008060] gap-0.5 shrink-0">
            {Array.from({ length: t.rating }).map((_, s) => (
              <Star key={s} size={12} fill="currentColor" />
            ))}
          </div>
        ) : null}
      </div>
      <p className="text-[13px] lg:text-sm text-brand-navy/75 leading-relaxed font-medium flex-1 mb-4 line-clamp-3 lg:line-clamp-5 min-h-0">
        “{t.quote}”
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 shrink-0">
        {t.cohort ? (
          <p className="text-[10px] font-black uppercase tracking-wider text-brand-accent truncate">
            {t.cohort}
          </p>
        ) : (
          <span />
        )}
        {t.img ? (
          <img
            src={t.img}
            alt={t.name}
            className="h-10 w-10 rounded-full object-cover border-2 border-white shadow shrink-0"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-[#EEF4FC] text-brand-accent flex items-center justify-center text-sm font-black shrink-0">
            {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
          </div>
        )}
      </div>
    </div>
  );

  const slide = slides[activeSlide];

  return (
    <section id="testimonianze" className="py-12 lg:py-24 bg-gradient-to-b from-white via-[#EEF4FC] to-white">
      <div className="max-w-[941px] mx-auto px-4">
        <div className="max-w-2xl mb-6 lg:mb-12">
          <p className="text-lg font-display font-black text-brand-accent mb-3">Testimonianze</p>
          <h2 className={`${tSection} ${titleUppercase ? 'uppercase' : ''} mb-4`}>
            Storie di chi ha scelto <span className="text-brand-accent">Asterys Lab</span>
          </h2>
          <p className={tLead}>
            Professionisti che hanno trasformato la loro carriera con il nostro metodo. Video e racconti dalla nostra community.
          </p>
        </div>

        {slide ? (
          <div className="relative overflow-hidden min-h-[560px] sm:min-h-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -22 }}
                transition={{ duration: 0.28, ease: 'easeInOut' }}
                drag={slides.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) goToSlide(activeSlide + 1);
                  if (info.offset.x > 70) goToSlide(activeSlide - 1);
                }}
                className={
                  slide.video
                    ? `grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch ${
                        activeSlide % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                      }`
                    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch'
                }
              >
                {slide.video ? (
                  <>
                    {renderVideoCard(slide.video)}
                    <div className="grid grid-cols-1 gap-4">{slide.cards.map(renderTextCard)}</div>
                  </>
                ) : (
                  slide.cards.map(renderTextCard)
                )}
              </motion.div>
            </AnimatePresence>

            {slides.length > 1 ? (
              <div className="mt-6 flex items-center justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Vai alla pagina testimonianze ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index
                        ? 'w-8 bg-brand-accent'
                        : 'w-2.5 bg-brand-navy/18 hover:bg-brand-navy/35'
                    }`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {activeVideoTestimonial !== null && testimonials[activeVideoTestimonial]?.video ? (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActiveVideoTestimonial(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Chiudi video"
                onClick={() => setActiveVideoTestimonial(null)}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 h-10 w-10 rounded-full bg-white text-brand-navy shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors z-10"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
              <div className="bg-brand-navy rounded-[1.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
                <div className="aspect-video bg-black">
                  {testimonials[activeVideoTestimonial].video?.vimeoEmbedUrl ? (
                    <iframe
                      src={testimonials[activeVideoTestimonial].video?.vimeoEmbedUrl}
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={`Testimonianza video ${testimonials[activeVideoTestimonial].name}`}
                      allowFullScreen
                    />
                  ) : testimonials[activeVideoTestimonial].video?.src ? (
                    <video
                      src={testimonials[activeVideoTestimonial].video?.src}
                      poster={testimonials[activeVideoTestimonial].video?.poster}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/60 text-sm">
                      Video in arrivo
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6 text-white">
                  <p className="text-base sm:text-lg font-display font-black leading-tight">
                    {testimonials[activeVideoTestimonial].name}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-white/65 mt-1">
                    {testimonials[activeVideoTestimonial].role}
                  </p>
                  {testimonials[activeVideoTestimonial].cohort ? (
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent mt-2">
                      {testimonials[activeVideoTestimonial].cohort}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
