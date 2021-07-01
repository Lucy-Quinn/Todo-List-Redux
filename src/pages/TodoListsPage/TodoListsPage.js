import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import TodoListCard from '../../components/TodoListCard';
// import { } from './TodoListsPage.styled';
import AddTodoListForm from '../../components/AddTodoListForm';

const TodoListsPage = () => {

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    const todoListsArr = useSelector(state => state.todoListCategoriesReducer);

    return (
        <div>
            <h2>Your Todo Lists</h2>
            <AddTodoListForm />
            <div>
                {todoListsArr.map((currentTodoList) =>
                    <Link to={`/todoLists/${currentTodoList.id}`} key={currentTodoList.id}>
                        <TodoListCard currentTodoList={currentTodoList} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default TodoListsPage;