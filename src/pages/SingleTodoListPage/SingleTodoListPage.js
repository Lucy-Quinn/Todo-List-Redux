import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import AddTodoForm from '../../components/AddTodoForm';
import DeleteButton from '../../components/DeleteButton';
import TodoListItems from '../../components/TodoListItems/TodoListItems';
import SelectTodoForm from '../../components/SelectTodoForm';
import {
  SingleTodoListPageWrapper,
  TodoListEdit,
  SingleTodoListHeader,
} from './SingleTodoListPage.styled';
import EditForm from '../../components/EditForm';
import useTruncateText from '../../hooks';

const SingleTodoListPage = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { toggleTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;
  const todoListArr = useSelector((state) => state.todoListsReducer);

  const { todoListId } = match.params;
  const currentTodoList = todoListArr.find(({ id }) => id === todoListId);

  const { title } = currentTodoList;
  const trucateText = useTruncateText(title, 12, 'header');

  const handleEditItem = () => {
    setIsEdit(true);
  };

  return (
    <SingleTodoListPageWrapper>
      {isEdit ? (
        <EditForm
          isEdit={isEdit}
          currentItem={currentTodoList}
          setIsEdit={setIsEdit}
          theme={theme}
        />
      ) : (
        <SingleTodoListHeader>
          {currentTodoList !== undefined && trucateText}
          <TodoListEdit theme={theme}>
            <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
          </TodoListEdit>
        </SingleTodoListHeader>
      )}
      <AddTodoForm currentTodoList={currentTodoList} theme={theme} />
      <SelectTodoForm currentTodoList={currentTodoList} />
      <TodoListItems currentTodoList={currentTodoList} />
      <DeleteButton currentItem={currentTodoList} />
    </SingleTodoListPageWrapper>
  );
};

SingleTodoListPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SingleTodoListPage;
