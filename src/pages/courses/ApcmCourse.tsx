import CourseDetail from '../CourseDetail';
import { coursesContent, type CourseData } from '../../constants/coursesContent';

const course = {
  ...coursesContent.apcm,
} satisfies CourseData;

export default function ApcmCourse() {
  return <CourseDetail courseId="apcm" courseData={course} />;
}
