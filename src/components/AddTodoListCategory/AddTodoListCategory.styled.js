import styled from 'styled-components';

const TodoListCategoryOption = styled.option``;

const TodoListCategoryLabel = styled.label`
  width: 100%;
`;

const TodoListCategorySelect = styled.select`
  background-color: #ffffff;
  &:focus-visible {
    outline: none;
  }
`;

export {
  TodoListCategoryOption,
  TodoListCategoryLabel,
  TodoListCategorySelect,
};
