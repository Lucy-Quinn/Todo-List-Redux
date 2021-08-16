import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { favoriteTodo } from '../../redux/actions/todoItems';

const FavoriteTodo = ({ currentTodo, theme }) => {
  const dispatch = useDispatch();
  const { id: todoId } = currentTodo;
  const history = useHistory();

  const handleFavoriteItem = () => {
    dispatch(favoriteTodo({ todoId }));
    history.push('/');
  };

  return (
    <div onClick={handleFavoriteItem}>
      {currentTodo !== undefined && currentTodo.isFavorite ? (
        <i className="fas fa-star favorite-icon" />
      ) : (
        <i className="far fa-star favorite-icon" />
      )}
    </div>
  );
};

FavoriteTodo.propTypes = {
  currentTodo: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default FavoriteTodo;
