import {
  GET_EMOJIS_REQUESTED,
  GET_EMOJIS_SUCCESS,
  GET_EMOJIS_FAILED,
} from '../types';

const INITIALSTATE = {
  emojis: [],
  isLoading: false,
  error: null,
};

export default function emojiReducer(state = INITIALSTATE, action) {
  switch (action.type) {
    case GET_EMOJIS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_EMOJIS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        emojis: action.emojis,
      };
    case GET_EMOJIS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
