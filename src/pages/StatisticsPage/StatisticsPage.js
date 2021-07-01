import React from 'react';

import GeneralStatistics from '../../components/GeneralStatistics';
import TodoListStatisticsCard from '../../components/TodoListStatisticsCard';

const StatisticsPage = () => {

    return (
        <div>
            <h2>Your Progress</h2>
            <GeneralStatistics />
            <TodoListStatisticsCard />
        </div>
    )
}

export default StatisticsPage
