import React from 'react';
import { useSelector } from 'react-redux';

import { TodoWrapper } from './TodoList.styled';

const TodoList = ({ currentTodoList }) => {

    const { title } = currentTodoList;

    const foundTodos = useSelector(state => state.todoItemsReducer.filter(todo =>
        todo.todoList === title
    ));

    const completeTodos = foundTodos.filter(todo => todo.isComplete).length;

    return (
        <TodoWrapper>
            <h1>{title}</h1>
            <p>{completeTodos} / {foundTodos.length} items</p>
        </TodoWrapper>
    )
}

export default TodoList;
