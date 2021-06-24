import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FavoriteIconFilled, FavoriteIconNotFilled } from './FavoriteTodo.styled';
import { favoriteTodo } from '../../redux/actions';

const FavoriteTodo = ({ currentTodo }) => {

    const dispatch = useDispatch();

    const handleFavoriteItem = () => {
        dispatch(favoriteTodo(currentTodo.id))
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
