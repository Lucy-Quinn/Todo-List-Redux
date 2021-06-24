import React from 'react';
import { useSelector } from 'react-redux';

import Todo from '../Todo';
import TodoListWrapper from './TodoList.styled';

const TodoList = () => {

    const todoListArr = useSelector(state => state.todoListReducer);
    const orderedByFavorite = todoListArr.sort((a, b) => (a.isFavorite) ? -1 : 1)

    if (todoListArr.length >= 1) {
        return (
            <TodoListWrapper>
                {orderedByFavorite.map((currentTodo) =>
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