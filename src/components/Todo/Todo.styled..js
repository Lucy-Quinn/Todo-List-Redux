import styled from "styled-components";

const TodoWrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    border-bottom: 1px dotted rgb(122 119 119 / 58%);
    &:nth-child(1){
        border-top: 1px dotted rgb(122 119 119 / 58%);
    }
`;

const TodoComplete = styled.div`
    font-size: 1.6rem;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 5px;
`

const TodoEdit = styled.div`
    font-size: 1.6rem;
    color: #5C88E5;
    color: #fff;
    flex-basis: auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 2px;
`

const TodoDelete = styled.div`
    font-size: 1.6rem;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 2px;
`

const ItemText = styled.input`
    color: black;
    font-family: 'Indie Flower', cursive;
    flex-grow: 1;
    background: #fff;
    border-radius: 10px;
    padding: 8px;
    font-size: 1.2rem;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    border: none;
    margin: 22px 0;
    text-decoration: ${({ item }) => item.complete ? 'line-through' : ''};
`

export {
    TodoComplete,
    TodoEdit,
    TodoDelete,
    TodoWrapper,
    ItemText
}