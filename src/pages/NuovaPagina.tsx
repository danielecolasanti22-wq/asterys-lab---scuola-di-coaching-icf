import { useState } from 'react';
import {
  Award,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  CircleCheck,
  Compass,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { coursesContent } from '../constants/coursesContent';

const course = coursesContent.apcm;

function clean(text = '') {
  return text.replace(/\*\*/g, '').replace(/[“”]/g, '"');
}

const sectionTitle = 'font-display text-4xl font-black leading-[1.02] tracking-tight text-[#9B9DA9] md:text-5xl';
const smallCaps = 'text-[11px] font-black uppercase tracking-[0.24em] text-[#2A56A8]';
const bodyText = 'text-sm font-semibold leading-relaxed text-[#747C8C]';

export default function NuovaPagina() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeLevel, setActiveLevel] = useState(1);

  const module = course.structure.modules[activeModule];
  const levels = course.levelsComparison?.levels ?? [];
  const level = levels[activeLevel] ?? levels[0];
  const firstOpenEdition =
    course.editions?.find((edition) => edition.badge === 'Iscrizioni aperte') ?? course.editions?.[0];

  return (
    <main className="overflow-x-hidden bg-white pt-[72px] text-[#555C6D]">
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20">
          <div>
            <p className={`${smallCaps} mb-5 border-b-2 border-[#8AD0E2] pb-3`}>
              The Campus · Master APCM
            </p>
            <h1 className="font-display text-[3rem] font-black leading-[0.92] tracking-tight text-[#9B9DA9] sm:text-[3.45rem] md:text-[5.4rem]">
              Professione:
              <br />
              Coach.
            </h1>
            <p className="mt-7 max-w-xl text-base font-semibold leading-relaxed text-[#747C8C]">
              {clean(course.tagline)}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {course.badges.map((badge) => (
                <span
                  key={badge}
                  className="border border-[#D7DDE8] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#7B8292]"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#prezzi"
                className="inline-flex items-center justify-center gap-2 bg-[#001D4B] px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2A56A8]"
              >
                Scopri il percorso
                <ChevronRight size={15} />
              </a>
              <a
                href="#contatto"
                className="inline-flex items-center justify-center border border-[#CBD2DF] px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#868C9B] transition-colors hover:border-[#8AD0E2] hover:text-[#001D4B]"
              >
                Parla con noi
              </a>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden bg-[#EEF4FC] md:min-h-[560px]">
            <img
              src="/course-media/apcm/hero-apcm.png"
              alt="Faculty Asterys Lab"
              className="absolute bottom-0 left-1/2 h-[92%] max-w-none -translate-x-1/2 object-contain md:h-[96%]"
            />
            <div className="absolute bottom-8 right-7 flex gap-3">
              <img src="/brand/icf-level-1.png" alt="ICF Level 1" className="h-20 w-20 rounded-full bg-white object-contain p-1 shadow-xl" />
              <img src="/brand/icf-level-2.png" alt="ICF Level 2" className="h-20 w-20 rounded-full bg-white object-contain p-1 shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF4FC] py-16 md:py-20">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="text-center">
            <p className={smallCaps}>Trova il percorso ideale per te</p>
            <h2 className={`${sectionTitle} mx-auto mt-3 max-w-3xl`}>
              Una formazione professionale, personale e riconosciuta.
            </h2>
            <p className={`${bodyText} mx-auto mt-5 max-w-2xl`}>
              APCM segue il flow della pagina Master attuale: orientamento, programma,
              livelli, faculty, community, prezzi e candidatura. Cambia il vestito:
              più Asterys storico, meno template.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ['150 ore', 'Formazione, pratica e studio'],
              ['ICF L1+L2', 'Standard internazionali'],
              ['3.000+', 'Alumni Asterys Lab'],
              ['20+ anni', 'Esperienza faculty'],
            ].map(([value, label]) => (
              <div key={value} className="border-t-4 border-[#8AD0E2] bg-white px-6 py-7 text-center">
                <p className="font-display text-3xl font-black text-[#001D4B]">{value}</p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#8E94A3]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-[1080px] gap-12 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <img
            src="/course-media/apcm/overview-master.jpg"
            alt="Aula Master APCM"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
          <div>
            <p className={smallCaps}>Perché questo Master</p>
            <h2 className={`${sectionTitle} mt-3`}>{course.overview.title}</h2>
            <div className="mt-7 space-y-5">
              {course.overview.content.map((paragraph) => (
                <p key={paragraph} className={bodyText}>
                  {clean(paragraph)}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {course.target.map((target) => (
                <div key={target.title} className="border-l-4 border-[#8AD0E2] bg-[#EEF4FC] px-5 py-4">
                  <h3 className="text-sm font-black text-[#555C6D]">{target.title}</h3>
                  <p className="mt-1 text-[12px] font-semibold leading-relaxed text-[#7A8191]">{target.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {course.whyChoose ? (
        <section className="bg-[#EEF4FC] py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className={smallCaps}>{course.whyChoose.eyebrow}</p>
                <h2 className={`${sectionTitle} mt-3`}>{course.whyChoose.title}</h2>
              </div>
              <p className={bodyText}>{clean(course.whyChoose.intro)}</p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-[#EEF4FC] bg-[#EEF4FC] md:grid-cols-4">
              {course.whyChoose.bullets.slice(0, 8).map((item, index) => (
                <article key={item.title} className="bg-white p-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#8AD0E2]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-lg font-black leading-tight text-[#555C6D]">{item.title}</h3>
                  <p className="mt-3 text-[12px] font-semibold leading-relaxed text-[#7A8191]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="programma" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className={smallCaps}>Programma del Master</p>
              <h2 className={`${sectionTitle} mt-3`}>Dal metodo alla pratica professionale.</h2>
              <p className={`${bodyText} mt-5`}>{clean(course.programIntro)}</p>
            </div>
            <div className="border border-[#EEF4FC] bg-[#EEF4FC] p-4">
              <div className="flex flex-wrap gap-2">
                {course.structure.modules.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActiveModule(index)}
                    className={`px-4 py-3 text-[11px] font-black uppercase tracking-[0.16em] transition-colors ${
                      activeModule === index
                        ? 'bg-[#001D4B] text-white'
                        : 'bg-white text-[#737A8A] hover:text-[#001D4B]'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="mt-4 bg-white p-7">
                <h3 className="font-display text-3xl font-black text-[#9B9DA9]">{module.title}</h3>
                <p className={`${bodyText} mt-4`}>{module.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {module.tags?.map((tag) => (
                    <span key={tag} className="border border-[#EEF4FC] px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#737A8A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {course.learning.cols.map((col) => (
              <article key={col.title} className="border-t-4 border-[#8AD0E2] bg-[#EEF4FC] p-7">
                <h3 className="font-display text-2xl font-black text-[#8E94A3]">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold text-[#747C8C]">
                      <CircleCheck className="mt-0.5 shrink-0 text-[#2A56A8]" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="prezzi" className="bg-[#EEF4FC] py-16 md:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="text-center">
            <p className={smallCaps}>{course.levelsComparison?.eyebrow}</p>
            <h2 className={`${sectionTitle} mx-auto mt-3 max-w-3xl`}>{course.levelsComparison?.title}</h2>
            <p className={`${bodyText} mx-auto mt-5 max-w-2xl`}>{clean(course.levelsComparison?.intro)}</p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {course.levelsComparison?.levels.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveLevel(index)}
                className={`px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em] ${
                  activeLevel === index ? 'bg-[#001D4B] text-white' : 'bg-white text-[#737A8A]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          {level ? (
            <div className="mx-auto mt-5 grid max-w-[880px] gap-0 bg-white shadow-sm md:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-[#8AD0E2] p-8 text-white">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/80">{level.label}</p>
                <h3 className="mt-3 font-display text-4xl font-black leading-tight">{level.name}</h3>
                <p className="mt-7 text-5xl font-black">{level.price}</p>
                <p className="mt-2 text-sm font-bold text-white/80">{level.priceLabel}</p>
                {level.benefit ? <p className="mt-6 border border-white/40 px-4 py-3 text-[11px] font-black uppercase tracking-[0.16em]">{level.benefit}</p> : null}
              </div>
              <div className="p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  {level.features.map((feature) => (
                    <div key={feature} className="flex gap-3 border-b border-[#EEF0F5] pb-3 text-sm font-semibold text-[#747C8C]">
                      <Check className="mt-0.5 shrink-0 text-[#2A56A8]" size={16} />
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-[12px] font-black uppercase tracking-[0.16em] text-[#8E94A3]">{level.hours}</p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="mb-10 text-center">
            <p className={smallCaps}>Faculty Asterys Lab</p>
            <h2 className={`${sectionTitle} mt-3`}>Persone vere, metodo vero.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {course.teachers.map((teacher) => (
              <article key={teacher.name} className="bg-[#EEF4FC]">
                <img src={teacher.img} alt={teacher.name} className="aspect-[4/5] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-base font-black leading-tight text-[#555C6D]">{teacher.name}</h3>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#2A56A8]">{teacher.creds}</p>
                  <p className="mt-3 text-[12px] font-semibold leading-relaxed text-[#747C8C]">{teacher.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001D4B] text-white">
        <div className="mx-auto grid max-w-[1080px] gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-20">
          <div className="flex justify-center">
            <img src="/brand/icf.png" alt="ICF" className="h-48 w-48 rounded-full bg-white object-contain p-7" />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#8AD0E2]">Network di valore</p>
            <h2 className="mt-3 font-display text-4xl font-black md:text-5xl">{course.career.title}</h2>
            <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed text-white/78">{course.career.content}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {course.career.points.map((point) => (
                <div key={point.title} className="border border-white/15 p-4">
                  <h3 className="text-sm font-black">{point.title}</h3>
                  <p className="mt-2 text-[12px] font-medium leading-relaxed text-white/65">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF4FC] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1080px] gap-8 px-6 md:grid-cols-2">
          {course.guarantee30Hours ? (
            <article className="bg-white p-8">
              <HeartHandshake className="mb-5 text-[#2A56A8]" size={38} />
              <p className={smallCaps}>{course.guarantee30Hours.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-black text-[#9B9DA9]">{course.guarantee30Hours.title}</h2>
              <p className={`${bodyText} mt-4`}>{clean(course.guarantee30Hours.body)}</p>
            </article>
          ) : null}
          {course.scholarship ? (
            <article className="bg-[#8AD0E2] p-8 text-white">
              <Sparkles className="mb-5" size={38} />
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/75">{course.scholarship.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl font-black">{course.scholarship.title}</h2>
              <p className="mt-3 text-5xl font-black">{course.scholarship.amount}</p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-white/85">{course.scholarship.body}</p>
            </article>
          ) : null}
        </div>
      </section>

      <section id="contatto" className="bg-white">
        <div className="mx-auto grid max-w-[1080px] gap-10 px-6 py-16 md:grid-cols-[1fr_0.95fr] md:items-center md:py-24">
          <img src="/course-media/apcm/card.png" alt="Parliamone APCM" className="h-[520px] w-full object-cover" />
          <div>
            <MessageCircle className="mb-5 text-[#2A56A8]" size={40} />
            <p className={smallCaps}>Parliamone</p>
            <h2 className={`${sectionTitle} mt-3`}>Diamo forma al tuo percorso.</h2>
            <p className={`${bodyText} mt-5`}>
              {firstOpenEdition ? `${firstOpenEdition.city} · ${firstOpenEdition.level} · ${firstOpenEdition.subtitle}` : course.summaryBox.dates}
              <br />
              Compila il form per ricevere informazioni sul Master APCM più adatto a te.
            </p>
            <form className="mt-8 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="h-12 border border-[#EEF4FC] bg-[#EEF4FC] px-4 text-sm outline-none" placeholder="Nome" />
                <input className="h-12 border border-[#EEF4FC] bg-[#EEF4FC] px-4 text-sm outline-none" placeholder="Indirizzo email" />
              </div>
              <input className="h-12 w-full border border-[#EEF4FC] bg-[#EEF4FC] px-4 text-sm outline-none" placeholder="Telefono" />
              <textarea className="h-28 w-full resize-none border border-[#EEF4FC] bg-[#EEF4FC] px-4 py-3 text-sm outline-none" placeholder="Messaggio" />
              <button type="button" className="bg-[#001D4B] px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white">
                Invia richiesta
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
