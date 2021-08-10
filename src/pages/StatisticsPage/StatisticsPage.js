import React from 'react';
import { useSelector } from 'react-redux';

import GeneralStatistics from '../../components/GeneralStatistics';
import TodoListStatisticsCards from '../../components/TodoListStatisticsCards';
import { StatisticsPageWrapper } from './StatisticsPage.styled';

const StatisticsPage = () => {
  const { toggleTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;

  return (
    <StatisticsPageWrapper>
      <h2>Your Progress</h2>
      <GeneralStatistics theme={theme} />
      <TodoListStatisticsCards theme={theme} toggleTheme={toggleTheme} />
    </StatisticsPageWrapper>
  );
};

export default StatisticsPage;
