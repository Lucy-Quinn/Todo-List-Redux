import styled from 'styled-components';

const TodoListCategoryOption = styled.option``;

const AddTodoListCategoryWrapper = styled.form`
  background: ${({ theme }) => theme.surface};
`;

const TodoListCategoryLabel = styled.label`
  width: 100%;
  .form-input {
    @media (min-width: 1024px) {
      font-size: 1.4rem;
    }
  }
`;

const TodoListCategorySelect = styled.select`
  background-color: #ffffff;
`;

const NoTodoLists = styled.p`
  padding: 20px 2px;
  text-align: center;
  color: ${({ theme }) => theme.onBackground};
  a {
    color: ${({ theme }) => theme.secondary};
  }
`;

export {
  AddTodoListCategoryWrapper,
  TodoListCategoryOption,
  TodoListCategoryLabel,
  TodoListCategorySelect,
  NoTodoLists,
};
