import { connect } from 'react-redux';

import { vote } from './actions';

import UpVote from '../../../components/atoms/UpVote/UpVote';

export const mapDispatchToProps = dispatch => {
  return {
    vote: data => {
      dispatch(vote(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(UpVote);
