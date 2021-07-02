import { ADD_TODO_LIST, ADD_TODO_TO_LIST, REMOVE_TODO_LIST } from '../types';
import { v4 as uuidv4 } from 'uuid';

export default function todoListsReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO_LIST:
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.payload.todoListTitle,
                    isComplete: false,
                    isIncomplete: false,
                    color: action.payload.todoListColor
                }
            ];
        case ADD_TODO_TO_LIST:
            return state.map(todoList => {
                return (
                    todoList.id === action.payload.todoListId ?
                        {
                            ...todoList,
                            todos: action.payload.todo,
                        }
                        : todoList);
            });
        case REMOVE_TODO_LIST: return state.filter(todoList => todoList.id !== action.payload.todoListId);
        default:
            return state
    }
};

