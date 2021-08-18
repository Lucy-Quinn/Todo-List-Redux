import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { map } from 'lodash';
import PropTypes from 'prop-types';

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

const OrderTodos = ({ theme }) => {
  const [sortAction, setSortAction] = useState('');

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
      <div className="select">
        <select
          className="form-select select"
          value={sortAction}
          onChange={handleOptionChange}
        >
          <option value="" hidden>
            Order by
          </option>
          {map(ORDER_TODO_DATA, (element) => (
            <option value={element.action} key={element.id}>
              {element.action}
            </option>
          ))}
        </select>
      </div>
    </OrderTodosWrapper>
  );
};

OrderTodos.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default OrderTodos;
