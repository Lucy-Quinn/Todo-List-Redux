import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { TodoListWrapper } from './TodoListCard.styled';
import TodoListStatistics from './TodoListStatistics';

const TodoListCard = ({ currentTodoList }) => {

    const { title } = currentTodoList;

    const foundTodos = useSelector(state => state.todoItemsReducer.filter(todo =>
        todo.todoList === title
    ));
    const location = useLocation();
    const { pathname } = location;
    const completeTodos = foundTodos.filter(todo => todo.isComplete).length;

    return (
        <TodoListWrapper>
            <h1>{title}</h1>
            {pathname === '/statistics' &&
                <TodoListStatistics completeTodos={completeTodos} foundTodos={foundTodos} currentTodoList={currentTodoList} />
            }
            <p>{completeTodos} / {foundTodos.length} items</p>
        </TodoListWrapper>
    )
}

export default TodoListCard;
