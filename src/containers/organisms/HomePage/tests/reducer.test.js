import homePageDataReducer from '../reducer';

import {
  fetchHomePageData,
  fetchHomePageDataSuccess,
  fetchHomePageDataError,
} from '../actions';

import mockHomePageData from './homepage.mock.json';

describe('HomePageData Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      isFetching: false,
      data: {
        hits: [],
        nbPages: 0,
        page: 0,
      },
      error: null,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homePageDataReducer(state, {})).toStrictEqual(expectedResult);
  });

  it('should handle `fetch homePageData` action correctly', () => {
    const params = { page: 1 };

    expect(
      homePageDataReducer(state, fetchHomePageData(params)),
    ).toStrictEqual({
      ...state,
      isFetching: true,
    });
  });

  it('should handle `fetch homePageData success` action correctly', () => {
    const data = mockHomePageData;

    expect(
      homePageDataReducer(state, fetchHomePageDataSuccess(data)),
    ).toStrictEqual({
      ...state,
      data,
    });
  });

  it('should handle `fetch homePageData error` action correctly', () => {
    const error = 'Internal Server Error';

    expect(homePageDataReducer(state, fetchHomePageDataError(error))).toStrictEqual(
      {
        ...state,
        error,
      },
    );
  });
});
