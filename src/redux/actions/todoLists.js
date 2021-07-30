import { ADD_TODO_LIST, REMOVE_TODO_LIST, EDIT_TODO_LIST } from '../types';

export function addTodoList(payload) {
  return {
    type: ADD_TODO_LIST,
    payload,
  };
}

export function removeTodoList(payload) {
  return {
    type: REMOVE_TODO_LIST,
    payload,
  };
}

export function editTodoList(payload) {
  return {
    type: EDIT_TODO_LIST,
    payload,
  };
}
