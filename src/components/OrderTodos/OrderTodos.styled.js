import styled from 'styled-components';

const OrderTodosWrapper = styled.div`
  padding-bottom: 20px;
  text-align: right;
  width: fit-content;
  select {
    background: ${({ theme }) => theme.onPrimary};
  }
`;

export { OrderTodosWrapper };
