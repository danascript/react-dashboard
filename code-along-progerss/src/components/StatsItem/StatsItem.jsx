import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatsItem.module.css';

const StatsItem = ({ number, description }) => (
    <div>
        <h2 className={styles.number}>{number}</h2>
        <p className={styles.text}>{description}</p>
    </div>
);

export default StatsItem;

StatsItem.propTypes = {
    number: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
