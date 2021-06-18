import React from 'react';
import TodoAddForm from '../TodoAddForm';
import TodoList from '../TodoList';
import { TodoListAppWrapper, TodoListAppCenter, TodoAppHeader } from './TodoListApp.styled';
import GlobalStyle from '../GlobalStyle';
import ToggleButton from '../ToggleButton';
import { useSelector } from 'react-redux';

const TodoListApp = () => {

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    return (
        <TodoListAppWrapper>
            <TodoListAppCenter>
                <GlobalStyle theme={theme} />
                <ToggleButton />
                <TodoAppHeader>I've Got To Do This</TodoAppHeader>
                <TodoAddForm />
                <TodoList />
            </TodoListAppCenter>
        </TodoListAppWrapper>
    );
}

export default TodoListApp;