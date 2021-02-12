import React from 'react';
import HeaderBar from '../common/HeaderBar';
import NavButton from '../common/NavButton';
import Modal from "../common/modal/Modal";

export default class Landing extends React.Component {
    constructor(props: Object) {
        super(props);
    }

    render() {
        return(
            <div>
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
                    />
                </HeaderBar>
                <Modal size={"small"}>
                    <h1>Peekaboo!</h1>
                </Modal>
            </div>
        )
    }
}

// type LandingProps {
//     // account: User,  - User type
// }

