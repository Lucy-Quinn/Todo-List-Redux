import React from 'react';

import TodoAddForm from '../TodoAddForm';
import TodoList from '../TodoList';
import { TodoListAppWrapper, TodoListAppCenter, TodoAppHeader } from './TodoListApp.styled';
import ToggleButton from '../ToggleButton';

const TodoListApp = () => {

    return (
        <TodoListAppWrapper>
            <TodoListAppCenter>
                <ToggleButton />
                <TodoAppHeader>I've Got To Do This</TodoAppHeader>
                <TodoAddForm />
                <TodoList />
            </TodoListAppCenter>
        </TodoListAppWrapper>
    );
}

export default TodoListApp;