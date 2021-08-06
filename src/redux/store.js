import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';

import { loadState, saveState } from './../localStorage';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const persistedState = loadState();

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  withDevTools(applyMiddleware(sagaMiddleware))
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
sagaMiddleware.run(rootSaga);

export default store;
