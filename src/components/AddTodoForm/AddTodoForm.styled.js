import styled from 'styled-components';

const AddTodoFormWrapper = styled.form`
  background: ${({ theme }) => theme.surface};
  border-radius: 3px;
  @media (min-width: 1024px) {
    width: 63%;
  }
  @media (min-width: 1440px) {
    width: 64%;
  }
`;

export { AddTodoFormWrapper };
