import styled from "styled-components";

const TodoDelete = styled.div`
    font-size: 1.6rem;
    border-radius: 10px;
    color: #fff;
    order: 4;
    margin: 0 auto;
    padding: 10px;
    border: 2px solid #f49381;
    width: fit-content;
    @media(min-width: 768px){
        margin-bottom: ${({ isEdit }) => isEdit ? '50px' : '0px'};
    }
`
export {
    TodoDelete,
}