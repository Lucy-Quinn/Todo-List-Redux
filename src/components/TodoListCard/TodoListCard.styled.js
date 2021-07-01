import styled from 'styled-components';

const TodoListWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin: 10px auto 0 auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    background-color: rgba(166, 216, 219, 0.411);
    border-radius: 10px;
    h1{
        width: 100%;
        align-items: flex;
        text-align: right;
    }
    p{
        width: 100%;
    }
    @media(min-width: 768px){
        width: 70%;
    }
`

export {
    TodoListWrapper
}