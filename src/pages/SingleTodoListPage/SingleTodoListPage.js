import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import AddTodoForm from '../../components/AddTodoForm';
import DeleteButton from '../../components/DeleteButton';
import TodoListItems from '../../components/TodoListItems/TodoListItems';
import SelectTodoForm from '../../components/SelectTodoForm';
import { SingleTodoListPageWrapper, TodoListEdit, SingleTodoListHeader } from './SingleTodoListPage.styled';
import EditForm from '../../components/EditForm';
import truncateUtils from '../../utils/truncateUtils';

const SingleTodoListPage = ({ match }) => {

    const [isEdit, setIsEdit] = useState(false);

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    const todoListArr = useSelector(state => state.todoListsReducer);
    const { todoListId } = match.params;
    const currentTodoList = todoListArr.find(todoList => todoList.id === todoListId);

    const currentTodoListTitle = currentTodoList.title;
    const [title, setTitle] = useState(currentTodoListTitle);

    const handleEditItem = () => {
        setIsEdit(true)
    };

    useEffect(() => {
        truncateUtils(currentTodoListTitle, 14, setTitle)
    }, [title, currentTodoListTitle]);

    return (
        <SingleTodoListPageWrapper>
            {isEdit ?
                <EditForm isEdit={isEdit} currentItem={currentTodoList} setIsEdit={setIsEdit} />
                :
                <SingleTodoListHeader>
                    {currentTodoList !== undefined &&
                        <h2>{title}</h2>}
                    <TodoListEdit theme={theme}>
                        <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                    </TodoListEdit>
                </SingleTodoListHeader>
            }
            <AddTodoForm currentTodoList={currentTodoList} />
            <SelectTodoForm currentTodoList={currentTodoList} />
            <TodoListItems currentTodoList={currentTodoList} />
            <DeleteButton currentItem={currentTodoList} />
        </SingleTodoListPageWrapper>
    )
}

export default SingleTodoListPage;
