import styled, { keyframes } from 'styled-components';

const TodoListStatisticsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    p{
        text-align: center;
    }
`;

const IndividualProgressBarContainer = styled.div`
    width: 110px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    @media(min-width: 768px){
        width: 250px;
        height: 50px;
    }
`;

const progressAnimation = keyframes`
 0% {  width: 0; opacity: 0}
 3% {  width: 0; opacity: 0.1}
 50% {  opacity: 0.8}
 100% {  width: ${({ findPercentage }) => findPercentage()}%; opacity: 1; }
`;

const IndividualProgressAmount = styled.div`
    height: 30px;
    border-radius: 10px;
    width: ${({ findPercentage }) => findPercentage()}%;
    background: #fff;
    animation-name: ${progressAnimation};
    animation-duration: 5s;
    @media(min-width: 768px){
        height: 50px;
    }
`;

export {
    TodoListStatisticsWrapper,
    IndividualProgressBarContainer,
    IndividualProgressAmount
}