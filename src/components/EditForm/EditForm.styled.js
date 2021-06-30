import styled from "styled-components";

const EditFormWrapper = styled.form`
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 1.4rem;
    color: black;
    font-family: 'Indie Flower', cursive;
    /* flex-grow: 1; */
    flex-direction: column;
    padding: 22px 0px 0px;
    display: -webkit-inline-box;
    @media(min-width: 768px){
        flex-direction: row;
        padding: 10px 0px;
        flex-direction: column;
    }
`;

export {
    EditFormWrapper
}