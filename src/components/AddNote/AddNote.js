import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { FormWrapper, AddNoteWrapper, TextArea } from './AddNote.styled';
import { addNote } from '../../redux/actions/todoItems';
import Emojis from '../Emojis/Emojis';
import { setDefaultLocale } from 'react-datepicker';

const AddNote = ({ currentTodo }) => {
  const [singleEmoji, setSingleEmoji] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const { toggleTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;
  const { id: todoId } = currentTodo;

  const textAreaRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

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
    <FormWrapper>
      <AddNoteWrapper onSubmit={handleAddNoteForm}>
        <TextArea
          type="submit"
          value={textAreaValue ? textAreaValue : currentTodo.note}
          onChange={handleChange}
          placeholder="Add note"
          rows={10}
          cols={30}
          currentTodo={currentTodo}
          ref={textAreaRef}
        />
        <Emojis
          setSingleEmoji={setSingleEmoji}
          setTextAreaValue={setTextAreaValue}
          textAreaRef={textAreaRef}
        />
        <button className="cta-button" theme={theme}>
          {currentTodo.note ? `Update note` : `Add note`}
        </button>
      </AddNoteWrapper>
    </FormWrapper>
  );
};

AddNote.propTypes = {
  currentTodo: PropTypes.object.isRequired,
};

export default AddNote;
