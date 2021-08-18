import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddTodoForm from '../../components/AddTodoForm';
import TodoItems from '../../components/TodoItems';
import { TodoListWrapper, TodoListCenter, Buttons } from './HomePage.styled';
import SearchBar from '../../components/SearchBar';
import OrderTodos from '../../components/OrderTodos';
import SearchButton from '../../components/SearchButton';
import { filterTodos } from '../../redux/actions/todoItems';

const HomePage = () => {
  const { isLightTheme, themes } = useSelector((state) => state.themeReducer);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const theme = isLightTheme ? themes.light : themes.dark;
  const dispatch = useDispatch();

  let searchInput = '';

  useEffect(() => {
    if (!isSearchActive) {
      dispatch(filterTodos({ searchInput }));
    }
  }, [isSearchActive]);

  return (
    <TodoListWrapper>
      <TodoListCenter>
        <AddTodoForm theme={theme} />
        <Buttons>
          <SearchButton
            isSearchActive={isSearchActive}
            setIsSearchActive={setIsSearchActive}
            theme={theme}
            isLightTheme={isLightTheme}
          />
          <OrderTodos theme={theme} />
        </Buttons>
        {isSearchActive && <SearchBar theme={theme} />}
        <TodoItems theme={theme} isLightTheme={isLightTheme} />
      </TodoListCenter>
    </TodoListWrapper>
  );
};

export default HomePage;
