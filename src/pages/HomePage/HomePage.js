import React from 'react';

import AddTodoForm from '../../components/AddTodoForm';
import TodoItems from '../../components/TodoItems';
import { TodoListWrapper, TodoListCenter } from './HomePage.styled';
import SearchBar from '../../components/SearchBar';

const TodoListPage = () => {

    return (
        <TodoListWrapper>
            <TodoListCenter>
                <SearchBar />
                <AddTodoForm />
                <TodoItems />
            </TodoListCenter>
        </TodoListWrapper>
    );
}

export default TodoListPage;