import styled from "styled-components";

const TodoListAppWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
`;


const TodoAppHeader = styled.h1`
    text-align: center;
    margin: 0%;
    padding: 20px;
    text-align: center;
    font-size: 2.7rem;
    color: #fff;
    @media(min-width: 785px){
        font-size: 3.5rem;
    }
`;


const TodoListAppCenter = styled.div`
    margin: 0 auto;
    display: block;
    padding: 20px 20px 40px;
`;


export {
    TodoAppHeader,
    TodoListAppCenter,
    TodoListAppWrapper
}