import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-bottom: 10px;
  .cta-button {
    color: ${({ theme }) => theme.onSecondary};
    padding: 12px;
    width: 75%;
    @media (min-width: 768px) {
      width: 50%;
      margin: 0;
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
  margin-bottom: 10px;
`;

export { ButtonWrapper, NoteAndEmojiButton };
