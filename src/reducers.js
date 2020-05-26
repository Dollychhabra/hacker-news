import { combineReducers } from 'redux';

import homePageDataReducer from './containers/organisms/HomePage/reducer';

export default () =>
  combineReducers({
    homePageData: homePageDataReducer,
  });
