import React, { useState } from 'react';
import TodoItems from './Todo.styled';
import EditForm from '../EditForm/EditForm'

const Todo = ({ todos, setTodos }) => {

    const [isEdit, setIsEdit] = useState({
        id: '',
        text: '',
        complete: false,
        edit: false
    });

    const handleCompleteItem = (currentItem) => {
        const newArr = todos.map((todo) => {
            if (todo.id === currentItem.id) {
                return {
                    id: currentItem.id,
                    text: currentItem.text,
                    complete: true,
                }
            }
            return todo;
        })
        setTodos([...newArr])
    }

    const handleRemoveItem = (currentItem) => {
        setTodos(todos.filter(item => item !== currentItem));
    }

    const handleEditItem = (item) => {
        setIsEdit({
            id: item.id,
            text: item.text,
            complete: item.complete,
            edit: true
        }
        )
    }

    const editTodoHandler = (editTodoText, editTodoId, editTodoComplete) => {
        const newArr = todos.map((todo) => {
            if (todo.id === editTodoId) {
                return {
                    id: editTodoId,
                    text: editTodoText,
                    complete: editTodoComplete
                }
            }
            return todo;
        })
        setTodos([...newArr])
    }

    return (
        <div>
            {isEdit.edit ? <EditForm isEdit={isEdit} editTodoHandler={editTodoHandler} /> : null}
            {todos.map((item) => {
                return (
                    <TodoItems item={item} key={item.id}>
                        <button onClick={() => handleCompleteItem(item)}>Done</button>
                        {item.text}
                        <button onClick={() => handleEditItem(item)}>Edit</button>
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </TodoItems>
                )
            })}
        </div>
    );
}

export default Todo;