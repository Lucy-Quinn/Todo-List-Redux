import { combineReducers } from 'redux';

import todoItemsReducer from './todoItemsReducer';
import themeReducer from './themeReducer';
import todoListsReducer from './todoListsReducer';

const rootReducer = combineReducers({
  todoItemsReducer,
  todoListsReducer,
  themeReducer,
});

export default rootReducer;
