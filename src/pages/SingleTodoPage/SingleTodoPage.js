import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DeleteTodo from '../../components/DeleteTodo';
import FavoriteTodo from '../../components/FavoriteTodo';
import { SingleTodoHeader } from './SingleTodoPage.styled'

const SingleTodoPage = (props) => {

    const { todoId } = props.match.params

    const currentTodo = useSelector(state =>
        state.todoListReducer.find(todo => todo.id === todoId)
    )

    return (
        <div>
            <SingleTodoHeader>
                <h2>
                    {currentTodo ?
                        currentTodo.text :
                        <div>
                            <h1>Your post has been deleted</h1>
                            <h2>Return<Link to="/">Home</Link></h2>
                        </div>
                    }
                </h2>
                <FavoriteTodo currentTodo={currentTodo} />
            </SingleTodoHeader>
            <DeleteTodo currentTodo={currentTodo} />
        </div>
    );
}

export default SingleTodoPage;