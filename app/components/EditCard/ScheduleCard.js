import React, { PropTypes } from 'react';
import EditCard from './EditCard';

import styles from './EditCard.css';

const propTypes = {
  fields: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const ScheduleCard = ({ fields, onChange }) => (
  <div className={styles.generalCard}>
    <EditCard
      title={'Schedule'}
      fields={fields}
      onChange={(field, value) => onChange(field, value)}
    />
  </div>
);

ScheduleCard.propTypes = propTypes;

export default ScheduleCard;
