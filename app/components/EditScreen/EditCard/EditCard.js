import React, { PropTypes } from 'react';
import styles from './EditCard.css';

import TextField from './InputFields/TextField/TextField';
import CloseButton from './CloseButton';

const propTypes = {
  fields: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  removeCard: PropTypes.func,
  showCloseButton: PropTypes.bool,
};

const EditCard = ({ fields, title, onChange, showCloseButton = false, removeCard }) => {
  // Transforms { myKey: 'myValue' } to [{ key: 'myKey', value: 'myValue'}]
  const transformedFields = Object.keys(fields).map(
    fieldName => ({ key: fieldName, value: fields[fieldName] })
  );

  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {
        showCloseButton &&
        <CloseButton
          handleOnClick={removeCard}
          className={styles.closeButton}
        />
      }
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
