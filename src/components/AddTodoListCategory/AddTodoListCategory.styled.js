import styled from 'styled-components';

const TodoListCategoryOption = styled.option`

`;

const TodoListCategoryLabel = styled.label`
    width: 100%;
`;

const DefaultOption = styled.select`
        color: ${({ firstOption }) => firstOption ? 'black' : 'grey'}
`

export {
    TodoListCategoryOption,
    TodoListCategoryLabel,
    DefaultOption
}