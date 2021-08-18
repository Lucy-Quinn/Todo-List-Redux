import styled from 'styled-components';

const TodoListItemsWrapper = styled.div`
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 65%;
    display: block;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    width: 66%;
  }
  @media (min-width: 1440px) {
    width: 65%;
  }
`;

export { TodoListItemsWrapper };
