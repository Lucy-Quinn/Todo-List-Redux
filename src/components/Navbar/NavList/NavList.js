import React from 'react';

import { NavMenu, NavLink, NavListWrapper } from './NavList.styled';

const NavList = ({ isOpen }) => {
    return (
        <NavListWrapper>
            <NavMenu isOpen={isOpen} >
                <NavLink to='/todoLists'>
                    Todo Lists
                </NavLink>
                <NavLink to='/completed'>
                    Completed
                </NavLink>
            </NavMenu>
        </NavListWrapper>
    )
}

export default NavList
