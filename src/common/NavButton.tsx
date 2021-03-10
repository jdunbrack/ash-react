import React from 'react';
import styles from './NavButton.module.scss';
import classnames from 'classnames';
import { type } from 'os';

const NavButton = (props: NavButtonProps) => {
    return (
        <a
            className={classnames({
                [`${styles.navButton}`]: true,
                'vertical': props.vertical
            })}
            href={props.href}
            onClick={props.onClick}
        >
            {props.label}
        </a>
    );
}

type NavButtonProps = {
    vertical?: boolean,
    label: string,
    href: string,
    onClick?: () => void,
}

export default NavButton;