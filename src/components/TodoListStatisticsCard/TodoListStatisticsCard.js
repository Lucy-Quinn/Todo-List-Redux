import React from 'react';
import { useSelector } from 'react-redux';

import TodoListCard from '../../components/TodoListCard';

const TodoListStatisticsCard = () => {
    const todoListArr = useSelector(state => state.todoListCategoriesReducer);

    return (
        <div>
            {todoListArr.map(todoList =>
                <TodoListCard key={todoList.id} currentTodoList={todoList} />
            )}

        </div>
    )
}

export default TodoListStatisticsCard
