import CourseDetail from "../CourseDetail";
import { coursesContent } from "../../constants/coursesContent";

// Dati letti a render-time (non a livello di modulo) per compatibilità con il prerender SSR.
export default function ContinuousLearningCourse() {
  return <CourseDetail courseId="continuous-learning" courseData={coursesContent["continuous-learning"]} />;
}
