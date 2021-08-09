import styled from 'styled-components';

const CategoryListWrapper = styled.div`
  font-size: 1rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 4px;
  margin-bottom: ${({ isActive }) => (isActive ? '10px' : '0')};
  padding-top: ${({ isActive }) => (isActive ? '20px' : '0')};
  border-top: 1px dotted ${({ theme }) => theme.border};
  i {
    color: #3b32b3;
  }
`;

export { CategoryListWrapper };
