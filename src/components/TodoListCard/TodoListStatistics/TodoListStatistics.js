import React from 'react';
import { Link } from 'react-router-dom';

import { TodoListStatisticsWrapper, IndividualProgressBarContainer, IndividualProgressAmount } from './TodoListStatistics.styled';

const TodoListStatistics = ({ completeTodos, foundTodos, currentTodoList }) => {

    const totalTodos = foundTodos.length;
    const findPercentage = () => Math.round((completeTodos / totalTodos) * 100);

    return (
        <TodoListStatisticsWrapper>
            {completeTodos === 0 ?
                <p>0% complete</p>
                : <p>{findPercentage()}% complete</p>
            }
            <IndividualProgressBarContainer>
                <IndividualProgressAmount findPercentage={findPercentage}></IndividualProgressAmount>
            </IndividualProgressBarContainer>
            {findPercentage() === 100 &&
                <p>Amazing work!</p>
            }
            {findPercentage() < 100 && totalTodos > 0 &&
                <p>Keep going!</p>
            }
            {totalTodos < 1 &&
                <p>You need some
                    <Link to={`todoLists/${currentTodoList.id}`}>todos</Link>todos</p>
            }
        </TodoListStatisticsWrapper>
    )
}

export default TodoListStatistics
