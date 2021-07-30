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
  color: #5c88e5;
  color: #fff;
  border-radius: 10px;
  flex-basis: auto;
  box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
  padding: 5px;
  box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
  background: ${({ theme }) => theme.button};
`;

const TextWrapper = styled.div`
  .hover-text {
    visibility: hidden;
    width: fit-content;
    color: white;
    background: black;
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

export { SingleTodoPageWrapper, SingleTodoHeader, TodoEdit, TextWrapper };
