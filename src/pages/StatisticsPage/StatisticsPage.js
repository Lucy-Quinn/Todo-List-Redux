import React from 'react';

import GeneralStatistics from '../../components/GeneralStatistics';
import TodoListStatisticsCards from '../../components/TodoListStatisticsCards';
import { StatisticsPageWrapper } from './StatisticsPage.styled';

const StatisticsPage = () => {

    return (
        <StatisticsPageWrapper>
            <h2>Your Progress</h2>
            <GeneralStatistics />
            <TodoListStatisticsCards />
        </StatisticsPageWrapper>
    );
};

export default StatisticsPage;