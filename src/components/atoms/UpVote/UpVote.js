import React from 'react';
import PropTypes from 'prop-types';

import Anchor from '../Anchor';
import './UpVote.scss';

const UpVote = ({ vote, objectId, voted }) => {
  return voted ? (
    ' '
  ) : (
    <Anchor
      onClick={e => {
        e.preventDefault();
        vote({
          objectId,
          voted: true,
        });
      }}
      className="up-vote-link"
    >
      <div className="up-vote-arrow" />
    </Anchor>
  );
};

UpVote.propTypes = {
  objectId: PropTypes.string.isRequired,
  vote: PropTypes.func.isRequired,
  voted: PropTypes.bool,
};

UpVote.defaultProps = {
  voted: false,
};

export default UpVote;
