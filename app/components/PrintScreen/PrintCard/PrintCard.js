import React, { PropTypes } from 'react';

import styles from './PrintCard.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  requirements: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
};

const PrintCard = ({ title, description, length, artist, requirements }) => (
  <div className={styles.printCardWrapper}>
    <table className={styles.printCard}>
      <tbody>
        <tr className={styles.topRow}>
          <td>{length}</td>
          <td />
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className={styles.id}>#</td>
          <td className={styles.title}>
            {title}
            <br />
            <span className={styles.description}>{description}</span>
          </td>
          <td>{requirements}</td>
          <td>{artist}</td>
        </tr>
        <tr>
          <td colSpan="4" />
        </tr>
      </tbody>
    </table>
  </div>
);

PrintCard.propTypes = propTypes;

export default PrintCard;
