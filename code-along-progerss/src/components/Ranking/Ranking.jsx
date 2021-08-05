import React from 'react';

import Icon from '../Icons/Icon';
import ProfitAmount from '../ProfitAmount';

import styles from './Ranking.module.css';

const Ranking = ({ data }) => {
    return (
        <div className={`w-100`}>
            {data.map((item, index) => (
                <div className={`d-flex align-items-center justify-content-between mb-4 ${styles.ranking}`}>
                    <div className="d-flex align-items-center">
                        <div className={`mr-2 ${styles.circle}`}>{index + 1}</div>
                        <p className="mb-0 font-weight-bold">{item.name}</p>
                    </div>

                    <div className="d-flex">
                        {item.upTrend !== undefined && (
                            <Icon
                                color={item.upTrend ? '#2dc1579a' : '#c12d2d9a'}
                                classes={`mr-2 ${!item.upTrend && styles.downTrend}`}
                            />
                        )}
                        <ProfitAmount amount={item.profit} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Ranking;
