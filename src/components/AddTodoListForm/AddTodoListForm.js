import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { addTodoList } from '../../redux/actions/todoLists';
import {
  AddTodoListFormWrapper,
  ColorSelect,
  TopSection,
} from './AddTodoListForm.styled';
import COLORS_DATA from './COLORS_DATA';

const AddTodoListForm = ({ todoListArr, theme }) => {
  const [todoListTitle, setTodoListTitle] = useState('');
  const [todoListColor, setTodoListColor] = useState('');
  const [isDuplicate, setIsDuplicate] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const duplicatedTimeout =
      isDuplicate &&
      setTimeout(function () {
        setIsDuplicate(false);
      }, 2000);
    return () => {
      clearTimeout(duplicatedTimeout);
    };
  });

  const handleInputChange = (e) => {
    setTodoListTitle(e.target.value);
  };

  const handleOptionChange = (e) => {
    setTodoListColor(e.target.value);
  };

  const handleAddTodoListCategoryForm = (e) => {
    e.preventDefault();
    if (todoListArr.length >= 1) {
      const duplicateTodoLists = todoListArr.filter(
        (list) => list.title === todoListTitle
      );
      duplicateTodoLists.length > 0
        ? setIsDuplicate(true)
        : dispatch(addTodoList({ todoListTitle, todoListColor }));
      setTodoListTitle('');
    } else {
      dispatch(addTodoList({ todoListTitle, todoListColor }));
      setTodoListTitle('');
    }
  };

  return (
    <AddTodoListFormWrapper
      className="form-wrapper"
      onSubmit={handleAddTodoListCategoryForm}
      theme={theme}
    >
      <TopSection theme={theme}>
        <input
          className="form-input"
          type="text"
          name="todo"
          value={todoListTitle}
          placeholder="Add todo list"
          onChange={handleInputChange}
        />
        <button className="cta-button-add" type="submit">
          +
        </button>
      </TopSection>
      <label>
        <ColorSelect
          className="form-select"
          value={todoListColor}
          onChange={handleOptionChange}
          required
          theme={theme}
        >
          <option value="" hidden>
            Select theme color
          </option>
          {map(COLORS_DATA, (colorItem) => {
            return (
              <option value={colorItem.color} key={colorItem.id}>
                {colorItem.color}
              </option>
            );
          })}
        </ColorSelect>
      </label>
      <>
        {isDuplicate && <p>This Todo List already exists choose another one</p>}
      </>
    </AddTodoListFormWrapper>
  );
};

AddTodoListForm.propTypes = {
  todoListArr: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
};

export default AddTodoListForm;
