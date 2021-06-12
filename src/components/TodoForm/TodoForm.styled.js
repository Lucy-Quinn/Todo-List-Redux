import styled from "styled-components";

const TodoFormWrapper = styled.form`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 20px;
    width: 60%;
    margin: 0 auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    background-color: rgba(166, 216, 219, 0.411);
`;


const FormButon = styled.button`
    background: rgb(92, 136, 229);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 6px 20px;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
`;

const FormInput = styled.input`
    border-radius: 10px;
    border: none;
    padding: 8px;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
`;


export {
    TodoFormWrapper,
    FormInput,
    FormButon
}