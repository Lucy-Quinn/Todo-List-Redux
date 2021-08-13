import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  FavoriteTodoWrapper,
  FavoriteIconFilled,
  FavoriteIconNotFilled,
} from './FavoriteTodo.styled';
import { favoriteTodo } from '../../redux/actions/todoItems';

const FavoriteTodo = ({ currentTodo, theme }) => {
  const dispatch = useDispatch();
  const { id: todoId } = currentTodo;

  const handleFavoriteItem = () => {
    dispatch(favoriteTodo({ todoId }));
  };

  return (
    <FavoriteTodoWrapper onClick={handleFavoriteItem}>
      {currentTodo !== undefined && currentTodo.isFavorite ? (
        <FavoriteIconFilled
          className="fas fa-star favorite-icon"
          currentTodo={currentTodo}
          theme={theme}
        />
      ) : (
        <FavoriteIconNotFilled
          className="far fa-star favorite-icon"
          currentTodo={currentTodo}
          theme={theme}
        />
      )}
    </FavoriteTodoWrapper>
  );
};

FavoriteTodo.propTypes = {
  currentTodo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default FavoriteTodo;
