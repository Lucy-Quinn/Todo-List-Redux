import React from 'react';
import { useSelector } from 'react-redux';

import TodoCard from '../TodoCard';
import TodoListWrapper from './TodoItems.styled';

const TodoItems = () => {

    const { todos, filtered, inputValue } = useSelector(state => state.todoItemsReducer);

    return (
        <div>
            {todos.length >= 1 ?
                <TodoListWrapper>
                    {inputValue.length >= 1 ?
                        filtered.map((currentFilteredTodo) =>
                            <TodoCard key={currentFilteredTodo.id} currentTodo={currentFilteredTodo} />)
                        :
                        todos.map((currentTodo) =>
                            <TodoCard key={currentTodo.id} currentTodo={currentTodo} />)
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