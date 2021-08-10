import styled from 'styled-components';

const SearchBarWrapper = styled.form`
  background: ${({ theme }) => theme.surface};
  input {
    align-self: center;
  }
`;

export { SearchBarWrapper };
