import React, { PropTypes } from 'react';

import transformFields from '../../../utils/transformField';

import SectionField from './SectionField';

import styles from './FrontPage.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

const Section = ({ title, content }) => (
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}>{title}</h3>
    {typeof content === 'string'
    ?
      <SectionField>
        {content}
      </SectionField>
    :
    transformFields(content).map((field, i) => (
      <SectionField
        key={i}
        label={field.key}
      >
        {field.value}
      </SectionField>
    ))}
  </div>
  );

Section.propTypes = propTypes;

export default Section;
