import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OrderTodosWrapper } from './OrderTodos.styled';
import {
  orderTodosByDateCreated,
  orderTodosAlphabetically,
  orderTodosByFavorites,
} from '../../redux/actions/todoItems';
import {
  TODO_FAVOURITES,
  TODO_ALPHABETICALLY,
  TODO_NEWEST,
  TODO_OLDEST,
} from './constants';

const ORDER_TODO_DATA = [
  {
    id: 1,
    action: TODO_FAVOURITES,
  },
  {
    id: 2,
    action: TODO_NEWEST,
  },
  {
    id: 3,
    action: TODO_OLDEST,
  },
  {
    id: 4,
    action: TODO_ALPHABETICALLY,
  },
];

const OrderTodos = () => {
  const [sortAction, setSortAction] = useState('');
  const { isLightTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = isLightTheme ? themes.light : themes.dark;

  const dispatch = useDispatch();

  const handleOptionChange = (e) => {
    setSortAction(e.target.value);
  };

  useEffect(() => {
    switch (sortAction) {
      case TODO_FAVOURITES:
        return dispatch(orderTodosByFavorites({ sortAction }));
      case TODO_ALPHABETICALLY:
        return dispatch(orderTodosAlphabetically({ sortAction }));
      case TODO_NEWEST:
        return dispatch(orderTodosByDateCreated({ sortAction }));
      case TODO_OLDEST:
        return dispatch(orderTodosByDateCreated({ sortAction }));
      default:
        return '';
    }
  }, [dispatch, sortAction]);

  return (
    <OrderTodosWrapper theme={theme}>
      <select
        className="form-select"
        value={sortAction}
        onChange={handleOptionChange}
      >
        <option value="" hidden>
          Order your todos by...
        </option>
        {ORDER_TODO_DATA.map((element) => (
          <option value={element.action} key={element.id}>
            {element.action}
          </option>
        ))}
      </select>
    </OrderTodosWrapper>
  );
};

export default OrderTodos;
