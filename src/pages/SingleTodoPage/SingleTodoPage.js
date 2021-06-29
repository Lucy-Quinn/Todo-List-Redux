import React from 'react';
import { useSelector } from 'react-redux';

import DeleteTodo from '../../components/DeleteTodo';
import FavoriteTodo from '../../components/FavoriteTodo';
import { SingleTodoHeader } from './SingleTodoPage.styled';
import AddNote from '../../components/AddNote';
import AddTodoListCategory from '../../components/AddTodoListCategory';

const SingleTodoPage = ({ match }) => {

    const { todoId } = match.params;

    const currentTodo = useSelector(state =>
        state.todoItemsReducer.find(todo => todo.id === todoId)
    );

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
            <AddTodoListCategory />
            <AddNote currentTodo={currentTodo} />
            <DeleteTodo currentTodo={currentTodo} />
        </div>
    );
}

export default SingleTodoPage;