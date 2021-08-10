import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import TodoCard from '../../components/TodoCard';
import { TodoListItemsWrapper } from './TodoListItems.styled';

const TodoListItems = ({ currentTodoList, theme }) => {
  const todosArr = useSelector((state) => state.todoItemsReducer.todos);

  const foundTodoItems = todosArr.filter((todo) => {
    return todo.todoList.includes(currentTodoList.title);
  });

  return (
    foundTodoItems.length > 0 && (
      <TodoListItemsWrapper theme={theme}>
        {foundTodoItems.map((todoItem) => {
          return (
            <TodoCard key={todoItem.id} currentTodo={todoItem} theme={theme} />
          );
        })}
      </TodoListItemsWrapper>
    )
  );
};

TodoListItems.propTypes = {
  currentTodoList: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default TodoListItems;
