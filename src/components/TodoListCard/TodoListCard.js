import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  TodoListWrapper,
  ItemsNumber,
  TextWrapper,
} from './TodoListCard.styled';
import TodoListStatistics from './TodoListStatistics';
import { useTruncateText, useWindowSize } from '../../hooks';

const TodoListCard = ({ currentTodoList }) => {
  const { title, color } = currentTodoList;
  const truncateText = useTruncateText(title, 14, 'text');
  const { width } = useWindowSize();

  const foundTodos = useSelector((state) =>
    state.todoItemsReducer.todos.filter((todo) => todo.todoList.includes(title))
  );

  const location = useLocation();
  const { pathname } = location;
  const completeTodos = foundTodos.filter((todo) => todo.isComplete).length;

  return (
    <TodoListWrapper color={color}>
      <TextWrapper pathname={pathname}>
        {truncateText}
        {width >= 768 ? null : <span className="hover-text">{title}</span>}
        <ItemsNumber>
          {completeTodos} / {foundTodos.length} items
        </ItemsNumber>
      </TextWrapper>
      {pathname === '/statistics' && (
        <TodoListStatistics
          completeTodos={completeTodos}
          foundTodos={foundTodos}
          currentTodoList={currentTodoList}
        />
      )}
    </TodoListWrapper>
  );
};

TodoListCard.propTypes = {
  currentTodoList: PropTypes.object.isRequired,
};

export default TodoListCard;
