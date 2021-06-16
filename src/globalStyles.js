// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }
  html{
    height: 100%;
  }
  #root{
    min-height: 100%;
    background: linear-gradient(${({ theme }) => theme.gradientOne}, ${({ theme }) => theme.gradientTwo});
  }
`;

export default GlobalStyle;