import React, { PropTypes } from 'react';

import styles from './AddCard.css';

const propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

const AddCard = ({ handleOnClick }) => (
  <button className={styles.addAct} onClick={handleOnClick}>
    <div>
      <PlusSymbol /> Add
    </div>
  </button>
  );

const PlusSymbol = () => (
  <span className={styles.plus}><span>+</span></span>
);

AddCard.propTypes = propTypes;

export default AddCard;
