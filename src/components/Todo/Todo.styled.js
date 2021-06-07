import styled from "styled-components";

const TodoItems = styled.div`
    display: block;
    padding: 10px;
    margin: 0 auto;
    text-decoration: ${({ item }) => item.complete ? 'line-through' : ''};
`;

export default TodoItems;