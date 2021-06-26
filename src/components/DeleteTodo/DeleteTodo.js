import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeTodo } from '../../redux/actions';
import { TodoDelete } from './DeleteTodo.styled';

const DeleteTodo = ({ currentTodo }) => {
    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;

    const handleRemoveItem = () => {
        dispatch(removeTodo(currentTodo.id))
    }
    return (
        <div>
            <TodoDelete theme={theme} onClick={handleRemoveItem}>Delete Todo</TodoDelete>
        </div>
    );
}

export default DeleteTodo;