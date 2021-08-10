import styled from 'styled-components';

const SingleTodoPageWrapper = styled.div`
  padding: 20px 15px 30px;
`;

const SingleTodoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
  width: 50%;
  margin: 0 auto;
  padding: 0 20px 20px;
`;

const TodoEdit = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.onSecondary};
  border-radius: 10px;
  flex-basis: auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 5px;
  background: ${({ theme }) => theme.secondary};
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
  h2 {
    color: ${({ theme }) => theme.onBackground};
  }
`;

export { SingleTodoPageWrapper, SingleTodoHeader, TodoEdit, TextWrapper };
