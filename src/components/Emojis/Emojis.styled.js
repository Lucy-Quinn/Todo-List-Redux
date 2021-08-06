import styled from 'styled-components';

const EmojiWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmojiList = styled.div`
  height: fit-content;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 10px;
  margin-bottom: ${({ isActive }) => (isActive ? '10px' : '0')};
  p {
    width: 50px;
    height: 50px;
    text-align: center;
  }
`;

const EmojiButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 6px ${({ theme }) => theme.button};
  font-size: 0.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  width: 20%;
  margin-bottom: ${({ isActive }) => (isActive ? '0' : '10px')};
  align-self: flex-end;
  padding: 10px;
`;

export { EmojiWrapper, EmojiList, EmojiButton };
