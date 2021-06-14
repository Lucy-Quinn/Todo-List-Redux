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

const TextWrapper = styled.div`
    height: fit-content;
    margin: 22px 0;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 8px;
    flex-grow: 1;
    border: none;
    background: #fff;
    width: 100%;
`

const ItemText = styled.p`
    color: black;
    font-family: 'Indie Flower', cursive;
    border-radius: 10px;
    font-size: 1.2rem;
    text-decoration: ${({ item }) => item.complete ? 'line-through' : ''};
    word-break: break-all;
    white-space: normal;
`

export {
    TodoComplete,
    TodoEdit,
    TodoDelete,
    TodoWrapper,
    ItemText,
    TextWrapper
}