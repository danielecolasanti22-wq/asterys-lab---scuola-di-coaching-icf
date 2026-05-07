import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LayoutWrapper } from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import ApcmCourse from './pages/courses/ApcmCourse';
import SystemicTeamCoachingCourse from './pages/courses/SystemicTeamCoachingCourse';
import EiwCourse from './pages/courses/EiwCourse';
import CoachingCircleCourse from './pages/courses/CoachingCircleCourse';
import VoiceDialogueCourse from './pages/courses/VoiceDialogueCourse';
import ContinuousLearningCourse from './pages/courses/ContinuousLearningCourse';
import PublicSpeakingCourse from './pages/courses/PublicSpeakingCourse';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Corporate from './pages/Corporate';
import About from './pages/About';
import Iscriviti from './pages/Iscriviti';
import NuovaPagina from './pages/NuovaPagina';

// --- Global Scroll Recovery Component ---
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corsi" element={<Courses />} />
          <Route path="/corsi/apcm" element={<ApcmCourse />} />
          <Route path="/corsi/systemic-team-coaching" element={<SystemicTeamCoachingCourse />} />
          <Route path="/corsi/eiw" element={<EiwCourse />} />
          <Route path="/corsi/coaching-circle" element={<CoachingCircleCourse />} />
          <Route path="/corsi/voice-dialogue" element={<VoiceDialogueCourse />} />
          <Route path="/corsi/continuous-learning" element={<ContinuousLearningCourse />} />
          <Route path="/corsi/public-speaking" element={<PublicSpeakingCourse />} />
          <Route path="/corsi/:id" element={<CourseDetail />} />
          <Route path="/eventi" element={<Events />} />
          <Route path="/eventi/:id" element={<EventDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/aziende" element={<Corporate />} />
          <Route path="/about" element={<About />} />
          <Route path="/iscriviti" element={<Iscriviti />} />
          <Route path="/nuova-pagina" element={<NuovaPagina />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
