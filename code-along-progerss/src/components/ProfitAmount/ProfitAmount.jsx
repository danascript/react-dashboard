import React from 'react';

import styles from './ProfitAmount.module.css';

const ProfitAmount = ({ amount }) => {
    return <p className={styles.amount}>$ {amount}K</p>;
};

export default ProfitAmount;
