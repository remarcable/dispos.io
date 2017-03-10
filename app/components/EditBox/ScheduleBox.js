import React, { PropTypes } from 'react';
import EditBox from './EditBox';

import styles from './EditBox.css';

const propTypes = {
  fields: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const ScheduleBox = ({ fields, onChange }) => (
  <div className={styles.generalBox}>
    <EditBox
      title={'Schedule'}
      fields={fields}
      onChange={(field, value) => onChange(field, value)}
    />
  </div>
);

ScheduleBox.propTypes = propTypes;

export default ScheduleBox;
