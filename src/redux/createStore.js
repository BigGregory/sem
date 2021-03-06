import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export const middlewares = [ thunk, logger ];

export const store = createStore(
  rootReducer, compose(applyMiddleware(...middlewares),
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
  ? a => a
  : window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;
