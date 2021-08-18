import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { map, orderBy } from 'lodash';

import TodoCard from '../TodoCard';
import { TodoListWrapper, NoTodos } from './TodoItems.styled';

const TodoItems = ({ theme, isLightTheme }) => {
  const { todos, filtered, inputValue } = useSelector(
    (state) => state.todoItemsReducer
  );
  const todosOrderedByMostRecent = orderBy(todos, ['dateCreated'], ['desc']);

  return (
    <>
      {todos.length >= 1 ? (
        <TodoListWrapper theme={theme}>
          {inputValue.length >= 1
            ? map(filtered, (currentFilteredTodo) => (
                <TodoCard
                  key={currentFilteredTodo.id}
                  currentTodo={currentFilteredTodo}
                  theme={theme}
                  isLightTheme={isLightTheme}
                />
              ))
            : map(todosOrderedByMostRecent, (currentTodo) => (
                <TodoCard
                  key={currentTodo.id}
                  currentTodo={currentTodo}
                  theme={theme}
                  isLightTheme={isLightTheme}
                />
              ))}
        </TodoListWrapper>
      ) : (
        <NoTodos>
          <h3>You do not have any todos...</h3>
        </NoTodos>
      )}
    </>
  );
};

TodoItems.propTypes = {
  theme: PropTypes.object.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
};

export default TodoItems;
