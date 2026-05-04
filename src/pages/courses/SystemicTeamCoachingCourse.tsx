import CourseDetail from '../CourseDetail';
import { coursesContent, type CourseData } from '../../constants/coursesContent';

const course = {
  ...coursesContent['systemic-team-coaching'],
} satisfies CourseData;

export default function SystemicTeamCoachingCourse() {
  return <CourseDetail courseId="systemic-team-coaching" courseData={course} />;
}
