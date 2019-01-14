import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import signinReducer from './signin';
import topicsReducer from './topics';
import instructorReducer from './instructor';
import lectureReducer from './lecture';

export default history =>
  combineReducers({
    signin: signinReducer,
    topics: topicsReducer,
    instructor: instructorReducer,
    lecture: lectureReducer,
    router: connectRouter(history)
  });
