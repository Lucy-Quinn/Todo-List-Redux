import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { TodoListWrapper, ItemsNumber } from './TodoListCard.styled';
import TodoListStatistics from './TodoListStatistics';

const TodoListCard = ({ currentTodoList }) => {

    const { title } = currentTodoList;

    const foundTodos = useSelector(state => state.todoItemsReducer.todos.filter(todo =>
        todo.todoList === title
    ));

    const location = useLocation();
    const { pathname } = location;
    const completeTodos = foundTodos.filter(todo => todo.isComplete).length;

    return (
        <TodoListWrapper>
            <h3>{title}</h3>
            {pathname === '/statistics' &&
                <TodoListStatistics completeTodos={completeTodos} foundTodos={foundTodos} currentTodoList={currentTodoList} />
            }
            <ItemsNumber>{completeTodos} / {foundTodos.length} items</ItemsNumber>
        </TodoListWrapper>
    )
}

export default TodoListCard;
