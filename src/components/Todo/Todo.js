import React, { useState, useContext } from 'react';
import { TodoWrapper, TodoComplete, TodoEdit, TodoDelete, ItemText, TextWrapper } from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';
import { ThemeContext } from '../../contexts/ThemeContext'

const Todo = ({ todos, setTodos, item, handleCompleteItem, handleRemoveItem }) => {

    const [isEdit, setIsEdit] = useState(false);
    const { themes, isLightTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    const handleEditItem = () => {
        setIsEdit(!isEdit)
    }

    return (
        <TodoWrapper key={item.id} isEdit={isEdit} todos={todos} theme={theme}>
            <TodoComplete onClick={() => handleCompleteItem(item)} isEdit={isEdit} theme={theme} item={item}>
                {item.complete ?
                    <i className="fas fa-check"></i>
                    :
                    null
                }
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
                <TodoEdit theme={theme}>
                    <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                </TodoEdit>
            }
            <TodoDelete isEdit={isEdit} theme={theme}>
                <i className="fas fa-dumpster" onClick={() => handleRemoveItem(item)}></i>
            </TodoDelete>
        </TodoWrapper>
    );
}

export default Todo;