import React from 'react';
import styles from './LandingSplash.module.scss';
import splashImg from '../img/balances.png';

const LandingSplash = () => {
    return (
        <div className={styles.splash}>
            <div className={styles.headerContainer}>
                <h1 className={styles.title}>
                    a Sorted Home
                </h1>
                <h2 className={styles.subtitle}>
                    Handling logistics of multi-person living.
                </h2>
            </div>
            <img src={splashImg} className={styles.splashImage} />
        </div>
    );
}

export default LandingSplash;