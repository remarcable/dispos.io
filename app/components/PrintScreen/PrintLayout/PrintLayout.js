import React, { PropTypes } from 'react';

import PageNumbers from '../PageNumbers/PageNumbers';
import styles from './PrintLayout.css';


const propTypes = {
  headerLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  headerMiddle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  headerRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  children: PropTypes.element.isRequired,
  pageNumberCount: PropTypes.number,
};

const defaultProps = {
  headerLeft: '',
  headerMiddle: '',
  headerRight: '',
  footer: '',
  pageNumberCount: 0,
};

const PrintLayout = ({
  headerLeft,
  headerMiddle,
  headerRight,
  children,
  footer,
  pageNumberCount
}) => (
  <div className={styles.printLayoutWrapper}>
    <PageNumbers howMany={pageNumberCount} />

    <table className={styles.printLayout}>
      <thead className={styles.pageHeader}>
        <tr className={styles.pageHeaderContent}>
          <td className={styles.left}>
            {headerLeft}
          </td>
          <td className={styles.middle}>
            {headerMiddle}
          </td>
          <td className={styles.right}>
            {headerRight}
          </td>
        </tr>
      </thead>
      <tbody className={styles.pageContent}>
        <tr>
          <td colSpan="3">
            {children}
          </td>
        </tr>
      </tbody>
      <tfoot className={styles.pageFooter}>
        <tr className={styles.pageFooterContent}>
          <td colSpan="3">
            {footer}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
);

PrintLayout.propTypes = propTypes;
PrintLayout.defaultProps = defaultProps;


export default PrintLayout;
