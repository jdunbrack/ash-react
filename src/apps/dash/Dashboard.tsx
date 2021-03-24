import React from 'react';
import { mockMembers, MemberType } from '../../mockData';
import Profile from '../../common/Profile';

export default class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            member: {
                ...mockMembers[0]
            },
            memberId: mockMembers[0].id
        }
    }

    render() {
        return (
            <>
            {
                mockMembers.forEach((member) => {
                    <Profile member={member} />
                })
            }
            </>
        );
    }

}

type DashboardProps = {
    memberId?: number,
}

type DashboardState = {
    memberId: number,
    member: MemberType,
}