import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextArea } from './AddNote.styled';
import { addNote } from '../../redux/actions';

const AddNote = ({ currentTodo }) => {

    const [textAreaValue, setTextAreaValue] = useState('');
    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;

    const handleChange = (e) => {
        setTextAreaValue(e.target.value);
    }

    const handleAddNoteForm = (e) => {
        e.preventDefault();
        dispatch(addNote(currentTodo.id, textAreaValue));
        setTextAreaValue('');
    }

    return (
        <form onSubmit={handleAddNoteForm}>
            <TextArea
                type="submit"
                value={textAreaValue}
                onChange={handleChange}
                placeholder={currentTodo !== undefined && currentTodo.note ? currentTodo.note : 'Add note'}
                rows={10}
                cols={30}
                currentTodo={currentTodo}
            />
            <input type="submit" hidden />
            <button className='cta-button' type="submit" theme={theme}>Add note</button>
        </form>
    )
}

export default AddNote;
