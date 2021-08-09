import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  FAVORITE_TODO,
  ADD_NOTE,
  ADD_TODO_LIST_CATEGORY,
  REMOVE_TODO_LIST_CATEGORY,
  EDIT_TODO_LIST_CATEGORY,
  ADD_TODO_DUE_DATE,
  FILTER_TODOS,
  ORDER_TODOS_BY_DATE_CREATED,
  ORDER_TODOS_ALPHABETICALLY,
  ORDER_TODOS_BY_FAVORITES,
} from '../types';

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload,
  };
}

export function editTodo(payload) {
  return {
    type: EDIT_TODO,
    payload,
  };
}

export function completeTodo(payload) {
  return {
    type: COMPLETE_TODO,
    payload,
  };
}

export function favoriteTodo(payload) {
  return {
    type: FAVORITE_TODO,
    payload,
  };
}

export function addNote(payload) {
  return {
    type: ADD_NOTE,
    payload,
  };
}

export function addTodoListCategory(payload) {
  return {
    type: ADD_TODO_LIST_CATEGORY,
    payload,
  };
}

export function removeTodoListCategory(payload) {
  return {
    type: REMOVE_TODO_LIST_CATEGORY,
    payload,
  };
}

export function editTodoListCategory(payload) {
  return {
    type: EDIT_TODO_LIST_CATEGORY,
    payload,
  };
}

export function addTodoDueDate(payload) {
  return {
    type: ADD_TODO_DUE_DATE,
    payload,
  };
}

export function filterTodos(payload) {
  return {
    type: FILTER_TODOS,
    payload,
  };
}

export function orderTodosByDateCreated(payload) {
  return {
    type: ORDER_TODOS_BY_DATE_CREATED,
    payload,
  };
}

export function orderTodosByFavorites(payload) {
  return {
    type: ORDER_TODOS_BY_FAVORITES,
    payload,
  };
}

export function orderTodosAlphabetically(payload) {
  return {
    type: ORDER_TODOS_ALPHABETICALLY,
    payload,
  };
}
