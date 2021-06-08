import React from 'react';

const TodoForm = ({ addTodoHandler }) => {

    const handleTodoForm = (e) => {
        e.preventDefault();
        let todoText = e.target.todo.value
        addTodoHandler(todoText);
        e.target.todo.value = '';
    }

    return (
        <form onSubmit={handleTodoForm}>
            <input type="text" name="todo" placeholder="Add task..." />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;