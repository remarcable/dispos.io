import React, { PropTypes } from 'react';
import EditBox from './EditBox';

import styles from './EditBox.css';

const propTypes = {
  fields: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const ActBox = ({ fields, id, onChange }) => {
  const title = `Act #${id}`;
  const index = id - 1;

  return (
    <div className={styles.actBox}>
      <EditBox
        title={title}
        fields={fields}
        onChange={(field, value) => onChange(index, field, value)}
      />
    </div>
  );
};

ActBox.propTypes = propTypes;

export default ActBox;
