import React from 'react';
import PropTypes from 'prop-types';

import RankingItemAsset from '../RankingItemAsset';
import RankingItemProfit from '../RankingItemProfit';

import styles from './RankingItem.module.css';

const RankingItem = ({ name, index, imgName, upTrend, profit }) => (
    <div className={`d-flex align-items-center justify-content-between ${styles.ranking}`}>
        <RankingItemAsset classes={styles.circle} name={name} index={index} imgName={imgName} />
        <RankingItemProfit upTrend={upTrend} profit={profit} />
    </div>
);

export default RankingItem;

RankingItem.propTypes = {
    amount: PropTypes.string,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    imgName: PropTypes.string,
    upTrend: PropTypes.bool,
    profit: PropTypes.string.isRequired,
};
