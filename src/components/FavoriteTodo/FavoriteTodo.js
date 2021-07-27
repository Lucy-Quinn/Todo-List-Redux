import React from 'react';
import { useDispatch } from 'react-redux';

import { FavoriteIconFilled, FavoriteIconNotFilled } from './FavoriteTodo.styled';
import { favoriteTodo } from '../../redux/actions/todoItems';

const FavoriteTodo = ({ currentTodo }) => {

    const dispatch = useDispatch();
    const { id: todoId } = currentTodo;

    const handleFavoriteItem = () => {
        dispatch(favoriteTodo({ todoId }));
    }

    return (
        <div onClick={handleFavoriteItem}>
            {currentTodo !== undefined && currentTodo.isFavorite ?
                <FavoriteIconFilled className="fas fa-star" currentTodo={currentTodo} />
                :
                <FavoriteIconNotFilled className="far fa-star" currentTodo={currentTodo} />
            }
        </div>
    );
}

export default FavoriteTodo;
