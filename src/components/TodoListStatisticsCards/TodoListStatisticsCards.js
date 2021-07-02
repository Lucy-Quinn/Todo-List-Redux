import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import TodoListCard from '../TodoListCard';
import { StatisticsCardWrapper } from './TodoListStatisticsCards.styled';

const TodoListStatisticsCard = () => {

    const todoListArr = useSelector(state => state.todoListCategoriesReducer);

    return (
        <StatisticsCardWrapper>
            {todoListArr.map(todoList =>
                <Link to={`todoLists/${todoList.id}`} key={todoList.id} >
                    <TodoListCard currentTodoList={todoList} />
                </Link>
            )}
        </StatisticsCardWrapper>
    )
}

export default TodoListStatisticsCard
