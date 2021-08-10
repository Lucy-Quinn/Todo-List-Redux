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
  }
`;

const NoTodos = styled.div`
  padding: 15px 3px;
  h3 {
    font-size: 1.5rem;
  }
`;

export { TodoListWrapper, NoTodos };
