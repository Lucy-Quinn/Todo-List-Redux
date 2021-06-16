import React, { useContext } from 'react';
import { TodoFormWrapper, FormInput, FormButton } from './TodoAddForm.styled';
import { ThemeContext } from '../../contexts/ThemeContext';

const TodoForm = ({ addTodoHandler }) => {

    const { themes, isLightTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    const handleTodoForm = (e) => {
        e.preventDefault();
        let todoText = e.target.todo.value
        addTodoHandler(todoText);
        e.target.todo.value = '';
    }

    return (
        <TodoFormWrapper onSubmit={handleTodoForm}>
            <FormInput type="text" name="todo" placeholder="Add task..." />
            <FormButton type="submit" theme={theme}>Add</FormButton>
        </TodoFormWrapper>
    );
}

export default TodoForm;