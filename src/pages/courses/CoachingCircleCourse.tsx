import CourseDetail from '../CourseDetail';
import { coursesContent, type CourseData } from '../../constants/coursesContent';

const course = {
  ...coursesContent['coaching-circle'],
} satisfies CourseData;

export default function CoachingCircleCourse() {
  return <CourseDetail courseId="coaching-circle" courseData={course} />;
}
