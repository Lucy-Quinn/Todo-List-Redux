import { ADD_TODO, REMOVE_TODO, EDIT_TODO, COMPLETE_TODO, FAVORITE_TODO, ADD_NOTE, ADD_TODO_LIST_CATEGORY, REMOVE_TODO_LIST_CATEGORY, ADD_TODO_DUE_DATE, FILTER_TODOS, ORDER_TODOS_BY_DATE_CREATED, ORDER_TODOS_ALPHABETICALLY, ORDER_TODOS_BY_FAVORITES } from '../types';

export function addTodo(todoText, todoListTitle, todoDateCreated) {
    return {
        type: ADD_TODO,
        payload: {
            todoText,
            todoListTitle,
            todoDateCreated
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

export function removeTodoListCategory(todoId, todoListCategory) {
    console.log(todoId);
    return {
        type: REMOVE_TODO_LIST_CATEGORY,
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

export function orderTodosByDateCreated(sortActionDate) {
    return {
        type: ORDER_TODOS_BY_DATE_CREATED,
        payload: {
            sortActionDate
        }
    }
};


export function orderTodosByFavorites(sortActionFavorites) {
    return {
        type: ORDER_TODOS_BY_FAVORITES,
        payload: {
            sortActionFavorites
        }
    }
};


export function orderTodosAlphabetically(sortActionAlphabetically) {
    return {
        type: ORDER_TODOS_ALPHABETICALLY,
        payload: {
            sortActionAlphabetically
        }
    }
};
