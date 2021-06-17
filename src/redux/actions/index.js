import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO } from './../types';

export function addTodo(todoId, todoText, todoComplete, todoEdit) {
    return {
        type: ADD_TODO,
        payload: {
            todoId,
            todoText,
            todoComplete,
            todoEdit
        }
    }
};

export function removeTodo(todoId) {
    return {
        type: REMOVE_TODO,
        payload: todoId
    }
};

export function editTodo(todoId, todoText, todoComplete, todoEdit) {
    return {
        type: EDIT_TODO,
        payload: {
            todoId,
            todoText,
            todoComplete,
            todoEdit
        }
    }
};

export function completeTodo(todoId, todoText, todoComplete, todoEdit) {
    return {
        type: COMPLETE_TODO,
        payload: {
            todoId,
            todoText,
            todoComplete,
            todoEdit
        }
    }
};