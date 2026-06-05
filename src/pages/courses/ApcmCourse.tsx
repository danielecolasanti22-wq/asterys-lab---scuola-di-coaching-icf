import CourseDetail from "../CourseDetail";
import { coursesContent } from "../../constants/coursesContent";

// Dati letti a render-time (non a livello di modulo) per compatibilità con il prerender SSR.
export default function ApcmCourse() {
  return <CourseDetail courseId="apcm" courseData={coursesContent["apcm"]} />;
}
