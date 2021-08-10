import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TodoColor = styled.div`
  box-shadow: 10px 0 2px -2px ${({ todoListColors }) => (todoListColors ? todoListColors : 'transparent')};
  &:first-child {
    border-top: 2px dotted ${({ theme }) => theme.border};
  }
`;

const TodoWrapper = styled.div`
  padding: 20px 0 65px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  border-bottom: 2px dotted ${({ theme }) => theme.border};
  @media (min-width: 768px) {
    padding: 15px 10px 10px;
    align-items: ${({ isEdit, currentTodo }) => {
      if (isEdit && currentTodo.text) {
        return 'baseline';
      } else if (isEdit && !currentTodo.text) {
        return 'center';
      }
    }};
  }
`;

const TodoTopSection = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  justify-content: ${({ currentTodo }) =>
    currentTodo.dueDate.length < 1 && 'flex-end'};
  min-height: 25px;
  p {
    color: ${({ theme }) => theme.onSurface};
  }
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
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 5px;
  width: fit-content;
  min-width: 26px;
  border-radius: 50%;
  background: ${({ currentTodo, theme }) =>
    currentTodo.isComplete ? theme.secondary : '#fff'};
  width: 30px;
  height: 30px;
  display: flex;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    order: 0;
    margin-bottom: ${({ isEdit }) => (isEdit ? '50px' : '0px')};
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  align-items: flex-start;
`;

const FavoriteIcon = styled.i`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.secondary};
  margin-right: 10px;
`;

const NoteIcon = styled.div`
  font-size: 1.9rem;
  color: ${({ theme }) => theme.secondary};
  margin-right: 10px;
`;

const TextWrapper = styled.div`
  height: fit-content;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: none;
  background: #fff;
  width: 100%;
  border-radius: 10px;
  order: 1;
  @media (min-width: 768px) {
    margin: 20px 0;
  }
  p {
    color: black;
    padding: 10px;
    font-family: 'Indie Flower', cursive;
    text-decoration: ${({ currentTodo }) =>
      currentTodo.isComplete ? 'line-through' : ''};
    word-break: break-all;
    white-space: normal;
    font-size: ${({ currentTodo }) =>
      currentTodo.isFavorite ? '2.4rem' : '1.6rem'};
  }
  .hover-text {
    visibility: hidden;
    width: fit-content;
    color: white;
    background: black;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;
    position: absolute;
    z-index: 1;
  }

  &:hover .hover-text {
    visibility: visible;
  }
`;
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
  TodoColor,
  TodoTopSection,
  TodoBottomSection,
  TodoWrapper,
  FavoriteIcon,
  TextLink,
  TextWrapper,
  TodoListColor,
  NoteIcon,
  IconsWrapper,
};
