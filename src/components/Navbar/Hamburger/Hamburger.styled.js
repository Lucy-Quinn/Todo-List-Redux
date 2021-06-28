import styled from "styled-components";

const StyledHamburger = styled.div`
    display: flex;
    top: 20px;
    position: absolute;
    height: 1.5rem;
    width: 0.5rem;
    right: 35px;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1;
    @media (min-width: 768px) {
        height: 2rem;
        width: 2rem;
    }
    @media (min-width: 1024px) {
        display: none;
    }
    div{
        width: 1.5rem;
        height: 0.2rem;
        background: ${({ isOpen }) => isOpen ? '#fff' : '#fff'};
        /* '#598AE4' */
        border-radius: 10px;
        transform-origin: 0.3px;
        transition: all 0.2s linear;
        &:nth-child(1){
            transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'}
        }
        &:nth-child(2){
            transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'}
        }
        &:nth-child(3){
            transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'}
        }
        @media (min-width: 768px) {
            width: 2rem;
            height: 0.25rem;
        }
    }

`;

export {
    StyledHamburger
}
