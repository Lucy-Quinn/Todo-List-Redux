import React from 'react';
import { useSelector } from 'react-redux';

import Todo from '../../components/Todo';
import TodoAddForm from '../../components/TodoAddForm';

const SingleTodoListPage = ({ match }) => {

    const { todoListId } = match.params;

    const todoListArr = useSelector(state => state.todoListCategoriesReducer);
    const todosArr = useSelector(state => state.todoItemsReducer);

    const currentTodoList = todoListArr.find(todoList => todoList.id === todoListId)

    const foundTodoItems = todosArr.filter(todo => {
        return (todo.todoList === currentTodoList.title)
    });

    return (
        <div>
            <h2>{currentTodoList.title}</h2>
            <TodoAddForm currentTodoList={currentTodoList} />
            {foundTodoItems.map(todoItem => {
                return (
                    <Todo key={todoItem.id} currentTodo={todoItem} />
                )
            }
            )}
        </div>
    )
}

export default SingleTodoListPage;
