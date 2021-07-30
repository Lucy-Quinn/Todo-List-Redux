import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { AddNoteWrapper, TextArea } from './AddNote.styled';
import { addNote } from '../../redux/actions/todoItems';

const AddNote = ({ currentTodo }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const { toggleTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;
  const { id: todoId } = currentTodo;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleAddNoteForm = (e) => {
    e.preventDefault();
    dispatch(addNote({ todoId, textAreaValue }));
    history.push('/');
    setTextAreaValue('');
  };

  return (
    <AddNoteWrapper onSubmit={handleAddNoteForm} className="form-wrapper">
      <TextArea
        type="submit"
        value={textAreaValue ? textAreaValue : currentTodo.note}
        onChange={handleChange}
        placeholder="Add note"
        rows={10}
        cols={30}
        currentTodo={currentTodo}
      />
      <button className="cta-button" type="submit" theme={theme}>
        {currentTodo.note ? `Update note` : `Add note`}
      </button>
    </AddNoteWrapper>
  );
};

AddNote.propTypes = {
  currentTodo: PropTypes.object.isRequired,
};

export default AddNote;
