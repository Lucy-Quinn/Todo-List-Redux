import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoFormWrapper, FormInput, FormButton } from './TodoAddForm.styled';
import { addTodo } from '../../redux/actions';

const TodoForm = () => {

    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const [inputValue, setInputValue] = useState('')

    const theme = toggleTheme ? themes.light : themes.dark;

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue))
        setInputValue('');
    }

    return (
        <TodoFormWrapper onSubmit={handleAddItem}>
            <FormInput type="text" name="todo" value={inputValue} placeholder="Add task..." onChange={handleChange} />
            <FormButton type="submit" theme={theme}>Add</FormButton>
        </TodoFormWrapper>
    );
}

export default TodoForm;