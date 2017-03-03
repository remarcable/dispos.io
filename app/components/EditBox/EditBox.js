import React from 'react';
import styles from './EditBox.css';

import EditField from './EditField';

const EditBox = ({ fields, id }) => (
  <div className={styles.boxWrapper}>
    <h3 className={styles.boxTitle}>Act #{id}</h3>
    <div>
      {
        fields.map(field => (
          <EditField
            key={field.label}
            label={field.label}
            value={field.value}
            onChange={console.log}
          />
        ))
      }
    </div>
  </div>
);

export default EditBox;
