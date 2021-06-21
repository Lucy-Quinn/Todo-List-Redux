import React from 'react';
import { TodoFormWrapper, FormInput, FormButton } from './TodoAddForm.styled';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';

const TodoForm = () => {

    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;

    const handleAddItem = (e) => {
        e.preventDefault();
        const todoText = e.target.todo.value;
        dispatch(addTodo(uuidv4(), todoText, false, false))
        e.target.todo.value = '';
    }

    return (
        <TodoFormWrapper onSubmit={handleAddItem}>
            <FormInput type="text" name="todo" placeholder="Add task..." />
            <FormButton type="submit" theme={theme}>Add</FormButton>
        </TodoFormWrapper>
    );
}

export default TodoForm;