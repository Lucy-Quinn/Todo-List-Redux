import styled from 'styled-components';

const Button = styled.div`
  width: 129px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  font-size: 1rem;
  background: ${({ isSearchActive, theme, isLightTheme }) =>
    isSearchActive && isLightTheme
      ? theme.secondary
      : theme.onPrimary && isSearchActive && !isLightTheme
      ? theme.secondary
      : theme.onPrimary};
  color: ${({ isSearchActive, theme, isLightTheme }) =>
    isSearchActive && isLightTheme
      ? theme.onPrimary
      : 'black' && isSearchActive && !isLightTheme
      ? theme.onPrimary
      : 'black'};

  .search-icon {
    color: ${({ isSearchActive, theme, isLightTheme }) =>
      (!isSearchActive && isLightTheme && theme.secondary) ||
      (!isSearchActive && !isLightTheme && theme.secondary)};
    padding-right: 5px;
  }
`;

export { Button };
