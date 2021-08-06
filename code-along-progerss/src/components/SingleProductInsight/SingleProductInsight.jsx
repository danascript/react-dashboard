import React from 'react';
import PropTypes from 'prop-types';

import Icon from './../Icons/Icon';

import styles from './SingleProductInsight.module.css';

const SingleProductInsight = ({ amount, icon }) => (
    <h4 className={styles.amount}>
        <Icon classes="mr-4" icon={icon} />
        {amount}
    </h4>
);

export default SingleProductInsight;

SingleProductInsight.propTypes = {
    amount: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};
