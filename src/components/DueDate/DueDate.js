import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { addTodoDueDate } from '../../redux/actions/todoItems';
import { DueDateWrapper } from './DueDate.styled';

const DueDate = ({ todoId, theme }) => {
  const [dueDate, setDueDate] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDueDate = () => {
    const modifiedDate = dueDate && dueDate.toDateString().slice(0, 10);
    modifiedDate && dispatch(addTodoDueDate({ todoId, modifiedDate }));
    modifiedDate && history.push('/');
  };

  function onDueDateChange(date) {
    setDueDate(date);
  }

  return (
    <DueDateWrapper className="form-wrapper" theme={theme}>
      <DatePicker
        selected={dueDate}
        onChange={onDueDateChange}
        placeholderText="Add a due date"
        className="form-input"
      />
      <button className="cta-button-add" onClick={handleDueDate}>
        +
      </button>
    </DueDateWrapper>
  );
};

DueDate.propTypes = {
  todoId: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
};

export default DueDate;
