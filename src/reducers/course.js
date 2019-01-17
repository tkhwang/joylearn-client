import { handleActions } from 'redux-actions';
import { COURSE_SET_COURSE } from '../actions/course.js';

const initialState = {
  course: []
};

export default handleActions(
  {
    [COURSE_SET_COURSE]: (state, action) => {
      return {
        ...state,
        course: state.course.concat(action.payload.course)
      };
    }
  },
  initialState
);
