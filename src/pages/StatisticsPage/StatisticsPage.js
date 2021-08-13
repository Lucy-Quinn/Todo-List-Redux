import React from 'react';
import { useSelector } from 'react-redux';

import GeneralStatistics from '../../components/GeneralStatistics';
import TodoListStatisticsCards from '../../components/TodoListStatisticsCards';
import { StatisticsPageWrapper } from './StatisticsPage.styled';

const StatisticsPage = () => {
  const { isLightTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = isLightTheme ? themes.light : themes.dark;

  return (
    <StatisticsPageWrapper>
      <h2>Your Progress</h2>
      <GeneralStatistics theme={theme} />
      <TodoListStatisticsCards theme={theme} isLightTheme={isLightTheme} />
    </StatisticsPageWrapper>
  );
};

export default StatisticsPage;
