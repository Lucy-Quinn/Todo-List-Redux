import styled from 'styled-components';

const AddTodoListFormWrapper = styled.form`
  flex-direction: column;
  background: ${({ theme }) => theme.surface};
`;

const TopSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  border-bottom: 2px dotted ${({ theme }) => theme.border};
  padding-bottom: 15px;
  margin-bottom: 8px;
`;

const ColorSelect = styled.select`
  background: ${({ theme }) => theme.onPrimary};
`;

export { AddTodoListFormWrapper, ColorSelect, TopSection };
