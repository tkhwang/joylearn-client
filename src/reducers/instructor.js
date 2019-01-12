import { handleActions } from 'redux-actions';
import {
  INSTRUCTOR_SET_ALL,
  INSTRUCTOR_UPDATE_INSTRUCTOR,
  INSTRUCTOR_ADD_COMMENTS,
  INSTRUCTOR_UPDATE_LECTURES,
  INSTRUCTOR_UPDATE_BOOKS
} from '../actions/instructor.js';

const initialState = {
  instructor: {},
  comments: {},
  lectures: {},
  books: {}
};

export default handleActions(
  {
    [INSTRUCTOR_SET_ALL]: (state, action) => {
      return {
        ...state,
        instructor: action.payload.instructor,
        comments: action.payload.comments,
        lectures: action.payload.lectures,
        books: action.payload.books
      };
    },
    [INSTRUCTOR_ADD_COMMENTS]: (state, action) => {
      return {
        ...state,
        comments: state.comments.concat(action.payload.comments)
      };
    },
    [INSTRUCTOR_UPDATE_INSTRUCTOR]: (state, action) => {
      return {
        ...state,
        instructor: action.payload.instructor
      };
    },
    [INSTRUCTOR_UPDATE_LECTURES]: (state, action) => {
      return {
        ...state,
        lectures: action.payload.lectures
      };
    },
    [INSTRUCTOR_UPDATE_BOOKS]: (state, action) => {
      return {
        ...state,
        books: action.payload.books
      };
    }
  },
  initialState
);
