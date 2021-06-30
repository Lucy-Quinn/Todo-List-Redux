import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { addTodoListCategory } from '../../redux/actions/TodoItemsActions';

const AddTodoListCategory = () => {

    const todoListsArr = useSelector(state => state.todoListCategoriesReducer);
    const todoListsTitlesArr = todoListsArr.map(todoList => todoList.title);
    const [todoListsValue, setTodoListsValue] = useState(todoListsTitlesArr[0]);

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
        <form onSubmit={handleTodoListCategoryForm}>
            <label>
                Choose your Todo list:
                <select value={todoListsValue} onChange={handleOptionChange}>
                    {todoListsArr.map(todoList =>
                        <option value={todoList.title} key={todoList.id} className={todoList.id} >{todoList.title}</option>
                    )}
                </select>
            </label>
            <button className="cta-button" type="submit">Add</button>
        </form>
    )
}

export default AddTodoListCategory;
