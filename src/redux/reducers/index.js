import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO } from '../types';

const INITIALSTATE = [
    {
        id: '1',
        text: 'Buy some bread',
        isComplete: false,
        isEdit: false
    },
    {
        id: '2',
        text: 'Do a kata',
        isComplete: false,
        isEdit: false
    },
    {
        id: '3',
        text: 'Go for a run',
        isComplete: false,
        isEdit: false
    }
]

export default function rootReducer(state = INITIALSTATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.todoId,
                    text: action.payload.todoText,
                    isComplete: false,
                    isEdit: false,
                }
            ];
        case REMOVE_TODO:
            return state.filter(todo => {
                return todo.id !== action.payload
            });
        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.payload.todoId ?
                    {
                        ...todo,
                        text: action.payload.todoText,
                        isEdit: action.payload.todoEdit,
                    }
                    : todo
            );
        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.payload.todoId ?
                    {
                        ...todo,
                        isComplete: !action.payload.todoComplete
                    }
                    : todo
            )
        default:
            return state
    }
};
