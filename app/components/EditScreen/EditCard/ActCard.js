import React, { PropTypes } from 'react';
import EditCard from './EditCard';

import styles from './EditCard.css';

const propTypes = {
  fields: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
};

const ActCard = ({ fields, index, onChange, removeCard }) => {
  const title = <span className={styles.countedAct}>Act</span>;

  return (
    <div className={styles.actCard}>
      <EditCard
        title={title}
        showCloseButton
        fields={fields}
        onChange={(field, value) => onChange(index, field, value)}
        removeCard={removeCard}
      />
    </div>
  );
};

ActCard.propTypes = propTypes;

export default ActCard;
