import { handleActions } from 'redux-actions';
import { SET_TOPICS } from '../actions/topics';

const initialState = {
  topics: []
};

export default handleActions(
  {
    [SET_TOPICS]: (state, action) => {
      return {
        ...state,
        topics: action.payload.topics
      };
    }
  },
  initialState
);
