import React, { PropTypes } from 'react';

import styles from './FrontPage.css';

const propTypes = {
  children: PropTypes.string.isRequired,
  label: PropTypes.string,
};

const defaultProps = {
  label: undefined,
};

const SectionField = ({ children, label }) => (
  <div className={styles.fieldWrapper}>
    {
      label &&
      <span className={styles.fieldLabel} >
        {label}
      </span>
    }
    {children}
  </div>
  );

SectionField.propTypes = propTypes;
SectionField.defaultProps = defaultProps;

export default SectionField;
