import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LayoutWrapper } from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Corporate from './pages/Corporate';
import About from './pages/About';
import Iscriviti from './pages/Iscriviti';

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
          <Route path="/corsi/:id" element={<CourseDetail />} />
          <Route path="/eventi" element={<Events />} />
          <Route path="/eventi/:id" element={<EventDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/aziende" element={<Corporate />} />
          <Route path="/about" element={<About />} />
          <Route path="/iscriviti" element={<Iscriviti />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
