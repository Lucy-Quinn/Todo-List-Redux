import React from 'react';

import AddTodoForm from '../../components/AddTodoForm';
import TodoItems from '../../components/TodoItems';
import { TodoListWrapper, TodoListCenter } from './HomePage.styled';

const TodoListPage = () => {

    return (
        <TodoListWrapper>
            <TodoListCenter>
                <AddTodoForm />
                <TodoItems />
            </TodoListCenter>
        </TodoListWrapper>
    );
}

export default TodoListPage;