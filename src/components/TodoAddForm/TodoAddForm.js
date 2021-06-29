import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TodoFormWrapper, FormInput } from './TodoAddForm.styled';
import { addTodo } from '../../redux/actions/TodoItemsActions';

const TodoForm = ({ currentTodoList }) => {

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();

    const theme = toggleTheme ? themes.light : themes.dark;
    const currentList = currentTodoList ? currentTodoList.title : '';

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddItemForm = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue, currentList));
        setInputValue('');
    }

    return (
        <TodoFormWrapper onSubmit={handleAddItemForm}>
            <FormInput type="text" name="todo" value={inputValue} placeholder="Add task..." onChange={handleChange} />
            <button className="cta-button" type="submit" theme={theme}>Add</button>
        </TodoFormWrapper>
    );
}

export default TodoForm;