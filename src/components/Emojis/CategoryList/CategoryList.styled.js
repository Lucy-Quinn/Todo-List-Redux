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
`;

export { CategoryListWrapper };
