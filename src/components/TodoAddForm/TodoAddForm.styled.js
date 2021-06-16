import styled from "styled-components";

const TodoFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    background-color: rgba(166, 216, 219, 0.411);
    padding: 20px;
    border-radius: 10px;
    @media(min-width: 768px){
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        width: 60%;
        margin: 0 auto;
        min-height: 45px;
    }
`;

const FormButton = styled.button`
    background: ${({ theme }) => theme.button};
    color: #fff;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    width: 50%;
    display: block;
    margin: 0 auto;
    padding: 9px 0;
    @media(min-width: 768px){
        width: 30%;
        padding: 10px 0;
    }
    @media(min-width: 768px){
        width: 20%;
    }
`;

const FormInput = styled.input`
    border-radius: 10px;
    border: none;
    width: 90%;
    display: block;
    margin: 0 auto;
    padding: 8px;
    font-size: 1.2rem;
    font-family: 'Indie Flower', cursive;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
`;


export {
    TodoFormWrapper,
    FormInput,
    FormButton
}