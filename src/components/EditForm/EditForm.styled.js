import styled from 'styled-components';

const EditFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 1.4rem;
  color: black;
  font-family: 'Indie Flower', cursive;
  flex-direction: column;
  padding: 0px 0px 20px;
  display: -webkit-inline-box;
  align-items: baseline;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 10px 0px;
    flex-direction: column;
  }
  input {
    width: inherit;
    max-width: 210px;
    &:focus-visible {
      outline: none;
    }
  }
  button {
    width: inherit;
    margin: 0;
  }
`;

export { EditFormWrapper };
