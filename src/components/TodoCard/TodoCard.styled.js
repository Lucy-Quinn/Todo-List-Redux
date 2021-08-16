import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TodoColor = styled.div`
  box-shadow: 10px 0 2px -2px ${({ todoListColors }) => (todoListColors ? todoListColors : 'transparent')};
  border-bottom: 2px dotted ${({ theme }) => theme.border};
  &:first-child {
    border-top: 2px dotted ${({ theme }) => theme.border};
  }
  @media (min-width: 768px) {
    padding: 10px;
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
  @media (min-width: 768px) {
    min-height: 100px;
    padding: 0 0 30px;
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
  justify-content: ${({ currentTodo }) =>
    currentTodo.dueDate.length < 1 && 'flex-end'};
  min-height: 25px;
  p {
    color: ${({ theme }) => theme.onSurface};
  }
  @media (min-width: 768px) {
    margin-bottom: 0;
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
    width: 35px;
    height: 35px;
  }
  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  align-items: flex-start;
  margin: 0 10px 10px;
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
    margin: 0;
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
    @media (min-width: 1024px) {
      font-size: ${({ currentTodo }) =>
        currentTodo.isFavorite ? '3rem' : '2rem'};
    }
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
  TextLink,
  TextWrapper,
  TodoListColor,
  IconsWrapper,
};
