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

const drawBorder = keyframes`
   from {
    max-width: 0%;
  }
  to {
    max-width: 100%;
  }

`;

const StaticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .underline {
    height: 2px;
    max-width: 0%;
    background-color: ${({ theme }) => theme.onBackground};
    animation: ${drawBorder} 2s ease forwards;
  }
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.onBackground};
  }
`;

const ProgressBarContainer = styled.div`
  width: 100px;
  height: 250px;
  border: 1px solid ${({ theme }) => theme.onBackground};
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
  background: ${({ theme }) => theme.secondary};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  animation-name: ${progressAnimation};
  animation-duration: 4s;
`;

const NoGeneralStatics = styled.div`
  font-size: 1.5rem;
  padding: 15px 18px;
  font-family: 'Indie Flower', cursive;
  color: ${({ theme }) => theme.onBackground};
  text-align: center;
  a {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

export {
  GeneralStaticsWrapper,
  StaticsWrapper,
  ProgressBarContainer,
  ProgressAmount,
  NoGeneralStatics,
};
