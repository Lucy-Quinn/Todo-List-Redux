import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeTodo } from '../../redux/actions';
import { TodoDelete } from '../Todo/Todo.styled.';


const DeleteTodo = ({ currentTodo }) => {
    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;

    const handleRemoveItem = () => {
        dispatch(removeTodo(currentTodo.id))
    }
    return (
        <TodoDelete theme={theme}>
            <i className="fas fa-dumpster" onClick={handleRemoveItem}></i>
        </TodoDelete>
    );
}

export default DeleteTodo;