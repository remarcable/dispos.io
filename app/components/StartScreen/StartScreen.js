import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BigLogo from '../Logo/BigLogo';
import styles from './StartScreen.css';

import { setExampleSheet } from '../../actions';

const propTypes = {
  openFile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  openFile: () => dispatch(setExampleSheet()),
});

const StartScreen = ({ openFile }) => (
  <div className={styles.startScreen}>
    <BigLogo />
    <div className={styles.buttonWrapper}>
      <button className={styles.newFile} onClick={console.log}>New Dispo</button>
      <button className={styles.openFile} onClick={openFile}>Open Dispo</button>
    </div>
  </div>
);

StartScreen.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps,
)(StartScreen);
