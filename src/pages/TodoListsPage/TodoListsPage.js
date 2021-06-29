import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTodoList } from '../../redux/actions/todoListCategoriesActions';
import TodoList from '../../components/TodoList';

const TodoListsPage = () => {

    const [titleValue, setTitleValue] = useState('');
    const [colorValue, setColorValue] = useState('red');

    const todoListsArr = useSelector(state => state.todoListCategoriesReducer);

    const dispatch = useDispatch();


    const handleInputChange = (e) => {
        setTitleValue(e.target.value);
    }

    const handleOptionChange = (e) => {
        setColorValue(e.target.value);
    }

    const handleAddTodoListCategoryForm = (e) => {
        e.preventDefault();
        dispatch(addTodoList(titleValue, colorValue));
        setTitleValue('');
    }

    return (
        <div>
            <h2>Your Todo Lists</h2>
            <form onSubmit={handleAddTodoListCategoryForm}>
                <input type="text" name="todo" value={titleValue} placeholder="Add todo list..." onChange={handleInputChange} />
                <label>
                    Choose your theme color:
                    <select value={colorValue} onChange={handleOptionChange}>
                        <option value="Red">Red</option>
                        <option value="Orange">Orange</option>
                        <option value="Purple">Purple</option>
                        <option value="Green">Green</option>
                    </select>
                </label>
                <button className="cta-button" type="submit">Add</button>
            </form>
            <div>
                {todoListsArr.map((currentTodoList) =>
                    <Link to={`/todoLists/${currentTodoList.id}`} key={currentTodoList.id}>
                        <TodoList currentTodoList={currentTodoList} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default TodoListsPage;