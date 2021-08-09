import { call, put, takeEvery } from 'redux-saga/effects';
import getApi from './getApi';

function* fetchEmojis() {
  try {
    const { data } = yield call(getApi);
    yield put({ type: 'GET_EMOJIS_SUCCESS', emojis: data });
  } catch (error) {
    yield put({ type: 'GET_EMOJIS_FAILED', message: error.message });
  }
}

function* emojiSaga() {
  yield takeEvery('GET_EMOJIS_REQUESTED', fetchEmojis);
}

export default emojiSaga;
