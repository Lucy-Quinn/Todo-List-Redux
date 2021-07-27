import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddNoteWrapper, TextArea } from './AddNote.styled';
import { addNote } from '../../redux/actions/todoItems';

const AddNote = ({ currentTodo }) => {

    const [textAreaValue, setTextAreaValue] = useState('');
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;
    const { id: todoId } = currentTodo;

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTextAreaValue(e.target.value);
    };

    const handleAddNoteForm = (e) => {
        e.preventDefault();
        dispatch(addNote({ todoId, textAreaValue }));
        setTextAreaValue('');
    };

    return (
        <AddNoteWrapper onSubmit={handleAddNoteForm} className='form-wrapper'>
            <TextArea
                type='submit'
                value={textAreaValue ? textAreaValue : currentTodo.note}
                onChange={handleChange}
                placeholder='Add note'
                rows={10}
                cols={30}
                currentTodo={currentTodo}
            />
            <button className='cta-button' type='submit' theme={theme}>
                {currentTodo.note ?
                    `Update note`
                    : `Add note`}
            </button>
        </AddNoteWrapper>
    )
}

export default AddNote;
