import React from 'react';
import styles from './EditScreen.css';

import EditBox from '../EditBox/EditBox';


const EditScreen = () => (
  <div className={styles.editScreen}>
    <h2 className={styles.title}>Minifestival 2017</h2>
    <div className={styles.editContainer}>
      <EditBox isBig />
      <EditBox isBig />
      <EditBox isBig />
    </div>
  </div>
);

export default EditScreen;
