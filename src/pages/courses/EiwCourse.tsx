import CourseDetail from '../CourseDetail';
import { coursesContent, type CourseData } from '../../constants/coursesContent';

const course = {
  ...coursesContent.eiw,
} satisfies CourseData;

export default function EiwCourse() {
  return <CourseDetail courseId="eiw" courseData={course} />;
}
