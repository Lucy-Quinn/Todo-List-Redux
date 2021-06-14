import styled from "styled-components";

const TodoListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    margin: 10px auto 0 auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    background-color: rgba(166, 216, 219, 0.411);
    @media(min-width: 768px){
        width: 60%;
    }
`;

export default TodoListWrapper;