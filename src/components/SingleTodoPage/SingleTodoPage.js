import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DeleteTodo from '../DeleteTodo';
import Navbar from '../Navbar';
import { favoriteTodo } from '../../redux/actions';

const SingleTodoPage = ({ match }) => {

    const { todoId } = match.params
    const dispatch = useDispatch();

    const currentTodo = useSelector(state =>
        state.todoListReducer.find(todo => todo.id === todoId)
    )

    const handleFavoriteItem = () => {
        dispatch(favoriteTodo(todoId))
    }

    return (
        <div>
            <Navbar />
            <div>
                <h1>{
                    currentTodo ?
                        currentTodo.text :
                        <div>
                            <h1>Your post has been deleted</h1>
                            <h2>Return<Link to="/">Home</Link></h2>
                        </div>
                }</h1>
                <div onClick={handleFavoriteItem}>
                    <i className="far fa-star"></i>
                </div>
            </div>
            <DeleteTodo currentTodo={currentTodo} />
        </div>
    );
}

export default SingleTodoPage;