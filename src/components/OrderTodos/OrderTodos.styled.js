import styled from 'styled-components';

const OrderTodosWrapper = styled.div`
  padding-bottom: 20px;
  text-align: right;
  width: fit-content;
  .select {
    position: relative;
  }
  .select:after {
    font-family: FontAwesome;
    content: '\f078';
    font-size: 1rem;
    position: absolute;
    font-weight: 500;
    top: 12px;
    right: 20px;
    color: ${({ theme }) => theme.secondary};
    pointer-events: none;
  }
  select {
    background: ${({ theme }) => theme.onPrimary};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
`;

export { OrderTodosWrapper };
