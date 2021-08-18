import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Nav, TodoAppHeader, ToggleThemeWrapper } from './Navbar.styled';
import ToggleThemeButton from '../ToggleThemeButton';
import Hamburger from './Hamburger';
import { useWindowSize } from '../../hooks';

const Navbar = ({ theme }) => {
  let location = useLocation();
  const { width } = useWindowSize();

  return (
    <Nav theme={theme}>
      {width >= 768 && (
        <ToggleThemeWrapper>
          <ToggleThemeButton />
        </ToggleThemeWrapper>
      )}
      {location.pathname === '/' ? (
        <div className="navbar-header">
          <TodoAppHeader>I've Got To Do This!</TodoAppHeader>
        </div>
      ) : (
        <Link to="/" className="navbar-header">
          <TodoAppHeader>I've Got To Do This!</TodoAppHeader>
        </Link>
      )}
      {width < 768 && (
        <ToggleThemeWrapper>
          <ToggleThemeButton />
        </ToggleThemeWrapper>
      )}
      <Hamburger theme={theme} />
    </Nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Navbar;
