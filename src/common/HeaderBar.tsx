import React from 'react';
import styles from './HeaderBar.module.scss';
import Brand from '../img/asortedhome.svg';

function HeaderBar ({branding, children}: HeaderProps) {
    return (
        <div
            className={styles.header}
        >
            {branding && 
                <img src={Brand} className={styles.brand} alt="A Sorted Home Logo" />
            }
            <div style={{width: '60%'}} />
            {children}
        </div>
    )
}

type HeaderProps = {
    children: React.ReactNode,
    branding?: boolean,
}

export default HeaderBar;