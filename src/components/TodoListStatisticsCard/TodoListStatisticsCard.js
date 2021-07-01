import React from 'react';
import { useSelector } from 'react-redux';

import TodoListCard from '../../components/TodoListCard';
import { StatisticsCardWrapper } from './TodoListStatisticsCard.styled';

const TodoListStatisticsCard = () => {
    const todoListArr = useSelector(state => state.todoListCategoriesReducer);

    return (
        <StatisticsCardWrapper>
            {todoListArr.map(todoList =>
                <TodoListCard key={todoList.id} currentTodoList={todoList} />
            )}
        </StatisticsCardWrapper>
    )
}

export default TodoListStatisticsCard
