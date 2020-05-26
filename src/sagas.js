import { all } from 'redux-saga/effects';

import homePageSaga from './containers/organisms/HomePage/sagas';
import voteSaga from './containers/atoms/UpVote/sagas';

export default function* rootSaga() {
  yield all([homePageSaga(), voteSaga()]);
}
