import styled from "styled-components";

const AddNoteWrapper = styled.form`
        flex-direction: column;
`

const TextArea = styled.textarea`
    border: none;
    margin: 0 auto 20px auto;
    display: block;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    &::placeholder{
        color: ${({ currentTodo }) => currentTodo !== undefined && currentTodo.note && '#222223'}
    }
`;

export {
    TextArea,
    AddNoteWrapper
}