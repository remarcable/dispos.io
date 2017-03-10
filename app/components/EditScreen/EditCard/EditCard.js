import React, { PropTypes } from 'react';
import styles from './EditCard.css';

import TextField from './InputFields/TextField/TextField';

const propTypes = {
  fields: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const EditCard = ({ fields, title, onChange }) => {
  // Transforms { myKey: 'myValue' } to [{ key: 'myKey', value: 'myValue'}]
  const transformedFields = Object.keys(fields).map(
    fieldName => ({ key: fieldName, value: fields[fieldName] })
  );

  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div>
        {
          transformedFields.map(field => (
            <TextField
              isMultiLine
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

EditCard.propTypes = propTypes;

export default EditCard;
