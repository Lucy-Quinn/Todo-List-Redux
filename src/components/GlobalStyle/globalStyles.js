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
    background: ${({ theme }) => theme.background};
  }

  a{
    text-decoration: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.onBackground};
    @media(min-width: 768px){
      font-size: 1.3rem;
    }
  }

  h1{
    font-size: 2rem;
    color: black;
    @media(min-width: 768px){
        font-size: 2.5rem;
    }
    @media(min-width: 1024px){
        font-size: 3.6rem;
    }
  }

  h2{
    font-size: 2.4rem;
    margin: 0;
    font-family: 'Indie Flower', cursive;
    color: ${({ theme }) => theme.onBackground};
    text-align: center;
    @media(min-width: 768px){
        font-size: 2.2rem;
    }
  }

  h3{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.onBackground};
    font-family: 'Indie Flower', cursive;
    margin: 0;
    text-align: center;
    @media(min-width: 768px){
        font-size: 2rem;
    }
  }

  p{
    font-size: 1rem;
    margin: 0;
    @media(min-width: 768px){
      font-size: 1.2rem;
    } 
  }

  ::placeholder{
    color: gray;
  }

  .cta-button{
    background: ${({ theme }) => theme.secondary};
    color: black;
    border: none;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    width: 80%;
    display: block;
    margin: 0 auto 0 auto;
    padding: 10px;
    @media(min-width: 768px){
        width: 30%;
        padding: 10px 0;
    }
  }

  .form-wrapper{
    display: flex;
    gap: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    align-items: baseline;
    @media(min-width: 768px){
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        width: 60%;
        margin: 0 auto 15px;
        min-height: 45px;
    }
  }

  .form-input{
    border-radius: 10px;
    border: none;
    display: block;
    padding:10px;
    font-size: 1.4rem;
    font-family: 'Indie Flower', cursive;
    width: 100%;
  }

  .cta-button-add{
    background: ${({ theme }) => theme.secondary};
    color: #fff;
    border: none;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.boxShadow};

    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    width: 50px;
    height: 45px;
    display: block;
  }
  .form-select{
    border-radius: 10px;
    padding: 5px;
    border: none;
    font-size: 1rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  *:focus{
    outline: none;
  }

  
`;

export default GlobalStyle;
