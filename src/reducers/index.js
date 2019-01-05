import { combineReducers } from 'redux';
import signinReducer from './signin';
import topicsReducer from './topics';

export default combineReducers({
  signin: signinReducer,
  topics: topicsReducer
});
