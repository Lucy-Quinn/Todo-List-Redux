import React from 'react';

import TodoAddForm from '../../components/TodoAddForm';
import TodoItems from '../../components/TodoItems';
import { TodoListWrapper, TodoListCenter } from './HomePage.styled';

const TodoListPage = () => {

    return (
        <TodoListWrapper>
            <TodoListCenter>
                <TodoAddForm />
                <TodoItems />
            </TodoListCenter>
        </TodoListWrapper>
    );
}

export default TodoListPage;