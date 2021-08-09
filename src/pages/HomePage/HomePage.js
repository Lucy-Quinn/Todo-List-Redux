import React from 'react';
import { useSelector } from 'react-redux';

import AddTodoForm from '../../components/AddTodoForm';
import TodoItems from '../../components/TodoItems';
import { TodoListWrapper, TodoListCenter } from './HomePage.styled';
import SearchBar from '../../components/SearchBar';

const HomePage = () => {
  const { toggleTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;
  return (
    <TodoListWrapper>
      <TodoListCenter>
        <SearchBar theme={theme} />
        <AddTodoForm theme={theme} />
        <TodoItems theme={theme} />
      </TodoListCenter>
    </TodoListWrapper>
  );
};

export default HomePage;
