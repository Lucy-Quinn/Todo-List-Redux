import styled from 'styled-components';

const TodoListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px;
    margin: 10px auto 10px auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    /* background-color: rgba(166, 216, 219, 0.411); */
    background: #fff;
    border-radius: 10px;
    h3{
        width: 100%;
        align-items: flex;
        text-align: left;
        @media(min-width: 768px){
            text-align: left;
            width: 100%;
        }
    }
    p{
        width: 100%;
        color: #181A18;
        font-size: 1.2rem;
        padding: 10px 5px;
    }
    @media(min-width: 768px){
        width: 70%;
        gap: 20px;
        padding: 20px;
    }
`

const ItemsNumber = styled.p`
    @media(min-width: 768px){
        text-align: right;
    }
`;

export {
    TodoListWrapper,
    ItemsNumber
}