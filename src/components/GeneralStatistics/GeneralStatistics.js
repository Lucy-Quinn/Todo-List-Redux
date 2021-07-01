import React from 'react';
import { useSelector } from 'react-redux';

import { GeneralStaticsWrapper, StaticsWrapper, ProgressBarContainer, ProgressAmount } from './GeneralStatistics.styled';


const GeneralStatistics = () => {

    const todosArr = useSelector(state => state.todoItemsReducer);
    const totalTodos = todosArr.length;
    const completeTodos = todosArr.filter(todo => todo.isComplete).length;
    const findPercentage = () => Math.round((completeTodos / totalTodos) * 100);

    return (
        <div>
            <GeneralStaticsWrapper>
                <ProgressBarContainer><ProgressAmount findPercentage={findPercentage}></ProgressAmount></ProgressBarContainer>
                <StaticsWrapper>
                    <p>{findPercentage()}% overall progress</p>
                    <p>{completeTodos} completed todos</p>
                    <p>{totalTodos} remaining todos to go...</p>
                </StaticsWrapper>
            </GeneralStaticsWrapper>
        </div>
    )
}

export default GeneralStatistics
