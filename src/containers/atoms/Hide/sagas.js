/* eslint-disable require-yield */
import { takeLatest } from 'redux-saga/effects';

import { HIDE_DATA, HIDE_DATA_KEY } from './constants';
import { LocalStorageUtil } from '../../../utils/localStorage';

export function* saveHideDataSaga(action) {
  const { data: objectId } = action;

  const storage = new LocalStorageUtil();

  storage.saveItemInArray(HIDE_DATA_KEY, objectId);
}

export default function* hideDataSaga() {
  yield takeLatest(HIDE_DATA, saveHideDataSaga);
}
