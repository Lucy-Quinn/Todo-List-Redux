import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import TodoCard from '../../components/TodoCard';

const TodoListItems = ({ currentTodoList }) => {

    const todosArr = useSelector(state => state.todoItemsReducer.todos);

    const foundTodoItems = todosArr.filter(todo => {
        return todo.todoList.includes(currentTodoList.title)
    })

    return (
        <div>
            {foundTodoItems.map(todoItem => {
                return (
                    <TodoCard key={todoItem.id} currentTodo={todoItem} />
                )
            }
            )}
        </div>
    );
};

TodoListItems.propTypes = {
    currentTodoList: PropTypes.object.isRequired,
};

export default TodoListItems;
