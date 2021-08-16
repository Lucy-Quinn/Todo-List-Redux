import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { find } from 'lodash';

import DeleteButton from '../../components/DeleteButton';
import FavoriteTodo from '../../components/FavoriteTodo';
import {
  SingleTodoPageWrapper,
  SingleTodoHeader,
  TextWrapper,
  TodoEdit,
} from './SingleTodoPage.styled';
import AddNote from '../../components/AddNote';
import AddTodoListCategory from '../../components/AddTodoListCategory';
import DueDate from '../../components/DueDate';
import EditForm from '../../components/EditForm';
import { useTruncateText, useWindowSize } from '../../hooks';

const SingleTodoPage = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { isLightTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = isLightTheme ? themes.light : themes.dark;

  const { todoId } = match.params;
  const currentTodo = useSelector((state) =>
    find(state.todoItemsReducer.todos, (todo) => todo.id === todoId)
  );
  const currentTodoText = currentTodo.text;
  const truncateText = useTruncateText(currentTodoText, 10, 'header');
  const { width } = useWindowSize();

  const handleEditItem = () => {
    setIsEdit(true);
  };

  return (
    <SingleTodoPageWrapper>
      <SingleTodoHeader>
        <FavoriteTodo currentTodo={currentTodo} theme={theme} />
        {isEdit ? (
          <EditForm
            isEdit={isEdit}
            currentItem={currentTodo}
            setIsEdit={setIsEdit}
          />
        ) : (
          <>
            <TextWrapper theme={theme}>
              {currentTodo !== undefined && truncateText}
              {width >= 768 ? null : (
                <span className="hover-text">{currentTodoText}</span>
              )}
            </TextWrapper>
            <TodoEdit theme={theme}>
              <i
                className="fas fa-pencil-alt edit-icon"
                onClick={handleEditItem}
              ></i>
            </TodoEdit>
          </>
        )}
      </SingleTodoHeader>
      <DueDate todoId={todoId} theme={theme} />
      <AddTodoListCategory currentTodo={currentTodo} theme={theme} />
      <AddNote
        currentTodo={currentTodo}
        theme={theme}
        isLightTheme={isLightTheme}
      />
      <DeleteButton currentItem={currentTodo} theme={theme} />
    </SingleTodoPageWrapper>
  );
};

SingleTodoPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SingleTodoPage;
