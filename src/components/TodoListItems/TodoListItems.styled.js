import styled from 'styled-components';

const TodoListItemsWrapper = styled.div`
  background: ${({ theme }) => theme.surface};
  /* padding: 0; */
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.surface};
  border-radius: 10px;
  padding: 20px;
`;

// display: flex;
// justify-content: center;
// flex-direction: column;

export { TodoListItemsWrapper };
