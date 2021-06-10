import React, { useState } from 'react';
import TodoWrapper from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';

const Todo = ({ todos, setTodos, item, handleCompleteItem, handleRemoveItem }) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleEditItem = () => {
        setIsEdit(!isEdit)
    }

    return (
        <TodoWrapper item={item} key={item.id}>
            <button onClick={() => handleCompleteItem(item)}>
                {item.complete ? "Undo" : "Done"}
            </button>
            {isEdit ?
                <EditForm isEdit={isEdit} setTodos={setTodos} todos={todos} item={item} setIsEdit={setIsEdit} />
                : item.text
            }
            {isEdit ?
                null :
                <button onClick={handleEditItem}>Edit</button>}
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
        </TodoWrapper>
    );
}

export default Todo;