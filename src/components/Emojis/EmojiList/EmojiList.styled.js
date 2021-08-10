import styled from 'styled-components';

const EmojiListWrapper = styled.div`
  height: fit-content;
  width: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #fff;
  height: ${({ isActive }) => (isActive ? '300px' : '0')};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: scroll;
  span {
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 1rem;
  }
`;

export { EmojiListWrapper };
