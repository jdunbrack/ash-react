import React from 'react';
import styles from './Feature.module.scss';
import divider from '../../../img/divider.png'

const Feature = (props: FeatureProps) => {
    return (
        <div
            className={styles.feature}
        >
            <img
                src={props.image} 
                className={styles.featureImg}
            />
            <h2>
                {props.title}
            </h2>
            <img src={divider} />
            <p>
                {props.description}
            </p>
        </div>
    );
}

type FeatureProps = {
    title: string,
    image: string,
    description: string,
}

export default Feature;