import React from 'react';
import BigLogo from './Logo/BigLogo';
import styles from './StartScreen.css';


const StartScreen = () => (
  <div className={styles.startScreen}>
    <BigLogo />
    <div className={styles.buttonWrapper}>
      <button className={styles.newFile} onClick={console.log}>New File</button>
      <button className={styles.openFile} onClick={console.log}>Open File</button>
    </div>
  </div>
);

export default StartScreen;
