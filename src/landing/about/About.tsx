import React from 'react';
import Feature from './feature/Feature';
import styles from './About.module.scss';
import imgCommunicate from '../../img/communicate.jpg';
import imgPlanning from '../../img/plan.jpg';
import imgTracking from '../../img/track.jpg';

const About = () => {
    return (
        <div className={styles.about}>
            <Feature
                title={'Communication'}
                image={imgCommunicate}
                description={'Stay in touch'}
            />
            <Feature
                title={'Planning'}
                image={imgPlanning}
                description={'Stay on the same page'}
            />
            <Feature
                title={'Tracking'}
                image={imgTracking}
                description={'Keep track of who has done what'}
            />
        </div>
    );
}

export default About;