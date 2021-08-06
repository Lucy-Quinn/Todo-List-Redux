import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 2px 2px 6px rgb(122 119 119 / 58%);
  background-color: rgba(166, 216, 219, 0.411);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    width: 60%;
    margin: 0 auto 15px;
    min-height: 45px;
  }
`;

const AddNoteWrapper = styled.form`
  flex-direction: column;
`;

const TextArea = styled.textarea`
  border: none;
  margin: 0 auto 20px auto;
  display: block;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  &::placeholder {
    color: ${({ currentTodo }) =>
      currentTodo !== undefined && currentTodo.note && '#222223'};
  }
`;

export { FormWrapper, TextArea, AddNoteWrapper };
