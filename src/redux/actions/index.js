import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, FAVORITE_TODO, ADD_NOTE, TOGGLE_THEME_BUTTON } from '../types';

export function addTodo(todoText) {
    return {
        type: ADD_TODO,
        payload: {
            todoText,
        }
    }
};

export function removeTodo(todoId) {
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
};

export function editTodo(todoId, todoText) {
    return {
        type: EDIT_TODO,
        payload: {
            todoId,
            todoText
        }
    }
};

export function completeTodo(todoId) {
    return {
        type: COMPLETE_TODO,
        payload: {
            todoId,
        }
    }
};

export function favoriteTodo(todoId) {
    return {
        type: FAVORITE_TODO,
        payload: {
            todoId,
        }
    }
};

export function addNote(todoId, todoNote) {
    return {
        type: ADD_NOTE,
        payload: {
            todoId,
            todoNote
        }
    }
};

export function toggleThemeButton(toggleTheme) {
    return {
        type: TOGGLE_THEME_BUTTON,
        payload: {
            toggleTheme
        }
    }
};
