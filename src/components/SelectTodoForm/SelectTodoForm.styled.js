import styled from 'styled-components';

const SelectTodoFormWrapper = styled.form`
  background: ${({ theme }) => theme.surface};
  align-items: center;
  label {
    width: 100%;
  }
  select {
    width: 100%;
    background: #fff;
  }
  .form-input {
    @media (min-width: 1024px) {
      font-size: 1.4rem;
    }
  }
`;

export { SelectTodoFormWrapper };
