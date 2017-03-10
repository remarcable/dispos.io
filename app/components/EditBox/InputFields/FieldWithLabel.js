import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './FieldWithLabel.css';

const propTypes = {
  isFocused: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

const InputWithLabel = ({ isFocused, children, label }) => {
  const labelClassNames = classnames(styles.label, {
    [styles.activeLabel]: isFocused,
  });

  return (
    <div className={styles.wrapper}>
      <h4 className={labelClassNames} >
        {label}
      </h4>

      {children}
    </div>
  );
};

InputWithLabel.propTypes = propTypes;

export default InputWithLabel;
