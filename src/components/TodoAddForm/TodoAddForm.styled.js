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
    FormInput
}