import React from 'react';
import { useSelector } from 'react-redux';

import AddTodoForm from '../../components/AddTodoForm';
import DeleteButton from '../../components/DeleteButton';
import TodoListItems from '../../components/TodoListItems/TodoListItems';
import SelectTodoForm from '../../components/SelectTodoForm';

const SingleTodoListPage = ({ match }) => {

    const { todoListId } = match.params;
    const todoListArr = useSelector(state => state.todoListsReducer);
    const currentTodoList = todoListArr.find(todoList => todoList.id === todoListId)

    return (
        <div>
            <h2>{currentTodoList.title}</h2>
            <AddTodoForm currentTodoList={currentTodoList} />
            <SelectTodoForm currentTodoList={currentTodoList} />
            <TodoListItems currentTodoList={currentTodoList} />
            <DeleteButton currentItem={currentTodoList} />
        </div>
    )
}

export default SingleTodoListPage;
