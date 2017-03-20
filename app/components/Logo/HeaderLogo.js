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
      transitionAppearTimeout={800}
      transitionEnter={false}
      transitionLeave={false}
    >
      {shouldShow &&
        <Logo isTiny />
      }
    </ReactCSSTransitionGroup>
  </div>
);

HeaderLogo.propTypes = propTypes;

export default HeaderLogo;
