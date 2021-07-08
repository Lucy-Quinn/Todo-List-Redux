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
    font-size: 2rem;
    color: #fff;
    margin: 0;
    text-align: center;
    @media(min-width: 768px){
        font-size: 2.2rem;
    }
  }

  h3{
    font-size: 1.5rem;
    color: #fff;
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
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    background-color: rgba(166, 216, 219, 0.411);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
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
    padding: 8px;
    font-size: 1.2rem;
    font-family: 'Indie Flower', cursive;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    width: 100%;
  }

  .cta-button-add{
    background: ${({ theme }) => theme.button};
    color: #fff;
    border: none;
    border-radius: 50%;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
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
        box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    }
`;

export default GlobalStyle;