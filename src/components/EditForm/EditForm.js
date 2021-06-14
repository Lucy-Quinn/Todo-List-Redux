import React from 'react';
import { EditFormWrapper, EditFormInput, EditFormButton } from './EditForm.styled'

const EditForm = ({ isEdit, setIsEdit, todos, setTodos, item }) => {

    const { id, complete } = item;

    const handleEditTodoForm = (e) => {
        e.preventDefault();
        const editValue = e.target.editTodo.value === '' ? item.text : e.target.editTodo.value;
        const newArr = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    id: id,
                    text: editValue,
                    complete: complete
                }
            }
            return todo;
        })
        setTodos([...newArr])
        e.target.editTodo.value = '';
        setIsEdit(false)
    }

    return (
        <EditFormWrapper onSubmit={handleEditTodoForm}>
            <EditFormInput type="text" name="editTodo" placeholder={isEdit ? item.text : null}>{item.text}</EditFormInput>
            <EditFormButton type="submit">Save</EditFormButton>
        </EditFormWrapper>
    );
}

export default EditForm;