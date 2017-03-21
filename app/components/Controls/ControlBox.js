import React, { PropTypes } from 'react';
import styles from './Controls.css';

const propTypes = {
  letter: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Controls = ({ letter, caption, onClick }) => (
  <div className={styles.controlBoxWrapper}>
    <span className={styles.caption}>{caption}</span>
    <button className={styles.letter} onClick={onClick}>
      {letter}
    </button>
  </div>
);

Controls.propTypes = propTypes;

export default Controls;
