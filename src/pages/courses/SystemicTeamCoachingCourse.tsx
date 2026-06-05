import CourseDetail from "../CourseDetail";
import { coursesContent } from "../../constants/coursesContent";

// Dati letti a render-time (non a livello di modulo) per compatibilità con il prerender SSR.
export default function SystemicTeamCoachingCourse() {
  return <CourseDetail courseId="systemic-team-coaching" courseData={coursesContent["systemic-team-coaching"]} />;
}
