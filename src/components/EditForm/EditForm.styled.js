import styled from "styled-components";

const EditFormWrapper = styled.form`
    display: flex;
    justify-content: center;
    gap: 8px;
    font-size: 1.4rem;
    color: black;
    font-family: 'Indie Flower', cursive;
    flex-grow: 1;
    padding: 22px 0px;
`;

const EditFormInput = styled.input`
    border-radius: 10px;
    border: none;
    padding: 8px;
    font-size: 1.2rem;
    font-family: 'Indie Flower', cursive;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    flex-grow: 1;
`;

const EditFormButton = styled.button`
    border: none;
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

export {
    EditFormWrapper,
    EditFormInput,
    EditFormButton
}