import styled from 'styled-components';

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  margin: 10px auto 10px auto;
  box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
  background: #fff;
  border-radius: 10px;
  border: 2px solid ${({ color }) => (color ? color : null)};
  h3 {
    width: 100%;
    align-items: flex;
    text-align: left;
    @media (min-width: 768px) {
      text-align: left;
      width: 100%;
    }
  }
  p {
    width: 100%;
    color: #181a18;
    font-size: 1.2rem;
    padding: 10px 5px;
  }
  @media (min-width: 768px) {
    width: 70%;
    gap: 20px;
    padding: 20px;
  }
`;

const TextWrapper = styled.div`
  display: ${({ pathname }) => (pathname === '/todoLists' ? 'flex' : 'block')};
  width: ${({ pathname }) => (pathname === '/todoLists' ? '100%' : '50%')};
  .hover-text {
    visibility: hidden;
    width: fit-content;
    color: white;
    background: black;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;
    position: absolute;
    z-index: 1;
  }

  &:hover .hover-text {
    visibility: visible;
  }
`;

const ItemsNumber = styled.p`
  @media (min-width: 768px) {
    text-align: right;
  }
`;

export { TodoListWrapper, ItemsNumber, TextWrapper };
