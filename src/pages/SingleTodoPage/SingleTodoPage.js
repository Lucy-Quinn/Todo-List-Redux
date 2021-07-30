import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DeleteButton from '../../components/DeleteButton';
import FavoriteTodo from '../../components/FavoriteTodo';
import {
  SingleTodoPageWrapper,
  SingleTodoHeader,
  TextWrapper,
} from './SingleTodoPage.styled';
import AddNote from '../../components/AddNote';
import AddTodoListCategory from '../../components/AddTodoListCategory';
import DueDate from '../../components/DueDate';
import { TodoEdit } from './SingleTodoPage.styled';
import EditForm from '../../components/EditForm';
import { useTruncateText, useWindowSize } from '../../hooks';

const SingleTodoPage = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { toggleTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;

  const { todoId } = match.params;
  const currentTodo = useSelector((state) =>
    state.todoItemsReducer.todos.find((todo) => todo.id === todoId)
  );
  const currentTodoText = currentTodo.text;
  const truncateText = useTruncateText(currentTodoText, 12, 'header');
  const { width } = useWindowSize();

  const handleEditItem = () => {
    setIsEdit(true);
  };

  return (
    <SingleTodoPageWrapper>
      <SingleTodoHeader>
        <FavoriteTodo currentTodo={currentTodo} />
        {isEdit ? (
          <EditForm
            isEdit={isEdit}
            currentItem={currentTodo}
            setIsEdit={setIsEdit}
          />
        ) : (
          <>
            <TextWrapper>
              {currentTodo !== undefined && truncateText}
              {width >= 768 ? null : (
                <span className="hover-text">{currentTodoText}</span>
              )}
            </TextWrapper>
            <TodoEdit theme={theme}>
              <i className="fas fa-pencil-alt" onClick={handleEditItem}></i>
            </TodoEdit>
          </>
        )}
      </SingleTodoHeader>
      <DueDate todoId={todoId} />
      <AddTodoListCategory currentTodo={currentTodo} />
      <AddNote currentTodo={currentTodo} />
      <DeleteButton currentItem={currentTodo} />
    </SingleTodoPageWrapper>
  );
};

SingleTodoPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SingleTodoPage;
