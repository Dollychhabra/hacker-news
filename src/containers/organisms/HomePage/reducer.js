import {
  FETCH_HOME_PAGE_DATA,
  FETCH_HOME_PAGE_DATA_SUCCESS,
  FETCH_HOME_PAGE_DATA_ERROR,
  HIDE_DATA
} from './constants';

import { VOTE } from '../../atoms/UpVote/constants';

import homePageInitialState from '../../../commons/initialState/homePage.state';

import { removeHomePageData } from './utils';

const initialState = homePageInitialState;

const homePageDataReducer = (state = initialState, { type, data, error }) => {
  switch (type) {
    case FETCH_HOME_PAGE_DATA:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_HOME_PAGE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data,
      };

    case FETCH_HOME_PAGE_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        error,
      };

    case HIDE_DATA:
      return removeHomePageData(state, data);

    case VOTE:
      return {
        ...state,
        data: { ...state.data },
      };

    default:
      return state;
  }
};

export default homePageDataReducer;
