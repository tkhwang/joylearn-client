import { combineReducers } from 'redux';
import signinReducer from './signin';
import topicsReducer from './topics';
import instructorReducer from './instructor';

export default combineReducers({
  signin: signinReducer,
  topics: topicsReducer,
  instructor: instructorReducer
});
