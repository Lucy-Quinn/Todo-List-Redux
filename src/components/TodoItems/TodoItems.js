import React from 'react';
import { useSelector } from 'react-redux';

import Todo from '../Todo';
import TodoListWrapper from './TodoItems.styled';

const TodoItems = () => {

    const { todos, filtered, searchInput } = useSelector(state => state.todoItemsReducer);
    const orderedByFavorite = todos ? todos.sort((a, b) => (a.isFavorite) ? -1 : 1) : null;

    return (
        <div>
            {todos.length >= 1 ?
                <TodoListWrapper>
                    {searchInput.length >= 1 ?
                        filtered.map((currentFilteredTodo) =>
                            <Todo key={currentFilteredTodo.id} currentTodo={currentFilteredTodo} />)
                        :
                        orderedByFavorite.map((currentTodo) =>
                            <Todo key={currentTodo.id} currentTodo={currentTodo} />)
                    }
                </TodoListWrapper>
                :
                <div>
                    <h2>Add more todos...</h2>
                </div>
            }
        </div>
    )
}

export default TodoItems;