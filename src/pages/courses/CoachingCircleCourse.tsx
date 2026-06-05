import CourseDetail from "../CourseDetail";
import { coursesContent } from "../../constants/coursesContent";

// Dati letti a render-time (non a livello di modulo) per compatibilità con il prerender SSR.
export default function CoachingCircleCourse() {
  return <CourseDetail courseId="coaching-circle" courseData={coursesContent["coaching-circle"]} />;
}
