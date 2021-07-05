import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { removeTodo } from '../../redux/actions/todoItemsActions';
import { DeleteItem } from './DeleteButton.styled';
import { removeTodoList } from '../../redux/actions/todoListsActions';
import { removeTodoListCategory } from '../../redux/actions/todoItemsActions';


const DeleteTodo = ({ currentItem }) => {

    const todosArr = useSelector(state => state.todoItemsReducer.todos);
    const foundTodoItems = todosArr.filter(todo => todo.todoList.includes(currentItem.title))

    console.log(foundTodoItems);
    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes('todoLists')

    const handleRemoveItem = () => {
        if (isTodoListsPath) {
            dispatch(removeTodoList(currentItem.id));
            dispatch(removeTodoListCategory(foundTodoItems, currentItem.title))
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