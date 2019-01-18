export const COURSE_SET_COURSE = 'lecture/COURSE_SET_COURSE';
export const COURSE_SET_DATA = 'lecture/COURSE_SET_DATA';

export const set_data = course => {
  return {
    type: COURSE_SET_DATA,
    payload: {
      topic: course.topic,
      data: {
        lectures: course.data.lectures,
        books: course.data.books
      }
    }
  };
};

export const set_course = course => {
  return {
    type: COURSE_SET_COURSE,
    payload: {
      topic: course.topic,
      courseUnit: course.courseUnit,
      step: course.step,
      lectures: course.lectures
    }
  };
};
