import React, { PropTypes } from 'react';
import styles from './EditBox.css';

import EditField from './EditField';

const propTypes = {
  fields: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const EditBox = ({ fields, title, onChange }) => {
  // Transforms { myKey: 'myValue' } to [{ key: 'myKey', value: 'myValue'}]
  const transformedFields = Object.keys(fields).map(
    fieldName => ({ key: fieldName, value: fields[fieldName] })
  );

  return (
    <div className={styles.boxWrapper}>
      <h3 className={styles.boxTitle}>{title}</h3>
      <div>
        {
          transformedFields.map(field => (
            <EditField
              key={field.key}
              label={field.key}
              value={field.value}
              onChange={val => onChange(field.key, val)}
            />
          ))
        }
      </div>
    </div>
  );
};

EditBox.propTypes = propTypes;

export default EditBox;
