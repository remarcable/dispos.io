import React from 'react';
import styles from './Home.css';


const Home = () => (
  <div className={styles.startScreen}>
    <h1>dispos.io</h1>
    <button className={styles.openFile} onClick={console.log}>Open File</button>
  </div>
);

export default Home;
