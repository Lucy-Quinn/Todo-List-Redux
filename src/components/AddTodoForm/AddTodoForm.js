import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo } from '../../redux/actions/todoItems';
import { AddTodoFormWrapper } from './AddTodoForm.styled';

const AddTodoForm = ({ currentTodoList, theme }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const todaysDate = new Date();
  const currentList = currentTodoList ? new Array(currentTodoList.title) : '';

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItemForm = (e) => {
    e.preventDefault();
    dispatch(addTodo({ inputValue, currentList, todaysDate }));
    setInputValue('');
  };

  return (
    <AddTodoFormWrapper
      className="form-wrapper"
      onSubmit={handleAddItemForm}
      theme={theme}
    >
      <input
        className="form-input"
        type="text"
        name="todo"
        value={inputValue}
        placeholder="Add todo..."
        onChange={handleChange}
        required
      />
      <button className="cta-button-add" type="submit">
        +
      </button>
    </AddTodoFormWrapper>
  );
};

AddTodoForm.propTypes = {
  currentTodoList: PropTypes.object,
  theme: PropTypes.object,
};

export default AddTodoForm;
