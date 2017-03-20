import React, { PropTypes } from 'react';

import styles from './PageNumbers.css';

const propTypes = {
  howMany: PropTypes.number.isRequired,
};

const PageNumbers = ({ howMany }) => (
  <div className={styles.pageNumberWrapper}>
    {/* Small hack / quickfix to add pagenumbers. Might break if first page is spread over mul-
        tiple pages or one / more of the boxes have a different height  */}
    {/* See https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n#answer-33352604 */}
    {
        [...Array(howMany).keys()].map((e, index) => (
          <div key={index} className={styles.pageNumber} /> // eslint-disable-line
      ))
      }
  </div>
  );

PageNumbers.propTypes = propTypes;

export default PageNumbers;
