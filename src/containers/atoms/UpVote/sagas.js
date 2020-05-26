/* eslint-disable require-yield */
import { takeLatest } from 'redux-saga/effects';

import { VOTE, VOTE_KEY } from './constants';
import { LocalStorageUtil } from '../../../utils/localStorage';

export function* saveUpVoteSaga(action) {
  const {
    data: { objectId, voted },
  } = action;
  const storage = new LocalStorageUtil();

  if (voted) {
    storage.saveItemInArray(VOTE_KEY, objectId);
  } else {
    storage.removeItemFromArray(VOTE_KEY, objectId);
  }
}

export default function* upVoteSaga() {
  yield takeLatest(VOTE, saveUpVoteSaga);
}
