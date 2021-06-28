import styled from "styled-components";

const EditFormWrapper = styled.form`
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 1.4rem;
    color: black;
    font-family: 'Indie Flower', cursive;
    flex-grow: 1;
    flex-direction: column;
    padding: 22px 0px 0px;
    width: 100%;
    @media(min-width: 768px){
        flex-direction: row;
        padding: 10px 0px;
        flex-direction: column;
    }
`;

const EditFormInput = styled.textarea`
    border-radius: 10px;
    border: none;
    padding: 0 15px;
    line-height: 44px;
    font-size: 1.2rem;
    font-family: 'Indie Flower', cursive;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    flex-grow: 1;
    max-height: 44px;
    ::placeholder{
        line-height: 80px;
    }
`;

export {
    EditFormWrapper,
    EditFormInput
}