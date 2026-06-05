import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('pages/Home.tsx'),
  route('corsi', 'pages/Courses.tsx'),
  route('corsi/apcm', 'pages/courses/ApcmCourse.tsx'),
  route('corsi/systemic-team-coaching', 'pages/courses/SystemicTeamCoachingCourse.tsx'),
  route('corsi/eiw', 'pages/courses/EiwCourse.tsx'),
  route('corsi/coaching-circle', 'pages/courses/CoachingCircleCourse.tsx'),
  route('corsi/voice-dialogue', 'pages/courses/VoiceDialogueCourse.tsx'),
  route('corsi/continuous-learning', 'pages/courses/ContinuousLearningCourse.tsx'),
  route('corsi/public-speaking', 'pages/courses/PublicSpeakingCourse.tsx'),
  route('eventi', 'pages/Events.tsx'),
  route('eventi/:id', 'pages/EventDetail.tsx'),
  route('blog', 'pages/Blog.tsx'),
  route('blog/:id', 'pages/BlogPostDetail.tsx'),
  route('aziende', 'pages/Corporate.tsx'),
  route('about', 'pages/About.tsx'),
  route('iscriviti', 'pages/Iscriviti.tsx'),
  route('nuova-pagina', 'pages/NuovaPagina.tsx'),
  route('nuova-pagina-2', 'pages/NuovaPagina2.tsx'),
] satisfies RouteConfig;
