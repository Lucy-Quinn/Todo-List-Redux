import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  GeneralStaticsWrapper,
  StaticsWrapper,
  ProgressBarContainer,
  ProgressAmount,
  NoGeneralStatics,
} from './GeneralStatistics.styled';

const GeneralStatistics = ({ theme }) => {
  const todosArr = useSelector((state) => state.todoItemsReducer.todos);
  const todoListsArr = useSelector((state) => state.todoListsReducer);
  const totalTodoLists = todoListsArr.length;
  const totalTodos = todosArr.length;
  const completeTodos = todosArr.filter((todo) => todo.isComplete).length;
  const remainingTodo = totalTodos - completeTodos;

  const findPercentage = () => Math.round((completeTodos / totalTodos) * 100);

  return (
    <div>
      {totalTodos < 1 || totalTodoLists < 1 ? (
        <NoGeneralStatics theme={theme}>
          You need to add a<Link to="/todoLists"> todo list </Link>
          and/or some
          <Link to="/"> todos </Link>
          before you can check your progress
        </NoGeneralStatics>
      ) : (
        <GeneralStaticsWrapper>
          <ProgressBarContainer theme={theme}>
            <ProgressAmount
              findPercentage={findPercentage}
              theme={theme}
            ></ProgressAmount>
          </ProgressBarContainer>
          <StaticsWrapper theme={theme}>
            <p>{findPercentage()}% overall progress</p>
            <div className="underline"></div>
            <p>{totalTodos} todos in total</p>
            <p>{completeTodos} completed todos</p>
            <p>
              {remainingTodo} remaining {remainingTodo > 1 ? 'todos' : 'todo'}
              ...
            </p>
          </StaticsWrapper>
        </GeneralStaticsWrapper>
      )}
    </div>
  );
};

GeneralStatistics.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default GeneralStatistics;
