import React from 'react';
import PropTypes from 'prop-types';

import { buildUrl } from '../../../commons/utils/url';

const Anchor = ({
  children,
  to,
  className,
  handleClick,
  target,
  ...others
}) => (
  <a
    {...others}
    href={buildUrl(to)}
    className={className}
    onClick={handleClick}
    target={target}
  >
    {children}
  </a>
);

Anchor.defaultProps = {
  className: '',
  target: '_self',
  handleClick: () => {},
  to: '',
};

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  to: PropTypes.any,
  target: PropTypes.oneOf(['', '_self', '_blank', '_parent', '_top']),
};

export default Anchor;
