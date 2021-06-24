import React from 'react';
import { useSelector } from 'react-redux';

import Todo from '../Todo';
import TodoListWrapper from './TodoList.styled';

const TodoList = () => {

    const todoListArr = useSelector(state => state.todoListReducer);

    if (todoListArr.length >= 1) {
        return (
            <TodoListWrapper>
                {todoListArr.map((currentTodo) =>
                    <Todo key={currentTodo.id} currentTodo={currentTodo} />)
                }
            </TodoListWrapper>
        )
    }
    return (
        <div>{null}</div>
    )
}

export default TodoList;