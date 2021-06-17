import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);
