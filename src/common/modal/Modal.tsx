import React from 'react';
import styles from './Modal.module.scss';
import classnames from "classnames";

export default class Modal extends React.Component<ModalProps, ModalState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible || false,
            size: this.props.size || "small",
        }
    }

    toggleModal() {
        this.setState({visible: !this.state.visible});
    }

    render() {
        return (
            <div
                className={classnames(
                    this.styles.modal,
                    this.state.size
                )}
            >
                <i
                    className={"far fa-times-circle"}
                    style={{float: "right"}}
                    onClick={this.toggleModal}
                />
                {this.props.children}
            </div>            
        )
    }
}

type ModalState = {
    visible?: boolean,
    size: "small" | "medium" | "large";
}

type ModalProps = {
    ...ModalState
}
