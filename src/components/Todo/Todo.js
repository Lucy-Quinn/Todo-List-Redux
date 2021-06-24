import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import { completeTodo, editTodo } from '../../redux/actions';
import { TodoWrapper, TodoComplete, TodoEdit, ItemText, TextWrapper, FavoriteIcon } from '../Todo/Todo.styled.';
import EditForm from '../EditForm/EditForm';

const Todo = ({ currentTodo }) => {

    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;
    const { isEdit, isFavorite } = currentTodo;

    const handleEditItem = () => {
        dispatch(editTodo(currentTodo.id, currentTodo.text))
    }

    const handleCompleteItem = () => {
        dispatch(completeTodo(currentTodo.id))
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
            {isFavorite ?
                <FavoriteIcon className="fas fa-star" currentTodo={currentTodo} />
                : null
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