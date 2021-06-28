import { combineReducers } from 'redux';

import todoItemsReducer from './todoItemsReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({ todoItemsReducer, themeReducer });

export default rootReducer;
