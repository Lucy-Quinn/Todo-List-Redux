import styled from "styled-components";
import { Link } from 'react-router-dom';


const TodoColorContainer = styled.div`
    box-shadow: 10px 0 3px -2px ${({ todoListColors }) => todoListColors ? todoListColors : 'transparent'};
`;


const TodoWrapper = styled.div`
    padding: 20px 0 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: 1px dotted ${({ theme }) => theme.border};
    &:nth-child(1){
     border-top: 1px dotted ${({ theme }) => theme.border};
    };
    @media(min-width: 768px){
        padding: 15px 10px 10px;
        align-items: ${({ isEdit, currentTodo }) => {
        if (isEdit && currentTodo.text) {
            return 'baseline';
        } else if (isEdit && !currentTodo.text) {
            return 'center';
        }
    }
    }
    }
`

const TodoTopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const TodoBottomSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const TodoComplete = styled.div`
    font-size: 1.6rem;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 5px;
    width: fit-content;
    min-width: 26px;
    border-radius: 50%;
    background: ${({ currentTodo, theme }) => currentTodo.isComplete ? theme.button : '#fff'};
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

const FavoriteIcon = styled.i`
    font-size: 1.6rem;
    color: ${({ currentTodo }) => currentTodo ? "#fff" : "none"};
    margin-right: 10px;
`;

const ItemText = styled.p`
    color: black;
    font-family: 'Indie Flower', cursive;
    font-size: 1.2rem;
    text-decoration: ${({ currentTodo }) => currentTodo.isComplete ? 'line-through' : ''};
    word-break: break-all;
    white-space: normal;
    margin: 8px;
    font-size: ${({ currentTodo }) => currentTodo.isFavorite ? '1.8rem' : '1.2rem'};
`
const TextWrapper = styled.div`
    height: fit-content;
    margin: 20px 0;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    border: none;
    background: #fff;
    width: 100%;
    border-radius: 10px;
    order: 1;
    min-height: 44px;
    @media(min-width: 768px){
        margin: 20px 0;
    }
`
const TextLink = styled(Link)`
    width: 75%;
    margin-right: 10px;
`;


const TodoListColor = styled.div`
    background: red;
    height: 100px;
    width: 100px;
`;

export {
    TodoComplete,
    TodoColorContainer,
    TodoTopSection,
    TodoBottomSection,
    TodoWrapper,
    FavoriteIcon,
    TextLink,
    ItemText,
    TextWrapper,
    TodoListColor
}