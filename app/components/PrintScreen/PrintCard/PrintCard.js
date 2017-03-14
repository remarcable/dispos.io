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
  <div className={styles.tableWrapper}>
    <table className={styles.printTable}>
      <tbody>
        <tr>
          <td className={styles.id}>#{id}</td>
          <td className={styles.title}>{title} <br /> <span>{description}</span></td>
          <td className={styles.requirements}>{requirements}</td>
          <td className={styles.artist}>{artist}</td>
        </tr>
        <tr>
          <td colSpan="4" className={styles.details}>This is a very funny detail, just in case.</td>
        </tr>
      </tbody>
    </table>
  </div>
);

PrintCard.propTypes = propTypes;

export default PrintCard;
