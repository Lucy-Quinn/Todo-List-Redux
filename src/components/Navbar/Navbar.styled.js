import styled from "styled-components";
import { Link } from 'react-router-dom';


const Nav = styled.nav`
    border-bottom: 1px solid #fff;
    padding: 0 20px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 15px;
    .navbar-header{
    @media(max-width: 768px){
        width: fit-content;
        margin: 0 0 0 25px;
    }
    @media(min-width: 768px){
        width: 100%;
    }
    }
    @media(min-width: 768px){
        justify-content: center;
        align-items: center;
    }
`;

const TodoAppHeader = styled.h1`
    text-align: center;
    color: #fff;
    margin: 0;
    padding: 0;
    width: 80%;
    margin-right: 20px;
    @media(min-width: 768px){
        width: 100%;
        margin: 0;
    }
`;

const HeaderLinkWrapper = styled(Link)`
    @media(min-width: 768px){
        width: 100%
    }
`

const ToggleThemeWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    @media(min-width: 768px){
        align-self: inherit;
        display: flex;
        justify-content: flex-start;
        width: 50%;
    }
`

export {
    Nav,
    TodoAppHeader,
    HeaderLinkWrapper,
    ToggleThemeWrapper
}

