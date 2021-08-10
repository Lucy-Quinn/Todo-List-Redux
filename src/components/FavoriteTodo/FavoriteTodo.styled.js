import styled from 'styled-components';

const FavoriteIconFilled = styled.i`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondary};
`;

const FavoriteIconNotFilled = styled.i`
  color: ${({ theme }) => theme.onBackground};
  font-size: 2rem;
`;

export { FavoriteIconFilled, FavoriteIconNotFilled };
