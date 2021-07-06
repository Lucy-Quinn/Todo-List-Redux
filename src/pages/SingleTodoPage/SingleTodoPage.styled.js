import styled from "styled-components";

const SingleTodoPageWrapper = styled.div`
    padding: 20px 15px 30px;
`;

const SingleTodoHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 10px;
    width: 50%;
    margin: 0 auto;
    padding: 10px 20px 20px;
`;

const TodoEdit = styled.div`
    font-size: 1.6rem;
    color: #5C88E5;
    color: #fff;
    border-radius: 10px;
    flex-basis: auto;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    padding: 5px;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    background: ${({ theme }) => theme.button};
`

export {
    SingleTodoPageWrapper,
    SingleTodoHeader,
    TodoEdit
}