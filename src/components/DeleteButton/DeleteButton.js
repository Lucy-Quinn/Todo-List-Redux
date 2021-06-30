import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { removeTodo } from '../../redux/actions/TodoItemsActions';
import { DeleteItem } from './DeleteButton.styled';
import { removeTodoList } from '../../redux/actions/todoListCategoriesActions';

const DeleteTodo = ({ currentItem }) => {

    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes('todoLists')

    const handleRemoveItem = () => {
        if (isTodoListsPath) {
            dispatch(removeTodoList(currentItem.id));
            history.push('/todoLists');
        } else {
            dispatch(removeTodo(currentItem.id));
            history.push('/');
        }
    }


    return (
        <div>
            <DeleteItem className="cta-button" onClick={handleRemoveItem}>{isTodoListsPath ? 'Delete todo list' : 'Delete Todo'}</DeleteItem>
        </div>
    );
}

export default DeleteTodo;