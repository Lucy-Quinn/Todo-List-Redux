import styled from 'styled-components';

const DeleteItem = styled.button`
  color: ${({ theme }) => theme.buttonFont};
  order: 4;
  background: transparent;
  border: 2px solid #f49381;
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
`;

export { DeleteItem };
