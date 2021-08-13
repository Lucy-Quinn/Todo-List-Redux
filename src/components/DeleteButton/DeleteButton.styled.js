import styled from 'styled-components';

const DeleteItem = styled.button`
  color: ${({ theme }) => theme.onError};
  order: 4;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.error};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  width: 80%;
  display: block;
  margin: 0 auto 0 auto;
  padding: 10px;
  margin-top: 30px;
  @media (min-width: 768px) {
    width: 30%;
    padding: 15px;
  }
`;

export { DeleteItem };
