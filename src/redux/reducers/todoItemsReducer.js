import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, FAVORITE_TODO, ADD_NOTE, ADD_TODO_LIST_CATEGORY, ADD_TODO_DUE_DATE, FILTER_TODOS, ORDER_TODOS_BY_DATE_CREATED, ORDER_TODOS_ALPHABETICALLY, ORDER_TODOS_BY_FAVORITES } from '../types';
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

export default function todoItemsReducer(state = { todos: [], filtered: [], inputValue: '' }, action) {
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
                        dueDate: '',
                        dateCreated: action.payload.todoDateCreated
                    }
                ],
                inputValue: ''
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
                inputValue: searchInput
            };
        case ORDER_TODOS_BY_DATE_CREATED:
            state.filtered = [...state.todos];
            const { sortActionDate } = action.payload;
            const todosByDateCreated = state.filtered.sort((a, b) => b.dateCreated - a.dateCreated)
            return {
                ...state,
                filtered: todosByDateCreated,
                inputValue: sortActionDate
            };
        case ORDER_TODOS_BY_FAVORITES:
            state.filtered = [...state.todos];
            const { sortActionFavorites } = action.payload;
            const todosByFavorites = state.filtered.sort((a, b) => a.isFavorite ? -1 : 1)
            return {
                ...state,
                filtered: todosByFavorites,
                inputValue: sortActionFavorites
            };
        case ORDER_TODOS_ALPHABETICALLY:
            state.filtered = [...state.todos];
            const { sortActionAlphabetically } = action.payload;
            const todosAlphabetically = state.filtered.sort((a, b) => a.text.localeCompare(b.text))
            return {
                ...state,
                filtered: todosAlphabetically,
                inputValue: sortActionAlphabetically
            };
        default:
            return state
    }
};

