import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeTodo, removeTodo, editTodo } from '../../redux/actions';
import { TodoWrapper, TodoComplete, TodoEdit, TodoDelete, ItemText, TextWrapper } from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';
import { Link } from 'react-router-dom'

const Todo = ({ currentTodo }) => {

    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;
    const isEdit = currentTodo.isEdit;

    const handleEditItem = () => {
        dispatch(editTodo(currentTodo.id, currentTodo.text, currentTodo.isComplete, true))
    }



    const handleCompleteItem = () => {
        dispatch(completeTodo(currentTodo.id, currentTodo.text, currentTodo.isComplete, currentTodo.isEdit))
    }

    return (
        <TodoWrapper theme={theme} currentTodo={currentTodo}>
            <TodoComplete onClick={handleCompleteItem} theme={theme} isEdit={isEdit} currentTodo={currentTodo}>
                {currentTodo.isComplete ?
                    <i className="fas fa-check"></i>
                    :
                    null
                }
            </TodoComplete>
            {isEdit ?
                <EditForm isEdit={isEdit} currentTodo={currentTodo} />
                :
                <Link to={`/todos/${currentTodo.id}`} className="button muted-button">
                    <TextWrapper>
                        <ItemText currentTodo={currentTodo}>{currentTodo.text}</ItemText>
                    </TextWrapper>
                </Link>

            }
            {isEdit ?
                null :
                <TodoEdit theme={theme}>
                    <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                </TodoEdit>
            }

        </TodoWrapper>
    );
}

export default Todo;