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
  button {
    width: inherit;
    margin: 0;
    @media (min-width: 768px) {
      width: 100px;
    }
  }
  input {
    width: inherit;
    max-width: 210px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 10px 0px;
    align-items: center;
    input {
      font-size: 2.8rem;
      max-width: 400px;
    }
  }
`;

export { EditFormWrapper };
