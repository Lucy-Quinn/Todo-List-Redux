import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledHamburger } from './Hamburger.styled';
import NavList from '../NavList';

const Hamburger = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledHamburger isOpen={isOpen} onClick={handleToggle} theme={theme}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      <NavList isOpen={isOpen} closeNavbar={closeNavbar} theme={theme} />
    </>
  );
};

Hamburger.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Hamburger;
