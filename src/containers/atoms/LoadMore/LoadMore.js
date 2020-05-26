import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectTotalPageData,
  selectCurrentPageData,
} from '../../organisms/HomePage/selectors';
import { fetchHomePageData } from '../../organisms/HomePage/actions';

import LoadMore from '../../../components/atoms/LoadMore';

export const mapStateToProps = createStructuredSelector({
  currentPage: selectCurrentPageData,
  totalPages: selectTotalPageData,
});

export const mapDispatchToProps = dispatch => {
  return {
    fetchHomePageData: params => {
      dispatch(fetchHomePageData(params));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadMore);
