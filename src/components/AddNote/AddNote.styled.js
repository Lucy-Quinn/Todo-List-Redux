import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.surface};
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    min-height: 45px;
    padding: 20px 20px 0;
  }
`;

const AddNoteWrapper = styled.form`
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  border: none;
  margin: 0 auto 10px auto;
  display: block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Indie Flower', cursive;
  font-size: 1.2rem;
  border-bottom: 2px dotted ${({ theme }) => theme.border};
  max-height: 250px;
  height: fit-content;
  &::placeholder {
    color: ${({ currentTodo }) =>
      currentTodo !== undefined && currentTodo.note && '#222223'};
    font-family: 'Indie Flower', cursive;
  }
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export { FormWrapper, TextArea, AddNoteWrapper };
