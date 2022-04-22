import React from 'react';
import PropTypes from 'prop-types';

function Picture({ src, alt }) {
    return <img src={src} alt={alt} />;
}

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Picture;