import React, { useState } from 'react';

import { StyledHamburger } from './Hamburger.styled';
import NavList from '../NavList';

const Hamburger = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <StyledHamburger isOpen={isOpen} onClick={handleToggle}>
                <div />
                <div />
                <div />
            </StyledHamburger>
            <NavList isOpen={isOpen} />
        </>
    )
}

export default Hamburger
