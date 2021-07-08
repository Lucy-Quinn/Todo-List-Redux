import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { addTodoListCategory } from '../../redux/actions/todoItemsActions';
import { TodoListCategoryOption, TodoListCategoryLabel, DefaultOption } from './AddTodoListCategory.styled';

const AddTodoListCategory = ({ currentTodo }) => {

    const todoListsArr = useSelector(state => state.todoListsReducer);
    const todoListsTitlesArr = todoListsArr.map(todoList => todoList.title);
    const [todoListsValue, setTodoListsValue] = useState('');

    const dispatch = useDispatch();

    const optionRef = useRef(null);
    const firstOption = optionRef.current?.childNodes[0]

    const location = useLocation();
    const { pathname } = location;
    const todoId = pathname.slice(pathname.lastIndexOf('/') + 1);

    const handleOptionChange = (e) => {
        setTodoListsValue(e.target.value);
    };

    const handleTodoListCategoryForm = (e) => {
        e.preventDefault();
        dispatch(addTodoListCategory(todoId, todoListsValue));
    };

    return (
        todoListsTitlesArr.length > 0 ?
            <form onSubmit={handleTodoListCategoryForm} className="form-wrapper">
                <TodoListCategoryLabel>
                    <DefaultOption className="form-input" value={todoListsValue} onChange={handleOptionChange} ref={optionRef} firstOption={firstOption}>
                        <option value='' hidden>Add {currentTodo.text} to...</option>
                        {todoListsArr.map(todoList =>
                            <TodoListCategoryOption value={todoList.title} key={todoList.id}>
                                {todoList.title}
                            </TodoListCategoryOption>
                        )}
                    </DefaultOption>
                </TodoListCategoryLabel>
                <button className="cta-button-add" type="submit">+</button>
            </form>
            :
            <p>You have no todos lists! Create one
                <Link to='/todoLists'>here</Link>
            </p>
    )
}

export default AddTodoListCategory;
