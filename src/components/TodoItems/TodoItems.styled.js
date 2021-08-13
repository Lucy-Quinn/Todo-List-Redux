import styled from 'styled-components';

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin: 10px auto 0 auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.surface};
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 60%;
    padding: 20px 20px 61px;
  }
`;

const NoTodos = styled.div`
  padding: 15px 3px;
`;

export { TodoListWrapper, NoTodos };
