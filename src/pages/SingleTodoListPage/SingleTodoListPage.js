import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import AddTodoForm from '../../components/AddTodoForm';
import DeleteButton from '../../components/DeleteButton';
import TodoListItems from '../../components/TodoListItems/TodoListItems';
import SelectTodoForm from '../../components/SelectTodoForm';
import { TodoEdit } from './SingleTodoListPage.styled';
import EditForm from '../../components/EditForm';

const SingleTodoListPage = ({ match }) => {

    const [isEdit, setIsEdit] = useState(false);
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    const { todoListId } = match.params;
    const todoListArr = useSelector(state => state.todoListsReducer);
    const currentTodoList = todoListArr.find(todoList => todoList.id === todoListId)

    const handleEditItem = () => {
        setIsEdit(true)
    }

    return (
        <div>
            {isEdit ?
                <EditForm isEdit={isEdit} currentItem={currentTodoList} setIsEdit={setIsEdit} />
                :
                <>
                    {currentTodoList !== undefined &&
                        <h2>{currentTodoList.title}</h2>}
                    <TodoEdit theme={theme}>
                        <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
                    </TodoEdit>
                </>
            }
            <AddTodoForm currentTodoList={currentTodoList} />
            <SelectTodoForm currentTodoList={currentTodoList} />
            <TodoListItems currentTodoList={currentTodoList} />
            <DeleteButton currentItem={currentTodoList} />
        </div>
    )
}

export default SingleTodoListPage;
