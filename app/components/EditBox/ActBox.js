import React from 'react';
import EditBox from './EditBox';

import styles from './EditBox.css';

const ActBox = ({ fields, id }) => {
  const title = `Act #${id}`;

  return (
    <div className={styles.actBox}>
      <EditBox
        title={title}
        fields={fields}
      />
    </div>
  );
};

export default ActBox;
