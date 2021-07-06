import styled from 'styled-components';

const OrderTodosWrapper = styled.div`
    border-bottom: 1px dotted ${({ theme }) => theme.border};
    padding-bottom: 20px;
    text-align: right;
    select{
        border-radius: 10px;
        padding: 5px;
        border: none;
        box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    }
`;

export {
    OrderTodosWrapper
}