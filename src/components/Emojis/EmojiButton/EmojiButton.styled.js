import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.button};
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 6px ${({ theme }) => theme.button};
  font-size: 0.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  padding: 8px 15px;
  display: inline-block;
  margin-bottom: 10px;
  span {
    font-size: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

export { Button, ButtonWrapper };
