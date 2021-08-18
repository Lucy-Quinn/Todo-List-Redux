import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.primary};
  padding: 0 20px;
  display: flex;
  align-items: center;
  padding: 15px;
  .navbar-header {
    margin-right: 10px;
    @media (min-width: 768px) {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const TodoAppHeader = styled.h1`
  text-align: center;
  color: #fff;
  margin: 0;
  padding: 0;
  @media (min-width: 375px) {
    margin-left: 46px;
  }
  @media (min-width: 425px) {
    width: 297px;
    margin-left: 20px;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
    min-width: 400px;
  }
  @media (min-width: 1024px) {
    font-size: 3.3rem;
  }
`;

const ToggleThemeWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  @media (min-width: 768px) {
    align-self: inherit;
    display: flex;
    justify-content: flex-start;
    width: 60%;
  }
  @media (min-width: 1024px) {
    width: 47%;
  }
`;

export { Nav, TodoAppHeader, ToggleThemeWrapper };
