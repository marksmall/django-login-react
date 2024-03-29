import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import account from './accounts/accounts.reducer';
import admin from './accounts/admin/users.reducer';
import theming from './theming/theming.reducer';

export const history = createBrowserHistory();

const createRootReducer = history =>
  combineReducers({
    account,
    theming,
    admin,
    router: connectRouter(history)
  });

// 1. Setup store to use middleware (thunk) to create API calls.
// 2. Add redux-logger to middleware.
const middleware = [thunk, routerMiddleware(history)];

let store;

if (process.env.NODE_ENV === 'development') {
  // 1. Add redux dev tools (development mode only).
  // 2. Create store composed of reducers and middleware.
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(createRootReducer(history), composeEnhancer(applyMiddleware(...middleware)));
} else {
  // 1. Create store composed of reducers and middleware.
  store = createStore(createRootReducer(history), applyMiddleware(...middleware));
}

export default store;
