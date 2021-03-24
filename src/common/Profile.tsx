import React from 'react';
import styles from './Profile.module.scss';
import { MemberType } from '../mockData';
import defaultAvatar from '../img/default.png'

function Profile (props: ProfileProps) {

    return (
        <div className={styles.profileCard}>
            <div>
                <img
                    src={props.member.avatar || defaultAvatar} 
                    className={styles.profileImg}
                />
            </div>
            <div>
                <h3 className={styles.name}>
                    {`${props.member.firstName} ${props.member.lastName[0]}`}
                </h3>
            </div>
        </div>
    );

}

type ProfileProps = {
    member: MemberType,
}

export default Profile;