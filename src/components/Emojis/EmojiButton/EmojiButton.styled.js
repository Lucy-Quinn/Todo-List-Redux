import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding: 8px 15px;
  display: inline-block;
  margin-bottom: ${({ isActive }) => (isActive ? '15px' : '0')};
  span {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

export { Button, ButtonWrapper };
