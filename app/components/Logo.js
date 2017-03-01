import React, { PropTypes } from 'react';
import styles from './Logo.css';

const propTypes = {
  isTiny: PropTypes.bool,
};

const Logo = ({ isTiny = false }) => (
  <h1 className={isTiny ? styles.logoTiny : styles.logo}>dispos.io</h1>
);

Logo.propTypes = propTypes;

export default Logo;
