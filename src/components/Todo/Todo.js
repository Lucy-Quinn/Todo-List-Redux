import React from 'react';
import TodoItems from './Todo.styled';

const Todo = ({ todos, setTodos }) => {

    const handleComplete = (item) => {
        const currentItem = item;
        const newArr = todos.map((todo) => {
            if (todo.text === currentItem.text) {
                return {
                    text: todo.text,
                    complete: true
                }
            }
            return todo;
        })
        setTodos([...newArr])
    }

    const handleRemoveItem = (item) => {
        const currentItem = item;
        setTodos(todos.filter(item => item !== currentItem));
    }

    return (
        <div>
            {todos.map((item) => {
                return (
                    <TodoItems item={item}>
                        <button onClick={() => handleComplete(item)}>Done</button>
                        {item.text}
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </TodoItems>
                )
            })}
        </div>
    );
}

export default Todo;