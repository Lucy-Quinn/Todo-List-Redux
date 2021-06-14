import styled from "styled-components";

const TodoWrapper = styled.div`
    padding: 10px 0 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: 1px dotted rgb(122 119 119 / 58%);
    &:nth-child(1){
        border-top: 1px dotted rgb(122 119 119 / 58%);
    }
    @media(min-width: 768px){
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 10px;
        align-items: ${({ isEdit }) => isEdit ? 'center' : 'baseline'};
    }
`;

const TodoComplete = styled.div`
    font-size: 1.6rem;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 5px;
    width: fit-content;
    order: 2;
    min-width: 26px;
    @media(min-width: 768px){
        order: 0;
        margin: 0 0 45px;
    }
`

const TodoEdit = styled.div`
    font-size: 1.6rem;
    color: #5C88E5;
    color: #fff;
    flex-basis: auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 2px;
    order: 3;

`

const TodoDelete = styled.div`
    font-size: 1.6rem;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 2px;
    order: 4;
    @media(min-width: 768px){
        margin: 0 0 45px;
    }
`

const TextWrapper = styled.div`
    height: fit-content;
    margin: 20px 0;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 8px;
    flex-grow: 1;
    border: none;
    background: #fff;
    width: 100%;
    border-radius: 10px;
    margin: 20px 0 0;
    order: 1;
    @media(min-width: 768px){
        margin: 20px 0;
    }
`

const ItemText = styled.p`
    color: black;
    font-family: 'Indie Flower', cursive;
    font-size: 1.2rem;
    text-decoration: ${({ item }) => item.complete ? 'line-through' : ''};
    word-break: break-all;
    white-space: normal;
    min-height: 45px;
    line-height: 45px;
`

export {
    TodoComplete,
    TodoEdit,
    TodoDelete,
    TodoWrapper,
    ItemText,
    TextWrapper,
}