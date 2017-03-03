import React from 'react';
import styles from './EditBox.css';

import EditField from './EditField';

const EditBox = () => (
  <div className={styles.boxWrapper}>
    <h3 className={styles.boxTitle}>Act #1</h3>
    <div>
      <EditField label="Name" value="Gravity Gravity Gravity Gravity Gravity Gravity Gravity Gravity Gravity Gravity Gravity s" onChange={console.log} />
      <EditField label="Description" value="von Sara Bareilles" onChange={console.log} />
      <EditField label="Length" value="5 minutes" onChange={console.log} />
      <EditField label="Requirements" value="1 HH, Piano" onChange={console.log} />
      <EditField label="Artist" value="Rebecca Schönknecht" onChange={console.log} />
    </div>
  </div>
);

export default EditBox;
