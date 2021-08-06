import React, { Fragment } from 'react';

import Card from './../Card';
import Icon from './../Icons/Icon';
import SingleProduct from '../SingleProduct';
import Ranking from '../Ranking';
import Stats from '../Stats';

import airPodsImg from './../../assets/airpods.jpg';
import appleImacImg from './../../assets/imac.jpg';

import mostProfitableGoods from './../../data/profitableSections.json';
import mostProfitableCategories from './../../data/profitableCategories.json';
import topSellingProducts from './../../data/topSellingProducts.json';
import topViewedProducts from './../../data/topViewedProducts.json';

import styles from './Dashboard.module.css';

const Dashboard = () => (
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
                <Card headline="Most Viewed Product">
                    <SingleProduct
                        imgSrc={appleImacImg}
                        imgAlt="Apple Pro Display"
                        amount="8.357"
                        percentage="1.23"
                        icon="eye"
                    />
                </Card>
            </div>
            <div className={styles.section3}>
                <Card headline="Most Profitable Sections">
                    <Ranking data={mostProfitableGoods} />
                </Card>
            </div>
            <div className={styles.section4}>
                <Card headline="Most Profitable Categories">
                    <Ranking data={mostProfitableCategories} />
                </Card>
            </div>
            <div className={styles.section5}>
                <Card headline="Top Selling Products">
                    <Ranking data={topSellingProducts} />
                </Card>
            </div>
            <div className={styles.section6}>
                <Card headline="Most Viewed Products">
                    <Ranking data={topViewedProducts} />
                </Card>
            </div>
            <div className={styles.section7}>
                <Card headline="General Statistics">
                    <Stats />
                </Card>
            </div>
        </div>
    </Fragment>
);

export default Dashboard;
