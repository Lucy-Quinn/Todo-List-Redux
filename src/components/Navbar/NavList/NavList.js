import React from 'react';
import PropTypes from 'prop-types';

import { NavMenu, NavLink, NavListWrapper } from './NavList.styled';

const NavList = ({ isOpen, closeNavbar, theme }) => {
  const handleCloseNavbarToggle = () => {
    closeNavbar();
  };

  return (
    <NavListWrapper>
      <NavMenu isOpen={isOpen} theme={theme}>
        <NavLink to="/todoLists" onClick={handleCloseNavbarToggle}>
          Todo Lists
        </NavLink>
        <NavLink to="/statistics" onClick={handleCloseNavbarToggle}>
          Statistics
        </NavLink>
      </NavMenu>
    </NavListWrapper>
  );
};

NavList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeNavbar: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default NavList;
