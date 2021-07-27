import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editTodoList } from '../../redux/actions/todoLists';
import { editTodo } from '../../redux/actions/todoItems';
import { EditFormWrapper } from './EditForm.styled'
import { useLocation } from 'react-router-dom';
import EditFormInput from './EditFormInput/EditFormInput';

const EditForm = ({ currentItem, isEdit, setIsEdit }) => {

    const [inputValue, setInputValue] = useState('')
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    const dispatch = useDispatch();

    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes('todoLists');

    const { id } = currentItem;

    const handleEditTodoForm = (event) => {
        event.preventDefault();
        if (isTodoListsPath) {
            dispatch(editTodoList({ id, inputValue }));
        } else {
            dispatch(editTodo({ id, inputValue }));
        }
        setIsEdit(false);
    };

    return (
        <EditFormWrapper onSubmit={handleEditTodoForm}>
            <EditFormInput inputValue={inputValue} setInputValue={setInputValue} isTodoListsPath={isTodoListsPath} currentItem={currentItem} isEdit={isEdit} />
            <button className="cta-button" theme={theme} type="submit">Save</button>
        </EditFormWrapper>
    );
};

export default EditForm;