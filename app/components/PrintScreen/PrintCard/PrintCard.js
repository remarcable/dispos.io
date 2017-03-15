import React, { PropTypes } from 'react';

import styles from './PrintCard.css';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  requirements: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
};

const PrintCard = ({ id, title, description, length, artist, requirements }) => (
  <div className={styles.printCardWrapper}>
    <table className={styles.printCard}>
      <tbody>
        <tr className={styles.topRow}>
          <td>{length}</td>
          <td />
          <td>start 19:05</td>
          <td>end 19:08</td>
        </tr>
        <tr>
          <td className={styles.id}>#{id}</td>
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
