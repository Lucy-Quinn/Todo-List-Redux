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
  a{
    text-decoration: none;
    font-size: 1rem;
    color: #fff;
    @media(min-width: 768px){
      font-size: 1.3rem;
    }
  }
  h1{
    font-size: 2rem;
    color: #fff;
    @media(min-width: 768px){
        font-size: 2.5rem;
    }
    @media(min-width: 1024px){
        font-size: 3.6rem;
    }
  }
  h2{
    font-size: 1.7rem;
    color: #fff;
    @media(min-width: 768px){
        font-size: 2.2rem;
    }
  }
`;

export default GlobalStyle;