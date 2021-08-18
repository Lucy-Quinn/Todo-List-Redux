import styled from 'styled-components';

const ToggleButtonWrapper = styled.div`
  text-align: right;
`;

const ToggleButtonIcon = styled.button`
  background: ${({ theme }) => theme.secondary};
  padding: 8px;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 10px;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export { ToggleButtonIcon, ToggleButtonWrapper };
