import styled from 'styled-components';

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 65%;
  }
  @media (min-width: 1024px) {
    width: 66%;
  }
`;

const NoTodos = styled.div`
  padding: 15px 3px;
`;

export { TodoListWrapper, NoTodos };
