import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import DeleteButton from '../../components/DeleteButton';
import FavoriteTodo from '../../components/FavoriteTodo';
import { SingleTodoHeader } from './SingleTodoPage.styled';
import AddNote from '../../components/AddNote';
import AddTodoListCategory from '../../components/AddTodoListCategory';
import DueDate from '../../components/DueDate';
import { TodoEdit } from './SingleTodoPage.styled';
import EditForm from '../../components/EditForm';

const SingleTodoPage = ({ match }) => {

    const { todoId } = match.params;
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    const currentTodo = useSelector(state =>
        state.todoItemsReducer.find(todo => todo.id === todoId)
    );

    const [isEdit, setIsEdit] = useState(false);

    const handleEditItem = () => {
        setIsEdit(true)
    }

    return (
        <div>
            <SingleTodoHeader>
                <FavoriteTodo currentTodo={currentTodo} />
                {isEdit ?
                    <EditForm isEdit={isEdit} currentTodo={currentTodo} />
                    :
                    <>
                        {currentTodo !== undefined &&
                            <h2 currentTodo={currentTodo}>
                                {currentTodo.text}
                            </h2>}
                        <TodoEdit theme={theme}>
                            <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                        </TodoEdit>
                    </>
                }
            </SingleTodoHeader>
            <DueDate todoId={todoId} />
            <AddTodoListCategory />
            <AddNote currentTodo={currentTodo} />
            <DeleteButton currentItem={currentTodo} />
        </div>
    );
}

export default SingleTodoPage;