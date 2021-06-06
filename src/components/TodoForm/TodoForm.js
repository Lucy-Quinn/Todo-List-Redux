import React, { useState } from 'react';

const TodoForm = ({ handleTodos }) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setValue([value]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleTodos(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" placeholder="Buy some milk" onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
}


export default TodoForm;