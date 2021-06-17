import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, removeTodo, editTodo } from '../../redux/actions';
import { TodoWrapper, TodoComplete, TodoEdit, TodoDelete, ItemText, TextWrapper } from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';
import { ThemeContext } from '../../contexts/ThemeContext';

const Todo = ({ currentTodo }) => {
    const dispatch = useDispatch();

    const { themes, isLightTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    const isEdit = currentTodo.isEdit;

    const handleEditItem = () => {
        dispatch(editTodo(currentTodo.id, currentTodo.text, currentTodo.isComplete, true))
    }

    const handleRemoveItem = () => {
        dispatch(removeTodo(currentTodo.id))
    }

    const handleCompleteItem = () => {
        dispatch(completeTodo(currentTodo.id, currentTodo.text, currentTodo.isComplete, currentTodo.isEdit))
    }

    return (
        <TodoWrapper theme={theme}>
            <TodoComplete onClick={handleCompleteItem} theme={theme} currentTodo={currentTodo}>
                {currentTodo.isComplete ?
                    <i className="fas fa-check"></i>
                    :
                    null
                }
            </TodoComplete>
            {isEdit ?
                <EditForm isEdit={isEdit} currentTodo={currentTodo} />
                :
                <TextWrapper>
                    <ItemText currentTodo={currentTodo}>{currentTodo.text}</ItemText>
                </TextWrapper>
            }
            {isEdit ?
                null :
                <TodoEdit theme={theme}>
                    <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                </TodoEdit>
            }
            <TodoDelete theme={theme}>
                <i className="fas fa-dumpster" onClick={handleRemoveItem}></i>
            </TodoDelete>
        </TodoWrapper>
    );
}

export default Todo;