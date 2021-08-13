import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { addTodoListCategory } from '../../redux/actions/todoItems';
import {
  TodoListCategoryOption,
  TodoListCategoryLabel,
  TodoListCategorySelect,
  NoTodoLists,
  AddTodoListCategoryWrapper,
} from './AddTodoListCategory.styled';

const AddTodoListCategory = ({ currentTodo, theme }) => {
  const [todolistTitle, setTodolistTitle] = useState('');
  const todoListsArr = useSelector((state) => state.todoListsReducer);
  const todoListsTitlesArr = todoListsArr.map((todoList) => todoList.title);

  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const { pathname } = location;
  const todoId = pathname.slice(pathname.lastIndexOf('/') + 1);

  const handleOptionChange = (e) => {
    setTodolistTitle(e.target.value);
  };

  const handleTodoListCategoryForm = (e) => {
    e.preventDefault();
    dispatch(addTodoListCategory({ todoId, todolistTitle }));
    history.push('/');
  };

  return todoListsTitlesArr.length > 0 ? (
    <AddTodoListCategoryWrapper
      onSubmit={handleTodoListCategoryForm}
      className="form-wrapper"
      theme={theme}
    >
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
    </AddTodoListCategoryWrapper>
  ) : (
    <NoTodoLists theme={theme}>
      You have no todos lists! Create one
      <Link to="/todoLists"> here</Link>
    </NoTodoLists>
  );
};

AddTodoListCategory.propTypes = {
  currentTodo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default AddTodoListCategory;
