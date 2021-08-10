import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TodoListCard from '../TodoListCard';
import { NoTodoLists } from './TodoLists.styled';

const TodoLists = ({ theme, toggleTheme }) => {
  const todoListsArr = useSelector((state) => state.todoListsReducer);

  return (
    <div>
      {todoListsArr.length > 0 ? (
        todoListsArr.map((currentTodoList) => (
          <Link
            to={`/todoLists/${currentTodoList.id}`}
            key={currentTodoList.id}
          >
            <TodoListCard
              currentTodoList={currentTodoList}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </Link>
        ))
      ) : (
        <NoTodoLists>
          <h3>You do not have any todo lists...</h3>
        </NoTodoLists>
      )}
    </div>
  );
};

TodoLists.propTypes = {
  todoListArr: PropTypes.array,
  theme: PropTypes.object.isRequired,
  toggleTheme: PropTypes.object.isRequired,
};

export default TodoLists;
