import styled from "styled-components";

const TodoListAppWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, rgba(91,134,229,1) 0%, rgba(54,209,220,1) 100%);
`;


const TodoAppHeader = styled.h1`
    text-align: center;
    margin: 0%;
    padding: 20px;
    text-align: center;
    font-size: 3.5rem;
    color: #fff;
`;


const TodoListAppCenter = styled.div`
    margin: 0 auto;
    display: block;
    padding: 20px;
`;


export {
    TodoAppHeader,
    TodoListAppCenter,
    TodoListAppWrapper
}