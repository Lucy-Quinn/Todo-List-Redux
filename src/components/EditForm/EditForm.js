import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editTodoList } from '../../redux/actions/todoListsActions';
import { editTodo } from '../../redux/actions/todoItemsActions';
import { EditFormWrapper } from './EditForm.styled'
import { useLocation } from 'react-router-dom';

const EditForm = ({ currentItem, isEdit, setIsEdit }) => {

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;
    const { id, text, title } = currentItem;
    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes('todoLists')


    const handleChange = (e) => {
        setInputValue(e.target.value);
    }


    const handleEditItemForm = (e) => {

        e.preventDefault();
        if (isTodoListsPath) {
            dispatch(editTodoList(id, inputValue));

        } else {
            dispatch(editTodo(id, inputValue));
        }
        setIsEdit(false);

    };

    const adjustWidth = () => {
        const inputEl = document.getElementById("editValue");
        inputEl.style.width = 0;
        inputEl.style.width = inputEl.scrollWidth + 'px';
    };

    useEffect(() => {
        adjustWidth()
    }, [inputValue]);

    return (
        <EditFormWrapper onSubmit={handleEditItemForm}>
            <input className="form-input" type="text" name="editItem" placeholder={isEdit && isTodoListsPath ? title : text} defaultValue={isEdit && isTodoListsPath ? title : text} id="editValue" onChange={handleChange} />
            <button className="cta-button" theme={theme} type="submit">Save</button>
        </EditFormWrapper>
    );
}

export default EditForm;