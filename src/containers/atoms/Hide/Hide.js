import { connect } from 'react-redux';

import { hideData } from './actions';

import Hide from '../../../components/atoms/Hide';

export const mapDispatchToProps = dispatch => {
  return {
    hideData: itemId => {
      dispatch(hideData(itemId));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Hide);
