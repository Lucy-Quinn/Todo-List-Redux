import React, { useState, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodoListCategory } from '../../redux/actions/todoItems';
import { SelectTodoFormWrapper } from './SelectTodoForm.styled';

const SelectTodoForm = ({ currentTodoList, theme }) => {
  const [todoValue, setTodoValue] = useState('');
  const [todoId, setTodoId] = useState('');
  const todosArr = useSelector((state) => state.todoItemsReducer.todos);

  const dispatch = useDispatch();
  const refArray = useRef(todosArr.map(() => createRef()));

  const todolistTitle = currentTodoList ? currentTodoList.title : '';

  const handleOptionChange = (e) => {
    const currentIndex = e.target.options.selectedIndex;
    const todoId = refArray?.current[currentIndex - 1].current?.className;
    setTodoId(todoId);
    setTodoValue(e.target.value);
  };

  const handleTodoSelectForm = (e) => {
    e.preventDefault();
    dispatch(addTodoListCategory({ todoId, todolistTitle }));
  };

  return (
    <SelectTodoFormWrapper
      className="form-wrapper"
      onSubmit={handleTodoSelectForm}
      theme={theme}
    >
      <label>
        <select
          className="form-input"
          defaultValue={todoValue}
          onChange={handleOptionChange}
        >
          <option hidden>Your todos</option>
          {todosArr?.map((todo, index) => (
            <option
              value={todo.text}
              key={todo.id}
              className={todo.id}
              ref={refArray.current[index]}
            >
              {todo.text}
            </option>
          ))}
        </select>
      </label>
      <button className="cta-button-add" type="submit">
        +
      </button>
    </SelectTodoFormWrapper>
  );
};

SelectTodoForm.propTypes = {
  currentTodoList: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default SelectTodoForm;
