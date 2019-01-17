export const COURSE_SET_COURSE = 'lecture/COURSE_SET_COURSE';

export const set_course = course => {
  return {
    type: COURSE_SET_COURSE,
    payload: {
      courseUnit: course.courseUnit,
      step: course.step,
      topic: course.topic,
      lecture: course.lecture
    }
  };
};
