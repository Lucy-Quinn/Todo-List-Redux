import React from 'react';

import TodoAddForm from '../../components/TodoAddForm';
import TodoList from '../../components/TodoList';
import { TodoListWrapper, TodoListCenter } from './TodoListPage.styled';

const TodoListPage = () => {

    return (
        <TodoListWrapper>
            <TodoListCenter>
                <TodoAddForm />
                <TodoList />
            </TodoListCenter>
        </TodoListWrapper>
    );
}

export default TodoListPage;