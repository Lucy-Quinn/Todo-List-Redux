import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { completeTodo } from '../../redux/actions/todoItemsActions';
import { TodoColorContainer, TodoWrapper, TodoTopSection, TodoBottomSection, TodoComplete, TextLink, ItemText, TextWrapper, FavoriteIcon } from './TodoCard.styled';
import useTruncateText from '../../hooks';

const TodoCard = ({ currentTodo }) => {

    const { text } = currentTodo;
    const trucateText = useTruncateText(text, 12, 'text');
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const todoListsArr = useSelector(state => state.todoListsReducer);

    const dispatch = useDispatch();

    const theme = toggleTheme ? themes.light : themes.dark;
    const { isEdit, isFavorite } = currentTodo;

    const dueDate = currentTodo.dueDate;
    const todoListCategoriesArr = (typeof currentTodo.todoList === 'string' ? new Array(currentTodo.todoList) : currentTodo.todoList).filter(list => list)
    const foundTodoLists = todoListsArr.filter(todoList => todoListCategoriesArr.includes(todoList.title));
    const todoListColors = foundTodoLists.map(todoList => todoList.color)[0];

    const handleCompleteItem = () => {
        dispatch(completeTodo(currentTodo.id))
    };

    return (
        <TodoColorContainer todoListColors={todoListColors}>
            <TodoWrapper theme={theme} currentTodo={currentTodo} >
                <TodoTopSection currentTodo={currentTodo}>
                    {dueDate ? <p>Due {dueDate}</p> : null}
                    {isFavorite ?
                        <FavoriteIcon className="fas fa-star" currentTodo={currentTodo} />
                        : null
                    }
                </TodoTopSection>
                <TodoBottomSection>
                    <TodoComplete onClick={handleCompleteItem} theme={theme} isEdit={isEdit} currentTodo={currentTodo}>
                        {currentTodo.isComplete ?
                            <i className="fas fa-check"></i>
                            :
                            null
                        }
                    </TodoComplete>
                    <TextLink to={`/todos/${currentTodo.id}`}>
                        <TextWrapper currentTodo={currentTodo}>
                            {trucateText}
                        </TextWrapper>
                    </TextLink>
                </TodoBottomSection>
            </TodoWrapper>
        </TodoColorContainer>
    );
}

export default TodoCard;