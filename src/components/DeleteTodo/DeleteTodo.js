import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { removeTodo } from '../../redux/actions/TodoItemsActions';
import { TodoDelete } from './DeleteTodo.styled';

const DeleteTodo = ({ currentTodo }) => {

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();
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