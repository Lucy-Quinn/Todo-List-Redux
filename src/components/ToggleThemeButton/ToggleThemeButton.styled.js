import styled from 'styled-components';

const ToggleButtonWrapper = styled.div`
    text-align: right;
`

const ToggleButtonIcon = styled.button`
    background: ${({ theme }) => theme.button};
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 8px;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 1rem;
    @media(min-width: 768px){
        font-size: 1.2rem;
        padding: 10px;
    }
`

export {
    ToggleButtonIcon,
    ToggleButtonWrapper,
};