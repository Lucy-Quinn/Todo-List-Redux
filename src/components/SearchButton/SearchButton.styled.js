import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  .search {
    color: ${({ isSearchActive, theme, isLightTheme }) =>
      (!isSearchActive && isLightTheme && theme.secondary) ||
      (!isSearchActive && !isLightTheme && theme.secondary)};
  }
`;

export { Button };
