import React from 'react';
import { useLocation } from 'react-router-dom';

import { Nav, TodoAppHeader, ToggleThemeWrapper, HeaderLinkWrapper } from './Navbar.styled';
import ToggleThemeButton from '../ToggleThemeButton';
import Hamburger from './Hamburger';

const Navbar = () => {

    let location = useLocation();

    return (
        <Nav>
            <ToggleThemeWrapper>
                <ToggleThemeButton />
            </ToggleThemeWrapper>
            {location.pathname === '/' ?
                <div className='navbar-header'>
                    <TodoAppHeader>I've Got To Do This!</TodoAppHeader>
                </div>
                :
                <HeaderLinkWrapper to='/' className='navbar-header'>
                    <TodoAppHeader>I've Got To Do This!</TodoAppHeader>
                </HeaderLinkWrapper>
            }
            <Hamburger />
        </Nav>
    );
};

export default Navbar;