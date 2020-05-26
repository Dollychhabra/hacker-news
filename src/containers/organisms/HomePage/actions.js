import {
  FETCH_HOME_PAGE_DATA,
  FETCH_HOME_PAGE_DATA_SUCCESS,
  FETCH_HOME_PAGE_DATA_ERROR,
  HIDE_DATA,
} from './constants';

export const fetchHomePageData = params => ({
  type: FETCH_HOME_PAGE_DATA,
  params,
});

export const fetchHomePageDataSuccess = data => ({
  type: FETCH_HOME_PAGE_DATA_SUCCESS,
  data,
});

export const fetchHomePageDataError = error => ({
  type: FETCH_HOME_PAGE_DATA_ERROR,
  error,
});

export const hideData = data => ({
  type: HIDE_DATA,
  data,
});
