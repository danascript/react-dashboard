import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProfitAmount.module.css';

const ProfitAmount = ({ amount }) => <p className={styles.amount}>${amount}K</p>;

export default ProfitAmount;

ProfitAmount.propTypes = {
    amount: PropTypes.string.isRequired,
};
