import React from 'react';

import { NavMenu, NavLink, NavListWrapper } from './NavList.styled';

const NavList = ({ isOpen, closeNavbar }) => {

    const handleCloseNavbarToggle = () => {
        closeNavbar();
    };

    return (
        <NavListWrapper>
            <NavMenu isOpen={isOpen} >
                <NavLink to='/todoLists' onClick={handleCloseNavbarToggle}>
                    Todo Lists
                </NavLink>
                <NavLink to='/statistics' onClick={handleCloseNavbarToggle}>
                    Statistics
                </NavLink>
            </NavMenu>
        </NavListWrapper>
    );
};


export default NavList;
