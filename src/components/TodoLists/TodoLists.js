import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TodoListCard from '../TodoListCard';

const TodoLists = ({ theme, toggleTheme }) => {
  const todoListsArr = useSelector((state) => state.todoListsReducer);

  return (
    <div>
      {todoListsArr.map((currentTodoList) => (
        <Link to={`/todoLists/${currentTodoList.id}`} key={currentTodoList.id}>
          <TodoListCard
            currentTodoList={currentTodoList}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </Link>
      ))}
    </div>
  );
};

TodoLists.propTypes = {
  todoListArr: PropTypes.array,
  theme: PropTypes.object.isRequired,
  toggleTheme: PropTypes.bool.isRequired,
};

export default TodoLists;
