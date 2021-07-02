import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, FAVORITE_TODO, ADD_NOTE, ADD_TODO_LIST_CATEGORY, ADD_TODO_DUE_DATE, FILTER_TODOS } from '../types';
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

export default function todoItemsReducer(state = { todos: [], filtered: [], searchInput: '' }, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uuidv4(),
                        text: action.payload.todoText,
                        isComplete: false,
                        isFavorite: false,
                        note: '',
                        todoList: action.payload.todoListTitle,
                        dueDate: ''
                    }
                ]
            };
        case REMOVE_TODO:
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload.todoId)
            return {
                ...state,
                todos: filteredTodos
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            text: action.payload.todoText,
                        }
                        : todo)
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            isComplete: !todo.isComplete
                        }
                        : todo)
            };
        case FAVORITE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            isFavorite: !todo.isFavorite
                        }
                        : todo)
            };
        case ADD_NOTE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            note: action.payload.todoNote,
                        }
                        : todo)
            };
        case ADD_TODO_LIST_CATEGORY:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            todoList: action.payload.todoListCategory,
                        }
                        : todo)
            };
        case ADD_TODO_DUE_DATE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            dueDate: action.payload.todoDueDate,
                        }
                        : todo)
            };
        case FILTER_TODOS:
            state.filtered = [...state.todos];
            const { searchInput } = action.payload;
            const foundItem = state.filtered.filter(todo => todo.text.toLowerCase().includes(searchInput.toLowerCase()))
            return {
                ...state,
                filtered: foundItem,
                searchInput
            };
        default:
            return state
    }
};