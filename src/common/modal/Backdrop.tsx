import React from 'react';
import styles from './Modal.module.scss';

export default function Backdrop (props: BackdropProps) {
    return (
        props.show ?
            <div className={styles.backdrop} onClick={props.clickHandler}/>
            : null
    );
}

type BackdropProps = {
    show: boolean,
    clickHandler: (event: React.MouseEvent<HTMLElement>) => void,
};