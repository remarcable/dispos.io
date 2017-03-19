import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './CloseButton.css';

const propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: undefined,
};

const CloseButton = ({ handleOnClick, className }) => (
  <button className={classNames(styles.close, className)} onClick={handleOnClick}>
    X
  </button>
);

CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;

export default CloseButton;
