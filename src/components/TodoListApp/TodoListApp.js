import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import TodoAddForm from '../TodoAddForm';
import TodoList from '../TodoList';
import { TodoListAppWrapper, TodoListAppCenter, TodoAppHeader } from './TodoListApp.styled';
import GlobalStyle from '../../globalStyles';
import ToggleButton from '../ToggleButton';

const TodoListApp = () => {

    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

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