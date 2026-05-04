import CourseDetail from '../CourseDetail';
import { coursesContent, type CourseData } from '../../constants/coursesContent';

const course = {
  ...coursesContent['public-speaking'],
} satisfies CourseData;

export default function PublicSpeakingCourse() {
  return <CourseDetail courseId="public-speaking" courseData={course} />;
}
