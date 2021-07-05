import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editTodoList } from '../../redux/actions/todoListsActions';
import { editTodo } from '../../redux/actions/todoItemsActions';
import { EditFormWrapper } from './EditForm.styled'
import { useLocation } from 'react-router-dom';

const EditForm = ({ currentItem, isEdit, setIsEdit }) => {


    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;
    const { id, text, title } = currentItem;
    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes('todoLists')

    const handleEditItemForm = (e) => {

        e.preventDefault();
        if (isTodoListsPath) {
            const editValue = e.target.editItem.value === '' ? title : e.target.editItem.value;
            dispatch(editTodoList(id, editValue));

        } else {
            const editValue = e.target.editItem.value === '' ? text : e.target.editItem.value;
            dispatch(editTodo(id, editValue));
        }
        setIsEdit(false);

    }


    // const handleEditTodoForm = (e) => {
    //     e.preventDefault();

    //     const editValue = e.target.editTodo.value === '' ? text : e.target.editTodo.value;
    //     dispatch(editTodo(id, editValue));
    //     setIsEdit(false);
    // };

    return (
        <EditFormWrapper onSubmit={handleEditItemForm}>
            <input className="form-input" type="text" name="editItem" placeholder={isEdit && isTodoListsPath ? title : text} defaultValue={isEdit && isTodoListsPath ? title : text} />
            <button className="cta-button" theme={theme} type="submit">Save</button>
        </EditFormWrapper>
    );
}

export default EditForm;