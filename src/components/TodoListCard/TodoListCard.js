import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { filter } from 'lodash';

import { TodoListWrapper, TextWrapper } from './TodoListCard.styled';
import TodoListStatistics from './TodoListStatistics';
import { useTruncateText, useWindowSize } from '../../hooks';

const TodoListCard = ({ currentTodoList, theme, isLightTheme }) => {
  const { title, color } = currentTodoList;
  const truncateText = useTruncateText(title, 14, 'text');
  const { width } = useWindowSize();

  const foundTodos = useSelector((state) =>
    filter(state.todoItemsReducer.todos, (todo) =>
      todo.todoList.includes(title)
    )
  );

  const location = useLocation();
  const { pathname } = location;
  const completeTodos = filter(foundTodos, (todo) => todo.isComplete).length;

  return (
    <TodoListWrapper
      color={color}
      theme={theme}
      isLightTheme={isLightTheme}
      pathname={pathname}
    >
      <TextWrapper pathname={pathname}>
        {truncateText}
        {width >= 768 ? null : <span className="hover-text">{title}</span>}
        <p pathname={pathname}>
          {completeTodos} / {foundTodos.length} items
        </p>
      </TextWrapper>
      {pathname === '/statistics' && (
        <TodoListStatistics
          completeTodos={completeTodos}
          foundTodos={foundTodos}
          currentTodoList={currentTodoList}
          theme={theme}
        />
      )}
    </TodoListWrapper>
  );
};

TodoListCard.propTypes = {
  currentTodoList: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
};

export default TodoListCard;
