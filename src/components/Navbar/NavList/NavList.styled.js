import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const NavListWrapper = styled.div`
  margin-right: 24px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    width: 50%;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  position: fixed;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding-top: 2rem;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    background: none;
    height: fit-content;
    transform: translateX(0);
    position: inherit;
    padding: 0;
    gap: 10px;
    width: fit-content;
  }
`;

const NavLink = styled(Link)`
  padding: 18px 10px;
  width: 50%;
  @media (min-width: 1024px) {
    width: fit-content;
    padding: 0;
  }
`;

export { NavListWrapper, NavMenu, NavLink };
