import React from 'react';
import BigLogo from './Logo/BigLogo';
import styles from './StartScreen.css';


const StartScreen = () => (
  <div className={styles.startScreen}>
    <BigLogo />
    <button className={styles.openFile} onClick={console.log}>Open File</button>
  </div>
);

export default StartScreen;
