import styled from 'styled-components';

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px;
  margin: 10px auto 10px auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme, isLightTheme }) =>
    isLightTheme ? theme.surface : theme.primary};
  border-radius: 10px;
  border: 2px solid ${({ color }) => (color ? color : null)};
  p {
    width: 100%;
    color: ${({ theme, isLightTheme }) =>
      isLightTheme ? theme.onBackground : theme.onPrimary};
    font-size: 1.2rem;
    padding: 10px 5px;
    &:first-child {
      @media (min-width: 1024px) {
        font-size: 2rem;
      }
    }
    &:last-child {
      align-self: flex-end;
      @media (min-width: 768px) {
        align-self: ${({ pathname }) =>
          pathname === '/statistics' && 'flex-start'};
        text-align: ${({ pathname }) => pathname === '/todoLists' && 'right'};
      }
      @media (min-width: 1024px) {
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 768px) {
    width: 60%;
    gap: 20px;
    padding: 20px;
  }
  @media (min-width: 1024px) {
    width: 62%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  width: ${({ pathname }) => (pathname === '/todoLists' ? '100%' : '48%')};
  flex-direction: ${({ pathname }) =>
    pathname === '/todoLists' ? 'row' : 'column'};
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

export { TodoListWrapper, TextWrapper };
