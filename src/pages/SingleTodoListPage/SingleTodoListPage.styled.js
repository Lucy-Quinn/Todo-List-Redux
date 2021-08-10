import styled from 'styled-components';

const SingleTodoListPageWrapper = styled.div`
  padding: 20px 15px 30px;
  display: flex;
  flex-direction: column;
`;

const TodoListEdit = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.onSecondary};
  border-radius: 10px;
  flex-basis: auto;
  padding: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.secondary};
`;

const SingleTodoListHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  margin: 0 0 20px;
`;

const TextWrapper = styled.div`
  position: relative;
  .hover-text {
    visibility: hidden;
    width: fit-content;
    color: ${({ theme }) => theme.onBackground};
    background: ${({ theme }) => theme.background};
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;
    position: absolute;
    font-size: 1.4rem;
    z-index: 1;
  }

  &:hover .hover-text {
    visibility: visible;
  }
`;

export {
  SingleTodoListPageWrapper,
  TodoListEdit,
  SingleTodoListHeader,
  TextWrapper,
};
