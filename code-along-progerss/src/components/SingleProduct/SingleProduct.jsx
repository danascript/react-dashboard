import React from 'react';

import Icon from './../Icons/Icon';

import styles from './SingleProduct.module.css';

const SingleProduct = ({ imgSrc, imgAlt, amount, percentage, icon, isUpTrend }) => {
    return (
        <div className="d-flex justify-content-between">
            <img className={styles.img} src={imgSrc} alt={imgAlt} />
            <div>
                <h4 className={styles.amount}>
                    <Icon classes="mr-4" icon={icon} />
                    {amount}
                </h4>
                <p className={isUpTrend ? 'text-success' : 'text-danger'}>
                    {/* TODO: import uptrend icon! */}
                    <Icon
                        classes="mr-4"
                        color={isUpTrend ? '#28a745' : '#dc3545'}
                        icon={isUpTrend ? 'stats' : 'downtrend'}
                    />
                    {percentage} %
                </p>
            </div>
        </div>
    );
};

export default SingleProduct;
