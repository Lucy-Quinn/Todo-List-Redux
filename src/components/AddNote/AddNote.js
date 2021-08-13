import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { FormWrapper, AddNoteWrapper, TextArea } from './AddNote.styled';
import { addNote } from '../../redux/actions/todoItems';
import ButtonsAndEmojis from './ButtonsAndEmojis';

const AddNote = ({ currentTodo, theme, isLightTheme }) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const { id: todoId, note } = currentTodo;
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    setTextAreaValue(note);
  }, []);

  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleAddNoteForm = (event) => {
    event.preventDefault();
    dispatch(addNote({ todoId, textAreaValue }));
    history.push('/');
    setTextAreaValue('');
  };
  return (
    <FormWrapper theme={theme}>
      <AddNoteWrapper onSubmit={handleAddNoteForm} theme={theme}>
        <TextArea
          type="submit"
          value={textAreaValue}
          onChange={handleChange}
          placeholder="Add note"
          rows={10}
          cols={30}
          currentTodo={currentTodo}
          ref={textAreaRef}
          theme={theme}
        />
        <ButtonsAndEmojis
          theme={theme}
          setTextAreaValue={setTextAreaValue}
          textAreaRef={textAreaRef}
          isLightTheme={isLightTheme}
          currentTodo={currentTodo}
        />
      </AddNoteWrapper>
    </FormWrapper>
  );
};

AddNote.propTypes = {
  currentTodo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
};

export default AddNote;
