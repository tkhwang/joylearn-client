import { handleActions } from 'redux-actions';
import { COURSE_SET_DATA, COURSE_SET_COURSE } from '../actions/course.js';

const initialState = {
  topic: '',
  courseUnit: '',
  step: 0,
  data: {
    lectures: [],
    books: []
  }
};

export default handleActions(
  {
    [COURSE_SET_DATA]: (state, action) => {
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
    [COURSE_SET_COURSE]: (state, action) => {
      return {
        ...state,
        topic: action.payload.topic
      };
    }
  },
  initialState
);
