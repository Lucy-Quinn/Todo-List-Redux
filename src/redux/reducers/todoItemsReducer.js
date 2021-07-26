import {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    FAVORITE_TODO,
    ADD_NOTE,
    ADD_TODO_LIST_CATEGORY,
    REMOVE_TODO_LIST_CATEGORY,
    ADD_TODO_DUE_DATE,
    FILTER_TODOS,
    ORDER_TODOS_BY_DATE_CREATED,
    ORDER_TODOS_ALPHABETICALLY,
    ORDER_TODOS_BY_FAVORITES
} from '../types';
import { v4 as uuidv4 } from 'uuid';
import {
    orderBy,
    filter,
    map,
    includes
} from 'lodash';

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
            const { inputValue: todoText, currentList: todoListTitle, todaysDate: todoDateCreated } = action.payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uuidv4(),
                        text: todoText,
                        isComplete: false,
                        isFavorite: false,
                        note: '',
                        todoList: todoListTitle,
                        dueDate: '',
                        dateCreated: todoDateCreated
                    }
                ],
                inputValue: ''
            };
        case REMOVE_TODO:
            const filteredTodos = filter(state.todos, (todo => todo.id !== action.payload.id));
            return {
                ...state,
                todos: filteredTodos
            };
        case EDIT_TODO:
            const { id: todoId, inputValue: todoDesc } = action.payload;
            return {
                ...state,
                todos: map(state.todos, (todo =>
                    todo.id === todoId ?
                        {
                            ...todo,
                            text: todoDesc,
                        }
                        : todo))
            };
        case COMPLETE_TODO:
            return {
                ...state,
                todos: map(state.todos, (todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            isComplete: !todo.isComplete
                        }
                        : todo))
            };
        case FAVORITE_TODO:
            return {
                ...state,
                todos: map(state.todos, (todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            isFavorite: !todo.isFavorite
                        }
                        : todo))
            };
        case ADD_NOTE:
            const { textAreaValue: todoNote } = action.payload;
            return {
                ...state,
                todos: map(state.todos, (todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            note: todoNote,
                        }
                        : todo))
            };
        case ADD_TODO_LIST_CATEGORY:
            const { todolistTitle: todoListCategory } = action.payload
            return {
                ...state,
                todos: map(state.todos, (todo => {
                    const { todoList } = todo;
                    return (
                        todo.id === action.payload.todoId ?
                            {
                                ...todo,
                                todoList: [...todoList, includes(todoList, todoListCategory) ? null : todoListCategory],
                            }
                            : todo)
                }))
            };
        case REMOVE_TODO_LIST_CATEGORY:
            const { title: todolistTitle } = action.payload;
            return {
                ...state,
                todos: map(state.todos, (todo =>
                    todo.todoList.includes(todolistTitle) ?
                        {
                            ...todo,
                            todoList: filter(todo.todoList, (todoCategory => todoCategory !== todolistTitle))
                        }
                        : todo))
            };
        case ADD_TODO_DUE_DATE:
            const { modifiedDate: todoDueDate } = action.payload;
            return {
                ...state,
                todos: map(state.todos, (todo =>
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            dueDate: todoDueDate,
                        }
                        : todo))
            };
        case FILTER_TODOS:
            state.filtered = [...state.todos];
            const { searchInput } = action.payload;
            const foundItem = filter(state.filtered, (todo => todo.text.toLowerCase().includes(searchInput.toLowerCase())));
            return {
                ...state,
                filtered: foundItem,
                inputValue: searchInput
            };

        case ORDER_TODOS_BY_DATE_CREATED:
            state.filtered = [...state.todos];
            const { sortAction: sortActionDates } = action.payload;
            const newestTodos = orderBy(state.filtered, (todo => new Date(todo.dateCreated)), 'desc')
            const oldestTodos = orderBy(state.filtered, (todo => new Date(todo.dateCreated)), 'asc')
            const todosByDateCreated = sortActionDates === 'newest' ? newestTodos : oldestTodos;
            return {
                ...state,
                filtered: todosByDateCreated,
                inputValue: sortActionDates
            };
        case ORDER_TODOS_BY_FAVORITES:
            state.filtered = [...state.todos];
            const { sortAction: sortActionFavorites } = action.payload;
            const todosByFavorites = orderBy(state.filtered, 'isFavorite', 'desc');
            return {
                ...state,
                filtered: todosByFavorites,
                inputValue: sortActionFavorites
            };
        case ORDER_TODOS_ALPHABETICALLY:
            state.filtered = [...state.todos];
            const { sortAction: sortActionAlphabetically } = action.payload;
            const todosAlphabetically = orderBy(state.filtered, 'text', 'asc');
            return {
                ...state,
                filtered: todosAlphabetically,
                inputValue: sortActionAlphabetically
            };
        default:
            return state
    };
};