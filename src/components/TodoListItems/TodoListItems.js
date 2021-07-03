import React from 'react';
import { useSelector } from 'react-redux';

import TodoCard from '../../components/TodoCard';

const TodoListItems = ({ currentTodoList }) => {

    const todosArr = useSelector(state => state.todoItemsReducer.todos);
    const foundTodoItems = todosArr.filter(todo => todo.todoList === currentTodoList.title);

    return (
        <div>
            {foundTodoItems.map(todoItem => {
                return (
                    <TodoCard key={todoItem.id} currentTodo={todoItem} />
                )
            }
            )}
        </div>
    )
}

export default TodoListItems
