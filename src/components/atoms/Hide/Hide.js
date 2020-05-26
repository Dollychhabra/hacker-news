import React from 'react';
import PropTypes from 'prop-types';

import './Hide.scss';
import Anchor from '../Anchor';

const Hide = ({ hideData, objectId }) => {
  return (
    <Anchor
      className="hide-btn"
      handleClick={e => {
        e.preventDefault();
        hideData(objectId);
      }}
    >
      hide
    </Anchor>
  );
};

Hide.propTypes = {
  hideData: PropTypes.func.isRequired,
  objectId: PropTypes.string.isRequired,
};

export default Hide;
