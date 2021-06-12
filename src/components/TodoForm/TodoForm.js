import React from 'react';
import { TodoFormWrapper, FormInput, FormButon } from './TodoForm.styled';

const TodoForm = ({ addTodoHandler }) => {

    const handleTodoForm = (e) => {
        e.preventDefault();
        let todoText = e.target.todo.value
        addTodoHandler(todoText);
        e.target.todo.value = '';
    }

    return (
        <TodoFormWrapper onSubmit={handleTodoForm}>
            <FormInput type="text" name="todo" placeholder="Add task..." />
            <FormButon type="submit">Add</FormButon>
        </TodoFormWrapper>
    );
}

export default TodoForm;