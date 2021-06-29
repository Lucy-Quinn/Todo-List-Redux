import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, FAVORITE_TODO, ADD_NOTE, ADD_TODO_LIST_CATEGORY } from '../types';
import { v4 as uuidv4 } from 'uuid';

// const INITIALSTATE = [
//     {
//         id: uuidv4(),
//         text: 'Buy some bread',
//         isComplete: false,
//         isEdit: false,
//         isFavorite: false,
//         note: ''
//     },
//     {
//         id: uuidv4(),
//         text: 'Do a kata',
//         isComplete: false,
//         isEdit: false,
//         isFavorite: false,
//         note: 'Everyday this week'
//     },
//     {
//         id: uuidv4(),
//         text: 'Go for a run',
//         isComplete: false,
//         isEdit: false,
//         isFavorite: false,
//         note: 'Training for a marathon'
//     }
// ]

export default function todoItemsReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload.todoText,
                    isComplete: false,
                    isEdit: false,
                    isFavorite: false,
                    note: '',
                    todoList: ''
                }
            ];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.payload.todoId ?
                    {
                        ...todo,
                        text: action.payload.todoText,
                        isEdit: !todo.isEdit,
                    }
                    : todo);
        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.payload.todoId ?
                    {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                    : todo);
        case FAVORITE_TODO:
            return state.map(todo =>
                todo.id === action.payload.todoId ?
                    {
                        ...todo,
                        isFavorite: !todo.isFavorite
                    }
                    : todo);
        case ADD_NOTE:
            return state.map(todo => {
                return (
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            note: action.payload.todoNote,
                        }
                        : todo);
            });
        case ADD_TODO_LIST_CATEGORY:
            return state.map(todo => {
                return (
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            todoList: action.payload.todoListCategory,
                        }
                        : todo);
            })
        default:
            return state
    }
};
