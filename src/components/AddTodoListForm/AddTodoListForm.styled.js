import styled from 'styled-components';

const AddTodoListFormWrapper = styled.form`
    flex-direction: column;
    input{
        width: inherit; 
    }
`;

const TopSection = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
`;

const ColorSelect = styled.select`
    &:focus-visible {
        outline: none;
    }
`;

export {
    AddTodoListFormWrapper,
    ColorSelect,
    TopSection
}