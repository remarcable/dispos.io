import React from 'react';
import styles from './StartScreen.css';


const StartScreen = () => (
  <div className={styles.startScreen}>
    <h1>dispos.io</h1>
    <button className={styles.openFile} onClick={console.log}>Open File</button>
  </div>
);

export default StartScreen;
