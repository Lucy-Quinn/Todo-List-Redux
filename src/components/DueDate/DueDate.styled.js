import styled from 'styled-components';

const DueDateWrapper = styled.div`
  justify-content: space-around;
  align-items: baseline;
  background: ${({ theme }) => theme.surface};
  .react-datepicker-wrapper {
    width: 100%;
  }
  input {
    width: 92%;
  }
`;

export { DueDateWrapper };
