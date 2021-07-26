import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { removeTodo, removeTodoListCategory } from '../../redux/actions/todoItemsActions';
import { DeleteItem } from './DeleteButton.styled';
import { removeTodoList } from '../../redux/actions/todoListsActions';

const DeleteTodo = ({ currentItem }) => {

    const { id, title } = currentItem;
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes('todoLists');

    const handleRemoveItem = () => {
        if (isTodoListsPath) {
            dispatch(removeTodoList({ id }));
            dispatch(removeTodoListCategory({ title }))
            history.push('/todoLists');
        } else {
            dispatch(removeTodo({ id }));
            history.push('/');
        }
    };

    return (
        <div>
            <DeleteItem onClick={handleRemoveItem}>{isTodoListsPath ? 'Delete todo list' : 'Delete Todo'}</DeleteItem>
        </div>
    );
}

export default DeleteTodo;