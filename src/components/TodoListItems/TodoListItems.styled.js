import styled from 'styled-components';

const TodoListItemsWrapper = styled.div`
  background: ${({ theme }) => theme.surface};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.surface};
  border-radius: 10px;
  padding: 20px;
  @media (min-width: 768px) {
    width: 60%;
    display: block;
    margin: 0 auto;
  }
`;

export { TodoListItemsWrapper };
