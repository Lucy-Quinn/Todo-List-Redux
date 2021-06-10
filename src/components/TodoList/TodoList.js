import React from 'react';
import Todo from '../Todo';

const TodoList = ({ todos, setTodos }) => {

    const handleCompleteItem = (currentItem) => {
        const newArr = todos.map(todo => {
            if (todo.id === currentItem.id) {
                return {
                    id: currentItem.id,
                    text: currentItem.text,
                    complete: !currentItem.complete,
                }
            }
            return todo
        })
        setTodos([...newArr])
    }

    const handleRemoveItem = (currentItem) => {
        setTodos(todos.filter(item => item !== currentItem));
    }

    return (
        <div>
            {todos.map((item) =>
                <Todo todos={todos} setTodos={setTodos} item={item} handleCompleteItem={handleCompleteItem} handleRemoveItem={handleRemoveItem} />)
            }
        </div>
    );
}

export default TodoList;