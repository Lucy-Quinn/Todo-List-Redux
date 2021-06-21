import { combineReducers } from 'redux';

import todoListReducer from './todoListReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({ todoListReducer, themeReducer });

export default rootReducer;
