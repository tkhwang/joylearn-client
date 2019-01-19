import { handleActions } from 'redux-actions';
import {
  COURSE_SET_TOPIC,
  COURSE_SET_LECTURE,
  COURSE_SET_BOOK,
  COURSE_SET_COMMENT,
  COURSE_ADD_COURSE
} from '../actions/course.js';

const initialState = {
  topic: '',
  title: '',
  courses: [],
  lecture: '',
  book: '',
  comment: '',
  data: {
    lectures: [],
    books: []
  }
};

export default handleActions(
  {
    [COURSE_SET_TOPIC]: (state, action) => {
      return {
        ...state,
        topic: action.payload.topic,
        data: {
          ...state.data,
          lectures: action.payload.data.lectures,
          books: action.payload.data.books
        }
      };
    },
    [COURSE_SET_LECTURE]: (state, action) => {
      return {
        ...state,
        lecture: action.payload.lecture
      };
    },
    [COURSE_SET_BOOK]: (state, action) => {
      return {
        ...state,
        book: action.payload.book
      };
    },
    [COURSE_SET_COMMENT]: (state, action) => {
      return {
        ...state,
        comment: action.payload.comment
      };
    },
    [COURSE_ADD_COURSE]: (state, action) => {
      return {
        ...state,
        courses: state.courses.concat(action.payload.course)
      };
    }
  },
  initialState
);
