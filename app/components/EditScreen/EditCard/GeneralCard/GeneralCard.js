import React, { PropTypes } from 'react';
import EditCard from '../EditCard';

import styles from '../EditCard.css';

const propTypes = {
  fields: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const GeneralCard = ({ fields, onChange }) => (
  <div className={styles.generalCard}>
    <EditCard
      title={'General'}
      fields={fields}
      onChange={(field, value) => onChange(field, value)}
    />
  </div>
);

GeneralCard.propTypes = propTypes;

export default GeneralCard;
