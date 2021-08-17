import styled from 'styled-components';

const SearchBarWrapper = styled.form`
  background: ${({ theme }) => theme.surface};
  border-radius: 27px;
  display: flex;
  gap: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 10px;
  margin-bottom: 15px;
  align-items: baseline;
  @media (min-width: 768px) {
    justify-content: center;
    padding: 20px;
    width: 60%;
    margin: 0 auto 15px;
    min-height: 45px;
  }
  input {
    align-self: center;
  }
  .mainLoginInput::-webkit-input-placeholder {
    font-family: FontAwesome;
    overflow: visible;
    vertical-align: top;
    padding-left: 5px;
    padding-top: 2px;
  }

  .mainLoginInput::-moz-placeholder {
    font-family: FontAwesome;
    overflow: visible;
    vertical-align: top;
    padding-left: 5px;
    padding-top: 2px;
  }

  .mainLoginInput:-ms-input-placeholder {
    font-family: FontAwesome;
    overflow: visible;
    vertical-align: top;
    padding-left: 5px;
    padding-top: 2px;
  }
`;

export { SearchBarWrapper };
