import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Logo from './Logo';
import styles from './Logo.css';
import transitions from './HeaderLogoTransitions.css';

const propTypes = {
  shouldShow: PropTypes.bool.isRequired,
};

const HeaderLogo = ({ shouldShow }) => (
  <div className={styles.logoWrapper}>
    <ReactCSSTransitionGroup
      transitionAppear
      transitionName={transitions}
      transitionAppearTimeout={400}
      transitionEnterTimeout={400}
      transitionLeaveTimeout={300}
    >
      {shouldShow &&
        <Logo isTiny />
      }
    </ReactCSSTransitionGroup>
  </div>
);

HeaderLogo.propTypes = propTypes;

export default HeaderLogo;
