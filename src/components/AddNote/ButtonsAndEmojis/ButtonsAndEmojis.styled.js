import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 20px;
  .cta-button {
    @media (min-width: 768px) {
      width: 50%;
    }
    @media (min-width: 1024px) {
      width: 30%;
    }
  }
`;

const NoteAndEmojiButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: ${({ isActive }) => (isActive ? '30px' : '20px')};
`;

export { ButtonWrapper, NoteAndEmojiButton };
