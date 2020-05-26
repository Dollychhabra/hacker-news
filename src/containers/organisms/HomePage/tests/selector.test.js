import {
  selectHomePageData,
  selectTotalPageData,
  selectCurrentPageData,
} from '../selectors';

const initialState = {
  isFetching: false,
  data: {
    hits: [],
    nbPages: 0,
    page: 0,
  },
  error: null,
};

const mockedState = {
  homePageData: initialState,
};

describe('HomePageData selectors', () => {
  it('should select `complete data` data', () => {
    expect(selectHomePageData(mockedState)).toStrictEqual(initialState.data);
  });

  it('should select `total number of pages` data', () => {
    const { nbPages } = initialState.data;
    expect(selectTotalPageData(mockedState)).toStrictEqual(nbPages);
  });

  it('should select `current page` data', () => {
    const { page } = initialState.data;
    expect(selectCurrentPageData(mockedState)).toStrictEqual(page);
  });
});
