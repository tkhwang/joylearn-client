import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducers';

// set up our composeEnhancers function, baed on the existence of the
// DevTools extension when creating the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

export default store;
