import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inheritedStyles: PropTypes.string,
};

const Para = ({ children, className, inheritedStyles, ...others }) => (
  <p className={className} {...others}>
    {children}
  </p>
);

Para.defaultProps = {
  inheritedStyles: '',
  className: '',
};

Para.propTypes = propTypes;

export default Para;
