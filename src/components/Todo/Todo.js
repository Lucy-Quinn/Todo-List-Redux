import React from 'react';
import TodoItems from './Todo.styled';

const Todo = ({ todos, setTodos }) => {

    const handleCompleteItem = (currentItem) => {
        const newArr = todos.map((todo) => {
            if (todo.id === currentItem.id) {
                return {
                    id: currentItem.id,
                    text: currentItem.text,
                    complete: true
                }
            }
            return todo;
        })
        setTodos([...newArr])
    }

    const handleRemoveItem = (currentItem) => {
        setTodos(todos.filter(item => item !== currentItem));
    }

    return (
        <div>
            {todos.map((item) => {
                return (
                    <TodoItems item={item} key={item.id}>
                        <button onClick={() => handleCompleteItem(item)}>Done</button>
                        {item.text}
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </TodoItems>
                )
            })}
        </div>
    );
}

export default Todo;