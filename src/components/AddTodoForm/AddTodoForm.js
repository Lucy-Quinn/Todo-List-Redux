import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import {  } from './AddTodoForm.styled';
import { addTodo } from '../../redux/actions/todoItemsActions';

const TodoForm = ({ currentTodoList }) => {

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();

    const todaysDate = new Date();

    const theme = toggleTheme ? themes.light : themes.dark;
    const currentList = currentTodoList ? new Array(currentTodoList.title) : '';

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddItemForm = (e) => {
        e.preventDefault();
        dispatch(addTodo(inputValue, currentList, todaysDate));
        setInputValue('');
    }

    return (
        <form className="form-wrapper" onSubmit={handleAddItemForm}>
            <input className="form-input" type="text" name="todo" value={inputValue} placeholder="Add task..." onChange={handleChange} />
            <button className="cta-button-add" type="submit" theme={theme}>+</button>
        </form>
    );
}

export default TodoForm;