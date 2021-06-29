import React from 'react';
import { useSelector } from 'react-redux';

import Todo from '../Todo';
import TodoListWrapper from './TodoItems.styled';

const TodoItems = () => {

    const todoListArr = useSelector(state => state.todoItemsReducer);
    const orderedByFavorite = todoListArr ? todoListArr.sort((a, b) => (a.isFavorite) ? -1 : 1) : null;

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
        <div>
            <h2>Add more todos...</h2>
        </div>
    )
}

export default TodoItems;