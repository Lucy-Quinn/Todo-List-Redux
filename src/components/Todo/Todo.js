import React, { useState, useContext } from 'react';
import { TodoWrapper, TodoComplete, TodoEdit, TodoDelete, ItemText, TextWrapper } from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';
import { ThemeContext } from '../../contexts/ThemeContext'

const Todo = ({ todos, setTodos, currentItem }) => {
    const isEdit = currentItem.edit;
    const { themes, isLightTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    const handleEditItem = () => {
        const newArr = todos.map(todo => {
            if (todo.id === currentItem.id) {
                return {
                    id: currentItem.id,
                    text: currentItem.text,
                    complete: currentItem.complete,
                    edit: !currentItem.edit
                }
            }
            return todo
        })
        setTodos([...newArr])
    }

    const handleRemoveItem = () => {
        setTodos(todos.filter(item => item !== currentItem));
    }

    const handleCompleteItem = () => {
        const newArr = todos.map(todo => {
            if (todo.id === currentItem.id) {
                return {
                    id: currentItem.id,
                    text: currentItem.text,
                    complete: !currentItem.complete,
                    edit: currentItem.edit
                }
            }
            return todo
        })
        setTodos([...newArr])
    }

    return (
        <TodoWrapper key={currentItem.id} isEdit={isEdit} todos={todos} theme={theme}>
            <TodoComplete onClick={handleCompleteItem} isEdit={isEdit} theme={theme} currentItem={currentItem}>
                {currentItem.complete ?
                    <i className="fas fa-check"></i>
                    :
                    null
                }
            </TodoComplete>
            {isEdit ?
                <EditForm isEdit={isEdit} setTodos={setTodos} todos={todos} currentItem={currentItem} />
                :
                <TextWrapper>
                    <ItemText currentItem={currentItem}>{currentItem.text}</ItemText>
                </TextWrapper>
            }
            {isEdit ?
                null :
                <TodoEdit theme={theme}>
                    <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                </TodoEdit>
            }
            <TodoDelete isEdit={isEdit} theme={theme}>
                <i className="fas fa-dumpster" onClick={handleRemoveItem}></i>
            </TodoDelete>
        </TodoWrapper>
    );
}

export default Todo;