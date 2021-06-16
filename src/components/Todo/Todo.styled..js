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
    border-bottom: 1px dotted ${({ theme }) => theme.border};
    &:nth-child(1){
     border-top: 1px dotted ${({ theme }) => theme.border};
    };
    @media(min-width: 768px){
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 15px 10px 10px;
        align-items: ${({ isEdit, todos }) => {
        if (isEdit && todos.text) {
            return 'baseline';
        } else if (isEdit && !todos.text) {
            return 'center';
        }
    }}
    }
`

const TodoComplete = styled.div`
    font-size: 1.6rem;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 5px;
    width: fit-content;
    order: 2;
    min-width: 26px;
    border-radius: 50%;
    background: ${({ item, theme }) => item.complete ? theme.button : '#fff'};
    width: 30px;
    height: 30px;
    display: flex;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        order: 0;
        margin-bottom: ${({ isEdit }) => isEdit ? '50px' : '0px'};
    }
`

const TodoEdit = styled.div`
    font-size: 1.6rem;
    color: #5C88E5;
    color: #fff;
    border-radius: 10px;
    flex-basis: auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 5px;
    order: 3;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    background: ${({ theme }) => theme.button};
`

const TodoDelete = styled.div`
    font-size: 1.6rem;
    border-radius: 10px;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    order: 4;
    background: ${({ theme }) => theme.button};
    padding: 5px;
    @media(min-width: 768px){
        margin-bottom: ${({ isEdit }) => isEdit ? '50px' : '0px'};
    }
`

const TextWrapper = styled.div`
    height: fit-content;
    margin: 20px 0;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 0 8px;
    flex-grow: 1;
    border: none;
    background: #fff;
    width: 100%;
    border-radius: 10px;
    margin: 20px 0 0;
    order: 1;
    min-height: 44px;
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
    margin: 8px;
`

export {
    TodoComplete,
    TodoEdit,
    TodoDelete,
    TodoWrapper,
    ItemText,
    TextWrapper,
}