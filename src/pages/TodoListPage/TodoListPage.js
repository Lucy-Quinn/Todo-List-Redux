import React from 'react';

import TodoAddForm from '../../components/TodoAddForm';
import TodoList from '../../components/TodoList';
import { TodoListWrapper, TodoListCenter, TodoAppHeader } from './TodoListPage.styled';
import ToggleButton from '../../components/ToggleButton';

const TodoListPage = () => {

    return (
        <TodoListWrapper>
            <TodoListCenter>
                <ToggleButton />
                <TodoAppHeader>I've Got To Do This</TodoAppHeader>
                <TodoAddForm />
                <TodoList />
            </TodoListCenter>
        </TodoListWrapper>
    );
}

export default TodoListPage;