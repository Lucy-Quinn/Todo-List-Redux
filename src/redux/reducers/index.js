import { combineReducers } from 'redux';

import todoItemsReducer from './todoItemsReducer';
import themeReducer from './themeReducer';
import todoListCategoriesReducer from './todoListCategoriesReducer';

const rootReducer = combineReducers({ todoItemsReducer, todoListCategoriesReducer, themeReducer });

export default rootReducer;
