import CourseDetail from '../CourseDetail';
import { coursesContent, type CourseData } from '../../constants/coursesContent';

const course = {
  ...coursesContent['continuous-learning'],
} satisfies CourseData;

export default function ContinuousLearningCourse() {
  return <CourseDetail courseId="continuous-learning" courseData={course} />;
}
