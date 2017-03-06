import React, { PropTypes } from 'react';
import styles from './EditBox.css';

import EditField from './EditField';

const propTypes = {
  fields: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

const EditBox = ({ fields, title }) => {
  // Transforms { myKey: 'myValue' } to [{ label: 'myKey', value: 'myValue'}]
  const transformedFields = Object.keys(fields).map(
    fieldName => ({ label: fieldName, value: fields[fieldName] })
  );

  return (
    <div className={styles.boxWrapper}>
      <h3 className={styles.boxTitle}>{title}</h3>
      <div>
        {
          transformedFields.map(field => (
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
};

EditBox.propTypes = propTypes;

export default EditBox;
