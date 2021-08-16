import { ADD_TODO_LIST, EDIT_TODO_LIST, REMOVE_TODO_LIST } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { filter, map } from 'lodash';

export default function todoListsReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO_LIST:
      const { todoListTitle, todoListColor } = action.payload;
      return [
        ...state,
        {
          id: uuidv4(),
          title: todoListTitle,
          color: todoListColor,
        },
      ];
    case EDIT_TODO_LIST:
      const { id: todoListId, inputValue: todoListText } = action.payload;
      return map(state, (todoList) =>
        todoList.id === todoListId
          ? {
              ...todoList,
              title: todoListText,
            }
          : todoList
      );
    case REMOVE_TODO_LIST:
      return filter(state, (todoList) => todoList.id !== action.payload.id);
    default:
      return state;
  }
}
