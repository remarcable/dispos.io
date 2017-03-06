import React, { PropTypes } from 'react';
import styles from './EditScreen.css';

import GeneralBox from '../EditBox/GeneralBox';
import ActBox from '../EditBox/ActBox';

const propTypes = {
  sheet: PropTypes.shape({
    details: PropTypes.shape({
      general: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        client: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
      }).isRequired,
      schedule: PropTypes.shape({
        start: PropTypes.string.isRequired,
        rehearsal: PropTypes.string,
        construction: PropTypes.string,
        deconstruction: PropTypes.string,
      }).isRequired,
    }).isRequired,
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fields: PropTypes.shape(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string,
          }).isRequired,
        ).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

const EditScreen = ({ sheet: { details, actions } }) => (
  <div className={styles.editScreen}>
    <h2 className={styles.title}>{details.general.title}</h2>
    <div className={styles.editContainer}>
      <GeneralBox
        fields={details.general}
      />

      {
        actions.map(action => (
          <ActBox
            fields={action.fields}
            key={action.id}
            id={action.id}
          />
        ))
      }
    </div>
  </div>
);

EditScreen.propTypes = propTypes;

export default EditScreen;
