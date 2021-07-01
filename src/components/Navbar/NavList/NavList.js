import React from 'react';

import { NavMenu, NavLink, NavListWrapper } from './NavList.styled';

const NavList = ({ isOpen }) => {
    return (
        <NavListWrapper>
            <NavMenu isOpen={isOpen} >
                <NavLink to='/todoLists'>
                    Todo Lists
                </NavLink>
                <NavLink to='/statistics'>
                    Statistics
                </NavLink>
            </NavMenu>
        </NavListWrapper>
    )
}

export default NavList
