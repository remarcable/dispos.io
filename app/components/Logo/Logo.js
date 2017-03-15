import React, { PropTypes } from 'react';
import styles from './Logo.css';

const propTypes = {
  isTiny: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  style: {},
};

const Logo = ({ isTiny, style }) => (
  <h1 className={isTiny ? styles.headerLogo : styles.bigLogo} style={style}>
    dispos.io
  </h1>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
