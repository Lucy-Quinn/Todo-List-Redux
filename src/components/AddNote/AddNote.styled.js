import styled from "styled-components";

const TextArea = styled.textarea`
    border: none;
    margin: 0 auto 20px auto;
    display: block;
    width: 80%;
    border-radius: 10px;
    padding: 10px;
    &::placeholder{
        color: ${({ currentTodo }) => currentTodo !== undefined && currentTodo.note && '#222223'}
    }
`;

export {
    TextArea,
}