import { combineReducers } from 'redux';

import todoItemsReducer from './todoItemsReducer';
import themeReducer from './themeReducer';
import todoListsReducer from './todoListsReducer';
import emojiReducer from './emojiReducer';

const rootReducer = combineReducers({
  todoItemsReducer,
  todoListsReducer,
  themeReducer,
  emojiReducer,
});

export default rootReducer;
