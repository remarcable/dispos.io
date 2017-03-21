import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BigLogo from '../Logo/BigLogo';
import styles from './StartScreen.css';

import { requestNewFile, requestOpenFile } from '../../actions';

const propTypes = {
  newFile: PropTypes.func.isRequired,
  openFile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  // Delaying this dispatch to have full button animation (makes app appear snappier)
  newFile: () => setTimeout(() => dispatch(requestNewFile()), 200),
  openFile: () => setTimeout(() => dispatch(requestOpenFile()), 200),
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
