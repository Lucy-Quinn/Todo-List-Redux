import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { find } from 'lodash';

import AddTodoForm from '../../components/AddTodoForm';
import DeleteButton from '../../components/DeleteButton';
import TodoListItems from '../../components/TodoListItems/TodoListItems';
import SelectTodoForm from '../../components/SelectTodoForm';
import {
  SingleTodoListPageWrapper,
  TodoListEdit,
  SingleTodoListHeader,
  TextWrapper,
} from './SingleTodoListPage.styled';
import EditForm from '../../components/EditForm';
import { useTruncateText, useWindowSize } from '../../hooks';

const SingleTodoListPage = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { isLightTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = isLightTheme ? themes.light : themes.dark;
  const todoListArr = useSelector((state) => state.todoListsReducer);
  const { width } = useWindowSize();

  const { todoListId } = match.params;
  const currentTodoList = find(todoListArr, ({ id }) => id === todoListId);
  const { title } = currentTodoList;
  const truncateText = useTruncateText(title, 12, 'header');

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
          <TextWrapper theme={theme}>
            {currentTodoList !== undefined && truncateText}
            {width >= 768 ? null : <span className="hover-text">{title}</span>}
          </TextWrapper>
          <TodoListEdit theme={theme}>
            <i
              className="fas fa-pencil-alt edit-icon"
              onClick={handleEditItem}
            ></i>
          </TodoListEdit>
        </SingleTodoListHeader>
      )}
      <AddTodoForm currentTodoList={currentTodoList} theme={theme} />
      <SelectTodoForm currentTodoList={currentTodoList} theme={theme} />
      <TodoListItems
        currentTodoList={currentTodoList}
        theme={theme}
        isLightTheme={isLightTheme}
      />
      <DeleteButton currentItem={currentTodoList} theme={theme} />
    </SingleTodoListPageWrapper>
  );
};

SingleTodoListPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SingleTodoListPage;
