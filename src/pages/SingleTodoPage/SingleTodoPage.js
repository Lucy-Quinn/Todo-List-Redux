import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DeleteButton from '../../components/DeleteButton';
import FavoriteTodo from '../../components/FavoriteTodo';
import { SingleTodoPageWrapper, SingleTodoHeader } from './SingleTodoPage.styled';
import AddNote from '../../components/AddNote';
import AddTodoListCategory from '../../components/AddTodoListCategory';
import DueDate from '../../components/DueDate';
import { TodoEdit } from './SingleTodoPage.styled';
import EditForm from '../../components/EditForm';

const SingleTodoPage = ({ match }) => {

    const { todoId } = match.params;
    const [isEdit, setIsEdit] = useState(false);
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    const currentTodo = useSelector(state =>
        state.todoItemsReducer.todos.find(todo => todo.id === todoId)
    );

    const handleEditItem = () => {
        setIsEdit(true)
    }

    return (
        <SingleTodoPageWrapper>
            <SingleTodoHeader>
                <FavoriteTodo currentTodo={currentTodo} />
                {isEdit ?
                    <EditForm isEdit={isEdit} currentItem={currentTodo} setIsEdit={setIsEdit} />
                    :
                    <>
                        {currentTodo !== undefined &&
                            <h2>{currentTodo.text}</h2>}
                        <TodoEdit theme={theme}>
                            <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                        </TodoEdit>
                    </>
                }
            </SingleTodoHeader>
            <DueDate todoId={todoId} />
            <AddTodoListCategory currentTodo={currentTodo} />
            <AddNote currentTodo={currentTodo} />
            <DeleteButton currentItem={currentTodo} />
        </SingleTodoPageWrapper>
    );
}

export default SingleTodoPage;