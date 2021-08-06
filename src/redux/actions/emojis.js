import { GET_EMOJIS_REQUESTED } from '../types';

export function getEmojis() {
  return {
    type: GET_EMOJIS_REQUESTED,
  };
}
