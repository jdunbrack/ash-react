import React from 'react';
import styles from './Modal.module.scss';
import classnames from "classnames";
import Backdrop from './Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Modal = (props: ModalProps) => {

    if (!props.visible) {
        return null;
    }

    return (
        <>
        <Backdrop
            show={props.visible}
            clickHandler={props.toggleModal} // can click x or modal backdrop to close
        />
        <div className={styles.modal} >
            <div className={styles.iconContainer}>
                <FontAwesomeIcon // use free FontAwesome icons - fontawesome.com
                    icon={faTimes}
                    className={styles.closeIcon}
                    onClick={props.toggleModal}
                />
            </div>
            {props.children}
        </div>
        </>
    )
}

type ModalProps = {
    visible: boolean,
    toggleModal: () => void;
    children?: React.ReactNode,
}

export default Modal;