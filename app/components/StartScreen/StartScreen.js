import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BigLogo from '../Logo/BigLogo';
import styles from './StartScreen.css';

import { setEmptySheet, openFile } from '../../actions';

const propTypes = {
  newFile: PropTypes.func.isRequired,
  openFile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  newFile: () => dispatch(setEmptySheet()),
  openFile: () => dispatch(openFile()),
});

const StartScreen = ({ newFile, openFile }) => (
  <div className={styles.startScreen}>
    <BigLogo />
    <div className={styles.buttonWrapper}>
      <button className={styles.newFile} onClick={newFile}>New Dispo</button>
      <button className={styles.openFile} onClick={openFile}>Open Dispo</button>
    </div>
  </div>
);

StartScreen.propTypes = propTypes;

export default connect(
  null,
  mapDispatchToProps,
)(StartScreen);
