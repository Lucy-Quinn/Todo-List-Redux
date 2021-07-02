import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, FAVORITE_TODO, ADD_NOTE, ADD_TODO_LIST_CATEGORY, ADD_TODO_DUE_DATE, FILTER_TODOS } from '../types';

export function addTodo(todoText, todoListTitle) {
    return {
        type: ADD_TODO,
        payload: {
            todoText,
            todoListTitle
        }
    }
};

export function removeTodo(todoId) {
    return {
        type: REMOVE_TODO,
        payload: {
            todoId
        }
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

export function addTodoListCategory(todoId, todoListCategory) {
    return {
        type: ADD_TODO_LIST_CATEGORY,
        payload: {
            todoId,
            todoListCategory
        }
    }
};

export function addTodoDueDate(todoId, todoDueDate) {
    return {
        type: ADD_TODO_DUE_DATE,
        payload: {
            todoId,
            todoDueDate
        }
    }
};


export function filterTodos(searchInput) {
    return {
        type: FILTER_TODOS,
        payload: {
            searchInput
        }
    }
};

