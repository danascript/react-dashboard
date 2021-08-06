import React from 'react';
import PropTypes from 'prop-types';

import SingleProductTrend from '../SingleProductTrend';
import SingleProductInsight from '../SingleProductInsight';

import styles from './SingleProduct.module.css';

const SingleProduct = ({ imgSrc, imgAlt, amount, percentage, icon, isUpTrend }) => (
    <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
        <img className={styles.img} src={imgSrc} alt={imgAlt} />

        <div className="mt-4 mt-lg-0 align-self-center">
            <SingleProductInsight icon={icon} amount={amount} />
            <SingleProductTrend isUpTrend={isUpTrend} percentage={percentage} />
        </div>
    </div>
);

export default SingleProduct;

SingleProduct.propTypes = {
    amount: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isUpTrend: PropTypes.bool,
    percentage: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
};
