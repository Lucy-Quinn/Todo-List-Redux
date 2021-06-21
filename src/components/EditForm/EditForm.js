import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../redux/actions';
import { EditFormWrapper, EditFormInput, EditFormButton } from './EditForm.styled'

const EditForm = ({ currentTodo }) => {

    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;
    const { id, text, isComplete, isEdit } = currentTodo;

    const handleEditTodoForm = (e) => {
        e.preventDefault();
        const editValue = e.target.editTodo.value === '' ? text : e.target.editTodo.value;
        dispatch(editTodo(id, editValue, isComplete, false))
        e.target.editTodo.value = '';
    }

    return (
        <EditFormWrapper onSubmit={handleEditTodoForm}>
            <EditFormInput type="text" name="editTodo" placeholder={isEdit ? text : null} defaultValue={text}></EditFormInput>
            <EditFormButton theme={theme} type="submit">Save</EditFormButton>
        </EditFormWrapper>
    );
}

export default EditForm;