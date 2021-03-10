import React from 'react';
import styles from './LoginRegister.module.scss';
import classnames from 'classnames';

export default class LoginRegister extends React.Component<LoginRegisterProps, LoginRegisterState> {
    constructor(props: LoginRegisterProps) {
        super(props);
        this.state = {
            registration: false,
            email: '',
            firstName: '',
            lastName: '',
            groupId: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.passwordVerify = this.passwordVerify.bind(this);
    }

    handleChange (e: React.ChangeEvent<HTMLInputElement>) {
        let target = e.target as HTMLInputElement;
        this.setState({...this.state, [target.id]: target.value })
    }

    handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        if (this.state.email == "testing@asortedhome.com" && passwordInput && passwordInput.value == "Testing123") {
            window.location.assign('/dash')
        }
    }

    handleRegister (e: React.MouseEvent<HTMLElement>) {
        e.preventDefault()
        this.setState({ registration: !this.state.registration });
    }

    passwordVerify (e: React.ChangeEvent<HTMLInputElement>) {
        const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

        const pw = document.getElementById('password') as HTMLInputElement;
        const pwConf = document.getElementById('passwordConfirm') as HTMLInputElement;
        const warning = document.getElementById('passwordWarn') as HTMLParagraphElement;

        if (!pw || !pwConf || !warning) {
            return;
        }

        if (pw.value != pwConf.value) {
            warning.innerText = "Passwords do not match!";
        } else if (!PASSWORD_REGEX.test(pwConf.value)) {
            warning.innerText = "Requirements: minimum 8 characters with an uppercase letter, lowercase letter, and number."
        } else {
            warning.innerText = "";
        }
    }

    render () {
        return (
            <form
                onSubmit={this.handleSubmit}
                className={classnames(
                    styles.form,
                    { [styles.register]: this.state.registration }
                )}>
                <label htmlFor="email">
                    Email:
                    <input
                        id="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        id="password"
                        type="password"
                    />
                </label>

                { this.state.registration && 
                    <>
                    <label htmlFor="passwordConfirm">
                        Password (confirm):
                        <input
                            id="passwordConfirm"
                            type="password"
                            onChange={this.passwordVerify}
                        />
                    </label>
                    <p id="passwordWarn" className={styles.passwordWarn}></p>
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            id="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="lastName">
                        Last Name:
                        <input
                            id="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="groupId">
                        Group ID (leave blank if none):
                        <input
                            id="groupId"
                            type="text"
                            value={this.state.groupId}
                            onChange={this.handleChange}
                        />
                    </label>
                    </>
                }

                <input
                    type="submit"
                    value="Submit"
                    className={styles.buttonInput}
                />
                <button
                    className={styles.buttonInput}
                    onClick={this.handleRegister}
                >
                    { this.state.registration ? "Back to Login" : "Registration" }
                </button>
            </form>
        )
    }
}

type LoginRegisterProps = {
    registration?: boolean,
    email?: string,
}

type LoginRegisterState = {
    registration: boolean,
    email?: string,
    firstName?: string,
    lastName?: string,
    groupId?: string,
}