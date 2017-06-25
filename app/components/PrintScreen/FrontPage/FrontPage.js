import React, { PropTypes } from 'react';

import transformFields from '../../../utils/transformField';

import Section from './Section';

import styles from './FrontPage.css';

const propTypes = {
  general: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
  }).isRequired,
  additionalDetails: PropTypes.object.isRequired,
};

const FrontPage = ({ general, additionalDetails }) => (
  <div className={styles.frontPage}>
    <h1 className={styles.title}>{general.title}</h1>
    <h2 className={styles.date}>{general.date}</h2>

    <Section
      title="General"
      content={general}
    />

    {transformFields(additionalDetails).map((item, i) => (
      <Section
        key={i}
        title={item.key}
        content={item.value}
      />
    ))}

  </div>
  );

FrontPage.propTypes = propTypes;

export default FrontPage;
