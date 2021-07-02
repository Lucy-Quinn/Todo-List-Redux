import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import TodoListCard from '../TodoListCard';

const TodoLists = () => {

    const todoListsArr = useSelector(state => state.todoListsReducer);

    return (
        <div>
            {todoListsArr.map((currentTodoList) =>
                <Link to={`/todoLists/${currentTodoList.id}`} key={currentTodoList.id}>
                    <TodoListCard currentTodoList={currentTodoList} />
                </Link>
            )}
        </div>
    )
}

export default TodoLists
