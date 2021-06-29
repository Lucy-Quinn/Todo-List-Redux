import { ADD_TODO_LIST, DELETE_TODO_LIST, ADD_TODO_TO_LIST } from '../types';

export function addTodoList(todoListTitle, todoListColor) {
    return {
        type: ADD_TODO_LIST,
        payload: {
            todoListTitle,
            todoListColor
        }
    }
};

export function deleteTodoList(todoListTitle, todoListColor) {
    return {
        type: DELETE_TODO_LIST,
        payload: {
            todoListTitle,
            todoListColor
        }
    }
};

export function addTodoToList(todoListId, todo) {
    return {
        type: ADD_TODO_TO_LIST,
        payload: {
            todoListId,
            todo
        }
    }
};

