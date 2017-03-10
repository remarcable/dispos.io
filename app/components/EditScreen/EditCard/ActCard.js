import React, { PropTypes } from 'react';
import EditCard from './EditCard';

import styles from './EditCard.css';

const propTypes = {
  fields: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const ActCard = ({ fields, id, onChange }) => {
  const title = `Act #${id}`;
  const index = id - 1;

  return (
    <div className={styles.actCard}>
      <EditCard
        title={title}
        fields={fields}
        onChange={(field, value) => onChange(index, field, value)}
      />
    </div>
  );
};

ActCard.propTypes = propTypes;

export default ActCard;
