/* List*/

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  ListType: PropTypes.oneOf(['ul', 'ol']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  nested: PropTypes.bool,
  inline: PropTypes.bool,
  nodefaultview: PropTypes.bool,
  borderseparator: PropTypes.bool,
  nomargin: PropTypes.bool,
  inheritedStyles: PropTypes.string,
};

const List = ({ className, ListType, children, ...others }) => (
  <ListType className={className} {...others}>
    {children}
  </ListType>
);

List.propTypes = propTypes;

List.defaultProps = {
  inheritedStyles: '',
  ListType: 'ul',
  className: '',
  borderseparator: false,
  nodefaultview: false,
  inline: false,
  nested: false,
  nomargin: false,
};

export default List;
