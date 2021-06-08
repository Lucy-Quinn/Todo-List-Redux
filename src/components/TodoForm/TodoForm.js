import React from 'react';

const TodoForm = ({ addTodoHandler }) => {

    const handleTodoForm = (e) => {
        e.preventDefault();
        const todoText = e.target.todo.value
        addTodoHandler(todoText);
    }

    return (
        <form onSubmit={handleTodoForm}>
            <input type="text" name="todo" placeholder="Buy some milk" />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;