import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  removeTodo,
  removeTodoListCategory,
} from '../../redux/actions/todoItems';
import { DeleteItem } from './DeleteButton.styled';
import { removeTodoList } from '../../redux/actions/todoLists';

const DeleteTodo = ({ currentItem, theme }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const { pathname } = location;
  const isTodoListsPath = pathname.includes('todoLists');

  const { id, title } = currentItem;

  const handleRemoveItem = () => {
    if (isTodoListsPath) {
      dispatch(removeTodoList({ id }));
      dispatch(removeTodoListCategory({ title }));
      history.push('/todoLists');
    } else {
      dispatch(removeTodo({ id }));
      history.push('/');
    }
  };

  return (
    <>
      <DeleteItem onClick={handleRemoveItem} theme={theme}>
        {isTodoListsPath ? 'Delete todo list' : 'Delete Todo'}
      </DeleteItem>
    </>
  );
};

DeleteTodo.propTypes = {
  currentItem: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default DeleteTodo;
