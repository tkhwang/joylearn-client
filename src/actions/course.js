export const COURSE_SET_TOPIC = 'course/COURSE_SET_TOPIC';
export const COURSE_SET_LECTURE = 'course/COURSE_SET_LECTURE';
export const COURSE_SET_BOOK = 'course/COURSE_SET_BOOK';
export const COURSE_SET_COMMENT = 'course/COURSE_SET_COMMENT';
export const COURSE_ADD_COURSE = 'course/COURSE_ADD_COURSE';

export const set_topic = course => {
  return {
    type: COURSE_SET_TOPIC,
    payload: {
      topic: course.topic,
      data: { lectures: course.data.lectures, books: course.data.books }
    }
  };
};

export const set_lecture = lecture => {
  return {
    type: COURSE_SET_LECTURE,
    payload: {
      lecture: lecture
    }
  };
};

export const set_book = book => {
  return { type: COURSE_SET_BOOK, payload: { book: book } };
};

export const set_comment = comment => {
  return { type: COURSE_SET_COMMENT, payload: { comment: comment } };
};

export const add_course = course => {
  return { type: COURSE_ADD_COURSE, payload: { course: course } };
};
