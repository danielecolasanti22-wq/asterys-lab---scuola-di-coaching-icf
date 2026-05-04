import CourseDetail from '../CourseDetail';
import { coursesContent, type CourseData } from '../../constants/coursesContent';

const course = {
  ...coursesContent['voice-dialogue'],
} satisfies CourseData;

export default function VoiceDialogueCourse() {
  return <CourseDetail courseId="voice-dialogue" courseData={course} />;
}
