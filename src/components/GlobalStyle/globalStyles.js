import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    box-sizing: border-box;
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
  ::placeholder{
    color: gray;
  }
  .cta-button{
    background: ${({ theme }) => theme.button};
    color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    width: 80%;
    display: block;
    margin: 0 auto 20px auto;
    padding: 10px;
    @media(min-width: 768px){
        width: 30%;
        padding: 10px 0;
    }
  }
`;

export default GlobalStyle;