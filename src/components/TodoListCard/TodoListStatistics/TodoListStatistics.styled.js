import styled, { keyframes } from 'styled-components';

const TodoListStatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    text-align: center;
  }
  a {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.2rem;
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
  }
`;

const IndividualProgressBarContainer = styled.div`
  width: 110px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-self: flex-end;
  width: 100%;
  @media (min-width: 768px) {
    width: 250px;
    height: 50px;
  }
`;

const progressAnimation = keyframes`
    0% {  width: 0; opacity: 0}
    4% {  width: 0; opacity: 0.1}
    50% {  opacity: 0.8}
    100% {  width: ${({ findPercentage }) => findPercentage()}%; opacity: 1; }
`;

const IndividualProgressAmount = styled.div`
  height: 30px;
  border-radius: 10px;
  width: ${({ findPercentage }) => findPercentage()}%;
  background: ${({ theme }) => theme.secondary};
  animation-name: ${progressAnimation};
  animation-duration: 4s;
  @media (min-width: 768px) {
    height: 50px;
  }
`;

export {
  TodoListStatisticsWrapper,
  IndividualProgressBarContainer,
  IndividualProgressAmount,
};
