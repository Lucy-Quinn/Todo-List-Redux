import styled from 'styled-components';

const FavoriteIconFilled = styled.i`
  font-size: 2rem;
  color: ${({ theme }) => theme.button};
`;

const FavoriteIconNotFilled = styled.i`
  font-size: 2rem;
`;

export { FavoriteIconFilled, FavoriteIconNotFilled };
