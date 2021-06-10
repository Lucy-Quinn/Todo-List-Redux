import React from 'react'

const EditForm = ({ isEdit, setIsEdit, todos, setTodos, item }) => {

    const { id, complete } = item;

    const handleEditTodoForm = (e) => {
        e.preventDefault();
        const editValue = e.target.editTodo.value;
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
        <form onSubmit={handleEditTodoForm}>
            <input type="text" name="editTodo" placeholder={isEdit ? item.text : null} />
            <button type="submit">Save</button>
        </form>
    );
}

export default EditForm;