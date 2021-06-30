import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { completeTodo } from '../../redux/actions/TodoItemsActions';
import { TodoWrapper, TodoComplete, ItemText, TextWrapper, FavoriteIcon } from '../Todo/Todo.styled.';

const Todo = ({ currentTodo }) => {

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const dispatch = useDispatch();

    const theme = toggleTheme ? themes.light : themes.dark;
    const { isEdit, isFavorite } = currentTodo;

    const dueDate = currentTodo.dueDate;


    const handleCompleteItem = () => {
        dispatch(completeTodo(currentTodo.id))
    }

    return (
        <TodoWrapper theme={theme} currentTodo={currentTodo}>
            {dueDate ? <p>Due {dueDate}</p> : null}
            <Link to={`/todos/${currentTodo.id}`}>
                <TextWrapper>
                    <ItemText currentTodo={currentTodo}>{currentTodo.text}</ItemText>
                </TextWrapper>
            </Link>
            <TodoComplete onClick={handleCompleteItem} theme={theme} isEdit={isEdit} currentTodo={currentTodo}>
                {currentTodo.isComplete ?
                    <i className="fas fa-check"></i>
                    :
                    null
                }
            </TodoComplete>
            {isFavorite ?
                <FavoriteIcon className="fas fa-star" currentTodo={currentTodo} />
                : null
            }
        </TodoWrapper>
    );
}

export default Todo;