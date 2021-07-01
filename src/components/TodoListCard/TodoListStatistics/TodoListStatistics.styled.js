import styled, { keyframes } from 'styled-components';

const TodoListStatisticsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
`;

const IndividualProgressBarContainer = styled.div`
    width: 250px;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
`;

const progressAnimation = keyframes`
 0% {  width: 0; opacity: 0.5}
 50% {  opacity: 0.8}
 100% {  width: ${({ findPercentage }) => findPercentage()}%; opacity: 1; }

`;

const IndividualProgressAmount = styled.div`
    height: 50px;
    border-radius: 10px;
    width: ${({ findPercentage }) => findPercentage()}%;
    background: #fff;
    animation-name: ${progressAnimation};
    animation-duration: 5s;
`;

export {
    TodoListStatisticsWrapper,
    IndividualProgressBarContainer,
    IndividualProgressAmount
}