import React from 'react';

import AddTodoListForm from '../../components/AddTodoListForm';
import TodoLists from '../../components/TodoLists/TodoLists';

const TodoListsPage = () => {

    return (
        <div>
            <h2>Your Todo Lists</h2>
            <AddTodoListForm />
            <TodoLists />
        </div>
    )
}

export default TodoListsPage;