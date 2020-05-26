import { all } from 'redux-saga/effects';

import homePageSaga from './containers/organisms/HomePage/sagas';
import voteSaga from './containers/atoms/UpVote/sagas';
import hideDataSaga from './containers/atoms/Hide/sagas';

export default function* rootSaga() {
  yield all([homePageSaga(), hideDataSaga(), voteSaga()]);
}
