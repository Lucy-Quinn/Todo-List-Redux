import { ADD_TODO_LIST, ADD_TODO_TO_LIST } from '../types';
import { v4 as uuidv4 } from 'uuid';

export default function todoListCategories(state = [], action) {
    switch (action.type) {
        case ADD_TODO_LIST:
            return [
                ...state,
                {
                    id: uuidv4(),
                    title: action.payload.todoListTitle,
                    isComplete: false,
                    isIncomplete: false,
                    color: action.payload.todoListColor,
                    todos: []
                }
            ];
        case ADD_TODO_TO_LIST:
            return state.map(todoList => {
                console.log('todoList', todoList.id === action.payload.todoListId);
                return (
                    todoList.id === action.payload.todoListId ?
                        {
                            ...todoList,
                            todos: action.payload.todo,
                        }
                        : todoList);
            })
        default:
            return state
    }
};

