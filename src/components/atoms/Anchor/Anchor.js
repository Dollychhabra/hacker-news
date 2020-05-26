import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  type: PropTypes.oneOf(['full-width', 'full-width-icon', '']),
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  role: PropTypes.string,
};

export const createUrlSearchParams = (query) => {
  const queryValue = query || {};
  const queryParams = [];
  const keys = Object.keys(queryValue);
  for (let i = 0, l = keys.length; i < l; i += 1) {
    queryParams.push(`${keys[i]}=${queryValue[keys[i]]}`);
  }
  return queryParams.join('&');
};

const Anchor = ({
  children,
  to,
  type,
  className,
  onClick,
  role,
  ...others
}) => {
  return (
    <a
      role={role}
      href={to}
      className={classnames('cta', type, className)}
      onClick={onClick}
      data-hal-action-name={typeof children === 'string' && `text: ${children}`}
      {...others}
    >
      {children}
    </a>
  );
};

Anchor.propTypes = propTypes;
Anchor.defaultProps = {
  className: '',
  children: null,
  type: '',
  onClick: null,
  role: 'link',
};

export default Anchor;
