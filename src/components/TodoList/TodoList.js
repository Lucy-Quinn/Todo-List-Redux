import React, { useContext } from 'react';
import Todo from '../Todo';
import TodoListWrapper from './TodoList.styled';
import { ThemeContext } from '../../contexts/ThemeContext';

const TodoList = ({ todos, setTodos }) => {

    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;


    if (todos.length >= 1) {
        return (
            <TodoListWrapper theme={theme}>
                {todos.map((currentItem) =>
                    <Todo key={currentItem.id} todos={todos} setTodos={setTodos} currentItem={currentItem} />)
                }
            </TodoListWrapper>
        )
    }
    return (
        <div>{null}</div>
    )
}

export default TodoList;