import React, { PropTypes } from 'react';
import styles from './Logo.css';

const propTypes = {
  isTiny: PropTypes.bool.isRequired,
};

const Logo = ({ isTiny }) => (
  <h1 className={isTiny ? styles.headerLogo : styles.bigLogo}>
    dispos.io
  </h1>
);

Logo.propTypes = propTypes;

export default Logo;
