import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addTodoListCategory } from '../../redux/actions/todoItems';
import {
  TodoListCategoryOption,
  TodoListCategoryLabel,
  TodoListCategorySelect,
} from './AddTodoListCategory.styled';

const AddTodoListCategory = ({ currentTodo }) => {
  const [todolistTitle, setTodolistTitle] = useState('');
  const todoListsArr = useSelector((state) => state.todoListsReducer);
  const todoListsTitlesArr = todoListsArr.map((todoList) => todoList.title);

  const dispatch = useDispatch();

  const location = useLocation();
  const { pathname } = location;
  const todoId = pathname.slice(pathname.lastIndexOf('/') + 1);

  const handleOptionChange = (e) => {
    setTodolistTitle(e.target.value);
  };

  const handleTodoListCategoryForm = (e) => {
    e.preventDefault();
    dispatch(addTodoListCategory({ todoId, todolistTitle }));
  };

  return todoListsTitlesArr.length > 0 ? (
    <form onSubmit={handleTodoListCategoryForm} className="form-wrapper">
      <TodoListCategoryLabel>
        <TodoListCategorySelect
          className="form-input"
          value={todolistTitle}
          onChange={handleOptionChange}
        >
          <option value="" hidden>
            Add {currentTodo.text} to...
          </option>
          {todoListsArr.map((todoList) => (
            <TodoListCategoryOption value={todoList.title} key={todoList.id}>
              {todoList.title}
            </TodoListCategoryOption>
          ))}
        </TodoListCategorySelect>
      </TodoListCategoryLabel>
      <button className="cta-button-add" type="submit">
        +
      </button>
    </form>
  ) : (
    <p>
      You have no todos lists! Create one
      <Link to="/todoLists"> here</Link>
    </p>
  );
};

AddTodoListCategory.propTypes = {
  currentTodo: PropTypes.object.isRequired,
};

export default AddTodoListCategory;
