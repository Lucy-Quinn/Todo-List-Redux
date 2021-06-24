import styled from "styled-components";

const TodoDelete = styled.div`
    font-size: 1.6rem;
    border-radius: 10px;
    color: #fff;
    box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
    order: 4;
    background: ${({ theme }) => theme.button};
    padding: 5px;
    width: fit-content;
    @media(min-width: 768px){
        margin-bottom: ${({ isEdit }) => isEdit ? '50px' : '0px'};
    }
`
export {
    TodoDelete,
}