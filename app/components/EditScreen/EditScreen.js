import React from 'react';
import styles from './EditScreen.css';

import EditBox from '../EditBox/EditBox';


const EditScreen = ({ sheet: { details, actions } }) => (
  <div className={styles.editScreen}>
    <h2 className={styles.title}>{details.title}</h2>
    <div className={styles.editContainer}>
      {
        actions.map(action => (
          <EditBox fields={action.fields} key={action.id} id={action.id} />
        ))
      }
    </div>
  </div>
);

export default EditScreen;
