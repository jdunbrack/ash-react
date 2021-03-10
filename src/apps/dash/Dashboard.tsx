import React from 'react';

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            user: {
                email: "testing@asortedhome.com",
                firstName: "Jordan",
                lastName: "Dunbrack",
                groupId: "00000"
            },
            userId: "0"
        }
    }

    render() {
        return (
            <div>Dashboard</div>
        );
    }

}

type DashboardProps = {
    userId: string,
}

type DashboardState = {
    userId: string,
    user: object,
}