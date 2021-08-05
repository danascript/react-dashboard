import React from 'react';

import Icon from './../Icons/Icon';

import styles from './Card.module.css';

const Card = ({ headline, children }) => {
    return (
        <div className={styles.card}>
            <div className="d-flex justify-content-between align-items-baseline mb-4">
                <h6 className={`${styles.headline} mb-0`}>{headline}</h6>
                <Icon icon="options" classes={'ml-2'} width={3} />
            </div>
            <div className="d-flex align-items-center h-100">{children}</div>
        </div>
    );
};

export default Card;
