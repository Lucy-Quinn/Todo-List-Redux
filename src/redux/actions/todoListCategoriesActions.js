import { ADD_TODO_LIST, REMOVE_TODO_LIST, ADD_TODO_TO_LIST } from '../types';

export function addTodoList(todoListTitle, todoListColor) {
    return {
        type: ADD_TODO_LIST,
        payload: {
            todoListTitle,
            todoListColor
        }
    }
};

export function removeTodoList(todoListId) {
    return {
        type: REMOVE_TODO_LIST,
        payload: {
            todoListId,
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

