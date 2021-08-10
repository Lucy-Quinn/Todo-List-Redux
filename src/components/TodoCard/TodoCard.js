import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { completeTodo } from '../../redux/actions/todoItems';
import {
  TodoColor,
  TodoWrapper,
  TodoTopSection,
  TodoBottomSection,
  TodoComplete,
  TextLink,
  TextWrapper,
  FavoriteIcon,
  NoteIcon,
  IconsWrapper,
} from './TodoCard.styled';
import { useTruncateText, useWindowSize } from '../../hooks';

const TodoCard = ({ currentTodo, theme }) => {
  const todoListsArr = useSelector((state) => state.todoListsReducer);

  const { text, id: todoId, isEdit, isFavorite, dueDate, note } = currentTodo;
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const truncateText = useTruncateText(text, 12, 'text');

  const todoListCategoriesArr = (
    typeof currentTodo.todoList === 'string'
      ? new Array(currentTodo.todoList)
      : currentTodo.todoList
  ).filter((list) => list);

  const foundTodoLists = todoListsArr.filter((todoList) =>
    todoListCategoriesArr.includes(todoList.title)
  );
  const todoListColors = foundTodoLists.map((todoList) => todoList.color)[0];

  const handleCompleteItem = () => {
    dispatch(completeTodo({ todoId }));
  };

  return (
    <TodoColor todoListColors={todoListColors} theme={theme}>
      <TodoWrapper theme={theme} currentTodo={currentTodo}>
        <TodoTopSection currentTodo={currentTodo} theme={theme}>
          {dueDate ? <p>Due {dueDate}</p> : null}
          <IconsWrapper>
            {isFavorite ? (
              <FavoriteIcon
                className="fas fa-star"
                currentTodo={currentTodo}
                theme={theme}
              />
            ) : null}
            {note.length ? (
              <NoteIcon
                className="fas fa-sticky-note"
                currentTodo={currentTodo}
                theme={theme}
              />
            ) : null}
          </IconsWrapper>
        </TodoTopSection>
        <TodoBottomSection>
          <TodoComplete
            onClick={handleCompleteItem}
            theme={theme}
            isEdit={isEdit}
            currentTodo={currentTodo}
          >
            {currentTodo.isComplete ? <i className="fas fa-check"></i> : null}
          </TodoComplete>
          <TextLink to={`/todos/${currentTodo.id}`}>
            <TextWrapper currentTodo={currentTodo} width={width}>
              {truncateText}
              {width >= 768 ? null : <span className="hover-text">{text}</span>}
            </TextWrapper>
          </TextLink>
        </TodoBottomSection>
      </TodoWrapper>
    </TodoColor>
  );
};

TodoCard.propTypes = {
  currentTodo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default TodoCard;
