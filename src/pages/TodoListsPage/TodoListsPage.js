import React from 'react';
import { useSelector } from 'react-redux';

import AddTodoListForm from '../../components/AddTodoListForm';
import TodoLists from '../../components/TodoLists/TodoLists';
import { TodoListsPageWrapper } from './TodoListsPage.styled';

const TodoListsPage = () => {
  const { toggleTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;
  const todoListArr = useSelector((state) => state.todoListsReducer);
  return (
    <TodoListsPageWrapper>
      <h2>Your Todo Lists</h2>
      <AddTodoListForm todoListArr={todoListArr} theme={theme} />
      <TodoLists theme={theme} toggleTheme={toggleTheme} />
    </TodoListsPageWrapper>
  );
};

export default TodoListsPage;
