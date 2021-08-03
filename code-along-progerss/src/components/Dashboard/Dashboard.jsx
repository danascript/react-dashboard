import React, { Fragment } from 'react';

import Card from './../Card';
import Icon from './../Icons/Icon';
import SingleProduct from '../SingleProduct';

import airPodsImg from './../../assets/airpods.jpg';

import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <Fragment>
            <header className="d-flex align-items-center">
                <Icon icon="dashboard" width={20} />
                <h5 className="mb-0 ml-2">Dashboard</h5>
            </header>
            <div className={styles.grid}>
                <div className={styles.section}>
                    <Card headline="Best Selling Product">
                        <SingleProduct
                            imgSrc={airPodsImg}
                            imgAlt="AirPods Pro"
                            amount="12.545"
                            percentage="3.54"
                            icon="usd"
                            isUpTrend
                        />
                    </Card>
                </div>
                <div className={styles.section2}>
                    <Card headline="Most Viewed Product" />
                </div>
                <div className={styles.section3}>
                    <Card headline="Most Profitable Sections" />
                </div>
                <div className={styles.section4}>
                    <Card headline="Most Profitable Categories" />
                </div>
                <div className={styles.section5}>
                    <Card headline="Top Selling Products" />
                </div>
                <div className={styles.section6}>
                    <Card headline="Most Viewed Products" />
                </div>
                <div className={styles.section7}>
                    <Card headline="General Statistics" />
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;
