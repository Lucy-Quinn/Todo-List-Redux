import { all } from 'redux-saga/effects';

import emojiSaga from './emojiSaga';

export default function* rootSaga() {
  yield all([emojiSaga()]);
}
