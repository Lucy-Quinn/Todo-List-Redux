import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import TodoCard from '../TodoCard';
import { TodoListWrapper, NoTodos } from './TodoItems.styled';
import OrderTodos from '../OrderTodos';

const TodoItems = ({ theme }) => {
  const { todos, filtered, inputValue } = useSelector(
    (state) => state.todoItemsReducer
  );

  return (
    <>
      {todos.length >= 1 ? (
        <TodoListWrapper theme={theme}>
          <OrderTodos />
          {inputValue.length >= 1
            ? filtered.map((currentFilteredTodo) => (
                <TodoCard
                  key={currentFilteredTodo.id}
                  currentTodo={currentFilteredTodo}
                  theme={theme}
                />
              ))
            : todos.map((currentTodo) => (
                <TodoCard
                  key={currentTodo.id}
                  currentTodo={currentTodo}
                  theme={theme}
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
};
export default TodoItems;
