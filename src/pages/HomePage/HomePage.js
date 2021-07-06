import React from 'react';

import AddTodoForm from '../../components/AddTodoForm';
import TodoItems from '../../components/TodoItems';
import { TodoListWrapper, TodoListCenter } from './HomePage.styled';
import SearchBar from '../../components/SearchBar';
import OrderTodos from '../../components/OrderTodos';

const HomePage = () => {

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

export default HomePage;