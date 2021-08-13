import styled from 'styled-components';

const CategoryListWrapper = styled.div`
  font-size: 1rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 15px;
  padding-top: ${({ isActive }) => (isActive ? '20px' : '0')};
  border-top: 1px dotted
    ${({ theme, toggleTheme }) => (toggleTheme ? theme.border : theme.primary)};
  i {
    color: ${({ theme }) => theme.secondary};
  }
`;

export { CategoryListWrapper };
