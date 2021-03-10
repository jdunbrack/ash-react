import React from 'react';
import HeaderBar from '../common/HeaderBar';
import NavButton from '../common/NavButton';
import Modal from "../common/modal/Modal";
import LandingSplash from './LandingSplash';
import About from './about/About';
import LoginRegister from './LoginRegister';
import { type } from 'os';

export default class Landing extends React.Component<LandingProps, LandingState> {
    constructor(props: Object) {
        super(props);
        this.state = {
            modalVisible: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ modalVisible: !this.state.modalVisible })
    }

    render() {
        return(
            <>
                <HeaderBar branding>
                    <NavButton
                        label="Home"
                        href="#"
                    />
                    <NavButton
                        label="About"
                        href="#"
                    />
                    <NavButton
                        label="Log In"
                        href="#"
                        onClick={this.toggleModal}
                    />
                </HeaderBar>
                <LandingSplash />
                <Modal
                    visible={this.state.modalVisible}
                    toggleModal={this.toggleModal}
                >
                    <LoginRegister />
                </Modal>
                <About />
            </>
        )
    }
}

type LandingProps = {
    account?: Object,
}

type LandingState = {
    modalVisible: boolean,
}

