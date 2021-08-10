import styled from 'styled-components';

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  margin: 10px auto 10px auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme, toggleTheme }) =>
    toggleTheme ? theme.background : theme.primary};
  border-radius: 10px;
  border: 2px solid ${({ color }) => (color ? color : null)};
  p {
    width: 100%;
    color: ${({ theme, toggleTheme }) =>
      toggleTheme ? theme.onBackground : theme.onPrimary};

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
  width: ${({ pathname }) => (pathname === '/todoLists' ? '100%' : '48%')};
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
