import styled from 'styled-components';

const SingleTodoListPageWrapper = styled.div`
  padding: 20px 15px 30px;
  display: flex;
  flex-direction: column;
`;

const TodoListEdit = styled.div`
  font-size: 1.6rem;
  color: #5c88e5;
  color: #fff;
  border-radius: 10px;
  flex-basis: auto;
  box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
  padding: 5px;
  box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
  background: ${({ theme }) => theme.button};
`;

const SingleTodoListHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin: 0 0 20px;
`;

export { SingleTodoListPageWrapper, TodoListEdit, SingleTodoListHeader };
