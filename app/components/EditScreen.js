import React from 'react';
import Logo from './Logo';
import styles from './EditScreen.css';


const StartScreen = () => (
  <div className={styles.editScreen}>
    <Logo isTiny />
    <h1>edit</h1>
  </div>
);

export default StartScreen;
