import React from 'react';
import { useSelector } from 'react-redux';

import DeleteTodo from '../../components/DeleteTodo';
import FavoriteTodo from '../../components/FavoriteTodo';
import { SingleTodoHeader } from './SingleTodoPage.styled';
import AddNote from '../../components/AddNote';

const SingleTodoPage = (props) => {

    const { todoId } = props.match.params;

    const currentTodo = useSelector(state =>
        state.todoItemsReducer.find(todo => todo.id === todoId)
    )

    return (
        <div>
            <SingleTodoHeader>
                {currentTodo !== undefined &&
                    <h2>
                        {currentTodo.text}
                    </h2>
                }
                <FavoriteTodo currentTodo={currentTodo} />
            </SingleTodoHeader>
            <AddNote currentTodo={currentTodo} />
            <DeleteTodo currentTodo={currentTodo} />
        </div>
    );
}

export default SingleTodoPage;