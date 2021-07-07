
/**
 * name - string
 * duration - string
 * instructor - string
 */

interface Course {
  name: string;
  duration: number;
  instructor: string;
}

class CreateCourseService {
  execute({ name, duration, instructor }: Course) {
    console.log(name, duration, instructor);
  }
}

export default new CreateCourseService();