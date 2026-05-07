import CourseDetail from './CourseDetail';
import { coursesContent, type CourseData } from '../constants/coursesContent';

const course = {
  ...coursesContent.apcm,
} satisfies CourseData;

export default function NuovaPagina2() {
  return (
    <div className="apcm-full-width">
      <CourseDetail courseId="apcm" courseData={course} />
    </div>
  );
}
