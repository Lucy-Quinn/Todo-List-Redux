import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding: 8px 15px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  span {
    font-size: 1rem;
    @media (min-width: 1024px) {
      font-size: 1.6rem;
    }
  }
`;

export { Button };
