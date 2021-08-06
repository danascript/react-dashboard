import React from 'react';
import PropTypes from 'prop-types';

import { LIGHT_GREEN, LIGHT_RED } from '../../shared/constants';

import Icon from '../Icons/Icon';
import ProfitAmount from '../ProfitAmount';

import styles from './RankingItemProfit.module.css';

const RankingItemProfit = ({ upTrend, profit }) => (
    <div className="d-flex">
        {upTrend !== undefined && (
            <Icon color={upTrend ? LIGHT_GREEN : LIGHT_RED} classes={`mr-2 ${!upTrend && styles.downTrend}`} />
        )}
        <ProfitAmount amount={profit} />
    </div>
);

export default RankingItemProfit;

RankingItemProfit.propTypes = {
    upTrend: PropTypes.bool,
    profit: PropTypes.string.isRequired,
};
