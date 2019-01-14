import { handleActions } from 'redux-actions';
import { LECTURE_SET_ALL, LECTURE_ADD_COMMENTS } from '../actions/lecture.js';

const initialState = {
  lecture: {},
  comments: []
};

export default handleActions(
  {
    [LECTURE_SET_ALL]: (state, action) => {
      return {
        ...state,
        lecture: action.payload.lecture
      };
    },
    [LECTURE_ADD_COMMENTS]: (state, action) => {
      return {
        ...state,
        comments: state.comments.concat(action.payload.comments)
      };
    }
  },
  initialState
);
