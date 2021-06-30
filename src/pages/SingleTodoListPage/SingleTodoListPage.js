import React from 'react';
import { useSelector } from 'react-redux';

import Todo from '../../components/Todo';
import AddTodoForm from '../../components/AddTodoForm';
import DeleteButton from '../../components/DeleteButton';

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
            <AddTodoForm currentTodoList={currentTodoList} />
            {foundTodoItems.map(todoItem => {
                return (
                    <Todo key={todoItem.id} currentTodo={todoItem} />
                )
            }
            )}
            <DeleteButton currentItem={currentTodoList} />
        </div>
    )
}

export default SingleTodoListPage;
