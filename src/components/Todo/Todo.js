import React, { useState } from 'react';
import { TodoWrapper, TodoComplete, TodoEdit, TodoDelete, ItemText } from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';

const Todo = ({ todos, setTodos, item, handleCompleteItem, handleRemoveItem }) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleEditItem = () => {
        setIsEdit(!isEdit)
    }

    return (
        <TodoWrapper key={item.id}>
            <TodoComplete onClick={() => handleCompleteItem(item)}>
                {item.complete ?
                    <i class="fas fa-times"></i>
                    : <i class="fas fa-check"></i>}
            </TodoComplete>
            {isEdit ?
                <EditForm isEdit={isEdit} setTodos={setTodos} todos={todos} item={item} setIsEdit={setIsEdit} />
                : <ItemText item={item} value={item.text} disabled />
            }
            {isEdit ?
                null :
                <TodoEdit>
                    <i class="fas fa-pencil-alt" onClick={handleEditItem}></i>
                </TodoEdit>
            }
            <TodoDelete>
                <i class="fas fa-dumpster" onClick={() => handleRemoveItem(item)}></i>
            </TodoDelete>
        </TodoWrapper>
    );
}

export default Todo;