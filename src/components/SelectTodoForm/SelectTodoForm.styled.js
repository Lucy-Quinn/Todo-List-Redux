import styled from 'styled-components';

const SelectTodoFormWrapper = styled.form`
  align-items: center;
  label {
    width: 100%;
  }
  select {
    &:focus-visible {
      outline: none;
    }
    font-size: 1.2rem;
    width: 100%;
  }
`;

const Select = styled.select``;

export { SelectTodoFormWrapper, Select };
