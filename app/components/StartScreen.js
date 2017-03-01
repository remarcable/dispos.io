import React from 'react';
import Logo from './Logo';
import styles from './StartScreen.css';


const StartScreen = () => (
  <div className={styles.startScreen}>
    <Logo />
    <button className={styles.openFile} onClick={console.log}>Open File</button>
  </div>
);

export default StartScreen;
