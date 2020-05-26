import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectHomePageData } from './selectors';
import { fetchHomePageData } from './actions';

import HomePage from '../../../components/organisms/HomePage/HomePage';

export const mapStateToProps = createStructuredSelector({
  homePageData: selectHomePageData,
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchHomePageData: () => {
      dispatch(fetchHomePageData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
