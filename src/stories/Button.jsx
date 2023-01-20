import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ Default, backgroundColor, size, label, type, icontype, ...props }) => {
  const mode = Default ? 'storybook-button--Default' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button--${type}`, `storybook-button--${icontype}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {

  Default: PropTypes.bool,

  backgroundColor: PropTypes.string,

  size: PropTypes.oneOf(['small', 'medium', 'large', 'larger', 'max-large']),

  label: PropTypes.string.isRequired,

  type: PropTypes.oneOf(['default', 'ghost-default', 'ghost-secondary', 'ghost-pressed', 'ghost-focused', 'ghost-disabled']),

  icontype: PropTypes.oneOf(['default', 'icon-only']),
};

Button.defaultProps = {
  backgroundColor: null,
  Default: false,
  size: 'medium',
};
