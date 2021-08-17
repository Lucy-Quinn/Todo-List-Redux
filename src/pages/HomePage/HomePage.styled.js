import styled from 'styled-components';

const TodoListWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TodoListCenter = styled.div`
  margin: 0 auto;
  display: block;
  padding: 20px 15px 40px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export { TodoListCenter, TodoListWrapper, Buttons };
