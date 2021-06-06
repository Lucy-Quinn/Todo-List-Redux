import React from 'react';
import TodoItems from './Todo.styled';

const Todo = ({ todos, setTodos }) => {

    const handleComplete = (item) => {
        const currentItem = item;
    }

    const handleRemoveItem = (item) => {
        const currentItem = item;
        setTodos(todos.filter(item => item !== currentItem));
    }

    return (
        <div>
            {todos.map((item) => {
                return (
                    <TodoItems>
                        <button onClick={() => handleComplete(item)}>Done</button>
                        {item}
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </TodoItems>
                )
            })}
        </div>
    );
}

export default Todo;