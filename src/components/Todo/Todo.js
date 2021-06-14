import React, { useState } from 'react';
import { TodoWrapper, TodoComplete, TodoEdit, TodoDelete, ItemText, TextWrapper } from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';

const Todo = ({ todos, setTodos, item, handleCompleteItem, handleRemoveItem }) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleEditItem = () => {
        setIsEdit(!isEdit)
    }

    return (
        <TodoWrapper key={item.id} isEdit={isEdit}>
            <TodoComplete onClick={() => handleCompleteItem(item)}>
                {item.complete ?
                    <i class="fas fa-times"></i>
                    : <i class="fas fa-check"></i>}
            </TodoComplete>
            {isEdit ?
                <EditForm isEdit={isEdit} setTodos={setTodos} todos={todos} item={item} setIsEdit={setIsEdit} />
                :
                <TextWrapper>
                    <ItemText item={item}>{item.text}</ItemText>
                </TextWrapper>
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