import React from 'react';
import styles from './NavButton.module.scss';
import classnames from 'classnames';
import { type } from 'os';

function NavButton (props: NavButtonProps) {
    return (
        <a
            className={classnames({
                [`${styles.navButton}`]: true,
                'vertical': props.vertical
            })}
            href={props.href}
        >
            {props.label}
        </a>
    );
}

type NavButtonProps = {
    vertical?: boolean,
    label: string,
    href: string,
}

export default NavButton;