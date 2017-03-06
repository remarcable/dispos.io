import React from 'react';
import EditBox from './EditBox';

import styles from './EditBox.css';

const GeneralBox = ({ fields }) => {
  return (
    <div className={styles.generalBox}>
      <EditBox
        title={'General'}
        fields={fields}
      />
    </div>
  );
};

export default GeneralBox;
