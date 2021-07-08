import styled from 'styled-components';

const OrderTodosWrapper = styled.div`
    border-bottom: 1px dotted ${({ theme }) => theme.border};
    padding-bottom: 20px;
    text-align: right;
`;

export {
    OrderTodosWrapper
}