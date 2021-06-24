import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, FAVORITE_TODO } from '../types';
import { v4 as uuidv4 } from 'uuid';

const INITIALSTATE = [
    {
        id: uuidv4(),
        text: 'Buy some bread',
        isComplete: false,
        isEdit: false,
        isFavorite: false
    },
    {
        id: uuidv4(),
        text: 'Do a kata',
        isComplete: false,
        isEdit: false,
        isFavorite: false
    },
    {
        id: uuidv4(),
        text: 'Go for a run',
        isComplete: false,
        isEdit: false,
        isFavorite: false
    }
]

export default function todoListReducer(state = INITIALSTATE, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload.todoText,
                }
            ];
        case REMOVE_TODO:
            return state.filter(todo => {
                return todo.id !== action.payload
            });
        case EDIT_TODO:
            return state.map(todo => {
                return (
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            text: action.payload.todoText,
                            isEdit: !todo.isEdit,
                        }
                        : todo
                )

            }
            );
        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.payload.todoId ?
                    {
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                    : todo
            )
        case FAVORITE_TODO:
            return state.map(todo => {
                return (
                    todo.id === action.payload.todoId ?
                        {
                            ...todo,
                            isFavorite: !todo.isFavorite
                        }
                        : todo)
            }
            )
        default:
            return state
    }
};
