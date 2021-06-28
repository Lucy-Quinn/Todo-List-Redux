import { createStore } from "redux";
import throttle from 'lodash/throttle';

import rootReducer from "./reducers";
import { loadState, saveState } from './../localStorage'

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
);

store.subscribe(throttle(() => {
    saveState(
        store.getState()
    )
}, 1000))

export default store;