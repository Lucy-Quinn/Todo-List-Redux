import React, { useContext } from 'react';
import Todo from '../Todo';
import TodoListWrapper from './TodoList.styled';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todoListArr = useSelector(state => state);

    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    if (todoListArr.length >= 1) {
        return (
            <TodoListWrapper theme={theme}>
                {todoListArr.map((currentTodo) =>
                    <Todo key={currentTodo.id} currentTodo={currentTodo} />)
                }
            </TodoListWrapper>
        )
    }
    return (
        <div>{null}</div>
    )
}

export default TodoList;