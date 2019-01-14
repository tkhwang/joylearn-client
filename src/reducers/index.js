import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import signinReducer from './signin';
import topicsReducer from './topics';
import instructorReducer from './instructor';
import bookReducer from './book';

export default history =>
  combineReducers({
    signin: signinReducer,
    topics: topicsReducer,
    instructor: instructorReducer,
    book: bookReducer,
    router: connectRouter(history)
  });
