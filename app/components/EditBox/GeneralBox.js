import React, { PropTypes } from 'react';
import EditBox from './EditBox';

import styles from './EditBox.css';

const propTypes = {
  fields: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const GeneralBox = ({ fields, onChange }) => (
  <div className={styles.generalBox}>
    <EditBox
      title={'General'}
      fields={fields}
      onChange={(field, value) => onChange(field, value)}
    />
  </div>
);

GeneralBox.propTypes = propTypes;

export default GeneralBox;
