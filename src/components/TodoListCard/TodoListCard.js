import React from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { TodoListWrapper, ItemsNumber } from './TodoListCard.styled';
import TodoListStatistics from './TodoListStatistics';
import useTruncateText from '../../hooks';

const TodoListCard = ({ currentTodoList }) => {

    const { title } = currentTodoList;
    const trucateText = useTruncateText(title, 12, 'text');

    const foundTodos = useSelector(state => state.todoItemsReducer.todos.filter(todo =>
        todo.todoList.includes(title)
    ));

    const location = useLocation();
    const { pathname } = location;
    const completeTodos = foundTodos.filter(todo => todo.isComplete).length;

    return (
        <TodoListWrapper>
            <div>
                {trucateText}
                <ItemsNumber>{completeTodos} / {foundTodos.length} items</ItemsNumber>
            </div>
            {pathname === '/statistics' &&
                <TodoListStatistics completeTodos={completeTodos} foundTodos={foundTodos} currentTodoList={currentTodoList} />
            }
        </TodoListWrapper>
    )
}

export default TodoListCard;
