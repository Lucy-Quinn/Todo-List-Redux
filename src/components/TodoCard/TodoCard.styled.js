import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TodoWrapper = styled.div`
  box-shadow: 10px 0 2px -2px ${({ todoListColors }) => (todoListColors ? todoListColors : 'transparent')};
  display: flex;
  margin-bottom: 10px;
  padding: 15px 15px 25px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.surface};
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 3px;
  @media (min-width: 768px) {
    min-height: 100px;
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
  gap: 10px;
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
  margin: 0 0 10px;
`;

const TextWrapper = styled.div`
  height: fit-content;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: none;
  background: #fff;
  border-radius: 10px;
  width: 75%;
  @media (min-width: 768px) {
    margin: 0;
  }
  p {
    color: ${({ currentTodo }) =>
      currentTodo.isComplete ? '#868686' : 'black'};
    padding: 10px;
    font-family: 'Indie Flower', cursive;
    text-decoration: ${({ currentTodo }) =>
      currentTodo.isComplete ? 'line-through' : ''};
    word-break: break-all;
    white-space: normal;
    font-size: ${({ currentTodo }) =>
      currentTodo.isFavorite ? '2.4rem' : '1.4rem'};
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

const Arrow = styled.div`
  margin-right: 10px;
  font-size: 1.4rem;
  color: ${({ isLightTheme }) => (isLightTheme ? '#868686' : '#fff')};
`;

const TextLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const TodoListColor = styled.div`
  background: red;
  height: 100px;
  width: 100px;
`;

export {
  TodoComplete,
  TodoTopSection,
  TodoBottomSection,
  TodoWrapper,
  TextLink,
  TextWrapper,
  TodoListColor,
  IconsWrapper,
  Arrow,
};
