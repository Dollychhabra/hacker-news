import { createSelector } from 'reselect';

const getHomePageDataState = state => {
  return state.homePageData;
};

export const selectHomePageData = createSelector(
  getHomePageDataState,
  homePageDataState => homePageDataState.data,
);

export const selectTotalPageData = createSelector(
  getHomePageDataState,
  homePageDataState => homePageDataState.data.nbPages,
);

export const selectCurrentPageData = createSelector(
  getHomePageDataState,
  homePageDataState => homePageDataState.data.page,
);
