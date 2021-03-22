import React from 'react';
import styles from './Profile.module.scss';

function Profile (props: ProfileProps) {

    return (
        <div className={styles.profileCard}>
            <div>
                <img
                    src={props.member.profile} 
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
    member: Object,
}

export default Profile;