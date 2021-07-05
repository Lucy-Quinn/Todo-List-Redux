import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { addTodoListCategory } from '../../redux/actions/todoItemsActions';

const AddTodoListCategory = ({ currentTodo }) => {
    const todoListsArr = useSelector(state => state.todoListsReducer);
    const todoListsTitlesArr = todoListsArr.map(todoList => todoList.title);
    const [todoListsValue, setTodoListsValue] = useState('');

    const dispatch = useDispatch();

    const location = useLocation();
    const { pathname } = location;
    const todoId = pathname.slice(pathname.lastIndexOf('/') + 1);

    const handleOptionChange = (e) => {
        setTodoListsValue(e.target.value);
    }

    const handleTodoListCategoryForm = (e) => {
        e.preventDefault();
        dispatch(addTodoListCategory(todoId, todoListsValue));
    }

    return (
        todoListsTitlesArr.length > 0 ?
            <form onSubmit={handleTodoListCategoryForm}>
                <label>
                    <select value={todoListsValue} onChange={handleOptionChange}>
                        <option value='' disabled>Add {currentTodo.text} to...</option>
                        {todoListsArr.map(todoList =>
                            <option value={todoList.title} key={todoList.id}>{todoList.title}</option>
                        )}
                    </select>
                </label>
                <button className="cta-button" type="submit">Add</button>
            </form>
            :
            <p>You have no todos lists! Create one
                <Link to='/todoLists'>here</Link>
            </p>
    )
}

export default AddTodoListCategory;
