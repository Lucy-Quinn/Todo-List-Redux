import React from 'react';

import GeneralStatistics from '../../components/GeneralStatistics';
import TodoListStatisticsCard from '../../components/TodoListStatisticsCard';
import { StatisticsPageWrapper } from './StatisticsPage.styled';

const StatisticsPage = () => {

    return (
        <StatisticsPageWrapper>
            <h2>Your Progress</h2>
            <GeneralStatistics />
            <TodoListStatisticsCard />
        </StatisticsPageWrapper>
    )
}

export default StatisticsPage
