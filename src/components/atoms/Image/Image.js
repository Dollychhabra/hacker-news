import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const Image = ({ className, src, srcset, sizes, alt, ...other }) => {
  function addErrorClass(e) {
    e.target.style.display = 'none';
  }

  return (
    <React.Fragment>
      <img
        className={className}
        src={src}
        srcSet={srcset || null}
        alt={alt}
        onError={addErrorClass}
        {...other}
      />
    </React.Fragment>
  );
};

Image.defaultProps = {
  srcset: '',
  className: '',
};

Image.propTypes = propTypes;

export default Image;
