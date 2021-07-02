import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editTodo } from '../../redux/actions/TodoItemsActions';
import { EditFormWrapper } from './EditForm.styled'

const EditForm = ({ currentTodo, isEdit, setIsEdit }) => {

    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;
    const { id, text } = currentTodo;

    const handleEditTodoForm = (e) => {
        e.preventDefault();
        const editValue = e.target.editTodo.value === '' ? text : e.target.editTodo.value;
        dispatch(editTodo(id, editValue));
        setIsEdit(false);
    };

    return (
        <EditFormWrapper onSubmit={handleEditTodoForm}>
            <input className="form-input" type="text" name="editTodo" placeholder={isEdit ? text : null} defaultValue={text} />
            <button className="cta-button" theme={theme} type="submit">Save</button>
        </EditFormWrapper>
    );
}

export default EditForm;