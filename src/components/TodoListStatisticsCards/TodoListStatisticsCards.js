import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TodoListCard from '../TodoListCard';
import { StatisticsCardWrapper } from './TodoListStatisticsCards.styled';

const TodoListStatisticsCard = ({ theme, isLightTheme }) => {
  const todoListArr = useSelector((state) => state.todoListsReducer);

  return (
    <StatisticsCardWrapper>
      {todoListArr.map((todoList) => (
        <Link to={`todoLists/${todoList.id}`} key={todoList.id}>
          <TodoListCard
            currentTodoList={todoList}
            theme={theme}
            isLightTheme={isLightTheme}
          />
        </Link>
      ))}
    </StatisticsCardWrapper>
  );
};

TodoListStatisticsCard.propTypes = {
  theme: PropTypes.object.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
};

export default TodoListStatisticsCard;
