import React, { Fragment } from 'react';

import Icon from './../Icons/Icon';

import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <Fragment>
            <header className="d-flex align-items-center">
                <Icon icon="dashboard" width={20} />
                <h5 className="mb-0 ml-2">Dashboard</h5>
            </header>
            <div className={styles.grid}>
                <div className={styles.section}>section 1</div>
                <div className={styles.section2}>section 2</div>
                <div className={styles.section3}>section 3</div>
                <div className={styles.section4}>section 4</div>
                <div className={styles.section5}>section 5</div>
                <div className={styles.section6}>section 6</div>
                <div className={styles.section7}>section 7</div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
