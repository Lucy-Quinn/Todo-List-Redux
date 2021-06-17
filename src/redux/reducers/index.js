import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO } from '../types';

const INITIALSTATE = [
    {
        id: '1',
        text: 'Buy some bread',
        complete: false,
        edit: false
    },
    {
        id: '2',
        text: 'Do a kata',
        complete: false,
        edit: false
    },
    {
        id: '3',
        text: 'Go for a run',
        complete: false,
        edit: false
    }
]

export default function rootReducer(state = INITIALSTATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.todoId,
                    text: action.todoText,
                    complete: false,
                    edit: false,
                }
            ];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case EDIT_TODO:
            return state.map((todo) => {
                if (todo.id !== action.todoId) {
                    return todo
                }
                return {
                    id: action.todoId,
                    text: action.todoText,
                    complete: action.todoComplete,
                    edit: true
                }
            });
        case COMPLETE_TODO:
            return state.map((todo) => {
                if (todo.id !== action.todoId) {
                    return todo
                }
                return {
                    id: action.todoId,
                    text: action.todoText,
                    complete: true,
                    edit: action.todoEdit
                }
            })
        default:
            return state
    }
};
