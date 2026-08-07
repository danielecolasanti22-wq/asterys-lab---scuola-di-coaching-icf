import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LayoutWrapper } from './components/layout/Layout';
import Seo from './components/Seo';

// La Home resta caricata subito (eager) per un atterraggio istantaneo, senza flash.
import Home from './pages/Home';

// Tutte le altre pagine sono caricate on-demand (code-splitting per route):
// riduce il JS del primo caricamento e isola i moduli pesanti (CourseDetail, coursesContent, blogPosts).
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const ApcmCourse = lazy(() => import('./pages/courses/ApcmCourse'));
const SystemicTeamCoachingCourse = lazy(() => import('./pages/courses/SystemicTeamCoachingCourse'));
const EiwCourse = lazy(() => import('./pages/courses/EiwCourse'));
const CoachingCircleCourse = lazy(() => import('./pages/courses/CoachingCircleCourse'));
const VoiceDialogueCourse = lazy(() => import('./pages/courses/VoiceDialogueCourse'));
const MarketingPerCoachCourse = lazy(() => import('./pages/courses/MarketingPerCoachCourse'));
const ContinuousLearningCourse = lazy(() => import('./pages/courses/ContinuousLearningCourse'));
const PublicSpeakingCourse = lazy(() => import('./pages/courses/PublicSpeakingCourse'));
const Events = lazy(() => import('./pages/Events'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const Corporate = lazy(() => import('./pages/Corporate'));
const About = lazy(() => import('./pages/About'));
const Iscriviti = lazy(() => import('./pages/Iscriviti'));
const BorsaDiStudio = lazy(() => import('./pages/BorsaDiStudio'));
const CreditoAiTalenti = lazy(() => import('./pages/CreditoAiTalenti'));
const PersonalCoaching = lazy(() => import('./pages/PersonalCoaching'));
const PrivacyPolicy = lazy(() => import('./pages/Legal').then((m) => ({ default: m.PrivacyPolicy })));
const CookiePolicy = lazy(() => import('./pages/Legal').then((m) => ({ default: m.CookiePolicy })));
const Terms = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import('./pages/NotFound'));

// --- Global Scroll Recovery Component ---
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

// Placeholder discreto durante il caricamento del chunk di pagina (riserva l'altezza per evitare salti).
const PageFallback = () => <div className="min-h-[60vh]" aria-hidden />;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Seo />
      <LayoutWrapper>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corsi" element={<Courses />} />
            <Route path="/corsi/apcm" element={<ApcmCourse />} />
            <Route path="/corsi/systemic-team-coaching" element={<SystemicTeamCoachingCourse />} />
            <Route path="/corsi/eiw" element={<EiwCourse />} />
            <Route path="/corsi/coaching-circle" element={<CoachingCircleCourse />} />
            <Route path="/corsi/voice-dialogue" element={<VoiceDialogueCourse />} />
            <Route path="/corsi/marketing-per-coach" element={<MarketingPerCoachCourse />} />
            <Route path="/corsi/continuous-learning" element={<ContinuousLearningCourse />} />
            <Route path="/corsi/public-speaking" element={<PublicSpeakingCourse />} />
            <Route path="/corsi/:id" element={<CourseDetail />} />
            <Route path="/eventi" element={<Events />} />
            <Route path="/eventi/:id" element={<EventDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/aziende" element={<Corporate />} />
            <Route path="/personal-coaching" element={<PersonalCoaching />} />
            <Route path="/about" element={<About />} />
            <Route path="/iscriviti" element={<Iscriviti />} />
            <Route path="/borsa-di-studio" element={<BorsaDiStudio />} />
            <Route path="/credito-ai-talenti" element={<CreditoAiTalenti />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookie" element={<CookiePolicy />} />
            <Route path="/termini" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </LayoutWrapper>
    </Router>
  );
}
