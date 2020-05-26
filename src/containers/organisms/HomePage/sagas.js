import { all, call, put, takeLatest } from 'redux-saga/effects';
import history from '../../../utils/history';

import { fetchHomePageDataSuccess, fetchHomePageDataError } from './actions';

import { FETCH_HOME_PAGE_DATA } from './constants';

import { HOME_PAGE_TAG } from '../../../commons/constants';
import apis from '../../../commons/constants/api.services';

import ServiceUtil from '../../../commons/utils/ServiceUtil';
import { buildUrl } from '../../../commons/utils/url';
import { HIDE_DATA, HIDE_DATA_KEY } from './constants';
import { LocalStorageUtil } from '../../../utils/localStorage';

export function* saveHideDataSaga(action) {
  const { data: objectId } = action;

  const storage = new LocalStorageUtil();

  storage.saveItemInArray(HIDE_DATA_KEY, objectId);
}

const updateQueryParams = params => {
  if (history && Object.keys(params).indexOf('page') > -1) {
    const queryParamsUrl = buildUrl({
      pathName: '/',
      query: {
        ...params,
      },
    });

    history.push(queryParamsUrl);
  }
};

export function* loadHomePageSaga(action) {
  try {
    const { params = {} } = action;

    const url = buildUrl({
      pathName: apis.search,
      query: {
        tags: HOME_PAGE_TAG,
        ...params,
      },
    });

    const homePageData = yield call(ServiceUtil.fetch, url);

    yield put(fetchHomePageDataSuccess(homePageData));

    updateQueryParams(params);
  } catch (err) {
    yield put(fetchHomePageDataError(err));
  }
}

export function* homePageSaga() {
  yield all([
    takeLatest(FETCH_HOME_PAGE_DATA, loadHomePageSaga),
    takeLatest(HIDE_DATA, saveHideDataSaga),
  ]);
}
