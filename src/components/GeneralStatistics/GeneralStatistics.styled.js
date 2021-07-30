import styled, { keyframes } from 'styled-components';

const GeneralStaticsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 50px;
  }
`;

const StaticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 1.2rem;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100px;
  height: 250px;
  border: 1px solid black;
  display: flex;
  border-radius: 10px;
  align-items: flex-end;
`;

const progressAnimation = keyframes`
 0% {  height: 0; opacity: 0}
 3% {  height: 0; opacity: 0.1}
 50% {  opacity: 0.8}
 100% {  height: ${({ findPercentage }) => findPercentage()}%; opacity: 1; }
`;

const ProgressAmount = styled.div`
  width: 100px;
  height: ${({ findPercentage }) => findPercentage()}%;
  background: #fff;
  border-radius: 10px;
  animation-name: ${progressAnimation};
  animation-duration: 4s;
`;

export {
  GeneralStaticsWrapper,
  StaticsWrapper,
  ProgressBarContainer,
  ProgressAmount,
};
