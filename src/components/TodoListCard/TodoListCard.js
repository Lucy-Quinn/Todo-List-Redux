import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { TodoListWrapper, ItemsNumber } from './TodoListCard.styled';
import TodoListStatistics from './TodoListStatistics';
import truncateUtils from '../../utils/truncateUtils';

const TodoListCard = ({ currentTodoList }) => {

    const currentTodoListTitle = currentTodoList.title;
    const [title, setTitle] = useState(currentTodoListTitle);
    const foundTodos = useSelector(state => state.todoItemsReducer.todos.filter(todo =>
        todo.todoList.includes(title)
    ));

    const location = useLocation();
    const { pathname } = location;
    const completeTodos = foundTodos.filter(todo => todo.isComplete).length;


    useEffect(() => {
        truncateUtils(currentTodoListTitle, 14, setTitle)
    }, [title, currentTodoListTitle])


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
