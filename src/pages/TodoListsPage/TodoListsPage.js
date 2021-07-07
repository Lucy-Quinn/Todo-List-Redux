import React from 'react';

import AddTodoListForm from '../../components/AddTodoListForm';
import TodoLists from '../../components/TodoLists/TodoLists';
import { TodoListsPageWrapper } from './TodoListsPage.styled';

const TodoListsPage = () => {

    return (
        <TodoListsPageWrapper>
            <h2>Your Todo Lists</h2>
            <AddTodoListForm />
            <TodoLists />
        </TodoListsPageWrapper>
    )
}

export default TodoListsPage;