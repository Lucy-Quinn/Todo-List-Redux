import React from 'react';
import Todo from '../Todo';
import TodoListWrapper from './TodoList.styled'

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
        <TodoListWrapper>
            {todos.map((item) =>
                <Todo todos={todos} setTodos={setTodos} item={item} handleCompleteItem={handleCompleteItem} handleRemoveItem={handleRemoveItem} />)
            }
        </TodoListWrapper>
    );
}

export default TodoList;