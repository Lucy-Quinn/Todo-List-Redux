import React from 'react'

const EditForm = ({ isEdit, editTodoHandler }) => {

    const { id, complete } = isEdit;

    const handleEditTodoForm = (e) => {
        e.preventDefault();
        const editValue = e.target.editTodo.value;
        editTodoHandler(editValue, id, complete);
        e.target.editTodo.value = '';
        isEdit.edit = '';
    }

    return (
        <form onSubmit={handleEditTodoForm}>
            <input type="text" name="editTodo" placeholder={isEdit.edit ? isEdit.text : null} />
            <button type="submit">Edit</button>
        </form>
    );
}

export default EditForm;