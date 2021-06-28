import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { removeTodo } from '../../redux/actions';
import { TodoDelete } from './DeleteTodo.styled';

const DeleteTodo = ({ currentTodo }) => {
    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const history = useHistory()

    const theme = toggleTheme ? themes.light : themes.dark;

    const handleRemoveItem = () => {
        dispatch(removeTodo(currentTodo.id));
        history.push('/');
    }

    return (
        <div>
            <TodoDelete className="cta-button" theme={theme} onClick={handleRemoveItem}>Delete Todo</TodoDelete>
        </div>
    );
}

export default DeleteTodo;