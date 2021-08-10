import styled from 'styled-components';

const TodoListCategoryOption = styled.option``;

const TodoListCategoryLabel = styled.label`
  width: 100%;
`;

const TodoListCategorySelect = styled.select`
  background-color: #ffffff;
`;

const NoTodoLists = styled.p`
  padding: 20px 2px;
  color: ${({ theme }) => theme.onBackground};
  a {
    color: ${({ theme }) => theme.secondary};
  }
`;

export {
  TodoListCategoryOption,
  TodoListCategoryLabel,
  TodoListCategorySelect,
  NoTodoLists,
};
