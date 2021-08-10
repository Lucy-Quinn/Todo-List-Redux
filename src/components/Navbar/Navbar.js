import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Nav,
  TodoAppHeader,
  ToggleThemeWrapper,
  HeaderLinkWrapper,
} from './Navbar.styled';
import ToggleThemeButton from '../ToggleThemeButton';
import Hamburger from './Hamburger';

const Navbar = ({ theme }) => {
  let location = useLocation();

  return (
    <Nav theme={theme}>
      <ToggleThemeWrapper>
        <ToggleThemeButton />
      </ToggleThemeWrapper>
      {location.pathname === '/' ? (
        <div className="navbar-header">
          <TodoAppHeader>I've Got To Do This!</TodoAppHeader>
        </div>
      ) : (
        <HeaderLinkWrapper to="/" className="navbar-header">
          <TodoAppHeader>I've Got To Do This!</TodoAppHeader>
        </HeaderLinkWrapper>
      )}
      <Hamburger theme={theme} />
    </Nav>
  );
};
Navbar.propTypes = {
  theme: PropTypes.object.isRequired,
};
export default Navbar;
