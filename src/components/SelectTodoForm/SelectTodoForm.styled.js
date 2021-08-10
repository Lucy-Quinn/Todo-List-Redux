import styled from 'styled-components';

const SelectTodoFormWrapper = styled.form`
  background: ${({ theme }) => theme.surface};
  align-items: center;
  label {
    width: 100%;
  }
  select {
    /* font-size: 1.2rem; */
    width: 100%;
  }
`;

const Select = styled.select``;

export { SelectTodoFormWrapper, Select };
