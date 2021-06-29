import React from 'react';

import { TodoWrapper } from './TodoList.styled';

const TodoList = ({ currentTodoList }) => {

    const { title, isComplete, isIncomplete, color } = currentTodoList;

    return (
        <TodoWrapper>
            <h1>{title}</h1>
            <p>{isComplete} / {isIncomplete} items</p>
        </TodoWrapper>
    )
}

export default TodoList;
