import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icons/Icon';

import styles from './SingleProductTrend.module.css';

const SingleProductTrend = ({ percentage, isUpTrend }) => (
    <p className={`${styles.trend} ${isUpTrend && styles.uptrend}`}>
        <Icon classes={`mr-4 ${styles.icon} ${isUpTrend && styles.uptrendFill}`} icon="downtrend" />
        {percentage} %
    </p>
);

export default SingleProductTrend;

SingleProductTrend.propTypes = {
    percentage: PropTypes.string.isRequired,
    isUpTrend: PropTypes.bool,
};

SingleProductTrend.defaultProps = {
    isUpTrend: false,
};
