import styled from 'styled-components';

const ToggleButtonIcon = styled.button`
    background: ${({ theme }) => theme.button};
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    color: #fff;
`

const ToggleButtonWrapper = styled.div`
    text-align: right;
`

export {
    ToggleButtonIcon,
    ToggleButtonWrapper
};