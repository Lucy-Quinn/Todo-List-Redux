import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  GeneralStaticsWrapper,
  StaticsWrapper,
  ProgressBarContainer,
  ProgressAmount,
} from './GeneralStatistics.styled';

const GeneralStatistics = () => {
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
        <p>
          You need to add a<Link to="/todoLists"> todo list </Link>
          and/or some
          <Link to="/"> todos </Link>
          before you check your progress
        </p>
      ) : (
        <GeneralStaticsWrapper>
          <ProgressBarContainer>
            <ProgressAmount findPercentage={findPercentage}></ProgressAmount>
          </ProgressBarContainer>
          <StaticsWrapper>
            <p>{findPercentage()}% overall progress</p>
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

export default GeneralStatistics;
