import {
  FETCH_HOME_PAGE_DATA,
  FETCH_HOME_PAGE_DATA_SUCCESS,
  FETCH_HOME_PAGE_DATA_ERROR,
} from '../constants';

import {
  fetchHomePageData,
  fetchHomePageDataSuccess,
  fetchHomePageDataError,
} from '../actions';

import mockHomePageData from './homepage.mock.json';

describe('HomePage Actions', () => {
  it('should return `fetch homepage data` type action', () => {
    const params = {
      page: 1,
    };
    const expectedResult = {
      type: FETCH_HOME_PAGE_DATA,
      params,
    };

    expect(fetchHomePageData(params)).toStrictEqual(expectedResult);
  });

  it('should return `fetch homepage data success` type action', () => {
    const data = mockHomePageData;

    const expectedResult = {
      type: FETCH_HOME_PAGE_DATA_SUCCESS,
      data,
    };

    expect(fetchHomePageDataSuccess(data)).toStrictEqual(expectedResult);
  });

  it('should return `fetch homepage data error` type action', () => {
    const error = 'Internal Server Error';

    const expectedResult = {
      type: FETCH_HOME_PAGE_DATA_ERROR,
      error,
    };

    expect(fetchHomePageDataError(error)).toStrictEqual(expectedResult);
  });
});
